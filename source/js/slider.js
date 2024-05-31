import Swiper from 'swiper';
import { Grid, Manipulation, Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules';
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
    modules: [Scrollbar, Navigation, Manipulation],

    direction: 'horizontal',
    loop: false,
    autoplay: false,

    slidesPerView: 'auto',
    initialSlide: 0,

    scrollbar: {
      el: '.swiper-scrollbar',
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
}

export function sliderNews() {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.news__slider', {
      modules: [Pagination, Navigation, Grid, Manipulation],

      direction: 'horizontal',
      loop: false,
      autoplay: false,
      autoHeight: true,

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

      on: {
        init: function getClone() {
          const wrapper = document.querySelector('.news__wrapper');
          const slide = wrapper.querySelector('.news__slide-one');
          const slide2 = wrapper.querySelector('.news__slide-two');
          const slide3 = wrapper.querySelector('.news__slide-three');
          const slide4 = wrapper.querySelector('.news__slide-four');

          const clone = slide.cloneNode(true);
          wrapper.append(clone);

          clone.style.top = '-20px';

          const clone2 = slide2.cloneNode(true);
          wrapper.appendChild(clone2);

          clone2.style.top = '-20px';

          const clone3 = slide3.cloneNode(true);
          wrapper.appendChild(clone3);

          clone3.style.top = '-20px';

          const clone4 = slide4.cloneNode(true);
          wrapper.appendChild(clone4);

          clone4.style.top = '-20px';
        }
      },

      breakpoints: {
        320: {
          width: 290,
          grid: {
            rows: 2,
            fill: 'row',
          },
          slidesPerView: 1,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          autoHeight: false,
        }
      },

    });

  });
}
