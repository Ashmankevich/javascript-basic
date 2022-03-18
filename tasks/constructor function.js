/*
Написать функцию конструктор Student

В каждом объекте студента должны быть поля salary , rate , name

Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.

На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

Создать массив students и поместить в него студентов.

Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

rate имеет 4 категории A B C D

A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
D - плохой рейтинг и мы не можем дать кредит
*/


function Student(salary, rate, name) {
   this.salary = salary;
   this.rate = rate;
   this.name = name;

   this.getCredit = function () {
      if (this.rate === 'A') {
         return this.salary * 12;
      } else if (this.rate === 'B') {
         return this.salary * 9;
      } else if (this.rate === 'C') {
         return this.salary * 6;
      } else {
         return this.salary * 0;
      };
   };
};

let student1 = new Student(1, 'A', 'Andrew');
let student2 = new Student(2, 'B', 'Artem');
let student3 = new Student(1, 'A', 'Karina');
let student4 = new Student(3, 'B', 'Igor');
let student5 = new Student(1, 'A', 'Olga');

let students = [student1, student2, student3, student4, student5];

function getSumCredit(studentsMoney) {
   return studentsMoney.reduce((accum, item) => accum + item.getCredit(), 0)
};

console.log(getSumCredit(students));