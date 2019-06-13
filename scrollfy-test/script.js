
// match height
function offsetScrollOff() {
	var off = $('#sec04').offset();
	console.log('top: ' + off.top);
	console.log('left: ' + off.left);
}

// scroll
var current;
	$.scrollify({
		section:".section",
		// easing:"swing",
		setHeights:true,
		updateHash:false,
		touchScroll: true,
		responsiveFallback:false,
		scrollbars: true,
		standardScrollElements:".last",
		afterResize:function(){
			$.scrollify.update();
			$.scrollify.instantNext();
			$.scrollify.instantPrevious();
		},
		before: function(i,box){
			current = i;
		},
		after: function(){
			offsetScrollOff();
		},
		interstitialSection:"header,footer",
		//touchScroll: false
	});


