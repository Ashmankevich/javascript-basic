/*
We have a big list having values fom 1 to n,
occurring only once but unordered with an unknown amount of missing values.
The number n will be considered the maximum value of the array.

We have to output the missing numbers sorted by value. Example:

[8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]  ---> [2, 4, 9, 13]
The number 1 should be in the input array, if it's not present in the input array,
should be included in the results. See the example below.

[8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]
As this is a hardcore version, the tests are prepared for only algorithms of time complexityO(n) to pass.
As the speed of each language are different, we will have different maximum lengths for the input.

Features of the random tests:   
1000 <= length of arrays <= 30.000.000
1 <= amount of missing  numbers <= 10  
amount of tests: 20
Enjoy it.
*/

//first solution
function missNumsFinder(arr) {
  let arrMissNum = [];
  for (let i = 1; i <= Math.max(...arr); i++)
    arr.includes(i) ? null : arrMissNum.push(i);

  return arrMissNum;
}
missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]);

//second solution
function missNumsFinder(arr) {
  let arrMissNum = [];
  for (let i = 1; i <= Math.max(...arr); i++)
    arr.indexOf(i) !== -1 ? null : arrMissNum.push(i);

  return arrMissNum;
}
missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]);

//best practice
function missNumsFinder(arr) {
  let results = [];
  let arrClean = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) arrClean[arr[i] - 1] = arr[i];

  for (let j = 0; j < arrClean.length; j++) {
    arrClean[j] !== j + 1 ? results.push(j + 1) : null;
  }

  return results;
}
missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]);
