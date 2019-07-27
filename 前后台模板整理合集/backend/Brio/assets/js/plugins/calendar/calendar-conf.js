(function($) {

	"use strict";

	var options = {
		events_source: 'assets/js/plugins/calendar/events.json.php',
		view: 'month',
		tmpl_path: 'assets/js/plugins/calendar/tmpls/',
		tmpl_cache: false,
		day: '2013-03-12',
		onAfterEventsLoad: function(events) {
			if(!events) {
				return;
			}
			var list = $('#eventlist');
			list.html('');

			$.each(events, function(key, val) {
				$(document.createElement('li'))
					.html('<a href="' + val.url + '">' + val.title + '</a>')
					.appendTo(list);
			});
		},
		onAfterViewLoad: function(view) {
			$('.calender-title').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('button[data-calendar-view="' + view + '"]').addClass('active');
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var calendar = $('#calendar').calendar(options);

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

	$('#first_day').change(function(){
		var value = $(this).val();
		value = value.length ? parseInt(value) : null;
		calendar.setOptions({first_day: value});
		calendar.view();
	});

	$('#language').change(function(){
		calendar.setLanguage($(this).val());
		calendar.view();
	});

	$('#events-in-modal').change(function(){
		var val = $(this).is(':checked') ? $(this).val() : null;
		calendar.setOptions({modal: val});
	});
	$('#events-modal .modal-header, #events-modal .modal-footer').click(function(e){
		//e.preventDefault();
		//e.stopPropagation();
	});
	
	
	
	$('.add-calendar-event').click(function(){
		
		var calendarEventName = $('.calendar-event-name').val();
		
		var dateTime = new Date();
		
		var hr = dateTime.getHours();
		var mins = dateTime.getMinutes();  
		
		if(calendarEventName == ''){
			alert('Event name can’t be blank')
		}
		
		else{
		$('.calendar-events-ctrl').before('\
							<h5 class="no-margn"><a href="#" class="text-muted"><strong>'+calendarEventName+'</strong></a></h5>\
                            <p><small>at '+hr+':'+mins+'</small></p>\
                            <hr>')
		}
	});
	
	
	
}(jQuery));