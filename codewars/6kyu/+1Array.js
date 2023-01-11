/*
Given an array of integers of any length,
return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer
*/

function upArray(arr) {
  let result;
  let check = arr.find((item) => item > 9 || item < 0);
  if (check || arr.length == 0) {
    result = null;
  } else {
    let arrWithoutZero = [];
    let arrZero = [];
    for (let i = 0; i < arr.length; i++) {
      (arr[i - 1] == undefined || arr[i - 1] == 0) &&
      arr[i] == 0 &&
      arr[i + 1] !== 0
        ? arrZero.push(arr[i])
        : arrWithoutZero.push(arr[i]);
    }
    console.log(arrZero);
    console.log(arrWithoutZero);
    let arr1;
    if (arrWithoutZero[arrWithoutZero.length - 1] == 0) {
      arrWithoutZero.splice([arrWithoutZero.length - 1], 1, 1);
      arr1 = arrWithoutZero;
    } else arr1 = String(BigInt(arrWithoutZero.join("")) + 1n).split("");

    result = arrZero.concat(arr1).map((item) => Number(item));
  }
  return result;
}
upArray([
  0, 7, 7, 6, 8, 9, 7, 0, 1, 3, 0, 4, 5, 7, 6, 4, 1, 7, 1, 1, 6, 6, 5, 6, 8, 6,
  1, 3, 6, 2, 1, 9, 3, 9, 2, 6, 8,
]);

let bigArr = [
  7, 7, 6, 8, 9, 7, 0, 1, 3, 0, 4, 5, 7, 6, 4, 1, 7, 1, 1, 6, 6, 5, 6, 8, 6, 1,
  3, 6, 2, 1, 9, 3, 9, 2, 6, 8,
];

let arr = String(BigInt(bigArr.join("")) + 1n).split("");
console.log(arr);
