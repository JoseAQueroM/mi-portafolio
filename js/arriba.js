$(document).ready(function(){

	$('.upToHome').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.upToHome').slideDown(300);
		} else {
			$('.upToHome').slideUp(100);
		}
	});

});