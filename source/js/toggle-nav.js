const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.nav__toggle');
const subMenus = nav.querySelectorAll('.nav__item:has(.nav__btn)');
const hiddenClass = 'is-hidden';
const btnCloseClass = 'btn--cross';
const anchorLink = '.nav__link';

const closeNav = () => {
  nav.classList.add(hiddenClass);
  btnBurger.classList.remove(btnCloseClass);
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideMenuClick);

  subMenus.forEach((subMenu) => {
    subMenu.classList.add(hiddenClass);
  });
};

function onEscKeydown(e) {
  if (e.key === 'Escape') {
    closeNav();
  }
}

function onOutsideMenuClick(e) {
  if (!nav.contains(e.target) && !btnBurger.contains(e.target) && !nav.classList.contains(hiddenClass)) {
    closeNav();
  }
}

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

    subMenus.forEach((subMenu) => {
      if (subMenu.contains(target)) {
        subMenu.classList.toggle(hiddenClass);
      }
    });

    if (target.closest(anchorLink)) {
      closeNav();
    }
  });
};

toggleNav();
