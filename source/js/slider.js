import Swiper from 'swiper';
import { Grid, Manipulation, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import { mob, tab, desk, mobile, tablet, desktop } from './slider-news';

export function sliderHero() {
  document.addEventListener('DOMContentLoaded', () => {
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

      // on: {
      //   init: function () {
      //     let slide1 = document.querySelector('.hero__slide-one');
      //     let slide2 = document.querySelector('.hero__slide-two');
      //     let slide3 = document.querySelector('.hero__slide-three');
      //     let arr = ['slide1', 'slide2', 'slide3'];
      //     const index = arr.indexOf('slide1');

      //     if (!index === 0) {
      //       document.querySelector('.hero').style.background = 'red';
      //     }

      //   }
      // },

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
  });
}


export function sliderPrograms() {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.programs__slider', {
      modules: [Scrollbar, Navigation, Manipulation],

      direction: 'horizontal',
      loop: false,
      autoplay: false,

      slidesPerView: 'auto',
      initialSlide: 0,

      scrollbar: {
        el: '.swiper-scrollbar.programs__scrollbar',
        dragClass: 'swiper-scrollbar-drag',
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

          scrollbar: {
            dragSize: '326px',
          }
        },

        1440: {
          width: 1240,
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false,
          scrollbar: {
            dragSize: '394px',
            draggable: true,
          }
        }
      },
    });
  });
}

export function sliderNews() {
  document.addEventListener('DOMContentLoaded', () => {

    new Swiper('.news__slider', {
      modules: [Pagination, Navigation, Grid, Manipulation],

      direction: 'horizontal',
      loop: false,
      autoplay: false,
      autoHeight: false,
      observer: true,
      observeParents: true,
      loopAddBlankSlides: true,

      slideActiveClass: 'news__slide-active',

      navigation: {
        nextEl: '.swiper-button-next.news__button-next',
        prevEl: '.swiper-button-prev.news__button-prev',
        disabledClass: 'swiper-button-disabled',
      },

      pagination: {
        el: '.news__pagination',
        bulletElement: 'button',
        bulletClass: 'news__pagination-bullet swiper-pagination-bullet',
        bulletActiveClass: 'news__pagination-bullet--active swiper-pagination-bullet-active',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className}">${index + 1}</button>`;
        },

        on: {
          init: function onFocus() {
            'swiper-pagination-bullet'.setAttribute('tabIndex', 0);
          }
        }
      },

      breakpoints: {
        320: {
          width: 290,
          grid: {
            rows: 2,
            fill: 'row',
          },
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            dynamicBullets: true,
            dynamicMainBullets: 4,
          },
        },

        768: {
          width: 678,
          grid: {
            rows: 2,
            fill: 'rows',
          },
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: {
            dynamicBullets: true,
            dynamicMainBullets: 4,
          },
        },

        1440: {
          width: 1240,
          spaceBetween: 32,
          slidesPerView: 'auto',
          slidesPerGroup: 3,
          loopAddBlankSlides: true,
          loopAdditionalSlides: true,
          pagination: {
            dynamicBullets: true,
            dynamicMainBullets: 4,
          },
        }
      },
    });

    if (mob.matches) {
      mobile();
    }

    if (tab.matches) {
      tablet();
    } else {
      window.removeEventListener('resize', sliderNews);
    }

    // if (desktop.matches) {
    //   desktop();
    // }

    window.addEventListener('resize', sliderNews);
    window.addEventListener('load', sliderNews);
  });
}

export function sliderReviews() {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.reviews__slider', {
      modules: [Scrollbar, Navigation],
      direction: 'horizontal',

      loop: false,
      autoplay: false,
      autoHeight: false,

      navigation: {
        nextEl: '.swiper-button-next.reviews__button-next',
        prevEl: '.swiper-button-prev.reviews__button-prev',
        disabledClass: 'swiper-button-disabled',
      },

      scrollbar: {
        el: '.swiper-scrollbar.reviews__scrollbar',
        dragClass: 'swiper-scrollbar-drag reviews__scrollbar-drag',
        draggable: true,
      },

      breakpoints: {
        320: {
          width: 290,
          spaceBetween: 15,
          slidesPerView: 1,
        },

        768: {
          width: 560,
          spaceBetween: 30,
          slidesPerView: 1,
          autoHeight: false,
        },

        1440: {
          width: 1240,
          spaceBetween: 32,
          slidesPerView: 2,
        }
      }
    });
  });
}
