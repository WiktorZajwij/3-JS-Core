/* 
Домашнє завдання:
My page

мої улюблені сайти: google, w3schools, stackoverflow

За допомогою JavaScript запропонувати користувачу вибрати стиль для сторінки. А саме:

фон для сторінки +
тип шрифта на сторінці +
вирівнювання для заголовка h1 +
фон для параграфа зі зсилками +
колір тексту у параграфі зі зсилками і для самих зсилок. При чому колір тексту для зсилок призначити у циклі +
колір, розмір, товщину тексту у елементі div +
тип маркера для маркованого списку на сторінці + 

Таким чином слід запропонувати користувачу ввести десять налаштувань сторінки і застосувати їх.

ДОДАТОК ДО ЗАВДАННЯ: замість лінків на конкретні сайти, вивести у панелі навігації лінки на три сайти, які вкаже користувач.

Наприклад користувач у віконце prompt() ввів адресу football24.ua - в такому разі треба створити лінку, яка вела б на сайт football24, а текстом цієї лінки (тим, по чому можна клікнути) буде також football24.ua
*/

// Зміння з запитаннями
let bgc = prompt('Виберіть фон для сторінки', 'gray');
let c = prompt('Виберіть колір тексту для сторінки', 'white');
let ff = prompt('Виберіть тип шрифта на сторінці (serif, sans-serif, monospace)', 'monospace');
let textA = prompt('Виберіть вирівнювання для заголовка h1 (right, left, center)', 'center'); 
let paragraphBgc = prompt('Виберіть фон для параграфа зі зсилками', 'lightblue');
let paragraphColor = prompt('Виберіть колір тексту у параграфі зі зсилками і для самих зсилок.', 'red');
let divColor = prompt('Виберіть колір тексту у елементі div', 'orange');
let divSize = prompt('Виберіть розмір тексту у елементі div', '20px');
let divWeight = prompt('Виберіть товщину тексту у елементі div', '500');
let ulUser = prompt('Виберіть тип маркера для маркованого списку на сторінці (decimal, circle, disc, )', 'circle');



// Змінні зі збереженними елементами
let body = document.body;
let h1 = document.body.firstElementChild;
let paragraph = document.body.firstElementChild.nextElementSibling;
let div = document.querySelector('div');
let ul = document.querySelector('ul');

// Модифікація елементів
body.style.backgroundColor = bgc;
body.style.color = c;
body.style.fontFamily = ff;
h1.style.textAlign = textA;
paragraph.style.backgroundColor = paragraphBgc;
paragraph.style.color = paragraphColor;

for (let element of paragraph.children) {
  element.style.color = paragraphColor;
}

div.style.color = divColor;
div.style.fontSize = divSize;
div.style.fontWeight = divWeight;
ul.style.listStyle = ulUser;

// Функція для ссилок
function links() {
  
  for (let i = 0; i < 3; i++) {
   link = prompt(`Введіть назву сайту - ${i} з 3`, 'google.com');
   paragraph.children[i].textContent = link;
   paragraph.children[i].href = 'http://' + link;
   paragraph.children[i].target = '_blank';
  }

}

links();