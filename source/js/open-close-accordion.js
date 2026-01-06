
import { trigger, iconTrigerDefault, iconTrigerOpen} from './constants.js';

export const toggleAccordion = () =>{
  trigger.classList.add(iconTrigerDefault);
  trigger.addEventListener('click', () => {
    trigger.classList.toggle(iconTrigerDefault);
    trigger.classList.toggle(iconTrigerOpen);
  });
};
