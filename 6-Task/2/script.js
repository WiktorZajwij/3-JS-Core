/* 
Завдання 2.

Необхідно реалізувати наступний функціонал як на відео secret, а саме:

по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
при наведенні на блок його стиль змінюєть і текст стає наступним: “Хочеш знати який”
при натисканні і утриманні клавіші мишки знову по блоку стиль змінюється і текст стає наступним: “А я тобі не скажу”
при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”
*/
let box = document.querySelector('.box');
box.style.background = 'DarkMagenta';
box.style.width = '400px';
box.style.height = '400px';
box.style.margin = '50px auto';
box.style.border = '10px groove orange';
box.style.textAlign = 'center';
box.style.fontSize = '30px';
// box.style.fontWeight = '700';
box.style.padding = '10px';
box.textContent = 'У мене є секрет!';

let yellow = function () {
  box.style.background = 'yellow';
  box.style.borderColor = 'green';
  box.style.color = 'blue';
  box.textContent = 'Хочеш знати який?';
}
let DarkMagenta = function () {
  box.style.background = 'DarkMagenta';
  box.style.borderColor = 'orange';
  box.style.color = 'black';
  box.textContent = 'У мене є секрет!';
}
let black = function () {
  box.style.background = 'black';
  box.style.borderColor = 'yellow';
  box.textContent = 'A я тобі не скажу!';
  box.style.color = 'white';

}




box.addEventListener('mouseover', yellow)
box.addEventListener('mouseout', DarkMagenta)
box.addEventListener('mousedown', black)
box.addEventListener('mouseup', yellow)


document.querySelector('.box').onclick = function() {
  console.log(123);
}