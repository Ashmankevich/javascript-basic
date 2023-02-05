let width = 130;
let count = 3;

let list = document.querySelector("ul");
let listElems = document.querySelectorAll("li");

let position = 0;

let btnPrev = document.querySelector(".prev");

btnPrev.addEventListener("click", movePrev);

function movePrev() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
}

let btnNext = document.querySelector(".next");

btnNext.addEventListener("click", moveNext);

function moveNext() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
}
