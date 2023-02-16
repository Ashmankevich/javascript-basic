let view = document.querySelector(".view");

view.addEventListener("click", startEdit);

function startEdit() {
  let area = document.createElement("textarea");
  area.className = "edit";
  area.value = view.innerHTML;

  area.addEventListener("keydown", getKeyDown);

  function getKeyDown(event) {
    event.key === "Enter" ? this.blur() : null;
  }

  area.addEventListener("blur", editEnd);

  function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
  }

  view.replaceWith(area);
  area.focus();
}
