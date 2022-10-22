//Task of Learn JS

//Task 1

/*
Сумма пользовательских чисел.
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
*/

function getSum() {
  let a = +prompt('Please, enter a number "a"', "");
  let b = +prompt('Please, enter a number "b"', "");
  return a + b;
}
getSum();

//Task 2

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
//пока посетитель его не введёт.

/*
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода,
отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

function readNumber() {
  let value = prompt("Please, enter some value like type of number", "");
  if (typeof value == " " || typeof value == null) return null;
  else if (isNaN(value) === true) {
    for (let i = 0; isNaN(value) === true; i++) {
      value = prompt("it's string, lol. You should enter some number", "");
    }
    return +value;
  } else return +value;
}
readNumber();

//Task 3

//Случайное число от min до max
/*
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), 
которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(1, 5));

//Task 4

/*
Напишите функцию randomInteger(min, max), 
которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.
*/

function getInteger(min, max) {
  let number = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(number);
}
console.log(getInteger(1, 5));
