$(document).ready(function($) {
	$('.popup-btn').on('click', function() {
		$('.popup').fadeIn();
		
	});

	$('.popup-close').on('click', function() {
		$('.popup').fadeOut();
		
	});

	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});

	$('#nav-icon2').on('click', function(){
		$('.menu').toggle();

	});
});
	



		



