export const mainNav = document.querySelector('.nav');
export const toggle = document.querySelector('.toggle');
export const iconOpen = 'toggle__icon--open';
export const iconClose = 'toggle__icon--close';
export const toggleIcon = document.querySelector('.toggle__icon');
mainNav.classList.add('header__menu--is-close');

const replaceIcon = (icon, classOpen, classClose) => {
  icon.classList.toggle(classOpen);
  icon.classList.toggle(classClose);
};

const toggleMenu = () => {

  if (toggle) {
    toggle.addEventListener('click', () => {
      mainNav.classList.toggle('header__menu--is-open');
      mainNav.classList.toggle('header__menu--is-close');
      toggle.classList.toggle('header__toggle--opened');
      replaceIcon(toggleIcon, iconOpen, iconClose);
    });
  }
};

toggleMenu();
