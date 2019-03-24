var link = document.querySelector(".header__top__checkout");
var popup = document.querySelector(".contacts__popup");
var close = document.querySelector(".button__close");
var linkmap = document.querySelector(".about__contacts__map");
var map = document.querySelector(".map__popup");
var buy = document.querySelectorAll(".button__buy");
var product = document.querySelector(".product__popup");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("contacts__popup--show");
  console.log("Клик по ссылке вход");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("contacts__popup--show");
  console.log("Клик по ссылке выход");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.remove("contacts__popup--show");
  }
  console.log("Нажатие кнопки ESC");
});
