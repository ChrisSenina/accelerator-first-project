import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

export function slider() {
  new Swiper('.juri__slider', {
    modules: [Navigation, Autoplay],

    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',

    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },

    speed: 1000,
    freeMode: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        width: 227,
        slidesPerView: 1,
        initialSlide: 2,
        spaceBetween: 40,
      },

      768: {
        width: 560,
        slidesPerView: 2,
        initialSlide: 0,
        spaceBetween: 40,
      },

      1366: {
        width: 1160,
        slidesPerView: 4,
        initialSlide: 0,
        spaceBetween: 40,
      }
    }
  });
}

export function sliderSecond() {
  new Swiper('.reviews__slider', {
    modules: [Navigation],

    loop: false,
    speed: 2000,

    slidesPerView: 'auto',

    direction: 'horizontal',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
      hideOnClick: true,
    },

    on: {
      slideChangeTransitionEnd: function () {
        if (this.isEnd) {
          this.navigation.$nextEl.classList.add('swiper-button-disabled');
        } else {
          this.navigation.$nextEl.classList.remove('swiper-button-disabled');
        }
        if (this.IsStart) {
          this.navigation.$prevEl.classList.add('swiper-button-disabled');
        } else {
          this.navigation.$prevEl.classList.remove('swiper-button-disabled');
        }
        this.navigation.update();
      }
    }
  });
}
