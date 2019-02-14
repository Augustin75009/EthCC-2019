document.querySelectorAll(".conference").forEach((conference) => {
  conference.addEventListener('click', (event) => {
    event.currentTarget.childNodes[2].classList.toggle('SlotHidden');
    event.currentTarget.classList.toggle('lighter');
  });
})
