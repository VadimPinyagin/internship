import Swiper from 'swiper';
import { Grid, Pagination, Navigation, Scrollbar } from 'swiper/modules';

const initSwiperHero = () => {
  const heroSwiper = new Swiper('.hero', {
    autoHeight: true,
    direction: 'horizontal',
    loop: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-slide-active [data-hero-pagination]',
      type: 'bullets',
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        heroSwiper.pagination.init();
        heroSwiper.pagination.render();
        heroSwiper.pagination.update();
      }
    },
    0: {
      centeredSlides: true,
      slidesPerView: 'auto',
    },
  });

  return heroSwiper;
};

initSwiperHero();

const initSwiperPrograms = () => {
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

initSwiperPrograms();

const initSwiperReviews = () => {
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

initSwiperReviews();

const initTabsNewsSwiper = () => {
  const newsSwiperTabs = new Swiper('.news__swiper-tabs', {
    breakpoints: {
      0: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 'auto',
      },
    },
  });

  const container = document.querySelector('.news__swiper-tabs');
  if (container) {
    container.addEventListener('click', (e) => {
      const slideEl = e.target.closest('.swiper-slide');
      if (!slideEl) {
        return;
      }
      const index = Array.prototype.indexOf.call(newsSwiperTabs.slides, slideEl);
      if (index === -1) {
        return;
      }
      const targetIndex = Math.max(0, index - 1);
      newsSwiperTabs.slideTo(targetIndex, 300);
    });
  }

  return newsSwiperTabs;
};

document.addEventListener('DOMContentLoaded', () => {
  initTabsNewsSwiper();
});

initTabsNewsSwiper();

const initNewsSwiper = () => {
  const newsSwiper = new Swiper('.news__swiper-container', {
    modules: [Grid, Navigation, Pagination],
    observer: true,
    observeParents: true,
    speed: 1000,
    loop: false,
    breakpoints: {
      320: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
      768: {
        spaceBetween: 30,
        slidesPerGroup: 2,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1440: {
        spaceBetween: 32,
        slidesPerView: 'auto',
        grid: {
          rows: 1,
        },
      },
    },
    pagination: {
      el: '.news__swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => `<button class="news__pagination-button ${className}" type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`,
    },
    navigation: {
      nextEl: '.news__button-next',
      prevEl: '.news__button-prev',
    },
  });

  return newsSwiper;
};

initNewsSwiper();
