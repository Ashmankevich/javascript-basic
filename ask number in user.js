/*
Запросить у пользователя число:

1. Если число делится без остатка на 5 выводим сообщение Fiz
2. Если число делится без остатка на 3 выводим сообшение Buz
3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
*/

let userNumber = prompt('Please, enter a number', '1');
let message;
if (userNumber % 3 === 0 && userNumber % 5 === 0) {
   message = 'FizBuz'
} else if (userNumber % 5 === 0) {
   message = 'Fiz'
} else if (userNumber % 3 === 0) {
   message = 'Buz'
};
console.log(message);