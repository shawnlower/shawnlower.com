function play(){
	$(document).ready(function(){
		// Slide name in from left
		$('.homeTextShawn').stop().animate({ left: 0 }, { duration: 200,
				complete: setTimeout(get_low, 700)
			    });
		$('.homeTextLower').stop().delay(300).animate({ right: 0 }, 200);
	});

	// Highlight the nav box we're hovering over
	$('.navBox').hover(
		function(){ $(this).attr("class", "navBoxHover"); },
		function(){ $(this).attr("class", "navBox"); }
	 );

	$('#navTR').click(function(){
			window.location.href='/oldblog';
		});
	$('#navBL').click(function(){
			window.location.href='mailto:shawn@shawnlower.com';
		});
	$('#navBR').click(function(){
			window.location.href='https://www.linkedin.com/in/shawnlower';
		});
}

function get_low(){
	//$('.homeTextLower').css({'top': '50%'});
	$('.homeTextLower').animate({ top: '50%' });
}
