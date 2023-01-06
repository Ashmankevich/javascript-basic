/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string
with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about
uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers
back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into
the function will correspond to vowels.
*/

function encode(string) {
  return string
    .split("")
    .map((item) => {
      switch (item) {
        case "a":
          item = "1";
          break;
        case "e":
          item = "2";
          break;
        case "i":
          item = "3";
          break;
        case "o":
          item = "4";
          break;
        case "u":
          item = "5";
          break;
      }
      return item;
    })
    .join("");
}
encode("hello");

function decode(string) {
  return string
    .split("")
    .map((item) => {
      switch (item) {
        case "1":
          item = "a";
          break;
        case "2":
          item = "e";
          break;
        case "3":
          item = "i";
          break;
        case "4":
          item = "o";
          break;
        case "5":
          item = "u";
          break;
      }
      return item;
    })
    .join("");
}
decode("H4w 1r2 y45 t4d1y?");

//refactor
const vowels = ["a", "e", "i", "o", "u"];
const encode = (string) =>
  string
    .split("")
    .map((x) => vowels.indexOf(x) + 1 || x)
    .join("");
const decode = (string) =>
  string
    .split("")
    .map((x) => vowels[Number(x) - 1] || x)
    .join("");
