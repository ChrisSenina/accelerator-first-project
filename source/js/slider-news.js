export const mob = window.matchMedia('(max-width: 767px)');
export const tab = window.matchMedia('(min-width: 768px)');
export const desk = window.matchMedia('(min-width: 1440px)');


export function mobile() {
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

export function tablet() {
  const wrapper = document.querySelector('.news__wrapper');
  const slide = wrapper.querySelector('.news__slide-one');
  const slide2 = wrapper.querySelector('.news__slide-two');
  const slide3 = wrapper.querySelector('.news__slide-three');
  const slide4 = wrapper.querySelector('.news__slide-four');

  const clone = slide.cloneNode(true);
  wrapper.append(clone);

  const clone2 = slide2.cloneNode(true);
  wrapper.appendChild(clone2);
  clone2.style.top = '0px';

  const clone3 = slide3.cloneNode(true);
  wrapper.appendChild(clone3);
  clone3.style.top = '0px';

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
}

export function desktop() {
  const wrapper = document.querySelector('.news__wrapper');
  const slide = wrapper.querySelector('.news__slide-one');
  const slide2 = wrapper.querySelector('.news__slide-two');
  const slide3 = wrapper.querySelector('.news__slide-three');
  const slide4 = wrapper.querySelector('.news__slide-four');

  const clone = slide.cloneNode(true);
  wrapper.append(clone);

  const clone2 = slide2.cloneNode(true);
  wrapper.appendChild(clone2);
  clone2.style.top = '0px';

  const clone3 = slide3.cloneNode(true);
  wrapper.appendChild(clone3);
  clone3.style.top = '0px';

  const clone4 = slide4.cloneNode(true);
  wrapper.appendChild(clone4);
  clone4.style.top = '0px';

  const clone5 = slide.cloneNode(true);
  wrapper.appendChild(clone5);
  clone5.style.top = '0px';

  const clone6 = slide2.cloneNode(true);
  wrapper.appendChild(clone6);
  clone6.style.top = '0px';

  const clone7 = slide3.cloneNode(true);
  wrapper.appendChild(clone7);
  clone7.style.top = '0px';

  const clone8 = slide4.cloneNode(true);
  wrapper.appendChild(clone8);
  clone8.style.top = '0px';

  const clone9 = slide.cloneNode(true);
  wrapper.appendChild(clone9);
  clone9.style.top = '0px';
}
