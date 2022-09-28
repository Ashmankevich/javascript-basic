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
Task 4 💻
Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
Для решения этой задачи нам помогут логические операторы || &&.
*/
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork;

key == (true || document == true || pen == true) ||
(apple == true && orange == true)
  ? (shouldGoToWork = true)
  : (shouldGoToWork = false);

console.log(shouldGoToWork);

/*
Task 5 💻
Запросить у пользователя число:
1. Если число делится без остатка на 5 выводим сообщение Fiz
2. Если число делится без остатка на 3 выводим сообшение Buz
3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
*/

let number = +prompt("please, enter the number", "");

if (number % 5 == 0 && number % 3 == 0) {
  console.log("FizBaz");
} else if (number % 3 == 0) {
  console.log("Buz");
} else if (number % 5 == 0) {
  console.log("Fiz");
} else {
  console.log("Please, check your data");
}

/*
Task 6 💻
Написать программу, которая выполняет следующие операции:

Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
Если меньше, то выводит сообщение - Пей колу.
Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.
*/

let age = +prompt("How old are you?", "");

age > 18
  ? console.log("You can drink bear!")
  : age > 16 && age < 18
  ? console.log("You can smoke")
  : age < 18
  ? console.log("You can drink Cola")
  : "Oopss";

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

//task of 'learn JS': bonus 5

/*
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль,
если ничего не введено или нажата клавиша Esc – показать «Отменено»,
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
*/

let checkLogin = prompt("Enter your login", "");
let password;

if (checkLogin == "admin") {
  password = prompt("Enter your password", "");

  if (password == "i am boss") {
    alert("Hi, boss");
  } else if (password == "" || password == null) {
    alert("Cancel");
  } else {
    alert("Please, check your password");
  }
} else if (checkLogin == "" || checkLogin == null) {
  alert("Cancel");
} else {
  alert("I do not know who you are");
}
