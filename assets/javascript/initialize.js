$(function(){
	$('.show-drawing-demo').on('click', function(){
		$("#main-workspace").removeClass("hidden");
		$(".coordinates-demo").addClass('hidden');
		$("#responsive-canvas-demo").addClass('hidden');
	});

	$('.show-coordinates-demo').on('click', function(){
		$('.coordinates-demo').removeClass('hidden');
		$("#main-workspace").addClass('hidden');
		$("#responsive-canvas-demo").addClass('hidden');

	});

	$('.show-responsive-canvas').on('click', function(){
		$('#responsive-canvas-demo').removeClass('hidden');
		$('#main-workspace').addClass('hidden');
		$('.coordinates-demo').addClass('hidden');

	});
});
