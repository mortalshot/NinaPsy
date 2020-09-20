@@include('vendors.js')

$(document).ready(function () {
	$('.slider-main').slick({
		autoplay: false,
		adaptiveHeight: true,
		arrows: false,
		dots: true,
		lazyLoad: 'progressive',
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.slider-certificates').slick({
		autoplay: false,
		adaptiveHeight: false,
		infinite: false,
		arrows: true,
		dots: false,
		lazyLoad: 'progressive',
		slidesToShow: 4,
		slidesToScroll: 1,
		swipe: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	});
})