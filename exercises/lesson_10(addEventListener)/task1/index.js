const btn = document.getElementById("hider");
const text = document.getElementById("text");

function handler() {
  text.hidden = true
}

btn.addEventListener("click", handler);
