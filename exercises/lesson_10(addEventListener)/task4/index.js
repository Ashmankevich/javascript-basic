let menu = document.getElementById("sweeties");

function menuShow() {
  this.classList.toggle("open");
}

menu.addEventListener("click", menuShow);
