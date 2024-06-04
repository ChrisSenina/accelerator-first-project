import Swiper from 'swiper';
import { Grid, Manipulation, Navigation, Pagination, Scrollbar } from 'swiper/modules';
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



    // on: {
    //   init: function change() {
    //     const hero = document.querySelector('.hero');
    //     const slide = document.querySelector('.hero__slide');
    //     if (slide.classList.contains('hero__slide-one')) {
    //       hero.style.background = 'red';
    //     } else {
    //       hero.style.background = 'unset';
    //     }
    //   slide
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

          if (window.innerWidth < 767) {
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

          } if (window.innerWidth >= 768) {

            const clone = slide.cloneNode(true);
            wrapper.append(clone);

            const clone2 = slide2.cloneNode(true);
            wrapper.appendChild(clone2);

            // clone2.style.top = '-30px';

            const clone3 = slide3.cloneNode(true);
            wrapper.appendChild(clone3);

            // clone3.style.top = '-30px';

            const clone4 = slide4.cloneNode(true);
            wrapper.appendChild(clone4);

            clone4.style.top = '-30px';

            const clone5 = slide.cloneNode(true);
            wrapper.appendChild(clone5);

            clone5.style.top = '-30px';

            const clone6 = slide2.cloneNode(true);
            wrapper.appendChild(clone6);

            clone6.style.top = '-30px';

            const clone7 = slide3.cloneNode(true);
            wrapper.appendChild(clone7);

            clone7.style.top = '-30px';

            const clone8 = slide4.cloneNode(true);
            wrapper.appendChild(clone8);

            clone8.style.top = '-30px';

            const clone9 = slide.cloneNode(true);
            wrapper.appendChild(clone9);

            clone9.style.top = '-30px';

          } if (window.innerWidth >= 1440) {

            const clone = slide.cloneNode(true);
            wrapper.append(clone);

            clone.style.top = '0';

            const clone2 = slide2.cloneNode(true);
            wrapper.appendChild(clone2);

            clone2.style.top = '0';

            const clone3 = slide3.cloneNode(true);
            wrapper.appendChild(clone3);

            clone3.style.top = '0';

            const clone4 = slide4.cloneNode(true);
            wrapper.appendChild(clone4);

            clone4.style.top = '0';

            // const clone5 = slide.cloneNode(true);
            // wrapper.appendChild(clone5);

            // const clone6 = slide2.cloneNode(true);
            // wrapper.appendChild(clone6);

            // const clone7 = slide3.cloneNode(true);
            // wrapper.appendChild(clone7);

            // const clone8 = slide4.cloneNode(true);
            // wrapper.appendChild(clone8);
          }

          // Swiper.update();
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
        },

        1440: {
          grid: {
            rows: 1,
            fill: 'rows',
          },
          spaceBetween: 32,
          slidesPerView: 'auto',
          slidesPerGroup: 3,
          slideActiveClass: 'news__slide-active',
        }
      },

    });

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
