/* 
Завдання 3.

Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.

Приклад роботи:

Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.
*/



// Var - 1.
/*
let myStr = 'Text html javascript html css html';
let d = 'html';
let pos = -1;
let counter = 0;
while ((pos = myStr.indexOf(d, pos + 1)) != -1) {
  counter++;
}
console.log(counter); //3
*/



// Var - 2.
/*
let myStr = 'Text HTML javascript html css Html';
let d = 'html';
let pos = 0;
let counter = 0;
while (true) {
  let foundPos = myStr.indexOf(d, pos);
  if (foundPos == -1) break;
  counter++;
  pos = foundPos + 1;
}
console.log(counter); //1
*/


// Var - 3.
/* 
let text = 'Text html javascript html css html';
let counter = 0;
let str = text.indexOf('html');
while (str !== -1) {
  counter++;
  str = text.indexOf('html', str + 1);
}
console.log(counter); //3
*/


// Var - 4.
/* 
let text = 'Text HTML javascript html css Html';
let counter = 0;

for (let i = 0; i < text.split(' ').length; i++) {
  if (text.split(' ')[i] == 'HTML' || 
      text.split(' ')[i] == 'Html' ||
      text.split(' ')[i] == 'html') {
    counter++;
  }
} 
console.log(counter); //3
*/



// Var - 5.
/**/
// let text = prompt('write some text');
let text = 'Text HTML javascript html css Html HtML hTML';
let counter = 0;
let split = text.split(' ').length;

for (let i = 0; i < split; i++) {
  let string = text.split(' ')[i].toLowerCase();
  if (string == 'html') {
    counter++;
  }
}

console.log(counter); //5


