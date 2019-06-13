jQuery(function($){
// match height
$(document).ready(function(){
});


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
		setHeights:true,
		updateHash:false,
		touchScroll: true,
		responsiveFallback:false,
		scrollbars: true,
		standardScrollElements:".third",
		afterResize:function(){
			$.scrollify.update();
		},
		before: function(){
			$('.section').removeClass('active');
		},
		after: function(){
			current = $.scrollify.current();
			current.addClass('active');
		},
		//interstitialSection:"header,footer",
		//touchScroll: false
	});
});	
});

