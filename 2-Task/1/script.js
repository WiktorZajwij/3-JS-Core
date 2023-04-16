/* 
Завдання 1.

Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які були введені.
*/
let text = prompt('write some text');
let counter = 0;
for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) == ' ') {
    counter++;
  }
}
console.log(counter);