
import { triggers, iconTrigerDefault, iconTrigerOpen} from './constants.js';

export const toggleAccordion = () => {
  triggers.forEach((trigger) => {
    trigger.classList.add(iconTrigerDefault);

    trigger.addEventListener('click', () => {
      trigger.classList.toggle(iconTrigerDefault);
      trigger.classList.toggle(iconTrigerOpen);
    });
  });
};
