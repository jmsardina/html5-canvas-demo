$(function(){
	var drawingPaint = false;
	var drawingCanvas = document.getElementById("drawing-canvas");
	var undoArray = [];
	var redoArray = [];
	var image = document.createElement("img");
	$(".eraser").on("click", toggleEraser);


	$("#main-workspace .undo").on("click", undo);
	$("#main-workspace .redo").on("click", redo);

	$("#drawing-canvas").on("mousedown", getStarted);
	$("#drawing-canvas").on("mousemove", draw);
	$("#drawing-canvas").on("mouseup", stopDrawing);

	function getStarted(e){
		drawingPaint = true;

		drawingContext.beginPath();
		drawingContext.moveTo( (e.pageX - $(e.target).offset().left), (e.pageY - $(e.target).offset().top) );
	}

	function draw(e){
		if( drawingPaint === true ){
			drawingContext.lineTo( (e.pageX - $(e.target).offset().left), (e.pageY - $(e.target).offset().top) );
			drawingContext.stroke();
		}
	}

	function stopDrawing(e){
		drawingPaint = false;
		recordHistory();
	}

	function recordHistory(){
		var dataURL = drawingCanvas.toDataURL();
		undoArray.push(dataURL);

		redoArray = [];	
	}

	function undo(){
		if(undoArray.length >= 1){
			var lastStroke = undoArray.pop();
			redoArray.unshift(lastStroke);
			clearCanvas("#drawing-canvas", "drawingContext");
		
			image.setAttribute("src", undoArray[undoArray.length-1]);
			drawingContext.drawImage(image, 0, 0);
		}
	}

	function redo(){
		if(redoArray.length >= 1){
			clearCanvas("#drawing-canvas", "drawingContext");

			undoArray.push(redoArray.shift())
			image.setAttribute("src", undoArray[undoArray.length-1]);
			drawingContext.drawImage(image, 0, 0);
		}
	}

	function toggleEraser(){
		if(drawingContext.globalCompositeOperation === "source-over" ){
			drawingContext.globalCompositeOperation = "destination-out";
			$(this).attr("style", "box-shadow: inset 0 0 0 3px #27496d;");
		} else {
			drawingContext.globalCompositeOperation = "source-over";
			$(this).attr("style", "");
		}
	}
});
