var main = function () {

	setInterval(function() {tickerMove()}, 90);
};

function tickerMove() {

	if (parseInt($('#tickerOne').css('left')) < -1290)
		$('#tickerOne').css({left : 4969});

	if (parseInt($('#tickerTwo').css('left')) < -959)
		$('#tickerTwo').css({left : 5300});

	if (parseInt($('#tickerThree').css('left')) < -1101)
		$('#tickerThree').css({left : 5158});

	if (parseInt($('#tickerFour').css('left')) < -1512)
		$('#tickerFour').css({left : 4747});

	if (parseInt($('#tickerFive').css('left')) < -1397)
		$('#tickerFive').css({left : 4862});

	$('#tickerOne').animate({left : '-=10'}, 80);
	$('#tickerTwo').animate({left : '-=10'}, 80);
	$('#tickerThree').animate({left : '-=10'}, 80);
	$('#tickerFour').animate({left : '-=10'}, 80);
	$('#tickerFive').animate({left : '-=10'}, 80);

};

$(document).ready(main);