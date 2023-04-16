/* 
Завдання 1. forEach

Заданий масив з числами. Знайдіть суму цих чисел.

let arr = [5, 6, 7, 8, 9];

Результат вивести в консоль.
*/

'use strict';


// 1. forEach

const arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sumArr = 0;

// 1.1
/* 
arr.forEach(function(value) {
  sum += value;
}) 
*/

// 1.2
arr.forEach(value => sumArr += value);

console.log(sumArr);




// 2. reduce() 
const arr1 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const sumArr1 = arr1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sumArr1);




// 3. forOf
const arr3 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sumArr3 = 0;
for (const iterator of arr3) {
  sumArr3 += iterator;
}
console.log(sumArr3);