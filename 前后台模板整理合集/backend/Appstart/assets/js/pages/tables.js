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

	//------------- Check all checkboxes -------------//
	$('.table').checkAll({
		masterCheckbox: '.check-all',
		otherCheckboxes: '.check'
	})
	//------------- Hilight table rows on checkbox click -------------// 
	function tableHighlight () {
	    var table = $('.table');
	    var chboxes = table.find('input.check');

	    chboxes.on('ifChecked ifUnchecked', function(event) {        
	        if (event.type == 'ifChecked') {
	            $(this).closest('tr').addClass('highlight');
	        } else {
	            $(this).closest('tr').removeClass('highlight');
	        }
	    });
	}

	tableHighlight();
 	
});