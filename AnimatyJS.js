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
   * @param {string} selector - The element
   * @param {boolean} rainbow - Do you want a rainbow?
   * @param {boolean} reverse - Is the rainbow reverse?
   */

  rainbow(rainbow, reverse, selector) {
    document.querySelectorAll(selector).forEach((el) => {
      if (rainbow && reverse) {
        el.classList.add("rainbowReverse");
      } else if (rainbow && !reverse) {
        el.classList.add("rainbow");
      } else if (!rainbow && reverse) {
        alert("Vous ne pouvez pas inverser un effet non selectionné !");
      }
    });
  }
}
