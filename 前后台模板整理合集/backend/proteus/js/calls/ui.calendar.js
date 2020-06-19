/*  ==========================================================================
    Table of Content for Calendar:

    === Function ===
	- runCalendar

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runCalendar
    ========================================================================== */

    function runCalendar(calendar){

        /* External Events */
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

        /* Variables */
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var newEventModal    = $('#newEventModal'),
            newEventTitle    = $('#newEventTitle'),
            saveEvent        = $('#saveEvent'),

            updateEventModal = $('#updateEventModal'),
            updateEventTitle = $('#updateEventTitle'),
            updateEvent      = $('#updateEvent'),

            deleteEvent      = $('#deleteEvent');

        /* Calendar */
        var calendar = $(calendar).fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            //businessHours: true, // display business hours
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function(date) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                var $this = $(this);
                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.className = $this.data('calendar-class');

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }

            },
            selectable: true,
            selectHelper: true,
            select: function(start, end) {

                var eventTitle, eventData;
                newEventModal.modal();

                saveEvent.on('click',function(){

                    eventTitle = newEventTitle.val();

                    if (eventTitle) {
                        eventData = {
                            title: eventTitle,
                            start: start,
                            end: end
                        };
                        calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                        newEventModal.modal('hide');
                        newEventTitle.val('');
                        saveEvent.off('click');
                    }
                    calendar.fullCalendar('unselect');

                });

            },

            eventClick: function(calEvent, jsEvent, view) {
                updateEventModal.modal();

                var updateEventTitle = $('#updateEventTitle').val(calEvent.title);


                updateEvent.on('click',function(e){

                    calEvent.title = updateEventTitle.val();
                    calendar.fullCalendar('updateEvent', calEvent);
                    updateEventModal.modal('hide');
                    updateEvent.off('click');

                });

                deleteEvent.on('click', function() {
                    calendar.fullCalendar('removeEvents' , function(event){
                        return (event._id == calEvent._id);
                    })
                    updateEventModal.modal("hide");
                    updateEvent.off('click');
                });

            },
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, 07),
                    end: new Date(y, m, 10)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, 9)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, 16)
                },
                {
                    title: 'Conference',
                    start: new Date(y, m, 11),
                    end: new Date(y, m, 13)
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, 12, 10, 30, 00),
                    end: new Date(y, m, 12, 12, 30, 00),
                    className: 'ev-info'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, 12, 12, 00, 00),
                    className: 'ev-warning'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, 12, 14, 30, 00),
                    className: 'ev-info'
                },
                {
                    title: 'Happy Hour',
                    start: new Date(y, m, 12, 17, 25, 00),
                    className: 'ev-warning'
                },
                {
                    title: 'Dinner',
                    start: new Date(y, m, 12, 20, 00, 00),
                    className: 'ev-warning'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, 13, 07, 00, 00),
                    className: 'ev-warning'
                },
                {
                    title: 'Update Proteus',
                    start: new Date(y, m, 24, 17, 00, 00),
                    className: 'ev-danger'
                },
                {
                    title: 'Google Meeting',
                    start: new Date(y, m, 28),
                    className: 'ev-info'
                },
                {
                    title: 'Watch Walking Dead',
                    start: new Date(y, m, 29),
                    className: 'ev-success'
                }
            ]
        });


        newEventModal.on('shown.bs.modal', function () {
            newEventTitle.focus();
        });

        newEventModal.on('hidden.bs.modal', function (e) {
            saveEvent.off('click');
        })

        updateEventModal.on('shown.bs.modal', function () {
            updateEventTitle.focus();
        })

        updateEventModal.on('hidden.bs.modal', function () {
            updateEvent.off('click');
        })
    }



/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

	   	// Variables
		var calendar = '#calendar';

		// === Checkers ===

		// === Setters ===

		// === Executions ===

        runCalendar(calendar);

});