import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';


export function slider() {
  new Swiper('.swiper', {
    modules: [Navigation],

    direction: 'horizontal',
    loop: true,

    loopedSlides: 3,

    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },

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

