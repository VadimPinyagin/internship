const nav = document.querySelector('.nav');
const btnBurger = nav.querySelector('.nav__toggle');
const subButtons = nav.querySelectorAll('.nav__btn');
const hiddenClass = 'is-hidden';
const btnCloseClass = 'btn--cross';
const subNavs = nav.querySelectorAll('.nav__item:has(.nav__btn)');

const closeNav = () => {
  nav.classList.add(hiddenClass);
  btnBurger.classList.remove(btnCloseClass);
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideMenuClick);

  subNavs.forEach((e) => {
    const subNav = e;
    subNav.classList.add(hiddenClass);
  });
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

    if (target.closest('.nav__btn')) {
      const subMenuContainer = target.closest('.nav__btn').parentElement;
      subMenuContainer.classList.toggle(hiddenClass);
    }
    if (target.closest('.nav__link')) {
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
  const isOutsideClick = !nav.contains(e.target) && !btnBurger.contains(e.target) && !nav.classList.contains(hiddenClass);
  if (isOutsideClick) {
    closeNav();
  }
}


toggleNav();
