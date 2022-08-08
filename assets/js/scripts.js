/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    // init Swiper Js
    if ($('.blogs-carousel').length !== 0) {
        const swiper = new Swiper('.blogs-carousel', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                991: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            },
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true
        });

        $(window).resize(function () {
            swiper.update();
        });
    }

    // init Swiper Js
    if ($('.service-images-slider').length !== 0) {
        const swiper = new Swiper('.service-images-slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              },
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true
        });

        $(window).resize(function () {
            swiper.update();
        });
    }

    $(window).scroll(function () {
        if ( $(".main-header").length !== 0 ) {
            var sticky = $(".main-header"),
                scroll = $(window).scrollTop();
            if (scroll >= 10) {
                sticky.addClass("fixed-top");
                sticky.find(".logo-sm").fadeIn('fast');
                sticky.find(".navbar-brand").hide();
                sticky.css('background-color', 'rgba(0,0,0,0.8)').css('padding-top', '10px').css('padding-bottom', '10px');
                sticky.find('.form-inline:not(.sm-form-nav)').slideUp();
                $('body').addClass('has-fixed-top');
            } else {
                sticky.removeClass("fixed-top");
                sticky.find(".logo-sm").hide();
                sticky.find(".navbar-brand").fadeIn('fast');
                sticky.css('background-color', 'transparent');
                sticky.find('.form-inline:not(.sm-form-nav)').slideDown();
                $('body').removeClass('has-fixed-top');
            }
        }
    });

    //open popup
    $('.open-modal').on('click', function(event){
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
    });

    //close popup
    $('.cd-popup').on('click', function(event){
        if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') || $(event.target).is('.popup-close') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
        }
    });
});
