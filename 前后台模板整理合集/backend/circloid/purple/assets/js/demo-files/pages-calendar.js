////////////////////////////////
// Pages - Calendar Functions //
////////////////////////////////

"use strict";

$(document).ready(function(){
	/**
	 * circloidCalendar handles the calendar using Circloid's styling
	 * @param  {string} placeholder		id of graph
	 */
	function circloidCalendar(placeholder){

		/* Set Event Color In Dropdown List */
		$(placeholder).closest(".block").find(".calendar-controls .create-event .dropdown-menu .legend-block-item .legend-block-color-box, .calendar-controls .available-events .fc-event .legend-block-item .legend-block-color-box").each(function(){

			// Set variables 
			var eventColor = $(this).data("event-color");
			var highlightColor = "highlight-color-" + eventColor;
			var highlightColorIcon = "highlight-color-" + eventColor + "-icon";
			var bgColor = "bg-color-" + eventColor;

			// Set Dropdown Color
			$(this).addClass(bgColor);
		});

		/* Create Event */
		$("#add-available-event").on("click", function(){
			// Set variables
			var eventColorActive = $(this).siblings(".dropdown-menu").find(".legend-block-item.active .legend-block-color-box").data("event-color");
			var eventName = $(this).parent().siblings("#input-new-event").val().trim();
			$(this).parent().siblings("#input-new-event").val("");

			// Actual event creation
			if(eventName != ""){

				var newEventContent = "<div class='fc-event' style='opacity:0;'><div class='legend-block-item'><div class='legend-block-color'><div class='legend-block-color-box bg-color-" + eventColorActive + "' data-event-color='" + eventColorActive + "'></div></div><div class='legend-block-text'>" + eventName + "</div></div></div>";


				$(this).closest(".calendar-controls").find(".available-events .event-list").prepend(newEventContent);

				$(this).closest(".calendar-controls").find(".available-events .fc-event").first().delay(200).animate({"opacity":"1"}, 300);

				$(this).closest(".block").find('.calendar-controls .fc-event').each(function(){

					var thisEventColor = $(this).find(".legend-block-color-box").data("event-color");

					// create an Event Object
			        // it doesn't need to have a start or end
			        var eventObject = {
			            title: $.trim($(this).text()), // use the element's text as the event title
						className: "bg-color-" + thisEventColor, // use the element's text as the event title
			        };

			        // store the Event Object in the DOM element so we can get to it later
			        $(this).data('event', eventObject);

			        // make the event draggable using jQuery UI
			        $(this).draggable({
			            zIndex: 999,
			            revert: true, // will cause the event to go back to its
			            revertDuration: 0 //  original position after the drag
			        });
				});

			}else{
				$("#input-new-event").focus();
			}
		});

		/* Call Functions getActiveColor() */
		// Set Event Colors
		getActiveColor();

		/* Set Active Icon Color */
		/**
		 * getActiveColor handles the selected colors
		 */
		function getActiveColor(){
			var eventColorActive = $(placeholder).closest(".block").find(".calendar-controls .create-event .dropdown-menu .legend-block-item.active .legend-block-color-box").data("event-color");

			// Set data-event-color. Then create the highlight class
			var theButton = $(placeholder).closest(".block").find(".calendar-controls .create-event .dropdown-toggle");
			// theButton.attr("data-event-color",eventColorActive);
			theButton.addClass("highlight-color-" + eventColorActive + "-icon");

			// Change the active icon color on click
			var listItem = $(placeholder).closest(".block").find(".calendar-controls .create-event .dropdown-menu .legend-block-item");

			listItem.on("click", function(){
				var newEventColor = $(this).find(".legend-block-color-box").data("event-color");

				var regex = new RegExp('\\b' + 'highlight-color-' + '.+?\\b' + '-icon', 'g');
				theButton[0].className = theButton[0].className.replace(regex, '');

				theButton.addClass("highlight-color-" + newEventColor + "-icon");

				// Remove active class from siblings then add to this item
				$(this).siblings().removeClass("active");
				$(this).addClass("active");
				$("#input-new-event").focus();
			});
		}


		/* Initialize the external events */
		$(placeholder).closest(".block").find('.calendar-controls .fc-event').each(function() {

			var thisEventColor = $(this).find(".legend-block-color-box").data("event-color");

			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				className: "bg-color-" + thisEventColor, // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});

		});


		/* Initialize the calendar */
		$(placeholder).fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2014-11-12',
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2014-11-01',
					className: "bg-color-red"
				},
				{
					title: 'Long Event',
					start: '2014-11-07',
					end: '2014-11-10',
					className: "bg-color-yellow"
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2014-11-09T16:00:00',
					color: "#ff0097"
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2014-11-16T16:00:00',
					className: "bg-color-purple"
				},
				{
					title: 'Conference',
					start: '2014-11-11',
					end: '2014-11-13',
					className: "bg-color-green"
				},
				{
					title: 'Meeting',
					start: '2014-11-12T10:30:00',
					end: '2014-11-12T12:30:00',
					className: "bg-color-green"
				},
				{
					title: 'Lunch',
					start: '2014-11-12T12:00:00',
					color: "#6ec06e"
				},
				{
					title: 'Meeting',
					start: '2014-11-12T14:30:00',
					className: "bg-color-red"
				},
				{
					title: 'Happy Hour',
					start: '2014-11-12T17:30:00',
					className: "bg-color-red"
				},
				{
					title: 'Dinner',
					start: '2014-11-12T20:00:00',
					className: "bg-color-blue"
				},
				{
					title: 'Birthday Party',
					start: '2014-11-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2014-11-28'
				}
			],
			drop: function() {
				$(this).remove();
			}
		});
	}

	/* Call Function */
	circloidCalendar("#calendar");
});