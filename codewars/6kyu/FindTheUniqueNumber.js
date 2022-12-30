/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/
function findUniq(arr) {
  let uniq = [];
  let newArr = Array.from(new Set(arr));
  for (let i = 0; i < newArr.length; i++) {
    arr.indexOf(newArr[i]) == arr.lastIndexOf(newArr[i])
      ? uniq.push(newArr[i])
      : null;
  }
  return Number(uniq.toString());
}
findUniq([3, 10, 3, 3, 3]);
