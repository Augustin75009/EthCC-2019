const speakersTemplate = document.getElementById("speakerTemplate")
const speakersSection = document.getElementById("speakerSection")
const speakersRow = document.getElementById("speakersRow")

for (i = 0; i < 10; i++) {
  console.log(speakerTemplate.childNodes)
  document.querySelector('#speakerTemplate .name').innerHTML = speakers[i].name;
  document.querySelector('#speakerTemplate img').setAttribute('src', speakers[i].picture);
  document.querySelector('#speakerTemplate .company').innerHTML = speakers[i].company;
  speakersRow.appendChild(speakerTemplate.childNodes[1].cloneNode(true));
}
