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

//Добавить функциям метод "f.defer(ms)"
/*важность: 5
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};
function f() {
  alert("Hello!");
}

f.defer(1000);

//Добавьте toString в словарь
/*важность: 5
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.
Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

Вот так это должно работать:

let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
*/

let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: () => Object.keys(dictionary).join(),
});

// добавляем немного данных
dictionary.apple = "AppleMac";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"

/*
Перепишите класс
важность: 5
Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
*/

function Time({ template }) {
  this.template = template;
}

Time.prototype.render = function () {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();

  let output = this.template
    .replace("h", hours)
    .replace("m", mins)
    .replace("s", sec);

  console.log(output);
};

Time.prototype.start = function () {
  this.render();
  this.timer = setInterval(() => this.render(), 1000);
};

Time.prototype.stop = function () {
  clearInterval(this.timer);
};

let time = new Time({ template: "h:m:s" });

time.start();

class Clock {
  constructor({ wrapped }) {
    this.wrapped = wrapped;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();

    let output = this.wrapped
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", sec);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clock = new Clock({ wrapped: "h:m:s" });

clock.start();

class ExtendedClock extends Clock {
  constructor(additional) {
    super(additional);
    let { precision = 1000 } = additional;
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock2 = new ExtendedClock({ wrapped: "h:m:s", precision: 3000 });
clock2.start();

//Ошибка создания экземпляра класса
/*важность: 5
В коде ниже класс Rabbit наследует Animal.

К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {

   constructor(name) {
     this.name = name;
   }
 
 }
 
 class Rabbit extends Animal {
   constructor(name) {
     this.name = name;
     this.created = Date.now();
   }
 }
 
 let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
 alert(rabbit.name);
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name);

//Task of TMS
/*
Task 1 💻
Создайте класс Developer

Конструктор этого класса принимает один параметр name
Реализуйте метод startWork который возвращает строку:
name start work ...

Реализуйте метод endtWork который возвращает строку:
name end work ...

Далее реализуйте два класса Frontend Backend которые будут наследовать методы из класса Developer

Класс Frontend должен иметь свой уникальный метод buildWebSite который возвращает строку:

name start build website

Класс Frontend должен иметь свой уникальный ключ websiteName
в который мы записываем название веб-сайта над которым будет работать разработчик.

Класс Backend должен иметь свой уникальный метод buildServer который возвращает строку:

name start build server

Проинициализируйте два класса Frontend Backend и вызовите у них все доступные методы.

    const john = new Frontend('john');
    john.startWork()        // john start work ...
    john.buildWebsite()     // john start build website Amazon
    john.endWork()          // john end work ...
    */

class Developer {
  constructor(name) {
    this.name = name;
  }
  startWork() {
    return `${this.name} start work`;
  }
  endWork() {
    return `${this.name} end work`;
  }
}

class Frontend extends Developer {
  websiteName = "Google";
  buildWebSite() {
    return `${this.name} start build website ${this.websiteName}`;
  }
}

class Backend extends Developer {
  buildServer() {
    return `${this.name} start build server`;
  }
}

const andrew = new Frontend("Andrew");
console.log(andrew.startWork());
console.log(andrew.buildWebSite());
console.log(andrew.endWork());

const karina = new Backend("Karina");
console.log(karina.startWork());
console.log(karina.buildServer());
console.log(karina.endWork());
