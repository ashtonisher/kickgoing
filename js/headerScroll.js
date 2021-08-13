$(document).ready(function () {
  //scroll시 header css 변경
  $(window).on('scroll', function () {
    let getScrollTop = $(window).scrollTop();
    if (getScrollTop >= 1) {
      $('header').css('background-color', 'white');
      $('header #logo img').prop('src', 'img/Logo_Eng_Mint.png');
      $('nav h2').css('color', '#20232b');
    } else {
      $('header').css('background-color', 'transparent');
      $('header #logo img').prop('src', 'img/Logo_Eng_White.png');
      $('nav h2').css('color', 'white');
    }
  });

  //화살표 버튼 클릭시 아래 컨텐츠로 스크롤
  $('.arrow-down').click(arrowDownBtn);
  function arrowDownBtn(e) {
    e.preventDefault();
    let conetentScrollTop = $('#kickgoing').height();
    $('html, body').animate({ scrollTop: conetentScrollTop + 'px' }, 300);
  }
});
