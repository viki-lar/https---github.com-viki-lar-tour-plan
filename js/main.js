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

    //подключение плагина обработки формы
    $(".form").each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "At least 2 characters required"
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                },
                phone: {
                    required: "Please specify your phone"
                }
            },
        });
    });
    //подключение маски для телефона
    $('[datatarget="phone"]').mask('+7 (000) 000-00-00')
    //подключение маски для почты
    $('[datatarget="email"]').inputmask("email")


});