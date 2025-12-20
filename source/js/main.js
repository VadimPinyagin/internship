import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import {toggleMenu} from './open-close-nav.js';

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

toggleMenu();
initSwiperHero();
