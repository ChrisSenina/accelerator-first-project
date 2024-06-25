import Swiper from 'swiper';
import { Manipulation, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';

export function sliderHero() {
  new Swiper('.hero__slider', {
    modules: [Pagination, A11y],

    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',
    initialSlide: 0,

    watchSlidesProgress: true,

    pagination: {
      el: '.swiper-pagination',
      bulletElement: 'button',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      type: 'bullets',
      clickable: true,

      on: {
        init: function onFocus() {
          'swiper-pagination-bullet'.setAttribute('tabIndex', 0);
        }
      }
    },

    ally: {
      paginationBulletMessage: 'Go to slide {{index}}',
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

  const resizeWindow = () => {
    const swiper = new Swiper('.advantages__slider', {
      modules: [Navigation, Manipulation],
      direction: 'horizontal',

      loop: true,
      loopAddBlankSlides: false,
      loopAdditionalSlides: 0,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      resizeObserver: true,
      updateOnWindowResize: true,
      centeredSlides: true,
      allowSlidePrev: true,
      allowSlideNext: true,

      width: 1200,
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 30,
      initialSlide: 1,

      navigation: {
        nextEl: '.swiper-button-next.advantages-button-next',
        prevEl: '.swiper-button-prev.advantages-button-prev',
      },

      on: {
        resize: function () {
          const originalSlides = swiper.slides;
          if (window.innerWidth >= 1440) {
            originalSlides.forEach((slide) => {
              swiper.appendSlide(slide.outerHTML);
            });
          } else {
            originalSlides.forEach((slide) => {
              swiper.removeSlide(slide.outerHTML);
            });
          }
        }
      }
    });

    if (1440 <= window.innerWidth) {
      setTimeout(() => {
        swiper.init();
        window.removeEventListener('load', resizeWindow);
        window.removeEventListener('resize', resizeWindow);
      }, 300);
    } else {
      swiper.destroy(true, true);
    }
  };

  window.addEventListener('load', resizeWindow);
  window.addEventListener('resize', resizeWindow);
}

export function sliderGallery() {
  new Swiper('.gallery__slider', {
    modules: [Navigation],

    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,

    navigation: {
      nextEl: '.swiper-button-next.gallery-button-next',
      prevEl: '.swiper-button-prev.gallery-button-prev',
    },

    on: {
      resize: function enableOnlyTablet(swiper) {
        if (1025 <= window.innerWidth) {
          swiper.disable();
          swiper.el.classList.add('-non-slider');
          swiper.destroy(true, true);
        } else {
          swiper.enable();
          swiper.el.classList.remove('-non-slider');
          swiper.update();
          swiper.init();
        }
      }
    },

    breakpoints: {
      320: {
        width: 320,
        spaceBetween: 5.5,
        slidesPerView: 2,
        initialSlide: 0,
      },

      768: {
        width: 768,
        spaceBetween: 5,
        slidesPerView: 3,
        initialSlide: 0,
      },
    }
  });
}
