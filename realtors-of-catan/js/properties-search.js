var properties = function () {
	
	$('#allSales').click(function() {

		$('.fa-home, .fa-usd, .fa-university').css('visibility', 'visible');
	});

	$('#undevelopedLand').click(function () {

		$('.fa-home, .fa-university').css('visibility', 'hidden');
		$('.fa-usd').css('visibility', 'visible');
	});

	$('#smallProperties').click(function () {

		$('.fa-university, .fa-usd').css('visibility', 'hidden');
		$('.fa-home').css('visibility', 'visible');
	});

	$('#largeProperties').click(function () {

		$('.fa-home, .fa-usd').css('visibility', 'hidden');
		$('.fa-university').css('visibility', 'visible');
	});
};

$(document).ready(properties);