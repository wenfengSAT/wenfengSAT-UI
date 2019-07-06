//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//------------- Activate tabs -------------//
	$('#myTab a:first').tab('show'); // Select first tab
	$('#myTab2 a:first').tab('show'); // Select first tab
	$('#myTab4 a:first').tab('show'); // Select first tab

	//------------- Tab drop -------------//
	function tabdrop() {
		$('.tabdrop').tabdrop({
			text: '<i class="fa fa-align-justify"></i>'
		}).on("click", function(){
		    $(this).tabdrop('layout');
		});
	}
	$(window).on("load", function(){
	   tabdrop();
	});
	$(window).resize(tabdrop);
 	
});