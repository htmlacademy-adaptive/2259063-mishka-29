let menu = document.querySelector(".main-nav__list");
let button = document.querySelector(".main-nav__button");
let logo = document.querySelector(".main-nav__logo");

// -- nojs реализация.
menu.classList.remove("main-nav__list--noscript");
button.classList.remove("main-nav__button--noscript");
logo.classList.add("main-nav__logo--closed-menu");

// -- Меню навигации на мобилке.
button.onclick = function () {
  menu.classList.toggle("main-nav__list--close");
  button.classList.toggle("main-nav__button--burger");
  logo.classList.toggle("main-nav__logo--closed-menu");
};
