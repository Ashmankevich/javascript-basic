//Tasks from 'Learn JavaScript', theme - FUNCTION

function ShowMessage(from, text, word = "miracle") {
  console.log(from + ":" + text + ", " + word);
}

ShowMessage("Julia", "she said she loves him");

//task 1
/*
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||
*/

function checkAge(age) {
  return age > 18 ? true : confirm("What your parents are decided?");
}
checkAge(10);

function checkAge(age) {
  return age > 18 || confirm("What your parents are decided?");
}
checkAge(10);

//task 2
/*
Функция min(a, b)
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

function getMinValue(a, b) {
  return a < b ? a : b;
}
getMinValue(3, -1);

//task 3
//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

/*
Функция pow(x,n)

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
*/

let x = +prompt("Please, enter the X", "");
let n = +prompt("Please, enter the N", "");

function pow(x, n) {
  if (n < 0) {
  } else {
    let result = x ** n;
    return console.log(`pow(x, n) = ${result}`);
  }
  return console.log("You should use only natural numbers. Try, please again");
}

pow(x, n);

//task 4 Замените код Function Expression стрелочной функцией:
/*

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "So, are you agree?",
  (Ok = () => alert("You are agree")),
  (No = () => alert("You do not agree"))
);

// Tasks from TMS
// Normal level

//Task 1

/*
Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
*/

/*let number = +prompt("Enter the number", "");
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(sum);
*/

//one way

let getSum = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
getSum(100);

// two way

function getSumTwo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

getSumTwo(100);

//three way

let getSumThree = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};
getSumThree(100);
