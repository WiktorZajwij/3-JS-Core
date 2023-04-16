'use strict';
/* 
Завдання 1.

Необхідно реалізувати наступний функціонал як на відео ClickBox, а саме:

потрібно щоб кожен раз при кліку на елемент йому рандомно задавалася ширина, висота та колір фону, а також позицію елемента
використовуйте jQuery easing для плавності анімації
*/

$(document).ready(function() {
  let ballWidth, ballHeight, ballBgc, ballTop, ballLeft;

  $('.ball').each(function(indx, elem) {
    $(elem).click(function () {
      ballWidth = 10 + Math.round(Math.random() * 300);
      ballHeight = 10 + Math.round(Math.random() * 300);

      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255);
      ballBgc = `rgb(${r},${g},${b})`;
      

      ballTop = Math.round(Math.random() * (window.innerHeight - ballHeight));
      ballLeft = Math.round(Math.random() * (window.innerWidth - ballWidth));

      $(this).animate({
        width: ballWidth,
        height: ballHeight,
        backgroundColor: ballBgc,
        top: ballTop,
        left: ballLeft
      }, 2000, 'easeInOutBack');
    });
  })
});



