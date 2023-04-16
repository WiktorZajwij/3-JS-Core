/* 
Завдання 2.

Користувач вводить email. Потрібно перевірити дані на правильність введення. Правильно введений email - це той, в якому міститься символ @. Крім того символ @ не може бути на початку тексту або в кінці.

Приклад правильно введених даних:
student@ukr.net

Приклад не правильно введених даних:
@student.ukr.net
student.ukr.net@
student.ukr.net
*/

/* 
let email = prompt('write your email');
let email = '@student.ukr.net'; //false
let email = 'student.ukr.net@'; //false
let email = 'student.ukr.net'; //false
let email = 'student@ukr.net'; //true

1.
  if (email.lastIndexOf('@') == 0 || 
      email.lastIndexOf('@') == -1 ||
      email.slice(-1) == '@') {  
    console.log(false, 'wrong format');
  } else {
    console.log(true, 'correct format');
  }
*/







/* 
2
*/
// let email = prompt('write your email');
// let email = '@student.ukr.net'; 
// let email = 'student.ukr.net@'; 
// let email = 'student.ukr.net'; 
let email = 'student@ukr.net'; 

switch (true) {
  case email.lastIndexOf('@') == 0: 
    console.log(`Символ '@' на початку`);
    break;
  case email.slice(-1) == '@':
  case email[email.length - 1] == '@':
  case email.endsWith('@') == true:
    console.log(`Символ '@' на кінці`);
    break;
  case email.lastIndexOf('@') == -1: 
    console.log(`Символа '@' немає`);
    break;
  default:
    console.log(`Корректний email`);
    break;
}


