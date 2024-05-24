const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');
const subToggle = document.querySelectorAll('.site-list__item--subopen');

export function navOpen() {

  nav.classList.add('nav--closed');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');

    if (!nav.classList.contains('nav--closed')) {
      document.body.style.background = 'rgba(13, 29, 51, 0.4)';
    } else {
      document.body.style.background = 'unset';
    }
    // document.body.style.position = 'fixed';
    // document.body.style.width = '100%';
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
      nav.classList.remove('nav--opened');
      nav.classList.add('nav--closed');
    }
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
