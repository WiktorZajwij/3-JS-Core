"use strict";
/* 

Завдання 1.

Напишіть функцию arrCopy(arr), яка копією всі значення з переданого масиву і повертає новий масив не змінюючи оригінал arr.

const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].
*/

/*  */

let newArr = [];
function arrCopy(arr) {
  for (let i = 0; i < arr.length; i++) {
    // newArr.push(arr[i]);
    return arr.slice();

  }
  return arr;
}

const arr1 = arrCopy([1, 2, 3]);
// const arr1 = [1, 2, 3];
const arr2 = arrCopy([4, 5, 6, [10, 20]]);
const arr3 = arrCopy([true, '5', 6, [10, 20]]); 


console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);
console.log('newArr', newArr);






/* 
function arrCopy(arr) {
  return arr.slice();
}
const arr1 = arrCopy([1, 2, 3]);
const arr2 = arrCopy([1, 2, 3, [10, 20]]);

console.log('arr1', arr1);
console.log('arr2', arr2);
*/
