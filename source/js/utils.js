const replaceIcon = (icon, classOpen, classClose) => {
  icon.classList.toggle(classOpen);
  icon.classList.toggle(classClose);
};

const manageNavigationButtons = (swiper, buttons) => {

  swiper.on('slideChange', () => {
    const isAtBeginning = swiper.isBeginning;
    const isAtEnd = swiper.isEnd;

    buttons.forEach((button) => {
      if (button.position === 'prev') {
        button.el.disabled = isAtBeginning;
      } else if (button.position === 'next') {
        button.el.disabled = isAtEnd;
      }
    });
  });
};

export { replaceIcon, manageNavigationButtons };
