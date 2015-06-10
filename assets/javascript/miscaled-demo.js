function miscaledStart(e){
	miscaledDrawingPaint = true;

	miscaledDrawingContext.beginPath();
	miscaledDrawingContext.moveTo(e.offsetX, e.offsetY);

}

function miscaledDraw(e){
	if( miscaledDrawingPaint === true ){
		miscaledDrawingContext.lineTo(e.offsetX, e.offsetY);
		miscaledDrawingContext.stroke();
	}
}

function miscaledStopDrawing(e){
	miscaledDrawingPaint = false;
	recordHistory();
	redoArray = new Array();
}
