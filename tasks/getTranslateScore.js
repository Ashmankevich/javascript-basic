/*
Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.
Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.
*/

let number = {
   one: 1,
   two: 2,
   three: 3,
   four: 4,
   five: 5,
};

function getTranslateScore(score) {
   let wrd_1;
   let wrd_2;
   let scoreWrd = score.split(':');

   for (let key in number) {
      if (+scoreWrd[0] === number[key]) {
         wrd_1 = `${key}`;
      };
   };
   for (let key in number) {
      if (+scoreWrd[1] === number[key]) {
         wrd_2 = `${key}`;
      };
   };

   let result = `${wrd_1}:${wrd_2} `;
   return result;
};
console.log(getTranslateScore('2:5'));