/* 
Завдання 1. 

Необхідно реалізувати наступний функціонал як на відео backgrounds, а саме:

при кліку на текст колір появляється блок з кольорами
при кліку на текст зображення появляється блок з зображеннями
при кліку на самі блоки з кольорами змінюється колі фону
при кліку на самі блоки з зображеннями змінюється зображення фону
послідовність чи я задаю колір фону а потім зображення або навпаки не має значення

*/

'use strict';
let changeColor = document.querySelector('.change-color');
let changeImage = document.querySelector('.change-image');
let blockColor = document.querySelector('.block-color');
let blockImage = document.querySelector('.block-image');
let blockInner = document.querySelectorAll('.block-inner');
let wrapper = document.querySelector('.wrapper');


changeColor.addEventListener('click', function() {
  /* 
  if (block.classList.contains('display-none')) {
    block.classList.remove('display-none');
  } else  {
    block.classList.add('display-none');
  }
  */
  
  blockImage.classList.add('display-none');
  blockColor.classList.remove('display-none');

  for (let i = 0; i < blockInner.length; i++) {
    let bgc = blockInner[i].dataset.bgc;
    blockInner[i].style.background = bgc;
  }
});

changeImage.addEventListener('click', function () {
  blockColor.classList.add('display-none');
  blockImage.classList.remove('display-none');

  for (let i = 0; i < blockInner.length; i++) {
    let bgi = blockInner[i].dataset.bgi;
    blockInner[i].style.backgroundImage = `url(${bgi})`;
  }
})



function color() {
  wrapper.style.backgroundColor = event.target.dataset.bgc;
  wrapper.style.backgroundImage = 'none';

}

function image() {
  let bgi = event.target.dataset.bgi;
  wrapper.style.backgroundImage = `url(${bgi})`;
  wrapper.style.backgroundSize = '100%';
  wrapper.style.backgroundRepeat = 'no-repeat';

}

























/* changeImage.addEventListener('click', function () {
  for (let i = 0; i < blockInner.length; i++) {
    let bgi = blockInner[i].dataset.bgi;
    blockInner[i].style.backgroundImage = `url(${bgi})`;
  }
})
 */
