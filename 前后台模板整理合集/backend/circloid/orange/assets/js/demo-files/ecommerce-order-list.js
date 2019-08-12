//////////////////////////
// eCommerce Order List //
//////////////////////////

"use strict";

$(document).ready(function(){

	/**
	 * circloidFilterDates handles the filter Date Added and Date Modified in the filter list
	 */
	function circloidFilterDates(){

		/* "Date Added" Search Calender Picker */
		var daStartDate = $('#date-added-from');
		var daEndDate = $('#date-added-to');

		daStartDate.datetimepicker();
		daEndDate.datetimepicker();
		daStartDate.on("dp.change",function(e) {
			daEndDate.data("DateTimePicker").setMinDate(e.date);
		});
		daEndDate.on("dp.change",function(e) {
			daStartDate.data("DateTimePicker").setMaxDate(e.date);
		});

		/* "Date Modified" Search Calender Picker */
		var dmStartDate = $('#date-modified-from');
		var dmEndDate = $('#date-modified-to');

		dmStartDate.datetimepicker();
		dmEndDate.datetimepicker();
		dmStartDate.on("dp.change",function(e) {
			dmEndDate.data("DateTimePicker").setMinDate(e.date);
		});
		dmEndDate.on("dp.change",function(e) {
			dmStartDate.data("DateTimePicker").setMaxDate(e.date);
		});
	}

	/* Call Function: circloidFilterDates() */
	circloidFilterDates();
});