import Swiper from 'swiper';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { programsButton, programsButtonPrev, programsButtonNext, programsScrollbar } from './constants.js';
import { manageNavigationButtons } from './utils.js';

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
      clickable: true,
    },
  });
};

export const initSwiperPrograms = () => {
  const programsSwiper = new Swiper('.programs__swiper', {
    modules: [Scrollbar, Navigation],
    direction: 'horizontal',
    navigation: {
      nextEl: programsButtonNext,
      prevEl: programsButtonPrev,
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
          el: programsScrollbar,
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

  manageNavigationButtons(programsSwiper, programsButton);

  return programsSwiper;
};
