/*
Дан массив:
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
Оба массива затем выведите в консоль.
*/

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let arrPos = mixedNumbers.filter(function (item) {
   return item >= 0;
});
console.log(arrPos);

let arrNeg = mixedNumbers.filter(function (item) {
   return item < 0;
});
console.log(arrNeg);