$(function(){
	setCanvases();
	addAllListeners();


	// drawingContext.lineWidth = 10;
	coordinatePaint = false;
	drawingPaint = false;
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

	// TO ENABLE DRAWING TOOLS
	$(".eraser").on("click", startErasing);
	$("#main-workspace .undo").on("click", undo);
	$("#main-workspace, .redo").on("click", redo);

	// TO CHANGE CONTEXT
	$(".show-drawing-demo").on("click", closeWindow);
	$(".show-coordinates-demo").on("click", showCoordinatesDemo);
}