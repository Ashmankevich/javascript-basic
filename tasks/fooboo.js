/*
Напишите функцию fooboo которая принимает в качестве аргумента три параметра:

булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true запускаем функцию foo иначе boo
*/

function foo() {
   console.log('foo')
};
function boo() {
   console.log('boo')
};
function fooboo(logic, functionFoo, functionBoo) {

   if (logic) {
      functionFoo()
   } else {
      functionBoo()
   };
}

fooboo(false, foo, boo);