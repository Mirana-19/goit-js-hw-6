const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  const userData = new FormData(e.currentTarget);
  const { email, password } = e.currentTarget.elements;

  e.preventDefault();

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill all fields!');
  }

  e.currentTarget.reset();
  return userData.forEach((value, key) => console.log(`${key} - ${value}`));
}
