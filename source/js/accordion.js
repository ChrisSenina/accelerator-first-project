const accordionContent = document.querySelectorAll('.accordion__content');

export function playAccordion () {
  accordionContent.forEach((item) => {
    const header = item.querySelector('h3');
    header.addEventListener('click', () => {
      item.classList.toggle('open');

      const description = item.querySelector('p');
      description.style.height = '0px';

      const input = item.querySelector('.accordion__input');
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
