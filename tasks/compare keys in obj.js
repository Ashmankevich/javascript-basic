/*
Создать валидатор, запросить у пользователя логин и пароль для регистрации.
Затем данные записать в объект. Потом попросить пользователя подтвердить данные.
Если верно введен логин и пароль, вывести сообщение "Добро пожаловать".
*/

let user = {};
user.login = prompt('Enter your login', 'James Blake');
user.password = prompt('Enter your password', '1@lf98Np');

function getInfo(user) {
   let login = prompt('Confirm your login, please', 'James Blake');
   let password = prompt('Confirm your password, please', '1@lf98Np');
   if (login === user.login && password === user.password) {
      console.log('I am glad to see you? my dear friend');
   } else {
      console.log('Something was wrong! Please, try again');
   };
};

getInfo(user);