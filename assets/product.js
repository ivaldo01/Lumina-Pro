/* ==========================================================================
   Product Page Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Gallery thumbnails
  const thumbnails = document.querySelectorAll('.product-gallery__thumbnail');
  const mainImage = document.getElementById('product-main-image');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const newImage = this.dataset.image;
      const newZoom = this.dataset.zoom;
      
      mainImage.src = newImage;
      mainImage.dataset.zoom = newZoom;
      
      // Update active state
      thumbnails.forEach(t => t.style.borderColor = 'var(--color-border)');
      this.style.borderColor = 'var(--color-primary)';
    });
  });

  // Quantity buttons
  const quantityInput = document.getElementById('quantity');
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  
  quantityBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.dataset.action;
      const currentValue = parseInt(quantityInput.value) || 1;
      const newValue = action === 'increase' ? currentValue + 1 : Math.max(1, currentValue - 1);
      quantityInput.value = newValue;
    });
  });

  // Product tabs
  const tabButtons = document.querySelectorAll('.product-tabs__button');
  const tabPanels = document.querySelectorAll('.product-tabs__panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      
      // Update button states
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.borderBottomColor = 'transparent';
        btn.style.color = 'var(--color-text-primary)';
      });
      this.classList.add('active');
      this.style.borderBottomColor = 'var(--color-primary)';
      this.style.color = 'var(--color-primary)';
      
      // Update panel visibility
      tabPanels.forEach(panel => {
        if (panel.dataset.panel === targetTab) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });

  // Variant change handler
  const variantSelect = document.getElementById('variant-select');
  if (variantSelect) {
    variantSelect.addEventListener('change', function() {
      const selectedOption = this.options[this.selectedIndex];
      const priceText = selectedOption.text;
      const priceMatch = priceText.match(/R\$\s*[\d.,]+/);
      
      if (priceMatch) {
        const priceElement = document.querySelector('.product-info__price-current');
        if (priceElement) {
          priceElement.textContent = priceMatch[0];
        }
      }
    });
  }
});
