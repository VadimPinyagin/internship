
const accordionPanels = Array.from(document.querySelectorAll('.accordion__panel'));

export const toggleAccordion = () => {
  accordionPanels.forEach((currentPanel) => {
    const currentButton = currentPanel.querySelector('.accordion__trigger');
    const currentContent = currentPanel.querySelector('.accordion__content');

    currentButton.classList.add('accordion__trigger--default');
    currentContent.classList.add('accordion__content--hidden');

    currentButton.addEventListener('click', () => {
      currentButton.classList.toggle('accordion__trigger--default');
      currentButton.classList.toggle('accordion__trigger--open');

      const isOpen = currentPanel.classList.toggle('accordion__panel--is-open');
      if (isOpen) {
        currentContent.classList.remove('accordion__content--hidden');
        currentContent.classList.add('accordion__content--visible');
      } else {
        currentContent.classList.remove('accordion__content--visible');
        currentContent.classList.add('accordion__content--hidden');
      }
    });
  });
};
