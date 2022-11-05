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

//Task 16

/*
Трансформировать в массив имён
важность: 5
У вас есть массив объектов user, и в каждом из них есть user.name.
Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = ... ваш код

alert( names ); // Вася, Петя, Маша
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);
let names2 = users.map(function (item) {
  return item.name;
});
console.log(names);
console.log(names2);

//Task 17

/*
Трансформировать в объекты
важность: 5
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped =  ... ваш код ... 

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
*/

let andrew = { name: "Андрей", surname: "Пупкин", id: 1 };
let roma = { name: "Роман", surname: "Иванов", id: 2 };
let paolo = { name: "Павел", surname: "Петров", id: 3 };

let users17 = [andrew, roma, paolo];

let usersMapped = users17.map(function (item) {
  return {
    fullName: item.name + " " + item.surname,
    id: item.id,
  };
});

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

//Task 18

/*
Отсортировать пользователей по возрасту
важность: 5
Напишите функцию sortByAge(users),
которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/

let niko = { name: "Вася", age: 25 };
let kirill = { name: "Петя", age: 30 };
let alex = { name: "Маша", age: 28 };

let arr18 = [niko, kirill, alex];

function sortByAge(arr18) {
  return arr18.sort((a, b) => a.age - b.age);
}
sortByAge(arr18);

//Task 19

/*
Получить средний возраст
важность: 4
Напишите функцию getAverageAge(users),
которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

let sasha = { name: "Sasha", age: 30 };
let julia = { name: "Julia", age: 23 };
let katya = { name: "Katya", age: 25 };

let arr19 = [sasha, julia, katya];

function getAverageAge(arr) {
  let allAge = arr.reduce((accum, current) => accum + current.age, 0);
  let countN = arr19.length;
  return allAge / countN;
}
getAverageAge(arr19);

//Task 20

/*
Создайте объект с ключами из массива
важность: 4
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr),
которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
*/

function groupById(array) {
  return array.reduce(function (obj, value) {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users20 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users20);
console.log(usersById);

//Task 21

/*
Оставить уникальные элементы массива
важность: 4
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  let sortArr = strings.sort(function (a, b) {
    return b.localeCompare(a);
  });
  for (let i = 0; i <= sortArr.length; i++) {
    for (let j = 0; sortArr[j].localeCompare(sortArr[j + 1]) == 0; j++) {
      sortArr.splice([j], 1);
    }
  }

  return arr;
}

console.log(unique(strings)); // кришна, харе, :-O

//Task22

/*
Создать расширяемый калькулятор
важность: 5
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
«ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" ");
    let a = +split[0];
    let b = +split[2];
    let operator = split[1];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator();
console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
console.log(powerCalc.calculate("2 * 8"));

//Task 23

/*
Фильтрация уникальных элементов массива
важность: 5
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

*/

function unique(arr) {
  let set = new Set(arr);
  let result = [];
  for (let value of set) {
    set.push(value);
  }
  return result;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

//Task 24

/*
Отфильтруйте анаграммы
важность: 4
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

let arr24 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let value of arr) {
    let rebuild = value.toLowerCase().split("").sort().join("");
    map.set(rebuild, value);
    console.log(map);
  }
  return Array.from(map.values());
}

console.log(aclean(arr24)); // "nap,teachers,ear" или "PAN,cheaters,era"

//Task 25

/*
Мы хотели бы получить массив ключей map.keys() в переменную
и далее работать с ними, например, применить метод .push.
*/

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

console.log(keys);

//Task 26

/*
Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries),
которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  let result = 0;
  if (obj == null) {
    return null;
  } else {
    for (let value of Object.values(obj)) {
      result += value;
    }
  }
  return result;
}
sumSalaries(salaries);

//Task 27

/*
Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) )
*/

let user = {
  name: "John",
  age: 30,
  city: "Minsk",
};

let count = (obj) => Object.keys(obj).length;
count(user);

//Task 28

/*
Деструктурирующее присваивание
важность: 5
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

let user28 = {
  userName: "John",
  years: 30,
};

let { userName, years: age, isAdmin = false } = user28;

console.log(userName);
console.log(age);
console.log(isAdmin);

//Task 29

/*
Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

let salaries29 = {
  Andrew: 1000,
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(obj) {
  let topGuy = null;
  let maxSalary = 0;
  for (let [name, salary] of Object.entries(obj)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      topGuy = name;
    }
  }
  return topGuy;
}
topSalary(salaries29);
