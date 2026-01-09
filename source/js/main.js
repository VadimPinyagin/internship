import './open-close-nav.js';
import './open-close-accordion.js';
import './generat-list-cities.js';
import './open-close-select.js';
import './defines-swiper.js';

function initializeTabs() {
  const tabsContainer = document.querySelector('.news__tabs');
  const tabs = tabsContainer.querySelectorAll('.news__tab');

  tabs.forEach((tab, index) => {
    if(index === 0) {
      tab.classList.add('news__tab--current');
    }
    tab.addEventListener('click', () => {
      updateActiveTabClass(index);
    });
  });
}

function updateActiveTabClass(activeIndex) {
  const tabs = document.querySelectorAll('.news__tab');

  tabs.forEach((tab, index) => {
    if (index === activeIndex) {
      tab.classList.add('news__tab--current');
    } else {
      tab.classList.remove('news__tab--current');
    }
  });
}

initializeTabs();
