//NORMAL level

/*task 1 💻
Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

    let x = 20
    let y = 58
    let z = 42*/

let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;

console.log(sum);

/*Task 2 💻 
Создайте переменные:

- количество секунд в минуте
- количество минут в часу
- количество часов в сутках
- количество суток в году
Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds
*/

const SEC = 60;
const MIN = 60;
const HOURS = 24;
const DAYS = 365;

let MyAge = 29;

let GetMyAgeInSec = MyAge * DAYS * HOURS * MIN * SEC;

console.log(GetMyAgeInSec);

const SECinOneYear = SEC * MIN * HOURS * DAYS;

let backMyAgeInYear = GetMyAgeInSec / SECinOneYear;

console.log(backMyAgeInYear);

/*Task 3 💻
    let count = 42
    let userName = '42'
Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. 
Попробуйте реализовать задачу двумя разными способами.*/

let count = 42;
let userName = "42";

let getString = String(count);
console.log(typeof getString);

let getNumber = Number(userName);
console.log(typeof getNumber);

let getStringElse = " " + count;
console.log(typeof getStringElse);

let getNumberElse = +userName;
console.log(typeof getNumberElse);

/*Task 4 💻
Имеется три переменные:

  let a = 1
  let b = 2
  let c = "белых медведей"
Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль*/

let a = 1;
let b = 2;
let c = "белых медведей";

let strA = "" + a;
let strB = "" + b;
let word = strA + strB + " " + c;

console.log(word);

let wordVersionTwo = `${a}` + `${b}` + " " + c;

console.log(wordVersionTwo);

/*
Task 5 💻
Создайте переменные и поместите в них нижеприведенные слова. 
Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

- доступ 
- морпех
- наледь
- попрек
- рубило
*/

let wordOne = "Доступ";
let wordTwo = "Морпех";
let wordThree = "Наледь";
let wordFour = "Попрек";
let wordFive = "Рубило";

let getLengthWords = wordOne + wordTwo + wordThree + wordFour + wordFive;

console.log(getLengthWords.length);

/*
Task 7 💻
Запросить у пользователя имя и возраст и вывести их в консоль.
*/

let m = prompt("What is your name?", "");
console.log(m);

let n = +prompt("How old are you?", "");
console.log(n);

/*
Преобразование типов
1) "" + 1 + 0
2) "" - 1 + 0
3) true + false
4) 6 / "3"
5) "2" * "3"
6) 4 + 5 + "px"
7) "$" + 4 + 5
8) "4" - 2
9) "4px" - 2
10) "  -9  " + 5
11) "  -9  " - 5
12) null + 1
13) undefined + 1
14) " \t \n" - 2
*/

//ADVANCED level

/*
Task 1 👨‍🏫
Поменяйте значение переменных местами не создавая дополнительной переменной:

    let a = 4
    let b = 3
*/

let q = 4;
let w = 3;

let u = ([q, w] = [w, q]);

console.log(u);

/*
Task 2 👨‍🏫
В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
Создайте переменную cipher и поместите туда необходимые символы
*/

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = `${
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]
}`;
let answer = cipher;

console.log(answer);
