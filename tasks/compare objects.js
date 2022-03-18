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

//solution_1

let student1 = {
   name: 'Polina',
   age: 27,
};

let student2 = {
   name: 'Polina',
   age: 27,
};

console.log(JSON.stringify(student1) === JSON.stringify(student2));
// important! If the keys are out of order, it will be false

//solution_2

function getComparison(student1, student2) {
   let propStudent1 = Object.getOwnPropertyNames(student1);
   let propStudent2 = Object.getOwnPropertyNames(student2);

   if (propStudent1.length !== propStudent2.length) {
      return false;
   };

   for (let i = 0; i < propStudent1.length; i += 1) {
      let property = propStudent1[i];
      if (student1[property] !== student2[property]) {
         return false;
      };
   };
   return true;
};

let student1 = {
   name: 'Polina',
   age: 27,
};

let student2 = {
   name: 'Polina',
   age: 27,
};

console.log(getComparison(student1, student2));