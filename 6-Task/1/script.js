/* 
Завдання 1.

Необхідно реалізувати наступний функціонал як на відео color, а саме:

при першому наведенні мишки на блок колір фону має ставати червоний
при відведенні мишки блок має ставати знову фіолетовий
при другому наведенні – блок стає жовтим
при третьому – зеленим
при наступному наведенні все починається спочатку: червоний, жовтий, зелений
так має відбуватися безкінечно по колу
*/

let box = document.querySelector('.box')
let count = 0;
box.style.backgroundColor = 'DarkMagenta';

box.addEventListener('mouseover', function () {
  count++;
  console.log(count);
  if (count == 1) {
    event.target.style.backgroundColor = 'red';
  } else if (count == 2) {
    event.target.style.backgroundColor = 'yellow';
  } else if (count == 3) {
    event.target.style.backgroundColor = 'green';
    count = 0;
  }
});

box.addEventListener('mouseout', function () {
  event.target.style.backgroundColor = 'DarkMagenta';
});




