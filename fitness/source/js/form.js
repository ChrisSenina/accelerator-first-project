const form = document.querySelector('.form__form');

export function isValid() {
  form.addEventListener('submit', (event) => {

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const error = document.querySelector('.form__error');
    const errorPhone = document.querySelector('.form__error-phone');

    if (name.value === '') {
      error.innerHTML = 'Имя должно содежать не менее двух символов';
      name.classList.add('form__input-error');
      event.preventDefault();
    } else {
      SubmitEvent();
    }

    if (phone.value === '') {
      errorPhone.innerHTML = 'Введите телефон в формате +79993322';
      phone.classList.add('form__input-error');
      event.preventDefault();
    } else {
      SubmitEvent();
    }
  });
}
