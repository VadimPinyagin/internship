import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

export const initSwiperHero = () => {
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
