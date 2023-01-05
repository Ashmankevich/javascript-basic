/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata.
Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

//first solution
var encryptThis = function (text) {
  let str = text.split(" ");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let first = str[i].charCodeAt(0);
    let last = str[i][1];
    let second = str[i].at(-1);
    let partWord = str[i].slice(2, str[i].length - 1);
    let word;
    if (str[i].length == 1) word = first;
    else if (str[i].length == 2) word = first + str[i][1];
    else word = first + second + partWord + last;
    result.push(word);
  }
  return result.join(" ");
};
encryptThis("A wise old owl lived in an oak");

//refactor
var encryptThis = function (text) {
  let encrypt = text.split(" ").map((item) => {
    let first = item.charCodeAt(0);
    let last = item[1];
    let second = item.at(-1);
    let partWord = item.slice(2, item.length - 1);
    if (item.length == 1) item = first;
    else if (item.length == 2) item = first + item[1];
    else item = first + second + partWord + last;
    return item;
  });
  return encrypt.join(" ");
};
encryptThis("A wise old owl lived in an oak");
