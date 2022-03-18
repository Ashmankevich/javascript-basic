/*
Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum(a, b) {
   let result = 0;

   if (a < b) {
      for (i = a; i <= b; i++) {
         result += i
      };
   } else if (a > b) {
      for (i = b; i <= a; i++) {
         result += i
      };
   } else {
      result = a
   }
   return result;
};
console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(22, 22));
console.log(getSum(-1, 0));
console.log(getSum(-10, 2));