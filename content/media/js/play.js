// some vars

urls = {
        'blog':      '/blog',
        'contact':   'mailto:shawn@shawnlower.com',
        'resume':    'http://www.shawnlower.com/media/resume.pdf'
 };

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
			window.location.href=urls['blog'];
		});
	$('#navBL').click(function(){
			window.location.href=urls['contact'];
		});
	$('#navBR').click(function(){
			window.location.href=urls['resume'];
		});

	// Keyboard shortcuts :-)
    // Blog
	$(document).bind('keypress', 'b', function() {
			$('#navTR').attr("class", "navBoxHover");
			window.location.href=urls['blog'];
		});
    // Contact (sends e-mail)
	$(document).bind('keypress', 'c', function() {
			$('#navBL').attr("class", "navBoxHover");
			window.location.href=urls['contact'];
		});
    // Resume
	$(document).bind('keypress', 'r', function() {
			$('#navBR').attr("class", "navBoxHover");
			window.location.href=urls['resume'];
		});
}

function get_low(){
	//$('.homeTextLower').css({'top': '50%'});
	$('.homeTextLower').animate({ top: '50%' });
}
