/*
Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

Исправьте эту ситацию, чтобы мы смогли корректно поприветсвовать пользователя
*/

let userName = 'пОлИнА нАбЕрЕжНаЯ';
let rebuildName = userName.toLowerCase();
let splitName = rebuildName.split(' ');

for (let i = 0; i < splitName.length; i++) {
   splitName[i] = splitName[i].slice(0, 1).toUpperCase() + splitName[i].slice(1);
};

rewriteName = splitName.join(' ');
alert(`Привет, ${rewriteName}!`);