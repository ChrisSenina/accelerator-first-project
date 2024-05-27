import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export function sliderHero() {
  new Swiper('.hero__slider', {
    modules: [Pagination],

    direction: 'horizontal',

    loop: true,
    autoHeight: true,

    slidesPerView: 'auto',
    initialSlide: 0,

    // on: {
    //   init:
    //     function changeImg () {
    //       const hero = document.querySelector('.hero');
    //       if (this.realIndex === 1) {
    //         hero.classList.add('hero-red');
    //       } else {
    //         hero.classList.remove('hero-red');
    //       }
    //     }
    // },

    pagination: {
      el: '.hero__pagination',
      bulletElement: 'button',
      bulletClass: 'hero__pagination-bullet swiper-pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active swiper-pagination-bullet-active',
      type: 'bullets',
      clickable: true,

      on: {
        init: function onFocus() {
          'swiper-pagination-bullet'.setAttribute('tabIndex', 0);
        }
      }
    },

    breakpoints: {
      320: {
        width: 290,
      }
    }

  });
}
