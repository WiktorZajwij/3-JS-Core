"use strict";
/* 
Завдання 2.

Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:
const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’].
const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’].
*/


function arrToString(arr) {

  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = String(arr[i]);
  // }

  for (let index in arr) {
    arr[index] = String(arr[index]);
  } 
  return arr;
}

const arr1 = arrToString([1,2,3]);
const arr2 = arrToString([10, 200, 3333]);
const arr3 = arrToString([2, 'String', true, null, undefined]);

console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);
