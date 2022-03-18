/*
👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
Примечание: для этой задачи y не считается гласной.
*/

//version_1

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'Y'];

let userStatement = prompt('Enter the some phrase, please', 'This website is for losers LOL!');

function cleanStatement(str) {
   return str
      .split('')
      .filter(item => !VOWELS.includes(item))
      .join('')
};
cleanStatement(userStatement);

//version_2_long record (training)

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'Y'];

let userStatement = prompt('Enter the some phrase, please', 'This website is for losers LOL!');

function cleanStatement(str) {
   let arr = str.split('');
   let arrCheck = arr.filter(function (item) {
      return !VOWELS.includes(item);
   })
   let result = arrCheck.join('');
   return result;
};

cleanStatement(userStatement);