const mainListEl = document.querySelector('#categories');

function countCategories(listEl) {
  const liEl = listEl.children;
  const result = [];

  if (liEl) {
    result.push(`Number of categories: ${liEl.length}\n\n`);

    [...liEl].forEach(element => {
      return result.push(
        `Category: ${element.firstElementChild.textContent}\nElements: ${element.lastElementChild.children.length}\n\n`
      );
    });

    return result.join('');
  } else {
    return 'Please add valid markup element';
  }
}

console.log(countCategories(mainListEl));
