
// match height
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
		// easing:"swing",
		setHeights:true,
		updateHash:false,
		touchScroll: true,
		responsiveFallback:false,
		scrollbars: true,
		// standardScrollElements:".last",
		afterResize:function(){
			$.scrollify.update();
			$.scrollify.instantNext();
			$.scrollify.instantPrevious();
		},
		before: function(i,box){
			offsetScrollOff();
			current = i;
		},
		after: function(){
		},
		interstitialSection:"header,footer",
		//touchScroll: false
	});
});

var position = $(window).scrollTop(); 

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
		if(scroll > position
				&& current === 3
				&& !$.scrollify.isDisabled()) {
				$.scrollify.disable();
				console.log('scrollDown');
		}
		if(scroll < position
			&& current === 3
			&& $.scrollify.isDisabled()
			&& $('.section').get(current).getBoundingClientRect().top>0) {
			$.scrollify.enable();
			$.scrollify.previous();
			console.log('scrollUp');
		}
    position = scroll;
});