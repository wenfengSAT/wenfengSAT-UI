$(document).ready(function(){
	
	/* ---------- Text editor ---------- */
	$('.cleditor').cleditor();

	/* ---------- Datapicker ---------- */
	$('.date-picker').datepicker();

	/* ---------- Choosen ---------- */
	$('[data-rel="chosen"],[rel="chosen"]').chosen();

	/* ---------- Placeholder Fix for IE ---------- */
	$('input, textarea').placeholder();

	/* ---------- Auto Height texarea ---------- */
	$('textarea').autosize();
	
	/* ---------- Masked Input ---------- */
	$("#date").mask("99/99/9999");
	$("#phone").mask("(999) 999-9999");
	$("#tin").mask("99-9999999");
	$("#ssn").mask("999-99-9999");
	
	$.mask.definitions['~']='[+-]';
	$("#eyescript").mask("~9.99 ~9.99 999");
	
	/* ---------- Textarea with limits ---------- */
	$('#limit').inputlimiter({
		limit: 10,
		limitBy: 'words',
		remText: 'You only have %n word%s remaining...',
		limitText: 'Field limited to %n word%s.'
	});
	
	/* ---------- Timepicker for Bootstrap ---------- */
	$('#timepicker1').timepicker();
	
	/* ---------- DateRangepicker for Bootstrap ---------- */
	$('#daterange').daterangepicker();
	
	/* ---------- Bootstrap Wysiwig ---------- */
	$('.editor').wysiwyg();
	
	/* ---------- Colorpicker for Bootstrap ---------- */
	$('#colorpicker1').colorpicker();
	
});