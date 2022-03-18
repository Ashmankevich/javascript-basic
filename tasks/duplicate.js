/*
Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен (, если этот символ появляется только один раз в исходной строке, или ), если этот символ встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.
    "din" => "((("
    "recede" => "()()()"
    "Success" => ")())())"
    "(( @" => "))(("
*/

function duplicate(phrase) {
   let newPhrase = '';
   let pharaseLower = phrase.toLowerCase();

   for (i = 0; i < phrase.length; i++) {
      ///check for any characters that repeat
      if (pharaseLower.indexOf(pharaseLower[i]) === pharaseLower.lastIndexOf(pharaseLower[i])) {
         newPhrase += '('
      } else {
         newPhrase += ')'
      }
   };
   return `"${newPhrase}"`;
};
console.log(duplicate('din'));
console.log(duplicate('recede'));
console.log(duplicate('Success'));
console.log(duplicate('(( @'));