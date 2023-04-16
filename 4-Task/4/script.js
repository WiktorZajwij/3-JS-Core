"use strict";

/* 
Завдання 4.

Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):

const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’].
const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]).

*/


function removeDuplicates(arr) {
  let newArr = [];
  
  for (let index of arr) {
    if (!newArr.includes(index.toLowerCase())) {
    newArr.push(index);
    }
  }
  return newArr;
}

const arr1 = removeDuplicates(['html', 'css', 'html', 'js']);
const arr2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss']);
const arr3 = removeDuplicates(['Html', 'css', 'jS', 'HTML', 'Js', 'python', 'JS', 'scss']);

console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);
