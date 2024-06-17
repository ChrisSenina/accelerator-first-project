const button = document.querySelector('.about__button');
const modal = document.querySelector('.modal');
const window = document.querySelector('.modal__window');
const toggle = document.querySelector('.modal__toggle');
const form = document.querySelector('.modal__form');
const dropdown = form.querySelector('.form__list');
const options = dropdown.querySelectorAll('.form__item');
const input = form.querySelector('.modal__input-select');

export function modalOpen() {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--show');
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.background = 'rgba(13, 29, 51, 0.4)';
  });

  toggle.addEventListener('click', () => {
    modal.classList.remove('modal--show');
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.style.background = '';
  });

  window.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', (evt) => {
    if (modal.contains(evt.target)) {
      modal.classList.remove('modal--show');
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.background = '';
    }
  });
}

export function isValidModal() {
  form.addEventListener('submit', (event) => {

    const name = document.getElementById('modal-name');
    const phone = document.getElementById('modal-phone');
    const select = document.getElementById('modal-select');
    const checkbox = document.getElementById('modal-checkbox');

    if (name.value === '') {
      name.classList.add('modal__input-error');
      event.preventDefault();
    }
    if (phone.value === '') {
      phone.classList.add('modal__input-error');
      event.preventDefault();
    }
    if (select.value === '') {
      select.classList.add('modal__input-error');
      event.preventDefault();
    }
    if (!checkbox.checked) {
      checkbox.classList.add('modal__input-error');
      checkbox.style.backgroundColor = 'unset';
      event.preventDefault();
    }
  });
}

export function selectModalChange() {
  dropdown.classList.add('closed');
  input.addEventListener('click', () => {
    dropdown.classList.toggle('closed');
    dropdown.classList.toggle('opened');
    input.classList.add('opened');
  });

  const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
  };

  const closeDropdownFromOutside = () => {
    if (!dropdown.classList.contains('opened')) {
      dropdown.classList.remove('opened');
      dropdown.classList.add('closed');
      input.classList.remove('opened');
    }
  };

  document.body.addEventListener('click', closeDropdownFromOutside);

  options.forEach((option) => {
    option.addEventListener('click', selectOption);
  });
}
