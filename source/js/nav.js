const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');
// const sub = document.querySelectorAll('.site-list__submenu');
const subToggle = document.querySelectorAll('.site-list__item--subopen');

export function navOpen() {

  nav.classList.add('nav--closed');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
    // document.body.style.position = 'fixed';
    // document.body.style.width = '100%';
  });
}

export function subOpen() {
  subToggle.forEach((item) => {
    const sub = item.querySelector('.site-list__submenu');
    sub.classList.add('site-list__submenu--closed');
    item.addEventListener('click', () => {
      sub.classList.toggle('site-list__submenu--closed');
      sub.classList.toggle('site-list__submenu--opened');
    });
  });
}
