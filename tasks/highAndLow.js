/*
Create a function like this:
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers) {
   let arrNumbers = numbers.split(" ");
   return `"${Math.max.apply(null, arrNumbers) + ' ' + Math.min.apply(null, arrNumbers)}"`;
};
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));