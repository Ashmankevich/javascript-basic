/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer,
but do not begin or end the string with a dash mark.
If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
  if (num == 0) {
    return 0;
  } else if (Number(num)) {
    let arr = String(num)
      .split("")
      .filter((item) => item !== "-")
      .map((item) => Number(item))
      .map((item) => (item % 2 !== 0 ? -item : item));
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] < 0 && arr[i + 1] > 0) || arr[i + 1] !== 0) {
        console.log(arr[i]);
        arr[i] = `${arr[i]}-`;
      } else null;
    }
    let arrMod = arr.join("").split("");
    arrMod[arrMod.length - 1] == "-" ? arrMod.pop() : null;
    arrMod[0] == "-" ? arrMod.shift() : null;
    result = arrMod.join("");
    return result;
  } else return NaN;
}
dashatize(974302);

//refactor
function dashatize(num) {
  if (num == 0) return "0";
  else if (Number(num)) {
    return (arr = String(num)
      .split("")
      .map((item) => (item % 2 !== 0 ? `-${item}-` : item))
      .join("")
      .split("-")
      .filter((item) => item !== "")
      .join("-"));
  } else return "NaN";
}
dashatize(974302);
