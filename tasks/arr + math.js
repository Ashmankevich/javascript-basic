/*
Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. 
В конце вывести оба массива в консоль.
*/

let arrNumber = [];
let arrNumberCube = [];

let i = 0;
while (i < 5) {
   arrNumber[i] = Math.round(Math.random() * 22);
   arrNumberCube[i] = Math.pow(arrNumber[i], 3);
   i++;
}
console.log(arrNumber);
console.log(arrNumberCube);