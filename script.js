
const swiper = new Swiper('.swiperFeedback', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  slidesPerView:1,
  navigation: {
    nextEl: '.arrow_next',
    prevEl: '.arrow_prev',
  },

});

console.log("Hello");

  /*=============== BURGER MENU===============*/
  const burgerMenu = document.querySelector('.burger');
  const burger = document.querySelector('.burgerMenu__container')

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle ('active')
    burger.classList.toggle ('hidden')
      /*=============== ЧТОБЫ ЗАФИКСИРОВАТЬ КРЕСТИК===============*/
    if (!burger.classList.contains('hidden'))
    document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
})