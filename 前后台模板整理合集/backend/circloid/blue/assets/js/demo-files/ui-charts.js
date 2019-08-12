///////////////
// UI Charts //
///////////////

"use strict";

$(document).ready(function(){
	/**
	 * circloidLineChartFlot handles the line chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidLineChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');		

		var data = {
			"label1":{
				"label":"T-Shirt Sales",
				"data":[[1,4],[2,0],[3,4],[4,5],[5,13],[6,7],[7,17],[8,24],[9,2],[10,6],[11,32],[12,30]]
			},
			"label2":{
				"label":"Shoe Sales","data":[[1,5],[2,0],[3,0],[4,2],[5,6],[6,2],[7,5],[8,3],[9,15],[10,10],[11,14],[12,21]]
			},
			"xaxis":[[1,"Jan"],[2,"Feb"],[3,"Mar"],[4,"Apr"],[5,"May"],[6,"Jun"],[7,"Jul"],[8,"Aug"],[9,"Sep"],[10,"Oct"],[11,"Nov"],[12,"Dec"]]
		};

		var options = {
			series: {
				lines: { 
					show: true,
					fill: true,
					lineWidth: 1.5
				},
				points: {
					show: true,
					radius: 6
				}	
			},
			shadowSize: 0,
			grid: {
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				borderWidth: 1,
				hoverable: true
			},
			legend: {
				show: true,
				position: "nw"
			},
			xaxis: {
				ticks: data.xaxis
			},
			tooltip: true,
			tooltipOpts: {
				content: "%s: <b>%y</b>",
				shifts: {
					x: -40,
					y: 25
				},
				defaultTheme : false
			},
			colors: colors
		}

		$.plot(placeholder, [data.label1, data.label2], options);
	}

	/**
	 * circloidBarChartFlot handles the bar chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidBarChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');		

		var data = {
			"label1":{
				"label":"T-Shirt Sales",
				"data":[[1388534400000, 120], [1391212800000, 70],  [1393632000000, 100], [1396310400000, 60], [1398902400000, 35]]
			},
			"label2":{
				"label":"Shoe Sales","data":[[1388534400000, 90], [1391212800000, 60], [1393632000000, 30], [1396310400000, 73], [1398902400000, 30]]
			}
		};

		var options = {	
			series: {
				bars: {
					show: true,
					fill: true,
					lineWidth: 1,
					barWidth: 762880000,
					order: 1
				}
			},
			shadowSize: 0,
			grid: {
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				borderWidth: 1,
				hoverable: true
			},
			legend: {
				show: true
			},
			xaxis: {
				mode: "time",
	            min: 1387497600000,
	            max: 1400112000000,
	            tickLength: 0,
	            tickSize: [1, "month"],
	            axisLabel: 'Month',
	            axisLabelUseCanvas: true,
	            axisLabelFontSizePixels: 13,
	            axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
	            axisLabelPadding: 15
			},
			yaxis: {
				axisLabel: 'Value',
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 13,
				axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
				axisLabelPadding: 5
			},
			tooltip: true,
			tooltipOpts: {
				content: "%s: <b>%y</b>",
				shifts: {
					x: -40,
					y: 25
				},
				defaultTheme : false
			},
			colors: colors
		}

		$.plot(placeholder, [data.label1, data.label2], options);
	}

	/**
	 * circloidStackedBarChartFlot handles the stacked bar chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidStackedBarChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');

		var d1 = [[0, 10], [1, 24], [2, 5], [3, 3], [4, 7], [5, 15], [6, 27], [7, 12], [8, 13], [9, 18], [10, 20]];

		var d2 = [[0, 3], [1, 20], [2, 18], [3, 7], [4, 12], [5, 21], [6, 13], [7, 19], [8, 0], [9, 29], [10, 18]];

		var d3 = [[0, 11], [1, 13], [2, 2], [3, 26], [4, 1], [5, 13], [6, 12], [7, 24], [8, 25], [9, 7], [10, 23]];

		$.plot(placeholder, [ d1, d2, d3 ], {
			series: {
				stack: true,
				bars: {
					show: true,
					fill: true,
					lineWidth: 1,
					barWidth: 0.6
				}
			},
			grid: {
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				borderWidth: 1,
				hoverable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: "Points: <b>%y</b>",
				shifts: {
					x: -40,
					y: 25
				},
				defaultTheme : false
			},
			xaxis: {
				tickLength: 0
			},
			colors: colors
		});
	}

	/**
	 * circloidHorizontalBarChartFlot handles the horizontal bar chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidHorizontalBarChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');
		var d1 = [[3, 0], [6, 1], [5, 2], [2, 3], [8, 4]];

		var yaxis = [[0, 'Yes'], [1, 'No'], [2, 'Maybe'], [3, 'Sometimes'], [4, 'Never']];

		var options = {
			bars: {
				show: true,
				horizontal: true,
				lineWidth: 1,
				barWidth: 0.8
			},
			grid: {
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				borderWidth: 1,
				hoverable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: "<b>%x</b> Users Said <b>%y</b>",
				shifts: {
					x: -60,
					y: 25
				},
				defaultTheme : false
			},
			yaxis: {
				tickLength: 0,
				ticks: yaxis
			},
			colors: colors
		};

		$.plot(placeholder, [d1], options);
	}

	/**
	 * circloidPieChartFlot handles the pie chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidPieChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');

		var data = [
			{data: 1090.0000, color: colors[0], label: "iMac"},
			{data: 1024.0000, color: colors[1], label: "iPhone"},
			{data: 390.0000, color: colors[2], label: "Nikon D300"},
			{data: 310.0000, color: colors[3], label: "iPod Touch"}
		];

		var options = {
			series: {
				pie: { 
					show: true,
					radius:  1,
					label: {
						show:true,
						radius: 0.9,
						formatter: function (label, series) {
							return '<div style="font-size:8pt;text-align:center;padding:5px;color:white;">' + label + ': ' + Math.round(series.percent) + '%</div>';
						},
						background: {
							opacity: 0.5,
							color: '#000'
						}
					}
				}
			},
			legend: {
				show: true
			},
			grid: {
				hoverable: true
			}
		}

		// Plot the chart and set options
		var plotChart = $.plot(placeholder, data, options);

		if (isNaN(plotChart.getData()[0].percent)){
			var canvas = plotChart.getCanvas();
			var ctx = canvas.getContext("2d");
			var x = canvas.width / 2;
			var y = canvas.height / 2;
			ctx.textAlign = 'center';
			ctx.fillText('No Data for this date range', x, y);
		}
	}

	/**
	 * circloidDonutChartFlot handles the donut chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidDonutChartFlot(placeholder, legend){

		var colors = $(placeholder).data("graph-colors").split(',');

		var graphSizeWidth = $(placeholder).width();
		var graphSizeHeight = $(placeholder).height();

		var graphSizeMin;
		var graphSize;

		if(graphSizeHeight <= graphSizeWidth){
			graphSizeMin = graphSizeHeight;
		}else{
			graphSizeMin = graphSizeWidth;
		}

		if((graphSizeMin === undefined) || (graphSizeMin === null)){
			graphSize = 0.88;
		}else if(graphSizeMin <= 32){
			graphSize = 0.75;
		}else if((graphSizeMin > 32) && (graphSizeMin <= 90)){
			graphSize = 0.85;
		}else if((graphSizeMin > 90) && (graphSizeMin <= 130)){
			graphSize = 0.87;
		}else if(graphSizeMin > 130){
			graphSize = 0.88;
		}

		if(legend === undefined){
			legend = true
		}

		var data = [
			{data: 1090.0000, color: colors[0], label: "iMac"},
			{data: 1024.0000, color: colors[1], label: "iPhone"},
			{data: 390.0000, color: colors[2], label: "Nikon D300"},
			{data: 205.0000, color: colors[3], label: "iPod Touch"},
			{data: 105.0000, color: colors[4], label: "iPod Nano"}
		];
		var options = {
			series: {
				pie: { 
					show: true,
					radius:  1,
					innerRadius: graphSize,
					label: false
				}
			},
			legend: {
				show: legend
			},
			grid: {
				hoverable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: function(label, xval, yval, flotItem){
					return label + "'s sold: <b>" + yval + " Units</b>"
				},
				shifts: {
					x: -60,
					y: 25
				},
				defaultTheme : false
			}
		};

		// Plot the chart and set options
		var plotChart = $.plot(placeholder, data, options);

		if (isNaN(plotChart.getData()[0].percent)){
			var canvas = plotChart.getCanvas();
			var ctx = canvas.getContext("2d");
			var x = canvas.width / 2;
			var y = canvas.height / 2;
			ctx.textAlign = 'center';
			ctx.fillText('No Data for this date range', x, y);
		}
	}

	/**
	 * circloidLiveDataChartFlot handles the live data chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidLiveDataChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');

		// Determine how many data points to keep based on the placeholder's initial size;
		// this gives us a nice high-res plot while avoiding more than one point per pixel.

		var maximum = $(placeholder).outerWidth() / 2 || 300;

		var data = [];

		function getRandomData(){
			if (data.length) {
				data = data.slice(1);
			}

			while (data.length < maximum){
				var previous = data.length ? data[data.length - 1] : 50;
				var y = previous + Math.random() * 10 - 5;
				data.push(y < 0 ? 0 : y > 100 ? 100 : y);
			}

			// zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		var series = [{
			data: getRandomData(),
			lines: {
				fill: true,
				lineWidth: 1
			}
		}];

		var plot = $.plot(placeholder, series, {
			grid: {
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				hoverable: true,
				borderWidth: 1,
				minBorderMargin: 20,
				labelMargin: 10,
				margin: {
					top: 8,
					bottom: 20,
					left: 20
				},
				markings: function(axes) {
					var markings = [];
					var xaxis = axes.xaxis;
					for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
						markings.push({ xaxis: { from: x, to: x + xaxis.tickSize }, color: "rgba(232, 232, 255, 0.2)" });
					}
					return markings;
				}
			},
			xaxis: {
				tickFormatter: function() {
					return "";
				}
			},
			yaxis: {
				min: 0,
				max: 110
			},
			tooltip: true,
			tooltipOpts: {
				content: "Response Time: <b>%y ms</b>",
				shifts: {
					x: -40,
					y: 25
				},
				defaultTheme : false
			},
			legend: {
				show: true
			},
			colors: colors
		});

		// Create the demo X and Y axis labels
		var yaxisLabel = $("<div class='axisLabel yaxisLabel'></div>")
			.text("Response Time (ms)")
			.prependTo(placeholder);

		// Since CSS transforms use the top-left corner of the label as the transform origin,
		// we need to center the y-axis label by shifting it down by half its width.
		// Subtract 20 to factor the chart's bottom margin into the centering.

		yaxisLabel.css("margin-bottom", "10px");

		// Update the random dataset at 25FPS for a smoothly-animating chart
		setInterval(function updateRandom() {
			series[0].data = getRandomData();
			plot.setData(series);
			plot.draw();
		}, 40);
	}

	/**
	 * circloidDialChart creates the dial chart
	 * @param {string} placeholder:	id of graph
	 */
	function circloidDialChart(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');
		var chartSize = $(placeholder).height();

		// Set the width of the Graph placeholder
		$(placeholder).width(chartSize);

		// Set inner text line-height
		$(placeholder).find(".percent").css({"line-height": chartSize + "px"});

		$(placeholder).easyPieChart({
			barColor: function(percent){
				if(colors[1] === undefined){
					return colors;
				}else{
					if(percent < 25){
						return colors[1];
					}else if((percent >= 25) && (percent < 50)){
						return colors[2];
					}else if((percent >= 50) && (percent < 75)){
						return colors[3];
					}else{
						return colors[0];
					}
				}
			},
			size: chartSize,
			lineCap: "square",
			scaleColor: "#7A7A7A",
			trackColor: "#E8E8E8",
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		var chart = window.chart = $(placeholder).data('easyPieChart');
		$(placeholder).closest(".c-widget").find('.update-graph').on('click', function(e) {
			chart.update(Math.random() * (90 - 8) + 8);
			e.preventDefault();
		});
	}
	
	/* Call Functions */
	circloidLineChartFlot("#graph-demo-1");

	circloidBarChartFlot("#graph-demo-2");

	circloidStackedBarChartFlot("#graph-demo-3");

	circloidHorizontalBarChartFlot("#graph-demo-4");

	circloidPieChartFlot("#graph-demo-5");

	circloidDonutChartFlot("#graph-demo-6");

	circloidLiveDataChartFlot("#graph-demo-7");

	circloidDialChart("#graph-demo-8");
	circloidDialChart("#graph-demo-9");
	circloidDialChart("#graph-demo-10");
	circloidDialChart("#graph-demo-11");
	circloidDialChart("#graph-demo-12");
	circloidDialChart("#graph-demo-13");

	/**
	 * DEMO ONLY - Start
	 * Used to update the Dial Chart using the "Update Chart" button
	 */
	var chart = window.chart = $("#graph-demo-8").data('easyPieChart');
	$("#update-dial-chart").on('click', function(e){
		chart.update(Math.abs(Math.random()*200-100));
		e.preventDefault();
	});
	/* DEMO ONLY - End */

	
	/* Graph 999 - Bubble Chart */
	/* BUG: The bubble chart plugin for Flot is buggy and isn't as flexible as I'd like. Uncomment the code below and use it if you wish. */
	// $("#graph-demo-999").each(function(){

	// 	var placeholder = $(this);
	// 	var colors = $(this).data("graph-colors").split(',');

	// 	var d1 = [[20,20,10], [40,50,20], [70,10,5], [80,80,7]];
	// 	var d2 = [[60,25,15], [70,40,6], [30,80,4]];
	// 	var d3 = [[65,27,30], [23,21,40], [0,80,8]];
	// 	var d4 = [[30,17,30], [23,80,10], [0,16,8]];

	// 	$.plot(placeholder, [ d1, d2, d3,d4 ], {
	// 		series: {
	// 			bubbles:{
	// 				active:true,
	// 				show:true,
	// 				linewidth:2,
	// 				bubblelabel: {
	// 					show: true
	// 				}
	// 			}
	// 		},
	// 		grid: {
	// 			hoverable: true,
	// 			borderWidth: 0
	// 		},
	// 		colors: colors
	// 	});
	// });
});