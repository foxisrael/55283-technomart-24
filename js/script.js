    var link = document.querySelector(".header__top__checkout");
    var popup = document.querySelector(".contacts__popup");
    var close = document.querySelector(".popup__close");
    var linkmap = document.querySelector(".about__contacts__map");
    var map = document.querySelector(".map__popup");
    var buy = document.querySelector(".button__buy");

    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("contacts__popup--show");
    });

    linkmap.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("map__popup--show");
    });

    buy.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("product__popup--show");
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("contacts__popup--show");
      popup.classList.remove("map__popup--show");
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        popup.classList.remove("contacts__popup--show");
      }
    });
