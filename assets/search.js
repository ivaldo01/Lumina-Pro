/* ==========================================================================
   Instant Search Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.header__search input');
  const searchForm = document.querySelector('.header__search');

  if (!searchInput || !searchForm) return;
  const enableSearchSuggestions = searchForm.dataset.enableSearchSuggestions !== 'false';
  if (!enableSearchSuggestions) return;

  // Create suggestions container
  const suggestionsContainer = document.createElement('div');
  suggestionsContainer.innerHTML = `
    <div id="search-suggestions" class="search-suggestions" style="display: none; position: absolute; top: 100%; left: 0; right: 0; background: #fff; border: 1px solid var(--color-border); border-radius: 0 0 var(--radius-sm) var(--radius-sm); box-shadow: var(--shadow-hover); z-index: 1000; max-height: 400px; overflow-y: auto;">
      <div class="search-suggestions__loading" style="padding: 1rem; text-align: center; color: #666; display: none;">
        Carregando...
      </div>
      <div class="search-suggestions__results" style="padding: 0.5rem 0;"></div>
      <div class="search-suggestions__footer" style="padding: 0.75rem; border-top: 1px solid var(--color-border); text-align: center;">
        <a href="/search" class="search-suggestions__view-all" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">
          Ver todos os resultados
        </a>
      </div>
    </div>
  `;

  searchForm.style.position = 'relative';
  searchForm.appendChild(suggestionsContainer);

  const suggestions = document.getElementById('search-suggestions');
  const resultsContainer = suggestions.querySelector('.search-suggestions__results');
  const loadingIndicator = suggestions.querySelector('.search-suggestions__loading');

  let searchTimeout;
  const MIN_SEARCH_LENGTH = 3;
  const DEBOUNCE_DELAY = 300;

  searchInput.addEventListener('input', function () {
    const query = this.value.trim();

    clearTimeout(searchTimeout);

    if (query.length < MIN_SEARCH_LENGTH) {
      suggestions.style.display = 'none';
      return;
    }

    loadingIndicator.style.display = 'block';
    resultsContainer.innerHTML = '';

    searchTimeout = setTimeout(() => {
      performSearch(query);
    }, DEBOUNCE_DELAY);
  });

  searchInput.addEventListener('focus', function () {
    const query = this.value.trim();
    if (query.length >= MIN_SEARCH_LENGTH && resultsContainer.children.length > 0) {
      suggestions.style.display = 'block';
    }
  });

  // Close suggestions when clicking outside
  document.addEventListener('click', function (e) {
    if (!searchForm.contains(e.target)) {
      suggestions.style.display = 'none';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      suggestions.style.display = 'none';
    }
  });

  async function performSearch(query) {
    try {
      const response = await fetch(`/search/suggest?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`);
      const data = await response.json();

      loadingIndicator.style.display = 'none';

      if (data.resources.results.products.length > 0) {
        renderResults(data.resources.results.products);
        suggestions.style.display = 'block';
      } else {
        resultsContainer.innerHTML = `
          <div style="padding: 1rem; text-align: center; color: #666;">
            Nenhum produto encontrado
          </div>
        `;
        suggestions.style.display = 'block';
      }
    } catch (error) {
      console.error('Search error:', error);
      loadingIndicator.style.display = 'none';
      suggestions.style.display = 'none';
    }
  }

  function renderResults(products) {
    resultsContainer.innerHTML = products.map(product => `
      <a href="${product.url}" class="search-suggestion-item" style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem; text-decoration: none; color: inherit; transition: background-color 0.2s;">
        <img src="${product.featured_image.url}" alt="${product.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-sm);">
        <div style="flex: 1;">
          <div style="font-weight: 600; font-size: 0.9rem;">${product.title}</div>
          <div style="color: var(--color-price); font-weight: 700;">${product.price}</div>
        </div>
      </a>
    `).join('');

    // Add hover effect
    resultsContainer.querySelectorAll('.search-suggestion-item').forEach(item => {
      item.addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'var(--color-background)';
      });
      item.addEventListener('mouseleave', function () {
        this.style.backgroundColor = 'transparent';
      });
    });
  }
});
