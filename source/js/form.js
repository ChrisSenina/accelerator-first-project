const form = document.querySelector('.form__form');
const phoneInput = form.querySelector('.form__input-phone');
const emailInput = form.querySelector('.form__input-email');

export function isValidate() {
  form.addEventListener('submit', (evt) => {

    phoneInput.addEventListener('input', () => {
      phoneInput.setCustomValidity('');
      phoneInput.checkValidity();
    });

    phoneInput.addEventListener('invalid', () => {
      if (phoneInput.matches('^((\+7|)+([0-9]){10})$')) {
        SubmitEvent();
      } else {
        evt.preventDefault();
        phoneInput.classList.add('form__input-error');
        phoneInput.setCustomValidity('Введите телефон в формате: +79996663322');
      }
    });

    emailInput.addEventListener('input', () => {
      emailInput.setCustomValidity('');
      emailInput.checkValidity();
    });

    emailInput.addEventListener('invalid', () => {
      if (emailInput.matches('[a-zA-Zа-яА-Я0-9_\-\.]{2,}@[a-zA-Zа-яА-Я]{2,}\.[a-zA-Zа-яА-Я]{2,}')) {
        SubmitEvent();
      } else {
        evt.preventDefault();
        emailInput.classList.add('form__input-error');
        emailInput.setCustomValidity('Введите email в формате: example@example.ru');
      }
    });
  });
}
