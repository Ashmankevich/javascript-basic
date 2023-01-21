let elements = document.querySelectorAll("li");

for (let elem of elements) {
  let amount = elem.querySelectorAll("li").length;
  amount ? (elem.firstChild.data += `[${amount}]`) : null;
}
