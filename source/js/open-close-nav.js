// const mainNav = document.querySelector('.header__nav--main');
// const headerButton = document.querySelector('.button--header');
const headerLogoOverlay = document.querySelector('.header__logo-overlay');
// mainNav.classList.add('header__nav--is-close');

// const closeMenu = () => {
//   mainNav.classList.remove('header__nav--is-open');
//   mainNav.classList.add('header__nav--is-close');
//   headerButton.classList.remove('button--menu-opened');
//   document.body.classList.remove('page__body--menu-open');
//   document.body.style.overflow = '';
//   document.body.style.marginRight = '';
// };

const buttonSubMenu = document.querySelectorAll('.header__nav-button');
const subMenu = document.querySelectorAll('.header__nav-list');
const anchorLinks = document.querySelectorAll('.menu-link');
const hiddenClass = 'header__nav-list--is-hidden';

const findAnElement = (elements) =>
  Array.from(elements).map((value, index) => ({ value, index })
);

const toggleSubMenu = () => {
  const currentButtons = findAnElement(buttonSubMenu);
  const currentSubMenus = findAnElement(subMenu);

  currentButtons.forEach(item => {
    const button = item.value;
    const buttonIndex = item.index;
    const related = currentSubMenus.find(s => s.index === buttonIndex).value;

    button.addEventListener('click', () => {
      button.classList.toggle('header__nav-button--is-active');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));

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

        const closeMenu = () => {
          related.classList.add(hiddenClass);
          button.classList.remove('button--menu-opened');
          headerLogoOverlay.classList.remove('header__logo-overlay--is-active');
          document.body.classList.remove('page__body--menu-open');
          document.body.style.overflow = '';
          document.body.style.marginRight = '';
        };

        const handleEscapeKey = (event) => {
          if (event.key === 'Escape') {
            closeMenu();
          }
        };

        const handleClickOutside = (event, related, button, hiddenClass, closeMenu) => {
          const isClickInside = related.contains(event.target) || button.contains(event.target);
          if (!isClickInside && !related.classList.contains(hiddenClass)) {
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


// let currentButton;
// let currentSubMenu;

// buttonSubMenu.forEach((value, index) => {
//   if(index === 0){
//     currentButton = value;
//     console.log(currentButton);
//   }
// });

// subMenu.forEach((value, index) => {
//   if(index === 0){
//     currentSubMenu = value;
//     console.log(currentSubMenu);
//   }
// });


// button.addEventListener('click', (e) => {
//   button.classList.toggle('active')

//   if (button.classList.contains('active')) {
//     button.setAttribute('aria-expanded', 'true')
//     menu.setAttribute('aria-hidden', 'false')
//     menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
//   } else {
//     button.setAttribute('aria-expanded', 'false')
//     menu.setAttribute('aria-hidden', 'true')
//     menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
//   }
// })

// const toggleMenu = () => {
//   if (headerButton) {
//     headerButton.addEventListener('click', () => {
//       const isOpen = mainNav.classList.toggle('header__nav--is-open');
//       headerLogo.classList.add('header__logo--overlay');
//       mainNav.classList.toggle('header__nav--is-close', !isOpen);
//       headerButton.classList.toggle('button--menu-opened');

//       const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

//       if (isOpen) {
//         document.body.style.overflow = 'hidden';
//         document.body.style.marginRight = `${scrollbarWidth}px`;
//       } else {
//         document.body.style.overflow = '';
//         document.body.style.marginRight = '';
//         headerLogo.classList.remove('header__logo--overlay');
//       }
//       document.body.classList.toggle('page__body--menu-open', isOpen);
//     });
//     const handleEscapeKey = (event) => {
//       if (event.key === 'Escape') {
//         closeMenu();
//       }
//     };
//     const handleClickOutside = (event) => {
//       const isClickInside = mainNav.contains(event.target) || headerButton.contains(event.target);
//       if (!isClickInside && mainNav.classList.contains('header__nav--is-open')) {
//         closeMenu();
//       }
//     };
//     const handleAnchorClick = () => {
//       closeMenu();
//     };
//     const anchorLinks = mainNav.querySelectorAll('a[href^="#"]');
//     anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));

//     document.addEventListener('click', handleClickOutside);
//     document.addEventListener('keydown', handleEscapeKey);
//   }
// };

// toggleMenu();
