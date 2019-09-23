var $grid_color = "#e6e6e6";

var $dark_blue = "#2b3d51";
var $info = "#53ACDF";
var $info_light = "#B0D0EC";
var $danger = "#D66061";
var $danger_light = "#E9AFB0";
var $warning = "#ffb61c";
var $success = "#76BBAD";
var $success_light = "#C2DBAC";
var $yellow = "#ffee00";
var $facebook = "#4c66a4";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";
var $grey = "#666666";

var $blue_one = "#74b1d4";
var $blue_two = "#84bad9";
var $blue_three = "#9bc7e0";
var $blue_four = "#afd2e6";
var $blue_five = "#badff2";


$(document).ready(function () {
	sparklineGraphs();
});

// Sparkline
function sparklineGraphs() {

	// Pie charts
	$(function () {

		$("#spark_1").sparkline([1,1,4 ], {
			type: 'pie',
			sliceColors: [$info, $success, $warning],
		});

		$("#spark_2").sparkline([2,3,2 ], {
			type: 'pie',
			sliceColors: [$info, $success, $warning],
		});

		$("#spark_3").sparkline([3,1,4 ], {
			type: 'pie',
			sliceColors: [$info, $success, $warning],
		});

		$("#spark_4").sparkline([5,1,2,1 ], {
			type: 'pie',
			sliceColors: [$info, $success, $warning],
		});

		$("#spark_5").sparkline([3,3,4,2 ], {
			type: 'pie',
			sliceColors: [$info, $success, $warning],
		});

		$("#spark_6").sparkline([5,1,1,3,7], {
			type: 'pie',
			sliceColors: [$blue_one, $blue_two, $blue_three, $blue_four, $blue_five],
			width: '136px ',
			height: '136px'
		});
	});
}

//Resize charts and graphs on window resize
$(document).ready(function () {
	$(window).resize(function(){
		sparklineGraphs();
	});
});

//Jquery vector map
$(function(){
	var cityAreaData = [
		230.20,
		750.90,
		440.28,
		180.15,
		69.35,
		280.90,
		510.50,
		99.60,
		135.50
	]
	$('#us-map').vectorMap({
		map: 'us_aea_en',
		scaleColors: ['$yellow', '$danger'],
		normalizeFunction: 'polynomial',
		focusOn:{
			x: 1,
			y: 0,
			scale: 1
		},
		zoomOnScroll:false,
		zoomMin: 1.6,
		hoverColor: true,
		regionStyle:{
			initial: {
				fill: '#8FA5BD',
				"fill-opacity": 0.9,
				"stroke-width": 0,
				"stroke-opacity": 0
			},
			hover: {
				"fill-opacity": 0.7
			},
			selected: {
				fill: $yellow,
			},
		},
		markerStyle: {
			initial: {
				fill: $yellow,
				stroke: $yellow,
				"fill-opacity": 1,
				"stroke-width": 10,
				"stroke-opacity": 0.5,
				r: 3
			},
			hover: {
				stroke: 'black',
				"stroke-width": 3
			},
			selected: {
				fill: $yellow
			},
			selectedHover: {
			}
		},
		backgroundColor: "#f9fbfc" ,
		 markers :[
			{latLng: [32.90, -97.03], name: 'Dallas/FW,TX : 332005'},
			{latLng: [34.11, -79.24], name: 'Marion S.C : 420010'},
			{latLng: [40.09, -74.51], name: 'Levittown, Pa: 324312'},
			{latLng: [32.33, -92.55], name: 'Arcadia, La: 443215'},
			{latLng: [35.53, -11.25], name: 'Cameron, Ariz: 765675'},
			{latLng: [39.46, -86.09], name: 'Indianapolis: 123214'},
			{latLng: [38.32, -82.41], name: 'Ironton, Ohio: 765789'},
			{latLng: [38.50, -104.49], name: 'Colorado Springs: 787321'},
			{latLng: [45.14, -120.11], name: 'Condon: 998321'},
			{latLng: [19.12, -155.29], name: 'Pahala: 4326589'},
			{latLng: [64.44, -120.17], name: 'Los Alamos, Calif: 144321'},
			{latLng: [70.10, -105.06], name: 'Longmont: 232149'},
			{latLng: [57.05, -134.50], name: 'Baranof: 554567'},
			{latLng: [37.30, -119.30], name: 'California, CA: 778906'},
			{latLng: [36.10,-115.09], name: 'Las Vegas, Nev: 325671'},
			{latLng: [56.48, -132.58], name: 'Petersburg, Alaska: 212331'},
			{latLng: [29.35, -95.46 ], name: 'Richmond Tex: 998012'},
			{latLng: [31.02, -85.52], name: 'Geneva, Ala: 876112'},
			{latLng: [42.11, -73.30], name: 'Hillsdale, N.Y: 333121'},
			{latLng: [48.30, -122.14], name: 'Sedro Wooley: 432345'},
			{latLng: [32.46, -108.17], name: 'Silver City: 666790'},
			{latLng: [43.25, -74.22], name: 'Hamilton Mt.: 897592'},
			{latLng: [32.42, -108.08], name: 'Hurley, N. Mex: 332123'},
			{latLng: [35.22, -117.38], name: 'Johannesburg: 432432'},
			{latLng: [40.50, -79.38], name: 'Worthington Pa: 222123'},
			{latLng: [37.45, -119.40], name: 'Yosemite Nat. Park: 332135'},
			{latLng: [41.09, -81.22], name: 'Kent, Ohio: 453678'},
			{latLng: [40.0, -74.30], name: 'New Jersey: 2434567'},
		],
		series: {
			markers: [{
				attribute: 'r',
				scale: [3, 7],
				values: cityAreaData
			}]
		},
	});
});

//Datepicker
$(function() {
	$("#datepicker" ).datepicker();
});

// Appointments
$( "ul.appointments li" ).click(function() {
	$(this).css('text-decoration', 'line-through');
});

//Flot graphs
// Donut 1
$(function () {
	var data, chartOptions;
	data = [
		{ label: "", data: Math.floor (Math.random() * 100 + 80) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 60) }, 
	];
	chartOptions = {
		series: {
			pie: {
				show: true,  
				innerRadius: .8, 
				stroke: {
					width: 1,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			position: 'sw'
		},
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 0,
		},
		shadowSize: 0,
		colors: [$danger, $danger_light],
	};
	var holder = $('#donut-chart-1');
	if (holder.length) {
		$.plot(holder, data, chartOptions );
	} 
});

//Donut 2
$(function () {
	var data, chartOptions;
	data = [
		{ label: "", data: Math.floor (Math.random() * 100 + 40) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 690) }, 
	];
	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .8, 
				stroke: {
					width: 1,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			position: 'sw'
		},
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 0,
		},
		shadowSize: 0,
		colors: [$info_light, $info],
	};
	var holder = $('#donut-chart-2');
	if (holder.length) {
		$.plot(holder, data, chartOptions );
	} 
});

//Donut 3
$(function () {
	var data, chartOptions;
	data = [
		{ label: "", data: Math.floor (Math.random() * 100 + 130) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 460) }, 
	];
	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .8, 
				stroke: {
					width: 1,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			position: 'sw'
		},
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 0,
		},
		shadowSize: 0,
		colors: [$success_light, $success],
	};
	var holder = $('#donut-chart-3');
	if (holder.length) {
		$.plot(holder, data, chartOptions );
	} 
});
