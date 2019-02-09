const speakersTemplate = document.getElementById("speakerTemplate")
const speakersRow = document.getElementById("speakersRow")


for (i = 0; i < 10; i++) {
  document.querySelector('#speakerTemplate .name').innerHTML = speakers[i].name;
  document.querySelector('#speakerTemplate img').setAttribute('src', speakers[i].picture);
  document.querySelector('#speakerTemplate .company').innerHTML = speakers[i].company;
  speakersRow.appendChild(speakersTemplate.childNodes[1].cloneNode(true));
}
