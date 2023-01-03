/*
Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple /
list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater,
and all of the items will be numbers; target will always be the sum of two different items from that array).

*/

function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let a = target - numbers[i];
    let indexA = numbers.indexOf(a, i + 1);
    if (indexA !== -1) {
      result.push(indexA);
      let indexB = numbers.indexOf(numbers[i]);
      result.push(indexB);
    }
    if (result.length == 2) break;
  }
  return result;
}
twoSum(
  [
    391, 589, -539, 259, -984, -103, -593, -535, -682, -901, -511, -206, 160,
    -654, 368, 408, -831, 841, -714, -441, -708, -193, -329, 69, -148, -758,
    406, 952, -472, 3, -188, 335, -998, 98, -107, 563, 429, 476, -480, 471,
    -236, -380, 478, -408, 674, 87, 817, 881, -431, -31, 994, 554, 374, -707,
    -393, -410, -321, -765, -751, -493, -979, -994, -189, -556, 151, -145, -975,
    -376, -250,
  ],
  (target = 488)
);
