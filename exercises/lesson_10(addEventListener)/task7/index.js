container.addEventListener("click", handler);

function handler(event) {
  let pane = event.target.closest(".pane");
  if (event.target.className != "remove-button") {
    return;
  } else {
    pane.remove();
  }
}
