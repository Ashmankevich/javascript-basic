/*
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
You will be passed a string and you must return that string in an array
where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

//first solution
function wave(str) {
  let result = [];
  let arrLetters = str.split("");
  for (let i = 0; i < arrLetters.length; i++) {
    if (arrLetters[i] !== " ") {
      arrLetters.splice(i, 1, arrLetters[i].toUpperCase());
      result.push(arrLetters.join(""));
      arrLetters.splice(i, 1, arrLetters[i].toLowerCase());
    } else null;
  }
  return result;
}
wave("two words");

//second solution: refacor
function wave(str) {
  let result = [];
  let arrLetters = str.split("");
  arrLetters.forEach((item, index) => {
    arrLetters.splice(index, 1, item.toUpperCase());
    result.push(arrLetters.join(""));
    arrLetters.splice(index, 1, item.toLowerCase());
  });
  return result.filter((item) => item !== str);
}
wave("two words");
