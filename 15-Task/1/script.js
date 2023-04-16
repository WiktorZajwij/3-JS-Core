/* 
Завдання 1.

Необхідно реалізувати наступний функціонал як на відео iPhone, а саме:

потрібно анімаційно зменшувати зелений блок відносно кількості часу
коли час завершився анімація не має вже запускатися
*/

$(document).ready(function () {
/*  */
  let num = $('.image__bg-num').text();
  console.log(num);

  function bg() {
    $('.image__bg').animate({
      'bottom': '-100%',
    }, 5000, 'linear');
    $('.image__bg').animate({
      'bottom': '0%',
    }, 5000, 'linear');
    $('.image__bg').animate({
      'bottom': '-100%',
    }, 5000, 'linear');
  }
  // $('.image__bg').animate({
  //   'bottom': '-100%',
  // }, 5000, 'linear');


  function numMin(){
    if (num > 0) {
      num--;
      $('.image__bg-num').text(num);
      console.log(num);
    }
    return num;
  }
  
  bg();
  setInterval(() => {
    numMin()
  }, 1000);




  // setTimeout(() => {
  //   $('.image__bg-num').text(1);
  // }, 5000);
  // setTimeout(() => {
  //   $('.image__bg-num').text(0);
  // }, 10000);
/*  */
});

