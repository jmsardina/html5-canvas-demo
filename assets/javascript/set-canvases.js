function setCanvases(){
	// FOR COORDINATES DEMO 
	var mainLayer = document.getElementById("main-layer");
	context = mainLayer.getContext("2d");

	var gridLayer = document.getElementById("grid-layer");
	gridContext = gridLayer.getContext("2d");
	setGrid();

	// FOR DRAWING DEMO
	var drawingCanvas = document.getElementById("drawing-canvas");	
	drawingContext = drawingCanvas.getContext("2d");

	// CANVAS SCALED WITH CSS
	var miscaledCanvas = document.getElementById("miscaled-canvas");
	miscaledDrawingContext = miscaledCanvas.getContext("2d");
}

// GRID FOR DRAWING DEMO
function setGrid(){
	// begin vertical lines
	verticalIntervals = new Array();
	
	var num = 0
	
	while ( num < 1200 ) { 
	  verticalIntervals.push( num );
	  num += 10;
	}

	(verticalIntervals).forEach(
	  function(num){
	  	gridContext.strokeStyle = "gray";
	    gridContext.beginPath();
	    gridContext.moveTo(num, 0);
	    gridContext.lineTo(num, 1200);
	    gridContext.stroke();
	  }
	)
	// end vertical lines

	// being horizontal lines
	horizontalIntervals = new Array();
	var num = 0
	while ( num < 1200 ) { 
	  horizontalIntervals.push( num );
	  num += 10;
	}

	(horizontalIntervals).forEach(
	  function(num){
	  	gridContext.strokeStyle = "gray";
	    gridContext.beginPath()
	    gridContext.moveTo(0, num)
	    gridContext.lineTo(1200, num)
	    gridContext.stroke()
	  }
	)
	// end horizontal lines
}