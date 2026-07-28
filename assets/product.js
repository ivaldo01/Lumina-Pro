const initializeProductPage = root => {
  const productPage = root.querySelector?.('.pdp');
  if (!productPage || productPage.dataset.initialized === 'true') return;
  productPage.dataset.initialized = 'true';

  const thumbnails = productPage.querySelectorAll('.pdp__thumb');
  const mainImage = productPage.querySelector('#product-main-image');
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (!mainImage) return;
      const image = thumb.dataset.image;
      if (!image || (!image.startsWith('//') && !image.startsWith('https://'))) return;
      mainImage.src = image;
      if (thumb.dataset.zoom) mainImage.dataset.zoom = thumb.dataset.zoom;
      thumbnails.forEach(item => item.classList.remove('is-active'));
      thumb.classList.add('is-active');
    });
  });

  const quantityInput = productPage.querySelector('#quantity');
  productPage.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', () => {
      if (!quantityInput) return;
      const current = Number.parseInt(quantityInput.value, 10) || 1;
      quantityInput.value = button.dataset.action === 'increase' ? current + 1 : Math.max(1, current - 1);
    });
  });

  const tabs = productPage.querySelectorAll('.product-tabs__button');
  const panels = productPage.querySelectorAll('.product-tabs__panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      panels.forEach(panel => {
        const active = panel.dataset.panel === target;
        panel.hidden = !active;
        panel.classList.toggle('active', active);
        panel.classList.toggle('is-active', active);
      });
    });
  });

  const variantSelect = productPage.querySelector('#variant-select');
  const price = productPage.querySelector('[data-product-price]');
  const comparePrice = productPage.querySelector('[data-product-compare-price]');
  const savings = productPage.querySelector('[data-product-savings]');
  const submit = productPage.querySelector('[data-product-submit]');
  const buyNow = productPage.querySelector('[data-product-buy-now]');

  const updateVariant = () => {
    if (!variantSelect) return;
    const option = variantSelect.options[variantSelect.selectedIndex];
    const available = option.dataset.available === 'true';
    if (price) price.textContent = option.dataset.price || '';
    if (comparePrice) {
      comparePrice.textContent = option.dataset.comparePrice || '';
      comparePrice.hidden = !option.dataset.savings;
    }
    if (savings) {
      savings.textContent = option.dataset.savings ? `Você economiza ${option.dataset.savings}` : '';
      savings.hidden = !option.dataset.savings;
    }
    if (option.dataset.image && mainImage) {
      mainImage.src = option.dataset.image;
      if (option.dataset.zoom) mainImage.dataset.zoom = option.dataset.zoom;
    }
    if (submit) {
      submit.disabled = !available;
      submit.setAttribute('aria-disabled', String(!available));
      const label = submit.querySelector('[data-submit-label]');
      if (label) label.textContent = available ? 'Adicionar ao carrinho' : 'Produto esgotado';
    }
    if (buyNow) {
      buyNow.disabled = !available;
      buyNow.textContent = available ? 'Comprar agora' : 'Produto esgotado';
    }
    const url = new URL(window.location.href);
    url.searchParams.set('variant', option.value);
    window.history.replaceState({}, '', url);
  };

  variantSelect?.addEventListener('change', updateVariant);
};

document.addEventListener('DOMContentLoaded', () => initializeProductPage(document));
document.addEventListener('shopify:section:load', event => initializeProductPage(event.target));
