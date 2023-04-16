/* 
Завдання 1.

Напишіть функцію getArea(number), яка обчислює площу круга. Для визначення площі використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:

Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
Якщо передали не число - Повинно бути числове значення.
Якщо в функцію нічого не передали - Будь ласка, введіть радіус!
*/





/* //1.
let number = +prompt('write num');
function getArea(number) {
  let result = Math.PI.toFixed(2) * (number * number);

  switch (number) {
    case 0:
      console.log('Будь ласка, введіть радіус!');
      break;
    case Number(number):
      console.log(`Площа дорівнює ${result} то квадратних одиниць`);
      break;
    default:
      console.log('Повинно бути числове значення.');
      break;
  }
}
console.log(getArea(number)); 
*/



// 2.
let number = prompt('write num');

function getArea(number) {
  let result = Math.PI.toFixed(2) * (number * number);
  if (+number) {
    return console.log(`Площа дорівнює ${result} то квадратних одиниць`);
  } else if (number == null || number == '') {
    return console.log('Будь ласка, введіть радіус!');
  } else if (!+number) {
    return console.log('Повинно бути числове значення.');
  } 
}
getArea(number);
