$(document).ready(function () {
  //service_btn 클릭시 슬라이드 좌우 이동

  let imgWidth = $('.service_bg').width();
  let slideIndex = 1;
  let slidePosition;
  $('.service_btn').on('click', btnClick);
  //service_arrow 버튼 클릭시 좌우 이동
  $('.service_arrow').on('click', arrowBtnClick);

  //사각 버튼 클릭시 이동 함수
  function btnClick() {
    let btnOn = $(this).hasClass('btn_selected');
    let btnIndex = $(this).index();
    imgWidth = $('.service_bg').width();
    btnIndex++;
    $('#service_wrapper').stop().animate();
    $('#service_wrapper').animate(
      { right: btnIndex * imgWidth },
      500,
      'linear'
    );

    if (btnOn) {
    } else {
      $('.service_btn').removeClass('btn_selected');
      $(this).addClass('btn_selected');
    }
  }

  //화살표 클릭시 이동 함수
  function arrowBtnClick() {
    imgWidth = $('.service_bg').width();
    slidePosition = $('#service_wrapper').css('right');
    //left_arrow 클릭
    if ($(this).hasClass('left_arrow')) {
      $('#service_wrapper').stop().animate();
      if (slidePosition == imgWidth + 'px') {
        //처음 이미지일 때, 방향 전환없이 마지막 (2번) 이미지로 자연스럽게 이어지도록
        slideIndex = 3;
        $('#service_wrapper').animate({ right: 0 }, 500, 'linear', function () {
          $('#service_wrapper').css('right', slideIndex * imgWidth);
        });
        $('.service_btn').removeClass('btn_selected');
        $('.service_btn')
          .eq(slideIndex - 1)
          .addClass('btn_selected');
      } else {
        --slideIndex;
        $('#service_wrapper').animate(
          { right: imgWidth * slideIndex },
          500,
          'linear'
        );
        $('.service_btn').removeClass('btn_selected');
        $('.service_btn')
          .eq(slideIndex - 1)
          .addClass('btn_selected');
      }
    } else {
      //right_arrow 클릭
      $('#service_wrapper').stop().animate();
      if (slidePosition == 3 * imgWidth + 'px') {
        //마지막 이미지일 때, 방향 전환없이 첫번째 이미지로 자연스럽게 이어지도록
        slideIndex = 1;
        $('#service_wrapper').animate(
          { right: 4 * imgWidth },
          500,
          'linear',
          function () {
            $('#service_wrapper').css('right', slideIndex * imgWidth);
          }
        );
        $('.service_btn').removeClass('btn_selected');
        $('.service_btn')
          .eq(slideIndex - 1)
          .addClass('btn_selected');
      } else {
        ++slideIndex;
        $('#service_wrapper').animate(
          { right: imgWidth * slideIndex },
          500,
          'linear'
        );
        $('.service_btn').removeClass('btn_selected');
        $('.service_btn')
          .eq(slideIndex - 1)
          .addClass('btn_selected');
      }
    }
  }
});
