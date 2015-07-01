var exchange = function () {

	$('#yields-btn').click(function() {

		var resourceCount = parseInt($('.resource-total').val());
		var resourceDropdown = $('.resource-dropdown').val().toLowerCase();

		$('.exchange-clay td, .exchange-wheat td, .exchange-wood td, .exchange-ore td, .exchange-sheep td').remove();

		if (resourceDropdown === "sheep") {

			$('.exchange-wheat').append("<td id='exchange-yields-table-wheat'>" + (resourceCount * .75) + "</td>");
			$('.exchange-wood').append("<td id='exchange-yields-table-wood'>" + (resourceCount * 1.2) + "</td>");
			$('.exchange-clay').append("<td id='exchange-yields-table-clay'>" + (resourceCount * .9) + "</td>");
			$('.exchange-ore').append("<td id='exchange-yields-table-ore'>" + (resourceCount * .46) + "</td>");
			$('.exchange-sheep').append("<td id='exchange-yields-table-sheep'>" + (resourceCount * 1) + "</td>");
		}
		else if (resourceDropdown === "wheat") {

			$('.exchange-wheat').append("<td id='exchange-yields-table-wheat'>" + (resourceCount * 1) + "</td>");
			$('.exchange-wood').append("<td id='exchange-yields-table-wood'>" + (resourceCount * 3.2) + "</td>");
			$('.exchange-clay').append("<td id='exchange-yields-table-clay'>" + (resourceCount * 1.1) + "</td>");
			$('.exchange-ore').append("<td id='exchange-yields-table-ore'>" + (resourceCount * .78) + "</td>");
			$('.exchange-sheep').append("<td id='exchange-yields-table-sheep'>" + (resourceCount * 1.25) + "</td>");
		}
		else if (resourceDropdown === "wood") {

			$('.exchange-wheat').append("<td id='exchange-yields-table-wheat'>" + (resourceCount * .3) + "</td>");
			$('.exchange-wood').append("<td id='exchange-yields-table-wood'>" + (resourceCount * 1) + "</td>");
			$('.exchange-clay').append("<td id='exchange-yields-table-clay'>" + (resourceCount * .66) + "</td>");
			$('.exchange-ore').append("<td id='exchange-yields-table-ore'>" + (resourceCount * .34) + "</td>");
			$('.exchange-sheep').append("<td id='exchange-yields-table-sheep'>" + (resourceCount * .8) + "</td>");
		}
		else if ( resourceDropdown === "clay") {

			$('.exchange-wheat').append("<td id='exchange-yields-table-wheat'>" + (resourceCount * .9) + "</td>");
			$('.exchange-wood').append("<td id='exchange-yields-table-wood'>" + (resourceCount * 1.34) + "</td>");
			$('.exchange-clay').append("<td id='exchange-yields-table-clay'>" + (resourceCount * 1) + "</td>");
			$('.exchange-ore').append("<td id='exchange-yields-table-ore'>" + (resourceCount * .98) + "</td>");
			$('.exchange-sheep').append("<td id='exchange-yields-table-sheep'>" + (resourceCount * 1.1) + "</td>");
		}
		else if ( resourceDropdown === "ore") {

			$('.exchange-wheat').append("<td id='exchange-yields-table-wheat'>" + (resourceCount * 1.22) + "</td>");
			$('.exchange-wood').append("<td id='exchange-yields-table-wood'>" + (resourceCount * 1.66) + "</td>");
			$('.exchange-clay').append("<td id='exchange-yields-table-clay'>" + (resourceCount * 1.02) + "</td>");
			$('.exchange-ore').append("<td id='exchange-yields-table-ore'>" + (resourceCount * 1) + "</td>");
			$('.exchange-sheep').append("<td id='exchange-yields-table-sheep'>" + (resourceCount * 1.54) + "</td>");
		};
	});
};

var loan = function () {

	$('#loans-btn').click(function() {

		$('#loan-yields-table-wheat td, #loan-yields-table-wood td, #loan-yields-table-clay td, #loan-yields-table-ore td, #loan-yields-table-sheep td').remove();

		$('#loan-yields-table-wheat').append("<td>" + (parseInt($('.loan-requests-table-wheat').val()) * 2.8) + "</td>");
		$('#loan-yields-table-wood').append("<td>" + (parseInt($('.loan-requests-table-wood').val()) * 1.3) + "</td>");
		$('#loan-yields-table-clay').append("<td>" + (parseInt($('.loan-requests-table-clay').val()) * 1.78) + "</td>");
		$('#loan-yields-table-ore').append("<td>" + (parseInt($('.loan-requests-table-ore').val()) * 3.6) + "</td>");
		$('#loan-yields-table-sheep').append("<td>" + (parseInt($('.loan-requests-table-sheep').val()) * 2.3) + "</td>");
	});
};

$(document).ready(function(){
	exchange();
	loan();
});