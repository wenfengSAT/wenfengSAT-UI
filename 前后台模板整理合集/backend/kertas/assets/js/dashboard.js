/*
 * Template name: Kertas - Responsive Bootstrap 3 Admin Template
 * Version: 1.0.0
 * Author: VergoLabs
 */

/* GRITTER NOTIFICATION */
function initNotification() {
	$(window).load(function(){
		setTimeout(function(){
			$.gritter.add({
				title: 'Welcome back!',
				text: 'You have 4 new notifications and 3 new messages.',
				image: 'assets/img/user/avatar01.png',
				time: ''
			});
			return false;
		}, 2000);
		
		setTimeout(function(){
			$.gritter.add({
				title: 'Job meeting',
				text: 'You have a job meeting at 10:00 AM.',
				class_name: 'primary',
				time: ''
			});
			return false;
		}, 4000);
	});
}

/* SPARKLINE CHART */
function initSparkline() {
	var data = [];
	var totalPoints = 500;

	function getRandomData() {
		return random = Math.ceil(Math.random() * 10);
	}
	
	/* SPARKLINE CHART 1 */
	function drawStat1() {
		var mrefreshinterval = 500; // update display every 500ms
		var mpoints = [];
		var mpoints_max = 40;

		var mdraw = function() {
			mpoints.push(getRandomData());

			if (mpoints.length > mpoints_max)
				mpoints.splice(0,1);

			$('.stat1').sparkline(mpoints, {
				type: 'line',
				outerWidth: '100%',
				height: '20px',
				lineColor: '#ffffff',
				fillColor: '#ffffff',
				spotColor: false,
				minSpotColor: false,
				maxSpotColor: false
			});

			setTimeout(mdraw, mrefreshinterval);
		}
		setTimeout(mdraw, mrefreshinterval); 
	};

	drawStat1();
	
	/* SPARKLINE CHART 2 */
	$('.stat2').sparkline([8,4,2,6,4,10,5,2,10,4,6,9,10,1,7,4,10,4,10,6,5,9], {
		type: 'bar',
		outerWidth: '100%',
		height: '20px',
		barColor: '#ffffff'
	});
	
	/* SPARKLINE CHART 3 */
	$(".stat3").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5,1,4,4,5,2,1,4,4,7,7,4,3,2,4,6,7,7,4,3,2,1,4,4,5,7,6,6,2,4,5,1,4,4,5,6], {
		type: 'discrete',
		outerWidth: '100%',
		height: '20px',
		lineColor: '#ffffff',
		xwidth: 18
	});
	
	/* SPARKLINE CHART 4 */
	$(".stat4").sparkline([5,6,7,2,0,-4,-2,4,1,1,3,5,2,5,3,5,-1,-4,-3,6,3,7], {
		type: 'bar',
		outerWidth: '100%',
		height: '20px',
		barColor: '#ffffff',
		negBarColor: '#ffffff'
	});
	
	/* SPARKLINE CHART 5 */
	$(".stat5").sparkline([8,4,2,5,3,1,1,4,4,10,1,4,4,10,10,10,2,4,1,4,4,1,4,6,5,9,10,1,4,4,3,1,1,4,4,10,1,7], {
		type: 'line',
		outerWidth: '100%',
		height: '20px',
		lineColor: '#ffffff',
		fillColor: '#ffffff',
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false
	});
	
	/* SPARKLINE CHART 6 */
	$(".stat6").sparkline([8,4,2,5,3,1,1,4,4,10,1,4,4,10,10,10,2,4,1,4,4,1,4,6,5,9,10,1,4,4,3,1,1,4,4,10,1,7], {
		type: 'line',
		outerWidth: '100%',
		fillColor: false,
		lineColor: '#ffffff',
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false
	});
	
	/* SPARKLINE CHART 7 */
	$('.stat7').sparkline([8,6,2,6,4,5,8,7,4,6,10,8], {
		type: 'bar',
		outerWidth: '100%',
		height: '20px',
		barColor: '#b3d1ea'
	});
	
	/* SPARKLINE CHART 8 */
	$('.stat8').sparkline([8,6,2,6,4,5,8,7,4,6,10,8], {
		type: 'bar',
		outerWidth: '100%',
		height: '20px',
		barColor: '#7ecfba'
	});
	
	/* SPARKLINE CHART 9 */
	$('.stat9').sparkline([8,6,2,6,4,5,8,7,4,6,10,8], {
		type: 'bar',
		outerWidth: '100%',
		height: '20px',
		barColor: '#dddddd'
	});
}

/* FLOT CHART */
function initFlot(){
	/* CHART DATA */
	var data1 = [[1, 10], [2, 20], [3, 10], [4, 25], [5, 15], [6, 20], [7, 40]];
	var data2 = [[1, 15], [2, 30], [3, 25], [4, 50], [5, 30], [6, 45], [7, 50]];
	var data3 = [[1, 25], [2, 50], [3, 45], [4, 65], [5, 45], [6, 60], [7, 65]];
	var data4 = [[1, 40], [2, 65], [3, 70], [4, 100], [5, 120]];
	var data5 = [[1, 35], [2, 55], [3, 65], [4, 80], [5, 100]];
	var data6 = [[1, 30], [2, 60], [3, 60], [4, 90], [5, 110]];
	var data7 = [[1, 30], [2, 45], [3, 70], [4, 85], [5, 90]];
	
	var dataSet1 = [
		{ label: "Label 3", data: data3, color: "#dddddd", lines: { show: true}, curvedLines: {apply: true} },
		{ label: "Label 2", data: data2, color: "#b3d1ea", lines: { show: true}, curvedLines: {apply: true} },
		{ label: "Label 1", data: data1, color: "#7ecfba", lines: { show: true}, curvedLines: {apply: true} }
	];
	
	var dataSet2 = [
		{ label: "Label 1", data: data1, color: "#ffffff" }
	]

	var dataSet3 = [
		{ label: "Label 1", data: data4, color: "#bbbbbb" },
		{ label: "Label 2", data: data5, color: "#cccccc" },
		{ label: "Label 3", data: data6, color: "#dddddd" },
		{ label: "Label 4", data: data7, color: "#ffffff" }
	]

	var dataSet4 = [
		{ label: "Label 1", data: [1,60], color: "rgba(52, 152, 219, 0.7)" },
		{ label: "Label 2", data: [1,70], color: "rgba(46, 204, 113, 0.7)" },
		{ label: "Label 3", data: [1,40], color: "rgba(231, 76, 60, 0.7)" },
		{ label: "Label 4", data: [1,30], color: "rgba(241, 196, 15, 0.7)" }
	]
	
	/* CHART TOOLTIP */
	var previousPoint = null;
	function showTooltip(x, y, contents) {
		$("<div id='tooltip'>" + contents + "</div>").css({
			position: "absolute",
			display: "none",
			top: y + 5,
			left: x + 5,
			border: "1px solid #000",
			padding: "5px",
			'color':'#fff',
			'border-radius':'2px',
			'font-size':'11px',
			"background-color": "#000",
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}

	/* FLOT CHART 1 */
	var options = {
		series: {
			curvedLines: { active: true },
			lines: {
				show: true,
				lineWidth: 0, 
				fill: true,
				fillColor: {
					colors: [{
						opacity: 1
					}, {
						opacity: 1
					}
					]
				}
			},
			points: {
				show: false
			},
			shadowSize: 2
		},
		legend:{
			show: false
		},
		grid: {
			labelMargin: 0,
			axisMargin: 500,
			hoverable: true,
			clickable: true,
			borderWidth: 0,
			margin: 0,
			minBorderMargin: 0
		},
		xaxis: {
			ticks: 0
		},
		yaxis: {
			ticks: 0
		}
	};

	$.plot($("#chart-area"), dataSet1, options);

	$("#chart-area").bind("plothover", function (event, pos, item) {
		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);
				showTooltip(item.pageX, item.pageY,
				item.series.label + " (" + x + ", " + y + ")");
			}
		} else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
	
	/* FLOT CHART 2 */
	var line_chart = $.plot($("#chart-line"), dataSet2, {
		series: {
			lines: {
				show: true,
				lineWidth: 2, 
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.2
					}, {
						opacity: 0.2
					}
					]
				}
			},
			points: {
				show: true
			},
			shadowSize: 2
		},
		legend:{
			show: false
		},
		grid: {
			labelMargin: 5,
			axisMargin: 0,
			hoverable: true,
			clickable: true,
			tickColor: "rgba(255, 255, 255, 0.1)",
			borderWidth: 0
		},
		xaxis: {
			ticks: 5
		},
		yaxis: {
			ticks: 2
		}
	});

	$('.flot-x1-axis').css('color','#fff');
	$('.flot-y1-axis').css('color','#fff');

	$("#chart-line").bind("plothover", function (event, pos, item) {
		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);
				showTooltip(item.pageX, item.pageY,
				item.series.label + " (" + x + ", " + y + ")");
			}
		} else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
	
	/* FLOT CHART 3 */
	var bar_chart = $.plot($("#chart-bar"), dataSet3, {
		series: {
			bars: {
				show: true,
				barWidth: 0.1,
				lineWidth: 0.2,
				fill: true,
				hoverable: true,
				order: 1,
				fillColor: {
					colors: [{
						opacity: 1
					}, {
						opacity: 1
					}]
				}
			},
			shadowSize: 2
		},
		legend:{
			show: false
		},
		grid: {
			labelMargin: 5,
			axisMargin: 0,
			hoverable: true,
			clickable: true,
			tickColor: "rgba(255, 255, 255, 0.2)",
			borderWidth: 0
		},
		xaxis: {
			ticks: [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"]],
			tickDecimals: 0
		},
		yaxis: {
			ticks: 3,
			tickDecimals: 0
		}
	});

	$('.flot-x1-axis').css('color','#fff');
	$('.flot-y1-axis').css('color','#fff');

	$("#chart-bar").bind("plothover", function (event, pos, item) {
		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";

		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0],
				y = item.datapoint[1];
				showTooltip(item.pageX, item.pageY,
				item.series.label + " = " + y);
			}
		} else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});

	/* FLOT CHART 4 */
	var donut_chart = $.plot($("#chart-donut"), dataSet4, {
		series: {
			pie: {
				show: true,
				innerRadius: 0.4,
				radius: 0.9,
				label: {
					show: false,
					radius: 1
				}
			}
		},
		legend: {
			show: false
		},
		grid: {
			hoverable: true
		}
	});
}

/* SKYCONS */
function initSkycons() {
	var icons = new Skycons({"color": "#ffffff"}),
		list  = [
			"clear-day", "clear-night", "partly-cloudy-day",
			"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
			"fog"
		], i;

	for(i = list.length; i--; )
		icons.set(list[i], list[i]);

	icons.play();
}

/* INLINE DATETIME */
function initDatetime() {
	$('#datetimepicker').datetimepicker({
		startView: 2,
		minView: 2
	});
}

/* USA MAP */
function initMap() {
	map = new jvm.WorldMap({
		map: 'us_aea_en',
		container: $('#vector-map'),
		series: {
			regions: [{
				attribute: 'fill'
			}]
		}
	});

	var palette = ['#0071A4', '#2286B4', '#4A9FC5', '#4EA2C8', '#7ABDDC', '#9ED4EC', '#FFFFFF'];

	generateColors = function(){
		var colors = {},
			key;

		for (key in map.regions) {
			colors[key] = palette[Math.floor(Math.random()*palette.length)];
		} return colors;
	}, map;

	map.series.regions[0].setValues(generateColors());
}

$(function() {
	"use strict";
	
	initNotification();
	initSparkline();
	initFlot();
	initSkycons();
	initDatetime();
	initMap();
});