/*
const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
Выведите в консоль среднее значение чисел в многомерном массиве.
*/

const matrix = [
   [12, 98, 78, 65, 23],
   [54, 76, 98, 43, 65],
   [13, 324, 65, 312],
   [9092, 22, 45, 90000],
];

let newMatrix = matrix.reduce(function (flat, current) {
   return flat.concat(current);
});

function getAverageOfExpression(numbers) {
   let sum = numbers.reduce(function (sum, current) {
      return sum + current;
   });
   return sum / numbers.length;
};
console.log(getAverageOfExpression(newMatrix));