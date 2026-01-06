import { mainNav, toggle, toggleIcon, iconOpen, iconClose} from './constants.js';
import { replaceIcon } from './utils.js';
mainNav.classList.add('header__menu--is-close');

export const toggleMenu = () => {

  if (toggle) {
    toggle.addEventListener('click', () => {
      mainNav.classList.toggle('header__menu--is-open');
      mainNav.classList.toggle('header__menu--is-close');
      toggle.classList.toggle('header__toggle--opened');
      replaceIcon(toggleIcon, iconOpen, iconClose);
    });
  }
};


