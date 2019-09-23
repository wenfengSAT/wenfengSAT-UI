var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $info = "#5B90BF";
var $danger = "#D66061";
var $warning = "#ffaa3a";
var $success = "#76BBAD";
var $yellow = "#ffee00";
var $facebook = "#4c66a4";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";
var $brown = "#ab7967";

$(function () {

	var d1, d2, d3, data, chartOptions;

	d1 = [
		[1325376000000, 1200], [1328054400000, 700], [1330560000000, 1000], [1333238400000, 600],
		[1335830400000, 350]
	];

	d2 = [
		[1325376000000, 800], [1328054400000, 600], [1330560000000, 300], [1333238400000, 350],
		[1335830400000, 300]
	];

	data = [{
		label: 'Received',
		data: d1
	},{
		label: 'Sent',
		data: d2
	}];

	chartOptions = {
		xaxis: {
			min: (new Date(2011, 11, 15)).getTime(),
			max: (new Date(2012, 04, 18)).getTime(),
			mode: "time",
			tickSize: [2, "month"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			tickLength: 0
		},
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
		bars: {
			show: true,
			barWidth: 24*24*60*60*300,
			fill: true,
			lineWidth: 1,
			order: true,
			lineWidth: 0,
			fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.6 } ] }
		},
		shadowSize: 0,
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		colors: [$success, $info, $danger],
		}

		var holder = $('#vertical-chart');

		if (holder.length) {
			$.plot(holder, data, chartOptions );
		}

});