$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 2,
  });
  $(".prev-btn").click(function () {
		$(".carousel").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".carousel").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".carousel").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
});