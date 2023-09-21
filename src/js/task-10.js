const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  amountInput: document.querySelector('input'),
  containerEl: document.querySelector('#boxes'),
};
let elSize = 30;

refs.createBtn.addEventListener('click', () => {
  createBoxes(refs.amountInput.value);
});
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const markup = [];
  if (!amount) {
    alert('Please choose amount');
  }

  for (let i = 1; i <= amount; i++) {
    const el = document.createElement('div');

    el.style.width = elSize + 'px';
    el.style.height = elSize + 'px';
    el.style.backgroundColor = getRandomHexColor();

    markup.push(el);

    elSize += 10;
  }

  return refs.containerEl.append(...markup);
}

function destroyBoxes() {
  refs.containerEl.innerHTML = '';
  elSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
