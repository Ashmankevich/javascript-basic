let thumb = document.querySelector(".thumb");

thumb.addEventListener("mousedown", getDown);

function getDown(event) {
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener("mousemove", getMove);
  document.addEventListener("mouseup", getUp);

  function getMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    newLeft < 0 ? (newLeft = 0) : null;
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    newLeft > rightEdge ? (newLeft = rightEdge) : null;

    thumb.style.left = newLeft + "px";
  }

  function getUp() {
    document.removeEventListener("mousemove", getMove);
    document.removeEventListener("mouseup", getUp);
  }
}

thumb.ondragstart = function () {
  return false;
};
