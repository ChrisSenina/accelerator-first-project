const form = document.querySelector('.form__form');
const phoneInput = form.querySelector('.form__input-phone');
const emailInput = form.querySelector('.form__input-email');

export function isValidate() {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });


  phoneInput.addEventListener('input', () => {
    phoneInput.setCustomValidity('');
    phoneInput.checkValidity();
  });

  phoneInput.addEventListener('invalid', () => {
    if(phoneInput.value === '') {
      phoneInput.classList.add('form__input-error');
      phoneInput.setCustomValidity('Введите телефон в формате: +79996663322');
    } else {
      SubmitEvent();
    }
  });

  emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
    emailInput.checkValidity();
  });

  emailInput.addEventListener('invalid', () => {
    if(emailInput.value === '') {
      emailInput.classList.add('form__input-error');
      emailInput.setCustomValidity('Введите email в формате: example@example.ru');
    } else {
      SubmitEvent();
    }
  });
}
