import Swiper from 'swiper';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

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
      nextEl: '.programs__button-next',
      prevEl: '.programs__button-prev',
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
          el: '.programs__swiper-scrollbar',
          draggable: true,
          dragSize: '324',
          hide: false,
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

  return programsSwiper;
};

export const initSwiperReviews = () => {
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    modules: [Scrollbar, Navigation],
    direction: 'horizontal',
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
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
          el: '.reviews__swiper-scrollbar',
          draggable: true,
          dragSize: 'auto',
          hide: false,
        },
        centeredSlides: false,
        slidesPerView: 1,
        width: 560,
        spaceBetween: 30,
      },
      1440: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });

  return reviewsSwiper;
};
