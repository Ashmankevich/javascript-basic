contents.addEventListener("click", (event) => {
  if (event.target.nodeName == "A") {
    let quest = confirm(`Leave for ${event.target.href}?`);
    quest == false ? event.preventDefault() : null;
  } else if (event.target.parentNode.hasAttribute("href")) {
    let quest = confirm(`Leave for ${event.target.parentNode.href}?`);
    quest == false ? event.preventDefault() : null;
  } else return;
});
