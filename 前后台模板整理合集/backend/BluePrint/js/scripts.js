(function ($) {

    $(window).setBreakpoints({
        // use only largest available vs use all available
        distinct: true,
        // array of widths in pixels where breakpoints
        // should be triggered
        breakpoints: [
            768,
            992
        ]
    });

    $(window).bind('enterBreakpoint992', function () {
        // on window resize
        $('.sidebar.left-side').css('left:0', 'display:block');
        // if open on mobile close on desktop
        if ($('body.sidebar-push-toright').length)  $('#showLeftPush').trigger('click');

        // on window resize remove remaining mobile style
        $('.email > .media-body').removeAttr("style");

        // make chat stick on desktop
        console.log('enterBreakpoint992');

    });
    $(window).bind('exitBreakpoint992', function () {
        console.log('exitBreakpoint992');
    });

    $(window).bind('exitBreakpoint768', function () {
        console.log('exitBreakpoint768');
    });
    $(window).bind('enterBreakpoint768', function () {
        // on window resize remove remaining mobile style
        $('.email > .media-body').removeAttr("style");

        console.log('enterBreakpoint768');
    });

}(jQuery));
(function ($) {
    // object containing events
    var eventList = new Object();


    /* initialize the external events
     -----------------------------------------------------------------*/
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


    if ($('#calendar').length > 0) {

        /* initialize the calendar
         -----------------------------------------------------------------*/

        $('#calendar').fullCalendar({
            header: {
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'Meeting with Sam',
                    description: 'Quick meetup with Sam to review the current progress of the project.',
                    type: 'meeting',
                    allday: 'false',
                    start: '2015-03-16T16:00:00',
                    end: '2015-03-16T18:00:00'
                },
                {
                    title: 'Conference',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dolores illo inventore iste perspiciatis qui quidem rem repudiandae sed.',
                    type: 'event',
                    bg: '#9ccc65',
                    allday: 'true',
                    start: '2015-03-11',
                    end: '2015-03-13'
                },
                {
                    title: 'Board Meeting',
                    description: 'Get toghether with everyone in the company to assess.',
                    type: 'meeting',
                    bg: '#f4511e',
                    allday: 'false',
                    start: '2015-03-12T10:30:00',
                    end: '2015-03-12T12:30:00'
                },
                {
                    title: 'April Meeting',
                    description: 'Testing an event in april.',
                    type: 'meeting',
                    bg: '#f4511e',
                    allday: 'false',
                    start: '2015-04-12T10:30:00',
                    end: '2015-04-12T12:30:00'
                }
            ],
            eventClick: function (event) {
                eventClickAction(event);
            },
            eventRender: function (event, element) {
                eventList = eventList + event;
                element.css('background-color', event.bg);
            },
            loading: function (bool) {
                if (bool) {
                    $('#loading').toggle(bool);
                }
            },
            viewRender: function() {
                thisMonthList();
            }

        });

        function eventClickAction(event) {
            renderSidebar(event);
            $('body .overlay-disabled').toggleClass('active');
        }
        function renderSidebar(event) {
            event.startDate = moment(event.start).format("dddd, MMMM Do YYYY");
            event.startTime = moment(event.start).format("hh:mm");
            event.endDate = moment(event.end).format("dddd, MMMM Do YYYY");
            event.endTime = moment(event.end).format("hh:mm");

            $('body').addClass('sidebar-push-toleft');
            $('#sidebar-calendar').addClass('sidebar-right-open');
            $('#sidebar-calendar').html(renderEventSidebar(event));
        }
        function renderEventSidebar(event) {
            var output = Mustache.render(
                "<div class='block-primary'>" +
                "<h4 class='margin-none'>{{title}}</h4>" +
                "</div>" +
                "<div class='sidebar-padding'>" +
                "<small class='bold text-muted'>Event Details</small>" +
                "<p>{{description}}</p>" +
                "<small class='bold text-muted'><i class='fa fa-calendar'></i> Starts at</small>" +
                "<p>" +
                "{{startDate}}" +
                    //" at {{startTime}}" +
                "</p>" +
                "<small class='bold text-muted'><i class='fa fa-calendar'></i> Ends on</small>" +
                "<p>" +
                "{{endDate}} " +
                    //"at {{endTime}}" +
                "</p>" +
                "</div>"
                , event
            );
            return output;
        }

        // on load call this month list
        thisMonthList();

        // when adding a new event
        $('#addEvent').click(function() {
            var newEvent = {
                title: 'Custom Event Added',
                description: 'Added a custom event',
                type: 'meeting',
                bg: '#f4511e',
                start: new Date(),
                end: new Date()
            };
            $('#calendar').fullCalendar( 'renderEvent', newEvent);
            thisMonthList();
        });
    }

    // fetch list of events for current month;
    function thisMonthList() {
        var currentEvents = $('#calendar').fullCalendar('clientEvents');
        var output = "<ul class='list-group list-group-list'>";
        currentEvents.forEach(function (event) {
            //if (event.key === 0) $('#this-month-event-list').prepend('<ul></ul>');
            //console.log(moment(event.start).get('month')+1);
            if (moment(event.start).get('month') == $('#calendar').fullCalendar('getDate').get('month')) {

                event.startDate = event.start.format("DD") + " " + monthNames[ event.start.format("M") - 1 ];
                event.startTime = event.start.format("hh:mm");

                output += Mustache.render(
                    "<li class='list-group-item'>" +
                    "<div class='media'>" +
                    "<div class='media-left'>" +
                    "<div class='text-muted' style='width:55px'>" +
                    "  {{startDate}}" +
                    "</div>" +
                    "</div>" +
                    "<div class='media-body' style='width:100%'>" +
                    "<a href='#' class='text-regular'>{{title}}</a>" +
                    "</div>" +
                    "<div class='media-right' style='width:100px'>" +
                    "<div class='bold text-primary'>" +
                    "   {{startTime}}" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</li>"
                    , event
                );
            }
        });
        output += "</ul>";
        $('#this-month-event-list').html(output);
    }


}(jQuery));
(function ($) {
    if ($('.ct-chart-animated-line').length > 0) {
        var chart = new Chartist.Line('.ct-chart-animated-line', {
            labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
            series: [ {
                data: [ 12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6 ],
                className: "brand-primary-stroke"
            }, {
                data: [ 4, 5, 3, 7, 3, 5, 5, 3, 4, 12, 5, 5 ],
                className: "brand-orange-stroke"
            } ]
        }, {
            low: 0
        });

        // Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
            delays = 80,
            durations = 500;

        // Once the chart is fully created we reset the sequence
        chart.on('created', function () {
            seq = 0;
        });

        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        chart.on('draw', function (data) {
            seq ++;

            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: seq * delays + 1000,
                        // Duration of the animation
                        dur: durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    x2: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[ data.axis + '1' ] - 30,
                    to: data[ data.axis + '1' ],
                    easing: 'easeOutQuart'
                };

                var pos2Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[ data.axis + '2' ] - 100,
                    to: data[ data.axis + '2' ],
                    easing: 'easeOutQuart'
                };

                var animations = {};
                animations[ data.axis + '1' ] = pos1Animation;
                animations[ data.axis + '2' ] = pos2Animation;
                animations[ 'opacity' ] = {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                };

                data.element.animate(animations);
            }
        });
    }
    if ($('.ct-chart-horizontal').length > 0) {
        new Chartist.Bar('.ct-chart-horizontal', {
            labels: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
            series: [ {
                data: [ 5, 4, 3, 7, 5, 10, 3 ],
                className: "brand-primary-stroke"
            }, {
                data: [ 3, 2, 9, 5, 4, 6, 4 ],
                className: "brand-green-stroke"
            }
            ]
        }, {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisY: {
                offset: 70
            }
        });
    }
    if ($('.ct-chart-bars').length > 0) {
        new Chartist.Bar('.ct-chart-bars', {
                labels: [ 'Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4' ],
                series: [
                    {
                        data: [ 5, 4, 3, 7 ],
                        className: "brand-primary-stroke"
                    }, {
                        data: [ 1, 5, 8, 4 ],
                        className: "brand-orange-stroke"
                    }, {
                        data: [ 3, 2, 9, 5 ],
                        className: "brand-default-stroke"
                    }, {
                        data: [ 2, 3, 4, 6 ],
                        className: "brand-green-stroke"
                    }
                ]
            },
            {
                // Default mobile configuration
                stackBars: true,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value.split(/\s+/).map(function (word) {
                            return word[ 0 ];
                        }).join('');
                    }
                },
                axisY: {
                    offset: 20
                }
            }, [
                // Options override for media > 400px
                [ 'screen and (min-width: 400px)', {
                    reverseData: true,
                    horizontalBars: true,
                    axisX: {
                        labelInterpolationFnc: Chartist.noop
                    },
                    axisY: {
                        offset: 60
                    }
                } ],
                // Options override for media > 800px
                [ 'screen and (min-width: 800px)', {
                    stackBars: false,
                    seriesBarDistance: 10
                } ],
                // Options override for media > 1000px
                [ 'screen and (min-width: 1000px)', {
                    reverseData: false,
                    horizontalBars: false,
                    seriesBarDistance: 15
                } ]
            ]);
    }
    //Pie
    if ($('.ct-chart-pie').length > 0) {
        new Chartist.Pie('.ct-chart-pie', {
            series: [ {
                data: 20,
                className: "brand-primary-stroke"
            },
                {
                    data: 10,
                    className: "brand-primary-stroke"
                },
                {
                    data: 30,
                    className: "brand-primary-stroke"
                },
                {
                    data: 40,
                    className: "brand-primary-stroke"
                } ]
        }, {
            donut: true,
            donutWidth: 60,
            startAngle: 270,
            total: 200,
            showLabel: false
        });
    }
}(jQuery));
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

(function ($) {

    'use strict';
    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (! hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    window.classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

}(jQuery));
/*
 * The marker data will need to match this structre to work
 * To filter upon a specific key it needs to be hooked up in the filter section
 of the myMap object

 This data was generated from http://www.json-generator.com/


 Here is the source for generating the JSON

 // start
 [
 '{{repeat(50)}}',
 {
 id: '{{index()}}',
 name: '{{firstName()}} {{surname()}}',
 age: '{{integer(20,85)}}',
 followers: '{{integer(8,80)}}',
 occupation: '{{lorem(2, "words")}}',
 from: '{{random("Michigan", "National")}}',
 college: function (idx) {
 var choices = ['MSU', 'MTU', 'UM', 'CMU', 'FSU'];
 return choices[idx.integer(0, choices.length - 1)];
 },
 lat: '{{floating(31.969639, 43.849384)}}',
 lng: '{{floating(-120.629883, -77.387695)}}'
 }
 ]
 // finish

 */
var personData =
    [
        {
            "id": 0,
            "name": "Lynnette Gibson",
            "age": 75,
            "followers": 55,
            "occupation": "amet commodo",
            "from": "Michigan",
            "college": "FSU",
            "lat": 36.848384,
            "lng": -88.486336
        },
        {
            "id": 1,
            "name": "Carla Reese",
            "age": 33,
            "followers": 41,
            "occupation": "pariatur aute",
            "from": "National",
            "college": "MTU",
            "lat": 34.757467,
            "lng": -117.289205
        },
        {
            "id": 2,
            "name": "Mccarthy Blevins",
            "age": 58,
            "followers": 47,
            "occupation": "qui laborum",
            "from": "National",
            "college": "MSU",
            "lat": 40.096377,
            "lng": -118.61762
        },
        {
            "id": 3,
            "name": "Geneva Holcomb",
            "age": 62,
            "followers": 66,
            "occupation": "adipisicing nostrud",
            "from": "National",
            "college": "CMU",
            "lat": 40.113991,
            "lng": -82.080224
        },
        {
            "id": 4,
            "name": "Parker Campbell",
            "age": 41,
            "followers": 32,
            "occupation": "et sit",
            "from": "Michigan",
            "college": "UM",
            "lat": 35.552591,
            "lng": -86.801539
        },
        {
            "id": 5,
            "name": "Osborne Briggs",
            "age": 41,
            "followers": 60,
            "occupation": "ad ipsum",
            "from": "National",
            "college": "FSU",
            "lat": 32.497364,
            "lng": -115.930087
        },
        {
            "id": 6,
            "name": "Tanisha Mercado",
            "age": 30,
            "followers": 12,
            "occupation": "culpa reprehenderit",
            "from": "Michigan",
            "college": "MTU",
            "lat": 34.5362,
            "lng": -114.237048
        },
        {
            "id": 7,
            "name": "Lacy Graves",
            "age": 25,
            "followers": 59,
            "occupation": "ut laboris",
            "from": "Michigan",
            "college": "MSU",
            "lat": 33.865981,
            "lng": -119.604591
        },
        {
            "id": 8,
            "name": "Martina Weeks",
            "age": 31,
            "followers": 42,
            "occupation": "amet laborum",
            "from": "National",
            "college": "UM",
            "lat": 36.149757,
            "lng": -108.240607
        },
        {
            "id": 9,
            "name": "Raymond Gregory",
            "age": 72,
            "followers": 56,
            "occupation": "eiusmod dolor",
            "from": "Michigan",
            "college": "MSU",
            "lat": 36.824384,
            "lng": -80.740186
        },
        {
            "id": 10,
            "name": "Candy Hewitt",
            "age": 20,
            "followers": 24,
            "occupation": "sunt sint",
            "from": "National",
            "college": "MTU",
            "lat": 37.908543,
            "lng": -102.77804
        },
        {
            "id": 11,
            "name": "Loraine Holden",
            "age": 38,
            "followers": 8,
            "occupation": "aliqua sint",
            "from": "Michigan",
            "college": "UM",
            "lat": 41.907026,
            "lng": -77.571907
        },
        {
            "id": 12,
            "name": "Leona Keith",
            "age": 76,
            "followers": 55,
            "occupation": "commodo qui",
            "from": "Michigan",
            "college": "MSU",
            "lat": 34.850248,
            "lng": -81.706418
        },
        {
            "id": 13,
            "name": "Brianna Gilbert",
            "age": 44,
            "followers": 21,
            "occupation": "in in",
            "from": "National",
            "college": "FSU",
            "lat": 38.986633,
            "lng": -77.58432
        },
        {
            "id": 14,
            "name": "Roxanne Finch",
            "age": 46,
            "followers": 69,
            "occupation": "exercitation sit",
            "from": "Michigan",
            "college": "CMU",
            "lat": 39.392528,
            "lng": -79.900012
        },
        {
            "id": 15,
            "name": "Obrien Soto",
            "age": 44,
            "followers": 67,
            "occupation": "esse sint",
            "from": "National",
            "college": "UM",
            "lat": 39.653625,
            "lng": -118.912713
        },
        {
            "id": 16,
            "name": "Erma Hopper",
            "age": 45,
            "followers": 33,
            "occupation": "sint velit",
            "from": "Michigan",
            "college": "FSU",
            "lat": 42.112884,
            "lng": -91.958919
        },
        {
            "id": 17,
            "name": "England Pope",
            "age": 39,
            "followers": 40,
            "occupation": "officia anim",
            "from": "Michigan",
            "college": "MTU",
            "lat": 41.685131,
            "lng": -111.740279
        },
        {
            "id": 18,
            "name": "Booth Cotton",
            "age": 85,
            "followers": 75,
            "occupation": "et aliquip",
            "from": "National",
            "college": "MSU",
            "lat": 37.622846,
            "lng": -86.781389
        },
        {
            "id": 19,
            "name": "Alejandra Burnett",
            "age": 40,
            "followers": 77,
            "occupation": "id nostrud",
            "from": "Michigan",
            "college": "FSU",
            "lat": 33.349217,
            "lng": -83.404649
        },
        {
            "id": 20,
            "name": "Mack Patrick",
            "age": 34,
            "followers": 34,
            "occupation": "sint non",
            "from": "National",
            "college": "MTU",
            "lat": 39.343341,
            "lng": -78.541177
        },
        {
            "id": 21,
            "name": "Lee David",
            "age": 60,
            "followers": 69,
            "occupation": "voluptate duis",
            "from": "Michigan",
            "college": "UM",
            "lat": 34.788327,
            "lng": -81.066577
        },
        {
            "id": 22,
            "name": "Mallory Acevedo",
            "age": 31,
            "followers": 47,
            "occupation": "eu pariatur",
            "from": "National",
            "college": "MTU",
            "lat": 35.167321,
            "lng": -115.169422
        },
        {
            "id": 23,
            "name": "Klein Beard",
            "age": 83,
            "followers": 20,
            "occupation": "duis voluptate",
            "from": "National",
            "college": "UM",
            "lat": 36.303051,
            "lng": -87.086745
        },
        {
            "id": 24,
            "name": "Erickson Bryan",
            "age": 47,
            "followers": 16,
            "occupation": "ipsum ex",
            "from": "Michigan",
            "college": "CMU",
            "lat": 40.498517,
            "lng": -102.575022
        },
        {
            "id": 25,
            "name": "Charity Vaughan",
            "age": 69,
            "followers": 27,
            "occupation": "dolore incididunt",
            "from": "Michigan",
            "college": "FSU",
            "lat": 35.905567,
            "lng": -84.885839
        },
        {
            "id": 26,
            "name": "Holden Rowland",
            "age": 67,
            "followers": 53,
            "occupation": "aliqua voluptate",
            "from": "National",
            "college": "UM",
            "lat": 43.638299,
            "lng": -93.387752
        },
        {
            "id": 27,
            "name": "Miller Roach",
            "age": 31,
            "followers": 34,
            "occupation": "dolore anim",
            "from": "Michigan",
            "college": "MSU",
            "lat": 32.035638,
            "lng": -113.605988
        },
        {
            "id": 28,
            "name": "Ellison Stephens",
            "age": 35,
            "followers": 28,
            "occupation": "laboris quis",
            "from": "National",
            "college": "MSU",
            "lat": 41.381184,
            "lng": -87.383892
        },
        {
            "id": 29,
            "name": "Chasity Strickland",
            "age": 42,
            "followers": 40,
            "occupation": "minim id",
            "from": "Michigan",
            "college": "MTU",
            "lat": 32.141313,
            "lng": -93.564034
        },
        {
            "id": 30,
            "name": "Holt Tanner",
            "age": 40,
            "followers": 56,
            "occupation": "consectetur fugiat",
            "from": "Michigan",
            "college": "MTU",
            "lat": 42.593587,
            "lng": -117.906105
        },
        {
            "id": 31,
            "name": "Hutchinson Dejesus",
            "age": 29,
            "followers": 28,
            "occupation": "Lorem occaecat",
            "from": "National",
            "college": "MSU",
            "lat": 39.44406,
            "lng": -82.69064
        },
        {
            "id": 32,
            "name": "Carmella Ferrell",
            "age": 34,
            "followers": 62,
            "occupation": "occaecat id",
            "from": "Michigan",
            "college": "UM",
            "lat": 42.00958,
            "lng": -90.231567
        },
        {
            "id": 33,
            "name": "Hahn Grimes",
            "age": 55,
            "followers": 46,
            "occupation": "ex commodo",
            "from": "Michigan",
            "college": "FSU",
            "lat": 42.34232,
            "lng": -79.592458
        },
        {
            "id": 34,
            "name": "Lowe Waters",
            "age": 80,
            "followers": 44,
            "occupation": "reprehenderit laboris",
            "from": "National",
            "college": "MTU",
            "lat": 34.932002,
            "lng": -118.502849
        },
        {
            "id": 35,
            "name": "Harrell Riley",
            "age": 59,
            "followers": 72,
            "occupation": "Lorem labore",
            "from": "National",
            "college": "FSU",
            "lat": 39.350606,
            "lng": -114.411983
        },
        {
            "id": 36,
            "name": "Pugh Dillon",
            "age": 20,
            "followers": 41,
            "occupation": "pariatur tempor",
            "from": "National",
            "college": "UM",
            "lat": 37.866368,
            "lng": -103.48079
        },
        {
            "id": 37,
            "name": "Alana Hubbard",
            "age": 61,
            "followers": 79,
            "occupation": "quis nisi",
            "from": "Michigan",
            "college": "UM",
            "lat": 32.095524,
            "lng": -117.575783
        },
        {
            "id": 38,
            "name": "Mia Barton",
            "age": 30,
            "followers": 18,
            "occupation": "nostrud officia",
            "from": "Michigan",
            "college": "CMU",
            "lat": 37.961815,
            "lng": -101.265092
        },
        {
            "id": 39,
            "name": "Ernestine Lindsey",
            "age": 34,
            "followers": 18,
            "occupation": "sit et",
            "from": "National",
            "college": "MTU",
            "lat": 34.832379,
            "lng": -90.592477
        },
        {
            "id": 40,
            "name": "Malinda Nicholson",
            "age": 35,
            "followers": 25,
            "occupation": "proident sit",
            "from": "National",
            "college": "UM",
            "lat": 38.483102,
            "lng": -94.564797
        },
        {
            "id": 41,
            "name": "Selma Mcfarland",
            "age": 54,
            "followers": 40,
            "occupation": "sint qui",
            "from": "National",
            "college": "MSU",
            "lat": 38.233746,
            "lng": -80.296596
        },
        {
            "id": 42,
            "name": "Christie Lopez",
            "age": 57,
            "followers": 22,
            "occupation": "officia cillum",
            "from": "National",
            "college": "FSU",
            "lat": 36.426758,
            "lng": -86.48565
        },
        {
            "id": 43,
            "name": "Torres Alvarez",
            "age": 65,
            "followers": 64,
            "occupation": "qui anim",
            "from": "Michigan",
            "college": "MSU",
            "lat": 41.175339,
            "lng": -98.782334
        },
        {
            "id": 44,
            "name": "Garcia Everett",
            "age": 66,
            "followers": 62,
            "occupation": "esse laboris",
            "from": "Michigan",
            "college": "MTU",
            "lat": 39.830745,
            "lng": -87.660778
        },
        {
            "id": 45,
            "name": "Goodwin Heath",
            "age": 74,
            "followers": 41,
            "occupation": "mollit laboris",
            "from": "National",
            "college": "MTU",
            "lat": 38.80118,
            "lng": -115.886799
        },
        {
            "id": 46,
            "name": "Patel Wong",
            "age": 65,
            "followers": 29,
            "occupation": "dolor occaecat",
            "from": "Michigan",
            "college": "MTU",
            "lat": 33.693607,
            "lng": -101.083627
        },
        {
            "id": 47,
            "name": "Hays Castillo",
            "age": 69,
            "followers": 54,
            "occupation": "ipsum dolore",
            "from": "Michigan",
            "college": "UM",
            "lat": 37.483607,
            "lng": -94.57343
        },
        {
            "id": 48,
            "name": "Bernadine Doyle",
            "age": 68,
            "followers": 19,
            "occupation": "ad nisi",
            "from": "National",
            "college": "FSU",
            "lat": 35.033456,
            "lng": -79.105348
        },
        {
            "id": 49,
            "name": "Larsen Murphy",
            "age": 61,
            "followers": 69,
            "occupation": "elit quis",
            "from": "National",
            "college": "MSU",
            "lat": 40.829281,
            "lng": -107.325249
        }
    ]
var unemployment = [{
    "states": {
        "2005": {
            "US-AL": 7.2,
                "US-AK": 8.6,
                "US-AZ": 6.3,
                "US-AR": 6.9,
                "US-CA": 7.2,
                "US-CO": 6.2,
                "US-CT": 6.3,
                "US-DE": 5.6,
                "US-DC": 9.1,
                "US-FL": 6.3,
                "US-GA": 7.4,
                "US-HI": 4.4,
                "US-ID": 5.8,
                "US-IL": 7.9,
                "US-IN": 6.9,
                "US-IA": 5.1,
                "US-KS": 5.5,
                "US-KY": 7.5,
                "US-LA": 9,
                "US-ME": 5.7,
                "US-MD": 5.7,
                "US-MA": 6.4,
                "US-MI": 8.9,
                "US-MN": 5.5,
                "US-MS": 9.3,
                "US-MO": 6.7,
                "US-MT": 5.3,
                "US-NE": 4.9,
                "US-NV": 5.8,
                "US-NH": 4.8,
                "US-NJ": 6.3,
                "US-NM": 7.3,
                "US-NY": 7,
                "US-NC": 7.1,
                "US-ND": 3.8,
                "US-OH": 7.4,
                "US-OK": 6.6,
                "US-OR": 7.5,
                "US-PA": 6.7,
                "US-RI": 6.1,
                "US-SC": 8,
                "US-SD": 4.9,
                "US-TN": 7.1,
                "US-TX": 7.6,
                "US-UT": 5.3,
                "US-VT": 5.3,
                "US-VA": 5.2,
                "US-WA": 7.2,
                "US-WV": 7.2,
                "US-WI": 6.2,
                "US-WY": 5.3
        },
        "2006": {
            "US-AL": 6.9,
                "US-AK": 9.4,
                "US-AZ": 4.9,
                "US-AR": 7,
                "US-CA": 6.6,
                "US-CO": 5.5,
                "US-CT": 6.2,
                "US-DE": 5.9,
                "US-DC": 8.5,
                "US-FL": 5.5,
                "US-GA": 6.9,
                "US-HI": 4.4,
                "US-ID": 5.3,
                "US-IL": 7.2,
                "US-IN": 6.9,
                "US-IA": 4.9,
                "US-KS": 5.3,
                "US-KY": 6.9,
                "US-LA": 7.8,
                "US-ME": 5.3,
                "US-MD": 5.3,
                "US-MA": 5.8,
                "US-MI": 9.5,
                "US-MN": 5.2,
                "US-MS": 8.9,
                "US-MO": 6.3,
                "US-MT": 4.8,
                "US-NE": 4.8,
                "US-NV": 5.2,
                "US-NH": 4.5,
                "US-NJ": 6.3,
                "US-NM": 6.4,
                "US-NY": 6.5,
                "US-NC": 6.6,
                "US-ND": 3.3,
                "US-OH": 7.1,
                "US-OK": 6,
                "US-OR": 6.3,
                "US-PA": 6.2,
                "US-RI": 5.9,
                "US-SC": 7.4,
                "US-SD": 4.3,
                "US-TN": 7.4,
                "US-TX": 7,
                "US-UT": 4.4,
                "US-VT": 4.8,
                "US-VA": 4.7,
                "US-WA": 6.4,
                "US-WV": 6.8,
                "US-WI": 5.5,
                "US-WY": 3.5
        },
        "2007": {
            "US-AL": 6.7,
                "US-AK": 8.8,
                "US-AZ": 5.8,
                "US-AR": 7.2,
                "US-CA": 6.6,
                "US-CO": 5.5,
                "US-CT": 6,
                "US-DE": 5.6,
                "US-DC": 8.1,
                "US-FL": 6.2,
                "US-GA": 7,
                "US-HI": 4.5,
                "US-ID": 5.1,
                "US-IL": 7.2,
                "US-IN": 6.6,
                "US-IA": 4.8,
                "US-KS": 5.1,
                "US-KY": 6.6,
                "US-LA": 6.4,
                "US-ME": 6,
                "US-MD": 5.5,
                "US-MA": 6.1,
                "US-MI": 9.6,
                "US-MN": 5.4,
                "US-MS": 9.3,
                "US-MO": 6.3,
                "US-MT": 5.2,
                "US-NE": 4.6,
                "US-NV": 5.6,
                "US-NH": 5.1,
                "US-NJ": 5.9,
                "US-NM": 5.6,
                "US-NY": 6.2,
                "US-NC": 6.9,
                "US-ND": 3.5,
                "US-OH": 7.2,
                "US-OK": 5.4,
                "US-OR": 6.5,
                "US-PA": 5.9,
                "US-RI": 6.3,
                "US-SC": 6.9,
                "US-SD": 4.1,
                "US-TN": 6.9,
                "US-TX": 5.9,
                "US-UT": 3.8,
                "US-VT": 5.1,
                "US-VA": 4.8,
                "US-WA": 6,
                "US-WV": 6.2,
                "US-WI": 5.7,
                "US-WY": 3.7
        },
        "2008": {
            "US-AL": 7,
                "US-AK": 7.7,
                "US-AZ": 6.1,
                "US-AR": 6.6,
                "US-CA": 7.5,
                "US-CO": 4.9,
                "US-CT": 6.4,
                "US-DE": 6.6,
                "US-DC": 7.8,
                "US-FL": 7.5,
                "US-GA": 7,
                "US-HI": 4.1,
                "US-ID": 5.5,
                "US-IL": 6.9,
                "US-IN": 6.9,
                "US-IA": 3.9,
                "US-KS": 4.4,
                "US-KY": 6.9,
                "US-LA": 6,
                "US-ME": 5.9,
                "US-MD": 5.4,
                "US-MA": 6,
                "US-MI": 9.5,
                "US-MN": 4.9,
                "US-MS": 7.8,
                "US-MO": 6.1,
                "US-MT": 4.7,
                "US-NE": 4,
                "US-NV": 7.3,
                "US-NH": 4.5,
                "US-NJ": 5.9,
                "US-NM": 6,
                "US-NY": 6.3,
                "US-NC": 6.8,
                "US-ND": 3.2,
                "US-OH": 7,
                "US-OK": 4.6,
                "US-OR": 6.7,
                "US-PA": 5.7,
                "US-RI": 7.5,
                "US-SC": 7.7,
                "US-SD": 3.7,
                "US-TN": 6.9,
                "US-TX": 5.2,
                "US-UT": 4,
                "US-VT": 4.9,
                "US-VA": 4.9,
                "US-WA": 5.6,
                "US-WV": 5.7,
                "US-WI": 5.1,
                "US-WY": 3.3
        },
        "2009": {
        "US-AL": 11.1,
            "US-AK": 9.5,
            "US-AZ": 10.6,
            "US-AR": 9.1,
            "US-CA": 11.3,
            "US-CO": 8.5,
            "US-CT": 9.2,
            "US-DE": 8.6,
            "US-DC": 11.1,
            "US-FL": 12.1,
            "US-GA": 11.2,
            "US-HI": 7.1,
            "US-ID": 9.6,
            "US-IL": 10.6,
            "US-IN": 11,
            "US-IA": 6,
            "US-KS": 7.2,
            "US-KY": 10.1,
            "US-LA": 8.4,
            "US-ME": 7.2,
            "US-MD": 8,
            "US-MA": 9.1,
            "US-MI": 14.7,
            "US-MN": 8.2,
            "US-MS": 10.7,
            "US-MO": 9,
            "US-MT": 7.9,
            "US-NE": 6,
            "US-NV": 12.1,
            "US-NH": 7.8,
            "US-NJ": 9.8,
            "US-NM": 9,
            "US-NY": 9,
            "US-NC": 11,
            "US-ND": 3.8,
            "US-OH": 11.1,
            "US-OK": 6.8,
            "US-OR": 11.8,
            "US-PA": 9.1,
            "US-RI": 9.6,
            "US-SC": 11.7,
            "US-SD": 5.2,
            "US-TN": 11.1,
            "US-TX": 8.2,
            "US-UT": 7.8,
            "US-VT": 7.6,
            "US-VA": 7.4,
            "US-WA": 9.5,
            "US-WV": 7.7,
            "US-WI": 8.2,
            "US-WY": 5.9
    }
    },
    "metro": {
        "codes": [
        "3100000US12060",
        "3100000US12420",
        "3100000US12580",
        "3100000US13820",
        "3100000US14460",
        "3100000US15380",
        "3100000US16740",
        "3100000US16980",
        "3100000US17140",
        "3100000US17460",
        "3100000US18140",
        "3100000US19100",
        "3100000US19740",
        "3100000US19820",
        "3100000US25540",
        "3100000US26420",
        "3100000US26900",
        "3100000US27260",
        "3100000US28140",
        "3100000US29820",
        "3100000US31100",
        "3100000US31140",
        "3100000US32820",
        "3100000US33100",
        "3100000US33340",
        "3100000US33460",
        "3100000US34980",
        "3100000US35380",
        "3100000US35620",
        "3100000US36420",
        "3100000US36740",
        "3100000US37980",
        "3100000US38060",
        "3100000US38300",
        "3100000US38900",
        "3100000US39300",
        "3100000US39580",
        "3100000US40060",
        "3100000US40140",
        "3100000US40380",
        "3100000US40900",
        "3100000US41180",
        "3100000US41620",
        "3100000US41700",
        "3100000US41740",
        "3100000US41860",
        "3100000US41940",
        "3100000US42660",
        "3100000US45300",
        "3100000US46060",
        "3100000US47260",
        "3100000US47900"
    ],
        "coords": [
        [
            33.9783241,
            -84.4783064
        ],
        [
            30.51220349999999,
            -97.67312530000001
        ],
        [
            39.4014955,
            -76.6019125
        ],
        [
            33.37857109999999,
            -86.80439
        ],
        [
            43.1938516,
            -71.5723953
        ],
        [
            43.0026291,
            -78.8223134
        ],
        [
            33.836081,
            -81.1637245
        ],
        [
            41.7435073,
            -88.0118473
        ],
        [
            39.1031182,
            -84.5120196
        ],
        [
            41.6661573,
            -81.339552
        ],
        [
            39.9611755,
            -82.99879419999999
        ],
        [
            32.735687,
            -97.10806559999999
        ],
        [
            39.9205411,
            -105.0866504
        ],
        [
            42.8105356,
            -83.0790865
        ],
        [
            41.754166,
            -72.624443
        ],
        [
            29.7355047,
            -94.97742740000001
        ],
        [
            39.978371,
            -86.1180435
        ],
        [
            30.3321838,
            -81.65565099999999
        ],
        [
            39.0653602,
            -94.5624426
        ],
        [
            36.0849963,
            -115.1511364
        ],
        [
            34.0596149,
            -118.1122679
        ],
        [
            38.3964426,
            -85.4375574
        ],
        [
            35.0387247,
            -89.8505012
        ],
        [
            26.2378597,
            -80.1247667
        ],
        [
            43.0166806,
            -88.0070315
        ],
        [
            44.9389111,
            -93.1177555
        ],
        [
            35.8905359,
            -86.7618425
        ],
        [
            29.984544,
            -90.2042505
        ],
        [
            40.7143528,
            -74.00597309999999
        ],
        [
            35.4675602,
            -97.5164276
        ],
        [
            28.2919557,
            -81.40757099999999
        ],
        [
            39.8373479,
            -75.1545381
        ],
        [
            33.48374,
            -111.9164779
        ],
        [
            40.44062479999999,
            -79.9958864
        ],
        [
            45.5809394,
            -122.7077056
        ],
        [
            41.679407,
            -71.104972
        ],
        [
            35.772096,
            -78.6386145
        ],
        [
            37.5407246,
            -77.4360481
        ],
        [
            34.0633443,
            -117.6508876
        ],
        [
            43.16103,
            -77.6109219
        ],
        [
            38.672006,
            -121.367741
        ],
        [
            38.6105426,
            -90.3371889
        ],
        [
            40.7607793,
            -111.8910474
        ],
        [
            29.4241219,
            -98.49362819999999
        ],
        [
            33.0763386,
            -117.2205771
        ],
        [
            37.6788056,
            -122.2880726
        ],
        [
            37.3666767,
            -121.958687
        ],
        [
            47.610377,
            -122.2006786
        ],
        [
            27.9249117,
            -82.5943072
        ],
        [
            32.2217429,
            -110.926479
        ],
        [
            36.9211118,
            -76.32017549999999
        ],
        [
            38.9897306,
            -77.41000939999999
        ]
    ],
        "names": [
        "Atlanta-Sandy Springs-Marietta, GA",
        "Austin-Round Rock, TX",
        "Baltimore-Towson, MD",
        "Birmingham-Hoover, AL",
        "Boston-Cambridge-Quincy, MA-NH",
        "Buffalo-Niagara Falls, NY",
        "Charlotte-Gastonia-Concord, NC-SC",
        "Chicago-Naperville-Joliet, IL-IN-WI",
        "Cincinnati-Middletown, OH-KY-IN",
        "Cleveland-Elyria-Mentor, OH",
        "Columbus, OH",
        "Dallas-Fort Worth-Arlington, TX",
        "Denver-Aurora-Broomfield, CO",
        "Detroit-Warren-Livonia, MI",
        "Hartford-West Hartford-East Hartford, CT",
        "Houston-Sugar Land-Baytown, TX",
        "Indianapolis-Carmel, IN",
        "Jacksonville, FL",
        "Kansas City, MO-KS",
        "Las Vegas-Paradise, NV",
        "Los Angeles-Long Beach-Santa Ana, CA",
        "Louisville-Jefferson County, KY-IN",
        "Memphis, TN-MS-AR",
        "Miami-Fort Lauderdale-Pompano Beach, FL",
        "Milwaukee-Waukesha-West Allis, WI",
        "Minneapolis-St. Paul-Bloomington, MN-WI",
        "Nashville-Davidson--Murfreesboro--Franklin, TN",
        "New Orleans-Metairie-Kenner, LA",
        "New York-Northern New Jersey-Long Island, NY-NJ-PA",
        "Oklahoma City, OK",
        "Orlando-Kissimmee, FL",
        "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
        "Phoenix-Mesa-Scottsdale, AZ",
        "Pittsburgh, PA",
        "Portland-Vancouver-Beaverton, OR-WA",
        "Providence-New Bedford-Fall River, RI-MA",
        "Raleigh-Cary, NC",
        "Richmond, VA",
        "Riverside-San Bernardino-Ontario, CA",
        "Rochester, NY",
        "Sacramento--Arden-Arcade--Roseville, CA",
        "St. Louis, MO-IL",
        "Salt Lake City, UT",
        "San Antonio, TX",
        "San Diego-Carlsbad-San Marcos, CA",
        "San Francisco-Oakland-Fremont, CA",
        "San Jose-Sunnyvale-Santa Clara, CA",
        "Seattle-Tacoma-Bellevue, WA",
        "Tampa-St. Petersburg-Clearwater, FL",
        "Tucson, AZ",
        "Virginia Beach-Norfolk-Newport News, VA-NC",
        "Washington-Arlington-Alexandria, DC-VA-MD-WV"
    ],
        "population": {
        "2005": [
            4828838,
            1406364,
            2583923,
            1069498,
            4270631,
            1111554,
            1491330,
            9272117,
            2026216,
            2082379,
            1665428,
            5727391,
            2327901,
            4428941,
            1140319,
            5193448,
            1608730,
            1223882,
            1909666,
            1691213,
            12703423,
            1183916,
            1236181,
            5334685,
            1480517,
            3076239,
            1384347,
            1292774,
            18351099,
            1124533,
            1903273,
            5644383,
            3805123,
            2314937,
            2063277,
            1565972,
            924415,
            1132036,
            3827946,
            996309,
            2004476,
            2725336,
            1017572,
            1844018,
            2824259,
            4071751,
            1726057,
            3133715,
            2596556,
            902720,
            1585416,
            5119490
        ],
            "2006": [
            5134871,
            1506425,
            2658405,
            1089883,
            4455217,
            1137520,
            1582627,
            9506859,
            2105010,
            2114155,
            1725570,
            6006094,
            2408622,
            4468966,
            1188841,
            5542048,
            1669370,
            1276856,
            1966790,
            1777539,
            12950129,
            1220636,
            1268328,
            5463857,
            1509981,
            3175041,
            1455296,
            1024678,
            18818536,
            1173632,
            1984855,
            5826742,
            4039182,
            2370776,
            2137599,
            1612989,
            995662,
            1196411,
            4026135,
            1035435,
            2067117,
            2793988,
            1067190,
            1948437,
            2941454,
            4180027,
            1784826,
            3263497,
            2697731,
            946362,
            1647400,
            5288670
        ],
            "2007": [
            5271550,
            1593400,
            2668056,
            1106765,
            4482857,
            1128183,
            1650667,
            9522879,
            2134864,
            2096471,
            1754337,
            6144489,
            2466591,
            4467592,
            1189113,
            5629127,
            1697964,
            1296676,
            1980977,
            1836333,
            12875587,
            1228764,
            1283579,
            5413212,
            1544398,
            3208212,
            1521751,
            1030363,
            18815988,
            1193698,
            2032496,
            5827962,
            4179427,
            2355712,
            2174631,
            1600856,
            1049674,
            1211608,
            4081371,
            1030495,
            2091120,
            2802282,
            1095693,
            1997969,
            2974859,
            4203898,
            1803549,
            3309347,
            2723949,
            967089,
            1658215,
            5306125
        ],
            "2008": [
            5368070,
            1650887,
            2667117,
            1117348,
            4522858,
            1124309,
            1701600,
            9568532,
            2155435,
            2088291,
            1773120,
            6303407,
            2502881,
            4425110,
            1190512,
            5722952,
            1715128,
            1315218,
            2001074,
            1865746,
            12872808,
            1244363,
            1288506,
            5414772,
            1549308,
            3229878,
            1552922,
            1134029,
            19006798,
            1202714,
            2054574,
            5838471,
            4281899,
            2351192,
            2209114,
            1596611,
            1086404,
            1230502,
            4115871,
            1034090,
            2109832,
            2813373,
            1112866,
            2032024,
            3001072,
            4274531,
            1819087,
            3344813,
            2733761,
            1012018,
            1657534,
            5356474
        ],
            "2009": [
            5476664,
            1705075,
            2690886,
            1131070,
            4588680,
            1123804,
            1745524,
            9580609,
            2170828,
            2091286,
            1801848,
            6447228,
            2554474,
            4403437,
            1195998,
            5865086,
            1744680,
            1327812,
            2066732,
            1902834,
            12874797,
            1259031,
            1304905,
            5547051,
            1559667,
            3269814,
            1581908,
            1189981,
            19069796,
            1227278,
            2082421,
            5968252,
            4364094,
            2354957,
            2241913,
            1600642,
            1125827,
            1235458,
            4143113,
            1035566,
            2127355,
            2825769,
            1130293,
            2073092,
            3053793,
            4317853,
            1839883,
            3407848,
            2747272,
            1020200,
            1675792,
            5476241
        ]
    },
        "unemployment": {
            "2005": [
                7,
                6.7,
                6,
                6.2,
                5.9,
                8.1,
                7.7,
                8,
                6.6,
                8.1,
                6.8,
                7.1,
                6.2,
                9.8,
                6.8,
                8,
                6.8,
                6,
                6.3,
                6.2,
                6.9,
                7.3,
                8.5,
                7.1,
                7.5,
                5.5,
                5.7,
                10.2,
                6.8,
                6.4,
                6.2,
                6.9,
                5.5,
                6.6,
                7.6,
                6.6,
                5.1,
                5.6,
                7.3,
                6,
                6.7,
                6.9,
                5.3,
                6.5,
                5.5,
                7.1,
                6.8,
                6.6,
                5.8,
                6.8,
                6.3,
                5
            ],
            "2006": [
                7.1,
                6,
                5.3,
                6.4,
                5.4,
                6.1,
                6.5,
                7.5,
                6.4,
                7.9,
                6.4,
                6.7,
                5.7,
                10.5,
                6.3,
                7.3,
                6.5,
                5.8,
                5.7,
                5.3,
                6.1,
                6.8,
                9.2,
                5.6,
                6.1,
                5.3,
                5.9,
                7.9,
                6.5,
                5.6,
                5.4,
                6.8,
                4.2,
                5.9,
                6.1,
                6.1,
                4.9,
                5.8,
                7.4,
                6.4,
                6.7,
                6.6,
                4.4,
                6.7,
                5,
                6,
                6.1,
                5.5,
                5.5,
                6.3,
                4.7,
                4.6
            ],
            "2007": [
                7.2,
                5.3,
                5.7,
                6.7,
                5.7,
                6.6,
                7.1,
                7.2,
                5.8,
                8,
                5.9,
                5.6,
                5.4,
                10.7,
                5.9,
                5.9,
                5.7,
                6.6,
                5.9,
                5.5,
                6,
                6.5,
                9,
                5.7,
                6.3,
                5.6,
                5.7,
                6.2,
                6,
                5.3,
                5.8,
                6.6,
                5.2,
                5.5,
                6.2,
                6.5,
                4.5,
                5.7,
                7.8,
                6.3,
                6.9,
                6.7,
                3.9,
                5.8,
                6.1,
                5.5,
                5.4,
                5,
                6.5,
                6.1,
                5.4,
                4.7
            ],
            "2008": [
                7.2,
                5.4,
                5.5,
                6.4,
                5.6,
                6.5,
                6.6,
                7.1,
                5.8,
                7.8,
                5.5,
                5.4,
                4.8,
                10.4,
                5.8,
                5.2,
                6.3,
                6.8,
                5.6,
                7.3,
                6.7,
                6.7,
                8.5,
                7.2,
                5.5,
                5.1,
                5.2,
                6.8,
                6.1,
                4.5,
                7.4,
                6.5,
                5.3,
                5.2,
                6.7,
                7.3,
                5.4,
                6,
                10,
                5.9,
                8,
                6.3,
                3.7,
                5.5,
                6.9,
                6.2,
                6,
                4.7,
                7.4,
                6.9,
                5.3,
                4.9
            ],
            "2009": [
            11.6,
            8.1,
            7.9,
            9.9,
            8.6,
            9.4,
            11.1,
            11.3,
            9.7,
            12,
            8.6,
            8.8,
            8.7,
            16.3,
            8.4,
            7.6,
            9.9,
            10.3,
            8.2,
            12.1,
            10.5,
            10.1,
            11.8,
            11.7,
            9.2,
            8.4,
            9.4,
            9.1,
            9.3,
            6.4,
            12.6,
            9.9,
            10.3,
            8.3,
            11.6,
            10.3,
            8.5,
            8.7,
            14.4,
            8.3,
            11.9,
            9.5,
            7.8,
            7.8,
            9.6,
            9.8,
            10.5,
            8.6,
            11.7,
            10.3,
            7.9,
            7.3
        ]
        }
    }
}];

(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.blueDatePicker = function () {

        if (! this.length) return;

        if (typeof $.fn.datepicker != 'undefined') {

            this.datepicker();

        }

    };

    $('.datepicker').blueDatePicker();


    $.fn.blueTimePicker = function () {

        if (! this.length) return;

        if (typeof $.fn.datepicker != 'undefined') {

            this.timepicker({
                minuteStep: 5,
                showInputs: false,
                disableFocus: true
            });

        }

    };


    $('#timepicker3').blueTimePicker({
        minuteStep: 5,
        showInputs: false,
        disableFocus: true
    });


})(jQuery);
(function ($) {

    $('.filestyle').filestyle({
        input:false,
        icon:false,
        buttonText:'Upload',
        buttonName:'btn-default'
    });

    $('#data-table').dataTable();

    // activate showMail toggle for under 768 px;
    $('[data-toggle="showMail"]').on('click', function () {
        if ($( window ).width() < 768) $('.email > .media-body').toggle();
    });

    $('[data-toggle="tooltip"]').tooltip();

}(jQuery));

(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkTouchSpin = function () {

        if (! this.length) return;

        if (typeof $.fn.TouchSpin != 'undefined') {

            this.TouchSpin();

        }

    };

    $('[data-toggle="touch-spin"]').tkTouchSpin();

}(jQuery));
if ($('#map-canvas').length > 0) {
    var myMap = function() {

        var	options = {
            zoom: 4,
            center: new google.maps.LatLng(38.810821,-95.053711),
            //mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles:
                [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#448aff"},{"visibility":"on"}]}]
        }

        /*
         Load the map then markers
         @param object settings (configuration options for map)
         @return undefined
         */
        function init(settings) {
            map = new google.maps.Map(document.getElementById( settings.idSelector ), options);
            markerLocation = settings.markerLocation;
            loadMarkers();
        }

        /*
         =======
         MARKERS
         =======
         */
        markers = {};
        markerList = [];

        /*
         Load markers onto the Google Map from a provided array or demo personData (data.js)
         @param array personList [optional] (list of people to load)
         @return undefined
         */
        function loadMarkers(personList) {

            // optional argument of person
            var people = ( typeof personList !== 'undefined' ) ? personList : personData;

            var j = 1; // for lorempixel

            for( i=0; i < people.length; i++ ) {
                var person = people[i];

                // if its already on the map, dont put it there again
                if( markerList.indexOf(person.id) !== -1 ) continue;

                var lat = person.lat,
                    lng = person.lng,
                    markerId = person.id;

                var infoWindow = new google.maps.InfoWindow({
                    maxWidth: 400
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng( lat, lng ),
                    title: person.name,
                    markerId: markerId,
                    icon: markerLocation,
                    map: map
                });

                markers[markerId] = marker;
                markerList.push(person.id);

                if( j > 10 ) j = 1; // for lorempixel, the thumbnail image
                var content = ['<div class="map-box"><img src="http://lorempixel.com/90/90/people/',
                    j, '" width="90" height="90">', '<div class="iw-text"><h4 class="margin-none">', person.name,
                    '</h4>Age: ', person.age, '<br/>Followers: ', person.followers,
                    '<br/>College: ', person.college, '</div></div>'].join('');
                j++; // lorempixel

                google.maps.event.addListener(marker, 'click', (function (marker, content) {
                    return function() {
                        infoWindow.setContent(content);
                        infoWindow.open(map, marker);
                    }
                })(marker, content));
            }
        }

        /*
         Remove marker from map and our list of current markers
         @param int id (id of the marker element)
         @return undefined
         */
        function removePersonMarker(id) {
            if( markers[id] ) {
                markers[id].setMap(null);
                loc = markerList.indexOf(id);
                if (loc > -1) markerList.splice(loc, 1);
                delete markers[id];
            }
        }

        /*
         ======
         FILTER
         ======
         */

        // default all filters off
        var filter = {
            followers: 0,
            college: 0,
            from: 0
        }
        var filterMap;

        /*
         Helper function
         @param array a (array of arrays)
         @return array (common elements from all arrays)
         */
        function reduceArray(a) {
            r = a.shift().reduce(function(res, v) {
                if (res.indexOf(v) === -1 && a.every(function(a) {
                        return a.indexOf(v) !== -1;
                    })) res.push(v);
                return res;
            }, []);
            return r;
        }

        /*
         Helper function
         @param string n
         @return bool
         */
        function isInt(n) {
            return n % 1 === 0;
        }


        /*
         Decides which filter function to call and stacks all filters together
         @param string filterType (the property that will be filtered upon)
         @param string value (selected filter value)
         @return undefined
         */
        function filterCtrl(filterType, value) {
            // result array
            var results = [];

            if( isInt(value) ) {
                filter[filterType] = parseInt(value);
            } else {
                filter[filterType] = value;
            }

            for( k in filter ) {
                if( !filter.hasOwnProperty(k) && !( filter[k] !== 0 ) ) {
                    // all the filters are off
                    loadMarkers();
                    return false;
                } else if ( filter[k] !== 0 ) {
                    // call filterMap function and append to r array
                    results.push( filterMap[k]( filter[k] ) );
                } else {
                    // fail silently
                }
            }

            if( filter[filterType] === 0 ) results.push( personData );

            /*
             if there is 1 array (1 filter applied) set it,
             else find markers that are common to every results array (pass every filter)
             */
            if( results.length === 1 ) {
                results = results[0];
            } else {
                results = reduceArray( results );
            }

            loadMarkers( results );

        }

        /*
         The keys in this need to be mapped 1-to-1 with the keys in the filter variable.
         */
        filterMap = {
            followers: function( value ) {
                return filterIntsLessThan('followers', value);
            },

            college: function( value ) {
                return filterByString('college', value);
            },

            from: function( value ) {
                return filterByString('from', value);
            }
        }

        /*
         Filters marker data based upon a string match
         @param string dataProperty (the key that will be filtered upon)
         @param string value (selected filter value)
         @return array (people that made it through the filter)
         */
        function filterByString( dataProperty, value ) {
            var people = [];

            for( var i=0; i < personData.length; i++ ) {
                var person = personData[i];
                if( person[dataProperty] == value ) {
                    people.push( person );
                } else {
                    removePersonMarker( person.id );
                }
            }
            return people;
        }

        /*
         Filters out integers that are under the provided value
         @param string dataProperty (the key that will be filtered upon)
         @param int value (selected filter value)
         @return array (people that made it through the filter)
         */
        function filterIntsLessThan( dataProperty, value ) {
            var people = [];

            for( var i=0; i < personData.length; i++ ) {
                var person = personData[i];
                if( person[dataProperty] > value ) {
                    people.push( person )
                } else {
                    removePersonMarker( person.id );
                }
            }
            return people;
        }

        // Takes all the filters off
        function resetFilter() {
            filter = {
                followers: 0,
                college: 0,
                from: 0
            }
        }

        return {
            init: init,
            loadMarkers: loadMarkers,
            filterCtrl: filterCtrl,
            resetFilter: resetFilter
        };
    }();
}
(function($) {

    if ($('#map-canvas').length > 0) {
        var mapConfig = {
            idSelector: 'map-canvas',
            markerLocation: 'images/marker.png'
        }
        myMap.init(mapConfig);

        $('.load-btn').on('click', function () {
            var $this = $(this);
            // reset everything
            $('select').val(0);
            myMap.resetFilter();
            myMap.loadMarkers();

            if ($this.hasClass('is-success')) {
                $this.removeClass('is-success').addClass('is-default');
            }
        });

        $('.followers-select').on('change', function () {
            myMap.filterCtrl('followers', this.value);
        });

        $('.college-select').on('change', function () {
            myMap.filterCtrl('college', this.value);
        });

        $('.from-select').on('change', function () {
            myMap.filterCtrl('from', this.value);
        });
    }
}(jQuery));
(function ($) {

    if ($('#graphWeek').length > 0) {
        new Morris.Bar({
            element: 'graphWeek',
            data: [
                {y: 'Monday', a: '3129'},
                {y: 'Tuesday', a: '4872'},
                {y: 'Wednesday', a: '7746'},
                {y: 'Thursday', a: '6398'},
                {y: 'Friday', a: '2299'},
                {y: 'Saturday', a: '992'},
                {y: 'Sunday', a: '3111'}
            ],
            xkey: 'y',
            ykeys: 'a',
            labels: '',
            barSizeRatio: 0.6,
            grid: false,
            hideHover: true,
            barColors: function (row, series, type) {
                if (row.label == "Monday") return "#448aff";
                else if (row.label == "Tuesday") return "#f2522b";
                else if (row.label == "Wednesday") return "#448aff";
                else if (row.label == "Thursday") return "#f2522b";
                else if (row.label == "Friday") return "#448aff";
                else if (row.label == "Saturday") return "#f2522b";
                else if (row.label == "Sunday") return "#448aff";
            },
            hoverCallback: function (index, options, content, object) {

                $('#graphWeek-y').text(object.y);
                $('#graphWeek-a').text('$' + object.a);
            }
        });
    }

    if ($('#graphWeek2').length > 0) {
        new Morris.Bar({
            element: 'graphWeek2',
            data: [
                {y: 'Monday', a: '3129'},
                {y: 'Tuesday', a: '4872'},
                {y: 'Wednesday', a: '7746'},
                {y: 'Thursday', a: '6398'},
                {y: 'Friday', a: '2299'},
                {y: 'Saturday', a: '992'},
                {y: 'Sunday', a: '3111'}
            ],
            xkey: 'y',
            ykeys: 'a',
            labels: '',
            barSizeRatio: 0.6,
            grid: false,
            hideHover: true,
            barColors: function (row, series, type) {
                return "#ccc";
            },
            hoverCallback: function (index, options, content, object) {

                $('#graphWeek2-y').text(object.y);
                $('#graphWeek2-a').text('$' + object.a);
            }
        });
    }

    if ($('#graphWeek3').length > 0) {
        new Morris.Bar({
            element: 'graphWeek3',
            data: [
                {y: 'Monday', a: '3129'},
                {y: 'Tuesday', a: '4872'},
                {y: 'Wednesday', a: '7746'},
                {y: 'Thursday', a: '6398'},
                {y: 'Friday', a: '2299'},
                {y: 'Saturday', a: '992'},
                {y: 'Sunday', a: '3111'}
            ],
            xkey: 'y',
            ykeys: 'a',
            labels: '',
            barSizeRatio: 0.6,
            grid: false,
            hideHover: true,
            barColors: function (row, series, type) {
                return "#fff";
            },
            hoverCallback: function (index, options, content, object) {

                $('#graphWeek3-y').text(object.y);
                $('#graphWeek3-a').text('$' + object.a);
            }
        });
    }


    if ($('#line-example').length > 0) {
        /*
         * Play with this code and it'll update in the panel opposite.
         *
         * Why not try some of the options above?
         */
        new Morris.Line({
            element: 'line-example',
            data: [
                { y: '2006', a: 100, b: 90 },
                { y: '2007', a: 75,  b: 65 },
                { y: '2008', a: 50,  b: 40 },
                { y: '2009', a: 75,  b: 65 },
                { y: '2010', a: 50,  b: 40 },
                { y: '2011', a: 75,  b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#448aff', '#f2522b']
        });
    }

    if ($('#area-example').length > 0) {
        /*
         * Play with this code and it'll update in the panel opposite.
         *
         * Why not try some of the options above?
         */
        Morris.Area({
            element: 'area-example',
            data: [
                { y: '2006', a: 100, b: 90 },
                { y: '2007', a: 75,  b: 65 },
                { y: '2008', a: 50,  b: 40 },
                { y: '2009', a: 75,  b: 65 },
                { y: '2010', a: 50,  b: 40 },
                { y: '2011', a: 75,  b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#448aff', '#f2522b']
        });
    }
}(jQuery));
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     * @todo: Angular directive.
     */
    $.fn.tkNestable = function () {

        if (! this.length) return;

        if (typeof $.fn.nestable != 'undefined') {

            this.nestable({
                rootClass: 'nestable',
                listNodeName: 'ul',
                listClass: 'nestable-list',
                itemClass: 'nestable-item',
                dragClass: 'nestable-drag',
                handleClass: 'nestable-handle',
                collapsedClass: 'nestable-collapsed',
                placeClass: 'nestable-placeholder',
                emptyClass: 'nestable-empty'
            });

        }

    };

    $('.nestable').tkNestable();

})(jQuery);

(function ($) {

    var showLeftPush = document.getElementById('showLeftPush'),
        showRightPush = document.getElementById('showRightPush'),
        showUserPush = document.getElementById('showUserPush'),
        menuRight = document.getElementById( 'sidebar-right' ),
        menuLeft = document.getElementById( 'sidebar-left' ),
        body = document.body;

    // Left Sidebar
    if (showLeftPush !== null) {
        showLeftPush.onclick = function () {
            closeSidebar('sidebar-left');

            // some sidebars don't need an overlay (ex. chat) and we need to remove body hanging class
            $('body').removeClass('no-overlay');

            classie.toggle(this, 'active');
            classie.toggle(body, 'sidebar-push-toright');
            classie.toggle(menuLeft, 'sidebar-left-open');
        };
    }

    // Right Sidebar (Toggle Right Button) (Mobile)
    if (showRightPush !== null) {
        showRightPush.onclick = function () {
            //disableOther();

            if ($(".sidebar-right-open").length > 0 && $('.sidebar-right-open').attr('id') != 'sidebar-right') {
                // other right sidebar is open keep overlay
                $('body').addClass('sidebar-push-toleft');
            }
            else {
                classie.toggle(body, 'sidebar-push-toleft');
            }

            classie.toggle(this, 'active');
            closeSidebar('sidebar-right');

            // some sidebars don't need an overlay (ex. chat) and we need to remove body hanging class
            $('body').removeClass('no-overlay');

            classie.toggle(menuRight, 'sidebar-right-open');
        };
    }
    // Right Sidebar (User Photo) (Desktop)
    if (showUserPush) {
        showUserPush.onclick = function () {

            if ($(".sidebar-right-open").length > 0 && $('.sidebar-right-open').attr('id') != 'sidebar-right') {
                // other right sidebar is open keep overlay
                $('body').addClass('sidebar-push-toleft');
            }
            else {
                classie.toggle(body, 'sidebar-push-toleft');
                console.log('normal');
            }

            closeSidebar('sidebar-right');

            // some sidebars don't need an overlay (ex. chat) and we need to remove body hanging class
            $('body').removeClass('no-overlay');

            classie.toggle(this, 'active');
            classie.toggle(menuRight, 'sidebar-right-open');
        };
    }


}(jQuery));



function closeSidebar(exceptId) {
    // close all open sidebars
    $(".sidebar:not(#"+exceptId+")").removeClass(function (index, css) {
        return (css.match(/\S+\b-open/g) || []).join(' ');
    });

}

$('body .overlay-disabled').on('click', function () {
    // remove all push-to classes from body
    $('body').removeClass (function (index, css) {
        return (css.match (/\S+\b-push-to\S+/g) || []).join(' ');
    });
    closeSidebar();
});

(function ($) {

    if ($('#chat').length > 0) {

        var chat = document.getElementById('chat'),
            chatMessage = document.getElementById('chatMessage'),
            body = document.body;


        $('#chatMessages').on('click', function () {
            // Right Sidebar (Toggle Right Button) (Mobile)
            if ($(".sidebar-right-open").length > 0 && $('.sidebar-right-open').attr('id') != 'chat') {
                // other right sidebar is open keep overlay
                $('body').addClass('sidebar-push-toleft');
            }
            else {
                classie.toggle(body, 'sidebar-push-toleft');
                //classie.addClass(body, 'no-overlay');
            }

            closeSidebar('sidebar-right');
            classie.toggle(chat, 'sidebar-right-open');
        });
        // open message sidebar
        $('#chat ul li').on('click' , function () {

            classie.toggle(chatMessage, 'sidebar-right-open');

        });




        $('#chat [data-toggle="close"]').on('click', function () {
            // remove all push-to classes from body
            $('body').removeClass (function (index, css) {
                return (css.match (/\S+\b-push-to\S+/g) || []).join(' ');
            });
            closeSidebar();
        });


        $('#chatMessage [data-toggle="close"]').on('click', function () {
            // remove all push-to classes from body
            classie.toggle(chatMessage, 'sidebar-right-open');
        });


    }

}(jQuery));
(function ($) {

    // if scroll offset is required
    $('.sidebar .nicescroll .wrapper').niceScroll({scrollspeed: 26, cursorcolor:"#429eee", cursorborder: 0, horizrailenabled: false, railoffset: {left:-1}});

    // Disable Scroll when the mouse is over the sidebar
    $('.sidebar')
        .mouseover(function() {
            $('html').css('overflow','hidden');
        })
        .mouseout(function() {
            $('html').removeAttr('style');
    });

    // collapse
    $(".nav-sidebar .submenu > a").on('click', function (evt) {

        evt.preventDefault();


        var parent = $(this).closest('.sidebar');
        var submenuOpen = parent.find('.submenu .in');

        // Close Parent Open Submenus
        submenuOpen.collapse('hide');

        // Show Current Submenu
        $(this).next('ul').show().collapse('show');


        // display:none All Previously Opene Submenus
        submenuOpen.hide();

        // Toggle Open Classes
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
        }

        parent.find('a.open').removeClass('open');
        $(this).addClass('open');


    });

    // nicescroll resize without debounce delay on collapse
    $('sidebar').find('.collapse').on('shown.bs.collapse', function () {
        $(".sidebar").getNiceScroll().show().onResize();
    });


}(jQuery));
(function ($) {

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSlider = function () {

        if (! this.length) return;

        if (typeof $.fn.bootstrapSlider != 'undefined') {

            this.bootstrapSlider();

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSliderFormatter = function () {


        if (! this.length) return;

        if (typeof $.fn.bootstrapSlider != 'undefined') {

            this.bootstrapSlider({

                formatter: function (value) {
                    return 'Current value: ' + value;
                }
            });


        }

    };


    $('[data-slider="default"]').tkSlider();
    $('[data-slider="formatter"]').tkSliderFormatter();


})(jQuery);
/* This is a prototype */
var position = 'bottom-left';
var background = 'bg-default';

var createSnackbar = (function() {
    // Any snackbar that is already shown
    var previous = null;

    return function(message, actionText, action) {
        if (previous) {
            previous.dismiss();
        }
        var snackbar = document.createElement('div');
        snackbar.className = 'snack';
        snackbar.className = snackbar.className + ' ' + position + ' ' + background;

        snackbar.dismiss = function() {
            this.style.opacity = 0;
        };
        var text = document.createTextNode(message);
        snackbar.appendChild(text);
        if (actionText) {
            if (!action) {
                action = snackbar.dismiss.bind(snackbar);
            }
            var actionButton = document.createElement('button');
            actionButton.className = 'action';
            actionButton.innerHTML = actionText;
            actionButton.addEventListener('click', action);
            snackbar.appendChild(actionButton);
        }
        setTimeout(function() {
            if (previous === this) {
                previous.dismiss();
            }
        }.bind(snackbar), 5000);

        snackbar.addEventListener('transitionend', function(event, elapsed) {
            if (event.propertyName === 'opacity' && this.style.opacity == 0) {
                this.parentElement.removeChild(this);
                if (previous === this) {
                    previous = null;
                }
            }
        }.bind(snackbar));



        previous = snackbar;
        document.body.appendChild(snackbar);
        // In order for the animations to trigger, I have to force the original style to be computed, and then change it.
        if (position == 'bottom-left' || position == 'bottom-right') {
            getComputedStyle(snackbar).bottom;
            snackbar.style.bottom = '0px';
        }
        if (position == 'top-left' || position == 'top-right') {
            getComputedStyle(snackbar).top;
            snackbar.style.top = '0px';
        }
        snackbar.style.opacity = 1;
    };
})();

(function ($) {


    var longMessage = "This is a longer message that won't fit on one line. It is, inevitably, quite a boring thing. Hopefully it is still useful.";
    var shortMessage = 'Your message was sent';

    $('#single-snack').on('click', function() {
        position = $(this).data('position');
        createSnackbar(shortMessage);
    });

    $('#multi-snack').on('click', function() {
        if ($(this).data('position')) position = $(this).data('position');
        createSnackbar(longMessage);
    });

    $('#singleaction-snack').on('click', function() {
        if ($(this).data('position')) position = $(this).data('position');
        createSnackbar(shortMessage, 'Dismiss');
    });

    $('#multiaction-snack').on('click', function() {
        if ($(this).data('position')) position = $(this).data('position');
        createSnackbar(longMessage, 'Wot?', function() { alert('Moo!'); });
    });




    // trigger message when div id notification exists
    if ($('#notification').length > 0) {
        setTimeout(function() {
            var message = $('#notification').html();
            console.log(message);
            position = $('#notification').data('position');
            //console.log(position);
            createSnackbar(message, 'Dismiss');
        }, 3000);
    }

}(jQuery));
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSummernote = function () {

        if (! this.length) return;

        if (typeof $.fn.summernote != 'undefined') {

            this.summernote({
                height: 300
            });

        }

    };

    $(function () {
        $('.summernote').each(function () {
            $(this).tkSummernote();
        });
    });

})(jQuery);

(function ($){

    var eltPrimary = $('[data-role="tagsinput tag-primary"]');
    eltPrimary.tagsinput({
        tagClass: 'label label-primary'
    });

    var eltDefault = $('[data-role="tagsinput tag-default"]');
    eltDefault.tagsinput({
        tagClass: 'label label-default'
    });

    var eltDanger = $('[data-role="tagsinput tag-danger"]');
    eltDanger.tagsinput({
        tagClass: 'label label-danger'
    });

}(jQuery));
(function ($) {

    var tree_glyph_options = {
            map: {
                checkbox: "fa fa-square-o fa-fw",
                checkboxSelected: "fa fa-check-square fa-fw",
                checkboxUnknown: "fa fa-check-square fa-fw fa-muted",
                error: "fa fa-exclamation-triangle fa-fw",
                expanderClosed: "fa fa-caret-right fa-fw",
                expanderLazy: "fa fa-angle-right fa-fw",
                expanderOpen: "fa fa-caret-down fa-fw",
                doc: "fa fa-file-o fa-fw",
                noExpander: "",
                docOpen: "fa fa-file fa-fw",
                loading: "fa fa-refresh fa-spin fa-fw",
                folder: "fa fa-folder fa-fw",
                folderOpen: "fa fa-folder-open fa-fw"
            }
        },
        tree_dnd_options = {
            autoExpandMS: 400,
            focusOnClick: true,
            preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
            preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
            dragStart: function(node, data) {
                /** This function MUST be defined to enable dragging for the tree.
                 *  Return false to cancel dragging of node.
                 */
                return true;
            },
            dragEnter: function(node, data) {
                /** data.otherNode may be null for non-fancytree droppables.
                 *  Return false to disallow dropping on node. In this case
                 *  dragOver and dragLeave are not called.
                 *  Return 'over', 'before, or 'after' to force a hitMode.
                 *  Return ['before', 'after'] to restrict available hitModes.
                 *  Any other return value will calc the hitMode from the cursor position.
                 */
                // Prevent dropping a parent below another parent (only sort
                // nodes under the same parent)
                /*
                 if(node.parent !== data.otherNode.parent){
                 return false;
                 }
                 // Don't allow dropping *over* a node (would create a child)
                 return ["before", "after"];
                 */
                return true;
            },
            dragDrop: function(node, data) {
                /** This function MUST be defined to enable dropping of items on
                 *  the tree.
                 */
                data.otherNode.moveTo(node, data.hitMode);
            }
        };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFancyTree = function(){

        if (! this.length) return;

        if (typeof $.fn.fancytree == 'undefined') return;

        var extensions = [ "glyph" ];
        if (typeof this.attr('data-tree-dnd') !== "undefined") {
            extensions.push( "dnd" );
        }
        this.fancytree({
            extensions: extensions,
            glyph: tree_glyph_options,
            dnd: tree_dnd_options,
            clickFolderMode: 3,
            checkbox: typeof this.attr('data-tree-checkbox') !== "undefined" || false,
            selectMode: typeof this.attr('data-tree-select') !== "undefined" ? parseInt(this.attr('data-tree-select')) : 2
        });

    };

    // using default options
    $('[data-toggle="tree"]').each(function () {
        $(this).tkFancyTree();
    });

}(jQuery));
(function ($){

        if ($('#world-map-gdp').length > 0) {
            var data = unemployment[ 0 ];
            var val = 2009;

            statesValues = jvm.values.apply({}, jvm.values(data.states)),
                metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
                metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));

            $('#world-map-gdp').vectorMap({
                map: 'us_aea_en',
                markers: data.metro.coords,
                backgroundColor: "none",
                markerStyle: {
                    initial: {
                        stroke: '#fff',
                        "stroke-width": 1.3,
                    },
                    hover: {
                        fill: "#424242",
                        stroke: 'transparent',
                        "stroke-width": 1.3,
                        cursor: 'pointer'
                    }
                },
                series: {
                    markers: [ {
                        attribute: 'fill',
                        scale: [ '#448aff' ],
                        values: data.metro.unemployment[ val ],
                        min: jvm.min(metroUnemplValues),
                        max: jvm.max(metroUnemplValues)
                    }, {
                        attribute: 'r',
                        scale: [ 5, 20 ],
                        values: data.metro.population[ val ],
                        min: jvm.min(metroPopValues),
                        max: jvm.max(metroPopValues)
                    } ],
                    regions: [ {
                        scale: [ '#dddddd', '#aaaaaa' ],
                        attribute: 'fill',
                        values: data.states[ val ],
                        min: jvm.min(statesValues),
                        max: jvm.max(statesValues)
                    } ]
                },
                onMarkerTipShow: function (event, label, index) {
                    label.html(
                        '<b>' + data.metro.names[ index ] + '</b><br/>' +
                        '<b>Population: </b>' + data.metro.population[ val ][ index ] + '</br>' +
                        '<b>Unemployment rate: </b>' + data.metro.unemployment[ val ][ index ] + '%'
                    );
                },
                onRegionTipShow: function (event, label, code) {
                    label.html(
                        '<b>' + label.html() + '</b></br>' +
                        '<b>Unemployment rate: </b>' + data.states[ val ][ code ] + '%'
                    );
                }
            });

            var map = $('#world-map-gdp').vectorMap('get', 'mapObject');

        }
}(jQuery));