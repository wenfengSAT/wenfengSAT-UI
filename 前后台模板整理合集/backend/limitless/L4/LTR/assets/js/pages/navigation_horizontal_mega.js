/* ------------------------------------------------------------------------------
*
*  # Horizontal mega menu
*
*  Specific JS code additions for navigation_horizontal_mega.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Components
    // ------------------------------

    // Styled checkboxes and radios
    $(".styled").uniform();


	// Select2 select
	$('.select').select2({
	    minimumResultsForSearch: Infinity
	});


	// Switchery toggles
	var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
	elems.forEach(function(html) {
		var switchery = new Switchery(html);
	});
	
});
