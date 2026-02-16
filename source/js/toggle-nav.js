const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.nav__toggle');
const subButtons = nav.querySelectorAll('.nav__btn');
const hiddenClass = 'is-hidden';
const btnCloseClass = 'btn--cross';

const closeMenu = () => {
  nav.classList.toggle(hiddenClass);
  btnBurger.classList.remove(btnCloseClass);
  removeEvents();
};

const toggleNav = () => {
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (btnBurger.contains(target)) {
      nav.classList.toggle(hiddenClass);
      btnBurger.classList.toggle(btnCloseClass);

      subButtons.forEach((button) => {
        const subMenuContainer = button.parentElement;
        subMenuContainer.classList.add(hiddenClass);
      });

      nav.classList.contains(hiddenClass) ? removeEvents() : addEvents();
    }

    if (target.closest('.nav__btn')) {
      const subMenuContainer = target.closest('.nav__btn').parentElement;
      subMenuContainer.classList.toggle(hiddenClass);
    }
    if (target.closest('.nav__link')) {
      closeMenu();
    }
  });
};

function onEscKeydown(e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
}

function onOutsideMenuClick(e) {
  const isOutsideClick = !nav.contains(e.target) && !btnBurger.contains(e.target) && !nav.classList.contains(hiddenClass);
  if (isOutsideClick) {
    closeMenu();
  }
}

function addEvents() {
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onOutsideMenuClick);
}

function removeEvents() {
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideMenuClick);
}

toggleNav();
