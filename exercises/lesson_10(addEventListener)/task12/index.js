ul.addEventListener("mousedown", handler1);

function handler1(event) {
  event.preventDefault();
}

ul.addEventListener("click", handler2);

function handler2(event) {
  if (event.target.tagName == "LI") {
    if (event.ctrlKey || event.metaKey) {
      event.target.classList.toggle("selected");
    } else {
      let selected = ul.querySelectorAll(".selected");
      event.target.classList.add("selected");
      for (let elem of selected) {
        elem.classList.remove("selected");
      }
    }
  } else return;
}
