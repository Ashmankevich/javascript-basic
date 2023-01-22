let ul = document.createElement("ul");
ul.setAttribute("id", "ul");
document.body.prepend(ul);

let liOne = document.createElement("li");
liOne.setAttribute("id", "one");
liOne.textContent = "1";
ul.append(liOne);

let liTwo = document.createElement("li");
liTwo.setAttribute("id", "two");
liTwo.textContent = "4";
ul.append(liTwo);

liOne.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");
