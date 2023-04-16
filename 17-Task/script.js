$(document).ready(function () {
  let min = 00;
  let sec = 60;
  let timersID;
  let time;
  let lastTime = $('.last-time');
  let chose = 1;
  let check = true;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  $('#checkRes').attr('disabled', 'disabled');
  $('#checkRes').addClass('disabled');
  $('.modal-block').hide();

  // create zero
  function returnZero(zero) {
    return zero > 9 ? zero : `0${zero}`;
  }

  // Random Shuffle
  // let shuffle = function (arr) {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     let tmp = arr[i];
  //     let rnd = Math.floor(Math.random() * (i + 1))
  //     arr[i] = arr[rnd];
  //     arr[rnd] = tmp;
  //   }
  //   return arr;
  // }
  // let shuffleResult = shuffle($('.num-in'));
  // $('#left').html(shuffleResult);
  // $('.number-box').html(shuffle($('.num-in')));

 
  function numberPosition() {
    let check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let position;
    for (let i = 0; i < 9; i++) {
      $("#left > .number").attr("value", "fill");
      $("#right > .number").removeAttr("value");
      do {
        position = Math.round(Math.random() * 8);
      } while (check[position]);
      $(`.num-in:eq(${i})`).attr("value", `${position + 1}`);
      check[position] = 1;
    }
  }
  numberPosition();

  // startTimer
  function tmr() {
    sec--;
    if (sec < 0) {
      sec = 59;
      min--;
    }

    if (sec == 0 && sec == 0) {
      for (let i = 0; i < $('.number').length; i++) {
        if ($(`#right > .number:eq(${i})>.num-in`).attr("value") != numbers[i]) {
          check = false;
          
          break;
        }
      }
      if (check) {
        win();
        clearInterval(timersID);
      } else {
        lost();
        clearInterval(timersID);
      }
      check = true;
      modalShow();
      // clearInterval(timersID);
    }
    time = $('.timer').text(`${returnZero(min)}:${returnZero(sec)}`);
  }

  // modal-show 
  function modalShow() {
    $('.modal-overlay').css({
      'background-color': 'rgba(0, 0, 0, 0.5)',
      'z-index': '1',
    })
    $('.modal-overlay').animate({
      opacity: 1,
    });
    $('.modal-block').animate({
      top: 100
    }, 300).show();
  }

  // lost
  function lost() {
    $('.modal-text').css('text-align', 'center')
    $('.modal-text').text(`It's a pity, but you lost`)
    $('#check').css('display', 'none');
    $('#close').css('display', 'none');
    $('#closeReload').css('display', 'block');
    $('#checkRes').attr('disabled', 'disabled');
    $('#checkRes').addClass('disabled');
    clearInterval(timersID);
  }
  // WIN
  function win() {
    $('.modal-text').css('text-align', 'center')
    $('.modal-text').text(`YOU WIN`)
    $('#check').css('display', 'none');
    $('#close').css('display', 'none');
    $('#closeReload').css('display', 'block');
    $('#checkRes').attr('disabled', 'disabled');
    $('#checkRes').addClass('disabled');
  }

  // #start
  $('#start').on('click', function () {
    $(this).attr('disabled', 'disabled');
    $(this).addClass('disabled');
    $('#checkRes').removeAttr('disabled', 'disabled');
    $('#checkRes').removeClass('disabled');

    timersID = setInterval(() => {
      tmr();
      $(lastTime).text(time.text());
    }, 1000);
  })

  // #checkRes
  $('#checkRes').on('click', function () {
    modalShow();
  })

  // #close 
  $('#close').on('click', function () {
    $('.modal-block').animate({
      top: 0,
    }, 300);

    $('.modal-overlay').animate({
      opacity: 0,
    }, 500);
    $('.modal-overlay').animate({
      'z-index': '-1',
    }, 100);
  })

  // #closeReload 
  $('#closeReload').on('click', function() {
    location.reload();
  })
  function fn() {
    for (let i = 0; i < $('.num-in').length; i++) {
      if ($(`#right > .number:eq(${i})>.num-in`).attr("value") != numbers[i]) {
        check = false;
        break;
      }
    }
    if (check) {
      win();
    } else {
      lost();
    }
    check = true;
  }

  // #check
  $('#check').on('click', function () {
    fn();
  });

  // #new
  $('#new').on('click', function () {
    location.reload();
  })



  // sortable
  $('.number').sortable({
    connectWith: '.number',
    containment: '.container',
    delay: 300,
    cursor: "move",
    scroll: false,
    start: function (event, ui) {
      if (sec == 60) {
        $("#start").trigger("click");
      }
    },
    receive: function (event, ui) {
      if ($(this).attr("value") == "fill") {
        chose = 1;
      } else {
        $(this).attr("value", "fill");
        chose = 0;
      }
    },
    stop: function (event, ui) {
      if (chose) {
        $(this).sortable("cancel");
      } else {
        $(this).removeAttr("value");
      }
      },
    })
      

});