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

function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  else return str.slice(0, 19) + "...";
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

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

//Task 9

/*
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». 
Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock & Roll");
styles[`${Math.floor(styles.length - 1 / 2)}`] = "Classic";
styles.shift();
styles.unshift("Rap", "Reggie");
console.log(styles);

//Task 10

/*
Сумма введённых чисел
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
  let arr = [];
  let value;
  if ((value = prompt("Please, enter the sum value", ""))) {
    for (
      let i = 0;
      isNaN(value) === false && value !== null && value !== "";
      i++
    ) {
      arr.push(value);
      value = prompt("It's ok, you should enter some value more", "");
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
}
sumInput();

//Task 11

/*
Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
потом переделайте всё как нужно и методом join соедините обратно.
*/

function camelize(str) {
  let arr = str.split("");

  for (let i = 0; arr.indexOf("-") !== -1; i++) {
    let index = arr.indexOf("-");
    arr.splice(index, 1);
    let capitalLetter = arr[index].toUpperCase();
    arr.splice(index, 1, capitalLetter);
  }

  return arr.join("");
}
camelize("-webkit-transition");

//Task 12

/*
Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет элементы со значениями больше или равными a и меньше или равными b
и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  //return arr.filter((item) => item >= a && item <= b);
  return arr.filter(function (el) {
    return el >= a && el <= b;
  });
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

//Task 13

/*
Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
и удаляет из него все значения кроме тех, которые находятся между a и b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/

let array = [5, 3, 8, 1];

function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > a && array[i] > b) {
      array.splice([i], 1);
    }
  }
}
filterRangeInPlace(array, 1, 4);
console.log(array);

//Task 14

/*
Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/

let arrTask14 = [5, 2, 1, -10, 8];

arrTask14.sort(function (a, b) {
  return b - a;
});

console.log(arrTask14);

//Task 15

/*
Скопировать и отсортировать массив
важность: 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

let arrTask15 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}
let sorted = copySorted(arrTask15);

console.log(arrTask15);
console.log(sorted);
