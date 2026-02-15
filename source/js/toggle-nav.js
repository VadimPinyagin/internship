const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.nav__toggle');
const subButtons = nav.querySelectorAll('.nav__btn');
const anchorLinks = nav.querySelectorAll('a[href^="#"]');
const hiddenClass = 'is-hidden';
const btnCloseClass = 'btn--cross';
const isClose = nav.classList.contains(hiddenClass);

const closeMenu = () => {
  nav.classList.toggle(hiddenClass);
  btnBurger.classList.remove(btnCloseClass);
  removeEvent();
};

function isEscape(e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
}

function clickOutsideMenu(e) {
  const isOutsideClick = !nav.contains(e.target) && !btnBurger.contains(e.target) && !nav.classList.contains(hiddenClass);
  if (isOutsideClick) {
    closeMenu();
  }
}

function removeEvent() {
  document.removeEventListener('keydown', isEscape);
  document.removeEventListener('click', clickOutsideMenu);
}

const toggleNav = () => {
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (btnBurger.contains(target)) {
      nav.classList.toggle(hiddenClass);
      btnBurger.classList.toggle(btnCloseClass);

      if (isClose) {
        document.addEventListener('keydown', isEscape);
        document.addEventListener('click', clickOutsideMenu);

        subButtons.forEach((button) => {
          const subMenuContainer = button.parentElement;
          subMenuContainer.classList.add(hiddenClass);
        });
      }
    }
    const targetElement = target.closest('.nav__btn');
    if (targetElement) {
      const subMenuContainer = targetElement.parentElement;
      subMenuContainer.classList.toggle(hiddenClass);
    }
    anchorLinks.forEach((link) => {
      if (link === target) {
        closeMenu();
      }
    });
  });
};

toggleNav();
