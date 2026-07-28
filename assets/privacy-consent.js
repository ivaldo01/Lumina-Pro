class LuminaPrivacyConsent {
  constructor(root) {
    this.root = root;
    this.banner = root.querySelector('[data-privacy-banner]');
    this.preferences = root.querySelector('[data-privacy-preferences]');
    this.status = root.querySelector('[data-privacy-status]');
    this.api = null;
    this.bindEvents();
    this.loadApi();
    document.addEventListener('lumina:privacy-open', () => {
      this.syncControls();
      this.show();
    });
  }

  bindEvents() {
    this.root.querySelector('[data-privacy-accept]')?.addEventListener('click', () => {
      this.save({ analytics: true, marketing: true, preferences: true });
    });
    this.root.querySelector('[data-privacy-reject]')?.addEventListener('click', () => {
      this.save({ analytics: false, marketing: false, preferences: false });
    });
    this.root.querySelector('[data-privacy-customize]')?.addEventListener('click', () => {
      this.preferences.hidden = false;
      this.preferences.querySelector('input')?.focus();
    });
    this.root.querySelector('[data-privacy-save]')?.addEventListener('click', () => {
      this.save({
        analytics: Boolean(this.root.querySelector('[name="privacy_analytics"]')?.checked),
        marketing: Boolean(this.root.querySelector('[name="privacy_marketing"]')?.checked),
        preferences: Boolean(this.root.querySelector('[name="privacy_preferences"]')?.checked)
      });
    });
  }

  loadApi() {
    if (!window.Shopify?.loadFeatures) return;
    window.Shopify.loadFeatures(
      [{ name: 'consent-tracking-api', version: '0.1' }],
      error => {
        if (error || !window.Shopify.customerPrivacy) return;
        this.api = window.Shopify.customerPrivacy;
        this.syncControls();
        if (this.api.shouldShowBanner()) this.show();
      }
    );
  }

  syncControls() {
    const consent = this.api.currentVisitorConsent();
    const mapping = {
      privacy_analytics: consent.analytics,
      privacy_marketing: consent.marketing,
      privacy_preferences: consent.preferences
    };
    Object.entries(mapping).forEach(([name, value]) => {
      const input = this.root.querySelector(`[name="${name}"]`);
      if (input) input.checked = value === 'yes';
    });
  }

  show() {
    this.banner.hidden = false;
    requestAnimationFrame(() => this.banner.classList.add('is-visible'));
  }

  hide() {
    this.banner.classList.remove('is-visible');
    setTimeout(() => {
      this.banner.hidden = true;
      this.preferences.hidden = true;
    }, 300);
  }

  save(consent) {
    if (!this.api) {
      this.setStatus('Não foi possível salvar agora. Atualize a página e tente novamente.');
      return;
    }
    this.api.setTrackingConsent(consent, error => {
      if (error) {
        this.setStatus('Não foi possível salvar agora. Tente novamente.');
        return;
      }
      document.dispatchEvent(new CustomEvent('lumina:privacy-updated', { detail: consent }));
      this.hide();
    });
  }

  setStatus(message) {
    if (!this.status) return;
    this.status.textContent = message;
    this.status.hidden = false;
  }
}

const initializePrivacyConsent = root => {
  root.querySelectorAll?.('[data-privacy-root]:not([data-initialized])').forEach(element => {
    element.dataset.initialized = 'true';
    new LuminaPrivacyConsent(element);
  });
};

document.addEventListener('DOMContentLoaded', () => initializePrivacyConsent(document));
document.addEventListener('shopify:section:load', event => initializePrivacyConsent(event.target));
document.addEventListener('click', event => {
  if (event.target.closest('[data-privacy-open]')) {
    document.dispatchEvent(new CustomEvent('lumina:privacy-open'));
  }
});
