const mainNav = document.querySelector('.header__nav');
const headerButton = document.querySelector('.button--header');
const headerLogo = document.querySelector('.header__logo');
mainNav.classList.add('header__nav--is-close');

const closeMenu = () => {
  mainNav.classList.remove('header__nav--is-open');
  mainNav.classList.add('header__nav--is-close');
  headerButton.classList.remove('button--menu-opened');
  document.body.classList.remove('page__body--menu-open');
  document.body.style.overflow = '';
  document.body.style.marginRight = '';
};

const toggleMenu = () => {
  if (headerButton) {
    headerButton.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('header__nav--is-open');
      headerLogo.classList.add('header__logo--overlay');
      mainNav.classList.toggle('header__nav--is-close', !isOpen);
      headerButton.classList.toggle('button--menu-opened');

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = '';
        document.body.style.marginRight = '';
        headerLogo.classList.remove('header__logo--overlay');
      }
      document.body.classList.toggle('page__body--menu-open', isOpen);
    });
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    const handleClickOutside = (event) => {
      const isClickInside = mainNav.contains(event.target) || headerButton.contains(event.target);
      if (!isClickInside && mainNav.classList.contains('header__nav--is-open')) {
        closeMenu();
      }
    };
    const handleAnchorClick = () => {
      closeMenu();
    };
    const anchorLinks = mainNav.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
  }
};

toggleMenu();
