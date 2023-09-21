const inputSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputSizeEl.addEventListener('input', changeTextSize);

function changeTextSize(e) {
  return (textEl.style.fontSize = e.target.value + 'px');
}
