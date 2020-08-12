@@include('vendors.js')

$(document).ready(function() {
	$('.slider-main').slick({
		autoplay: false,
		adaptiveHeight: true,
		arrows: false,
		dots: true,
		lazyLoad: 'progressive',
		slidesToShow: 1,
		slidesToScroll: 1,
	})
})