/* ==========================================================================
   Lumina Commerce - Product Page
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------
     Gallery
  ------------------------------ */

  const thumbnails = document.querySelectorAll('.pdp__thumb');
  const mainImage = document.getElementById('product-main-image');

  if (thumbnails.length && mainImage) {

    thumbnails.forEach(function (thumb) {

      thumb.addEventListener('click', function () {

        const newImage = this.dataset.image;
        const newZoom = this.dataset.zoom;

        mainImage.src = newImage;
        mainImage.dataset.zoom = newZoom;

        thumbnails.forEach(function (item) {
          item.classList.remove('is-active');
        });

        this.classList.add('is-active');

      });

    });

  }


  /* ------------------------------
     Quantity
  ------------------------------ */

  const quantityInput = document.getElementById('quantity');
  const quantityButtons = document.querySelectorAll('.quantity-btn');

  if (quantityInput && quantityButtons.length) {

    quantityButtons.forEach(function (button) {

      button.addEventListener('click', function () {

        const action = this.dataset.action;
        let value = parseInt(quantityInput.value) || 1;

        if (action === 'increase') {
          value++;
        }

        if (action === 'decrease') {
          value = Math.max(1, value - 1);
        }

        quantityInput.value = value;

      });

    });

  }


  /* ------------------------------
     Product Tabs
  ------------------------------ */

  const tabs = document.querySelectorAll('.product-tabs__button');
  const panels = document.querySelectorAll('.product-tabs__panel');

  tabs.forEach(function (tab) {

    tab.addEventListener('click', function () {

      const target = this.dataset.tab;

      tabs.forEach(function (item) {
        item.classList.remove('active');
      });

      panels.forEach(function (panel) {
        panel.hidden = true;
      });


      this.classList.add('active');

      const panel = document.querySelector(
        '.product-tabs__panel[data-panel="' + target + '"]'
      );

      if (panel) {
        panel.hidden = false;
      }

    });

  });


  /* ------------------------------
     Variant Price Update
  ------------------------------ */

  const variantSelect = document.getElementById('variant-select');
  const priceElement = document.querySelector('.pdp__price-current');


  if (variantSelect && priceElement) {

    variantSelect.addEventListener('change', function () {

      const option = this.options[this.selectedIndex];

      const match = option.text.match(/R\$\s?[\d.,]+/);

      if (match) {
        priceElement.textContent = match[0];
      }

    });

  }


});