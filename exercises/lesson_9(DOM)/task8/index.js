function update() {
  let hh = document.querySelector(".hour");
  let mm = document.querySelector(".min");
  let ss = document.querySelector(".sec");
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour < 10 ? (hour += "0") : null;
  min < 10 ? (min += "0") : null;
  sec < 10 ? (sec += "0") : null;

  hh.innerHTML = hour;
  mm.innerHTML = min;
  ss.innerHTML = sec;
}

let timerId;

function clockStart() {
  timerId = setInterval(update, 1000);
  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}
