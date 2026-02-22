const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.nav__toggle');
const subMenus = nav.querySelectorAll('.nav__item:has(.nav__btn)');
const hiddenClass = 'is-hidden';
const btnCloseClass = 'btn--cross';
const anchorLinksSelector = '.nav__link';
const subButtonsSelector = '.nav__btn';
const subMenusSelector = '.nav__item';

const closeNav = () => {
  nav.classList.add(hiddenClass);
  btnBurger.classList.remove(btnCloseClass);
  subMenus.forEach((subMenu) => {
    subMenu.classList.add(hiddenClass);
  });

  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideMenuClick);
};

const toggleNav = () => {
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (btnBurger.contains(target)) {

      if (nav.classList.contains(hiddenClass)) {
        nav.classList.remove(hiddenClass);
        btnBurger.classList.add(btnCloseClass);
        document.addEventListener('keydown', onEscKeydown);
        document.addEventListener('click', onOutsideMenuClick);
      } else{
        closeNav();
      }
    }

    if (target.closest(subButtonsSelector)) {
      const subMenuContainer = target.closest(subMenusSelector);
      subMenuContainer.classList.toggle(hiddenClass);
    }

    if (target.closest(anchorLinksSelector)) {
      closeNav();
    }
  });
};

function onEscKeydown(e) {
  if (e.key === 'Escape') {
    closeNav();
  }
}

function onOutsideMenuClick(e) {
  if (!nav.contains(e.target)) {
    closeNav();
  }
}

toggleNav();
