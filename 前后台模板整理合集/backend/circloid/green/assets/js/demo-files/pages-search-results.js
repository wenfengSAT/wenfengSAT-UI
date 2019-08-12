//////////////////////////
// Pages Search Results //
//////////////////////////

"use strict";

$(document).ready(function(){

	/* Show Advanced Form */
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */
	// Add iCheck to Radio and Checkbox	
	$("#data-search-form").iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});

	// Open/Close Advanced options if Checked/Unchecked
	$("#input-data-search-form-advanced-search").on('ifChecked', function(event){
		$("#data-search-form-advanced-search td").slideDown(200);
	});
	$("#input-data-search-form-advanced-search").on('ifUnchecked', function(event){
		$("#data-search-form-advanced-search td").slideUp(200);
	});


	/* "D.O.B." Search Calender Picker */
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */
	var daStartDate = $('#date-added-from');
	var daEndDate = $('#date-added-to');

	daStartDate.datetimepicker({
		pickTime: false
	});
	daEndDate.datetimepicker({
		pickTime: false
	});
	daStartDate.on("dp.change",function(e) {
		daEndDate.data("DateTimePicker").setMinDate(e.date);
	});
	daEndDate.on("dp.change",function(e) {
		daStartDate.data("DateTimePicker").setMaxDate(e.date);
	});
});