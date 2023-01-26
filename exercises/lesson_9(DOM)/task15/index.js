let elemCoords = document.getElementById("coords");
let coords = elemCoords.getBoundingClientRect();

let elemField = document.getElementById("field");

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];
let answer3 = [
  coords.left + elemField.clientLeft,
  coords.top + elemField.clientTop,
];
let answer4;

alert(answer1);
alert(answer2);
alert(answer3);
alert(answer4);
