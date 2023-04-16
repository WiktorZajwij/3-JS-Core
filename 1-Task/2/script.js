/* 
Завдання 2.

Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:

1. Створіть порожній об'єкт MyMath.
2. Cтворіть властивість a зі значенням 5.
3. Cтворіть властивість b зі значенням 2.
4. Створіть 4 методи які будуть робити наступне:
  a. sum – обчислює суму a+b та повертає значення console.log().
  b. multiplication – обчислює множення a*b та повертає значення console.log().
  c. division – обчислює ділення a/b та повертає значення console.log().
  d. subtraction – обчислює віднімання a-b та повертає значення console.log().

Запустіть кожен з цих методів, результат має бути наступним:
MyMath.sum() – має повернути 5 + 2 = 7
MyMath.multiplication() – має повернути 5 * 2 = 10
MyMath.division() – має повернути 5 / 2 = 2.5
MyMath.subtraction() – має повернути 5 - 2 = 3
*/

'use strict';
let MyMath = new Object;
MyMath['a'] = 5;
MyMath['b'] = 2;
MyMath['getSum'] = function () { console.log('5 + 2 =', this.a + this.b)};
MyMath['getMultiplication'] = function () {console.log('5 * 2 =', this.a * this.b)};
MyMath['getDivision'] = function () { console.log('5 / 2 =', this.a / this.b)};
MyMath['getSubtraction'] = function () { console.log('5 - 2 =', this.a - this.b)};

// console.log(MyMath);
MyMath.getSum();
MyMath.getMultiplication();
MyMath.getDivision();
MyMath.getSubtraction();






/* 
let MyMath = new Object;
MyMath['a'] = 5;
MyMath['b'] = 2;
MyMath['getSum'] = function () {return this.a + this.b};
MyMath['getMultiplication'] = function () {return this.a * this.b};
MyMath['getDivision'] = function () { return this.a / this.b};
MyMath['getSubtraction'] = function () { return this.a - this.b};

console.log(MyMath);
// document.write(`<p>${MyMath.getSum()}</p>`);
// document.write(`<p>${MyMath.getMultiplication()}</p>`);
// document.write(`<p>${MyMath.getDivision()}</p>`);
// document.write(`<p>${MyMath.getSubtraction()}</p>`);
let sum = MyMath.getSum();
let mul = MyMath.getMultiplication();
let div = MyMath.getDivision();
let sub = MyMath.getSubtraction();
console.log('5 + 2 =', sum);
console.log('5 * 2 =', mul);
console.log('5 / 2 =', div);
console.log('5 - 2 =', sub); 
*/