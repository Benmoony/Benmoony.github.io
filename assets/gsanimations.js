window.onload = function() {

	var face = $(".face");

	Draggable.create( face, {type:"x,y", edgeResistance:0.65, bounds:"#about", throwProps:true});

}