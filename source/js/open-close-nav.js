const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.nav__burger');
const subButtons = nav.querySelectorAll('.nav__toggle');
const anchorLinks = nav.querySelectorAll('a[href^="#"]');
const hiddenClass = 'is-hidden';
const subButtonActive = 'nav__toggle--active';
const isClose = nav.classList.contains(hiddenClass);

const closeMenu = () => {
  nav.classList.toggle(hiddenClass);
  btnBurger.classList.remove('btn--menu-active');
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
      btnBurger.classList.toggle('nav__burger--pressed');
      if (isClose) {
        subButtons.forEach((button) => {
          const subMenuContainer = button.parentElement;
          subMenuContainer.classList.add(hiddenClass);
          button.classList.remove(subButtonActive);
        });
      }
    }

    if (e.target.classList.contains('nav__toggle')) {
      const subButton = e.target;
      const subMenuContainer = subButton.parentElement;

      if (!isClose) {
        subMenuContainer.classList.add(hiddenClass);
        subButton.classList.remove(subButtonActive);
      } else {
        subMenuContainer.classList.toggle(hiddenClass);
        subButton.classList.toggle(subButtonActive);
      }
    }
  });
};

toggleMenu();
