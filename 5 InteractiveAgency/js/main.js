$(document).ready(function(){
	/*Slider*/
	$('.center').slick({
	  autoplay: false,
	  arrows: true,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: $('.prev'),
	  nextArrow: $('.next'),
	  responsive: [
	  	{
	  		breakpoint: 800,
	  		settings: {
	  			slidesToShow: 2,
	  			slidesToScroll: 1
	  		} 
	  	},
	  	{
	  		breakpoint: 600,
	  			settings: {
	  				slidesToShow: 1,
	  				slidesToScroll: 1
	  			}
	  	}
	  ]
	});
	$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  console.log('beforeChange', currentSlide, nextSlide);
	});
	$('.center').on('afterChange', function(event, slick, currentSlide){
	  console.log('afterChange', currentSlide);
	});


	//Fluent scroll
	$('a[href^="#"]').click(function(e){
		 e.preventDefault();
		 var el = $(this).attr('href');
		 var destination = $(el).offset().top;
		 $('body, html').animate({scrollTop: destination}, 1000);    	
	});     
});	


/*Goggle map*/
function initMap() {
	var paris = {lat: 48.856614, lng: 2.352222};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 10,
	  center: paris
	});
	var image = 'img/five/google-marker.png';
	var marker = new google.maps.Marker({
	  position: paris,
	  map: map,
	  icon: image
	});
	marker.setMap(map);
            
    //Zoom when clicked on marker
    google.maps.event.addListener(marker,'click',function() {
       map.setZoom(18);
       map.setCenter(marker.getPosition());
    });
}
	