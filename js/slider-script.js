$(function(){
	$('.slider').slick(
		{
			arrows:false,
			dots:true,
			slidesToShow:4,
			slidesToScroll:2,
			speed:200,
			easing:'linear',
			infinite:true,
			initialSlide:0,
			autoplay:false,
			autoplaySpeed:5000,
			pauseOnFocus:true,
			pauseOnHover:true,
			pauseOnDotsHover:true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 840,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 570,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			]
	});

});