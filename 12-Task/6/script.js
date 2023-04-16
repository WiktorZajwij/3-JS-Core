/* 
Завдання 6. Reduce

1) Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля.

Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.

let arr = [1, 2, 5, 0, 4, 5, 6];

Результат вивести в консоль.
*/
'use strict';


// 1.
const arr = [1, 2, 5, 4, 0, 4, 5, 6];
let zero = arr.indexOf(0);
let notZeroArr = arr.slice(0, zero);

// 1.1
/* 
let newArr = notZeroArr.reduce(function(sum, elem) {
  return sum + elem;
}) 
*/

// 1.2
let newArr = notZeroArr.reduce((sum, elem) => sum + elem)
console.log(newArr);


// 2.
/* 
const arr1 = [1, 2, 5, 4, 0, 4, 5, 6];
let sum = 0;
for (let i = 0; i <= arr1.length; i++) {
  if (arr1[i] > 0) {
    sum += arr1[i];
  } else {
    break;
  }
}
console.log(sum); 
*/












/* 
2) Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.

let arr = [1, 2, 3, 0, 4, 5, 6];

Результат вивести в консоль.
*/

let arr2 = [1, 2, 3, 0, 4, 5, 6];
let sum2 = arr2.reduce(function (accum, elem) {
  if (accum[1] < 10) {
    return [accum[0] + 1, accum[1] + elem]; 
  } else {
    return accum;
  }
}, [0, 0])[0];
console.log(sum2);



