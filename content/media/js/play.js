function play(){
	$(document).ready(function(){
		$('.homeTextShawn').stop().animate({
				left: 0 
			}, 300);
		$('.homeTextLower').stop().delay(300).animate({
				right: 0
			}, 300);
	});

	$('.navNormal').mouseover(function(){
			$(this).attr("class", "navHighlight");
		}).mouseout(function(){
			$(this).attr("class", "navNormal");
		});
}

