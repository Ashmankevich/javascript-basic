let ul = document.createElement("ul");
document.body.prepend(ul);

while (true) {
  let message = prompt("Write something", "i am ok");
  if (message !== null || message == " ") {
    let li = document.createElement("li");
    ul.append(li);
    li.textContent = message;
  } else break;
}
