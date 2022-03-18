/*
У нас есть объект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
Но произошла ошибка и в этом объекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. Задача придумать как обратиться к несуществующему объекту и не получить ошибку чтобы наша программа работала дальше.

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

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   doog: {
      name: 'Орео',
      age: 2,
   },
};

function getSearch(animal) {
   let say;

   for (let key in animals) {
      if (animal === key) {
         say = true;
      };
   };

   if (say) {
      console.log(animals[animal].name);
   } else {
      console.log(`I could not find ${animal} here! Empty!`);
   };
};

getSearch('bird');