const mainNav = document.querySelector('.nav');
const toggle = document.querySelector('.toggle');
const iconOpen = 'toggle__icon--open';
const iconClose = 'toggle__icon--close';
const toggleIcon = document.querySelector('.toggle__icon');
mainNav.classList.add('header__menu--is-close');

const replaceIcon = (icon, classOpen, classClose) => {
  icon.classList.toggle(classOpen);
  icon.classList.toggle(classClose);
};

const closeMenu = () => {
  mainNav.classList.remove('header__menu--is-open');
  mainNav.classList.add('header__menu--is-close');
  toggle.classList.remove('header__toggle--opened');
  replaceIcon(toggleIcon, iconOpen, iconClose);
  document.body.classList.remove('page__body--menu-open');
  document.body.style.overflow = '';
};

const toggleMenu = () => {
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('header__menu--is-open');
      mainNav.classList.toggle('header__menu--is-close', !isOpen);
      toggle.classList.toggle('header__toggle--opened');
      replaceIcon(toggleIcon, iconOpen, iconClose);

      document.body.classList.toggle('page__body--menu-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('click', (event) => {
      const isClickInside = mainNav.contains(event.target) || toggle.contains(event.target);
      if (!isClickInside) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', handleEscapeKey);
  }
};

toggleMenu();

