/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates
all the odd-indexed characters of S with all the even-indexed characters of S,
this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function
which reverses the process.

If the string S is an empty value or the integer N is not positive,
return the first argument without changes.
*/

function encrypt(text, n) {
  if (n == 0 || n < 0 || text == null) return text;
  else {
    for (let j = 0; j < n; j++) {
      let result = "";
      for (let i = 1; i < text.length; i += 2) result += text[i];
      for (let i = 0; i < text.length; i += 2) result += text[i];
      text = result;
    }
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (n == 0 || n < 0 || encryptedText == null) return encryptedText;
  else {
    let result = new Array(encryptedText.length);
    for (let j = 0; j < n; j++) {
      let k = 0;
      for (let i = 1; i < result.length; i += 2) result[i] = encryptedText[k++];
      for (let i = 0; i < result.length; i += 2) result[i] = encryptedText[k++];
      encryptedText = result.join("");
    }
    return encryptedText;
  }
}
