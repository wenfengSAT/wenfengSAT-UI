/* ------------------------------------------------------------------------------
*
*  # Basic form inputs
*
*  Specific JS code additions for form_input_basic.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

	// Default file input style
	$(".file-styled").uniform({
		fileButtonHtml: '<i class="icon-plus2"></i>'
	});


	// Primary file input
	$(".file-styled-primary").uniform({
		wrapperClass: 'bg-warning',
		fileButtonHtml: '<i class="icon-plus2"></i>'
	});

});
