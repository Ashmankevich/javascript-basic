//Алгоритм поиска
/*важность: 5
Задача состоит из двух частей.

У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

С помощью свойства __proto__ задайте прототипы так,
чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head.
Например, pockets.pen должно возвращать значение 3 (найденное в table),
а bed.glasses – значение 1 (найденное в head).
Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses
 или через head.glasses? При необходимости составьте цепочки поиска и сравните их.*/

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

//Создайте новый объект с помощью уже существующего
/*важность: 5
Представьте, что у нас имеется некий объект obj,
созданный функцией-конструктором – мы не знаем какой именно,
но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/

function Android(name) {
  this.name = name;
  console.log(name);
}

let android = new Android("Mr. Robot");
let android2 = new android.constructor("Mr. T1000");

function Robot(name) {
  this.name = name;
  console.log(name);
}

Robot.prototype = {};

let robot = new Robot("Mr. Black");
let robot2 = new robot2.constructor("Mr. White");
