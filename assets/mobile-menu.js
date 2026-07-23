/* ==========================================================================
   Mobile Menu Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const openButtons = document.querySelectorAll('[data-mobile-menu-open]');
  const closeButtons = document.querySelectorAll('[data-mobile-menu-close]');
  const dropdownToggles = document.querySelectorAll('[data-mobile-menu-toggle]');

  // Open mobile menu
  openButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // Focus on close button for accessibility
        const closeButton = mobileMenu.querySelector('[data-mobile-menu-close]');
        if (closeButton) {
          setTimeout(() => closeButton.focus(), 100);
        }
      }
    });
  });

  // Close mobile menu
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        // Return focus to open button
        const openButton = document.querySelector('[data-mobile-menu-open]');
        if (openButton) {
          openButton.focus();
        }
      }
    });
  });

  // Close on overlay click
  const overlay = mobileMenu?.querySelector('.mobile-menu__overlay');
  if (overlay) {
    overlay.addEventListener('click', function() {
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu?.getAttribute('aria-hidden') === 'false') {
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      const openButton = document.querySelector('[data-mobile-menu-open]');
      if (openButton) {
        openButton.focus();
      }
    }
  });

  // Dropdown toggles
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdown = this.closest('.mobile-menu__dropdown');
      if (dropdown) {
        dropdown.classList.toggle('active');
      }
    });
  });
});
