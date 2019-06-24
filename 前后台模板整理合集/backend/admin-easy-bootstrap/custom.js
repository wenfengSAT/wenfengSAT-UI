
	$(function(){
		
		init_prettycheckable();
		init_scrollbar();
		init_gallery();
		init_cowntdown();
		init_tipsy();
		init_easypiechart();
		init_nestables();
		init_timeline_related();
		init_charts();
		init_sidebar();
		init_calendar(); 
		init_sliders();
		init_login_center();
		init_toggles();
		init_sortable();
		init_maps();
		
		/*init_nvdcharts();*/
		
		
		
		function init_maps(){
			
			if(typeof($.fn.gmap3 ) == "undefined"){
				console.log('Error - Maps script is not included!');
				return false;
			}
		
			$('.google_map').gmap3({
			 map: {
				options: {
				  maxZoom: 14 
				}  
			 },
			 marker:{
				address: "Haltern am See, Weseler Str. 151",
				options: {
				 icon: new google.maps.MarkerImage(
				   "http://gmap3.net/skin/gmap/magicshow.png",
				   new google.maps.Size(32, 37, "px", "px")
				 )
				}
			 }
			},
			"autofit" );
		
		}
		
		
		$(".close1").click(function () {
		   $(this).closest('.note-wrapper').slideUp(160);
		});
		
		$("#body-overlay").click(function () { 
			
			$('#sidebar-exp').click();
		
		});
		
		
		function init_sortable(){
			if(typeof($.fn.sortable) == "undefined"){
				console.log('Error - Sortable script is not included!');
				return false;
			}
		
			$( ".widget-holder" ).sortable({ 
				connectWith: ".widget-holder",
				placeholder: "widget-placeholder",
				delay: 0,
				dropOnEmpty: true,
				stop: function( event, ui ) {
					$('.draggable-widget').css('opacity', '1');
					var parent = $(ui.item).closest('.draggable-wrapper');
					var height = 0;
					
					$('.widget-holder', parent).removeAttr('style');
					$('.widget-holder').each(function(){
						if ($(this).height() > height){
							height = $(this).height();
						}
					});
					
					$('.widget-holder', parent).css('min-height', height+'px');
					
				},
				start: function( event, ui ) {
					var height = $(ui.item).height();
					
					$('.draggable-widget').css('opacity', '0.4');
					ui.placeholder.css('height', height+'px');
					
					$(ui.item).css('opacity', '1');
				}
			});
		
		
		}
		
		function init_toggles(){
		
			if(typeof(window.Toggles) == "undefined"){
				console.log('Error - Toggles script is not included!');
				return false;
			}
			
			$('.toggle.on').toggles({on:true});
			$('.toggle.off').toggles({on:false});
		}
		
		/*
		$( ".ddraggable-widget" ).disableSelection();	
		*/
		
		function init_scrollbar(){
		
			if(window.mCustomScrollbar != true){
				console.log('Error - Scrollbar script is not included! ['+window.mCustomScrollbar+']');
				return false;
			}
		
			$(".scroll-block").mCustomScrollbar();
		
		
		}
		

		/*$('.toggle-off').toggles({off:true});*/
		/*$('.toggle-off').toggles({drag:false});*/
		
		$('.panel-default').each(function(){
			if ($('.panel-collapse:hidden', this).size()){
				$(this).closest('.panel-default').find('.panel-title a').addClass('collapsed');
			}
		});
		
	 
	if ($('#map').size()){
		var map = L.map('map').setView([51.5, -0.09], 13);

		L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			key: 'BC9A493B41014CAABB98F0471D759707'
		}).addTo(map); 

		var LeafIcon = L.Icon.extend({
			options: {
				shadowUrl: '../docs/images/leaf-shadow.png',
				iconSize:     [120, 130],
				shadowSize:   [50, 64],
				iconAnchor:   [22, 94],
				shadowAnchor: [4, 62],
				popupAnchor:  [-3, -76]
			}
		});

		var blueIcon = new LeafIcon({iconUrl: 'scripts/jquery.lealet/images/marker-icon.png'}),
			redIcon = new LeafIcon({iconUrl: '../docs/images/leaf-red.png'}),
			orangeIcon = new LeafIcon({iconUrl: '../docs/images/leaf-orange.png'});

		L.marker([51.5, -0.09], {icon: blueIcon}).addTo(map);
		//L.marker([51.5, -0.09], {icon: blueIcon}).bindPopup("I am a green leaf.").addTo(map);
		//L.marker([51.495, -0.083], {icon: blueIcon}).bindPopup("I am a red leaf.").addTo(map);
		//L.marker([51.49, -0.1], {icon: blueIcon}).bindPopup("I am an orange leaf.").addTo(map);
	} 
	
			

	$('.dropzone-wrapper form > div').on('click', function(){
		$(this).closest('form').click();
	});

	$(window).resize(function(){
		
		init_login_center();
		
	});

	/*
	function init_nvdcharts() {

			var chart = nv.models.lineChart();

		  chart.xAxis
			  .axisLabel('Time (ms)')
			  .tickFormat(d3.format(',r'));

		  chart.yAxis
			  .axisLabel('Voltage (v)')
			  .tickFormat(d3.format('.02f'));

		  d3.select('#chart svg')
			  .datum(data())
			.transition().duration(500)
			  .call(chart);

		  nv.utils.windowResize(chart.update);

			return chart;
		
	}
	*/

	});
	
	function init_login_center(){
		
		$('#lock-screen-wrapper').css({
			position:'absolute',
			left: ($(window).width() - $('#lock-screen-wrapper').outerWidth())/2,
			top: ($(window).height() - $('#lock-screen-wrapper').outerHeight())/2
		});
		
		$('#login').css({
			position:'absolute',
			left: ($(window).width() - $('#login').outerWidth())/2,
			top: ($(window).height() - $('#login').outerHeight())/2
		});

	}

	function init_sidebar() {
	
		$('#sidebar-exp').click(function(){
			
			if ($('#wrapper').hasClass('sidebar')){
				$('#wrapper').removeClass('sidebar');
				$('#body-overlay').fadeOut('160');
			}else{
				$('#body-overlay').fadeIn('160');
				$('#wrapper').addClass('sidebar');
			}
			
			console.log('Expand sidebar');
			return false;
		});
		
		$("#sidebar .drop-area>li").click(function(){
			$('#sidebar .selected').removeClass('selected');
			
			if ($('ul:visible', this).size()){
				$('ul:visible', this).slideUp('fast').removeClass('active');
			}else{
				$('#sidebar .drop-area>li>ul:visible').slideUp('fast').closest('li').removeClass('active');
				$(this).addClass('selected');
				$('ul:hidden', this).slideDown('fast').addClass('active');
			}
		});
		
	}
	
	function init_nestables(){
	
		if (typeof($.fn.Nestables) != "undefined"){
	
		if ($('#nestable').size()){
		
			var updateOutput = function(e)
			{
				var list   = e.length ? e : $(e.target),
					output = list.data('output');
				if (window.JSON) {
					output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
				} else {
					output.val('JSON browser support required for this demo.');
				}
			};

			// activate Nestable for list 1
			$('#nestable').nestable({
				group: 1
			})
			.on('change', updateOutput);
			
			// activate Nestable for list 2
			$('#nestable2').nestable({
				group: 1
			})
			.on('change', updateOutput);

			// output initial serialised data
			updateOutput($('#nestable').data('output', $('#nestable-output')));
			updateOutput($('#nestable2').data('output', $('#nestable2-output')));

			$('#nestable-menu').on('click', function(e)
			{
				var target = $(e.target),
					action = target.data('action');
				if (action === 'expand-all') {
					$('.dd').nestable('expandAll');
				}
				if (action === 'collapse-all') {
					$('.dd').nestable('collapseAll');
				}
			});

			$('#nestable3').nestable();
	
		}
		
	
		$('.dd').nestable({ /* config options */ });
		
		}
		else{
			console.log('Error - Nestables script not included!');
		}
		
	}
	
	function init_timeline_related(){
		$('.timeline-item .more a').click(function(){
			var related_item = $(this).attr('data-related');
			$('.timeline-item.preloaded[data-related="'+related_item+'"]').slideDown('fast');
			
			$(this).closest('.timeline-item .comment').addClass('expanded');
			
		});	
		
		
	}
	
	function init_prettycheckable (){
		if (typeof($.fn.prettyCheckable) != "undefined"){
			$('div.container-cowntdown').prettyCheckable();
			$('input.prettycheckbox').prettyCheckable();
			$('input.prettyradio').prettyCheckable();
			}
			else{
				console.log('Error - prettyCheckable script not included!');
			}
	}
	
	function init_gallery(){
		if (typeof(window.Masonry) != "undefined"){
			var container = document.querySelector('#wrapper-gallery');
			msnry = new Masonry( container, { gutter: 10, columnWidth: 200, itemSelector: '.item' });
		}else{
			console.log('Error - Masonry script not included!');
		}
	}
	
	function init_cowntdown () {
		if (typeof($.fn.countdown) != "undefined"){
			var austDay = new Date();
			austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
			$('#defaultCountdown').countdown({until: austDay});
		}
		
	}

	 
	 function init_tipsy (){
		if(typeof($.fn.tipsy) != "undefined"){
		$('.tipsy').tipsy({gravity: 'n'});
		
		}else {
			console.log('Error - Tipsy script is not included!')
		}
		
		
	 }
	 
	function init_easypiechart () {
		if (typeof($.fn.easyPieChart) != "function"){ 
			console.log('Error - easyPieChart script is not included!')
			return false; 
		}
		
		console.log('Piechart running: '+$('.chart').length);
		
		
		$('.chart').each(function(){
		
			var barColor = $(this).attr('data-barColor');
			var trackColor = $(this).attr('data-trackColor');
			var lineWidth = $(this).attr('data-lineWidth');
			var lineCap = $(this).attr('data-lineCap');
			var scaleColor = $(this).attr('data-scaleColor');
			var size = $(this).attr('data-size');
			var animate = $(this).attr('data-animate');
		
			$(this).easyPieChart({
				// easing: 'easeOutElastic',
				barColor: barColor,
				trackColor: trackColor,
				lineWidth: lineWidth,
				lineCap: lineCap,
				scaleColor: '#fff',
				size: size,
				animate: animate,
				
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				},
				delay: 3000 
			});
		
		});
				
	}
	 
	function init_sliders() {

		if (typeof($.fn.slider) != "function"){ 
			console.log('Error - Slider script is not included!')
			return false; 
		}
		
		//default slider
		
		
		$( "#slider-default" ).slider();
		
		
		// step slider
		

			$( "#step-slider" ).slider({
			  value:150,
			  min: 150,
			  max: 500,
			  step: 50,
			  slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.value );
			  }
			});
			
			$( "#amount" ).val( "$" + $( "#step-slider" ).slider( "value" ) );
	
		
		// slider range
		
			$( "#slider-range" ).slider({
			  range: true,
			  min: 0,
			  max: 500,
			  values: [ 75, 300 ],
			  slide: function( event, ui ) {
				$( "#amount-range" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			  }
			});
			$( "#amount-range" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
		
		//slider maximum
		
			$( "#slider-range-max" ).slider({
			  range: "max",
			  min: 1,
			  max: 10,
			  value: 2,
			  slide: function( event, ui ) {
				$( "#amount-maximum" ).val( ui.value );
			  }
			});
			$( "#amount-maximum" ).val( $( "#slider-range-max" ).slider( "value" ) );
		
		//slider minimum
		
			$( "#slider-range-min" ).slider({
			  range: "min",
			  value: 37,
			  min: 1,
			  max: 700,
			  slide: function( event, ui ) {
				$( "#amount-minimum" ).val( "$" + ui.value );
			  }
			});
			$( "#amount-minimum" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );

		// slider vertical
		

			$( "#slider-vertical" ).slider({
			  orientation: "vertical",
			  range: "min",
			  min: 0,
			  max: 100,
			  value: 60,
			  slide: function( event, ui ) {
				$( "#amount-vertical" ).val( ui.value );
			  }
			});
			$( "#amount-vertical" ).val( $( "#slider-vertical" ).slider( "value" ) );

		
		// slider range vertical
		

			$( "#slider-range-vertical" ).slider({
			  orientation: "vertical",
			  range: true,
			  values: [ 17, 67 ],
			  slide: function( event, ui ) {
				$( "#amount-range-vertical" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			  }
			});
			$( "#amount-range-vertical" ).val( "$" + $( "#slider-range-vertical" ).slider( "values", 0 ) +
			  " - $" + $( "#slider-range-vertical" ).slider( "values", 1 ) );

		
		//equalizer
		

			// setup graphic EQ
			$( "#equalizer > span" ).each(function() {
			  // read initial values from markup and remove that
			  var value = parseInt( $( this ).text(), 10 );
			  $( this ).empty().slider({
				value: value,
				range: "min",
				animate: true,
				orientation: "vertical"
			  });
			});
		
	}

	function init_charts(){
		
		if ($("#myfirstchart").size() == 0){
			return false;
		}
		
		new Morris.Line({
		  // ID of the element in which to draw the chart.
		  element: 'myfirstchart',
		  // Chart data records -- each entry in this array corresponds to a point on
		  // the chart.
		  data: [
			{ year: '2008', value: 20 },
			{ year: '2009', value: 10 },
			{ year: '2010', value: 5 },
			{ year: '2011', value: 5 },
			{ year: '2012', value: 20 }
		  ],
		  // The name of the data record attribute that contains x-values.
		  xkey: 'year',
		  // A list of names of data record attributes that contain y-values.
		  ykeys: ['value'],
		  // Labels for the ykeys -- will be displayed when you hover over the
		  // chart.
		  labels: ['Value']
		});


		Morris.Donut({
		  element: 'donut',
		  data: [
			{value: 70, label: 'foo'},
			{value: 15, label: 'bar'},
			{value: 10, label: 'baz'},
			{value: 5, label: 'A really really long label'}
		  ],
		  formatter: function (x) { return x + "%"}
		}).on('click', function(i, row){
		  console.log(i, row);
		});
		


		// Use Morris.Bar
		Morris.Bar({
		  element: 'bar-chart',
		  data: [
			{x: '2011 Q1', y: 0},
			{x: '2011 Q2', y: 1},
			{x: '2011 Q3', y: 2},
			{x: '2011 Q4', y: 3},
			{x: '2012 Q1', y: 4},
			{x: '2012 Q2', y: 5},
			{x: '2012 Q3', y: 6},
			{x: '2012 Q4', y: 7},
			{x: '2013 Q1', y: 8}
		  ],
		  xkey: 'x',
		  ykeys: ['y'],
		  labels: ['Y'],
		  barColors: function (row, series, type) {
			if (type === 'bar') {
			  var red = Math.ceil(255 * row.y / this.ymax);
			  return 'rgb(' + red + ',0,0)';
			}
			else {
			  return '#000';
			}
		  }
		});	
		


		/* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
		var month_data = [
		  {"period": "2012-10", "licensed": 3407, "sorned": 660},
		  {"period": "2011-08", "licensed": 3351, "sorned": 629},
		  {"period": "2011-03", "licensed": 3269, "sorned": 618},
		  {"period": "2010-08", "licensed": 3246, "sorned": 661},
		  {"period": "2010-05", "licensed": 3257, "sorned": 667},
		  {"period": "2010-03", "licensed": 3248, "sorned": 627},
		  {"period": "2010-01", "licensed": 3171, "sorned": 660},
		  {"period": "2009-12", "licensed": 3171, "sorned": 676},
		  {"period": "2009-10", "licensed": 3201, "sorned": 656},
		  {"period": "2009-09", "licensed": 3215, "sorned": 622}
		];
		Morris.Line({
		  element: 'month-ns',
		  data: month_data,
		  xkey: 'period',
		  ykeys: ['licensed', 'sorned'],
		  labels: ['Licensed', 'SORN'],
		  smooth: false
		});



		/* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
		var year_data = [
		  {"period": "2012", "licensed": 3407, "sorned": 660},
		  {"period": "2011", "licensed": 3351, "sorned": 629},
		  {"period": "2010", "licensed": 3269, "sorned": 618},
		  {"period": "2009", "licensed": 3246, "sorned": 661},
		  {"period": "2008", "licensed": 3257, "sorned": 667},
		  {"period": "2007", "licensed": 3248, "sorned": 627},
		  {"period": "2006", "licensed": 3171, "sorned": 660},
		  {"period": "2005", "licensed": 3171, "sorned": 676},
		  {"period": "2004", "licensed": 3201, "sorned": 656},
		  {"period": "2003", "licensed": 3215, "sorned": 622}
		];

		Morris.Line({
		  element: 'years',
		  data: year_data,
		  xkey: 'period',
		  ykeys: ['licensed', 'sorned'],
		  labels: ['Licensed', 'SORN']
		});

		Morris.Donut({
		  element: 'donut-col',
		  data: [
			{value: 70, label: 'foo'},
			{value: 15, label: 'bar'},
			{value: 10, label: 'baz'},
			{value: 5, label: 'A really really long label'}
		  ],
		  backgroundColor: '#ccc',
		  labelColor: '#060',
		  colors: [
			'#0BA462',
			'#39B580',
			'#67C69D',
			'#95D7BB'
		  ],
		  formatter: function (x) { return x + "%"}
		});
		
		
		
		
	}

	function init_calendar (){
		
		if (typeof($.fn.fullCalendar)=='undefined'){	return false; }
	
		/* initialize the external events
		-----------------------------------------------------------------*/
	
		$('#external-events div.external-event').each(function() {
		
			var ev_color = '';
			
			if ($(this).hasClass('grey')){ ev_color = "grey"; }
			if ($(this).hasClass('red')){ ev_color = "red"; }
			if ($(this).hasClass('blue')){ ev_color = "blue"; }
			if ($(this).hasClass('orange')){ ev_color = "orange"; }
			if ($(this).hasClass('green')){ ev_color = "green"; }
		
			// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
			// it doesn't need to have a start or end
			var eventObject = {
				title: $.trim($(this).text()), // use the element's text as the event title
				color: ev_color
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
		
		$('.calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function(date, allDay) { // this function is called when something is dropped
			
				// retrieve the dropped element's stored Event Object
				var originalEventObject = $(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = $.extend({}, originalEventObject);
				
				var $categoryClass = $(this).attr('data-class');
				if ($categoryClass) {
					copiedEventObject['className'] = [$categoryClass];
				}

				// assign it the date that was reported
				copiedEventObject.start = date;
				copiedEventObject.allDay = allDay;
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				$('.calendar').fullCalendar('renderEvent', copiedEventObject, true);
				
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
				
			}
		});
		
		
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$('.calendar2').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
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
					allDay: false
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d+4, 16, 0),
					allDay: false
				},
				{
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				},
				{
					title: 'Lunch',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false
				},
				{
					title: 'Birthday Party',
					start: new Date(y, m, d+1, 19, 0),
					end: new Date(y, m, d+1, 22, 30),
					allDay: false
				},
				{
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				}
			]
		});
		
	}	
	
	
	