$(function() {

	"use strict";

	// Masked input
	$("#date").mask("99/99/9999");
	$("#phone").mask("(999) 999-9999");
	$("#tin").mask("99-9999999");
	$("#product-key").mask("a*-999-a999");

	// Date and time picker
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker({
		pickDate: false
	});

	// WYSIWYG
	$('#editor').summernote({height: 300});
})