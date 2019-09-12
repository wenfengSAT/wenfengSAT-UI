//------------- calendar.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	/* initialize the external events
		-----------------------------------------------------------------*/
	
	$('#external-events div.external-event').each(function() {

		// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
		// it doesn't need to have a start or end
		var eventObject = {
			title: $.trim($(this).text()) // use the element's text as the event title
		};

		// store the Event Object in the DOM element so we can get to it later
		$(this).data('eventObject', eventObject);

		// make the event draggable using jQuery UI
		$(this).draggable({
			zIndex: 999,
			revert: true,      // will cause the event to go back to its
			revertDuration: 0  //  original position after the drag
		});

	});


	/* initialize the calendar
		-----------------------------------------------------------------*/

	var $calendar = $('#calendar');
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	$calendar.fullCalendar({
		header: {
			left: 'title',
			right: 'prev,today,next,basicDay,basicWeek,month'
		},
		timeFormat: 'h:mm',
		titleFormat: {
			month: 'MMMM YYYY',      // September 2009
		    week: "MMM d YYYY",      // Sep 13 2009
		    day: 'dddd, MMM d, YYYY' // Tuesday, Sep 8, 2009
		},
		editable: true,
		droppable: true, // this allows things to be dropped onto the calendar !!!
		drop: function(date, allDay) { // this function is called when something is dropped
			var $externalEvent = $(this);
			// retrieve the dropped element's stored Event Object
			var originalEventObject = $externalEvent.data('eventObject');

			// we need to copy it, so that multiple events don't have a reference to the same object
			var copiedEventObject = $.extend({}, originalEventObject);

			// assign it the date that was reported
			copiedEventObject.start = date;
			copiedEventObject.allDay = allDay;
			copiedEventObject.className = $externalEvent.attr('data-event-class');
			copiedEventObject.icon = $externalEvent.attr('data-icon');

			// render the event on the calendar
			// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

			// is the "remove after drop" checkbox checked?
			if ($('#remove-drop').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(this).remove();
			}

		},
		events: [
			{
				title: 'All Day Event',
				start: new Date(y, m, 1)
			},
			{
				title: 'Long Event',
				start: new Date(y, m, d-5),
				end: new Date(y, m, d-2)
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false,
				className: 'fc-event-default',
				icon: 'fa fa-repeat'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false,
				className: 'fc-event-default',
				icon: 'fa fa-repeat'
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d, 10, 30),
				allDay: false,
				className: 'fc-event-default',
				icon: 'fa fa-clock-o'
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false,
				className: 'fc-event-danger'
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false,
				className: 'fc-event-success'
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/',
				className: 'fc-event-info',
				icon: 'fa fa-link'
			}
		],
		eventRender: function(event, eventElement) {
			if (event.icon) {
				eventElement.find("div.fc-content").prepend("<i class='" + event.icon +"'>");
			}
		}
	});

	var initDrag = function(el) {
        var eventObject = {
            title: $.trim(el.text())
        };
        el.data('eventObject', eventObject);
        el.draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
        });
    };

    var addEvent = function(title, state, icon) {
    	var label;
    	if (state == 'fc-event-default') {
    		label = 'label-default';
    	}
    	if (state == 'fc-event-success') {
    		label = 'label-success';
    	}
    	if (state == 'fc-event-danger') {
    		label = 'label-danger';
    	}
    	if (state == 'fc-event-info') {
    		label = 'label-info';
    	}
    	if (state == 'fc-event-warning') {
    		label = 'label-warning';
    	}
        title = title.length === 0 ? "Untitled Event" : title;
        icon = icon.length === 0 ? "fa fa-calendar" : icon;
        var html = $('<div class="external-event label '+ label +'" data-event-class="'+ state +'" data-icon="'+ icon +'"><i class="'+ icon +'"></i>' + title + '</div>');
        $('#external-events').prepend(html);
        initDrag(html);
    };

    $('#add-event').unbind('click').click(function() {
        var title = $('#event-title').val();
        var state = $('#event-state').val();
        var icon = $('#event-icon').val();
        addEvent(title, state, icon);
    });


	//make looks good in bootstrap
	var $calendarbtn = $calendar.find('.fc-button-group > button ');
	$calendarbtn
		.slice(0,3)
			.wrapAll('<div class="btn-group mr10"></div>')
			.parent()
			.after('<br class="hidden"/>');

	$calendarbtn
		.slice(3,6)
			.wrapAll('<div class="btn-group"></div>');

	$calendarbtn.attr({ 'class': 'btn btn-sm btn-default' });
	
	//force to reajust size on page load because full calendar some time not get right size.
	$(window).load(function(){
		$('#calendar').fullCalendar('render');
	});

	//------------- Fancy select -------------//
	$('.fancy-select').fancySelect();
});