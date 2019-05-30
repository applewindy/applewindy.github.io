$(function () {
  // $(".dropdown-item").click(function () {
  //   $("#dropdown09.span").css($(this).find("span").css());
  // })
  $('header').load('header.html', function (data, status, object) {
    var pages = (typeof menuLink === 'undefined') ? location.href.split('/').pop() : menuLink;
    $('.nav-link[href="' + pages + '"]').addClass('active');

    $('.dropdown-item').click(function () {
      var isCurrentGb = $('#dropdown09').children("span").hasClass("flag-icon-gb");
      var isCurrentJp = $('#dropdown09').children("span").hasClass("flag-icon-jp");
      var isTargetGb = $(this).children("span").hasClass("flag-icon-gb");
      var isTargetJp = $(this).children("span").hasClass("flag-icon-jp");
      if (isCurrentGb && isTargetJp) {
        location.href = "jp/" + location.href.split('/').pop();
        return;
      }
      if (isCurrentJp && isTargetGb) {
        location.href = "../" + location.href.split('/').pop();
        return;
      }

    });
  });
});
