$(function(){
	var $canvasContainer = $("#responsive-canvas-demo");
	var $canvas = $("#resizable-canvas");

	$(window).on("resize", function(){
		$canvas.attr('height', $canvasContainer.height());
		$canvas.attr('width', $canvasContainer.width());
	});

});

$(function(){
	enableCanvasDrawing("resizable-canvas", resizableCanvasContext);
});