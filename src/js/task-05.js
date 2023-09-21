const inputEl = document.querySelector('#name-input');
const userNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputNameChange);

function inputNameChange(e) {
  let name = e.currentTarget.value.trim();

  return name ? (userNameEl.textContent = name) : (userNameEl.textContent = 'Anonymous');
}
