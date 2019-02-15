const speakersTemplateFilter = document.getElementById("speakerTemplateAll")
const speakersRowFilter = document.getElementById("speakersRowAll")
const form = document.getElementById("form")
const formBis = document.getElementById("formBis")
const reset = document.getElementById("reset")
const formElement = document.getElementById("myInput")
const formElementBis = document.getElementById("myInputBis")
let counterOverSize = 0;


for (i = 0; i < speakers.length; i++) {
  if(speakers[i].link != undefined && speakers[i].link != '') {
    document.querySelector('#speakerTemplateAll .name').innerHTML =
    (`<a href="`+speakers[i].link+`">`+speakers[i].name+`  <i class="fab fa-twitter-square"></i></a>`);
  } else {
    document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
  }
  document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
  document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
  document.querySelector('#speakerTemplateAll .tooltiptext').innerHTML = "";
  for (j = 0; j < speakers[i].title.length; j++) {
    document.querySelector('#speakerTemplateAll .tooltiptext').insertAdjacentHTML("beforeend",
    `<ul>
      <li>${speakers[i].title[j]}</li>
      <li>${speakers[i].slot[j]}</li>
      <li><a href="${speakers[i].calendarLink[j]}">Add to calendar</a></li>
    </ul>`);
  }
  speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(formElement.value)
  speakerByName(formElement.value);
  });

formBis.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(formElementBis.value)
  speakerByTopic(formElementBis.value);
  });

reset.addEventListener('click', (event) => {
  event.preventDefault();
  speakerAll();

  });

function speakerByName(element) {

  speakersRowFilter.innerHTML = ""
  counterOverSize = 0;
  for (i = 0; i < speakers.length; i++) {
    if (speakers[i].name == element || speakers[i].company == element) {
      if(speakers[i].link != undefined && speakers[i].link != '') {
        document.querySelector('#speakerTemplateAll .name').innerHTML =
        (`<a href="`+speakers[i].link+`">`+speakers[i].name+`  <i class="fab fa-twitter-square"></i></a>`);
      } else {
        document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
      }
      document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
      document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
      document.querySelector('#speakerTemplateAll .tooltiptext').innerHTML = "";
      for (j = 0; j < speakers[i].title.length; j++) {
        document.querySelector('#speakerTemplateAll .tooltiptext').insertAdjacentHTML("beforeend",
        `<ul>
          <li>${speakers[i].title[j]}</li>
          <li>${speakers[i].slot[j]}</li>
          <li><a href="${speakers[i].calendarLink[j]}">Add to calendar</a></li>
        </ul>`);
      }
      speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
      if (counterOverSize === 0) {
        speakersRowFilter.classList.add('oversize');
        counterOverSize = 1;
      } else {
        speakersRowFilter.classList.remove('oversize');
      }
    }
  }
  tooltipOpen()
}

function speakerByTopic(element) {

  speakersRowFilter.innerHTML = ""
  counterOverSize = 0;
  for (i = 0; i < 7; i++) { //replace by speakers.length in production
    console.log(speakers[i].topic.includes(element))
    if (speakers[i].topic.includes(element)) {
      if(speakers[i].link != undefined && speakers[i].link != '') {
        document.querySelector('#speakerTemplateAll .name').innerHTML =
        (`<a href="`+speakers[i].link+`">`+speakers[i].name+`  <i class="fab fa-twitter-square"></i></a>`);
      } else {
        document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
      }
      document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
      document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
      document.querySelector('#speakerTemplateAll .tooltiptext').innerHTML = "";
      for (j = 0; j < speakers[i].title.length; j++) {
        document.querySelector('#speakerTemplateAll .tooltiptext').insertAdjacentHTML("beforeend",
        `<ul>
          <li>${speakers[i].title[j]}</li>
          <li>${speakers[i].slot[j]}</li>
          <li><a href="${speakers[i].calendarLink[j]}">Add to calendar</a></li>
        </ul>`);
      }
      speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
      if (counterOverSize === 0) {
        speakersRowFilter.classList.add('oversize');
        counterOverSize = 1;
      } else {
        speakersRowFilter.classList.remove('oversize');
      }
    }
  }
  tooltipOpen()
}

function speakerAll(element) {

  formElement.value = "";
  formElementBis.value = "";
  speakersRowFilter.innerHTML = "";
  speakersRowFilter.classList.remove('oversize');
  for (i = 0; i < speakers.length; i++) {
    if(speakers[i].link != undefined && speakers[i].link != '') {
      document.querySelector('#speakerTemplateAll .name').innerHTML =
      (`<a href="`+speakers[i].link+`">`+speakers[i].name+`  <i class="fab fa-twitter-square"></i></a>`);
    } else {
      document.querySelector('#speakerTemplateAll .name').innerHTML = speakers[i].name;
    }
    document.querySelector('#speakerTemplateAll img').setAttribute('src', speakers[i].picture);
    document.querySelector('#speakerTemplateAll .company').innerHTML = speakers[i].company;
    document.querySelector('#speakerTemplateAll .tooltiptext').innerHTML = "";
    for (j = 0; j < speakers[i].title.length; j++) {
        document.querySelector('#speakerTemplateAll .tooltiptext').insertAdjacentHTML("beforeend",
        `<ul>
          <li>${speakers[i].title[j]}</li>
          <li>${speakers[i].slot[j]}</li>
          <li><a href="${speakers[i].calendarLink[j]}">Add to calendar</a></li>
        </ul>`);
      }
    speakersRowFilter.appendChild(speakersTemplateFilter.childNodes[1].cloneNode(true));
  }
  tooltipOpen()
}


function tooltipOpen() {
  document.querySelectorAll(".tooltip").forEach((speaker) => {
  speaker.addEventListener("click",  (event) => {
    event.currentTarget.childNodes[7].classList.toggle('showTooltip');
    });
  });
}
