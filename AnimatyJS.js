class AnimatyJS {
  /**
   * @param {String} selector
   */

  constructor(selector) {
    this.els = document.querySelectorAll(selector);
  }

  fadeIn() {
    this.els.forEach((el) => {
      let opacity = 0;

      while (true) {
        setTimeout(() => {
          opacity++;
          console.log(opacity);
        }, 50);

        if (opacity === 10) {
          break;
        }
      }
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

  /**
   * @param {string} first First color
   * @param {string} second Second color
   */

  toggleColor(first, second) {
    if (typeof first === "string" && typeof second === "string") {
      this.els.forEach((el) => {
        el.style.color = el.style.color === first ? second : first;
      });
    } else {
      console.error("Nope");
    }

    return this;
  }

  /**
   * @param {number} degree How much degree do you want the element rotate?
   */

  spin(degree) {
    if (typeof degree === "number") {
      this.els.forEach((el) => {
        el.style.transform = `rotate(${degree}deg)`;
      });
    }

    return this;
  }

  /**
   * @param {string} Class The class
   */

  addClass(Class) {
    this.els.forEach((el) => {
      if (Class) {
        if (typeof Class === "string") {
          el.classList.add(Class);
        } else {
          console.error("The class need to be a string!");
        }
      } else {
        console.error("You need to specify the class");
      }
    });

    return this;
  }

  /**
   * @param {string} Class The class
   */

  removeClass(Class) {
    this.els.forEach((el) => {
      if (Class) {
        if (typeof Class === "string") {
          el.classList.remove(Class);
        } else {
          console.error("The class need to be a string!");
        }
      } else {
        console.error("You need to specify the class");
      }
    });

    return this;
  }

  /**
   * @param {string} Class The class
   */

  toggleClass(Class) {
    this.els.forEach((el) => {
      if (Class) {
        if (typeof Class === "string") {
          el.classList.toggle(Class);
        } else {
          console.error("The class need to be a string!");
        }
      } else {
        console.error("You need to specify the class");
      }
    });

    return this;
  }

  /**
   * @param {string} cursor What cursor do you want?
   */

  cursor(cursor) {
    if (cursor) {
      if (typeof cursor === "string") {
        this.els.forEach((el) => {
          el.style.cursor = cursor;
        });
      } else {
        console.error("The cursor name need to be a string");
      }
    } else {
      console.error("You need to specify a cursor name");
    }

    return this;
  }

  fadeWhenVisible(ratio) {
    const rate = ratio;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: rate,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > rate) {
          this.fadeIn();
          return true;
        } else {
          this.els.forEach((el) => {
            el.classList.remove("fadeIn");
          });
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

  html(text) {
    this.els.forEach((el) => {
      el.innerHTML = text;
    });
  }
}

/**
 * @param {String} selector
 */

function _(selector) {
  return new AnimatyJS(selector);
}
