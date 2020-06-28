$(function() {

	"use strict";

	// Calendar
	var calendar = $("#calendar").calendar({
		tmpl_path: "/saltkin/calendar/",
		events_source: function () { return []; }
	});
	
	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.view($this.data('calendar-view'));
		});
	});

})