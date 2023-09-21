const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterText: document.querySelector('#value'),
};

let counterValue = 0;

refs.incrementBtn.addEventListener('click', handleCounter);
refs.decrementBtn.addEventListener('click', handleCounter);

function handleCounter(e) {
  const action = e.target.dataset.action;

  action === 'increment' ? (counterValue += 1) : (counterValue -= 1);

  return (refs.counterText.textContent = counterValue);
}
