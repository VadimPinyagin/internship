import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import {menuOpenClose} from './open-close-nav.js';

const initSwiperHero = () => {
  new Swiper('.hero', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

menuOpenClose();
initSwiperHero();
