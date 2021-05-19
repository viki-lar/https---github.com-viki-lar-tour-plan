const hotelSlider = new Swiper('.hotel-slider', {

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },


    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
    },

});
const rewiewsSlider = new Swiper('.reviews-slider', {

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },


    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button__next',
        prevEl: '.reviews-slider__button__prev',
    },

});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
    console.log("клик по кнопке");
    document
        .querySelector(".navbar__bottom")
        .classList.toggle("navbar__bottom-visible");
});