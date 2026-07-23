/* ==========================================================================
   Cart Page Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Quantity buttons in cart
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  const quantityInputs = document.querySelectorAll('.quantity-input');
  
  quantityBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const line = this.dataset.line;
      const action = this.dataset.action;
      const input = document.querySelector(`.quantity-input[data-line="${line}"]`);
      const currentValue = parseInt(input.value) || 1;
      
      let newValue;
      if (action === 'increase') {
        newValue = currentValue + 1;
      } else if (action === 'decrease') {
        newValue = Math.max(0, currentValue - 1);
      }
      
      input.value = newValue;
      
      // Auto-submit form on quantity change
      if (newValue === 0) {
        // If quantity is 0, remove item
        if (confirm('Deseja remover este item do carrinho?')) {
          window.location.href = `/cart/change?line=${line}&quantity=0`;
        } else {
          input.value = currentValue;
        }
      } else {
        // Submit form to update cart
        input.closest('form').submit();
      }
    });
  });
  
  // Manual quantity input change
  quantityInputs.forEach(input => {
    input.addEventListener('change', function() {
      const value = parseInt(this.value) || 1;
      if (value < 1) {
        this.value = 1;
      }
      this.closest('form').submit();
    });
  });
});
