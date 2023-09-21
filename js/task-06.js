const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', handleInputLength);

function handleInputLength(e) {
  const isValid = e.target.value.trim().length === +inputEl.dataset.length;
  const classlist = e.target.classList;

  if (isValid) {
    classlist.remove('invalid');
    return classlist.add('valid');
  }

  classlist.remove('valid');
  return classlist.add('invalid');
}
