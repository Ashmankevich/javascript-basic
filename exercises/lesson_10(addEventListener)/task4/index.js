let ball = document.getElementById("ball");
let field = document.getElementById("field");

function moveBall(event) {
  let fieldCoords = this.getBoundingClientRect();
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
    bottom:
      fieldCoords.bottom -
      event.clientY -
      field.clientTop -
      ball.clientHeight / 2,
    right:
      fieldCoords.right -
      event.clientX -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  ballCoords.top < 0 ? (ballCoords.top = 0) : null;
  ballCoords.left < 0 ? (ballCoords.left = 0) : null;
  ballCoords.bottom < 0
    ? (ballCoords.top = field.clientHeight - ball.clientHeight)
    : null;
  ballCoords.right < 0
    ? (ballCoords.left = field.clientWidth - ball.clientWidth)
    : null;

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
}

field.addEventListener("click", moveBall);
