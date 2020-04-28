
$(function(){
	$('.wraper').addClass('loaded');
	$('.search__icon').click(function(event){
			$('.search__form').toggleClass('active');
			$('.main, .search__icon').toggleClass('none');
	});
	$('.search_btn').click(function(event){
			$('.search__form').removeClass('active');
			$('.main, .search__icon').removeClass('none');
	});
	$('.open').click(function(event){
			$('.list__menu').addClass('pokaz');
			$('.open').addClass('hidden');
			$('.close').removeClass('hidden');
	});
	$('.close').click(function(event){
			$('.list__menu').removeClass('pokaz');
			$('.close').addClass('hidden');
			$('.open').removeClass('hidden');
	});
function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
};

ibg();








});