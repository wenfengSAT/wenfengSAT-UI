$(document).ready(function(){
	/* ---------- Placeholder Fix for IE ---------- */
	jQuery(document).ready(function($){
		$('input, textarea').placeholder();
	});

	/* ---------- Auto Height texarea ---------- */
	jQuery(document).ready(function($){
	    $('textarea').autosize();   
	});
});	