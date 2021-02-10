$(window).load (function(){
	var carouselImgWidth = $('#carousel-sidebar .active img').width();
	console.log(carouselImgWidth);
	$('#carousel-sidebar img') .each(function(){
		$(this).attr('width', carouselImgWidth);
	});
	$('#elastislide').elastislide();
	$('#carousel-sidebar .carousel-sidebar-item').css('max-width', carouselImgWidth + 'px');
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselImgWidth + 'px');
	$('.sidebar .banner').css('max-width', carouselImgWidth + 'px');
});
