export function inputMask() {
  document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('input[data-tel-input]');

    const getInputNumbersValue = function (input) {
      // Вырезаем все символы, кроме цифр
      return input.value.replace(/\D/g, '');
    };

    const onPhonePaste = function (e) {
      const input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
      const pasted = e.clipboardData || window.clipboardData;
      if (pasted) {
        const pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
          // Если происходит попытка ввода нечисловых символов - удляем их
          // сбрасыываем форматирование
          input.value = inputNumbersValue;
        }
      }
    };

    const onPhoneInput = function (e) {
      // eslint-disable-next-line prefer-const
      let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        // eslint-disable-next-line prefer-const
        selectionStart = input.selectionStart,
        formattedInputValue = '';

      if (!inputNumbersValue) {
        // eslint-disable-next-line no-return-assign
        return input.value = '';
      }

      if (input.value.length !== selectionStart) {
        // форматирование в середение строки
        if (e.data && /\D/g.test(e.data)) {
          // если вводят нечисловые симоволы - сброс
          input.value = inputNumbersValue;
        }
        return;
      }

      if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] === '9') {
          inputNumbersValue = `7${inputNumbersValue}`;
        }
        const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
        formattedInputValue = input.value = `${firstSymbols} `;
        if (inputNumbersValue.length > 1) {
          formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
        }
      } else {
        formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
      }
      input.value = formattedInputValue;
    };
    const onPhoneKeyDown = function (e) {
      // Очистка инпута после ввода последнего символа
      const inputValue = e.target.value.replace(/\D/g, '');
      if (e.keyCode === 8 && inputValue.length === 1) {
        e.target.value = '';
      }
    };
    for (let i = 0; i < phoneInputs.length; i++) {
      let input = phoneInputs[i];
      input.addEventListener('keydown', onPhoneKeyDown);
      input.addEventListener('input', onPhoneInput, false);
      input.addEventListener('paste', onPhonePaste, false);
    }
  });
}
