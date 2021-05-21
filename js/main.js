$(document).ready(function () {
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
            .classList.toggle("navbar__bottom-visible")
        document
            .querySelector("body")
            .classList.toggle("body__hidden");
    });

    var modalButton = $("[data-togle=modal]");
    var closemodalButton = $("[data-togle=close__modal]");
    modalButton.on("click", openModal);
    closemodalButton.on("click", closeModal);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay-visible");
        modalDialog.addClass("modal__dialog-visible");
    }


    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay-visible");
        modalDialog.removeClass("modal__dialog-visible");
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            var modalOverlay = $(".modal__overlay");
            var modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay-visible");
            modalDialog.removeClass("modal__dialog-visible");
        }
    });


});