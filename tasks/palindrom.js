/*
Is it a palindrom?
Create function.
*/

let word = prompt('Enter the word', 'Anna');

function checkPalindrom(item) {

   let getDownWord = item.toLowerCase();
   let changeWord = getDownWord.split("").reverse().join("");

   if (getDownWord === changeWord) {
      alert("it's a palindrom")
   } else {
      alert("it's not palindrom")
   };
};
checkPalindrom(word);