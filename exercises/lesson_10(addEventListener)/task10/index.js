contents.onclick = function (event) {
  if (event.target.nodeName != "A") return;

  let href = event.target.getAttribute("href");
  let ask = confirm(`leave for ${href}?`);

  if (!ask) return false;
};
