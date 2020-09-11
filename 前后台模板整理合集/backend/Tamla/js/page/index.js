$(function() {
    "use strict";

	
	/*VECTOR MAP PLUGIN FUNCTION  */
		
		$(function(){
			 
			    $("#world-map").vectorMap({
            map: "world_mill_en",
            scaleColors: ["#C8EEFF", "#0071A4"],
            normalizeFunction: "polynomial",
            hoverOpacity: 0.7,
            hoverColor: false,
            zoomOnScroll: false,
           markerStyle: {
                initial: {
                    fill: "#e04a1a",
                    stroke: "#FF604F",
                    "fill-opacity": 0.5,
                    "stroke-width": 1,
                    "stroke-opacity": 0.4,
                },
                hover: {
                    stroke: "#C54638",
                    "stroke-width": 2
                },
                selected: {
                    fill: "#C54638"
                }
            },
            regionStyle: {
                initial: {
                    fill: "#9f9f9f",
                    "fill-opacity": 0.9,
                    stroke: "#fff",
                },
                hover: {
                    "fill-opacity": 0.7
                },
                selected: {
                    fill: "#1A94E0"
                }
            },
            
            backgroundColor: "#f1f4f9",
            markers: [{
                latLng: [41.9, 12.45],
                name: "Vatican City"
            }, {
                latLng: [43.73, 7.41],
                name: "Monaco"
            }, {
                latLng: [-0.52, 166.93],
                name: "Nauru"
            }, {
                latLng: [-8.51, 179.21],
                name: "Tuvalu"
            }, {
                latLng: [43.93, 12.46],
                name: "San Marino"
            }, {
                latLng: [47.14, 9.52],
                name: "Liechtenstein"
            }, {
                latLng: [7.11, 171.06],
                name: "Marshall Islands"
            }, {
                latLng: [17.3, -62.73],
                name: "Saint Kitts and Nevis"
            }, {
                latLng: [3.2, 73.22],
                name: "Maldives"
            }, {
                latLng: [35.88, 14.5],
                name: "Malta"
            }, {
                latLng: [12.05, -61.75],
                name: "Grenada"
            }, {
                latLng: [13.16, -61.23],
                name: "Saint Vincent and the Grenadines"
            }, {
                latLng: [13.16, -59.55],
                name: "Barbados"
            }, {
                latLng: [17.11, -61.85],
                name: "Antigua and Barbuda"
            }, {
                latLng: [-4.61, 55.45],
                name: "Seychelles"
            }, {
                latLng: [7.35, 134.46],
                name: "Palau"
            }, {
                latLng: [42.5, 1.51],
                name: "Andorra"
            }, {
                latLng: [14.01, -60.98],
                name: "Saint Lucia"
            }, {
                latLng: [6.91, 158.18],
                name: "Federated States of Micronesia"
            }, {
                latLng: [1.3, 103.8],
                name: "Singapore"
            }, {
                latLng: [1.46, 173.03],
                name: "Kiribati"
            }, {
                latLng: [-21.13, -175.2],
                name: "Tonga"
            }, {
                latLng: [15.3, -61.38],
                name: "Dominica"
            }, {
                latLng: [-20.2, 57.5],
                name: "Mauritius"
            }, {
                latLng: [26.02, 50.55],
                name: "Bahrain"
            }, {
                latLng: [0.33, 6.73],
                name: "SÃ£o TomÃ© and PrÃ­ncipe"
            }, ]
        });
		});
			
	
	
	/*  Calender PLUGIN FUNCTION  */

	//Date for the calendar events (dummy data)
    var date = new Date();
    var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
	 //Calendar
    $('#calendar').fullCalendar({
        editable: true, //Enable drag and drop
        events: [
            {
                title: 'Meeting',
                start: new Date(y, m, 3),
                backgroundColor: "#73d1eb", 
                borderColor: "#73d1eb" 
            },
            {
                title: 'Long Holidays',
                start: new Date(y, m, d - 7),
                end: new Date(y, m, d - 6),
                backgroundColor: "#1e7994", 
                borderColor: "#1e7994" 
            },
            {
                title: 'MEET @ Amsterdam',
                start: new Date(y, m, d, 12, 18),
                allDay: false,
                backgroundColor: "#73d1eb", //Blue
                borderColor: "#73d1eb" //Blue
            },
            {
                title: 'Dinner',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                backgroundColor: "#1e7994", //Info (aqua)
                borderColor: "#1e7994" //Info (aqua)
            },
            {
                title: 'Wedding Aniversry',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                backgroundColor: "#73d1eb", 
                borderColor: "#73d1eb" 
            },
            {
                title: 'Click for Themeforest',
                start: new Date(y, m, 22),
                end: new Date(y, m, 26),
                url: 'http://themeforest.net/',
                backgroundColor: "#1e7994", //red
                borderColor: "#1e7994" //red
            }
        ],
        buttonText: {//This is to add icons to the visible buttons
            prev: "<span class='fa fa-caret-left'></span>",
            next: "<span class='fa fa-caret-right'></span>",
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day'
        },
        header: {
            left: 'title',
            center: '',
            right: 'prev,next'
        }
    });
	/*KNOB JS*/
	
	  $(".knob").knob();
	//Todo list Sortable.
    $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: true,
        zIndex: 999999
    }).disableSelection();
	
	
	$(document).ready(function() {
    
//Todo Task Done Toggle Function.
   $(".todo-list li").click(function(){
     $(this).closest('li').toggleClass('task-done');
    });
});
	
	
	
  
  
  
  
     //MORRIS CHARTS
		var graphLine = Morris.Area({
			element: 'graph-morris',
			data: [
				{period: '2014-07-21', iphone: 2700, ipad: 2000, itouch: 2856},
				{period: '2014-07-22', iphone: 9000, ipad: 3000, itouch: 3200},
				{period: '2014-07-23', iphone: 4500, ipad: 1900, itouch: 2400},
				{period: '2014-07-24', iphone: 3400, ipad: 3500, itouch: 5700},
				{period: '2014-07-25', iphone: 7000, ipad: 1800, itouch: 2100},
				{period: '2014-07-26', iphone: 5700, ipad: 4200, itouch: 1700},
				{period: '2014-07-27', iphone: 4500, ipad: 3800, itouch: 1400},
				{period: '2014-07-28', iphone: 17000, ipad: 6000, itouch: 5000},
				{period: '2014-07-29', iphone: 11000, ipad: 5000, itouch: 1500},
				{period: '2014-07-30', iphone: 9000, ipad: 6000, itouch: 1500}
			],
			lineColors: ['#73d1eb', '#37b2d7', '#1e7994', '#3fcfbb', '#626f70', '#8f44ad'],
			xkey: 'period',
			ykeys: ['iphone', 'ipad', 'itouch'],
			labels: ['iPhone', 'iPad', 'iPod Touch'],
			pointSize: 4,
			hideHover: 'auto'
		});
		  
       
	   // Morris pie Chart
Morris.Donut({
    element: 'pie-morris',
    data: [
        {value: 50, label: 'Firefox', formatted: '50' },
        {value: 20, label: 'Safari', formatted: '20' },
        {value: 20, label: 'Chrome', formatted: '20' },
        {value: 10, label: 'Android', formatted: '10' }
    ],
    backgroundColor: '#fff',
    labelColor: '#10404e',
    colors: [
        '#293949','#e84c3d','#1abc9c','#f1c40f'
    ],
    formatter: function (x, data) { return data.formatted; }
});
  
	/*KNOB JS*/
	
	 
	  
	 /*Chat Widget Scroll Bar*/
	 
	 // Div Slimscroll
	$('.chat-scroll').slimscroll({
	  height: '300px',
	  color: '#1e7994',
	  railVisible: true,
		railColor: '#73d1eb'
	});
	
	$('.scroll').slimscroll({
	  height: '300px',
	  color: '#1e7994',
	  railVisible: true,
		railColor: '#73d1eb'
	});

	
	/*Count JS*/
	
		function countUp(count) {
		var div_by = 100,
			speed = Math.round(count / div_by),
			$display = $('.countdown_first'),
			run_count = 1,
			int_speed = 24;
		var int = setInterval(function () {
			if (run_count < div_by) {
				$display.text(speed * run_count);
				run_count++;
			} else if (parseInt($display.text()) < count) {
				var curr_count = parseInt($display.text()) + 1;
				$display.text(curr_count);
			} else {
				clearInterval(int);
			}
		}, int_speed);
	}
	countUp(6791);

function countUp2(count) {
    var div_by = 100,
        speed = Math.round(count / div_by),
        $display = $('.countdown_second'),
        run_count = 1,
        int_speed = 24;
    var int = setInterval(function () {
        if (run_count < div_by) {
            $display.text(speed * run_count);
            run_count++;
        } else if (parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}
countUp2(555);

function countUp3(count) {
    var div_by = 100,
        speed = Math.round(count / div_by),
        $display = $('.countdown_fourth'),
        run_count = 1,
        int_speed = 24;
    var int = setInterval(function () {
        if (run_count < div_by) {
            $display.text(speed * run_count);
            run_count++;
        } else if (parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}
countUp3(999);


	
	
	
	
	
	
	
});