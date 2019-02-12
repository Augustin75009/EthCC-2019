const checkbox = document.getElementById("checkbox")


checkbox.addEventListener('click', (event) => {
  setTimeout(test(), 100000);
});

function test() {
  if (checkbox.checked) {
    console.log("name");
    document.getElementById("formBis").classList.add('formHidden')
    document.getElementById("form").classList.remove('formHidden')
  } else {
    console.log("theme");
    document.getElementById("form").classList.add('formHidden')
    document.getElementById("formBis").classList.remove('formHidden')
  }
}
