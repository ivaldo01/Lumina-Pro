/* ==========================================================================
   Wishlist Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  function normalizeWishlist(rawWishlist) {
    if (!Array.isArray(rawWishlist)) return [];
    return rawWishlist.map(item => {
      if (typeof item === 'string' || typeof item === 'number') {
        return { id: String(item), title: '', url: '', image: '', price: '' };
      }
      return {
        id: String(item.id || ''),
        title: item.title || '',
        url: item.url || '',
        image: item.image || '',
        price: item.price || ''
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
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => String(item.id) === String(productId));
  }

  function addToWishlist(product) {
    if (!product || !product.id) return;

    const wishlist = getWishlist();
    if (!isInWishlist(product.id)) {
      wishlist.push({
        id: String(product.id),
        title: product.title || '',
        url: product.url || '',
        image: product.image || '',
        price: product.price || ''
      });
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
