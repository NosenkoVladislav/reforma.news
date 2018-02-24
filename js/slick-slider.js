$(document).ready(function(){
  $('.media-content').slick({
    infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 4,
  	arrows: true,
  	appendArrows: '.slider-control',
  	prevArrow: '<div class="slick-arrow slick-prev prev-ctrl"><i class="fa fa-lg fa-angle-left" aria-hidden="true"></i></div>',
	nextArrow: '<div class="slick-arrow slick-next next-ctrl"><i class="fa fa-lg fa-angle-right" aria-hidden="true"></i></div>',  
  });
});