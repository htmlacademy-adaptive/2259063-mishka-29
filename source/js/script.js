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


// Слайдер отзывов

const slider = document.querySelector('.slider-list');
const prevButton = document.querySelector('.slider-buttons__button--previous');
const nextButton = document.querySelector('.slider-buttons__button--next');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();
