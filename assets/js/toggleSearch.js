const checkbox = document.getElementById("checkbox")


checkbox.addEventListener('click', (event) => {
  toggleForm();
});

function toggleForm() {
  if (checkbox.checked) {
    document.getElementById("formBis").classList.add('formHidden')
    document.getElementById("form").classList.remove('formHidden')
  } else {
    document.getElementById("form").classList.add('formHidden')
    document.getElementById("formBis").classList.remove('formHidden')
  }
}
