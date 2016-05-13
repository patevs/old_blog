
var main = function(){
	$('.icon-menu').click(function(){
		$('.menu').animate({ left: '0px' }, 200);
		$('.icon-menu').hide();
	});
	$('.close').click(function(){
		$('.menu').animate({ left: '-320px' }, 200);
		$('.icon-menu').show(200);
	});
};

$(document).ready(main);