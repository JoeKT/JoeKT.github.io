$(".imageMap").mouseenter(function () {
	$(".non-nav-one").css("border", "3px solid #CEB573");
});
$(".imageMap").mouseleave(function () {
	$(".non-nav-one").css("border", "none");
});
$(".imageTheatre").mouseenter(function () {
	$(".non-nav-two").css("border", "3px solid #CEB573");
});
$(".imageBook").mouseenter(function () {
	$(".non-nav-three").css("border", "3px solid #CEB573");
});
$(".imageTheatre").mouseleave(function () {
	$(".non-nav-two").css("border", "none");
});
$(".imageBook").mouseleave(function () {
	$(".non-nav-three").css("border", "none");
});

$(".imageTheatre").click( function() {
	$(".imageTheatre").toggleClass('fullscreen');
	setTimeout(travel1, 200);
});
$(".imageBook").click( function() {
	$(".imageBook").toggleClass('fullscreen');
	setTimeout(travel2, 200);
});

var travel1 = function () {
	window.location = "http://JoeKT.github.io/case_study_one.html/"
};
var travel2 =function () {
	window.location = "http://JoeKT.github.io/case_study_two.html/"
};

$(document).ready(function () {
	if (window.innerWidth < 651) {
		$(".fadeOut").css("display", "none");		
		$(".hiddenBody").fadeIn(2000);	
	} else {
		$(".fadeOut").fadeIn(3000).fadeOut(3000);
		$(".hiddenBody").fadeIn(5000);	
	}
	if (window.innerWidth > 991) {
		$(".descriptor-box-one").css("left", "0").css("overflow", "hidden").delay(2000).fadeIn("slow", function () {
			$(".descriptor-box-one").animate({"left":"20%"});
			$(".descriptor-box-one").animate({"left":"15%"});
			});
		$(".descriptor-box-two").css("left", "0").css("overflow", "hidden").delay(2000).fadeIn("slow", function () {
			$(".descriptor-box-two").animate({"left":"70%"});
			$(".descriptor-box-two").animate({"left":"65%"});
			});
	} else if (window.innerWidth > 400) {
		$(".descriptor-box-one").css("left", "0").css("overflow", "hidden").delay(2000).fadeIn("slow", function () {
			$(".descriptor-box-one").animate({"left":"15%"});
			$(".descriptor-box-one").animate({"left":"10%"});
			});
		$(".descriptor-box-two").css("left", "0").css("overflow", "hidden").delay(2000).fadeIn("slow", function () {
			$(".descriptor-box-two").animate({"left":"155%"});
			$(".descriptor-box-two").animate({"left":"10%"});
			});
	} else {
		$(".descriptor-box-one").css("left", "0").css("overflow", "hidden").delay(2000).fadeIn("slow", function () {
			$(".descriptor-box-one").animate({"left":"5%"});
			$(".descriptor-box-one").animate({"left":"0%"});
			});
		$(".descriptor-box-two").css("left", "0").css("overflow", "hidden").delay(2000).fadeIn("slow", function () {
			$(".descriptor-box-two").animate({"left":"5%"});
			$(".descriptor-box-two").animate({"left":"0%"});
			});
	}
});

$("#side-nav-span").click( function() {
  $(".side-nav").toggle();
  if ($(".backTotal").css("opacity") === "1") {
    $(".backTotal").css("opacity",".4");
  } else {
    $(".backTotal").css("opacity","1");
  };
});

var align = window.innerWidth - 330;

$(".penInk").css("left", align + 20);
$("#side-nav-span").css("left", align + 250);
$(".side-nav").css("left", align);

$(window).load( function () {
  $("#side-nav-span").css("font-size", "7em");
  $("#side-nav-span").fadeOut(1600, function() {
    $("#side-nav-span").css("font-size", "6em");
  });
  $("#side-nav-span").fadeIn(800).fadeOut(800, function () {
    $("#side-nav-span").css("font-size", "5em");
  });
  $("#side-nav-span").fadeIn(800).fadeOut(800, function () {
    $("#side-nav-span").css("font-size", "4em");
  });
  $("#side-nav-span").fadeIn(800);
});

