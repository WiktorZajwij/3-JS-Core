/* 
Завдання 7. Любим методом

Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь із
 цих чисел.

let arr = [1, -2, 3, 0, 4, -5, 6, -11];

Результат вивести в консоль.
*/
'use strict';

// 1.
/* 
const arr1 = [1, -2, 3, 0, 4, -5, 6, -11];
const pNum1 = arr1.filter((value) => {
  if (value > 0) { 
  return value 
  }
});
const sqrt1 = pNum1.map((value) => Math.sqrt(value));
console.log(sqrt1);
*/




// 2. 
const arr2 = [1, -2, 3, 0, 4, -5, 6, -11];
const pNum2 = arr2.filter(value => value > 0);
const sqrt2 = pNum2.map((value) => Math.sqrt(value));
console.log(sqrt2);


