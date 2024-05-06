const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const menuButton = document.querySelector('.nav__toggle');

export function navOpen() {

  // if (document.documentElement.clientWidth < 1440) {
  nav.classList.add('nav--closed');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      nav.classList.remove('nav--opened');
      nav.classList.add('nav--closed');
    });
  });
}
