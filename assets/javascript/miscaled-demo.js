$(function(){
	var miscaledDrawingPaint = false;
	var $canvas = $("#miscaled-canvas");

	$canvas.on("mousedown", miscaledStart);
	$canvas.on("mousemove", miscaledDraw);
	$canvas.on("mouseup", miscaledStopDrawing);

	function miscaledStart(e){
		miscaledDrawingPaint = true;

		miscaledDrawingContext.beginPath();
		miscaledDrawingContext.moveTo( (e.pageX - $(e.target).offset().left), (e.pageY - $(e.target).offset().top));
	}

	function miscaledDraw(e){
		if( miscaledDrawingPaint === true ){
			miscaledDrawingContext.lineTo( (e.pageX - $(e.target).offset().left), (e.pageY - $(e.target).offset().top));
			miscaledDrawingContext.stroke();
		}
	}

	function miscaledStopDrawing(e){
		miscaledDrawingPaint = false;
	}
});
