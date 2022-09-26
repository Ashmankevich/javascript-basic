//NORMAL level

/*
Task 1 💻
Создайте переменные и присвойте им значения:

    'true'
    false
    17
    undefined
    null
Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.
*/

let q = "true";
let w = false;
let e = 17;
let r = undefined;
let t = null;

console.log(typeof q);
console.log(typeof w);
console.log(typeof e);
console.log(typeof r);
console.log(typeof t);

/*
Task 2 💻
Даны две переменные:

    let height = 15
    let width = 20
С помощью условий выведите в консоль разработчика наибольшее число.
*/

let height = 15;
let width = 20;

let resultThree = height > width ? height : width;
console.log(resultThree);

/*
Task 3 💻
Написать перебор от 1 до 20, где выведутся все числа кратные трём.

Для вычисления кратности обратите внимание на оператор %
*/

/*
Task 6 💻
Написать программу, которая выполняет следующие операции:

Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
Если меньше, то выводит сообщение - Пей колу.
Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.
*/

//task of 'learn JS': bonus 1

let answer = prompt("What is official name of JavaScript", "");

if (answer == "ECMAScript") {
  alert("You are right!");
} else {
  alert("Do you know that? ECMAScript!");
}

//task of 'learn JS': bonus 2

let answerTwo = prompt("Please, enter a random number", "");

let result =
  answerTwo > 0 ? alert("1") : answerTwo < 0 ? alert("-1") : alert("0");

console.log(result);

//task of 'learn JS': bonus 3

let resultTwo;
let a = prompt("Enter a", "");
let b = prompt("Enter b", "");

resultTwo = a + b < 4 ? "one more, please" : "it is too many";
console.log(resultTwo);

//task of 'learn JS': bonus 4

let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

let login = prompt("Enter your login", "");

message =
  login == "manager"
    ? (message = "hi!")
    : login == "director"
    ? (message = "hi, sir!")
    : login == ""
    ? (message = "no login")
    : (message = "");

console.log(message);
