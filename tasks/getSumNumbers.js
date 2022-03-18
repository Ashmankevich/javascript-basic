/*
Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

Для 2021 это будет 5.
*/

let number = +prompt("Enter a number", 2021);

let getSumNumbers;

if (number > 0) {

   getSumNumbers = function () {
      let rewriteToString = `${number}`
      let summary = 0
      for (let i = 0; i < rewriteToString.length; i++)
         summary += +rewriteToString[i]

      return summary
   };

};

getSumNumbers();