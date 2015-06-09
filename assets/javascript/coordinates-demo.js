function startAllCoordinates(e){
	coordinatePaint = true;

	// Record all starting points
	offsetStart = [e.offsetX, e.offsetY];
	pageStart = [e.pageX, e.pageY];
	clientStart = [e.clientX, e.clientY];
	screenStart = [e.screenX, e.screenY];
}

function drawAllCoordinates(e){
	if (coordinatePaint === true) {
		context.save();
		// offsetX, offsetY
		context.strokeStyle = "black";
		context.beginPath();
		context.moveTo(offsetStart[0], offsetStart[1]);
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();

		// clientX, clientY
		context.strokeStyle = 'green';
		context.beginPath();
		context.moveTo(clientStart[0], clientStart[1])
		context.lineTo(e.clientX, e.clientY);
		context.stroke();

		// pageX, pageY
		context.strokeStyle = 'red';
		context.beginPath();
		context.moveTo(pageStart[0], pageStart[1])
		context.lineTo(e.pageX, e.pageY);
		context.stroke();

		// screenX, screenY
		context.strokeStyle = 'blue';
		context.beginPath();
		context.moveTo(screenStart[0], screenStart[1])
		context.lineTo(e.screenX, e.screenY);
		context.stroke();
	}
}

function stopDrawingAllCoordinates(e){
	coordinatePaint = false;
}


function restorePrevious() {
	context.restore();
}
