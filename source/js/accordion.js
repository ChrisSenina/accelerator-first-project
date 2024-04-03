const accordionContent = document.querySelectorAll('.accordion__content');
const accordionInput = document.querySelectorAll('.accordion__input');

export function playAccordion() {
  accordionInput.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        const prevIndex = (index - 1 + accordionInput.length) % accordionInput.length;
        accordionInput[prevIndex].focus();
        event.preventDefault();
      } else if (event.key === 'ArrowDown') {
        const nextIndex = (index + 1) % accordionInput.length;
        accordionInput[nextIndex].focus();
        event.preventDefault();
      } else if (event.key === 'Enter') {
        item.click();
        event.preventDefault();
      }
    });
  });

  accordionContent.forEach((item) => {
    // eslint-disable-next-line prefer-const
    let header = item.querySelector('h3');
    header.addEventListener('click', () => {
      item.classList.toggle('open');

      // eslint-disable-next-line prefer-const
      let description = item.querySelector('p');
      // eslint-disable-next-line prefer-const
      let input = item.querySelector('.accordion__input');
      if (item.classList.contains('open')) {
        input.classList.add('open');
        description.style.height = `${description.scrollHeight}px`;
      } else {
        input.classList.remove('open');
        description.style.height = '0px';
      }
    });


  });
}
