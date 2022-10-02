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

for (let i = 1; i < 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

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

/*
  Task 7 💻
  Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться.
  После ввода данных мы должны вывести в консоль сообщение из списка. 
  Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
  
  юг на юг пойдешь счастье найдешь
  север на север пойдешь много денег найдешь
  запад на запад пойдешь верного друга найдешь
  восток на восток пойдешь разработчиком станешь
  Используйте конструкцию switch
*/

let getDirection = prompt("where do you want to go?");

switch (getDirection) {
  case "North":
    console.log("If you go to North you will be rich person");
    break;
  case "West":
    console.log("If you go to West you will find best friend");
    break;
  case "East":
    console.log("If you go to East you will be FrontEnd developer");
    break;
  case "South":
    console.log("If you go to South you will be happy person");
    break;
  default:
    console.log("Your data is wrong, pleasem try again");
}

//ADVANCED level

//Task 2 👨‍🏫
/*
Написать программу, которая выполняет следующие операции:

Запрашивает у пользователя число.
Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
По окончании вывести пользователю alert, содержащий формулу и результат например:
((((6 - 10) + 5) * 20) / 2 = 110)
*/

let randomNumber = +prompt("Please, enter the number", "");

let add = +prompt("How much to add?", "");

let subtract = +prompt("How much to subtract?", "");

let multiplication = +prompt("How much multiply by?", "");

let division = +prompt("How much division by?", "");

console.log(
  `(((${randomNumber} + ${add} - ${subtract})* ${multiplication})/ ${division} )= ${
    ((randomNumber + add - subtract) * multiplication) / division
  }`
);

/*
Task 3 👨‍🏫
Написать программу, которая будет выводить в консоль лесенку.

    #
    ##
    ###
    ####
    #####
    ######
*/

for (let k = 0; k < l; l++) {
  console.log("#");
}

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

//task of 'learn JS': bonus 6

/*
При помощи цикла for выведите чётные числа от 2 до 10.
*/

for (let j = 2; j < 10; j++) {
  if (j % 2 == 0) {
    console.log(j);
  }
}

//task of 'learn JS': bonus 7

/*
Переписать, используя while
for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}
*/
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

//task of 'learn JS': bonus 8

/*
Вывести простые числа.

Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/

let num = 10;

nextPrime: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}

//task of 'learn JS': bonus 9

/*
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
*/

let browser = prompt("Enter browser you used", "");

if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else if (browser == "Edge") {
  console.log("You've got the Edge!");
} else {
  console.log("We hope that this page looks ok!");
}

//task of 'learn JS': bonus 10

/*
Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/

const numberTask10 = +prompt("Введите число между 0 и 3", "");

switch (numberTask10) {
  case 0:
    console.log("Вы ввели число 0");
    break;
  case 1:
    console.log("Вы ввели число 1");
    break;
  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
}
