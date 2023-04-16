"use strict";

/* 

Завдання 3.

Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:

const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3].
const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8].
*/


/* 
function getLength(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].length;
  }
  return newArr;
} 
*/

function getLength(arr) {
  let newArr = [];
  for (const index in arr) {
    newArr[index] = arr[index].length;
  }
  return newArr;
}



const arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
const arr2 = getLength(['Oleksiy', 'Andriana'])
const arr3 = getLength(['Ira', 'Ivan', 'Pavlo'])
const arr4 = getLength(['123', '12', '1'])


console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);
console.log('arr4', arr4);
