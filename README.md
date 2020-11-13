## ✨ AnimatyJS v1.4.2

#### AnimatyJS is a JavaScript library made by Xevaltan#7394 and SKKYZ3R#8408

## 🚀 Features

-   You can add some animation with fade on in and out.
-   You can see if your text is visible actually

## 🚀 1.4.2

### In this version we deprecated the fadeIn and fadeOut functions for patch the crash when the functions are executed. But, we added two functions, the css and html functions. The library is now available on npmjs! For add with npm, you need to execute the **npm install animatyjs --save** command in your terminal.

## 🚀 v1.3

### For the v1.3, we added the setColor and toggleColor functions. These functions need to be a callback of hover or click function.

## 🚀 v1.2.5

### We added the click and double click functions and the _ function for replace the new instance of AnimatyJS (but you can do like before).

## 🚀 v1.1

### On this new version of AnimatyJS, we deprecated the rainbow function 'cause it was bugged. We're actually working on it, and we'll let you know when this function returns! Another updated function, fadeIn and fadeout functions no longer needs specifying if you want to apply the effect.

## 📚 Documentation

If you want to add a fadeIn animation, add the fadeIn function.

Example:

```js
var animaty = new AnimatyJS("css selector")
animaty.fadeIn()
```

If you want to add a fadeOut animation, add the fadeIn function.

Example:

```js
var animaty = new AnimatyJS("css selector")
animaty.fadeOut(doYouWant? (true or false))
```

If you want to know if the element is visible, use the isVisible function.

Example:

```js
var animaty = new AnimatyJS("css selector")
animaty.isVisible("css selector");
```

---

## How to use the click and double click functions?

If you want to use them, you need to add the function click or dblclick.

Examples:

```js
// Click function

_("selector").click(/*function callback*/ () => {
  // Code
});

// Double click function

_("selector").dblclick(/*function callback*/ () => {
  // Code
});
```

---

## How to use the css function?

### For use this function, it's very simple. You need to call the function

```js
_("css selector").css()
```

### and add an object into.

```js
_("css selector").css({})
```

### In this object you need to specify the css attribute first then his value.

```js
_("css selector").css({
  color: "color",
  "text-align": center,
})
```

### You can see that we have not put quotes in color. It's normal! One-word arguments don't really need it. But arguments of more than two words (separated by a dash) must be surrounded by quotes.

### You can add as many items as you want.

## 🤝 Contributing

Pull requests are welcome and please report any issues you find in [issues](https://github.com/ItsMeSKKYZ3R/AnimatyJS/issues). For major changes, please open an issue first to discuss what you would like to change or create a new branch.

Please ✰ this repository if this project helped you!

---

You can download the js and css files [here](https://animatyjs.skkyz3r.ml "Télécharger")

---

_Made with_ ❤ _by [SKKYZ3R](https://www.skkyz3r.ml) and Xevaltan_
