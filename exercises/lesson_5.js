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
