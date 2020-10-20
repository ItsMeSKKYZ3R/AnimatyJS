class AnimatyJS {
  /**
   * @param {String} selector
   */

  constructor(selector) {
    this.els = document.querySelectorAll(selector);
  }

  fadeIn() {
    this.els.forEach((el) => {
      el.classList.add("fadeIn");
    });

    return this;
  }

  fadeOut() {
    this.els.forEach((el) => {
      el.classList.add("fadeOut");
    });

    return this;
  }

  isVisible(ratio) {
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

    this.els.forEach((r) => {
      observer.observe(r);
    });

    return this;
  }

  /**
   * @deprecated Since v1.1! We're working on and we'll let you know when this feature is back.
   */

  rainbow() {
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

  /**
   *
   * @param {function} callback The action when the element is clicked
   */

  click(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("click", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  /**
   *
   * @param {function} callback The action when the element is double clicked
   */

  dblclick(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("dblclick", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  hover(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("mouseover", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  mouseEnter(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("mouseenter", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  mouseOut(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("mouseout", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  /**
   * @param {string} color The color
   */

  setColor(color) {
    if (color) {
      if (typeof color === "string") {
        this.els.forEach((el) => {
          el.style.color = color;
        });
      } else {
        console.error("The color need to be a string");
      }
    } else {
      console.error("You need to specify a color");
    }

    return this;
  }

  toggleColor(first, second) {
    if (typeof first === "string" && typeof second === "string") {
      this.els.forEach((el) => {
        el.style.color = el.style.color === first ? second : first;
      });
    } else {
      console.error("Nope");
    }
  }
}

function _(element) {
  return new AnimatyJS(element);
}
