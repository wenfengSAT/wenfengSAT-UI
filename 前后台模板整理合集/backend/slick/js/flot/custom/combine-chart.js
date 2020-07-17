var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $dark_blue = "#005387";
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
		var data1 = [
			[1354586000000, 353], [1364587000000, 258], [1374588000000, 498],
			[1384589000000, 863], [1394590000000, 601], [1404591000000, 1280],
			[1414592000000, 79], [1424593000000, 189], [1434594000000, 823],
			[1444595000000, 128], [1454596000000, 485], [1464597000000, 164]
		];
 
		var data2 = [
			[1354586000000, 23], [1364587000000, 215], [1374588000000, 38],
			[1384589000000, 183], [1394590000000, 780], [1404591000000, 208],
			[1414592000000, 580], [1424593000000, 1274], [1434594000000, 433],
			[1444595000000, 39], [1454596000000, 838], [1464597000000, 236]
		];
 
		var data = [{
			label: "Sales",
			data: data1,
			bars: {
				show: true,
				lineWidth: 1,
				barWidth: 30 * 60 * 60 * 1000 * 80,
				fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.6 } ] }
			}
		},{
			label: "Expenses",
			data: data2,
			lines: {
				show: true,
				lineWidth: 1.5
			},
			points:{
				show:true,
				radius: 4,
				fill: true,
				fillColor: "#ffffff",
				lineWidth: 1.5
			}
		}];
 
		var options = {
			series: {
			shadowSize: 0,
			bars: {
				lineWidth: 1,
			}
		},
		grid: {
			hoverable: true,
			clickable: false,
			borderWidth: 1,
			tickColor: $border_color,
			borderColor: $grid_color,
		},
		legend:{   
			show: true,
			position: 'nw',
			noColumns: 0,
		},
		tooltip: true,
		tooltipOpts: {
			content: '%x: %y'
		},

		xaxis: {mode: "time", ticks:6, tickDecimals: 0},
		yaxis: {ticks:6, tickDecimals: 0},

		colors: [$dark_blue, $gplus, $success, $warning, $primary, $danger, $info, $facebook, $gplus, $yellow],
	};
 
	var plot = $.plot($("#combineChart"), data, options);  
});