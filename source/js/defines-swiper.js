import Swiper from 'swiper';
import {Pagination, Navigation, Scrollbar} from 'swiper/modules';

export const initSwiperHero = () => {
  new Swiper('.hero', {
    modules: [Pagination],
    direction: 'horizontal',
    0: {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

export const initSwiperPrograms = () => {
  new Swiper('.programs__swiper', {
    modules: [Scrollbar, Navigation],
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        loop: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      768: {
        scrollbar: {
          el:'.swiper-scrollbar',
          draggable: true,
          dragSize: '324',
        },
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
};
