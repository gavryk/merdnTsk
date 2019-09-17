let burger = document.querySelector('.burger'),
    menu = document.querySelector('.nav_menu');
let loginbtn = document.querySelector('.login_btn'),
    popupLogin = document.querySelector('.pop-up_login'),
    close_popup = document.querySelector('.close_btn');

burger.addEventListener('click', function() {
   menu.classList.toggle('menu_active');
});

loginbtn.addEventListener('click', function(e) {
    e.preventDefault();
    popupLogin.classList.toggle('login_active');
});
close_popup.addEventListener('click', function() {
   popupLogin.classList.remove('login_active');
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