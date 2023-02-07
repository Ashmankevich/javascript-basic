for (let li of document.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener("click", handler);

function handler(event) {
  if (event.target.tagName == "SPAN") {
    let childrenContainer = event.target.parentNode.querySelector("ul");
    if (childrenContainer) {
      childrenContainer.hidden = !childrenContainer.hidden;
    } else {
      return;
    }
  } else return;
}
