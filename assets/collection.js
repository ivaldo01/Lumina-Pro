/* ==========================================================================
   Collection Page Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Sort by functionality
  const sortSelect = document.getElementById('sort-by');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      const sortValue = this.value;
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('sort_by', sortValue);
      window.location.href = currentUrl.toString();
    });
  }

  // Set current sort value
  const urlParams = new URLSearchParams(window.location.search);
  const currentSort = urlParams.get('sort_by');
  if (currentSort && sortSelect) {
    sortSelect.value = currentSort;
  }
});
