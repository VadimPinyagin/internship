
const selectElement = document.getElementById('city-select');
const optionsList = document.createElement('ul');

selectElement.style.display = 'none';
optionsList.classList.add('custom-select__options', 'custom-select__options--is-close');

function generateOptionsList() {
  optionsList.innerHTML = '';

  Array.from(selectElement.options).forEach((option) => {
    if (option.value) {
      const li = document.createElement('li');
      li.classList.add('custom-select__item');
      li.textContent = option.text
      li.setAttribute('data-value', option.value);
      optionsList.appendChild(li);
    }
  });
}

generateOptionsList();

document.querySelector('.custom-select').appendChild(optionsList);
