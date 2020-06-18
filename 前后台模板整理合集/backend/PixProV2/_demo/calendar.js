jQuery(document).ready(function($) {

	/* Create new event */
	$('.new-event').submit(function(){
		var form  = $(this);
		var event_type = $('select[name="event-type"]', form).val();
		var event_name = $('input[name="event-name"]', form).val();

		$('.event-list').append('<div class="event ' + event_type + '" data-type="' + event_type + '">' + event_name + '</div>');
		var last = $('.event:last-child', '.event-list');
		var eventObject = {
			title: $.trim($(last).text()),
			className: $(last).attr('data-type')
		};

		// store the Event Object in the DOM element so we can get to it later
		$(last).data('eventObject', eventObject);
		$(last).draggable({
			zIndex: 999,
			revert: true,      // will cause the event to go back to its
			revertDuration: 0  //  original position after the drag
		});
		return false;
	});


	/* initialize the external events
	 -----------------------------------------------------------------*/
	$('div.event', '#calendar-events').each(function() {
		// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
		// it doesn't need to have a start or end
		var eventObject = {
			title: $.trim($(this).text()), // use the element's text as the event title
			className: $(this).attr('data-type')
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
	$('#calendar').fullCalendar({
		header: {
			left: 'prev',
			center: 'title',
			right: 'next, month,agendaWeek,agendaDay'
		},
		editable: true,
		droppable: true, // this allows things to be dropped onto the calendar !!!
		drop: function(date, allDay) { // this function is called when something is dropped
			// retrieve the dropped element's stored Event Object
			var originalEventObject = $(this).data('eventObject');

			// we need to copy it, so that multiple events don't have a reference to the same object
			var copiedEventObject = $.extend({}, originalEventObject);

			// assign it the date that was reported
			copiedEventObject.start = date;
			copiedEventObject.allDay = allDay;

			$(copiedEventObject).addClass(originalEventObject.className);

			// render the event on the calendar
			// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

			// is the "remove after drop" checkbox checked?
			if ($('#drop-remove').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(this).remove();
			}

		}
	});


});