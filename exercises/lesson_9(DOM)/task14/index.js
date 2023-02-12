let elemCoords = document.getElementById("coords");
let coords = elemCoords.getBoundingClientRect();

let elemField = document.getElementById("field");
let field = elemField.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.left + coords.width, coords.top + coords.height];
let answer3 = [
  coords.left + elemField.clientLeft,
  coords.top + elemField.clientTop,
];
let answer4 = [
  coords.right - elemField.clientLeft,
  coords.bottom - elemField.clientTop,
];

alert(answer1);
alert(answer2);
alert(answer3);
alert(answer4);
