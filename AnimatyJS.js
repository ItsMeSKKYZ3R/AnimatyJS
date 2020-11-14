class AnimatyJS {
  /**
   * @param {String} selector
   */

  constructor(selector) {
    this.els = document.querySelectorAll(selector);
  }

  async fadeIn() {
    this.els.forEach((el) => {
      el.style.opacity = 0;
      setInterval(show, 50);

      function show() {
        let opacity = Number(
          window.getComputedStyle(el).getPropertyValue("opacity")
        );

        if (opacity < 1) {
          opacity += 0.1;
          el.style.opacity = opacity;
        }
      }
    });

    return this;
  }

  async fadeOut() {
    this.els.forEach((el) => {
      el.style.opacity = 1;
      setInterval(hide, 50);

      function hide() {
        let opacity = Number(
          window.getComputedStyle(el).getPropertyValue("opacity")
        );

        if (opacity > 0) {
          opacity -= 0.1;
          el.style.opacity = opacity;
        }
      }
    });

    return this;
  }

  async isVisible() {
    const rate = 0.1;
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
   * @deprecated Since v1.1! We want to add AnimatyJS on npm and this function need a CSS file.
   */

  async rainbow() {
    console.error("The rainbow function is deprecated since the v1.1");

    return this;
  }

  /**
   *
   * @param {function} callback The action when the element is clicked
   */

  async click(callback) {
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

  async dblclick(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("dblclick", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  async hover(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("mouseover", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  async mouseEnter(callback) {
    if (typeof callback === "function") {
      this.els.forEach((el) => {
        el.addEventListener("mouseenter", callback);
      });
    } else {
      console.error("The callback need to be a function");
    }

    return this;
  }

  async mouseOut(callback) {
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

  async setColor(color) {
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

  async toggleColor(first, second) {
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
   * @param {string} Class The class
   */

  async addClass(Class) {
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

  async removeClass(Class) {
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

  async toggleClass(Class) {
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

  async cursor(cursor) {
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

  async fadeWhenVisible() {
    const rate = 0.1;
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
            this.fadeOut();
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

  /**
   *
   * @param {Object} styles - All of styles you want in object!
   */

  async css(styles) {
    this.els.forEach((el) => {
      for (let ite in styles) {
        var value = styles[ite];

        el.style[ite] = value;
      }
    });

    return this;
  }

  /**
   *
   * @param {string} text Your text.
   */

  async html(text) {
    this.els.forEach((el) => {
      el.innerHTML = text;
    });

    return this;
  }

  async show() {
    this.els.forEach((el) => {
      el.style.opacity = 0;
      setInterval(show, 50);

      function show() {
        let opacity = Number(
          window.getComputedStyle(el).getPropertyValue("opacity")
        );

        if (opacity < 1) {
          opacity += 0.1;
          el.style.opacity = opacity;
        }
      }
    });

    return this;
  }

  async hide() {
    this.els.forEach((el) => {
      el.style.opacity = 1;
      setInterval(hide, 50);

      function hide() {
        let opacity = Number(
          window.getComputedStyle(el).getPropertyValue("opacity")
        );

        if (opacity > 0) {
          opacity -= 0.1;
          el.style.opacity = opacity;
        }
      }
    });

    return this;
  }

  async getScrollX() {
    return this.scrollX;
  }

  async getScrollY() {
    return this.scrollY;
  }
}

/**
 * @param {String} selector
 */

function _(selector) {
  return new AnimatyJS(selector);
}

/**
 * Scroll the body to x and y coords
 * @param {Number} x The x coord
 * @param {Number} y The y coord
 */

async function goTo(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    window.scroll(x, y);
  } else if (typeof x !== "number" && typeof y !== "number") {
    return console.error("The x and y args must be numbers.");
  } else if (typeof x !== "number" && typeof y === "number") {
    return console.error("The x arg must be a number.");
  } else if (typeof x === "number" && typeof y !== "number") {
    return console.error("The y arg must be a number.");
  }
}

/**
 *
 * @param {Function} callback The callback
 */

async function keypress(callback) {
  if (typeof callback === "function") {
    this.els.forEach((el) => {
      el.addEventListener("keypress", callback);
    });
  } else {
    console.error("The callback need to be a function");
  }

  return this;
}

/**
 *
 * @param {Function} callback The callback
 */

async function keydown(callback) {
  if (typeof callback === "function") {
    this.els.forEach((el) => {
      el.addEventListener("keydown", callback);
    });
  } else {
    console.error("The callback need to be a function");
  }

  return this;
}

/**
 *
 * @param {Function} callback The callback
 */

async function keyup(callback) {
  if (typeof callback === "function") {
    this.els.forEach((el) => {
      el.addEventListener("keyup", callback);
    });
  } else {
    console.error("The callback need to be a function");
  }

  return this;
}

/**
 * Scroll the body to x and y coords
 * @param {Number} x The x coord
 * @param {Number} y The y coord
 */

_.goTo = (x, y) => goTo(x, y);

/**
 *
 * @param {Function} callback The callback
 */

_.keypress = (callback) => keypress(callback);

/**
 *
 * @param {Function} callback The callback
 */

_.keyup = (callback) => keyup(callback);

/**
 *
 * @param {Function} callback The callback
 */

_.keydown = (callback) => keydown(callback);
