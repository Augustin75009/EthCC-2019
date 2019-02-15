// let tooltipOpen = 0;

// if (tooltipOpen = 0) {
//   document.querySelectorAll(".picture").forEach((speaker) => {
//     speaker.addEventListener("click",  (event) => {
//       console.log(event.currentTarget.parentNode.childNodes)
//       event.currentTarget.parentNode.childNodes[7].classList.toggle('showTooltip');
//       tooltipOpen = 1
//     });
//   });
// } else {
  document.querySelectorAll(".tooltip").forEach((speaker) => {
  speaker.addEventListener("click",  (event) => {
    // console.log(event.currentTarget.childNodes)
    event.currentTarget.childNodes[7].classList.toggle('showTooltip');
    // tooltipOpen = 0
    });
  });
// }


