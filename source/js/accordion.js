const accordionContent = document.querySelectorAll('.accordion__content');

export function playAccordion() {
  accordionContent.forEach((item, index) => {
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
