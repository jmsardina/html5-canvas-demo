function startErasing(){
	if( context.globalCompositeOperation === "source-over" ){
		context.globalCompositeOperation = "destination-out";
		drawingContext.globalCompositeOperation = "destination-out";
		$(this).attr("style", "box-shadow: inset 0 0 0 3px #27496d;");
	} else {
		context.globalCompositeOperation = "source-over";
		drawingContext.globalCompositeOperation = "source-over";
		$(this).attr("style", "");
	}
}

function changeViews(){
	$("#main-workspace").toggleClass("hidden");
	$(".coordinates-demo").toggleClass("hidden");	
}

	function recordHistory(){
		var canvas = document.getElementById("drawing-canvas");
		var dataURL = canvas.toDataURL();
		undoArray.push(dataURL);
	}

// function undo(){
//     if( undoArray.length >= 1 ){
//       drawingContext.clearRect(0, 0, $("#drawing-canvas").width(), $("#drawing-canvas").height());
//       var image = document.createElement("img");
   
//       image.setAttribute("src", undoArray.pop());
//       drawingContext.drawImage(image, 0, 0);
//     }
// }


// function undo(){
//     if ( (redoArray.length === 0) & (undoArray.length >= 1) ){
//       var canvas = document.getElementById("drawing-canvas");
//       var dataURL = canvas.toDataURL();
//       redoArray.unshift(dataURL);
//     }

//     if(undoArray.length >= 1){
//       drawingContext.clearRect(0, 0, $("#drawing-canvas").width(), $("#drawing-canvas").height());
//       var image = document.createElement("img");
   
//       redoArray.unshift(undoArray.pop());
//       image.setAttribute("src", redoArray[0]);
//       drawingContext.drawImage(image, 0, 0);
//     }
// }

function undo(){
    if( undoArray.length >= 1 ){
      drawingContext.clearRect(0, 0, $("#drawing-canvas").width(), $("#drawing-canvas").height());
      var image = document.createElement("img");
   
      redoArray.unshift(undoArray.pop());
      image.setAttribute("src", redoArray[0]);
      drawingContext.drawImage(image, 0, 0);
    }
}

function redo(){
	if( redoArray.length >= 1 ){
	  drawingContext.clearRect(0, 0, $("#drawing-canvas").width, $("#drawing-canvas").height);
	  var image = document.createElement("img");

	  undoArray.push(redoArray.shift())
	  image.setAttribute("src", undoArray[undoArray.length-1]);
	  drawingContext.drawImage(image, 0, 0);
	}
}

