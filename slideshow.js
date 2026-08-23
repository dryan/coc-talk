class DryanSlideshow extends HTMLElement {
  connectedCallback() {
    this._assignSlideIds();

    this._onKeydown = this._onKeydown.bind(this);
    this._onScrollEnd = this._onScrollEnd.bind(this);
    document.addEventListener("keydown", this._onKeydown);

    this._scrollContainer = this.scrollContainer;
    this._scrollContainer.addEventListener("scrollend", this._onScrollEnd);

    this._goToInitialHash();
    this._onScrollEnd();
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this._onKeydown);
    this._scrollContainer?.removeEventListener("scrollend", this._onScrollEnd);
  }

  _assignSlideIds() {
    this.slides.forEach((slide, index) => {
      if (!slide.id) {
        slide.id = `slide-${index + 1}`;
      }
    });
  }

  _goToInitialHash() {
    if (!location.hash) {
      return;
    }

    const target = this.slides.find(
      (slide) => `#${slide.id}` === location.hash,
    );
    if (target) {
      target.scrollIntoView({
        behavior: "instant",
        inline: "start",
        block: "nearest",
      });
    }
  }

  _onScrollEnd() {
    const slides = this.slides;
    const index = this.currentIndex;
    if (index < 0) {
      return;
    }

    document.body.dataset.currentSlide = slides[index].id;

    const hash = `#${slides[index].id}`;
    if (hash !== location.hash) {
      history.replaceState(null, "", hash);
    }
  }

  get slides() {
    return Array.from(this.children).filter((el) => el.tagName === "LI");
  }

  get scrollContainer() {
    let node = this.parentElement;
    while (node) {
      if (/(auto|scroll)/.test(getComputedStyle(node).overflowX)) {
        return node;
      }
      node = node.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  }

  get currentIndex() {
    const slides = this.slides;
    if (!slides.length) {
      return -1;
    }

    const containerLeft = this.scrollContainer.getBoundingClientRect().left;
    let closest = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(
        slide.getBoundingClientRect().left - containerLeft,
      );
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    return closest;
  }

  goTo(index) {
    const slides = this.slides;
    if (!slides.length) {
      return;
    }

    const clamped = Math.max(0, Math.min(index, slides.length - 1));

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        slides[clamped].scrollIntoView({
          behavior: "instant",
          inline: "start",
          block: "nearest",
        });
      });
      return;
    }

    slides[clamped].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  previous() {
    this.goTo(this.currentIndex - 1);
  }

  first() {
    this.goTo(0);
  }

  last() {
    this.goTo(this.slides.length - 1);
  }

  toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }

    this.scrollContainer.requestFullscreen?.().catch(() => {});
  }

  _onKeydown(event) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    const target = event.target;
    const tag = target && target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
      case "PageDown":
      case "j":
      case "J":
        event.preventDefault();
        this.next();
        break;
      case "ArrowLeft":
      case "PageUp":
      case "k":
      case "K":
        event.preventDefault();
        this.previous();
        break;
      case "Home":
        event.preventDefault();
        this.first();
        break;
      case "End":
        event.preventDefault();
        this.last();
        break;
      case "f":
      case "F":
        event.preventDefault();
        this.toggleFullscreen();
        break;
      default:
        break;
    }
  }
}

customElements.define("dryan-slideshow", DryanSlideshow);
