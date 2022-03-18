/*
Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

['member 1: Darya', 'member 2: Masha', ... etc]

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
*/

//version_1

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let usersNew = users.map((item, index) => `member ${index + 1}:${item}`);
console.log(usersNew);

//version_2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let usersNew = users.map(function (item, index) {
   return `member ${index + 1}:${item}`
});
console.log(usersNew);