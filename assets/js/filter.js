const speakersTemplateFilter = document.getElementById("speakerTemplateAll")
const speakersRowFilter = document.getElementById("speakersRowAll")
const form = document.getElementById("form")
const reset = document.getElementById("reset")
const formElement = document.getElementById("myInput")


for (i = 0; i < speakers.length; i++) {
  if(speakers[i].link != undefined && speakers[i].link != '') {
    document.querySelector('#speakerTemplateAll .name').innerHTML =
    (`<a href="`+speakers[i].link+`">`+speakers[i].name+`  <i class="fab fa-twitter-square"></i></a>`);
  } else {
    document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
  }
  document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
  document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
  document.querySelector('#speakerTemplateAll .tooltiptext').innerHTML = speakers[i].name;
  speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
}


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
      if(speakers[i].link != undefined && speakers[i].link != '') {
        document.querySelector('#speakerTemplateAll .name').innerHTML =
        (`<a href="`+speakers[i].link+`">`+speakers[i].name+`  <i class="fab fa-twitter-square"></i></a>`);
      } else {
        document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
      }
      document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
      document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
      document.querySelector('#speakerTemplateAll .tooltiptext').innerHTML = speakers[i].name;
      speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
    }
  }
}

function speakerAll(element) {

  speakersRowFilter.innerHTML = ""
  for (i = 0; i < speakers.length; i++) {
    if(speakers[i].link != undefined && speakers[i].link != '') {
      document.querySelector('#speakerTemplateAll .name').innerHTML =
      (`<a href="`+speakers[i].link+`">`+speakers[i].name+`  <i class="fab fa-twitter-square"></i></a>`);
    } else {
      document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
    }
    document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
    document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
    document.querySelector('#speakerTemplateAll .tooltiptext').innerHTML = speakers[i].name;
    speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
  }
}
