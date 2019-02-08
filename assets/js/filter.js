const speakersTemplateFilter = document.getElementById("speakerTemplateAll")
const speakersRowFilter = document.getElementById("speakersRowAll")
const form = document.getElementById("form")
const reset = document.getElementById("reset")
const formElement = document.getElementById("myInput")


form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(formElement.value)
  speakerByName(formElement.value);

  });

reset.addEventListener('click', (event) => {
  event.preventDefault();
  speakerAll();

  });

function speakerByName(element) {

  for (i = 0; i < speakers.length; i++) {
    if (speakers[i].name == element || speakers[i].company == element) {
      speakersRowFilter.innerHTML = ""
      document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
      document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
      document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
      speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
    }
  }
}

function speakerAll(element) {

  speakersRowFilter.innerHTML = ""
  for (i = 0; i < speakers.length; i++) {
      document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
      document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
      document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
      speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
  }
}
