
export const removeButtonHref = () => {
  const disabledLinks = document.querySelectorAll('.button__is--disabled');
  disabledLinks.forEach((link) => {
    link.removeAttribute('href');
  });
};
