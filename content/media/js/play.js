function play(){
	$(document).ready(function(){
		// Slide name in from left
		$('.homeTextShawn').stop().animate({ left: 0 }, { duration: 200,
				complete: setTimeout(get_low, 700)
			    });
		$('.homeTextLower').stop().delay(300).animate({ right: 0 }, 200);
	});

	$('.navBox').hover(
		function(){ $(this).attr("class", "navBoxHover"); },
		function(){ $(this).attr("class", "navBox"); }
	 );
}

function get_low(){
	//$('.homeTextLower').css({'top': '50%'});
	$('.homeTextLower').animate({ top: '50%' });
}
