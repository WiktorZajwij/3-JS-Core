/* 
Завдання 4.

Користувач вводить URL адреса в prompt в форматі http або https. Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.

Приклад роботи:

Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.

Користувач вводить: “http://www.w3schools.com” – в консоль виводиться w3schools.com.
*/


let url = 'https://www.google.com'; 
// let url = 'http://www.w3schools.com'; 


console.log(url.slice(url.indexOf('w')));