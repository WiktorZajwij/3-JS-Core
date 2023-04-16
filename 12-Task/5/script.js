/* 
Завдання 5. Filter

Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.

let arr = [1, 'string', [3, 4], 5, [6, 7]];

Результат вивести в консоль.
*/
'use strict';
// 1.
const arr = [1, 'string', [3, 4], 5, [6, 7]];
const newArr = arr.filter(function(predicate, index, array) {
  if (typeof(predicate) == 'object') {
  return predicate;
  }
});
console.log(newArr);


// 2. 
const arr1 = [1, 'string', [3, 4], 5, [6, 7]];
const newArr1 = arr.filter(predicate => predicate);
console.log(newArr);


// 3. 
const arr2 = [1, 'string', [3, 4], 5, [6, 7]];
const newArr2 = arr.filter(Array.isArray);
console.log(newArr2);
