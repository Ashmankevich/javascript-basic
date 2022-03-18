/*
Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.
После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».
Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!
*/

//version 1

let moneyOnCard = +prompt("How much money do you plan to spend on a new iPhone with accessories?", 4000);
const TAX_RATE = 5;
const COST_IPHONE = 900;
const COST_ACCESSORIES = 120;

function getFullCost() {
   let fullCost = 0;
   fullCost = (((COST_IPHONE + COST_ACCESSORIES) * TAX_RATE) / 100) + COST_IPHONE + COST_ACCESSORIES;
   return fullCost;
}

function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
};
function showOk() {
   alert('Are you agree');
};
function showCancel() {
   alert('Canceled');
};
ask(`The full cost iPhone include tax is ${getFullCost()}$. Are you buying this?`, showOk, showCancel);

let resultShopping = 0;
let amount = moneyOnCard / getFullCost();

if (moneyOnCard >= getFullCost()) {

   for (i = 1; i < amount; i++) {
      moneyOnCard -= getFullCost();
      resultShopping = getFullCost() * i;
      console.log('Payment was successful!');
      console.log(`Left on your card: ${moneyOnCard.toFixed(2)}$`);
      console.log(`Your receipt is ${resultShopping}$`);
   }

} else {
   alert('You have not enough money on your card')
};

//version 2

let moneyOnCard = +prompt("How much money do you plan to spend on a new iPhone with accessories?", 4000);
const TAX_RATE = 5;
const COST_IPHONE = 900;
const COST_ACCESSORIES = 120;

function getFullCost() {
   let fullCost = 0;
   fullCost = (((COST_IPHONE + COST_ACCESSORIES) * TAX_RATE) / 100) + COST_IPHONE + COST_ACCESSORIES;
   return fullCost;
}

while (moneyOnCard >= getFullCost()) {

   let checkPermission = confirm(`The full cost iPhone include tax is ${getFullCost()}$. Are you buying this?`);

   if (checkPermission == true) {
      moneyOnCard -= getFullCost();
      console.log('Payment was successful!');

   } else {
      alert('I am so pity. Maybe next time')
   };
   console.log(`Left on your card: ${moneyOnCard.toFixed(2)}$`);
}
if (moneyOnCard <= getFullCost) {
   alert('You have not enough money on your card')
};