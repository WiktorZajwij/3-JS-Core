$(document).ready(function () {

  let position, bgcolor, block;

  $('.box').on('click', function () {
    position = $(this).position();
    bgcolor = $(this).css('background-color');
    block = $(this);
    $(this).css("background-color", "white");
    $('.modal-overlay').css({
      backgroundColor: 'rgba(0, 0, 0, .5)',
      zIndex: 1,
    })
    $('.modal-block').css({
      display: 'block',
      top: position.top,
      left: position.left,
      backgroundColor: bgcolor,
    })

    $('.modal-block').animate({
      width: 300,
      height: 300,
      top: (window.innerHeight - 300) / 2,
      left: (window.innerWidth - 300) / 2,
    }, 1000)

  }); // on




  $('.modal-block').on('click', function () {
    $('.modal-block').animate({
      width: 150,
      height: 150,
      top: position.top,
      left: position.left,
    }, 1000, "easeOutQuart", function () {
      $(".modal-block").css("display", "none");
      $(".modal-overlay").css({
        backgroundColor: "rgba(255,255,255)",
        zIndex: -1,
      });
      block.css("background-color", bgcolor);
    }
    );

  }); // on

}); // ready