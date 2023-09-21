const colorBtnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

colorBtnEl.addEventListener('click', changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor(e) {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
}
