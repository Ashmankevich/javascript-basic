/*
DESCRIPTION:
You are given an array. Complete the function that returns the number of ALL elements within an array,
including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

// first solution
function deepCount(a) {
  return a.reduce(
    (ac, cur) => ac + (Array.isArray(cur) ? deepCount(cur) : null),
    a.length
  );
}
deepCount([1, 2, [3, 4, [5]]]);

// second solution
function deepCount(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    Array.isArray(a[i]) == false ? null : (result += deepCount(a[i]));
  }
  return a.length + result;
}
deepCount([1, 2, [3, 4, [5]]]);
