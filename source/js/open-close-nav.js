const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.nav__toggle');
const subButtons = nav.querySelectorAll('.nav__btn');
const anchorLinks = nav.querySelectorAll('a[href^="#"]');
const hiddenClass = 'is-hidden';
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
    const target = e.target;
    if (btnBurger.contains(target)) {
      nav.classList.toggle(hiddenClass);
      btnBurger.classList.toggle('btn--cross');

      if (isClose) {
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
  });
};

toggleMenu();
