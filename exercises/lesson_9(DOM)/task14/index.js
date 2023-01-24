let ball = document.getElementById("ball");
let field = document.getElementById("field");

ball.width = "40";
ball.height = "40";

ball.style.left = field.clientWidth / 2 - ball.offsetWidth / 2 + "px";
ball.style.top = field.clientHeight / 2 - ball.offsetHeight / 2 + "px";
