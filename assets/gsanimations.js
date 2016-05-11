window.onload = function() {

	$(".navdrop").click(function(){
				var check = $(".nav");
				if( $(check).hasClass("navactive"))
				{
					$(check).removeClass("navactive");
				} 
				else{
					$(check).addClass("navactive");
				}
	});
	//Mobile dropdown menu functionality


	var face = $(".face");
		TweenMax.to(face, 2, {
			rotation:15
		});

	//Create a click funtion that adds padding to section headers and adds a word animation effect
	$(".clickable").click(function(){

		var e_href = $(this).attr("href");
		if( $("c_section").hasClass("clicked"))
		{
			$("c_section").removeClass("clicked");
		}
		$(e_href).addClass("clicked");
		

		var head = $(".head_text");
		shakeTween(head, 3);
	});
	
	function shakeTween(item, repeatCount){
		var max = 5;
		var min = -5;
		TweenMax.to(item,0.1,{repeat:repeatCount-1, x:Math.floor(Math.random() * (max - min + 1) + min), delay:.1});
		TweenMax.to(item,0.1,{y:0, x:0, delay:(repeatCount+1) * .1});
	}
}

//TweenLite.to(face, 2, {width:800, height:650})
	//Draggable.create( face, {type:"x,y", edgeResistance:0.65, bounds:"#about", throwProps:true});
	//debug();