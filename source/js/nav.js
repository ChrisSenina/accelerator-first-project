const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');
const siteLink = document.querySelectorAll('.site-list__link');
const subToggle = document.querySelectorAll('.site-list__item--subopen');
const subLink = document.querySelectorAll('.site-list__subitem-link');

export function navOpen() {

  nav.classList.add('nav--closed');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');

    if (!nav.classList.contains('nav--closed')) {
      document.body.style.background = 'rgba(13, 29, 51, 0.4)';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.querySelector('.hero__wrap').style.background = 'rgba(13, 29, 51, 0.4)';
      document.querySelector('.hero__wrap').style.zIndex = '1';
      document.querySelector('.header__logo').style.opacity = '0.2';

    } else {
      document.body.style.background = '#f0efe9';
      document.body.style.position = '';
      document.body.style.width = '';
      document.querySelector('.hero__wrap').style.background = 'unset';
      document.querySelector('.hero__wrap').style.zIndex = 'unset';
      document.querySelector('.header__logo').style.opacity = 'unset';
    }
  });

  siteLink.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        const prevIndex = (index - 1 + siteLink.length) % siteLink.length;
        siteLink[prevIndex].focus();
        event.preventDefault();
      } else if (event.key === 'ArrowDown') {
        const nextIndex = (index + 1) % siteLink.length;
        siteLink[nextIndex].focus();
        event.preventDefault();
      } else if (event.key === 'Enter') {
        item.click();
        event.preventDefault();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
      nav.classList.remove('nav--opened');
      nav.classList.add('nav--closed');
      document.body.style.background = '#f0efe9';
      document.body.style.position = '';
      document.body.style.width = '';
      document.querySelector('.hero__wrap').style.background = 'unset';
      document.querySelector('.hero__wrap').style.zIndex = 'unset';
      document.querySelector('.header__logo').style.opacity = 'unset';
    }
  });
}

export function subOpen() {
  subToggle.forEach((item) => {
    const sub = item.querySelector('.site-list__submenu');
    sub.style.height = '0px';
    sub.classList.add('site-list__submenu--closed');

    item.addEventListener('click', () => {
      sub.classList.toggle('site-list__submenu--closed');
      sub.classList.toggle('site-list__submenu--opened');
      if (!sub.classList.contains('site-list__submenu--closed')) {
        item.classList.add('site-list__item--active');
        sub.style.height = `${sub.scrollHeight}px`;
      } else {
        item.classList.remove('site-list__item--active');
        sub.style.height = '0px';
      }
    });
  });

  subLink.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        const prevIndex = (index - 1 + subLink.length) % subLink.length;
        subLink[prevIndex].focus();
        event.preventDefault();
      } else if (event.key === 'ArrowDown') {
        const nextIndex = (index + 1) % subLink.length;
        subLink[nextIndex].focus();
        event.preventDefault();
      } else if (event.key === 'Enter') {
        item.click();
        event.preventDefault();
      }
    });
  });
}
