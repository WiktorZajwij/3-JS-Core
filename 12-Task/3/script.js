/* 
Завдання 3. Every

Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.

const arr = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' }
];

Результат вивести в консоль.
*/

'use strict';

// 1. function
const arr = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' },
];
const checkCountry = arr.every(function (key) {
  return key.country.toLowerCase() === 'ukraine'
});
console.log(checkCountry);



// 2. =>
const arr1 = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' },
];
const checkCountry1 = arr1.every(key => key.country.toLowerCase() === 'ukraine');
console.log(checkCountry1);




