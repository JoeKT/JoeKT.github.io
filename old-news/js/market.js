var main = function () {

	setInterval(function () {valueShift()}, 1500);
	
};

function valueShift() {

	var count = 0;
	var modifier = Math.floor(Math.random() * 30) - 15;

	var italyIncenseNew = parseInt($('#incenseItaly').get(0).innerHTML) + (modifier * 6);
	var middleEastIncenseNew = parseInt($('#incenseMiddleEast').get(0).innerHTML) + (modifier * .75);
	var steppesIncenseNew = parseInt($('#incenseSteppes').get(0).innerHTML) + (modifier * 6);
	var centralAsiaIncenseNew = parseInt($('#incenseCentralAsia').get(0).innerHTML) + (modifier * 3);
	var indiaIncenseNew = parseInt($('#incenseIndia').get(0).innerHTML) + (modifier * 3);
	var chinaIncenseNew = parseInt($('#incenseChina').get(0).innerHTML) + (modifier * 6);

	var italyDyesNew = parseInt($('#dyesItaly').get(0).innerHTML) + (modifier * 4);
	var middleEastDyesNew = parseInt($('#dyesMiddleEast').get(0).innerHTML) + (modifier * 2);
	var steppesDyesNew = parseInt($('#dyesSteppes').get(0).innerHTML) + (modifier * 4);
	var centralAsiaDyesNew = parseInt($('#dyesCentralAsia').get(0).innerHTML) + (modifier * 4);
	var indiaDyesNew = parseInt($('#dyesIndia').get(0).innerHTML) + (modifier * .5);
	var chinaDyesNew = parseInt($('#dyesChina').get(0).innerHTML) + (modifier * 2);

	var italySpicesNew = parseInt($('#spicesItaly').get(0).innerHTML) + (modifier * 10);
	var middleEastSpicesNew = parseInt($('#spicesMiddleEast').get(0).innerHTML) + (modifier * 5);
	var steppesSpicesNew = parseInt($('#spicesSteppes').get(0).innerHTML) + (modifier * 10);
	var centralAsiaSpicesNew = parseInt($('#spicesCentralAsia').get(0).innerHTML) + (modifier * 10);
	var indiaSpicesNew = parseInt($('#spicesIndia').get(0).innerHTML) + (modifier * 1.75);
	var chinaSpicesNew = parseInt($('#spicesChina').get(0).innerHTML) + (modifier * 1.75);

	var italySilkNew = parseInt($('#silkItaly').get(0).innerHTML) + (modifier * 8);
	var middleEastSilkNew = parseInt($('#silkMiddleEast').get(0).innerHTML) + (modifier * 4);
	var steppesSilkNew = parseInt($('#silkSteppes').get(0).innerHTML) + (modifier * 8);
	var centralAsiaSilkNew = parseInt($('#silkCentralAsia').get(0).innerHTML) + (modifier * 4);
	var indiaSilkNew = parseInt($('#silkIndia').get(0).innerHTML) + (modifier * 2);
	var chinaSilkNew = parseInt($('#silkChina').get(0).innerHTML) + (modifier * 1);

	var italyPorcelainNew = parseInt($('#porcelainItaly').get(0).innerHTML) + (modifier * 4);
	var middleEastPorcelainNew = parseInt($('#porcelainMiddleEast').get(0).innerHTML) + (modifier * 4);
	var steppesPorcelainNew = parseInt($('#porcelainSteppes').get(0).innerHTML) + (modifier * 4);
	var centralAsiaPorcelainNew = parseInt($('#porcelainCentralAsia').get(0).innerHTML) + (modifier * 2);
	var indiaPorcelainNew = parseInt($('#porcelainIndia').get(0).innerHTML) + (modifier * 2);
	var chinaPorcelainNew = parseInt($('#porcelainChina').get(0).innerHTML) + (modifier * .5);

	var italyWineNew = parseInt($('#wineItaly').get(0).innerHTML) + (modifier * .75);
	var middleEastWineNew = parseInt($('#wineMiddleEast').get(0).innerHTML) + (modifier * 1.5);
	var steppesWineNew = parseInt($('#wineSteppes').get(0).innerHTML) + (modifier * 1.5);
	var centralAsiaWineNew = parseInt($('#wineCentralAsia').get(0).innerHTML) + (modifier * 3);
	var indiaWineNew = parseInt($('#wineIndia').get(0).innerHTML) + (modifier * 6);
	var chinaWineNew = parseInt($('#wineChina').get(0).innerHTML) + (modifier * 6);

	var italyHorsesNew = parseInt($('#horsesItaly').get(0).innerHTML) + (modifier * 1);
	var middleEastHorsesNew = parseInt($('#horsesMiddleEast').get(0).innerHTML) + (modifier * 2);
	var steppesHorsesNew = parseInt($('#horsesSteppes').get(0).innerHTML) + (modifier * 1);
	var centralAsiaHorsesNew = parseInt($('#horsesCentralAsia').get(0).innerHTML) + (modifier * 2);
	var indiaHorsesNew = parseInt($('#horsesIndia').get(0).innerHTML) + (modifier * 8);
	var chinaHorsesNew = parseInt($('#horsesChina').get(0).innerHTML) + (modifier * 8);

	var italyWoolNew = parseInt($('#woolItaly').get(0).innerHTML) + (modifier * .5);
	var middleEastWoolNew = parseInt($('#woolMiddleEast').get(0).innerHTML) + (modifier * 1);
	var steppesWoolNew = parseInt($('#woolSteppes').get(0).innerHTML) + (modifier * .5);
	var centralAsiaWoolNew = parseInt($('#woolCentralAsia').get(0).innerHTML) + (modifier * 1);
	var indiaWoolNew = parseInt($('#woolIndia').get(0).innerHTML) + (modifier * 4);
	var chinaWoolNew = parseInt($('#woolChina').get(0).innerHTML) + (modifier * 4);

	var italyGlassNew = parseInt($('#glassItaly').get(0).innerHTML) + (modifier * 1.5);
	var middleEastGlassNew = parseInt($('#glassMiddleEast').get(0).innerHTML) + (modifier * 3);
	var steppesGlassNew = parseInt($('#glassSteppes').get(0).innerHTML) + (modifier * 6);
	var centralAsiaGlassNew = parseInt($('#glassCentralAsia').get(0).innerHTML) + (modifier * 3);
	var indiaGlassNew = parseInt($('#glassIndia').get(0).innerHTML) + (modifier * 6);
	var chinaGlassNew = parseInt($('#glassChina').get(0).innerHTML) + (modifier * 6);

	var italyFurNew = parseInt($('#furItaly').get(0).innerHTML) + (modifier * 2);
	var middleEastFurNew = parseInt($('#furMiddleEast').get(0).innerHTML) + (modifier * 2);
	var steppesFurNew = parseInt($('#furSteppes').get(0).innerHTML) + (modifier * .5);
	var centralAsiaFurNew = parseInt($('#furCentralAsia').get(0).innerHTML) + (modifier * 2);
	var indiaFurNew = parseInt($('#furIndia').get(0).innerHTML) + (modifier * 2);
	var chinaFurNew = parseInt($('#furChina').get(0).innerHTML) + (modifier * 4);

	$('#incenseItaly').text(italyIncenseNew);
	$('#incenseMiddleEast').text(middleEastIncenseNew);
	$('#incenseSteppes').text(steppesIncenseNew);
	$('#incenseCentralAsia').text(centralAsiaIncenseNew);
	$('#incenseIndia').text(indiaIncenseNew);
	$('#incenseChina').text(chinaIncenseNew);

	$('#dyesItaly').text(italyDyesNew);
	$('#dyesMiddleEast').text(middleEastDyesNew);
	$('#dyesSteppes').text(steppesDyesNew);
	$('#dyesCentralAsia').text(centralAsiaDyesNew);
	$('#dyesIndia').text(indiaDyesNew);
	$('#dyesChina').text(chinaDyesNew);

	$('#spicesItaly').text(italySpicesNew);
	$('#spicesMiddleEast').text(middleEastSpicesNew);
	$('#spicesSteppes').text(steppesSpicesNew);
	$('#spicesCentralAsia').text(centralAsiaSpicesNew);
	$('#spicesIndia').text(indiaSpicesNew);
	$('#spicesChina').text(chinaSpicesNew);

	$('#silkItaly').text(italySilkNew);
	$('#silkMiddleEast').text(middleEastSilkNew);
	$('#silkSteppes').text(steppesSilkNew);
	$('#silkCentralAsia').text(centralAsiaSilkNew);
	$('#silkIndia').text(indiaSilkNew);
	$('#silkChina').text(chinaSilkNew);

	$('#porcelainItaly').text(italyPorcelainNew);
	$('#porcelainMiddleEast').text(middleEastPorcelainNew);
	$('#porcelainSteppes').text(steppesPorcelainNew);
	$('#porcelainCentralAsia').text(centralAsiaPorcelainNew);
	$('#porcelainIndia').text(indiaPorcelainNew);
	$('#porcelainChina').text(chinaPorcelainNew);

	$('#wineItaly').text(italyWineNew);
	$('#wineMiddleEast').text(middleEastWineNew);
	$('#wineSteppes').text(steppesWineNew);
	$('#wineCentralAsia').text(centralAsiaWineNew);
	$('#wineIndia').text(indiaWineNew);
	$('#wineChina').text(chinaWineNew);

	$('#horsesItaly').text(italyHorsesNew);
	$('#horsesMiddleEast').text(middleEastHorsesNew);
	$('#horsesSteppes').text(steppesHorsesNew);
	$('#horsesCentralAsia').text(centralAsiaHorsesNew);
	$('#horsesIndia').text(indiaHorsesNew);
	$('#horsesChina').text(chinaHorsesNew);

	$('#woolItaly').text(italyWoolNew);
	$('#woolMiddleEast').text(middleEastWoolNew);
	$('#woolSteppes').text(steppesWoolNew);
	$('#woolCentralAsia').text(centralAsiaWoolNew);
	$('#woolIndia').text(indiaWoolNew);
	$('#woolChina').text(chinaWoolNew);

	$('#glassItaly').text(italyGlassNew);
	$('#glassMiddleEast').text(middleEastGlassNew);
	$('#glassSteppes').text(steppesGlassNew);
	$('#glassCentralAsia').text(centralAsiaGlassNew);
	$('#glassIndia').text(indiaGlassNew);
	$('#glassChina').text(chinaGlassNew);		

	$('#furItaly').text(italyFurNew);
	$('#furMiddleEast').text(middleEastFurNew);
	$('#furSteppes').text(steppesFurNew);
	$('#furCentralAsia').text(centralAsiaFurNew);
	$('#furIndia').text(indiaFurNew);
	$('#furChina').text(chinaFurNew);

};

$(document).ready(main);