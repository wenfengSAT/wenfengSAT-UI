/*global $*/
$(document).ready(function () {
    "use strict";

    var date = new Date(),
        d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();

    function initializeEvents() {
        $('#external-events div.external-event').each(function () {
            var eventObject = {
                title: $.trim($(this).find('.title').text()),
                url: $.trim($(this).find('.url').text()),
                borderColor: $.trim($(this).find('.borderColor').text()),
                backgroundColor: $.trim($(this).find('.backgroundColor').text())
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });

        });
    }

    //Initialize Events
    initializeEvents();

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function (date) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject'),
                // we need to copy it, so that multiple events don't have a reference to the same object
                copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            $(this).remove();

        },

        events: [
            {
                title: 'Board Meeting',
                start: new Date(y, m, 2, 14, 30),
                borderColor: 'green',
                backgroundColor: 'green'
            },
            {
                title: 'Product Redesign',
                start: new Date(y, m, 6, 10, 30)
            },
            {
                title: 'Lunch Meeting',
                start: new Date(y, m, 14),
                borderColor: 'orange',
                backgroundColor: 'orange'
            },
            {
                title: 'Client Meeting',
                start: new Date(y, m, 15),
                borderColor: 'purple',
                backgroundColor: 'purple'
            },
            {
                title: 'Team Meeting',
                start: new Date(y, m, 14, 16, 30),
                borderColor: 'green',
                backgroundColor: 'green'
            },
            {
                title: 'Client Meeting',
                start: new Date(y, m, 18),
                borderColor: 'purple',
                backgroundColor: 'purple'
            },
            {
                title: 'Lunch Meeting',
                start: new Date(y, m, 24),
                borderColor: 'orange',
                backgroundColor: 'orange'
            },
            {
                title: 'Client Meeting',
                start: new Date(y, m + 1, 15),
                borderColor: 'purple',
                backgroundColor: 'purple'
            },
            {
                title: 'Team Meeting',
                start: new Date(y, m + 1, 14, 16, 30),
                borderColor: 'green',
                backgroundColor: 'green'
            },
            {
                title: 'Client Meeting',
                start: new Date(y, m + 1, 18),
                borderColor: 'purple',
                backgroundColor: 'purple'
            },
            {
                title: 'Lunch Meeting',
                start: new Date(y, m + 1, 24),
                borderColor: 'orange',
                backgroundColor: 'orange'
            }
        ]
    });


    $("#eventInput").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#addEvent").click();
        }
    });

    $('#addEvent').on('click', function () {

        if ($('#eventInput').val().length > 0) {

            var event = '<div class="external-event"><span class="title">' + $('#eventInput').val() + '</span></div>';
            $('#external-events').append(event);
            $('#eventInput').val("");

            //Re-Initialize Events
            initializeEvents();

        }

    });

});