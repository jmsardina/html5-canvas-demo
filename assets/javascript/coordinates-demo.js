$(function(){
	var paint = false;
	$("#main-layer").on("mousedown", coordinatesStartDrawing);
	$("#main-layer").on("mousemove", coordinatesDraw);
	$("#main-layer").on("mouseup", coordinatesStopDrawing);

	function coordinatesStartDrawing(e){
		paint = true;

		// Record all starting points
		offsetStart = [e.offsetX, e.offsetY];
		pageStart = [e.pageX, e.pageY];
		clientStart = [e.clientX, e.clientY];
		screenStart = [e.screenX, e.screenY];
		layerStart = [e.layerX, e.layerY];

		// For Cross-Browswer Compatibility
		calculatedStart = [(e.pageX - $(e.target).offset().left), (e.pageY - $(e.target).offset().top)];
	}

	function coordinatesDraw(e){
		if (paint === true) {
			coordinateStroke(e, "gridContext", "e.offsetX", "e.offsetY", "offsetStart", "black");
			coordinateStroke(e, "gridContext", "e.clientX", "e.clientY", "clientStart", "green");
			coordinateStroke(e, "gridContext", "e.pageX", "e.pageY", "pageStart", "red");
			coordinateStroke(e, "gridContext", "e.screenX", "e.screenY", "screenStart", "blue");
			coordinateStroke(e, "gridContext", "e.layerX", "e.layerY", "layerStart", "orange");
			
			// // For Cross-Browswer Compatibility
			// coordinateStroke(
			// 	e, 
			// 	"gridContext", 
			// 	"(e.pageX - $(e.target).offset().left)", 
			// 	"(e.pageY - $(e.target).offset().top)", 
			// 	"calculatedStart", 
			// 	"purple"
			// );
		}
	}

	function coordinateStroke(e, ctx, typeX, typeY, start, color){
		var context = eval(ctx);
		var xStart = eval(start)[0];
		var yStart = eval(start)[1];
		var xEnd = eval(typeX);
		var yEnd = eval(typeY);

			context.strokeStyle = color;
			context.beginPath();
			context.moveTo(xStart, yStart);
			context.lineTo(xEnd, yEnd);
			context.stroke();
	}

	function coordinatesStopDrawing(e){
		paint = false;
	}
})