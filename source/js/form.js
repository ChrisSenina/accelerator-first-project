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
    } else {
      return (true);
    }

    if (phone.value === '') {
      phone.classList.add('form__input-error');
      event.preventDefault();
    } else {
      return (true);
    }

    if (message.value === '') {
      message.classList.add('form__input-error');
      event.preventDefault();
    } else {
      return (true);
    }

    if (select.value === '') {
      select.classList.add('form__input-error');
      event.preventDefault();
    } else {
      return (true);
    }

    checkbox.required = true;
    if (checkbox.value === '') {
      checkbox.classList.add('form__input-error');
      event.preventDefault();
    } else {
      return (true);
    }
  });
}

export function selectChange() {
  dropdown.classList.add('closed');
  input.addEventListener('click', () => {
    dropdown.classList.toggle('closed');
    dropdown.classList.toggle('opened');
  });

  const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
  };

  const closeDropdownFromOutside = () => {
    if (!dropdown.classList.contains('opened')) {
      dropdown.classList.remove('opened');
      dropdown.classList.add('closed');
    }
  };

  document.body.addEventListener('click', closeDropdownFromOutside);

  options.forEach((option) => {
    option.addEventListener('click', selectOption);
  });

}
