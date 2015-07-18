function clearCanvas(canvasId, context){
	eval(context).clearRect(0, 0, $(canvasId).width(), $(canvasId).height());
}

function enableCanvasDrawing(canvasId, canvasContext){
	var paint = false;
	var image = document.createElement("img");
	var undoArray = [];
	var redoArray = [];
	var context = eval(canvasContext);
	var $canvas = $("#" + canvasId);
	var canvasSelector = "#" + canvasId;

	$(".undo").on("click", undo);
	$(".redo").on("click", redo);
	$(".eraser").on("click", toggleEraser);
	
	var canvas = document.getElementById(canvasId);
		canvas.addEventListener("touchstart", startDrawing);
		canvas.addEventListener("touchmove", keepDrawing);
		canvas.addEventListener("touchend", stopDrawing);

	$canvas.on("mousedown", startDrawing);
	$canvas.on("mousemove", keepDrawing);
	$canvas.on("mouseup", stopDrawing);

	function startDrawing(e){
		paint = true;
		var xPosition = e.pageX - $(e.target).offset().left;
		var yPosition = e.pageY - $(e.target).offset().top;

		context.beginPath();
		context.moveTo( xPosition, yPosition );
	}

	function keepDrawing(e){
		if( paint === true ){
			var xPosition = e.pageX - $(e.target).offset().left;
			var yPosition = e.pageY - $(e.target).offset().top;

			context.lineTo( xPosition, yPosition );
			context.stroke();
		}
	}

	function stopDrawing(e){
		paint = false;
		recordHistory();
	}

	function recordHistory(){
		var dataURL = canvas.toDataURL();
		undoArray.push(dataURL);

		redoArray = [];	
	}

	function undo(){
		if(undoArray.length >= 1){
			var lastStroke = undoArray.pop();
			redoArray.unshift(lastStroke);
			clearCanvas(canvasSelector, context);
		
			image.setAttribute("src", undoArray[undoArray.length-1]);
			context.drawImage(image, 0, 0);
		}
	}

	function redo(){
		if(redoArray.length >= 1){
			clearCanvas(canvasSelector, context);

			undoArray.push(redoArray.shift())
			image.setAttribute("src", undoArray[undoArray.length-1]);
			context.drawImage(image, 0, 0);
		}
	}

	function toggleEraser(){
		if(context.globalCompositeOperation === "source-over" ){
			context.globalCompositeOperation = "destination-out";
			$(this).attr("style", "box-shadow: inset 0 0 0 3px #27496d;");
		} else {
			context.globalCompositeOperation = "source-over";
			$(this).attr("style", "");
		}
	}
}

