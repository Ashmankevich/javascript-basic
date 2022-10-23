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

//Task 5

/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася"
*/

function ucFirst(a) {
  if (a !== "") return a;
  return a[0].toUpperCase() + a.slice(1);
}
ucFirst("andrew");

//Task 6

/*
Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(value) {
  let newStr = value.toLowerCase();
  let check = -1;
  if (newStr.indexOf("viagra") !== check || newStr.indexOf("xxx") !== check) {
    return true;
  }
  return false;
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

//Task 7

/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется,
либо, если необходимо, усечённая строка.

Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
*/

//Task 8

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение
и возвращать его.
Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

let extractCurrencyValue = (value) => +value.slice(1);
extractCurrencyValue("$120");
