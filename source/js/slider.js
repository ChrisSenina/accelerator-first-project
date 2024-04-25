import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export function sliderHero() {
  new Swiper('.hero__slider', {
    modules: [Pagination],

    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    initialSlide: 0,

    watchSlidesProgress: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    allowTouchMove: true,

  });
}

export function sliderTours() {
  new Swiper('.tours__slider', {
    modules: [Navigation],

    direction: 'horizontal',
    loop: false,

    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next.tours-button-next',
      prevEl: '.swiper-button-prev.tours-button-prev',
    },

    breakpoints: {
      320: {
        width: 290,
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 15,
      },

      768: {
        width: 678,
        slidesPerView: 2,
        initialSlide: 0,
        spaceBetween: 18,
      },

      1366: {
        width: 1200,
        slidesPerView: 3,
        initialSlide: 0,
        spaceBetween: 30,
      }
    }
  });
}

export function sliderTraining() {
  new Swiper('.training__slider', {
    modules: [Navigation],
    direction: 'horizontal',

    loop: false,

    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next.training-button-next',
      prevEl: '.swiper-button-prev.training-button-prev',
    },

    breakpoints: {
      320: {
        width: 290,
        slidesPerView: 1,
        initialSlide: 2,
        spaceBetween: 15,
      },

      768: {
        width: 678,
        slidesPerView: 3,
        initialSlide: 0,
        spaceBetween: 20,
      },

      1440: {
        width: 1200,
        slidesPerView: 4,
        initialSlide: 0,
        spaceBetween: 20,
      }
    }
  });
}

export function sliderReviews() {
  new Swiper('.reviews__slider', {
    modules: [Navigation],
    direction: 'horizontal',

    loop: false,

    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next.reviews-button-next',
      prevEl: '.swiper-button-prev.reviews-button-prev',
    },

    breakpoints: {
      320: {
        width: 290,
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 15,
      },

      768: {
        width: 565,
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 30,
      },

      1440: {
        width: 700,
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 120,
      },
    }
  });
}

export function sliderAdv() {
  new Swiper('.advantages__slider', {
    modules: [Navigation],
    direction: 'horizontal',

    loop: false,
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,

    navigation: {
      nextEl: '.swiper-button-next.advantages-button-next',
      prevEl: '.swiper-button-prev.advantages-button-prev',
    },

    on: {
      resize: function enableOnlyDesktop(swiper) {
        if (1440 > window.innerWidth) {
          swiper.disable();
          swiper.el.classList.add('-non-slider')
          swiper.destroy();
        } else {
          swiper.enable();
          swiper.el.classList.remove('-non-slider');
          swiper.init();
        }
      }
    },

    breakpoints: {
      1440: {
        width: 1200,
        slidesPerView: 4,
        initialSlide: 1,
        spaceBetween: 30,
      }
    }
  });
}

