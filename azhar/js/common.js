$(function () {
  // $(".dropdown-item").click(function () {
  //   $("#dropdown09.span").css($(this).find("span").css());
  // })
  $('header').load('header.html', function(data, status, object) {
    var pages = (typeof menuLink === 'undefined')?location.href.split('/').pop():menuLink;
    $('.nav-link[href="'+pages+'"]').addClass('active');
  });
});
