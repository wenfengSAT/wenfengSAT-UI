$(function(){
	//Default
	$('#crop-default').Jcrop();

	//Event Handler
	$('#crop-handler').Jcrop({
		onChange: showCoords,
		onSelect: showCoords
	});
	function showCoords(c)
	{
		$('#x1').val(c.x);
		$('#y1').val(c.y);
		$('#x2').val(c.x2);
		$('#y2').val(c.y2);
		$('#w').val(c.w);
		$('#h').val(c.h);
	};

	// Both the tab-pane's have an active class because they need to be shown
	// as their height and width are being calculated and being put in panels,
	// once done, the second active class is removed and normal tab function resumes
	
	$('.active + .active').removeClass('active');

});