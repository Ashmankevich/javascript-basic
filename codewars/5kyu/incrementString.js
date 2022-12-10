function incrementString(string) {
  let arrNum = [];
  let arrReverse = string.split("").reverse();
  for (let i = 0; i < arrReverse.length; i++) {
    if (!isFinite(arrReverse[i])) break;
    arrNum.push(arrReverse[i]);
  }
  arrNum.reverse();
  arrReverse.splice(0, arrNum.length);

  let strReverseBack = arrReverse.reverse().join("");
  let arrZero = [];

  for (let j = 0; j < arrNum.length; j++) {
    if (arrNum[j] !== "0") break;
    arrZero.push(+arrNum[j]);
  }
  arrNum.splice(0, arrZero.length);

  let cleanStr = arrNum.join("");
  let cleanNumber;
  cleanStr.length == 0 ? (cleanNumber = 0) : (cleanNumber = parseInt(cleanStr));

  let arrNumberPlusOne = String(cleanNumber + 1).split("");
  arrZero.splice(0, arrNumberPlusOne.length - arrNum.length);

  let strZero = arrZero.join("");
  let strNumberPlusOne = String(cleanNumber + 1);

  return strReverseBack + strZero + strNumberPlusOne;
}
incrementString("foobar000"); //foobar001
incrementString("foobar999"); //foobar1000
incrementString("foobar00999"); //foobar01000
incrementString("foo"); //foo1
incrementString("foobar001"); //foobar002
incrementString("foobar1"); //foobar2
incrementString("1"); //2
incrementString("009"); //010
incrementString("fo99obar99"); //fo99obar100
