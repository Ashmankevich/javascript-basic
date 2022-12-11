/*
Наследование от SyntaxError
важность: 5
Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

Класс должен поддерживать свойства message, name и stack.

Пример использования:

let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)
*/

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
    this.stack = "stack";
  }
}

let err = new FormatError("ошибка форматирования");
console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
