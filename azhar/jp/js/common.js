$(function () {
  // $(".dropdown-item").click(function () {
  //   $("#dropdown09.span").css($(this).find("span").css());
  // })
  $('header').load('header.html', function(data, status, object) {
    var path = location.href.split('/');
    var pages = path.pop();
    $('.nav-link[href="'+pages+'"]').addClass('active');
  });
});
