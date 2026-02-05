const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.btn--burger');
const subButtons = nav.querySelectorAll('.nav-btn--submenu');
const anchorLinks = nav.querySelectorAll('a[href^="#"]');
const hiddenClass = 'is-hidden';
const isClose = nav.classList.contains(hiddenClass);

const closeMenu = () => {
  nav.classList.toggle(hiddenClass);
  btnBurger.classList.remove('btn--menu-opened');
  nav.classList.remove('nav--overlay');
};

anchorLinks.forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('click', (e) => {
  if (!(nav.contains(e.target) || btnBurger.contains(e.target) || nav.classList.contains(hiddenClass))) {
    closeMenu();
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
});

const toggleMenu = () => {
  nav.addEventListener('click', (e) => {
    if (e.target === btnBurger) {
      nav.classList.toggle(hiddenClass);
      btnBurger.classList.toggle('btn--menu-opened');
      nav.classList.toggle('nav--overlay');
      if (isClose) {
        subButtons.forEach((button) => {
          const subMenuContainer = button.parentElement;
          subMenuContainer.classList.add(hiddenClass);
          button.classList.remove('nav--btn-submenu-open');
        });
      }
    }

    if (e.target.classList.contains('nav-btn--submenu')) {
      const subButton = e.target;
      const subMenuContainer = subButton.parentElement;

      if (!isClose) {
        subMenuContainer.classList.add(hiddenClass);
        subButton.classList.remove('nav--btn-submenu-open');
      } else {
        subMenuContainer.classList.toggle(hiddenClass);
        subButton.classList.toggle('nav--btn-submenu-open');
      }
    }
  });
};

toggleMenu();
