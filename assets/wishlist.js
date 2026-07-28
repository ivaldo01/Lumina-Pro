/* ==========================================================================
   Wishlist Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const MAX_WISHLIST_ITEMS = 100;
  const text = (value, maxLength = 300) => String(value || '').slice(0, maxLength);
  const productUrl = value => {
    const url = text(value, 500);
    return url.startsWith('/products/') ? url : '';
  };
  const imageUrl = value => {
    const url = text(value, 700);
    return url.startsWith('/') || url.startsWith('https://cdn.shopify.com/') ? url : '';
  };

  function normalizeWishlist(rawWishlist) {
    if (!Array.isArray(rawWishlist)) return [];
    return rawWishlist.slice(0, MAX_WISHLIST_ITEMS).map(item => {
      if (typeof item === 'string' || typeof item === 'number') {
        return { id: text(item, 80), title: '', url: '', image: '', price: '' };
      }
      return {
        id: text(item.id, 80),
        title: text(item.title, 300),
        url: productUrl(item.url),
        image: imageUrl(item.image),
        price: text(item.price, 80)
      };
    }).filter(item => item.id);
  }

  function getWishlist() {
    try {
      return normalizeWishlist(JSON.parse(localStorage.getItem('wishlist')) || []);
    } catch (e) {
      return [];
    }
  }

  function saveWishlist(wishlist) {
    try {
      localStorage.setItem('wishlist', JSON.stringify(normalizeWishlist(wishlist)));
    } catch (error) {
      showToast('Não foi possível salvar sua lista neste navegador', 'error');
    }
  }

  function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => String(item.id) === String(productId));
  }

  function addToWishlist(product) {
    if (!product || !product.id) return;

    const wishlist = getWishlist();
    if (!isInWishlist(product.id)) {
      if (wishlist.length >= MAX_WISHLIST_ITEMS) {
        showToast('Sua lista atingiu o limite de produtos', 'info');
        return;
      }
      wishlist.push(normalizeWishlist([product])[0]);
      saveWishlist(wishlist);
      showToast('Produto adicionado à lista de desejos', 'success');
      updateWishlistButtons();
    }
  }

  function removeFromWishlist(productId) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(item => String(item.id) !== String(productId));
    saveWishlist(wishlist);
    showToast('Produto removido da lista de desejos', 'info');
    updateWishlistButtons();
  }

  function toggleWishlist(productId, productData) {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist({ id: productId, ...productData });
    }
  }

  function updateWishlistButtons() {
    const buttons = document.querySelectorAll('.wishlist-button');
    buttons.forEach(button => {
      const productId = button.dataset.productId;
      const icon = button.querySelector('.wishlist-button__icon');

      if (isInWishlist(productId)) {
        if (icon) {
          icon.setAttribute('fill', '#E74C3C');
          icon.setAttribute('stroke', '#E74C3C');
        }
      } else if (icon) {
        icon.setAttribute('fill', 'none');
        icon.setAttribute('stroke', 'currentColor');
      }
    });
  }

  function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  const wishlistButtons = document.querySelectorAll('.wishlist-button');
  wishlistButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const productId = this.dataset.productId;
      const productData = {
        title: this.dataset.productTitle,
        url: this.dataset.productUrl,
        image: this.dataset.productImage,
        price: this.dataset.productPrice
      };
      toggleWishlist(productId, productData);
    });

    button.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  updateWishlistButtons();

  window.Wishlist = {
    get: getWishlist,
    add: addToWishlist,
    remove: removeFromWishlist,
    toggle: toggleWishlist,
    isInList: isInWishlist
  };
});
