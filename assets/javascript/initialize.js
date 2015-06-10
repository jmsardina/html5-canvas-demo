$(function(){
	setCanvases();
	addAllListeners();

	coordinatePaint = false;
	drawingPaint = false;
	miscaledDrawingPaint = false;
	undoArray = new Array();
	recordHistory();
});

function addAllListeners(){
	// BINDING EVENTS TO DRAW ON COORDINATES CANVAS
	$("#main-layer").on("mousedown", startAllCoordinates);
	$("#main-layer").on("mousemove", drawAllCoordinates);
	$("#main-layer").on("mouseup", stopDrawingAllCoordinates);

	// BINDING EVENTS TO DRAW ON DRAWING CANVAS
	$("#drawing-canvas").on("mousedown", getStarted);
	$("#drawing-canvas").on("mousemove", draw);
	$("#drawing-canvas").on("mouseup", stopDrawing);

	// BINDING EVENTS TO DRAW ON MISCALED CANVAS
	$("#miscaled-canvas").on("mousedown", miscaledStart);
	$("#miscaled-canvas").on("mousemove", miscaledDraw);
	$("#miscaled-canvas").on("mouseup", miscaledStopDrawing);

	// TO ENABLE DRAWING TOOLS
	$(".eraser").on("click", startErasing);
	$("#main-workspace .undo").on("click", undo);
	$("#main-workspace .redo").on("click", redo);

	// TO CHANGE VIEWS
	$(".show-drawing-demo, .show-coordinates-demo").on("click", changeViews)
}