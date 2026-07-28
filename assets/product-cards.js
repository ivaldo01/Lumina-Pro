if (!window.LuminaProductCards) {
  window.LuminaProductCards = true;

  const initializeSpotlightMotion = root => {
    const spotlights = root.querySelectorAll
      ? root.querySelectorAll('[data-spotlight-reveal]:not([data-motion-ready])')
      : [];
    if (!spotlights.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      spotlights.forEach(spotlight => spotlight.classList.add('is-active'));
      return;
    }

    document.documentElement.classList.add('spotlight-motion-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const spotlight = entry.target;
        if (entry.isIntersecting) {
          spotlight.classList.add('is-active');
          spotlight.classList.remove('is-past');
        } else {
          spotlight.classList.remove('is-active');
          spotlight.classList.toggle('is-past', entry.boundingClientRect.top < 0);
        }
      });
    }, { threshold: [0.12, 0.42], rootMargin: '-6% 0px -8%' });

    spotlights.forEach(spotlight => {
      spotlight.dataset.motionReady = 'true';
      observer.observe(spotlight);
    });
  };

  initializeSpotlightMotion(document);
  document.addEventListener('shopify:section:load', event => initializeSpotlightMotion(event.target));

  document.addEventListener('click', async event => {
    const button = event.target.closest('[data-quick-add]');
    if (!button || button.disabled) return;

    const label = button.querySelector('[data-button-label]');
    const originalLabel = label?.textContent || '';
    const variantId = button.dataset.variantId;
    if (!variantId) return;

    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    if (label) label.textContent = 'Adicionando…';

    try {
      const root = window.Shopify?.routes?.root || '/';
      const response = await fetch(`${root}cart/add.js`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: [{ id: Number(variantId), quantity: 1 }] })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.description || 'Não foi possível adicionar o produto.');

      if (label) label.textContent = 'Adicionado ✓';

      const cartResponse = await fetch(`${root}cart.js`, { headers: { Accept: 'application/json' } });
      if (cartResponse.ok) {
        const cart = await cartResponse.json();
        document.querySelectorAll('.cart-badge').forEach(badge => {
          badge.textContent = cart.item_count;
          badge.hidden = cart.item_count === 0;
        });
      }

      document.dispatchEvent(new CustomEvent('cart:updated', { detail: result }));
      setTimeout(() => {
        if (label) label.textContent = originalLabel;
        button.disabled = false;
        button.removeAttribute('aria-busy');
      }, 1600);
    } catch (error) {
      if (label) label.textContent = 'Tente novamente';
      button.disabled = false;
      button.removeAttribute('aria-busy');
      setTimeout(() => {
        if (label) label.textContent = originalLabel;
      }, 1800);
    }
  });
}
