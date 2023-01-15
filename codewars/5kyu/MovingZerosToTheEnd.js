/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let zero = [];
  let notZero = [];
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] == Boolean || arr[i] !== 0
      ? notZero.push(arr[i])
      : zero.push(arr[i]);
  }
  return notZero.concat(zero);
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

// best practice
function moveZeros(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : 0));
}
