import { mainNav, toggle, toggleIcon, iconOpen, iconClose} from './constants.js';
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
