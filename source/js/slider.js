import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';

export function sliderHero() {
  new Swiper('.hero__slider', {
    modules: [Pagination],

    direction: 'horizontal',

    loop: true,

    slidesPerView: 'auto',
    initialSlide: 0,
    autoHeight: true,

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
        width: 320,
      },

      768: {
        width: 768,
      },

      1440: {
        width: 1440,
      }
    }

  });
}


export function sliderPrograms() {
  new Swiper('.programs__slider', {
    modules: [Scrollbar, Navigation],

    direction: 'horizontal',
    loop: false,

    slidesPerView: 'auto',
    initialSlide: 0,

    scrollbar: {
      el: '.swiper-scrollbar',
      dragClass: 'swiper-scrollbar-drag',
      dragSize: '326px',
      draggable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next.programs__button-next',
      prevEl: '.swiper-button-prev.programs__button-prev',
      disabledClass: 'swiper-button-disabled',
    },

    breakpoints: {
      320: {
        width: 290,
        slidesPerView: 1,
      },

      768: {
        width: 678,
        spaceBetween: 30,
        slidesPerView: 2,
      },

      1440: {
        width: 1240,
        spaceBetween: 32,
        allowTouchMove: false,
      }
    }

  });
}
