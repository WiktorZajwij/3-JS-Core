/* 
Завдання 1. Необхідно реалізувати наступний функціонал як на відео scroll,
а саме: при скролі текст “scroll down” збільшує розмір тексту далі блок з текстом “slide from left” зміщує чуть позицію вправо а також збільшується лінія підкреслення далі картинка(можна використати будь яку) зміщується вліво ну і в кінці текст “scroll up” зменшує розмір тексту при кліку на “scroll down” відбувається автоматичний скрол до блоку “slide from left” при кліку на “scroll up” відбувається автоматичний скрол до верху сторінки
*/
'use strict';
const scrollDown = document.getElementById('scrollDown');
const scrollUp = document.getElementById('scrollUp');
const middleBlock = document.querySelector('.block-middle');
const titleBlock = document.querySelector('.block-title');
const titleBorder = document.querySelector('.title-border');
const imgBlock = document.querySelector('.block-img');

scrollDown.addEventListener('click', () => {
  middleBlock.scrollIntoView({
    behavior: 'smooth',
  });
});
scrollUp.addEventListener('click', () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', function (event) {
  console.log(window.scrollY);
  if (window.scrollY < 200) {
    scrollDown.style.fontSize = `${30 + window.scrollY / 10}px`;
    
  }
  if (window.scrollY > 200 && window.scrollY < 400) {
    titleBorder.style.width = `${150 + window.scrollY - 200}px`;
    titleBlock.style.left = `${(window.scrollY - 200) / 4}px`;
  }
  if (window.scrollY > 400 && window.scrollY < 600) {
    imgBlock.style.marginRight = `${window.scrollY - 400}px`;
  }
  if (window.scrollY > 600 && window.scrollY < 900) {
    scrollUp.style.fontSize = `${60 - (window.scrollY - 700) / 12}px`;
  }
})
