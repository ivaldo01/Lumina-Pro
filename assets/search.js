const initializePredictiveSearch = root => {
  const searchForm = root.querySelector?.('.header__search');
  const searchInput = searchForm?.querySelector('input[name="q"]');
  if (!searchForm || !searchInput || searchForm.dataset.searchInitialized === 'true') return;
  if (searchForm.dataset.enableSearchSuggestions === 'false') return;
  searchForm.dataset.searchInitialized = 'true';
  searchForm.style.position = 'relative';

  const suggestions = document.createElement('div');
  suggestions.className = 'search-suggestions';
  suggestions.id = searchInput.getAttribute('aria-controls');
  suggestions.hidden = true;
  suggestions.setAttribute('role', 'region');
  suggestions.setAttribute('aria-label', 'Sugestões de pesquisa');

  const loading = document.createElement('div');
  loading.className = 'search-suggestions__loading';
  loading.textContent = 'Carregando…';
  loading.hidden = true;

  const results = document.createElement('div');
  results.className = 'search-suggestions__results';
  results.setAttribute('role', 'list');

  const footer = document.createElement('div');
  footer.className = 'search-suggestions__footer';
  const viewAll = document.createElement('a');
  viewAll.className = 'search-suggestions__view-all';
  viewAll.textContent = 'Ver todos os resultados';
  viewAll.href = '/search';
  footer.appendChild(viewAll);
  suggestions.append(loading, results, footer);
  searchForm.appendChild(suggestions);
  searchInput.setAttribute('aria-expanded', 'false');

  let timer;
  let controller;

  const close = () => {
    suggestions.hidden = true;
    searchInput.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    suggestions.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
  };
  const clearResults = () => results.replaceChildren();

  const safeUrl = value => {
    const url = String(value || '');
    return url.startsWith('/') ? url : '#';
  };

  const renderEmpty = () => {
    clearResults();
    const message = document.createElement('p');
    message.className = 'search-suggestions__empty';
    message.textContent = 'Nenhum produto encontrado';
    results.appendChild(message);
  };

  const renderProducts = products => {
    clearResults();
    const fragment = document.createDocumentFragment();
    products.forEach(product => {
      const link = document.createElement('a');
      link.className = 'search-suggestion-item';
      link.href = safeUrl(product.url);
      link.setAttribute('role', 'listitem');

      const imageUrl = product.featured_image?.url;
      if (typeof imageUrl === 'string' && (imageUrl.startsWith('https://cdn.shopify.com/') || imageUrl.startsWith('//cdn.shopify.com/'))) {
        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = String(product.title || '');
        image.width = 56;
        image.height = 56;
        image.loading = 'lazy';
        link.appendChild(image);
      }

      const content = document.createElement('span');
      content.className = 'search-suggestion-item__content';
      const title = document.createElement('strong');
      title.textContent = String(product.title || '');
      const price = document.createElement('span');
      price.textContent = String(product.price || '');
      content.append(title, price);
      link.appendChild(content);
      fragment.appendChild(link);
    });
    results.appendChild(fragment);
  };

  const search = async query => {
    controller?.abort();
    controller = new AbortController();
    loading.hidden = false;
    clearResults();
    try {
      const endpoint = `/search/suggest?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`;
      const response = await fetch(endpoint, {
        signal: controller.signal,
        headers: { Accept: 'application/json' },
        credentials: 'same-origin'
      });
      if (!response.ok) throw new Error(`Predictive search failed: ${response.status}`);
      const payload = await response.json();
      const products = payload.resources?.results?.products;
      loading.hidden = true;
      Array.isArray(products) && products.length ? renderProducts(products) : renderEmpty();
      viewAll.href = `/search?q=${encodeURIComponent(query)}`;
      open();
    } catch (error) {
      if (error.name === 'AbortError') return;
      loading.hidden = true;
      close();
    }
  };

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    clearTimeout(timer);
    if (query.length < 3) {
      controller?.abort();
      close();
      clearResults();
      return;
    }
    timer = setTimeout(() => search(query), 300);
  });
  searchInput.addEventListener('focus', () => {
    if (results.children.length) open();
  });
  document.addEventListener('click', event => {
    if (!searchForm.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      close();
      searchInput.focus();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => initializePredictiveSearch(document));
document.addEventListener('shopify:section:load', event => initializePredictiveSearch(event.target));
