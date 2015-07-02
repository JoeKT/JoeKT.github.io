var properties = function () {
	
	$('#allSales').click(function() {

		$('.home-sale, .fa-usd, .fa-university').css('visibility', 'visible');
	});

	$('#undevelopedLand').click(function () {

		$('.home-sale, .fa-university').css('visibility', 'hidden');
		$('.fa-usd').css('visibility', 'visible');
	});

	$('#smallProperties').click(function () {

		$('.fa-university, .fa-usd').css('visibility', 'hidden');
		$('.home-sale').css('visibility', 'visible');
	});

	$('#largeProperties').click(function () {

		$('.home-sale, .fa-usd').css('visibility', 'hidden');
		$('.fa-university').css('visibility', 'visible');
	});
};

$(document).ready(properties);