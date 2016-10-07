window.onload = function() {

	$('.owl-carousel').owlCarousel({
        loop:true,
        width:300,
        height:300, 
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }
    });
}