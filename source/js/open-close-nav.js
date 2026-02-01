const nav = document.querySelector('.header__nav');
const btnBurger = nav.querySelector('.btn--burger');
const subButtons = nav.querySelectorAll('.header__nav-btn--submenu');
const anchorLinks = nav.querySelectorAll('a[href^="#"]');
const hiddenClass = 'is-hidden';
const isClose = nav.classList.contains(hiddenClass);

const closeMenu = () => {
  nav.classList.toggle(hiddenClass);
  btnBurger.classList.remove('btn--menu-opened');
};

const toggleMenu = () => {
  nav.addEventListener('click', (e) => {
  if (e.target === btnBurger) {
    nav.classList.toggle(hiddenClass);
    btnBurger.classList.toggle('btn--menu-opened');

    if (isClose) {
      subButtons.forEach((button) => {
        const subMenuContainer = button.parentElement;
        subMenuContainer.classList.add(hiddenClass);
        button.classList.remove('header__nav--btn-submenu-open');
      });
    }
  }

  if (e.target.classList.contains('header__nav-btn--submenu')) {
    const subButton = e.target;
    const subMenuContainer = subButton.parentElement;

    if (!isClose) {
      subMenuContainer.classList.add(hiddenClass);
      subButton.classList.remove('header__nav--btn-submenu-open');
    } else {
      subMenuContainer.classList.toggle(hiddenClass);
      subButton.classList.toggle('header__nav--btn-submenu-open');
    }
  }
});
}

const handleClickOutside = (e) => {
  const isClickInside = nav.contains(e.target) || btnBurger.contains(e.target);
  if (!isClickInside && !nav.classList.contains(hiddenClass)) {
    closeMenu();
  }
};

const handleAnchorClick = () => {
  closeMenu();
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
});

anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));
document.addEventListener('click', handleClickOutside);

toggleMenu();
