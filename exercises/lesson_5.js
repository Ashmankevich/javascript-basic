//Tasks of Learn JS

//Task 1
/*Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

user = {};
user.name = John;
user.surname = Smith;
user.name = Pete;
delete user.name;

//Task 2

/*
Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

function getSum() {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };

  let sum = 0;
  for (let value in salaries) {
    sum += salaries[value];
  }
  return sum;
}
getSum();

//Task 3
/*
Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
}

console.log(menu);

//Task 4

/*
Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

let schedule = {
  "8:30": "get up",
};

function isEmpty(schedule) {
  for (let key in schedule) {
    key = "smth";
    return false;
  }
  return true;
}
isEmpty(schedule);

//Task 5

/*
Создайте калькулятор
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  / ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  read() {
    this.numberOne = +prompt("Please, enter the number one", "");
    this.numberTwo = +prompt("Please, enter the number two", "");
  },
  sum() {
    return this.numberOne + this.numberTwo;
  },
  mul() {
    return this.numberOne * this.numberTwo;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//Task 6

/*
Цепь вызовов.
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
Такой подход широко используется в библиотеках JavaScript.
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};
ladder.up().up().down().showStep().down().showStep();

//Task 7
/*
Две функции - один объект
важность: 2
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
*/

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();

let b = new B();

alert(a == b);

//Task 8

/*
Создайте калькулятор при помощи конструктора, new Calculator
важность: 5
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calc() {
  this.read = function () {
    this.numberOne = +prompt("Please, enter the number one", "");
    this.numberTwo = +prompt("Please, enter the number two", "");
  };
  this.sum = function () {
    return this.numberOne + this.numberTwo;
  };
  this.mul = function () {
    return this.numberOne * this.numberTwo;
  };
}

let calc = new Calc();
calc.read();

alert("Sum=" + calc.sum());
alert("Mul=" + calc.mul());

// Task 9
/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений,
с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Please, enter some value", "");
  };
}

let accumulator = new Accumulator(2);

accumulator.read();
accumulator.read();
console.log(accumulator.value);

//Tasks from TMS

//Task 1 💻
/*Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.*/

let user = {
  "first name": "Andrew",
  "last name": "Ashmankevih",
};

delete user["first name"];
delete user["last name"];

console.log(user);

//Task 2 🖥
/*Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить
 есть ли в объекте определенный ключ и если есть вывести в консоль true*/

let specialUser = {
  name: "Andrew",
  age: 30,
};

let key = "name";
console.log(key in specialUser);

//Task 3 🖥
/*Дан объект:

    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей объекта*/

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

//Task 4 🖥
/*Дан объект:

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
Вывести в консоль слово красный и синий*/

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(
  colors["ru pum pu ru rum"].red,
  "и",
  colors["ru pum pu ru rum"].blue
);

//Task 5 🖥
/*
Дан объект:

    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
*/

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  alex: 664,
  alexandra: 199,
};

let count = 0;
for (let key in salaries) {
  count += 1;
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

function getSalaries() {
  return sum / count;
}
getSalaries();

//Task 6 🖥
/*Создать валидатор, запросить у пользователя логин и пароль для регистрации. 
Затем данные записать в объект. Потом попросить пользователя подтвердить данные. 
Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.
*/

let validator = {
  greeting: "welcome",
  init() {
    this.login = prompt("Please, enter your login", "");
    this.password = prompt("Please, enter your password");
    return this;
  },
  confirm() {
    this.loginConfirm = prompt("Please, confirm your login", "");
    this.passwordConfirm = prompt("Please, confirm your password");
    return this;
  },
  check() {
    if (
      this.login == this.loginConfirm &&
      this.password == this.passwordConfirm
    );
    return this.greeting;
  },
};

function getValidator(validator) {
  return validator.init().confirm().check();
}
getValidator(validator);

//ADVANCED level
/*Task 1 👨‍🏫
Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.
*/

let numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function getScore(a, b) {
  let score;
  for (let key in numbers) {
    if (a == numbers[key]) {
      a = key;
    }
  }
  for (let key in numbers) {
    if (b == numbers[key]) {
      b = key;
    }
  }
  return (score = `${a} : ${b}`);
}
getScore(6, 9);

//Task 2 🖥
/*
Даны два одинаковых объекта. Сравните их так чтобы они были равны

    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
*/

//Task 3 🖥
/*
У нас есть объект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. 
Задача придумать как обратиться к несуществующему объекту и 
не получить ошибку чтобы наша программа работала дальше.

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
*/
