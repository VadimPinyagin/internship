// import {findAnElement, processElements} from './utils.js';

// const headerLogoOverlay = document.querySelector('.header__logo-overlay');

const nav = document.querySelector('.header__nav');

nav.addEventListener('click', (e) => {
  if(e.target === nav.firstElementChild) {
    const btnBurger = nav.firstElementChild;
    const mainMenu = btnBurger.nextElementSibling;
    btnBurger.classList.toggle('btn--menu-opened');
    mainMenu.style.display = mainMenu.style.display === 'flex' ? 'none' : 'flex';
  } else if (e.target.tagName === 'BUTTON') {
    const subButton = e.target;
    subButton.classList.toggle('header__nav--submenu-open-button');
    const subMenu = subButton.nextElementSibling;
    subMenu.style.display = subMenu.style.display === 'flex' ? 'none' : 'flex';
  }
});
// const allMenuButtons = document.querySelectorAll('.header__nav-button');
// const anchorLinks = mainMenu.querySelectorAll('a[href^="#"]');

// const buttons = findAnElement(allMenuButtons);
// const subButtons = buttons.filter((item) => item.value !== btnBurger);
// const submenuCollection = subButtons.map((item) => item.value.nextElementSibling);
// const subMenus = findAnElement(submenuCollection);

// const closeSubMenu = () => {
//   processElements(subMenus, (currentMenu) => {
//     currentMenu.classList.add(subMenuHiddenClass);
//   });
// };

// document.addEventListener('DOMContentLoaded', () => {
//   closeSubMenu();
// });

// const closeMenu = () => {
//   btnBurger.classList.remove('button--menu-opened');
//   mainMenu.classList.remove('header__menu--is-open');
//   mainMenu.classList.add('header__nav--is-close');
//   headerLogoOverlay.classList.remove('header__logo-overlay--is-active');
//   document.body.classList.remove('page__body--menu-open');
//   document.body.style.overflow = '';
//   document.body.style.marginRight = '';
//   closeSubMenu();

//   if(closeSubMenu) {
//     processElements(subButtons, (button) => {
//       button.classList.remove('header__nav--submenu-open-button');
//     });
//   }
// };

// const openSubMenu = () => {
//   processElements(subButtons, (button) => {
//     button.classList.remove('header__nav--submenu-open-button');
//     const currentMenu = button.nextElementSibling;
//     button.addEventListener('click', () => {
//       button.classList.toggle('header__nav--submenu-open-button');
//       const expanded = button.getAttribute('aria-expanded') === 'true';
//       button.setAttribute('aria-expanded', String(!expanded));
//       currentMenu.classList.toggle(subMenuHiddenClass);
//     });
//   });
// };

// const handleClickOutside = (event) => {
//   const isClickInside = mainMenu.contains(event.target) || btnBurger.contains(event.target);
//   if (!isClickInside && !mainMenu.classList.contains(hiddenClass)) {
//     closeMenu();
//   }
// };

// const handleAnchorClick = () => {
//   closeMenu();
// };

// const toggleMenu = () => {

//   navContainer.addEventListener('click', (event) => {

//     if (!mainMenu.contains(event.target) && btnBurger) {

//       btnBurger.classList.toggle('button--menu-opened');
//       const isOpen = mainMenu.classList.toggle('header__menu--is-open');
//       mainMenu.classList.toggle(hiddenClass, !isOpen);
//       headerLogoOverlay.classList.toggle('header__logo-overlay--is-active');
//       document.body.classList.toggle('page__body--menu-open', isOpen);
//     }
//   });
//   document.addEventListener('click', handleClickOutside);
//   document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//       closeMenu();
//     }
//   });
//   openSubMenu();
//   anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));
// };

// toggleMenu();
