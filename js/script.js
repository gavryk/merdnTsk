let burger = document.querySelector('.burger'),
    menu = document.querySelector('.nav_menu');

burger.addEventListener('click', function() {
   menu.classList.toggle('menu_active');
});

let swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});