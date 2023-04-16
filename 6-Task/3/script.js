/* 
Завдання 3.

Необхідно реалізувати наступний функціонал як на відео images, а саме:

на сторінці знаходяться три пустих блоки div.
при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
це зображення стає фоном для цього конкретного блоку
*/


function copyClick() {
  let copy = prompt('write url image');
  console.log(event.target);
  event.target.style.backgroundImage = `url(${copy})`;
}