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
 
		d3 = [
			[1325376000000, 650], [1328054400000, 450], [1330560000000, 150], [1333238400000, 200],
			[1335830400000, 150]
		];

		data = [{
			label: 'Referral',
			data: d1
		}, {
			label: 'Direct',
			data: d2
		}, {
			label: 'Organic',
			data: d3
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
			series: {
				stack: true
			},
			bars: {
			show: true,
			barWidth: 36*24*60*60*300,
				fill: true,
				align: 'center',
				lineWidth: 1,
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

		var holder = $('#stacked-vertical-chart');

		if (holder.length) {
				$.plot(holder, data, chartOptions );
		}



});