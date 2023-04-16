/* 
Завдання 2. Map

Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.

let arr = [5, 6, 7, 8, 9];

Результат вивести в консоль.
*/
'use strict';
// 1. .map function()
const arr = [5, 6, 7, 8, 9];
const newArr = arr.map(function(value) {
  return value * value
});
console.log(newArr);




// 2. .map =>
const arr1 = [5, 6, 7, 8, 9];
const newArr1 = arr.map((value) => value * value);
console.log(newArr1);




// 3. forOf
const arr2 = [5, 6, 7, 8, 9];
const newArr2 = [];
for (const value of arr2) {
  let sum = value * value;
  newArr2.push(sum);
}
console.log(newArr2);


// 4. forEach
const arr3 = [5, 6, 7, 8, 9];
const newArr3 = new Array();
arr3.forEach((value) => newArr3.push(value*value));
console.log(newArr3);



// 5. Math.pow
const arr4 = [5, 6, 7, 8, 9];
const newArr4 = arr.map(value => Math.pow(value, 2));
console.log(newArr4);