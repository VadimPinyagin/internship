export const initCustomSelect = () => {
  const selectButton = document.querySelector('.custom-select__button');
  const selectOptions = document.querySelector('.custom-select__options');
  const hiddenSelect = document.getElementById('city-select');

  selectButton.addEventListener('click', () => {
    selectOptions.classList.toggle('custom-select__options--is-open');
    selectOptions.classList.toggle('custom-select__options--is-close');
    selectButton.classList.toggle('active');
  });

  selectOptions.querySelectorAll('.custom-select__item').forEach((item) => {
    item.addEventListener('click', () => {
      const value = item.getAttribute('data-value');
      const text = item.textContent;

      selectButton.querySelector('.custom-select__text').textContent = text;
      hiddenSelect.value = value;

      selectOptions.classList.remove('custom-select__options--is-open');
      selectOptions.classList.add('custom-select__options--is-close');
    });
  });

  document.addEventListener('click', (event) => {
    if (!selectButton.contains(event.target) && !selectOptions.contains(event.target)) {
      selectOptions.classList.remove('custom-select__options--is-open');
      selectOptions.classList.add('custom-select__options--is-close');
    }
  });

  if (hiddenSelect.value) {
    const initialText = hiddenSelect.options[hiddenSelect.selectedIndex].text;
    selectButton.querySelector('.custom-select__text').textContent = initialText;
  }
};

initCustomSelect();
