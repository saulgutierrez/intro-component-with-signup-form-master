# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [intro-component-with-sign-up-form](https://github.com/saulgutierrez/intro-component-with-signup-form-master)
- Live Site URL: [intro-component-with-sign-up-form](https://admirable-arithmetic-850c61.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Display inline property and outline property:
```css
.proud-of-this-css {
  display: inline;
  outline: none;
}
```
IndexOf and lastIndexOf functions
```js
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
```

### Useful resources

- [mdn-docs](https://developer.mozilla.org/) - This site helped me to understand the outline property and eventListener functions.
- [W3Schools](https://www.w3schools.com/) - This site helped me to understand how to change HTML content from Javascript.
- [Dharmen Shah's Blog](https://blog.shhdharmen.me/) - This site is a blog that i've visited to understand some pseudoelements.

## Author

- Website - [Saúl Gutiérrez](https://sauladai.netlify.app/)
- Frontend Mentor - [@saulgutierrez](https://www.frontendmentor.io/profile/saulgutierrez)