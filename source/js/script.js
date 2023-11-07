let menu = document.querySelector(".main-nav__list");
let button = document.querySelector(".main-nav__button");
let logo = document.querySelector(".main-nav__logo");
let map = document.querySelector("iframe");
let modal = document.querySelector(".page__modal");
// let sizeButton = document.querySelectorAll(".size__button");
// let size = document.querySelector(".size");
let orderButton = document.querySelector(".week-product__button");
// let review = document.querySelectorAll(".slider__item")
// let sliderButton = document.querySelectorAll(".slider-buttons__button")

// -- nojs реализация.
menu.classList.remove("main-nav__list--noscript");
map?.classList.remove("location__map--nojs");
button.classList.remove("main-nav__button--noscript");
logo.classList.add("main-nav__logo--closed-menu");

// -- Меню навигации на мобилке.
button.onclick = function () {
  menu.classList.toggle("main-nav__list--close");
  button.classList.toggle("main-nav__button--burger");
  logo.classList.toggle("main-nav__logo--closed-menu");
};

// -- Заказать -> модалка с выбором размера.
orderButton.onclick = function () {
  modal.classList.remove("page__modal--closed");
};

// -- Выбор размера в модалке.
// size.addEventListener("click", (event) => {
//   let target = event.target; // Отлавливаем элемент в родители на который мы нажали
//   if (target.classList.contains("size__button")) {
//     // Проверяем тот ли это элемент который нам нужен
//     for (let i = 0; i < sizeButton.length; i++) {
//       sizeButton[i].classList.remove("size__button--checked"); // Убираем у других
//     }
//     target.classList.add("size__button--checked"); // Добавляем тому на который нажали
//   }
// });

// -- Выбор отзыва.
