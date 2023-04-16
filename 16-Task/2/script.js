'use strict';
/* 
Завдання 2. 

Необхідно реалізувати наступний функціонал як на відео DiscoBall, а саме:

потрібно при загрузці сторінки елементу йому рандомно задавалася ширина, висота, колір фону, колір бордера та тінь, а також позицію елемента
використовуйте jQuery easing для плавності анімації
використовуйте SetInterval для того щоб анімацію зробити безкінечною
*/

// $(document).ready(function () {

//   let topBall, leftBall, bgcBall, bcBall;
//   $ ('.ball').each(function(i, e) {
//     setInterval(() => {
//       topBall = Math.round(Math.random() * (window.innerHeight - 100));
//       leftBall = Math.round(Math.random() * (window.innerWidth - 100));
//       let r = Math.round(Math.random() * 255);
//       let g = Math.round(Math.random() * 255);
//       let b = Math.round(Math.random() * 255);
//       bgcBall = `rgb(${r}, ${g}, ${b})`;
//       bcBall = `rgb(${g}, ${r}, ${b})`;

//       $(e).animate({
//         top: topBall,
//         left: leftBall,
//         backgroundColor: bgcBall,
//         borderColor: bcBall
//       });
//       $(e).css('box-shadow', `0 0 50px 0 ${bgcBall}`);
//     }, 500);

//   })

// });


$(document).ready(function () {
  let widthBall, heightBall, topBall, leftBall, bgcBall, bcBall;
  $('.ball').each(function (i, e) {
    setInterval(() => {
      widthBall = 20 + Math.round(Math.random() * 100);
      heightBall = 20 + Math.round(Math.random() * 100);;
      topBall = Math.round(Math.random() * (window.innerHeight - 100));
      leftBall = Math.round(Math.random() * (window.innerWidth - 100));
      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255);
      let r1 = Math.round(Math.random() * 255);
      let g1 = Math.round(Math.random() * 255);
      let b1 = Math.round(Math.random() * 255);
      bgcBall = `rgb(${r}, ${g}, ${b})`;
      bcBall = `rgb(${r1}, ${g1}, ${b1})`;

      $(e).animate({
        top: topBall,
        left: leftBall,
        backgroundColor: bgcBall,
        borderColor: bcBall
      }, 2000, 'easeInOutBack')
      $('.ball').eq(0).animate({
        width: widthBall,
        height: heightBall,
      });
      $('.ball').eq(1).animate({
        width: widthBall,
        height: heightBall,
      });
      $(e).css('box-shadow', `0 0 50px 0 ${bgcBall}`);
    }, 1000);
  })


  
});


