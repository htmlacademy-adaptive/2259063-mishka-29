let menu = document.querySelector(".main-nav__list");
let button = document.querySelector(".main-nav__button");
let logo = document.querySelector(".main-nav__logo");
let modal = document.querySelector(".page__modal");
let cartButton = document.querySelectorAll(".cart-button");
let cartButtonAdd = document.querySelector(".modal__button");

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

// -- Вызов модалки каталог

for (let elements of cartButton) {
  elements.onclick = function () {
    modal.classList.remove("page__modal--closed");
  };
}

// -- Закрытие модалки каталог

cartButtonAdd.onclick = function () {
  modal.classList.add("page__modal--closed");
}
