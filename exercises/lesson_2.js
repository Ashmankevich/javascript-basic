/*task 1
Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

    let x = 20
    let y = 58
    let z = 42*/

    let x = 20;
    let y = 58;
    let z = 42;
    let sum = x + y + z;
    
    console.log(sum);

    /*Task 2 
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

console.log (GetMyAgeInSec);

const SECinOneYear = SEC * MIN * HOURS * DAYS;

let backMyAgeInYear = GetMyAgeInSec / SECinOneYear;

console.log (backMyAgeInYear);

/*Task 3 💻
    let count = 42
    let userName = '42'
Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. 
Попробуйте реализовать задачу двумя разными способами.*/

let count = 42;
let userName = "42";

let getString = String(count)
console.log(typeof getString)

let getNumber = Number(userName)
console.log(typeof getNumber)

let getStringElse = " " + count;
console.log(typeof getStringElse)

let getNumberElse = +userName;
console.log(typeof getNumberElse)

/*Task 4
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