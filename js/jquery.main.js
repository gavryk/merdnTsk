$(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.burger').on('click', function() {
        $('.nav_menu').toggleClass('menu_active');
        $(this).toggleClass('close_menu');
    });

    $('.login_btn').on('click', function(e) {
        e.preventDefault();
       $('.pop-up_login').toggleClass('login_active');
    });

    $('.close_btn').on('click', function() {
       $('.pop-up_login').removeClass('login_active');
    });

    $('.item').each(function() {
        $(this).hover(function() {
            $(this).prev().toggleClass('active_border');
        })
    });
});