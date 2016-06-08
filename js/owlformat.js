window.onload = function() {

	$('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        autoWidth:true,
        videoHeight: 300,
        videoWidth: 600,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    });

    $(".circle").click(function(){
            var doorleft = $(".door-left");
            var doorright = $(".door-right");
            var circle = $(".circle");
            var glass = $(".glasswrapper");


            if( $(circle).hasClass("active"))
            {
                $(circle).removeClass("active");
                TweenMax.to(doorright, 2, {x: "0%"});
                TweenMax.to(doorleft, 2, {x: "0%"});
                TweenMax.to(circle, 2, {left: "42.5%", zIndex: 101});
                TweenMax.to(circle, 3, {width: "15%", height: "15vw" });
                TweenMax.to(glass, 2, {zIndex: 100});
            }
            else{
                $(circle).addClass("active");

                TweenMax.to(doorleft, 3.5, {x: "-100%"});
                TweenMax.to(doorright, 3.5, {x: "100%"});
                TweenMax.to(circle, 3.5, {left: "-2.5%", width: "5%", height: "5vw", zIndex: 40});
                TweenMax.to(glass, 3.5, {zIndex: -1});
            }
    });
}