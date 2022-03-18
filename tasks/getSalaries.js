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
   mike: 664,
   alexandra: 199,
};

let sumSalary = 0;
let averageSalary = 0;
let countPeople = 0;

function getAverageSalary(object) {
   for (let key in object) {
      if (typeof object[key] == 'number') {
         sumSalary += object[key];
         countPeople++;
      };
   };
   averageSalary = sumSalary / countPeople;
   return averageSalary;
};

console.log(getAverageSalary(salaries));