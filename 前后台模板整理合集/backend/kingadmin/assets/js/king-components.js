 $(document).ready(function(){

	if( $('body').hasClass('comp-wizard') ) {

		//*******************************************
		/*	FORM WIZARD
		/********************************************/

		$('#demo-wizard').on('change', function(e, data) {
			// validation
			if( $('#form'+data.step).length > 0 ) {
				var parsleyForm = $('#form'+data.step).parsley();
				parsleyForm.validate();

				if( !parsleyForm.isValid() )
					return false;
			}

			// last step button
			$btnNext = $(this).parents('.wizard-wrapper').find('.btn-next');

			if(data.step === 3 && data.direction == 'next') {
				$btnNext.text(' Create My Account')
				.prepend('<i class="fa fa-check-circle"></i>')
				.removeClass('btn-primary').addClass('btn-success');
			}else{
				$btnNext.text('Next ').
				append('<i class="fa fa-arrow-right"></i>')
				.removeClass('btn-success').addClass('btn-primary');
			}

		}).on('finished', function(){
			alert('Your account has been created.');
		});

		$('.wizard-wrapper .btn-next').click( function(){
			$('#demo-wizard').wizard('next');
		});

		$('.wizard-wrapper .btn-prev').click( function(){
			$('#demo-wizard').wizard('previous');
		});
	}


	//*******************************************
	/*	MAPS
	/********************************************/

	var colors = ["#5DC8CD", "#34C6CD", "#01939A", "#1D7074", "#006064"];
	
	if( $('body').hasClass('demo-maps') ) {

		// basic map
		$(".basic-map").mapael({
			map: {
				name: "world_countries"
			}
		});

		// data visualization
		var data = {
			"areas" : {
				"US": {
					"value": 2200,
					"tooltip": {
						"content": "<span>United States</span><br />Sales: 2200"
					}
				},
				"CN": {
					"value": 1800,
					"tooltip": {
						"content": "<span>China</span><br />Sales: 1800"
					}
				},
				"JP": {
					"value": 1550,
					"tooltip": {
						"content": "<span>Japan</span><br />Sales: 1550"
					}
				},
				"IN": {
					"value": 1400,
					"tooltip": {
						"content": "<span>India</span><br />Sales: 1400"
					}
				},
				"DE": {
					"value": 1600,
					"tooltip": {
						"content": "<span>Germany</span><br />Sales: 1600"
					}
				},
				"RU": {
					"value": 900,
					"tooltip": {
						"content": "<span>Russia</span><br />Sales: 900"
					}
				},
				"GB": {
					"value": 1200,
					"tooltip": {
						"content": "<span>United Kingdom</span><br />Sales: 1200"
					}
				},
				"FR": {
					"value": 1100,
					"tooltip": {
						"content": "<span>France</span><br />Sales: 1100"
					}
				},
				"BR": {
					"value": 400,
					"tooltip": {
						"content": "<span>Brazil</span><br />Sales: 400"
					}
				},
				"IT": {
					"value": 700,
					"tooltip": {
						"content": "<span>Italy</span><br />Sales: 700"
					}
				},
				"MX": {
					"value": 1900,
					"tooltip": {
						"content": "<span>Mexico</span><br />Sales: 1900"
					}
				},
				"ES": {
					"value": 300,
					"tooltip": {
						"content": "<span>Spain</span><br />Sales: 300"
					}
				},
				"KR": {
					"value": 200,
					"tooltip": {
						"content": "<span>South Korea</span><br />Sales: 200"
					}
				},
				"CA": {
					"value": 2900,
					"tooltip": {
						"content": "<span>Canada</span><br />Sales: 2900"
					}
				},
				"ID": {
					"value": 1200,
					"tooltip": {
						"content": "<span>Indonesia</span><br />Sales: 1300"
					}
				},
				"TR": {
					"value": 90,
					"tooltip": {
						"content": "<span>Turkey</span><br />Sales: 90"
					}
				},
				"IR": {
					"value": 80,
					"tooltip": {
						"content": "<span>Iran</span><br />Sales: 80"
					}
				},
				"AU": {
					"value": 900,
					"tooltip": {
						"content": "<span>Australia</span><br />Sales: 1400"
					}
				},
				"ZA": {
					"value": 50,
					"tooltip": {
						"content": "<span>South Africa</span><br />Sales: 50"
					}
				},
				"EG": {
					"value": 20,
					"tooltip": {
						"content": "<span>Egypt</span><br />Sales: 20"
					}
				},
				"PK": {
					"value": 1300,
					"tooltip": {
						"content": "<span>Pakistan</span><br />Sales: 1300"
					}
				},
				"SG": {
					"value": 100,
					"tooltip": {
						"content": "<span>Singapore</span><br />Sales: 100"
					}
				},
			}
		} // end data

		// map with sales data visualization
		$('.data-visualization-map').mapael({
			map: {
				name: "world_countries",
				defaultArea: {
					attrs : {
						stroke : "#fff", 
						"stroke-width" : 1,
						fill: "#c4c4c4"
					}
				}
			},
			legend: {
				area: {
					display: true,
					title: "Sales",
					slices: [
						{
							max: 100,
							attrs: {
								fill: colors[0]
							},
							label: "Less than 100"
						},
						{
							min: 100,
							max: 500,
							attrs: {
								fill: colors[1]
							},
							label: "Between 100 and 500"
						},
						{
							min: 500,
							max: 1000,
							attrs: {
								fill: colors[2]
							},
							label: "Between 500 and 1000"
						},
						{
							min: 1000,
							max: 1500,
							attrs: {
								fill: colors[3]
							},
							label: "Between 1000 and 1500"
						},
						{
							min: 1500,
							attrs: {
								fill: colors[4]
							},
							label: "More than 1500"
						}
					]
				}
			},
			areas: data['areas']

		}); // end data visualization map

		// map with zoom features
		$mapZoom = $(".zoom-map");
		$mapZoom.mapael({
			map : {
				name: "france_departments",
				zoom: {
					enabled: true,
					maxLevel : 10
				}, 
				defaultPlot: {
					attrs: {
						opacity : 0.6
					}
				}
			},
			areas: {
				"department-56" : {
					text : {content : "56"}, 
					tooltip: {content : "Morbihan (56)"}
				}
			},
			plots : {
				'paris' : {
					latitude : 48.86, 
					longitude: 2.3444
				},
				'lyon' : {
					type: "circle",
					size:50,
					latitude :45.758888888889, 
					longitude: 4.8413888888889, 
					value : 700000, 
					href : "http://fr.wikipedia.org/wiki/Lyon",
					tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Lyon"},
					text : {content : "Lyon"}
				},
				'rennes' : {
					type :"square",
					size :20,
					latitude : 48.114166666667, 
					longitude: -1.6808333333333, 
					tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Rennes"},
					text : {content : "Rennes"},
					href : "http://fr.wikipedia.org/wiki/Rennes"
				}
			}
		});

		// Zoom on mousewheel with mousewheel jQuery plugin
		$mapZoom.on("mousewheel", function(e) {
			if (e.deltaY > 0)
				$mapZoom.trigger("zoom", $mapZoom.data("zoomLevel") + 1);
			else
				$mapZoom.trigger("zoom", $mapZoom.data("zoomLevel") - 1);
				
			return false;
		});

		// focus to paris
		$('#focus-paris').on('click', function() {
			// Translate latitude,longitude of Paris to x,y coordinates
			var coords = $.fn.mapael.maps["france_departments"].getCoords(48.114167, 2.3444);
			$mapZoom.trigger('zoom', [10, coords.x, coords.y]);
		});

		$('#focus-lyon').on('click', function() {
			// Translate latitude,longitude of Lyon to x,y coordinates
			var coords = $.fn.mapael.maps["france_departments"].getCoords(45.758888888889, 4.8413888888889);
			$mapZoom.trigger('zoom', [5, coords.x, coords.y]);
		});

		$('#map-clear-zoom').on('click', function() {
			$mapZoom.trigger('zoom', [0]);
		});
	} // end map page demo

	if( $('.data-us-map').length > 0 ) {

		// map with circle plot
		$('.data-us-map').mapael({
			map: {
				name: "usa_states",
				defaultPlot: {
					size: 10
				},
				defaultArea: {
					attrs: {
						stroke: "#fafafa", 
						"stroke-width": 1,
						fill: "#c4c4c4"
					}
				}
			},
			legend: {
				plot: {
					display: true,
					title: "US Sales Map",
					hideElemsOnClick: {
						opacity : 0
					},
					slices: [ 
						{
							size: 10,
							type: "circle",
							max: 500,
							attrs: { fill: colors[1] },
							label: "Less than 500 sales"
						},
						{
							size: 20,
							type: "circle",
							min: 500,
							max: 750,
							attrs: { fill: colors[1] },
							label: "Between 500 and 750 sales"
						},
						{
							size: 30,
							type: "circle",
							min: 750,
							max: 1000,
							attrs: { fill: colors[1] },
							label: "Between 750 and 1000 sales"
						},
						{
							size: 40,
							type: "circle",
							min: 1000,
							max: 1250,
							attrs: { fill: colors[1] },
							label: "Between 1000 and 1250 sales"
						},
						{
							size: 50,
							type: "circle",
							min: 1250,
							max: 1500,
							attrs: { fill: colors[1] },
							label: "Between 1250 and 1500 sales"
						}
					]
				}
			},
			plots: {
				"ny": {
					value: 1450,
					latitude: 40.717079,
					longitude: -74.00116,
					tooltip: { content: "<span>New York</span><br />Sales: 1450" }
				},
				'an': {
					value: 900,
					latitude: 61.2108398, 
					longitude: -149.9019557,
					tooltip: {content : "<span>Anchorage</span><br />Sales: 900"}
				},
				'sf': {
					value: 1200,
					latitude: 37.792032,
					longitude: -122.394613,
					tooltip: {content : "<span>San Francisco</span><br />Sales: 1200"}
				},
				'pa': {
					value: 400,
					latitude: 19.493204,
					longitude: -154.8199569,
					tooltip: {content : "<span>Pahoa</span><br />Sales: 400"}
				},
				'nm': {
					value: 850,
					latitude: 35.101934,
					longitude: -106.633301,
					tooltip: {content : "<span>Albuquerque</span><br />Sales: 850"}
				},
				'nj': {
					value: 30,
					latitude: 38.934385,
					longitude: -74.908028,
					tooltip: {content : "<span>Cape May</span><br />Sales: 30"}
				},
				'il': {
					value: 1100,
					latitude: 41.879786,
					longitude: -87.62352,
					tooltip: {content : "<span>Chicago</span><br />Sales: 1100"}
				},
				'or': {
					value: 70,
					latitude: 19.493204,
					longitude: -154.8199569,
					tooltip: {content : "<span>Portland</span><br />Sales: 70"}
				}
			}
		}); // end map with circle plot
	}


	//*******************************************
	/*	CALENDAR PAGE
	/********************************************/

	if( $('body').hasClass('fullcalendar') ) {

		// init the external events
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

		// init the calendar
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$('.calendar').fullCalendar({
			header: {
				left: 'month, agendaWeek, agendaDay',
				center: 'title',
				right: 'prev, next, today'
			},
			editable: true,
			droppable: true,
			drop: function(date, allDay) {
				// retrieve the dropped element's stored Event Object
				var originalEventObject = $(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = $.extend({}, originalEventObject);
				
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
			},
				events: [
				{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				},
				{
					title: 'Long Event',
					start: new Date(y, m, d+5),
					end: new Date(y, m, d+7)
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
					title: 'Visit Other Theme',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'https://wrapbootstrap.com/theme/cvilized-timeline-style-cv-resume-WB057FN0R'
				}
			],
		});

 		$colorPicker = $('select[name="colorpicker-picker-longlist"]');
 		$colorPicker.simplecolorpicker({
			picker: false, 
			theme: 'fontawesome'
		});

		$('#btn-quick-event').click( function() {
			
			var originalEventObject = $(this).data('eventObject');
			var copiedEventObject = $.extend({}, originalEventObject);
			var eventTitle = 'Untitled Event';

			if( $('#quick-event-name').val() != '' ) {
				eventTitle = $('#quick-event-name').val();
			}

			copiedEventObject.title = eventTitle;
			copiedEventObject.start = date; // today
			copiedEventObject.color = $colorPicker.val();
				
			$('.calendar').fullCalendar('renderEvent', copiedEventObject, true);
		});

	} // end calendar page demo


	//*******************************************
	/*	TREE VIEW
	/********************************************/

	if($('body').hasClass('comp-tree')) {

		// default tree view
		var treeviewDefault = $('#treeview-default');

		treeviewDefault.jstree({
			'core' : {
				'data' : {
					'url' : 'assets/js/plugins/tree/tree-default.json',
				},
				'check_callback' : true,
			},
			'plugins' : ['types', 'contextmenu']

		}).on('loaded.jstree', function() {
			treeviewDefault.jstree('open_all');
		});

		// tree view with custom icon
		var treeviewCustomIcon = $('#treeview-custom-icon');

		treeviewCustomIcon.jstree({
			'core' : {
				'data' : {
					'url' : 'assets/js/plugins/tree/tree-filesystem.json',
				},
				'check_callback' : true,
			},
			'plugins' : ['checkbox', 'contextmenu', 'types'],
			'checkbox' : {
				'keep_selected_style' : false
			},
			'types' : {
				'root' : {
					'icon' : 'fa fa-desktop text-primary'
				},
				'default' : {
					'icon' : 'fa fa-folder'
				},
				'text' : {
					'icon' : 'fa fa-file-text-o'
				},
				'pdf' : {
					'icon' : 'fa fa-file-pdf-o'
				},
				'word' : {
					'icon' : 'fa fa-file-word-o'
				},
				'excel' : {
					'icon' : 'fa fa-file-excel-o'
				},
				'ppt' : {
					'icon' : 'fa fa-file-powerpoint-o'
				},
				'img' : {
					'icon' : 'fa fa-file-image-o'
				},
				'zip' : {
					'icon' : 'fa fa-file-zip-o'
				}
			}

		}).on('loaded.jstree', function() {
			treeviewCustomIcon.jstree('open_all');
		});

		// tree view for application
		var treeviewApp = $('#treeview-application');

		treeviewApp.jstree({
			'core' : {
				'data' : {
					'url' : 'assets/js/plugins/tree/tree-application.json',
				},
				'check_callback' : true,
			},
			'plugins' : ['contextmenu', 'types'],
			'types' : {
				'root' : {
					'icon' : 'fa fa-desktop'
				},
				'default' : {
					'icon' : 'fa fa-folder yellow-font'
				},
				'database' : {
					'icon' : 'fa fa-database yellow-font'
				},
				'table' : {
					'icon' : 'fa fa-table green-font'
				},
				'view' : {
					'icon' : 'fa fa-search text-primary'
				},
				'procedure' : {
					'icon' : 'fa fa-play-circle green-font'
				},
				'key' : {
					'icon' : 'fa fa-key text-primary'
				},
			}

		}).on('loaded.jstree', function() {
			treeviewApp.jstree('open_all');
		});
	}

 }); // end ready function


