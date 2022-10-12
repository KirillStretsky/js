$(document).ready(function () {
	$(".carousel__inner").slick({
		speed: 900,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
				},
			},
		],
	});

	$("ul.catalog__tabs").on(
		"click",
		"li:not(.catalog__tab_active)",
		function () {
			$(this)
				.addClass("catalog__tab_active")
				.siblings()
				.removeClass("catalog__tab_active")
				.closest("div.container")
				.find("div.catalog__content")
				.removeClass("catalog__content_active")
				.eq($(this).index())
				.addClass("catalog__content_active");
		}
	);

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on("click", function (e) {
				e.preventDefault();
				$(".catalog-item__content")
					.eq(i)
					.toggleClass("catalog-item__content_active");
				$(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
			});
		});
	}

	toggleSlide(".catalog-item__link");
	toggleSlide(".catalog-item__back");

	// Modal
	$('[data-modal="consultation"]').on("click", function () {
		$(".overlay, #consulting").fadeIn("slow");
	});
	$(".modal__close").on("click", function () {
		$(".overlay, #consulting, #thank, #order").fadeOut("slow");
	});

	//button_price

	$(".catalog-item__btn").each(function (i) {
		$(this).on("click", function () {
			$("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
			$(".overlay, #order").fadeIn("slow");
		});
	});
});
