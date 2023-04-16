/* 
Завдання 4. Some

Заданий масив об’єктів. Перевірте, чи хоч один ключ country має значення 'Cuba'.

let arr = [{name: 'Ivan', country: 'Ukraine'},

{name: 'Petro', country: 'Ukraine'},

{name: 'Miguel', country: 'Cuba'}

]

Результат вивести в консоль. 
*/

'use strict';
// 1. function
const arr = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' },
]

const checkCountry = arr.some(function(key) {
  return key.country.toLowerCase() === 'cuba'
});
console.log(checkCountry);




// 2. =>
const arr1 = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' },
]

const checkCountry1 = arr1.some(key => key.country.toLowerCase() === 'cuba');
console.log(checkCountry);

