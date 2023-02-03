let ball = document.getElementById("ball");
let field = document.getElementById("field");

function handler() {
  let fieldCoords = this.getBoundingClientRect();
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
}

field.addEventListener("click", handler);
