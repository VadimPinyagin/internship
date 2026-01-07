const replaceIcon = (icon, classOpen, classClose) => {
  icon.classList.toggle(classOpen);
  icon.classList.toggle(classClose);
};

export { replaceIcon };
