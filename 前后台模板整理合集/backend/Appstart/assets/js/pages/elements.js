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

	//------------- Carousel -------------//
	$('.carousel').carousel();
 	
});