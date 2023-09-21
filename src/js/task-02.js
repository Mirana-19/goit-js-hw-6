const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('#ingredients');

function createListMarkup(markup) {
  return markup.map(el => {
    const item = document.createElement('li');
    item.textContent = el;
    item.classList = 'item';
    return item;
  });
}

listEl.append(...createListMarkup(ingredients));
