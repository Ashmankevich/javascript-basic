/*
Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(phrase) {
   return phrase.length == new Set(phrase.toLowerCase()).size;
};
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));