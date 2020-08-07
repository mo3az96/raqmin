$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    ///////// landing header /////////
    $('.arrow-btn').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });
    ///////// news slider /////////
    var newswiper = new Swiper('.news-slider', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.news-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    ///////// Videos slider /////////
    var Videoswiper = new Swiper('.Videos-slider', {

        loop: true,
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
            el: '.Videos-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
            },
            767: {
                slidesPerView: 1.9,
            },
        },
    });
    ///////// galley slider /////////
    var galleywiper = new Swiper('.gallery-slider', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.gallery-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    ///////// **services** /////////
    if ($(window).width() <= 1199) {
        $(".home-services").addClass("swiper-container");
        $(".home-services .item").addClass("swiper-slide");
        $(".home-services .item").wrapAll("<div class='swiper-wrapper'></div>");
        var home_serviceswiper = new Swiper('.home-services', {
            loop: true,
            pagination: {
                el: '.home-services .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }
    ///////// **home-sources** /////////
    if ($(window).width() <= 991) {
        $(".home-sources").addClass("swiper-container");
        $(".home-sources .item").addClass("swiper-slide");
        $(".home-sources .item").wrapAll("<div class='swiper-wrapper'></div>");
        var home_sourceswiper = new Swiper('.home-sources', {
            pagination: {
                el: '.home-sources .swiper-pagination',
                clickable: true,
            },
            slidesPerView: 2,
        });
    }
    ///////// **services** /////////
    if ($(window).width() <= 1199) {
        $(".parts-flex").addClass("swiper-container");
        $(".parts-flex .part").wrap("<div class='swiper-slide'></div>");
        $(".parts-flex .swiper-slide").wrapAll("<div class='swiper-wrapper'></div>");
        var partsswiper = new Swiper('.parts-flex', {
            loop: true,
            pagination: {
                el: '.parts-flex .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".footer-head").addClass("mo-accordion");
        $(".twits-list").addClass("mo-panel");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })

    ///////// **menu** /////////
    if ($(window).width() <= 1199) {
        $('.menu-btn').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }

    ///////// **drop-menu** /////////
    if ($(window).width() <= 1199) {
        $('.drop-btn .nav-a').removeAttr("href")
        $('.drop-btn .nav-a').click(function () {
            $(".drop-btn .nav-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".drop-btn .nav-a").not(this).siblings().slideUp(500);
        })
    }

});