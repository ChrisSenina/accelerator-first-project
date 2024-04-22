const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');

export function navOpen() {

  // if (document.documentElement.clientWidth < 1440) {
  nav.classList.add('nav--closed');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
  });
}

