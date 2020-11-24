/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable 
 * events and events creations
 =========================================================*/

(function($, window, document){
  'use strict';

  if(!$.fn.fullCalendar) return;

  // global shared var to know what we are dragging
  var draggingEvent = null;


  /**
   * ExternalEvent object
   * @param jQuery Object elements Set of element as jQuery objects
   */
  var ExternalEvent = function (elements) {
      
      if (!elements) return;
      
      elements.each(function() {
          var $this = $(this);
          // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
          // it doesn't need to have a start or end
          var calendarEventObject = {
              title: $.trim($this.text()) // use the element's text as the event title
          };

          // store the Event Object in the DOM element so we can get to it later
          $this.data('calendarEventObject', calendarEventObject);

          // make the event draggable using jQuery UI
          $this.draggable({
              zIndex: 1070,
              revert: true, // will cause the event to go back to its
              revertDuration: 0  //  original position after the drag
          });

      });
  };

  /**
   * Invoke full calendar plugin and attach behavior
   * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
   * @param  EventObject [events] An object with the event list to load when the calendar displays
   */
  function initCalendar(calElement, events) {

      // check to remove elements from the list
      var removeAfterDrop = $('#remove-after-drop');

      calElement.fullCalendar({
          header: {
              left:   'prev,next today',
              center: 'title',
              right:  'month,agendaWeek,agendaDay'
          },
          buttonIcons: { // note the space at the beginning
              prev:    ' fa fa-caret-left',
              next:    ' fa fa-caret-right'
          },
          buttonText: {
              today: 'today',
              month: 'month',
              week:  'week',
              day:   'day'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar 
          drop: function(date, allDay) { // this function is called when something is dropped
              
              var $this = $(this),
                  // retrieve the dropped element's stored Event Object
                  originalEventObject = $this.data('calendarEventObject');

              // if something went wrong, abort
              if(!originalEventObject) return;

              // clone the object to avoid multiple events with reference to the same object
              var clonedEventObject = $.extend({}, originalEventObject);

              // assign the reported date
              clonedEventObject.start = date;
              clonedEventObject.allDay = allDay;
              clonedEventObject.backgroundColor = $this.css('background-color');
              clonedEventObject.borderColor = $this.css('border-color');

              // render the event on the calendar
              // the last `true` argument determines if the event "sticks" 
              // (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
              calElement.fullCalendar('renderEvent', clonedEventObject, true);
              
              // if necessary remove the element from the list
              if(removeAfterDrop.is(':checked')) {
                $this.remove();
              }
          },
          eventDragStart: function (event, js, ui) {
            draggingEvent = event;
          },
          // This array is the events sources
          events: events
      });
  }

  /**
   * Inits the external events panel
   * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
   */
  function initExternalEvents(calElement){
    // Panel with the external events list
    var externalEvents = $('.external-events');

    // init the external events in the panel
    new ExternalEvent(externalEvents.children('div'));

    // External event color is danger-red by default
    var currColor = '#f6504d';
    // Color selector button
    var eventAddBtn = $('.external-event-add-btn');
    // New external event name input
    var eventNameInput = $('.external-event-name');
    // Color switchers
    var eventColorSelector = $('.external-event-color-selector .point');

    // Trash events Droparea 
    $('.external-events-trash').droppable({
      accept:       '.fc-event',
      activeClass:  'active',
      hoverClass:   'hovered',
      tolerance:    'touch',
      drop: function(event, ui) {
        
        // You can use this function to send an ajax request
        // to remove the event from the repository
        
        if(draggingEvent) {
          var eid = draggingEvent.id || draggingEvent._id;
          // Remove the event
          calElement.fullCalendar('removeEvents', eid);
          // Remove the dom element
          ui.draggable.remove();
          // clear
          draggingEvent = null;
        }
      }
    });

    eventColorSelector.click(function(e) {
        e.preventDefault();
        var $this = $(this);

        // Save color
        currColor = $this.css('background-color');
        // De-select all and select the current one
        eventColorSelector.removeClass('selected');
        $this.addClass('selected');
    });

    eventAddBtn.click(function(e) {
        e.preventDefault();
        
        // Get event name from input
        var val = eventNameInput.val();
        // Dont allow empty values
        if ($.trim(val) === '') return;
        
        // Create new event element
        var newEvent = $('<div/>').css({
                            'background-color': currColor,
                            'border-color':     currColor,
                            'color':            '#fff'
                        })
                        .html(val);

        // Prepends to the external events list
        externalEvents.prepend(newEvent);
        // Initialize the new event element
        new ExternalEvent(newEvent);
        // Clear input
        eventNameInput.val('');
    });
  }

  /**
   * Creates an array of events to display in the first load of the calendar
   * Wrap into this function a request to a source to get via ajax the stored events
   * @return Array The array with the events
   */
  function createDemoEvents() {
    // Date for the calendar events (dummy data)
    var date = new Date();
    var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();

    return  [
              {
                  title: 'All Day Event',
                  start: new Date(y, m, 1),
                  backgroundColor: '#f56954', //red 
                  borderColor: '#f56954' //red
              },
              {
                  title: 'Long Event',
                  start: new Date(y, m, d - 5),
                  end: new Date(y, m, d - 2),
                  backgroundColor: '#f39c12', //yellow
                  borderColor: '#f39c12' //yellow
              },
              {
                  title: 'Meeting',
                  start: new Date(y, m, d, 10, 30),
                  allDay: false,
                  backgroundColor: '#0073b7', //Blue
                  borderColor: '#0073b7' //Blue
              },
              {
                  title: 'Lunch',
                  start: new Date(y, m, d, 12, 0),
                  end: new Date(y, m, d, 14, 0),
                  allDay: false,
                  backgroundColor: '#00c0ef', //Info (aqua)
                  borderColor: '#00c0ef' //Info (aqua)
              },
              {
                  title: 'Birthday Party',
                  start: new Date(y, m, d + 1, 19, 0),
                  end: new Date(y, m, d + 1, 22, 30),
                  allDay: false,
                  backgroundColor: '#00a65a', //Success (green)
                  borderColor: '#00a65a' //Success (green)
              },
              {
                  title: 'Open Google',
                  start: new Date(y, m, 28),
                  end: new Date(y, m, 29),
                  url: 'http://google.com/',
                  backgroundColor: '#3c8dbc', //Primary (light-blue)
                  borderColor: '#3c8dbc' //Primary (light-blue)
              }
          ];
  }

  // When dom ready, init calendar and events
  $(function() {

      // The element that will display the calendar
      var calendar = $('#calendar');

      var demoEvents = createDemoEvents();

      initExternalEvents(calendar);

      initCalendar(calendar, demoEvents);

  });


}(jQuery, window, document));



/**=========================================================
 * Module: classy-loader.js
 * Enable use of classyloader directly from data attributes
 =========================================================*/

(function($, window, document){
  'use strict';

  var Selector        = '[data-toggle="classyloader"]',
      $scroller       = $(window),
      inViewFlagClass = 'js-is-in-view'; // a classname to detect when a chart has been triggered after scroll

  $(Selector).each(function (e) {

      var $element = $(this),
          options  = $element.data();

      // At lease we need a data-percentage attribute
      if(options) {
        if( options.triggerInView ) {

          $scroller.scroll(function() {
            var offset = 0;
            if( ! $element.hasClass(inViewFlagClass) &&
                $.Utils.isInView($element, {topoffset: offset}) ) {
              $element.ClassyLoader(options).addClass(inViewFlagClass);
            }
          });

        }
        else
          $element.ClassyLoader(options);
      }

  });

}(jQuery, window, document));

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function($, window, document){
  'use strict';

  if( !store || !store.enabled ) return;

  var Selector = '[data-toggle="reset"]';

  $(document).on('click', Selector, function (e) {
      e.preventDefault();
      var key = $(this).data('key');

      if(key) {
        store.remove(key);
      }
      else {
        var shouldClear = confirm("This action will restore the current app state.");
        if (shouldClear == true) {
          store.clear();
        }
      }

      // at last, reload the page
      window.location.reload();

  });

}(jQuery, window, document));

/**=========================================================
 * Module: datepicker,js
 * DateTime Picker init
 =========================================================*/

(function($, window, document){
  'use strict';

  $(function(){

    if ( ! $.fn.dataTable ) return;

    //
    // Zero configuration
    // 

    $('#datatable1').dataTable({
        'paging':   true,  // Table pagination
        'ordering': true,  // Column ordering 
        'info':     true,  // Bottom left status text
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        oLanguage: {
            sSearch:      'Search all columns:',
            sLengthMenu:  '_MENU_ records per page',
            info:         'Showing page _PAGE_ of _PAGES_',
            zeroRecords:  'Nothing found - sorry',
            infoEmpty:    'No records available',
            infoFiltered: '(filtered from _MAX_ total records)'
        }
    });


    // 
    // Filtering by Columns
    // 

    var dtInstance2 = $('#datatable2').dataTable({
        'paging':   true,  // Table pagination
        'ordering': true,  // Column ordering 
        'info':     true,  // Bottom left status text
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        oLanguage: {
            sSearch:      'Search all columns:',
            sLengthMenu:  '_MENU_ records per page',
            info:         'Showing page _PAGE_ of _PAGES_',
            zeroRecords:  'Nothing found - sorry',
            infoEmpty:    'No records available',
            infoFiltered: '(filtered from _MAX_ total records)'
        }
    });
    var inputSearchClass = 'datatable_input_col_search';
    var columnInputs = $('tfoot .'+inputSearchClass);

    // On input keyup trigger filtering
    columnInputs
      .keyup(function () {
          dtInstance2.fnFilter(this.value, columnInputs.index(this));
      });


    // 
    // Column Visibilty Extension
    // 

    $('#datatable3').dataTable({
        'paging':   true,  // Table pagination
        'ordering': true,  // Column ordering 
        'info':     true,  // Bottom left status text
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        oLanguage: {
            sSearch:      'Search all columns:',
            sLengthMenu:  '_MENU_ records per page',
            info:         'Showing page _PAGE_ of _PAGES_',
            zeroRecords:  'Nothing found - sorry',
            infoEmpty:    'No records available',
            infoFiltered: '(filtered from _MAX_ total records)'
        },
        sDom:      'C<"clear">lfrtip',
        colVis: {
            order: 'alfa',
            'buttonText': 'Show/Hide Columns'
        }
    });


  });

}(jQuery, window, document));

/**=========================================================
 * Module: datepicker,js
 * DateTime Picker init
 =========================================================*/

(function($, window, document){
  'use strict';

  var Selector = '.datetimepicker';

  $(Selector).each(function() {

    var $this = $(this),
        options = $this.data(); // allow to set options via data-* attributes
    
    $this.datetimepicker($.extend(
      options,
      { // support for FontAwesome icons
        icons: {
            time:   'fa fa-clock-o',
            date:   'fa fa-calendar',
            up:     'fa fa-arrow-up',
            down:   'fa fa-arrow-down'
        }
      }));

    // Force a dropdown hide when click out of the input
    $(document).on('click', function(){
      $this.data('DateTimePicker').hide();
    });

  });

}(jQuery, window, document));

/**=========================================================
 * Module: dropdown-animate.js
 * Animated transition for dropdown open state
 * Animation name placed in [data-play="animationName"]  (http://daneden.github.io/animate.css/)
 * Optionally add [data-duration=seconds]
 * 
 * Requires animo.js
 =========================================================*/

(function($, window, document){
  'use strict';

  $(function() {
    var Selector = '.dropdown-toggle[data-play]',
        parent = $(Selector).parent(); /* From BS-Doc: All dropdown events are fired at the .dropdown-menu's parent element. */

    parent.on('show.bs.dropdown', function () {
      //e.preventDefault();

      var $this     = $(this),
          toggle    = $this.children('.dropdown-toggle'),
          animation = toggle.data('play'),
          duration  = toggle.data('duration') || 0.5,
          target    = $this.children('.dropdown-menu');

      if(!target || !target.length)
        $.error('No target for play-animation');
      else
        if( $.fn.animo && animation)
          target.animo( { animation: animation,  duration: duration} );

    });
  
  });

}(jQuery, window, document));

/**=========================================================
 * Module: filter-tag.js
 * Basic items filter 
 =========================================================*/

(function($, window, document){
  'use strict';

  var selectorFilterTag   = '[data-filter-tag]',    // the trigger button
      selectorFilterGroup = '[data-filter-group]',  // items to be filtered
      itemAnimation       = 'fadeIn';               // supported by animo.js

  $(function() {

      $(selectorFilterGroup).first().closest('.row').eq(0).css('overflow','hidden');

      $(document).on('click', selectorFilterTag, function() {

        var $this = $(this),
            targetGroup = $this.data('filterTag');


        if(targetGroup) {

          var allItems     = $(selectorFilterGroup),
              visibleItems = allItems.filter(function() {
                              var group = $(this).data('filterGroup');
                              return ('all' == targetGroup || group == targetGroup);
                            });

          allItems.parent() // select the col- element
                  .hide()   // Hide them
                  //.removeClass('elementHasBeenFiltered')
                  ;
          visibleItems.parent()   // select the col- element
                      .show()     // display and run the animation
                      .animo( { animation: itemAnimation, duration: 0.5} )
                      //.addClass('elementHasBeenFiltered')
                      ;

          // active by default de current trigger
          $this.addClass('active');
          // try to active the parent when in ul.nav element
          var res = $this.parents('ul').eq(0).children('li').removeClass('active');
          if(res.length) $this.parent().addClass('active');
        }
        
      });

  });

}(jQuery, window, document));

/**=========================================================
 * Module: flot-chart.js
 * Initializes the flot chart plugin and attaches the 
 * plugin to elements according to its type
 =========================================================*/

(function($, window, document){
  'use strict';

  /**
   * Global object to load data for charts using ajax 
   * Request the chart data from the server via post
   * Expects a response in JSON format to init the plugin
   * Usage
   *   chart = new floatChart('#id', 'server/chart-data.php')
   *   ...
   *   chart.requestData(options);
   *
   * @param  Chart element placeholder or selector
   * @param  Url to get the data via post. Response in JSON format
   */
  window.FlotChart = function (element, url) {
    // Properties
    this.element = $(element);
    this.url = url;

    // Public method
    this.requestData = function (option, method, callback) {
      var self = this;
      
      // support params (option), (option, method, callback) or (option, callback)
      callback = (method && $.isFunction(method)) ? method : callback;
      method = (method && typeof method == 'string') ? method : 'POST';

      self.option = option; // save options

      $.ajax({
          url:      self.url,
          cache:    false,
          type:     method,
          dataType: 'json'
      }).done(function (data) {
          
          $.plot( self.element, data, option );
          
          if(callback) callback();

      });

      return this; // chain-ability

    };

    // Listen to refresh events
    this.listen = function() {
      var self = this,
          chartPanel = this.element.parents('.panel').eq(0);
      
      // attach custom event
      chartPanel.on('panel-refresh', function(event, panel) {
        // request data and remove spinner when done
        self.requestData(self.option, function(){
          panel.removeSpinner();
        });

      });

      return this; // chain-ability
    };

  };

  //
  // Start of Demo Script
  // 
  $(function () {

    // Bar chart
    (function () {
        var Selector = '.chart-bar';
        $(Selector).each(function() {
            var source = $(this).data('source') || $.error('Bar: No source defined.');
            var chart = new FlotChart(this, source),
                //panel = $(Selector).parents('.panel'),
                option = {
                    series: {
                        bars: {
                            align: 'center',
                            lineWidth: 0,
                            show: true,
                            barWidth: 0.6,
                            fill: 0.9
                        }
                    },
                    grid: {
                        borderColor: '#eee',
                        borderWidth: 1,
                        hoverable: true,
                        backgroundColor: '#fcfcfc'
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: '%x : %y'
                    },
                    xaxis: {
                        tickColor: '#fcfcfc',
                        mode: 'categories'
                    },
                    yaxis: {
                        tickColor: '#eee'
                    },
                    shadowSize: 0
                };
            // Send Request
            chart.requestData(option);
        });

    })();
    // Bar Stacked chart
    (function () {
        var Selector = '.chart-bar-stacked';
        $(Selector).each(function() {
            var source = $(this).data('source') || $.error('Bar Stacked: No source defined.');
            var chart = new FlotChart(this, source),
                option = {
                    series: {
                        stack: true,
                        bars: {
                            align: 'center',
                            lineWidth: 0,
                            show: true,
                            barWidth: 0.6,
                            fill: 0.9
                        }
                    },
                    grid: {
                        borderColor: '#eee',
                        borderWidth: 1,
                        hoverable: true,
                        backgroundColor: '#fcfcfc'
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: '%x : %y'
                    },
                    xaxis: {
                        tickColor: '#fcfcfc',
                        mode: 'categories'
                    },
                    yaxis: {
                        tickColor: '#eee'
                    },
                    shadowSize: 0
                };
            // Send Request
            chart.requestData(option);
        });
    })();
    // Area chart
    (function () {
        var Selector = '.chart-area';
        $(Selector).each(function() {
            var source = $(this).data('source') || $.error('Area: No source defined.');
            var chart = new FlotChart(this, source),
                option = {
                    series: {
                        lines: {
                            show: true,
                            fill: 0.8
                        },
                        points: {
                            show: true,
                            radius: 4
                        }
                    },
                    grid: {
                        borderColor: '#eee',
                        borderWidth: 1,
                        hoverable: true,
                        backgroundColor: '#fcfcfc'
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: '%x : %y'
                    },
                    xaxis: {
                        tickColor: '#fcfcfc',
                        mode: 'categories'
                    },
                    yaxis: {
                        tickColor: '#eee',
                        tickFormatter: function (v) {
                            return v + ' visitors';
                        }
                    },
                    shadowSize: 0
                };
            
            // Send Request and Listen for refresh events
            chart.requestData(option).listen();

        });
    })();
    // Line chart
    (function () {
        var Selector = '.chart-line';
        $(Selector).each(function() {
            var source = $(this).data('source') || $.error('Line: No source defined.');
            var chart = new FlotChart(this, source),
                option = {
                    series: {
                        lines: {
                            show: true,
                            fill: 0.01
                        },
                        points: {
                            show: true,
                            radius: 4
                        }
                    },
                    grid: {
                        borderColor: '#eee',
                        borderWidth: 1,
                        hoverable: true,
                        backgroundColor: '#fcfcfc'
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: '%x : %y'
                    },
                    xaxis: {
                        tickColor: '#eee',
                        mode: 'categories'
                    },
                    yaxis: {
                        tickColor: '#eee'
                    },
                    shadowSize: 0
                };
            // Send Request
            chart.requestData(option);
        });
    })();
    // Pïe
    (function () {
        var Selector = '.chart-pie';
        $(Selector).each(function() {
            var source = $(this).data('source') || $.error('Pie: No source defined.');
            var chart = new FlotChart(this, source),
                option = {
                    series: {
                        pie: {
                            show: true,
                            innerRadius: 0,
                            label: {
                                show: true,
                                radius: 0.8,
                                formatter: function (label, series) {
                                    return '<div class="flot-pie-label">' +
                                    //label + ' : ' +
                                    Math.round(series.percent) +
                                    '%</div>';
                                },
                                background: {
                                    opacity: 0.8,
                                    color: '#222'
                                }
                            }
                        }
                    }
                };
            // Send Request
            chart.requestData(option);
        });
    })();
    // Donut
    (function () {
        var Selector = '.chart-donut';
        $(Selector).each(function() {
            var source = $(this).data('source') || $.error('Donut: No source defined.');
            var chart = new FlotChart(this, source),
                option = {
                    series: {
                        pie: {
                            show: true,
                            innerRadius: 0.5 // This makes the donut shape
                        }
                    }
                };
            // Send Request
            chart.requestData(option);
        });
    })();
  });

}(jQuery, window, document));

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 * [data-toggle="wizard"] to activate wizard plugin
 * [data-validate-step] to enable step validation via parsley
 =========================================================*/

(function($, window, document){
  'use strict';

  if(!$.fn.bwizard) return;

  var Selector = '[data-toggle="wizard"]';

  $(Selector).each(function() {

    var wizard = $(this),
        validate = wizard.data('validateStep'); // allow to set options via data-* attributes
    
    if(validate) {
      wizard.bwizard({
        clickableSteps: false,
        validating: function(e, ui) {

          var $this = $(this),
              form = $this.parent(),
              group = form.find('.bwizard-activated');

          if (false === form.parsley().validate( group[0].id )) {
            e.preventDefault();
            return;
          }
        }
      });
    }
    else {
      wizard.bwizard();
    }

  });


}(jQuery, window, document));

/**=========================================================
 * Module: gmap.js
 * Init Google Map plugin
 =========================================================*/

(function($, window, document){
  'use strict';

  // -------------------------
  // Map Style definition
  // -------------------------

  // Custom core styles
  // Get more styles from http://snazzymaps.com/style/29/light-monochrome
  // - Just replace and assign to 'MapStyles' the new style array
  var MapStyles = [{featureType:'water',stylers:[{visibility:'on'},{color:'#bdd1f9'}]},{featureType:'all',elementType:'labels.text.fill',stylers:[{color:'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}];


  // -------------------------
  // Custom Script
  // -------------------------

  var mapSelector = '[data-toggle="gmap"]';
  var gMapRefs = [];

  if($.fn.gMap) {
    
    // Init all gmap visibles in the page
    $(mapSelector).each(function(){
        
        // do not init maps in modal
        if( ! $(this).parents('.modal').length )
          initGmap(this);

    }); //each

    // attach gmap initialization when modal opens
    $('.modal').each(function() {
      
      var $this = $(this),
          mapsInModal = $this.find(mapSelector);
      
      if ( mapsInModal.length ) {

        $this.on('shown.bs.modal', function (e) {
          mapsInModal.each(function(){
        
              initGmap(this);

          }); //each
        });

      } // if

    });
  }
  
  // Center Map marker on resolution change
  $(window).resize(function() {

      if(gMapRefs && gMapRefs.length) {
          for( var r in gMapRefs) {
            var mapRef = gMapRefs[r];
            var currMapCenter = mapRef.getCenter();
            if(mapRef && currMapCenter) {
                google.maps.event.trigger(mapRef, 'resize');
                mapRef.setCenter(currMapCenter);
            }
          }
      }
  });

  function initGmap(element){
    
    var $this     = $(element),
        addresses = $this.data('address') && $this.data('address').split(';'),
        titles    = $this.data('title') && $this.data('title').split(';'),
        zoom      = $this.data('zoom') || 14,
        maptype   = $this.data('maptype') || 'ROADMAP', // or 'TERRAIN'
        markers   = [];

    if(addresses) {
      for(var a in addresses)  {
          if(typeof addresses[a] == 'string') {
              markers.push({
                  address:  addresses[a],
                  html:     (titles && titles[a]) || '',
                  popup:    true   /* Always popup */
                });
          }
      }

      var options = {
          controls: {
                 panControl:         true,
                 zoomControl:        true,
                 mapTypeControl:     true,
                 scaleControl:       true,
                 streetViewControl:  true,
                 overviewMapControl: true
             },
          scrollwheel: false,
          maptype: maptype,
          markers: markers,
          zoom: zoom
          // More options https://github.com/marioestrada/jQuery-gMap
      };

      var gMap = $this.gMap(options);

      var ref = gMap.data('gMap.reference');
      // save in the map references list
      gMapRefs.push(ref);

      // set the styles
      if($this.data('styled') !== undefined) {
        
        ref.setOptions({
          styles: MapStyles
        });

      }
    }

}

}(jQuery, window, document));

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function($, window, document){
  'use strict';

  var Selector = '[data-toggle="load-css"]',
      storageKeyName = 'autoloadCSS';

  restoreStylesheet();
  $(document)
    .ready(function() {
    })
    .on('click', Selector, function (e) {
      e.preventDefault();
      var uri = $(this).data('uri');

      createStylesheet(uri);

  });

  // Creates a link element and injects the stylesheet href
  function createStylesheet(uri) {
    var link;
    if(uri) {
      link = createLink();
      if(link) {
        injectStylesheet(link, uri);
      }
      else {
        $.error('Error creating new stylsheet link element.');
      }
    }
    else {
      $.error('No stylesheet location defined.');
    }
  }

  function createLink() {
    var linkId = 'autoloaded-stylesheet',
        link = $('#'+linkId);

    if( ! link.length ) {
      var newLink = $('<link rel="stylesheet">').attr('id', linkId);
      $('head').append(newLink);
      link = $('#'+linkId);
    }
    return link;
  }

  function injectStylesheet(element, uri) {
    var v = '?id='+Math.round(Math.random()*10000); // forces to jump cache
    if(element.length) {
      element.attr('href', uri + v);
    }
    saveStylesheet(uri);
  }

  // Save the loaded stylesheet link
  function saveStylesheet(uri) {
    store.set(storageKeyName, uri);
  }
  // Restores the stylesheet 
  function restoreStylesheet() {
    var uri = store.get(storageKeyName);
    if(uri) {
      createStylesheet(uri);
    }
  }

}(jQuery, window, document));

/**=========================================================
 * Module: markdownarea.js
 * Markdown Editor from UIKit adapted for Bootstrap Layout
 * Requires uikit core - codemirror - marked
 * @author: geedmo (http://geedmo.com)
 =========================================================*/

(function($, window, document){
    'use strict';

    var Markdownarea = function(element, options){

        var $element = $(element);

        if($element.data("markdownarea")) return;

        this.element = $element;
        this.options = $.extend({}, Markdownarea.defaults, options);

        this.marked     = this.options.marked || marked;
        this.CodeMirror = this.options.CodeMirror || CodeMirror;

        this.marked.setOptions({
          gfm           : true,
          tables        : true,
          breaks        : true,
          pedantic      : true,
          sanitize      : false,
          smartLists    : true,
          smartypants   : false,
          langPrefix    : 'lang-'
        });

        this.init();

        this.element.data("markdownarea", this);
    };

    $.extend(Markdownarea.prototype, {

        init: function(){

            var $this = this, tpl = Markdownarea.template;

            tpl = tpl.replace(/\{\:lblPreview\}/g, this.options.lblPreview);
            tpl = tpl.replace(/\{\:lblCodeview\}/g, this.options.lblCodeview);

            this.markdownarea = $(tpl);
            this.content      = this.markdownarea.find(".uk-markdownarea-content");
            this.toolbar      = this.markdownarea.find(".uk-markdownarea-toolbar");
            this.preview      = this.markdownarea.find(".uk-markdownarea-preview").children().eq(0);
            this.code         = this.markdownarea.find(".uk-markdownarea-code");

            this.element.before(this.markdownarea).appendTo(this.code);

            this.editor = this.CodeMirror.fromTextArea(this.element[0], this.options.codemirror);

            this.editor.markdownarea = this;

            this.editor.on("change", (function(){
                var render = function(){

                    var value   = $this.editor.getValue();

                    $this.currentvalue  = String(value);

                    $this.element.trigger("markdownarea-before", [$this]);

                    $this.applyPlugins();

                    $this.marked($this.currentvalue, function (err, markdown) {

                      if (err) throw err;

                      $this.preview.html(markdown);
                      $this.element.val($this.editor.getValue()).trigger("markdownarea-update", [$this]);
                    });
                };
                render();
                return $.Utils.debounce(render, 150);
            })());

            this.code.find(".CodeMirror").css("height", this.options.height);

            this._buildtoolbar();
            this.fit();

            $(window).on("resize", $.Utils.debounce(function(){
                $this.fit();
            }, 200));


            var previewContainer = $this.preview.parent(),
                codeContent      = this.code.find('.CodeMirror-sizer'),
                codeScroll       = this.code.find('.CodeMirror-scroll').on('scroll',$.Utils.debounce(function() {

                    if($this.markdownarea.attr("data-mode")=="tab") return;

                    // calc position
                    var codeHeight       = codeContent.height()   - codeScroll.height(),
                        previewHeight    = previewContainer[0].scrollHeight - previewContainer.height(),
                        ratio            = previewHeight / codeHeight,
                        previewPostition = codeScroll.scrollTop() * ratio;

                    // apply new scroll
                    previewContainer.scrollTop(previewPostition);
            }, 10));

            this.markdownarea.on("click", ".uk-markdown-button-markdown, .uk-markdown-button-preview", function(e){

                e.preventDefault();

                if($this.markdownarea.attr("data-mode")=="tab") {

                    $this.markdownarea.find(".uk-markdown-button-markdown, .uk-markdown-button-preview").removeClass("uk-active").filter(this).addClass("uk-active");

                    $this.activetab = $(this).hasClass("uk-markdown-button-markdown") ? "code":"preview";
                    $this.markdownarea.attr("data-active-tab", $this.activetab);
                }
            });

            this.preview.parent().css("height", this.code.height());
        },

        applyPlugins: function(){

            var $this   = this,
                plugins = Object.keys(Markdownarea.plugins),
                plgs    = Markdownarea.plugins;

            this.markers = {};

            if(plugins.length) {

                var lines = this.currentvalue.split("\n");

                plugins.forEach(function(name){
                    this.markers[name] = [];
                }, this);

                for(var line=0,max=lines.length;line<max;line++) {

                    (function(line){
                        plugins.forEach(function(name){

                            var i = 0;

                            lines[line] = lines[line].replace(plgs[name].identifier, function(){

                                var replacement =  plgs[name].cb({
                                    "area" : $this,
                                    "found": arguments,
                                    "line" : line,
                                    "pos"  : i++,
                                    "uid"  : [name, line, i, (new Date().getTime())+"RAND"+(Math.ceil(Math.random() *100000))].join('-'),
                                    "replace": function(strwith){
                                        var src   = this.area.editor.getLine(this.line),
                                            start = src.indexOf(this.found[0]);
                                            end   = start + this.found[0].length;

                                        this.area.editor.replaceRange(strwith, {"line": this.line, "ch":start}, {"line": this.line, "ch":end} );
                                    }
                                });

                                return replacement;
                            });
                        });
                    }(line));
                }

                this.currentvalue = lines.join("\n");

            }
        },

        _buildtoolbar: function(){

            if(!(this.options.toolbar && this.options.toolbar.length)) return;

            var $this = this, bar = [];

            this.options.toolbar.forEach(function(cmd){
                if(Markdownarea.commands[cmd]) {

                   var title = Markdownarea.commands[cmd].title ? Markdownarea.commands[cmd].title : cmd;

                   bar.push('<li><a data-markdownarea-cmd="'+cmd+'" title="'+title+'" data-toggle="tooltip">'+Markdownarea.commands[cmd].label+'</a></li>');

                   if(Markdownarea.commands[cmd].shortcut) {
                       $this.registerShortcut(Markdownarea.commands[cmd].shortcut, Markdownarea.commands[cmd].action);
                   }
                }
            });

            this.toolbar.html(bar.join("\n"));

            this.markdownarea.on("click", "a[data-markdownarea-cmd]", function(){
                var cmd = $(this).data("markdownareaCmd");

                if(cmd && Markdownarea.commands[cmd] && (!$this.activetab || $this.activetab=="code" || cmd=="fullscreen")) {
                    Markdownarea.commands[cmd].action.apply($this, [$this.editor]);
                }

            });
        },

        fit: function() {

            var mode = this.options.mode;

            if(mode=="split" && this.markdownarea.width() < this.options.maxsplitsize) {
                mode = "tab";
            }

            if(mode=="tab") {

                if(!this.activetab) {
                    this.activetab = "code";
                    this.markdownarea.attr("data-active-tab", this.activetab);
                }

                this.markdownarea.find(".uk-markdown-button-markdown, .uk-markdown-button-preview").removeClass("uk-active")
                                 .filter(this.activetab=="code" ? '.uk-markdown-button-markdown':'.uk-markdown-button-preview').addClass("uk-active");

            }

            this.editor.refresh();
            this.preview.parent().css("height", this.code.height());

            this.markdownarea.attr("data-mode", mode);
        },

        registerShortcut: function(combination, callback){

            var $this = this;

            combination = $.isArray(combination) ? combination : [combination];

            for(var i=0,max=combination.length;i < max;i++) {
                var map = {};

                map[combination[i]] = function(){
                    callback.apply($this, [$this.editor]);
                };

                $this.editor.addKeyMap(map);
            }
        },

        getMode: function(){
            var pos = this.editor.getDoc().getCursor();

            return this.editor.getTokenAt(pos).state.base.htmlState ? 'html':'markdown';
        }
    });

    //jQuery plugin

    $.fn.markdownarea = function(options){

        return this.each(function(){

            var ele = $(this);

            if(!ele.data("markdownarea")) {
                var obj = new Markdownarea(ele, options);
            }
        });
    };

    var baseReplacer = function(replace, editor){
        var text     = editor.getSelection(),
            markdown = replace.replace('$1', text);

        editor.replaceSelection(markdown, 'end');
    };

    Markdownarea.commands = {
        "fullscreen": {
            "title"  : 'Fullscreen',
            "label"  : '<i class="fa fa-expand"></i>',
            "action" : function(editor){

                editor.markdownarea.markdownarea.toggleClass("uk-markdownarea-fullscreen");

                // dont use uk- to avoid rules declaration
                $('html').toggleClass("markdownarea-fullscreen");
                $('html, body').scrollTop(0);

                var wrap = editor.getWrapperElement();

                if(editor.markdownarea.markdownarea.hasClass("uk-markdownarea-fullscreen")) {

                    editor.state.fullScreenRestore = {scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, width: wrap.style.width, height: wrap.style.height};
                    wrap.style.width  = "";
                    wrap.style.height = editor.markdownarea.content.height()+"px";
                    document.documentElement.style.overflow = "hidden";

                } else {

                    document.documentElement.style.overflow = "";
                    var info = editor.state.fullScreenRestore;
                    wrap.style.width = info.width; wrap.style.height = info.height;
                    window.scrollTo(info.scrollLeft, info.scrollTop);
                }

                editor.refresh();
                editor.markdownarea.preview.parent().css("height", editor.markdownarea.code.height());
            }
        },

        "bold" : {
            "title"  : "Bold",
            "label"  : '<i class="fa fa-bold"></i>',
            "shortcut": ['Ctrl-B', 'Cmd-B'],
            "action" : function(editor){
                baseReplacer(this.getMode() == 'html' ? "<strong>$1</strong>":"**$1**", editor);
            }
        },
        "italic" : {
            "title"  : "Italic",
            "label"  : '<i class="fa fa-italic"></i>',
            "action" : function(editor){
                baseReplacer(this.getMode() == 'html' ? "<em>$1</em>":"*$1*", editor);
            }
        },
        "strike" : {
            "title"  : "Strikethrough",
            "label"  : '<i class="fa fa-strikethrough"></i>',
            "action" : function(editor){
                baseReplacer(this.getMode() == 'html' ? "<del>$1</del>":"~~$1~~", editor);
            }
        },
        "blockquote" : {
            "title"  : "Blockquote",
            "label"  : '<i class="fa fa-quote-right"></i>',
            "action" : function(editor){
                baseReplacer(this.getMode() == 'html' ? "<blockquote><p>$1</p></blockquote>":"> $1", editor);
            }
        },
        "link" : {
            "title"  : "Link",
            "label"  : '<i class="fa fa-link"></i>',
            "action" : function(editor){
                baseReplacer(this.getMode() == 'html' ? '<a href="http://">$1</a>':"[$1](http://)", editor);
            }
        },
        "picture" : {
            "title"  : "Picture",
            "label"  : '<i class="fa fa-picture-o"></i>',
            "action" : function(editor){
                baseReplacer(this.getMode() == 'html' ? '<img src="http://" alt="$1">':"![$1](http://)", editor);
            }
        },
        "listUl" : {
            "title"  : "Unordered List",
            "label"  : '<i class="fa fa-list-ul"></i>',
            "action" : function(editor){
                if(this.getMode() == 'markdown') baseReplacer("* $1", editor);
            }
        },
        "listOl" : {
            "title"  : "Ordered List",
            "label"  : '<i class="fa fa-list-ol"></i>',
            "action" : function(editor){
                if(this.getMode() == 'markdown') baseReplacer("1. $1", editor);
            }
        }
    };

    Markdownarea.defaults = {
        "mode"         : "split",
        "height"       : 500,
        "maxsplitsize" : 1000,
        "codemirror"   : { mode: 'gfm', tabMode: 'indent', tabindex: "2", lineWrapping: true, dragDrop: false, autoCloseTags: true, matchTags: true },
        "toolbar"      : [ "bold", "italic", "strike", "link", "picture", "blockquote", "listUl", "listOl" ],
        "lblPreview"   : "Preview",
        "lblCodeview"  : "Markdown"
    };

    Markdownarea.template = '<div class="uk-markdownarea uk-clearfix" data-mode="split">' +
                                '<div class="uk-markdownarea-navbar">' +
                                    '<ul class="uk-markdownarea-navbar-nav uk-markdownarea-toolbar"></ul>' +
                                    '<div class="uk-markdownarea-navbar-flip">' +
                                        '<ul class="uk-markdownarea-navbar-nav">' +
                                            '<li class="uk-markdown-button-markdown"><a>{:lblCodeview}</a></li>' +
                                            '<li class="uk-markdown-button-preview"><a>{:lblPreview}</a></li>' +
                                            '<li><a data-markdownarea-cmd="fullscreen" data-toggle="tooltip" title="Zen Mode"><i class="fa fa-expand"></i></a></li>' +
                                        '</ul>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="uk-markdownarea-content">' +
                                    '<div class="uk-markdownarea-code"></div>' +
                                    '<div class="uk-markdownarea-preview"><div></div></div>' +
                                '</div>' +
                            '</div>';

    Markdownarea.plugins   = {};
    Markdownarea.addPlugin = function(name, identifier, callback) {
        Markdownarea.plugins[name] = {"identifier":identifier, "cb":callback};
    };

    $.fn["markdownarea"] = Markdownarea;

    // init code
    $(function() {

        $("textarea[data-uk-markdownarea]").each(function() {
            var area = $(this), obj;

            if (!area.data("markdownarea")) {
                obj = new Markdownarea(area, $.Utils.options(area.attr("data-uk-markdownarea")));
            }
        });
    });

    return Markdownarea;

}(jQuery, window, document));

/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler
 * To open search add a buton with [data-toggle="navbar-search"]
 * To close search add an element with [data-toggle="navbar-search-dismiss"]
 *
 * Auto dismiss on ESC key
 =========================================================*/

(function($, window, document){
  'use strict';
  
  $(function() {

    var openSelector    = '[data-toggle="navbar-search"]',
        dismissSelector = '[data-toggle="navbar-search-dismiss"]',
        inputSelector   = '.navbar-form input[type="text"]',
        navbarForm      = $('form.navbar-form');

    var NavSearch = {
      toggle: function() {
        
        navbarForm.toggleClass('open');
        
        var isOpen = navbarForm.hasClass('open');
        
        navbarForm.find('input')[isOpen ? 'focus' : 'blur']();

      },

      dismiss: function() {
        navbarForm
          .removeClass('open')      // Close control
          .find('input[type="text"]').blur() // remove focus
          .val('')                    // Empty input
          ;
      }

    };

    $(document)
        .on('click', NavSearch.dismiss)
        .on('click', openSelector +', '+ inputSelector +', '+ dismissSelector, function (e) {
          e.stopPropagation();
        })
        .on('click', dismissSelector, NavSearch.dismiss)
        .on('click', openSelector, NavSearch.toggle)
        .keyup(function(e) {
          if (e.keyCode == 27) // ESC
            NavSearch.dismiss();
        });
  });


}(jQuery, window, document));

/**=========================================================
 * Module: notify.js
 * Create toggleable notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 * [data-toggle="notify"]
 * [data-options="options in json format" ]
 =========================================================*/

(function($, window, document){
  'use strict';

  var Selector = '[data-toggle="notify"]',
      autoloadSelector = '[data-onload]',
      doc = $(document);


  $(function() {

    $(Selector).each(function(){

      var $this  = $(this),
          onload = $this.data('onload');

      if(onload !== undefined) {
        setTimeout(function(){
          notifyNow($this);
        }, 1000);
      }

      $this.on('click', function (e) {
        e.preventDefault();
        notifyNow($this);
      });

    });

  });

  function notifyNow($element) {
      var message = $element.data('message'),
          options = $element.data('options');

      if(!message)
        $.error('Notify: No message specified');
     
      $.notify(message, options || {});
  }


}(jQuery, window, document));


/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */

(function($, window, document){

    var containers = {},
        messages   = {},

        notify     =  function(options){

            if ($.type(options) == 'string') {
                options = { message: options };
            }

            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) == 'string' ? {status:arguments[1]} : arguments[1]);
            }

            return (new Message(options)).show();
        },
        closeAll  = function(group, instantly){
            if(group) {
                for(var id in messages) { if(group===messages[id].group) messages[id].close(instantly); }
            } else {
                for(var id in messages) { messages[id].close(instantly); }
            }
        };

    var Message = function(options){

        var $this = this;

        this.options = $.extend({}, Message.defaults, options);

        this.uuid    = "ID"+(new Date().getTime())+"RAND"+(Math.ceil(Math.random() * 100000));
        this.element = $([
            // @geedmo: alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
                '<a class="close">&times;</a>',
                '<div>'+this.options.message+'</div>',
            '</div>'

        ].join('')).data("notifyMessage", this);

        // status
        if (this.options.status) {
            this.element.addClass('alert alert-'+this.options.status);
            this.currentstatus = this.options.status;
        }

        this.group = this.options.group;

        messages[this.uuid] = this;

        if(!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo('body').on("click", ".uk-notify-message", function(){
                $(this).data("notifyMessage").close();
            });
        }
    };


    $.extend(Message.prototype, {

        uuid: false,
        element: false,
        timout: false,
        currentstatus: "",
        group: false,

        show: function() {

            if (this.element.is(":visible")) return;

            var $this = this;

            containers[this.options.pos].show().prepend(this.element);

            var marginbottom = parseInt(this.element.css("margin-bottom"), 10);

            this.element.css({"opacity":0, "margin-top": -1*this.element.outerHeight(), "margin-bottom":0}).animate({"opacity":1, "margin-top": 0, "margin-bottom":marginbottom}, function(){

                if ($this.options.timeout) {

                    var closefn = function(){ $this.close(); };

                    $this.timeout = setTimeout(closefn, $this.options.timeout);

                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout);  }
                    );
                }

            });

            return this;
        },

        close: function(instantly) {

            var $this    = this,
                finalize = function(){
                    $this.element.remove();

                    if(!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }

                    delete messages[$this.uuid];
                };

            if(this.timeout) clearTimeout(this.timeout);

            if(instantly) {
                finalize();
            } else {
                this.element.animate({"opacity":0, "margin-top": -1* this.element.outerHeight(), "margin-bottom":0}, function(){
                    finalize();
                });
            }
        },

        content: function(html){

            var container = this.element.find(">div");

            if(!html) {
                return container.html();
            }

            container.html(html);

            return this;
        },

        status: function(status) {

            if(!status) {
                return this.currentstatus;
            }

            this.element.removeClass('alert alert-'+this.currentstatus).addClass('alert alert-'+status);

            this.currentstatus = status;

            return this;
        }
    });

    Message.defaults = {
        message: "",
        status: "normal",
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };


    $["notify"]          = notify;
    $["notify"].message  = Message;
    $["notify"].closeAll = closeAll;

    return notify;

}(jQuery, window, document));

/**=========================================================
 * Module: panel-perform.js
 * Dismiss panels
 * [data-perform="panel-dismiss"]
 *
 * Requires animo.js
 =========================================================*/
(function($, window, document){
  'use strict';
  
  var panelSelector = '[data-perform="panel-dismiss"]',
      removeEvent   = 'panel-remove',
      removedEvent  = 'panel-removed';

  $(document).on('click', panelSelector, function () {
    
    // find the first parent panel
    var parent = $(this).closest('.panel');

    if($.support.animation) {
      parent.animo({animation: 'bounceOut'}, removeElement);
    }
    else removeElement();

    function removeElement() {
      // Trigger the event and finally remove the element
      $.when(parent.trigger(removeEvent, [parent]))
       .done(destroyPanel);
    }

    function destroyPanel() {
      var col = parent.parent();
      parent.remove();
      // remove the parent if it is a row and is empty and not a sortable (portlet)
      col
        .trigger(removedEvent) // An event to catch when the panel has been removed from DOM
        .filter(function() {
        var el = $(this);
        return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
      }).remove();

    }

  });

}(jQuery, window, document));


/**
 * Collapse panels
 * [data-perform="panel-collapse"]
 *
 * Also uses browser storage to keep track
 * of panels collapsed state
 */
(function($, window, document) {
  'use strict';
  var panelSelector = '[data-perform="panel-collapse"]',
      storageKeyName = 'panelState';

  // Prepare the panel to be collapsable and its events
  $(panelSelector).each(function() {
    // find the first parent panel
    var $this        = $(this),
        parent       = $this.closest('.panel'),
        wrapper      = parent.find('.panel-wrapper'),
        collapseOpts = {toggle: false},
        iconElement  = $this.children('em'),
        panelId      = parent.attr('id');
    
    // if wrapper not added, add it
    // we need a wrapper to avoid jumping due to the paddings
    if( ! wrapper.length) {
      wrapper =
        parent.children('.panel-heading').nextAll() //find('.panel-body, .panel-footer')
          .wrapAll('<div/>')
          .parent()
          .addClass('panel-wrapper');
      collapseOpts = {};
    }

    // Init collapse and bind events to switch icons
    wrapper
      .collapse(collapseOpts)
      .on('hide.bs.collapse', function() {
        setIconHide( iconElement );
        savePanelState( panelId, 'hide' );
      })
      .on('show.bs.collapse', function() {
        setIconShow( iconElement );
        savePanelState( panelId, 'show' );
      });

    // Load the saved state if exists
    var currentState = loadPanelState( panelId );
    if(currentState) {
      setTimeout(function() { wrapper.collapse( currentState ); }, 0);
      savePanelState( panelId, currentState );
    }

  });

  // finally catch clicks to toggle panel collapse
  $(document).on('click', panelSelector, function () {
    
    var parent = $(this).closest('.panel');
    var wrapper = parent.find('.panel-wrapper');

    wrapper.collapse('toggle');

  });

  /////////////////////////////////////////////
  // Common use functions for panel collapse //
  /////////////////////////////////////////////
  function setIconShow(iconEl) {
    iconEl.removeClass('fa-plus').addClass('fa-minus');
  }

  function setIconHide(iconEl) {
    iconEl.removeClass('fa-minus').addClass('fa-plus');
  }

  function savePanelState(id, state) {
    if(!id || !store || !store.enabled) return false;
    var data = store.get(storageKeyName);
    if(!data) { data = {}; }
    data[id] = state;
    store.set(storageKeyName, data);
  }

  function loadPanelState(id) {
    if(!id || !store || !store.enabled) return false;
    var data = store.get(storageKeyName);
    if(data) {
      return data[id] || false;
    }
  }


}(jQuery, window, document));


/**
 * Refresh panels
 * [data-perform="panel-refresh"]
 * [data-spinner="standard"]
 */
(function($, window, document){
  'use strict';
  var panelSelector  = '[data-perform="panel-refresh"]',
      refreshEvent   = 'panel-refresh',
      csspinnerClass = 'csspinner',
      defaultSpinner = 'standard';

  // method to clear the spinner when done
  function removeSpinner(){
    this.removeClass(csspinnerClass);
  }

  // catch clicks to toggle panel refresh
  $(document).on('click', panelSelector, function () {
      var $this   = $(this),
          panel   = $this.parents('.panel').eq(0),
          spinner = $this.data('spinner') || defaultSpinner
          ;

      // start showing the spinner
      panel.addClass(csspinnerClass + ' ' + spinner);

      // attach as public method
      panel.removeSpinner = removeSpinner;

      // Trigger the event and send the panel object
      $this.trigger(refreshEvent, [panel]);

  });


  /**
   * This function is only to show a demonstration
   * of how to use the panel refresh system via 
   * custom event. 
   * IMPORTANT: see how to remove the spinner.
   */

  $('.panel.panel-demo').on('panel-refresh', function(e, panel){
    
    // perform any action when a .panel triggers a the refresh event
    setTimeout(function(){
  
      // when the action is done, just remove the spinner class
      panel.removeSpinner();
  
    }, 3000);

  });

}(jQuery, window, document));

/**=========================================================
 * Module: play-animation.js
 * Provides a simple way to run animation with a trigger
 * Targeted elements must have 
 *   [data-toggle="play-animation"]
 *   [data-target="Target element affected by the animation"] 
 *   [data-play="Animation name (http://daneden.github.io/animate.css/)"]
 *
 * Requires animo.js
 =========================================================*/
 
(function($, window, document){
  'use strict';

  var Selector = '[data-toggle="play-animation"]';

  $(function() {
    
    var $scroller = $(window).add('body, .wrapper');

    // Parse animations params and attach trigger to scroll
    $(Selector).each(function() {
      var $this     = $(this),
          offset    = $this.data('offset'),
          delay     = $this.data('delay')     || 100, // milliseconds
          animation = $this.data('play')      || 'bounce';
      
      if(typeof offset !== 'undefined') {
        
        // test if the element starts visible
        testAnimation($this);
        // test on scroll
        $scroller.scroll(function(){
          testAnimation($this);
        });

      }

      // Test an element visibilty and trigger the given animation
      function testAnimation(element) {
          if ( !element.hasClass('anim-running') &&
              $.Utils.isInView(element, {topoffset: offset})) {
          element
            .addClass('anim-running');

          setTimeout(function() {
            element
              .addClass('anim-done')
              .animo( { animation: animation, duration: 0.7} );
          }, delay);

        }
      }

    });

    // Run click triggered animations
    $(document).on('click', Selector, function() {

      var $this     = $(this),
          targetSel = $this.data('target'),
          animation = $this.data('play') || 'bounce',
          target    = $(targetSel);

      if(target && target) {
        target.animo( { animation: animation } );
      }
      
    });

  });

}(jQuery, window, document));

/**=========================================================
 * Module: portlet.js
 * Drag and drop any panel to change its position
 * The Selector should could be applied to any object that contains
 * panel, so .col-* element are ideal.
 =========================================================*/

(function($, window, document){
  'use strict';

  // Component is required
  if(!$.fn.sortable) return;

  var Selector = '[data-toggle="portlet"]',
      storageKeyName = 'portletState';

  $(function(){

    $( Selector ).sortable({
      connectWith:          Selector,
      items:                'div.panel',
      handle:               '.portlet-handler',
      opacity:              0.7,
      placeholder:          'portlet box-placeholder',
      cancel:               '.portlet-cancel',
      forcePlaceholderSize: true,
      iframeFix:            false,
      tolerance:            'pointer',
      helper:               'original',
      revert:               200,
      forceHelperSize:      true,
      start:                saveListSize,
      update:               savePortletOrder,
      create:               loadPortletOrder
    })
    // optionally disables mouse selection
    //.disableSelection()
    ;

  });

  function savePortletOrder(event, ui) {
    
    var data = store.get(storageKeyName);
    
    if(!data) { data = {}; }

    data[this.id] = $(this).sortable('toArray');

    if(data) {
      store.set(storageKeyName, data);
    }
    
    // save portlet size to avoid jumps
    saveListSize.apply(this);
  }

  function loadPortletOrder() {
    
    var data = store.get(storageKeyName);

    if(data) {
      
      var porletId = this.id,
          panels   = data[porletId];

      if(panels) {
        var portlet = $('#'+porletId);
        
        $.each(panels, function(index, value) {
           $('#'+value).appendTo(portlet);
        });
      }

    }

    // save portlet size to avoid jumps
    saveListSize.apply(this);
  }

  // Keeps a consistent size in all portlet lists
  function saveListSize() {
    var $this = $(this);
    $this.css('min-height', $this.height());
  }

  /*function resetListSize() {
    $(this).css('min-height', "");
  }*/

}(jQuery, window, document));


/**=========================================================
 * Module: sidebar-menu.js
 * Provides a simple way to implement bootstrap collapse plugin using a target 
 * next to the current element (sibling)
 * Targeted elements must have [data-toggle="collapse-next"]
 =========================================================*/
(function($, window, document){
  'use strict';

  var collapseSelector = '[data-toggle="collapse-next"]',
      colllapsibles    = $('.sidebar .collapse').collapse({toggle: false}),
      toggledClass     = 'aside-collapsed',
      $body            = $('body'),
      phone_mq         = 768; // media querie

  $(function() {

    $(document)
      .on('click', collapseSelector, function (e) {
          e.preventDefault();
          
          if ($(window).width() > phone_mq &&
              $body.hasClass(toggledClass)) return;

          // Try to close all of the collapse areas first
          colllapsibles.collapse('hide');
          // ...then open just the one we want
          var $target = $(this).siblings('ul');
          $target.collapse('show');

      })
      // Submenu when aside is toggled
      .on('click', '.sidebar > .nav > li', function() {

        if ($body.hasClass(toggledClass) &&
          $(window).width() > phone_mq) {

            $('.sidebar > .nav > li')
              .not(this)
              .removeClass('open')
              .end()
              .filter(this)
              .toggleClass('open');
        }

      });

  });


}(jQuery, window, document));

/**=========================================================
 * Module: sparkline.js
 * SparkLines Mini Charts
 =========================================================*/

(function($, window, document){
  'use strict';

  var Selector = '.inlinesparkline';

  // Match color with css values to style charts
  var colors = {
        primary:         '#5fb5cb',
        success:         '#27ae60',
        info:            '#22bfe8',
        warning:         '#ffc61d',
        danger:          '#f6504d'
    };

  // Inline sparklines take their values from the contents of the tag 
  $(Selector).each(function() {

      var $this = $(this);
      var data = $this.data();

        if(data.barColor && colors[data.barColor])
          data.barColor = colors[data.barColor];

      var options = data;
      options.type = data.type || 'bar'; // default chart is bar

      $(this).sparkline('html', options);

  });

}(jQuery, window, document));

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/

(function($, window, document){
  'use strict';
  
  var Selector = 'th.check-all';

  $(Selector).on('change', function() {
    var $this = $(this),
        index= $this.index() + 1,
        checkbox = $this.find('input[type="checkbox"]'),
        table = $this.parents('table');
    // Make sure to affect only the correct checkbox column
    table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
      .prop('checked', checkbox[0].checked);

  });

}(jQuery, window, document));

/**=========================================================
 * Module: toggle-state.js
 * Toggle a classname from the BODY. Useful to change a state that 
 * affects globally the entire layout or more than one item
 * Targeted elements must have [data-toggle="CLASS-NAME-TO-TOGGLE"]
 * Optionally save and restore state [data-persists="true"]
 =========================================================*/

(function($, window, document){
  'use strict';

  var SelectorToggle  = '[data-toggle-state]',
      $body           = $('body'),
      storageKeyName  = 'toggleState';


  $(document)
    .ready(function() {
      restoreState($body);
    })
    .on('click', SelectorToggle, function (e) {
      e.preventDefault();
      var classname = $(this).data('toggleState'),
          persists  = $(this).data('persists');
      
      if(classname) {
        if( $body.hasClass(classname) ) {
          $body.removeClass(classname);
          if(persists) removeState(classname);
        }
        else {
          $body.addClass(classname);
          if(persists) addState(classname);
        }
        
      }

  });

  // Add a state to the browser storage to be restored later
  function addState(classname){
    var data = store.get(storageKeyName);
    
    if(!data)  {
      data = classname;
    }
    else {
      data = WordChecker.addWord(data, classname);
    }

    store.set(storageKeyName, data);
  }

  // Remove a state from the browser storage
  function removeState(classname){
    var data = store.get(storageKeyName);
    // nothing to remove
    if(!data) return;

    data = WordChecker.removeWord(data, classname);

    store.set(storageKeyName, data);
  }
  
  // Load the state string and restore the classlist
  function restoreState($elem) {
    var data = store.get(storageKeyName);
    
    // nothing to restore
    if(!data) return;
    $elem.addClass(data);
  }


  //////////////////////////////////////////////////
  // Helper object to check for words in a phrase //
  //////////////////////////////////////////////////
  var WordChecker = {
    hasWord: function (phrase, word) {
      return new RegExp('(^|\\s)' + word + '(\\s|$)').test(phrase);
    },
    addWord: function (phrase, word) {
      if (!this.hasWord(phrase, word)) {
        return (phrase + (phrase ? ' ' : '') + word);
      }
    },
    removeWord: function (phrase, word) {
      if (this.hasWord(phrase, word)) {
        return phrase.replace(new RegExp('(^|\\s)*' + word + '(\\s|$)*', 'g'), '');
      }
    }
  };


}(jQuery, window, document));

/**=========================================================
 * Module: tooltips.js
 * Initialize Bootstrap tooltip with auto placement
 =========================================================*/

(function($, window, document){
  'use strict';

  $(function(){

    $('[data-toggle="tooltip"]').tooltip({
      container: 'body',
      placement: function (context, source) {
                    //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
                    var pos = 'top';
                    if(predictTooltipTop(source) < 0)
                      pos = 'bottom';
                    if(predictTooltipLeft(source) < 0)
                      pos = 'right';
                    return pos;
                }
    });

  });

  // Predicts tooltip top position 
  // based on the trigger element
  function predictTooltipTop(el) {
    var top = el.offsetTop;
    var height = 40; // asumes ~40px tooltip height

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
    }
    return (top - height) - (window.pageYOffset);
  }

  // Predicts tooltip top position 
  // based on the trigger element
  function predictTooltipLeft(el) {
    var left = el.offsetLeft;
    var width = el.offsetWidth;

    while(el.offsetParent) {
      el = el.offsetParent;
      left += el.offsetLeft;
    }
    return (left - width) - (window.pageXOffset);
  }

}(jQuery, window, document));

/**=========================================================
 * Module: upload-demo.js
 * Upload Demostration
 * See file server/upload.php for more details
 =========================================================*/

(function($, window, document){
  'use strict';

  $(function() {

    var progressbar = $('#progressbar'),
        bar         = progressbar.find('.progress-bar'),
        settings    = {

            action: 'server/upload.php', // upload url

            allow : '*.(jpg|jpeg|gif|png)', // allow only images

            param: 'upfile',

            loadstart: function() {
                bar.css('width', '0%').text('0%');
                progressbar.removeClass('hidden');
            },

            progress: function(percent) {
                percent = Math.ceil(percent);
                bar.css('width', percent+'%').text(percent+'%');
            },

            allcomplete: function(response) {

                bar.css('width', '100%').text('100%');

                setTimeout(function(){
                    progressbar.addClass('hidden');
                }, 250);

                // Upload Completed
                alert(response);
            }
        };

    var select = new $.upload.select($('#upload-select'), settings),
        drop   = new $.upload.drop($('#upload-drop'), settings);
  });

}(jQuery, window, document));

/**=========================================================
 * Module: upload.js
 * Allow users to upload files through a file input form element or a placeholder area.
 * Based on addon from UIKit (http://getuikit.com/docs/addons_upload.html)
 *
 * Adapted version to work with Bootstrap classes
 =========================================================*/

(function($, window, document){
    'use strict';

    var UploadSelect = function(element, options) {

        var $this    = this,
            $element = $(element),
            options  = $.extend({}, xhrupload.defaults, UploadSelect.defaults, options);

        if ($element.data("uploadSelect")) return;

        this.element = $element.on("change", function() {
            xhrupload($this.element[0].files, options);
        });

        $element.data("uploadSelect", this);
    };

    UploadSelect.defaults = {};

    var UploadDrop = function(element, options) {

        var $this      = this,
            $element   = $(element),
            options    = $.extend({}, xhrupload.defaults, UploadDrop.defaults, options),
            hasdragCls = false;

        if ($element.data("uploadDrop")) return;

        $element.on("drop", function(e){

            if (e.dataTransfer && e.dataTransfer.files) {

                e.stopPropagation();
                e.preventDefault();

                $element.removeClass(options.dragoverClass);

                xhrupload(e.dataTransfer.files, options);
            }

        }).on("dragenter", function(e){
            e.stopPropagation();
            e.preventDefault();
        }).on("dragover", function(e){
            e.stopPropagation();
            e.preventDefault();

            if (!hasdragCls) {
                $element.addClass(options.dragoverClass);
                hasdragCls = true;
            }
        }).on("dragleave", function(e){
            e.stopPropagation();
            e.preventDefault();
            $element.removeClass(options.dragoverClass);
            hasdragCls = false;
        });

        $element.data("uploadDrop", this);
    };

    UploadDrop.defaults = {
        'dragoverClass': 'dragover'
    };

    $.upload = { "select" : UploadSelect, "drop" : UploadDrop };

    $.support.ajaxupload = (function() {

        function supportFileAPI() {
            var fi = document.createElement('INPUT'); fi.type = 'file'; return 'files' in fi;
        }

        function supportAjaxUploadProgressEvents() {
            var xhr = new XMLHttpRequest(); return !! (xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
        }

        function supportFormData() {
            return !! window.FormData;
        }

        return supportFileAPI() && supportAjaxUploadProgressEvents() && supportFormData();
    })();

    if ($.support.ajaxupload){
        $.event.props.push("dataTransfer");
    }

    function xhrupload(files, settings) {

        if (!$.support.ajaxupload){
            return this;
        }

        settings = $.extend({}, xhrupload.defaults, settings);

        if (!files.length){
            return;
        }

        if (settings.allow !== '*.*') {

            for(var i=0,file;file=files[i];i++) {

                if(!matchName(settings.allow, file.name)) {

                    if(typeof(settings.notallowed) == 'string') {
                       alert(settings.notallowed);
                    } else {
                       settings.notallowed(file, settings);
                    }
                    return;
                }
            }
        }

        var complete = settings.complete;

        if (settings.single){

            var count    = files.length,
                uploaded = 0;

                settings.complete = function(response, xhr){
                    uploaded = uploaded+1;
                    complete(response, xhr);
                    if (uploaded<count){
                        upload([files[uploaded]], settings);
                    } else {
                        settings.allcomplete(response, xhr);
                    }
                };

                upload([files[0]], settings);

        } else {

            settings.complete = function(response, xhr){
                complete(response, xhr);
                settings.allcomplete(response, xhr);
            };

            upload(files, settings);
        }

        function upload(files, settings){

            // upload all at once
            var formData = new FormData(), xhr = new XMLHttpRequest();

            if (settings.before(settings, files)===false) return;

            for (var i = 0, f; f = files[i]; i++) { formData.append(settings.param, f); }
            for (var p in settings.params) { formData.append(p, settings.params[p]); }

            // Add any event handlers here...
            xhr.upload.addEventListener("progress", function(e){
                var percent = (e.loaded / e.total)*100;
                settings.progress(percent, e);
            }, false);

            xhr.addEventListener("loadstart", function(e){ settings.loadstart(e); }, false);
            xhr.addEventListener("load",      function(e){ settings.load(e);      }, false);
            xhr.addEventListener("loadend",   function(e){ settings.loadend(e);   }, false);
            xhr.addEventListener("error",     function(e){ settings.error(e);     }, false);
            xhr.addEventListener("abort",     function(e){ settings.abort(e);     }, false);

            xhr.open(settings.method, settings.action, true);

            xhr.onreadystatechange = function() {

                settings.readystatechange(xhr);

                if (xhr.readyState==4){

                    var response = xhr.responseText;

                    if (settings.type=="json") {
                        try {
                            response = $.parseJSON(response);
                        } catch(e) {
                            response = false;
                        }
                    }

                    settings.complete(response, xhr);
                }
            };

            xhr.send(formData);
        }
    }

    xhrupload.defaults = {
        'action': '',
        'single': true,
        'method': 'POST',
        'param' : 'files[]',
        'params': {},
        'allow' : '*.*',
        'type'  : 'text',

        // events
        'before'          : function(o){},
        'loadstart'       : function(){},
        'load'            : function(){},
        'loadend'         : function(){},
        'error'           : function(){},
        'abort'           : function(){},
        'progress'        : function(){},
        'complete'        : function(){},
        'allcomplete'     : function(){},
        'readystatechange': function(){},
        'notallowed'      : function(file, settings){ alert('Only the following file types are allowed: '+settings.allow); }
    };

    function matchName(pattern, path) {

        var parsedPattern = '^' + pattern.replace(/\//g, '\\/').
            replace(/\*\*/g, '(\\/[^\\/]+)*').
            replace(/\*/g, '[^\\/]+').
            replace(/((?!\\))\?/g, '$1.') + '$';

        parsedPattern = '^' + parsedPattern + '$';

        return (path.match(new RegExp(parsedPattern)) !== null);
    }

    $.xhrupload = xhrupload;

    return xhrupload;

}(jQuery, window, document));

/**=========================================================
 * Module: utils.js
 * jQuery Utility functions library 
 * adapted from the core of UIKit
 =========================================================*/

(function($, window, doc){
    'use strict';
    
    var $html = $("html"), $win = $(window);

    $.support.transition = (function() {

        var transitionEnd = (function() {

            var element = doc.body || doc.documentElement,
                transEndEventNames = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                }, name;

            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }());

        return transitionEnd && { end: transitionEnd };
    })();

    $.support.animation = (function() {

        var animationEnd = (function() {

            var element = doc.body || doc.documentElement,
                animEndEventNames = {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd oanimationend',
                    animation: 'animationend'
                }, name;

            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }());

        return animationEnd && { end: animationEnd };
    })();

    $.support.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60); };
    $.support.touch                 = (
        ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
        (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
        (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
        false
    );
    $.support.mutationobserver      = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null);

    $.Utils = {};

    $.Utils.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $.Utils.removeCssRules = function(selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

        if(!selectorRegEx) return;

        setTimeout(function(){
            try {
              _ref = document.styleSheets;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                stylesheet = _ref[_i];
                idxs = [];
                stylesheet.cssRules = stylesheet.cssRules;
                for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                  if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                    idxs.unshift(idx);
                  }
                }
                for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                  stylesheet.deleteRule(idxs[_k]);
                }
              }
            } catch (_error) {}
        }, 0);
    };

    $.Utils.isInView = function(element, options) {

        var $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = $win.scrollLeft(),
            window_top  = $win.scrollTop(),
            offset      = $element.offset(),
            left        = offset.left,
            top         = offset.top;

        options = $.extend({topoffset:0, leftoffset:0}, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
            left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
          return true;
        } else {
          return false;
        }
    };

    $.Utils.options = function(string) {

        if ($.isPlainObject(string)) return string;

        var start = (string ? string.indexOf("{") : -1), options = {};

        if (start != -1) {
            try {
                options = (new Function("", "var json = " + string.substr(start) + "; return JSON.parse(JSON.stringify(json));"))();
            } catch (e) {}
        }

        return options;
    };

    $.Utils.events       = {};
    $.Utils.events.click = $.support.touch ? 'tap' : 'click';

    $.langdirection = $html.attr("dir") == "rtl" ? "right" : "left";

    $(function(){

        // Check for dom modifications
        if(!$.support.mutationobserver) return;

        // Install an observer for custom needs of dom changes
        var observer = new $.support.mutationobserver($.Utils.debounce(function(mutations) {
            $(doc).trigger("domready");
        }, 300));

        // pass in the target node, as well as the observer options
        observer.observe(document.body, { childList: true, subtree: true });

    });

    // add touch identifier class
    $html.addClass($.support.touch ? "touch" : "no-touch");

}(jQuery, window, document));
/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/

(function($, window, document){
  'use strict';

  var Selector = '[data-toggle="vector-map"]',
      defaultColors = {
          markerColor:  '#5194cb',      // the marker points
          bgColor:      '#fafafa',      // the background
          scaleColors:  ['#5a5e6a'],    // the color of the region in the serie
          regionFill:   '#818590'       // the base region color
      };

  $(Selector).each(function() {

    var $this       = $(this),
        options     = {
          markerColor:  $this.data('markerColor')  || defaultColors.markerColor,
          bgColor:      $this.data('bgColor')      || defaultColors.bgColor,
          scale:        $this.data('scale')        || 1,
          scaleColors:  $this.data('scaleColors')  || defaultColors.scaleColors,
          regionFill:   $this.data('regionFill')   || '#818590'
        };

    var seriesData = {
      'CA': 11100,   // Canada
      'DE': 2510,    // Germany
      'FR': 3710,    // France
      'AU': 5710,    // Australia
      'GB': 8310,    // Great Britain
      'RU': 9310,    // Russia
      'BR': 6610,    // Brazil
      'IN': 7810,    // India
      'CN': 4310,    // China
      'US': 839,     // USA
      'SA': 410      // Saudi Arabia
    };
    
    var markersData = [
      { latLng:[41.90, 12.45],  name:'Vatican City'          },
      { latLng:[43.73, 7.41],   name:'Monaco'                },
      { latLng:[-0.52, 166.93], name:'Nauru'                 },
      { latLng:[-8.51, 179.21], name:'Tuvalu'                },
      { latLng:[7.11,171.06],   name:'Marshall Islands'      },
      { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
      { latLng:[3.2,73.22],     name:'Maldives'              },
      { latLng:[35.88,14.5],    name:'Malta'                 },
      { latLng:[41.0,-71.06],   name:'New England'           },
      { latLng:[12.05,-61.75],  name:'Grenada'               },
      { latLng:[13.16,-59.55],  name:'Barbados'              },
      { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
      { latLng:[-4.61,55.45],   name:'Seychelles'            },
      { latLng:[7.35,134.46],   name:'Palau'                 },
      { latLng:[42.5,1.51],     name:'Andorra'               }
    ];

    initVectorMap( $this , options, seriesData, markersData);
          
  });

  function  initVectorMap($element, opts, series, markers) {
    $element.vectorMap({
      map:             'world_mill_en',
      backgroundColor: opts.bgColor,
      zoomMin:         2,
      zoomMax:         8,
      zoomOnScroll:    false,
      regionStyle: {
        initial: {
          'fill':           defaultColors.regionFill,
          'fill-opacity':   1,
          'stroke':         'none',
          'stroke-width':   1.5,
          'stroke-opacity': 1
        },
        hover: {
          'fill-opacity': 0.8
        },
        selected: {
          fill: 'blue'
        },
        selectedHover: {
        }
      },
      focusOn:{ x:0.4, y:0.6, scale: opts.scale},
      markerStyle: {
        initial: {
          fill: opts.markerColor,
          stroke: opts.markerColor
        }
      },
      onRegionLabelShow: function(e, el, code) {
        if ( series && series[code] )
          el.html(el.html() + ': ' + series[code] + ' visitors');
      },
      markers: markers,
      series: {
          regions: [{
              values: series,
              scale: opts.scaleColors,
              normalizeFunction: 'polynomial'
          }]
      },
    });
  }

}(jQuery, window, document));

/**
 * Provides a start point to run plugins and other scripts
 */
(function($, window, document){
  'use strict';

  if (typeof $ === 'undefined') { throw new Error('This application\'s JavaScript requires jQuery'); }

  $(window).load(function() {

    $('.scroll-content').slimScroll({
        height: '250px'
    });

    adjustLayout();

  }).resize(adjustLayout);


  $(function() {

    // Init Fast click for mobiles
    FastClick.attach(document.body);

    // inhibits null links
    $('a[href="#"]').each(function(){
      this.href = 'javascript:void(0);';
    });

    // popover init
    $('[data-toggle=popover]').popover();

    // Bootstrap slider
    $('.slider').slider();

    // Chosen
    $('.chosen-select').chosen();

    // Filestyle
    $('.filestyle').filestyle();

    // Masked inputs initialization
    $.fn.inputmask && $('[data-toggle="masked"]').inputmask();

  });

  // keeps the wrapper covering always the entire body
  // necessary when main content doesn't fill the viewport
  function adjustLayout() {
    $('.wrapper > section').css('min-height', $(window).height());
  }

}(jQuery, window, document));
