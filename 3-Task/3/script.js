
/* 
Завдання 3.

Створіть об’єкт MyMath який буде реалізовувати наступний функціонал:

- MyMath.PI – це властивість яка має повертати число Pi.
- MyMath.pow(number, degree) – це метод який має повертати число в певній степені.
- MyMath.abs(number) – це метод який має повертати модулю числа.
- MyMath.max(number1, number2…) – це метод який має повернути максимальне число з переданих. Кількість чисел необмежена.
- MyMath.min(number1, number2…) – це метод який має поаернути мінімальне число з переданих. Кількість чисел необмежена.
- Також ви маєте повернути наступні повідомлення при використанні методів, якщо:
- Якщо передали не число - Повинно бути числове значення.
- Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!

При створенні цих методів використання об’єкту Math заборонене!
*/


'use strict';

let MyMath = {
  PI() {
    // return console.log(Math.PI);

    let PI = 3.141592653589793;
    return console.log(PI);
  },

  pow(number, degree) {
    // return console.log(Math5.pow(number, degree));
    
    number = +prompt('numer?', '0');
    degree = +prompt('degree?', '0');
    let result = number;
    for (let i = 1; i < degree; i++) {
      result *= number;
    }
    if (number != +number || degree != +degree) {
      return console.log('Повинно бути числове значення');
    }
    else if (+number == 0 || +degree == 0) {
      return console.log('Будь ласка, введіть числа');
    } 
    else if (number == +number || degree == +degree) {
      return console.log(`Число ${number} в степені ${degree} дорівнює ${result}`);
    } 
  },

  abs(number) {
    // return Math.abs(number);
    
    number = +prompt('number?', 0); 
    if (number < 0) {
      number = number * -1;
      return console.log(number);
    } else if (number !== +number) {
      return console.log('Повинно бути числове значення');
    } else if (number == 0) {
      return console.log('Будь ласка, введіть числа');
    } else {
      return console.log(number);
    };
  },

  max(...arg) {
    // return console.log(Math.max(...arg));
    
    
    let maximum = 0;

    for(let i = 0; i < arg.length; i++) {
      if (maximum < arg[i]) {
        maximum = arg[i];
      }
    }
    return console.log(maximum);

  },


  maximum() {

    let maximum = 0;
    let num;
    for (let i = 1; i <= 5; i++) {
      num = +prompt(`write number ${i} of 5`);
      if (num != +num) {
        return console.log('Повинно бути числове значення');
      } else if (num == 0) { 
        return console.log('Будь ласка, введіть числа');
      } else if (num > maximum) {
        maximum = num;
      } 
    }
    return console.log(maximum);
  },




  min(...arg) {
    // return Math.min(...arg)

    let minimum = arg[0];
    for (let i = 0; i < arg.length; i++) {
      if (minimum > arg[i]) {
        minimum = arg[i];
      }
    }
    return console.log(minimum);
  },


  minimum() {
    let num = [];
    let number;
    for (let i = 1; i <= 5; i++) {
      number = +prompt(`write number ${i} of 5`);
      if (number == 0) {
        return console.log('Будь ласка, введіть числа');
      } else if (number != +number) {
        return console.log('Повинно бути числове значення');
      } else {
        num.push(number);
      }
    }
    let minimum = num[0];
    
    for (let i = 1; i <= num.length; i++) {
      if (minimum > num[i]) {
        minimum = num[i];
      }
    } 
    return console.log(`Мінімальне число з введених ${num} = ${minimum}`);
  }
};




// MyMath.PI();

// MyMath.pow();

// MyMath.abs();

// MyMath.max(5, 30, 15, 10, 25);
// MyMath.maximum();

// MyMath.min(35, 30, 5, 50, 25);
// MyMath.minimum();


