if (!customElements.get('hero-slider')) {
  customElements.define('hero-slider', class HeroSlider extends HTMLElement {
    connectedCallback() {
      this.track = this.querySelector('[data-hero-track]');
      this.slides = [...this.querySelectorAll('[data-hero-slide]')];
      this.dots = [...this.querySelectorAll('[data-hero-dot]')];
      this.index = 0;
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (this.slides.length < 2 || !this.track) return;

      this.querySelector('[data-hero-prev]')?.addEventListener('click', () => this.go(this.index - 1));
      this.querySelector('[data-hero-next]')?.addEventListener('click', () => this.go(this.index + 1));
      this.dots.forEach(dot => dot.addEventListener('click', () => this.go(Number(dot.dataset.heroDot))));
      this.track.addEventListener('scroll', () => this.syncFromScroll(), { passive: true });
      this.addEventListener('mouseenter', () => this.stop());
      this.addEventListener('mouseleave', () => this.start());
      this.addEventListener('focusin', () => this.stop());
      this.addEventListener('focusout', () => this.start());
      document.addEventListener('shopify:block:select', event => {
        const slide = event.target.closest?.('[data-hero-slide]');
        if (slide && this.contains(slide)) this.go(this.slides.indexOf(slide));
      });
      this.scheduleStart();
    }

    go(nextIndex) {
      this.index = (nextIndex + this.slides.length) % this.slides.length;
      this.track.scrollTo({ left: this.track.clientWidth * this.index, behavior: this.reducedMotion ? 'auto' : 'smooth' });
      this.update();
    }

    syncFromScroll() {
      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        this.index = Math.round(this.track.scrollLeft / this.track.clientWidth);
        this.update();
      }, 80);
    }

    update() {
      this.slides.forEach((slide, index) => slide.classList.toggle('is-active', index === this.index));
      this.dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === this.index)));
    }

    start() {
      if (this.dataset.autoplay !== 'true' || this.reducedMotion) return;
      this.stop();
      this.timer = setInterval(() => this.go(this.index + 1), Number(this.dataset.speed) || 6000);
    }

    scheduleStart() {
      if (this.dataset.autoplay !== 'true' || this.reducedMotion) return;
      this.stop();
      this.startTimer = setTimeout(() => this.start(), Math.max(Number(this.dataset.speed) || 6000, 12000));
    }

    stop() {
      clearTimeout(this.startTimer);
      clearInterval(this.timer);
    }

    disconnectedCallback() {
      this.stop();
    }
  });
}
