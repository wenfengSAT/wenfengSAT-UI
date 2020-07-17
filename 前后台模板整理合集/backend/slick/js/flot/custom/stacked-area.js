var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $primary = "#005387";
var $info = "#87CEEB";
var $danger = "#F56B6B";
var $warning = "#F38733";
var $success = "#2ecc71";
var $yellow = "#fdd922";
var $facebook = "#3b5999";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";

$(function () {
		
	var d1, d2, d3, data, chartOptions;

	var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
	var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];
	var d3 = [[1262304000000, 2], [1264982400000, 30], [1267401600000, 205], [1270080000000, 1129], [1272672000000, 1643], [1275350400000, 2055], [1277942400000, 4062], [1280620800000, 3197], [1283299200000, 7000], [1285891200000, 6000], [1288569600000, 4300], [1291161600000, 1000]];

	data = [{ 
		label: "Likes", 
		data: d1
	}, {
		label: "Tweets",
		data: d2
	}, {
		label: "Shares",
		data: d3
	}];
 
	chartOptions = {
		xaxis: {
			min: (new Date(2009, 11)).getTime(),
			max: (new Date(2010, 11)).getTime(),
			mode: "time",
			tickSize: [1, "month"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			tickLength: 0
		},
		yaxis: {

		},
		series: {
			stack: true,
			lines: {
				show: true, 
				fill: 0.3,
				lineWidth: 1
			},
			points: {
				show: true,
				radius: 4,
				fill: true,
				fillColor: "#ffffff",
				lineWidth: 1.5
			}
		},
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
      tickColor: "#eee",
      borderColor: "#eee",
    },
		legend: {
			show: true,
			position: 'nw'
		},
		shadowSize: 0,
		tooltip: true,
		tooltipOpts: {
		content: '%s: %y'
		},
		colors: [$facebook, $twitter, $gplus],
	};

	var holder = $('#stacked-area-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}
});