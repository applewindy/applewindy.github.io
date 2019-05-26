$(function () {
  // $(".dropdown-item").click(function () {
  //   $("#dropdown09.span").css($(this).find("span").css());
  // })

  $('.navToggle').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});
