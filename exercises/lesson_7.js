//Functions level 2
/*Complete exercise
NORMAL level
Task 1 🖥
Выведи все элементы массива в консоль с помощью метода forEach

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function
*/

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function getNumbres() {
  return fibonacci.forEach(function callback(item) {
    return console.log(item);
  });
}
getNumbres();

function getNumbresTwo() {
  return fibonacci.forEach((item) => console.log(item));
}
getNumbresTwo();

let getNumbresThree = () => fibonacci.forEach((item) => console.log(item));
getNumbresThree();

//Task 2 🖥
/*Используя метод map создайте новый массив, на основе массива users,
в котором каждый элемент массива будет содержать строку вида:

['member 1: Darya', 'member 2: Masha', ... etc]

    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
Реализуйте решение двумя способами, используя function declaration & arrow function.
*/

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

function getUsers() {
  return users.map(function callback(item, index) {
    return `member ${index + 1} : ${item}`;
  });
}
getUsers();

function getUsers() {
  return users.map((item, index) => `member ${index + 1} : ${item}`);
}
getUsers();

let getUsers = () =>
  users.map((item, index) => `member ${index + 1} : ${item}`);
getUsers();
