const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');


export function navOpen() {
  nav.classList.add('nav--closed');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
  });
}
