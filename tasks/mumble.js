/*
Create function like this:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(string) {
   let resultArr = [];
   let lowerStr = string.toLowerCase();

   for (let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase();
      for (let j = 0; j < i; j++) {
         str += lowerStr[i];
      }
      resultArr.push(str);
   };

   return resultArr.join("-");
};
console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));