function getStarted(e){
	drawingPaint = true;

	drawingContext.beginPath();
	drawingContext.moveTo(e.offsetX, e.offsetY);
}

function draw(e){
	if( drawingPaint === true ){
		drawingContext.lineTo(e.offsetX, e.offsetY);
		drawingContext.stroke();
	}
}

	$("#drawing-canvas").on("mouseup", stopDrawing);

	function stopDrawing(e){
		drawingPaint = false;
		recordHistory();
		redoArray = new Array();
	}
