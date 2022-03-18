/*
Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
*/

let number = +prompt("Enter a number", 100);

let getSum;

if (number > 0) {

   getSum = function () {
      let summary = 0;
      for (let i = 1; i <= number; i++) {
         summary = summary + i;
      }
      return summary;
   };

}

getSum();