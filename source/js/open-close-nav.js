const headerLogoOverlay = document.querySelector('.header__logo-overlay');
const buttonsMenu = document.querySelectorAll('.header__nav-button');
const menu = document.querySelectorAll('.header__nav-list');
const hiddenClass = 'header__nav-list--is-hidden';

const findAnElement = (elements) =>
  Array.from(elements).map((value, index) => ({ value, index }));

const toggleSubMenu = () => {
  const buttons = findAnElement(buttonsMenu);
  const currentSubMenus = findAnElement(menu);

  document.addEventListener('DOMContentLoaded', () => {
    currentSubMenus.forEach((item) => item.value.classList.add('header__nav-list--is-hidden'));
  });

  buttons.forEach((item) => {
    const button = item.value;
    const buttonIndex = item.index;
    const related = menu[buttonIndex];

    button.addEventListener('click', () => {
      button.classList.toggle('header__nav-button--is-active');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));

      const closeMenu = () => {
        related.classList.add(hiddenClass);
        menu.forEach((subMenu, index) => {
          if (index > 0) {
            subMenu.classList.add(hiddenClass);
          }
        });
        button.classList.remove('header__nav--submenu-button--open');
        button.classList.remove('button--menu-opened');
        headerLogoOverlay.classList.remove('header__logo-overlay--is-active');
        document.body.classList.remove('page__body--menu-open');
        document.body.style.overflow = '';
        document.body.style.marginRight = '';
      };

      if (related){
        related.classList.toggle(hiddenClass);
      }

      if(buttonIndex > 0) {
        button.classList.toggle('header__nav--submenu-button--open');
      }

      if(buttonIndex === 0) {
        button.classList.toggle('button--menu-opened');
        headerLogoOverlay.classList.toggle('header__logo-overlay--is-active');
        document.body.classList.toggle('page__body--menu-open');
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
        document.body.style.marginRight = document.body.style.marginRight === `${scrollbarWidth}px` ? '' : `${scrollbarWidth}px`;

        const handleEscapeKey = (event) => {
          if (event.key === 'Escape') {
            closeMenu();
          }
        };

        const handleClickOutside = (event) => {
          const clickInside = related.contains(event.target) || button.contains(event.target);
          if (!clickInside && !related.classList.contains(hiddenClass)) {
            closeMenu();
          }
        };

        const handleAnchorClick = () => {
          closeMenu();
        };
        const anchorLinks = related.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));
        document.addEventListener('keydown', handleEscapeKey);
        document.addEventListener('click', (element) => handleClickOutside(element, related, button, hiddenClass, closeMenu));
      }
    });
  });
};

toggleSubMenu();
