class AnimatyJS {
  /**
   * @param {String} selector
   */

  constructor(selector) {
    this.els = document.querySelectorAll(selector);
  }

  /**
   * @param {boolean} fade - Do you want a fade in?
   */

  fadeIn(fade) {
    if (fade) {
      this.els.forEach((el) => {
        el.classList.add("fadeIn");
      });
    } else {
      return null;
    }

    return this;
  }

  /**
   * @param {boolean} fade - Do you want a fade out?
   */

  fadeOut(fade) {
    if (fade) {
      this.els.forEach((el) => {
        el.classList.add("fadeOut");
      });
    } else {
      return null;
    }

    return this;
  }

  /**
   * @param {boolean} fade - Do you want a fade direction to up?
   */

  toUp(fade) {
    if (fade) {
      this.els.forEach((el) => {
        el.classList.add("toUp");
      });
    } else {
      return null;
    }

    return this;
  }

  /**
   * @param {boolean} fade - Do you want a fade direction to bootom?
   */

  toBottom(fade) {
    if (fade) {
      this.els.forEach((el) => {
        el.classList.add("toBottom");
      });
    } else {
      return null;
    }

    return this;
  }

  /**
   * @param {boolean} fade - Do you want a fade direction to left?
   */

  toLeft(fade) {
    if (fade) {
      this.els.forEach((el) => {
        el.classList.add("toLeft");
      });
    } else {
      return null;
    }

    return this;
  }

  /**
   * @param {boolean} fade - Do you want a fade direction to right?
   */

  toRight(fade) {
    if (fade) {
      this.els.forEach((el) => {
        el.classList.add("toRight");
      });
    } else {
      return null;
    }

    return this;
  }

  isVisible(ratio, element) {
    const rate = ratio;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: rate,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > rate) {
          console.log("Yay!");
          return true;
        } else {
          console.log("Nope! Sorry.");
          return false;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    document.querySelectorAll(element).forEach((r) => {
      observer.observe(r);
    });

    return this;
  }

  /**
   * @deprecated Since v1.1! We're working on and we'll let you know when this feature is back.
   */

  rainbow(reverse) {
    // this.els.forEach((el) => {
    //   if (reverse) {
    //     setTimeout(() => {
    //       el.classList.add("rainbowReverse");
    //     }, 2000);
    //   } else {
    //     setTimeout(() => {
    //       el.classList.add("rainbow");
    //     }, 500);
    //   }
    // });

    console.error("The rainbow function is deprecated since the v1.1");

    return this;
  }
}
