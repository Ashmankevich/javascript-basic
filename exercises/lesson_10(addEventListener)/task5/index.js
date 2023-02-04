let items = document.querySelectorAll(".pane");

for (let item of items) {
  item.insertAdjacentHTML("afterbegin", '<button class="button">X</button>');
  item.firstChild.addEventListener("click", deleteItem);
  function deleteItem() {
    item.remove();
  }
}
