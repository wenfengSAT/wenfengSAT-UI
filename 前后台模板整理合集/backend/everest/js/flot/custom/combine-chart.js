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
		var data1 = [
			[1354586000000, 120], [1364587000000, 230], [1374588000000, 420],
			[1384589000000, 580], [1394590000000, 660], [1404591000000, 780],
			[1414592000000, 920], [1424593000000, 1089], [1434594000000, 1223],
			[1444595000000, 1398], [1454596000000, 1485], [1464597000000, 1664]
		];
 
		var data2 = [
			[1354586000000, 93], [1364587000000, 85], [1374588000000, 158],
			[1384589000000, 113], [1394590000000, 280], [1404591000000, 398],
			[1414592000000, 480], [1424593000000, 374], [1434594000000, 933],
			[1444595000000, 1019], [1454596000000, 1138], [1464597000000, 1490]
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
				lineWidth: 1.5,
				fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.6 } ] }
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
				fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.6 } ] }
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

		colors: [$success, $info, $danger],
	};
 
	var plot = $.plot($("#combineChart"), data, options);  
});