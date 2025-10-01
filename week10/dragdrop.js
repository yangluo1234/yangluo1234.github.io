const card = document.querySelector(".card");
console.log(card);

let draggedCard = null;

card.addEventListener("dragstart", function () {
  draggedCard = card;
  console.log(draggedCard);
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  const dropCard = draggedCard;
  //const dropCard = draggedCard.cloneNode(true);
  console.log(dropCard);
  dropCard.addEventListener("click", toggleFlip);

  function toggleFlip() {
    dropCard.classList.toggle("flip");
  }
  dropbox.appendChild(dropCard);
});
