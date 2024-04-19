import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export function sliderHero() {
  new Swiper('.hero__slider', {
    modules: [Pagination],

    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',

    pagination: {
      el: '.swiper-pagination',
    },

    allowTouchMove: true,

  });
}

export function sliderTours() {
  new Swiper('.tours__slider', {
    modules: [Navigation],

    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',
  });
}
