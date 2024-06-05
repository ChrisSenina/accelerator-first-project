const form = document.querySelector('.form__form');

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
      SubmitEvent();
    }

    if (phone.value === '') {
      phone.classList.add('form__input-error');
      event.preventDefault();
    } else {
      SubmitEvent();
    }

    if (message.value === '') {
      message.classList.add('form__input-error');
      event.preventDefault();
    } else {
      SubmitEvent();
    }

    if (select.value === '') {
      select.classList.add('form__input-error');
      event.preventDefault();
    } else {
      SubmitEvent();
    }

    checkbox.required = true;
    if (checkbox.value === '') {
      checkbox.classList.add('form__input-error');
      event.preventDefault();
    } else {
      SubmitEvent();
    }
  });
}
