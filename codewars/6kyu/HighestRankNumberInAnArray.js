/*
DESCRIPTION:
Complete the method which returns the number which is most frequent in the given input array.
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  let arrayKeys = Array.from(new Set(arr));

  let arrayValues = arrayKeys.map((item) => {
    let value = arr.filter((el) => el == item);
    return value.length;
  });

  let keysValues = arrayKeys
    .map((item, index) => {
      item = [];
      item.push(arrayKeys[index], arrayValues[index]);
      return item;
    })
    .sort((a, b) => b[1] - a[1]);

  return keysValues[0][0];
}
highestRank([12, 10, 10, 10, 8, 12, 7, 6, 4, 10, 12]);
