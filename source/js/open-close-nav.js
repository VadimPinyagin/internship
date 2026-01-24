const headerLogoOverlay = document.querySelector('.header__logo-overlay');
const navContainer = document.querySelector('.header__menu');
const hiddenClass = 'header__nav--is-close';
const subMenuHiddenClass = 'header__nav-list--submenu-is-hidden';
const allMenuButtons = document.querySelectorAll('.header__nav-button');
const btnBurger = navContainer.firstElementChild;
const mainMenu = btnBurger.nextElementSibling;
const anchorLinks = mainMenu.querySelectorAll('a[href^="#"]');

const findAnElement = (elements) =>
  Array.from(elements).map((value, index) => ({ value, index }));

const buttons = findAnElement(allMenuButtons);

const subButtons = buttons.filter((item) => item.value !== btnBurger); // Получил все кнопки кроме btnBurger.
const subMenus = subButtons.map((item) => item.value.nextElementSibling); // Получил все меню кроме mainMenu.

const closeSubMenu = () => {
  subMenus.forEach((currentMenu) => {
    currentMenu.classList.add(subMenuHiddenClass);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  closeSubMenu();
});

const closeMenu = () => {
  btnBurger.classList.remove('button--menu-opened');
  mainMenu.classList.remove('header__menu--is-open');
  mainMenu.classList.add('header__nav--is-close');
  headerLogoOverlay.classList.remove('header__logo-overlay--is-active');
  document.body.classList.remove('page__body--menu-open');
  document.body.style.overflow = '';
  document.body.style.marginRight = '';
  closeSubMenu();
};

const openSubMenu = () => {
  subButtons.forEach((item) => {
    const button = item.value;
    const currentMenu = button.nextElementSibling;
    button.addEventListener('click', () => {
      button.classList.toggle('header__nav--submenu-button--open');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      currentMenu.classList.toggle(subMenuHiddenClass);
    });
  });
};

const handleClickOutside = (event) => {
  const isClickInside = mainMenu.contains(event.target) || btnBurger.contains(event.target);
  if (!isClickInside && !mainMenu.classList.contains(hiddenClass)) {
    closeMenu();
  }
};

const handleAnchorClick = () => {
  closeMenu();
};

const toggleMenu = () => {

  navContainer.addEventListener('click', (event) => {

    if (!mainMenu.contains(event.target) && btnBurger) {
      btnBurger.classList.toggle('button--menu-opened');
      const isOpen = mainMenu.classList.toggle('header__menu--is-open');
      mainMenu.classList.toggle(hiddenClass, !isOpen);
      headerLogoOverlay.classList.toggle('header__logo-overlay--is-active');
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.toggle('page__body--menu-open', isOpen);

      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollbarWidth}px`;
      } else {
        closeMenu();
      }
    }
  });
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  });
  openSubMenu();
  anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));
};

toggleMenu();

