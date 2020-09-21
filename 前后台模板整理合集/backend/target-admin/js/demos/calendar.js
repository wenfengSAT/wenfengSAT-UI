$(function () {
  
  var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $('#full-calendar').fullCalendar({
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      droppable: true,
      drop: function(date, allDay) { // this function is called when something is dropped
      
        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject');
        
        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);
        
        // assign it the date that was reported
        copiedEventObject.start = date;
        copiedEventObject.allDay = allDay;
        copiedEventObject.className = $(this).attr("data-category");
        
        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#full-calendar').fullCalendar('renderEvent', copiedEventObject, true);
        
        // is the "remove after drop" checkbox checked?
        //if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        //}
        
      },

      events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1),
          end: new Date (y, m, 2),
          className: 'fc-red'
        },
        {
          title: 'Long Event',
          start: new Date(y, m, d-5),
          end: new Date(y, m, d-2),
          className: 'fc-yellow'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d-3, 16, 0),
          allDay: false,
          className: 'fc-grey'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d+1, 14, 0),
          end: new Date(y, m, d+3, 14, 0),
          allDay: false,
          className: 'fc-charcoal'
        },
        {
          title: 'Meeting',
          start: new Date(y, m, d-13, 10, 30),
          end: new Date (y,m,d-11, 10,30),
          allDay: false,
          className: 'fc-grey'
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false,
          className: 'fc-red'
        }
      ]
    });




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


  var addEvent = function (title, category) {
        title = title.length == 0 ? "Untitled Event" : title;
        category = category.length == 0 ? 'fc-secondary' : category;
        var html = $('<div data-category="' + category + '" class="external-event ui-draggable label ' + category + '">' + title + '</div>');
        jQuery('#event_box').append(html);
        initDrag(html);
    }

    $('#event-form').unbind('submit').submit(function (e) {
    e.preventDefault ();
    var title = $('#event_title');
    var category = $('#event_category');
    addEvent(title.val(), category.val ());
    title.val ('');
  });

    var initDrag = function (el) {
        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim(el.text()) // use the element's text as the event title
        };
        // store the Event Object in the DOM element so we can get to it later
        el.data('eventObject', eventObject);
        // make the event draggable using jQuery UI
        el.draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
        });
    }

});