/*
Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

процентная ставка в год — 17%,
количество лет — 5.
*/

let loan = +prompt("How much loan do you want to get?", 1000);

let getLoan;

if (loan > 0) {

   getLoan = function () {
      let years = 5;
      let rate = 17;

      let payment = loan * rate / 100 * years;
      return payment;
   }
}

getLoan();