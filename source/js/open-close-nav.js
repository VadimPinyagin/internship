const mainNav = document.querySelector('.nav');
const toggle = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle__icon');
mainNav.classList.add('header__menu--is-close');

export function menuOpenClose(){

  if (toggle) {
    toggle.addEventListener('click', () => {
      mainNav.classList.toggle('header__menu--is-open');
      mainNav.classList.toggle('header__menu--is-close');
      toggle.classList.toggle('header__toggle--opened');
      toggleIcon.classList.toggle('toggle__icon--open');
      toggleIcon.classList.toggle('toggle__icon--close');
    });
  }
}
