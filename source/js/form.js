const form = document.querySelector('.form');
const dropdown = document.querySelector('.form__list');
const options = document.querySelectorAll('.form__item');
const input = document.querySelector('.form__input-select');

export function isValid() {
  form.addEventListener('submit', (event) => {

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const select = document.getElementById('select');
    const checkbox = document.getElementById('checkbox');

    if (name.value === '') {
      name.classList.add('form__input-error');
      event.preventDefault();
    }
    if (phone.value === '') {
      phone.classList.add('form__input-error');
      event.preventDefault();
    }
    if (message.value === '') {
      message.classList.add('form__input-error');
      event.preventDefault();
    }
    if (select.value === '') {
      select.classList.add('form__input-error');
      event.preventDefault();
    }
    if (!checkbox.checked) {
      checkbox.classList.add('form__input-error');
      checkbox.style.borderColor = '#ff5e66';
      event.preventDefault();
    }
  });
}

export function selectChange() {
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
