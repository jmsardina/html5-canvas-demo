function changeViews(){
	$("#main-workspace").toggleClass("hidden");
	$(".coordinates-demo").toggleClass("hidden");	
}

function clearCanvas(canvasId, context){
	eval(context).clearRect(0, 0, $(canvasId).width(), $(canvasId).height());

}
