$(document).ready(function () {
  const textAreaList = $('#manual #text-area ul li');
  const textAreaParagraph = $('#manual #text-area p');
  const textAreaImg = $('#manual img');
  textAreaList.click(function (e) {
    const listIndex = $(this).index();
    e.preventDefault();
    let listHasClass = $(this).hasClass('manual__p--selected');
    if (!listHasClass) {
      //img 내용 변경
      textAreaImg.stop().animate();
      textAreaImg.fadeOut(200);
      textAreaImg.eq(listIndex).fadeIn(200);
      //list 버튼 색 변경
      textAreaList.removeClass();
      $(this).addClass('manual--selected');
      //p태그 내용 변경
      textAreaParagraph.removeClass();
      textAreaParagraph.eq(listIndex).addClass('manual__p--selected');
    }
  });
});
