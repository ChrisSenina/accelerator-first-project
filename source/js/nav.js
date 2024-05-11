const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const menuButton = document.querySelector('.nav__toggle');

export function navOpen() {

  nav.classList.add('nav--closed');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      nav.classList.remove('nav--opened');
      nav.classList.add('nav--closed');
      document.body.style.position = '';
      document.body.style.width = '';
    });
  });
}
