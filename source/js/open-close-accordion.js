const toggleAccordion = () => {
  const accordionPanels = Array.from(document.querySelectorAll('.accordion__panel'));
  const initiallyOpenId = 'accordion-content-3';

  accordionPanels.forEach((currentPanel) => {
    const currentButton = currentPanel.querySelector('.accordion__trigger');
    const controlsId = currentButton.getAttribute('aria-controls');
    const currentContent = document.getElementById(controlsId);

    currentButton.classList.add('accordion__trigger--default');
    currentContent.classList.add('accordion__content--hidden');

    if (controlsId === initiallyOpenId) {
      currentButton.classList.remove('accordion__trigger--default');
      currentButton.classList.add('accordion__trigger--open');
      currentPanel.classList.add('accordion__panel--is-open');
      currentContent.classList.remove('accordion__content--hidden');
    }

    currentButton.addEventListener('click', () => {
      currentButton.classList.toggle('accordion__trigger--default');
      currentButton.classList.toggle('accordion__trigger--open');

      const isOpen = currentPanel.classList.toggle('accordion__panel--is-open');
      if (isOpen) {
        currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
        currentContent.classList.remove('accordion__content--hidden');
      } else {
        currentContent.style.maxHeight = '0';
        currentContent.classList.add('accordion__content--hidden');
      }
    });
  });
};

toggleAccordion ();
