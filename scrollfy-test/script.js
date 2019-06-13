jQuery(function($){
// match height
$(document).ready(function(){
    matchHight();
	offsetScrollOff();

    $(window).resize(function() {
        matchHight();
		offsetScrollOff();
    });
});

function matchHight() {
	visual_height = hsize = $(window).height() - 0;
	$(".match-height").css("height", visual_height + "px");
}
function offsetScrollOff() {
	var off = $('#sec04').offset();
	console.log('top: ' + off.top);
	console.log('left: ' + off.left);
}




// scroll
var current;
$(function(){
	$.scrollify({
		section:".section",
		setHeights:false,
		updateHash:false,
		touchScroll: true,
		responsiveFallback:false,
		scrollbars: true,
		before: function(){
			$('.section').removeClass('active');
		},
		after: function(){
			current = $.scrollify.current();
			current.addClass('active');
			
		if(current === "sec04") {
			jQuery("#sec04").addClass("hidden");
		}
		},
		//interstitialSection:"header,footer",
		//touchScroll: false
	});


	$(window).on('resize',function(){
		$.scrollify.update();




	});
});	
});

