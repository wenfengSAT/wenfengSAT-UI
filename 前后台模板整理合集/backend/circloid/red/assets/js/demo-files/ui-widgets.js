////////////////
// UI Widgets //
////////////////

"use strict";

$(document).ready(function(){

	/**
	 * circloidLineChartFlot handles the line chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidLineChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');		

		var data = [[2006,0.70], [2007,0.82], [2008,0.71], [2009,0.68], [2010,0.79], [2011,0.76], [2012,0.85], [2013,0.75], [2014,0.72]]

		var options = {
			series: {
				lines: { 
					show: true,
					fill: true,
					lineWidth: 1.5
				}	
			},
			shadowSize: 0,
			grid: {
				show: false,
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				borderWidth: 1,
				hoverable: true
			},
			legend: {
				show: false
			},
			tooltip: true,
			tooltipOpts: {
				content: function(label, xval, yval, flotItem){
					return "1 USD = <b>" + yval + " Euro</b>";
				},
				shifts: {
					x: -40,
					y: 25
				},
				defaultTheme : false
			},
			colors: colors
		}

		$.plot(placeholder, [data], options);
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
				borderWidth: 0,
				hoverable: true,
				minBorderMargin: 0
			},
			legend: {
				show: false
			},
			xaxis: {
				mode: "time",
	            min: 1387497600000,
	            max: 1400112000000,
	            tickLength: 0,
	            tickSize: [1, "month"],
	            axisLabelUseCanvas: true,
	            axisLabelFontSizePixels: 13,
	            axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
	            axisLabelPadding: 0
			},
			yaxis: {
	            tickLength: 0,
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 13,
				axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
				axisLabelPadding: 0
			},
			tooltip: true,
			tooltipOpts: {
				content: function(label, xval, yval, flotItem){
					return label + ": <b>" + yval + "</b>";
				},
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
				show: false,
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				borderWidth: 0,
				hoverable: true,
				minBorderMargin: 0,
				labelMargin: 0,
				margin: {
					top: 0,
					bottom: 0,
					left: 0
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
	            tickLength: 0,
				tickFormatter: function() {
					return "";
				},
				axisLabelPadding: 0
			},
			yaxis: {
				min: 0,
				max: 110,
	            tickLength: 0,
				axisLabelPadding: 0
			},
			tooltip: true,
			tooltipOpts: {
				content: function(label, xval, yval, flotItem){
					return "Response Time = <b>" + yval + " ms</b>";
				},
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

		// Update the random dataset at 25FPS for a smoothly-animating chart
		setInterval(function updateRandom() {
			series[0].data = getRandomData();
			plot.setData(series);
			plot.draw();
		}, 40);
	}
	
	/**
	 * circloidDialChart handles the dial chart (Easy Pie Chart)
	 * @param  {string} placeholder		id of graph
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
	
	/**
	 * circloidDonutChartFlot handles the donut chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidDonutChartFlot(placeholder, graphSize, legend){

		var colors = $(placeholder).data("graph-colors").split(',');

		if(graphSize === undefined){
			graphSize = 0.88;
		}else if(graphSize == "micro"){
			graphSize = 0.75;
		}else if(graphSize == "small"){
			graphSize = 0.85;
		}else if(graphSize == "medium"){
			graphSize = 0.87;
		}else if(graphSize == "normal" || graphSize == "large"){
			graphSize = 0.88;
		}

		if(legend === undefined){
			legend = true
		}

		var data = [
			{data: 10900.0000, color: colors[0], label: "Servers"},
			{data: 10240.0000, color: colors[1], label: "Laptops/Desktops"},
			{data: 3900.0000, color: colors[2], label: "Software Licenses"},
			{data: 2050.0000, color: colors[3], label: "General Repairs"},
			{data: 1050.0000, color: colors[4], label: "Administrative Items"}
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
					return label + ": <b>$" + yval.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "</b>";
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
	 * circloidSalesValueWidget handles the sales value widget
	 * @param  {string} placeholder		id of graph
	 */
	function circloidSalesValueWidget(placeholder){

		var data = [];
		var dataObj = {};

		var legendItems = $(placeholder).closest(".block").find(".sales-value-legend-item[data-ignore!='true']");
		var legendCount = legendItems.length;

		for (var n = 0; n < legendCount; n++){
			var valueGraph = legendItems.eq(n).find(".sales-value-legend-number").data("raw-value");
			var colorGraph = legendItems.eq(n).find(".sales-value-legend-color-box").data("color");
			var textGraph = legendItems.eq(n).find(".sales-value-legend-text").text();

			// Set the Background color of the legend box
			legendItems.eq(n).find(".sales-value-legend-color-box").css({"background-color":colorGraph});

			// Populate Flot data array
			dataObj = {data: valueGraph, color: colorGraph, label: textGraph};
			data.push(dataObj);
		}

		var options = {
			series: {
				pie: { 
					show: true,
					radius:  1,
					label: false
				}
			},
			legend: {
				show: false
			},
			grid: {
				hoverable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: function(label, xval, yval, flotItem){
					return label + ": <b>$" + yval.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "</b>"
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
	 * circloidDateRangeChart handles the sales value widget
	 * @param  {string} placeholder:		id or class of parent block
	 * @param  {string} graphPlaceholder:	id of graph
	 * @param  {string} graphType:			enter graph type [bar, line, pie, donut]
	 */
	function circloidDateRangeChart(placeholder, graphPlaceholder, graphType){

		if(graphType === undefined || graphType == null){
			graphType = "line";
		}
		
		if($(placeholder).find(".date-range-select").val() == "custom"){
			$(placeholder).find(".date-picker-connected").show();
		}

		// Display loading icon
		$(placeholder).closest(".block").find(".block-controls .icon.loading").remove();

		$(placeholder).closest(".block").find(".block-controls").append("<span class='icon loading' style='opacity:1;'></span>");

		graphTypeSwitch(graphType);

		$(placeholder).find(".date-range-select").on("change", function(){
			// Display loading icon
			$(placeholder).closest(".block").find(".block-controls .icon.loading").remove();

			$(placeholder).closest(".block").find(".block-controls").append("<span class='icon loading' style='opacity:1;'></span>");

			if($(this).val() == "custom"){
				$(this).closest("form").find(".date-picker-connected").fadeIn(300);
			}else{
				$(this).closest("form").find(".date-picker-connected").fadeOut(300);
			}

			graphTypeSwitch(graphType);
		});

		$(placeholder).find(".date-picker-connected").each(function(){
			var eventStartDate = $(this).find('.date-picker-start');
			var eventEndDate = $(this).find('.date-picker-end');

			eventStartDate.datetimepicker({
				pickTime: false
			});
			eventEndDate.datetimepicker({
				pickTime: false
			});
			eventStartDate.on("dp.change",function(e) {
				eventEndDate.data("DateTimePicker").setMinDate(e.date);
			});
			eventEndDate.on("dp.change",function(e) {
				eventStartDate.data("DateTimePicker").setMaxDate(e.date);
			});
		});

		// Gets current date range
		function graphTypeSwitch(graphType){
			switch(graphType){
				case "bar":
					// Call Chart
					barChartFlot(graphPlaceholder);
				break;

				default:
				case "line":
					// Call Chart
					lineChartFlot(graphPlaceholder);
				break;

				case "pie":
					// Call Chart
					donutPieChartFlot(graphPlaceholder, false, "pie");
				break;

				case "donut":
					// Call Chart
					donutPieChartFlot(graphPlaceholder, false, "donut");
				break;
			}
		}

		/* Line Chart: Called from dateRangeChart function */
		function lineChartFlot(placeholder){

			var colors = $(placeholder).data("graph-colors").split(',');

			var dateRange = $(placeholder).closest(".block").find(".date-range-select").val();

			switch(dateRange){
				case "today":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,3],[9,9],[10,2],[11,20],[12,0],[13,10],[14,17],[15,10],[16,9],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"label2":{
							"label":"Total Customers",
							"data":[[0,0],[1,0],[2,0],[3,1],[4,2],[5,3],[6,4],[7,0],[8,7],[9,2],[10,5],[11,3],[12,0],[13,0],[14,0],[15,0],[16,4],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"xaxis":[[0,"00:00"],[1,"01:00"],[2,"02:00"],[3,"03:00"],[4,"04:00"],[5,"05:00"],[6,"06:00"],[7,"07:00"],[8,"08:00"],[9,"09:00"],[10,"10:00"],[11,"11:00"],[12,"12:00"],[13,"13:00"],[14,"14:00"],[15,"15:00"],[16,"16:00"],[17,"17:00"],[18,"18:00"],[19,"19:00"],[20,"20:00"],[21,"21:00"],[22,"22:00"],[23,"23:00"]]
					}
				break;

				case "yesterday":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,6],[8,3],[9,19],[10,41],[11,20],[12,10],[13,10],[14,17],[15,10],[16,9],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"label2":{
							"label":"Total Customers",
							"data":[[0,0],[1,0],[2,0],[3,1],[4,2],[5,3],[6,4],[7,0],[8,4],[9,12],[10,9],[11,4],[12,7],[13,5],[14,0],[15,0],[16,4],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"xaxis":[[0,"00:00"],[1,"01:00"],[2,"02:00"],[3,"03:00"],[4,"04:00"],[5,"05:00"],[6,"06:00"],[7,"07:00"],[8,"08:00"],[9,"09:00"],[10,"10:00"],[11,"11:00"],[12,"12:00"],[13,"13:00"],[14,"14:00"],[15,"15:00"],[16,"16:00"],[17,"17:00"],[18,"18:00"],[19,"19:00"],[20,"20:00"],[21,"21:00"],[22,"22:00"],[23,"23:00"]]
					}
				break;
				
				case "this_week":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,4],[1,5],[2,3],[3,9],[4,8],[5,6],[6,8]]
						},
						"label2":{
							"label":"Total Customer","data":[[0,1],[1,1],[2,3],[3,2],[4,3],[5,0],[6,0]]
						},
						"xaxis":[[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]
					};
				break;

				case "last_week":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,14],[1,15],[2,30],[3,49],[4,98],[5,36],[6,18]]
						},
						"label2":{
							"label":"Total Customer","data":[[0,11],[1,19],[2,30],[3,23],[4,39],[5,39],[6,10]]
						},
						"xaxis":[[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]
					};
				break;

				case "this_month":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var	data = {
						"label1":{
							"label":"Total Orders",
							"data":[[1,2],[2,1],[3,3],[4,3],[5,4],[6,0],[7,0],[8,0],[9,3],[10,5],[11,0],[12,0],[13,0],[14,0],[15,0],[16,1],[17,3],[18,2],[19,1],[20,2],[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],[28,0],[29,0],[30,0],[31,0]]
						},
						"label2":{
							"label":"Total Customers",
							"data":[[1,0],[2,0],[3,0],[4,0],[5,2],[6,1],[7,3],[8,0],[9,1],[10,2],[11,1],[12,2],[13,4],[14,3],[15,2],[16,0],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],[28,0],[29,0],[30,0],[31,0]]
						},
						"xaxis":[[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"],[9,"9"],[10,"10"],[11,"11"],[12,"12"],[13,"13"],[14,"14"],[15,"15"],[16,"16"],[17,"17"],[18,"18"],[19,"19"],[20,"20"],[21,"21"],[22,"22"],[23,"23"],[24,"24"],[25,"25"],[26,"26"],[27,"27"],[28,"28"],[29,"29"],[30,"30"],[31,"31"]]
					}
				break;

				default:
				case "this_year":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var	data = {
						"label1":{
							"label":"Total Orders",
							"data":[[1,2052],[2,1460],[3,1492],[4,1794],[5,1384],[6,2122],[7,2880],[8,2545],[9,3908],[10,4935],[11,3907],[12,4937]]
						},
						"label2":{
							"label":"Total Customer","data":[[1,821],[2,730],[3,622],[4,897],[5,923],[6,999],[7,1400],[8,1212],[9,1534],[10,2100],[11,1503],[12,1899]]
						},
						"xaxis":[[1,"Jan"],[2,"Feb"],[3,"Mar"],[4,"Apr"],[5,"May"],[6,"Jun"],[7,"Jul"],[8,"Aug"],[9,"Sept"],[10,"Oct"],[11,"Nov"],[12,"Dec"]]
					};
				break;

				case "last_year":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var	data = {
						"label1":{
							"label":"Total Orders",
							"data":[[1,252],[2,160],[3,192],[4,194],[5,184],[6,222],[7,280],[8,245],[9,308],[10,435],[11,307],[12,437]]
						},
						"label2":{
							"label":"Total Customer","data":[[1,21],[2,30],[3,22],[4,97],[5,23],[6,99],[7,100],[8,212],[9,134],[10,100],[11,103],[12,199]]
						},
						"xaxis":[[1,"Jan"],[2,"Feb"],[3,"Mar"],[4,"Apr"],[5,"May"],[6,"Jun"],[7,"Jul"],[8,"Aug"],[9,"Sept"],[10,"Oct"],[11,"Nov"],[12,"Dec"]]
					};
				break;
			}

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
					content: function(label, xval, yval, flotItem){
						return label + ": <b>" + yval.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "</b>";
					},
					shifts: {
						x: -40,
						y: 25
					},
					defaultTheme : false
				},
				colors: colors
			}

			var plotChart = $.plot(placeholder, [data.label1, data.label2], options);

			if(plotChart){
				$(placeholder).closest(".block").find(".block-controls .icon-success").remove();
				$(placeholder).closest(".block").find(".block-controls .icon-error").remove();
				$(placeholder).closest(".block").find(".block-controls").append("<span class='icon icon-check icon-size-medium icon-success' style='opacity:1;'></span>");
				$(placeholder).closest(".block").find(".block-controls .icon-success").delay(3000).fadeOut(1000, function(){
					$(this).remove();
				});
				$(placeholder).closest(".block").find(".block-controls .icon.loading").remove();
				return true;
			}

			return false;
		}

		/* Bar Chart: Called from dateRangeChart function */
		function barChartFlot(placeholder){

			var colors = $(placeholder).data("graph-colors").split(',');

			var dateRange = $(placeholder).closest(".block").find(".date-range-select").val();

			switch(dateRange){
				case "today":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,3],[9,9],[10,2],[11,20],[12,0],[13,10],[14,17],[15,10],[16,9],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"label2":{
							"label":"Total Customers",
							"data":[[0,0],[1,0],[2,0],[3,1],[4,2],[5,3],[6,4],[7,0],[8,7],[9,2],[10,5],[11,3],[12,0],[13,0],[14,0],[15,0],[16,4],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"xaxis":[[0,"00:00"],[1,"01:00"],[2,"02:00"],[3,"03:00"],[4,"04:00"],[5,"05:00"],[6,"06:00"],[7,"07:00"],[8,"08:00"],[9,"09:00"],[10,"10:00"],[11,"11:00"],[12,"12:00"],[13,"13:00"],[14,"14:00"],[15,"15:00"],[16,"16:00"],[17,"17:00"],[18,"18:00"],[19,"19:00"],[20,"20:00"],[21,"21:00"],[22,"22:00"],[23,"23:00"]]
					}
				break;

				case "yesterday":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,6],[8,3],[9,19],[10,41],[11,20],[12,10],[13,10],[14,17],[15,10],[16,9],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"label2":{
							"label":"Total Customers",
							"data":[[0,0],[1,0],[2,0],[3,1],[4,2],[5,3],[6,4],[7,0],[8,4],[9,12],[10,9],[11,4],[12,7],[13,5],[14,0],[15,0],[16,4],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0]]
						},
						"xaxis":[[0,"00:00"],[1,"01:00"],[2,"02:00"],[3,"03:00"],[4,"04:00"],[5,"05:00"],[6,"06:00"],[7,"07:00"],[8,"08:00"],[9,"09:00"],[10,"10:00"],[11,"11:00"],[12,"12:00"],[13,"13:00"],[14,"14:00"],[15,"15:00"],[16,"16:00"],[17,"17:00"],[18,"18:00"],[19,"19:00"],[20,"20:00"],[21,"21:00"],[22,"22:00"],[23,"23:00"]]
					}
				break;
				
				case "this_week":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,4],[1,5],[2,3],[3,9],[4,8],[5,6],[6,8]]
						},
						"label2":{
							"label":"Total Customer","data":[[0,1],[1,1],[2,3],[3,2],[4,3],[5,0],[6,0]]
						},
						"xaxis":[[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]
					};
				
				break;

				case "last_week":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var data = {
						"label1":{
							"label":"Total Orders",
							"data":[[0,14],[1,15],[2,30],[3,49],[4,98],[5,36],[6,18]]
						},
						"label2":{
							"label":"Total Customer","data":[[0,11],[1,19],[2,30],[3,23],[4,39],[5,39],[6,10]]
						},
						"xaxis":[[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]
					};
				
				break;

				case "this_month":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var	data = {
						"label1":{
							"label":"Total Orders",
							"data":[[1,2],[2,1],[3,3],[4,3],[5,4],[6,0],[7,0],[8,0],[9,3],[10,5],[11,0],[12,0],[13,0],[14,0],[15,0],[16,1],[17,3],[18,2],[19,1],[20,2],[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],[28,0],[29,0],[30,0],[31,0]]
						},
						"label2":{
							"label":"Total Customers",
							"data":[[1,0],[2,0],[3,0],[4,0],[5,2],[6,1],[7,3],[8,0],[9,1],[10,2],[11,1],[12,2],[13,4],[14,3],[15,2],[16,0],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],[28,0],[29,0],[30,0],[31,0]]
						},
						"xaxis":[[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"],[9,"9"],[10,"10"],[11,"11"],[12,"12"],[13,"13"],[14,"14"],[15,"15"],[16,"16"],[17,"17"],[18,"18"],[19,"19"],[20,"20"],[21,"21"],[22,"22"],[23,"23"],[24,"24"],[25,"25"],[26,"26"],[27,"27"],[28,"28"],[29,"29"],[30,"30"],[31,"31"]]
					}

				break;

				default:
				case "this_year":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var	data = {
						"label1":{
							"label":"Total Orders",
							"data":[[1,2052],[2,1460],[3,1492],[4,1794],[5,1384],[6,2122],[7,2880],[8,2545],[9,3908],[10,4935],[11,3907],[12,4937]]
						},
						"label2":{
							"label":"Total Customer","data":[[1,821],[2,730],[3,622],[4,897],[5,923],[6,999],[7,1400],[8,1212],[9,1534],[10,2100],[11,1503],[12,1899]]
						},
						"xaxis":[[1,"Jan"],[2,"Feb"],[3,"Mar"],[4,"Apr"],[5,"May"],[6,"Jun"],[7,"Jul"],[8,"Aug"],[9,"Sept"],[10,"Oct"],[11,"Nov"],[12,"Dec"]]
					};
				
				break;

				case "last_year":
					// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart
					var	data = {
						"label1":{
							"label":"Total Orders",
							"data":[[1,252],[2,160],[3,192],[4,194],[5,184],[6,222],[7,280],[8,245],[9,308],[10,435],[11,307],[12,437]]
						},
						"label2":{
							"label":"Total Customer","data":[[1,21],[2,30],[3,22],[4,97],[5,23],[6,99],[7,100],[8,212],[9,134],[10,100],[11,103],[12,199]]
						},
						"xaxis":[[1,"Jan"],[2,"Feb"],[3,"Mar"],[4,"Apr"],[5,"May"],[6,"Jun"],[7,"Jul"],[8,"Aug"],[9,"Sept"],[10,"Oct"],[11,"Nov"],[12,"Dec"]]
					};
				
				break;
			}

			var options = {	
				series: {
					bars: {
						show: true,
						fill: true,
						lineWidth: 1,
						barWidth: 0.34,
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
					ticks: data.xaxis
				},
				tooltip: true,
				tooltipOpts: {
					content: function(label, xval, yval, flotItem){
						return label + ": <b>" + yval.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "</b>";
					},
					shifts: {
						x: -40,
						y: 25
					},
					defaultTheme : false
				},
				colors: colors
			}

			var plotChart = $.plot(placeholder, [data.label1, data.label2], options);

			if(plotChart){
				$(placeholder).closest(".block").find(".block-controls .icon-success").remove();
				$(placeholder).closest(".block").find(".block-controls .icon-error").remove();
				$(placeholder).closest(".block").find(".block-controls").append("<span class='icon icon-check icon-size-medium icon-success' style='opacity:1;'></span>");
				$(placeholder).closest(".block").find(".block-controls .icon-success").delay(3000).fadeOut(1000, function(){
					$(this).remove();
				});
				$(placeholder).closest(".block").find(".block-controls .icon.loading").remove();
				return true;
			}

			return false;
		}

		/* Donut Chart: Called from dateRangeChart function */
		function donutPieChartFlot(placeholder, legend, graphType){

			var graphSizeWidth = $(placeholder).width();
			var graphSizeHeight = $(placeholder).height();

			var graphSizeMin;
			var graphSize = 0.89;

			if(graphSizeHeight <= graphSizeWidth){
				graphSizeMin = graphSizeHeight;
			}else{
				graphSizeMin = graphSizeWidth;
			}

			if((graphType == "donut") || (graphType === null) || (graphType === undefined) || (graphType == "")){
				if((graphSizeMin === undefined) || (graphSizeMin === null)){
					graphSize = 0.89;
				}else if(graphSizeMin <= 32){
					graphSize = 0.75;
				}else if((graphSizeMin > 32) && (graphSizeMin <= 90)){
					graphSize = 0.85;
				}else if((graphSizeMin > 90) && (graphSizeMin <= 130)){
					graphSize = 0.87;
				}else if(graphSizeMin > 130){
					graphSize = 0.89;
				}
			}else{
				graphSize = 0;
			}
			
			// SAMPLE DATA: This "data" variable contains SAMPLE DATA just to show you the format of the data that you need to pass into the chart

			var thisBlock = $(placeholder).closest(".block");
			var url = thisBlock.data("url");

			$.ajax({
				type: 'GET',
				url: url,
				beforeSend: function(){

					thisBlock.find(".block-controls .icon.loading").remove();
					thisBlock.find(".block-controls .icon-success").remove();
					thisBlock.find(".block-controls .icon-error").remove();

					thisBlock.find(".block-controls").append("<span class='icon loading' style='opacity:1;'></span>");
				},
				complete: function(){
					thisBlock.find(".block-controls .icon.loading").remove();
				},
				error: function(){
					thisBlock.find(".block-controls").append("<span class='icon icon-exclamation icon-size-medium icon-error' style='opacity:1;'></span>").delay(7000).fadeOut(1000);
					thisBlock.find(".block-controls .icon-error").delay(7000).fadeOut(1000);
				},
				success: function(json){
					thisBlock.find(".block-controls").append("<span class='icon icon-check icon-size-medium icon-success' style='opacity:1;'></span>");
					thisBlock.find(".block-controls .icon-success").delay(3000).fadeOut(1000);

					// SAMPLE DATA: This code is created to extract data from a text file designed specifically for this demo. You will need to adapt the code to your own data/database
					var data = [];
					var dataObj = {};
					var colorGraph = [];
					var colorGraphTemp = $(placeholder).data("graph-colors").split(',');

					var legendItems = thisBlock.find(".top-ranking-item");

					var dataRange = json.split("||===============||");
					var dataRangeToday = dataRange[0];
					var dataRangeYesterday = dataRange[1];
					var dataRangeThisWeek = dataRange[2];
					var dataRangeLastWeek = dataRange[3];
					var dataRangeMonth = dataRange[4];
					var dataRangeYear = dataRange[5];

					var dateRange = thisBlock.find(".date-range-select").val();

					switch(dateRange){
						default:
						case "today":
							var dataItem = dataRangeToday.split("|");
						break;

						case "yesterday":
							var dataItem = dataRangeYesterday.split("|");
						break;

						case "this_week":
							var dataItem = dataRangeThisWeek.split("|");
						break;

						case "last_week":
							var dataItem = dataRangeLastWeek.split("|");
						break;

						case "this_month":
							var dataItem = dataRangeMonth.split("|");
						break;

						case "this_year":
							var dataItem = dataRangeYear.split("|");
						break;
					}

					for (var n = 0; n < dataItem.length; n++){

						var dataItemSplit = dataItem[n].split(";");

						var valueGraph = parseInt(dataItemSplit[1]);
						var colorGraph = colorGraphTemp[n];
						var itemName = dataItemSplit[0];

						// Set the Background color of the legend box
						legendItems.eq(n).find(".top-ranking-item-legend-color-box").css({"background-color":colorGraph});

						// Set the "data-raw-value" for each item
						legendItems.eq(n).find(".top-ranking-item-legend-text").attr("data-raw-value",valueGraph);

						// Set Sold Count
						legendItems.eq(n).find(".top-ranking-item-legend-text .count").text(valueGraph.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

						// Set Item Name
						legendItems.eq(n).find(".top-ranking-item-legend-text .item-name").text(itemName);

						var textGraph = legendItems.eq(n).find(".top-ranking-item-legend-text").text();

						// Populate Flot data array
						dataObj = {data: valueGraph, color: colorGraph, label: textGraph};
						data.push(dataObj);
					}



					if(legend === undefined){
						legend = true;
					}

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
								return label;
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

					if(isNaN(plotChart.getData()[0].percent)){
						var canvas = plotChart.getCanvas();
						var ctx = canvas.getContext("2d");
						var x = canvas.width / 2;
						var y = canvas.height / 2;
						ctx.textAlign = 'center';
						ctx.fillText('No Data for this date range', x, y);
					}

					if(plotChart){
						return true;
					}
				}
			});
		}
	}

	/* Call Functions */
	circloidWidgets(); // Called from assets/js/optional/circloid-functions-optional.js

	/* Task List */
	circloidTaskListWidget(); // Called from assets/js/optional/circloid-functions-optional.js

	circloidDialChart("#discount-randomizer");
	circloidDialChart("#vouchers");

	circloidDonutChartFlot("#budget-allocation", "small", false);

	circloidLineChartFlot("#fx-rate");

	circloidBarChartFlot("#product-sales");

	circloidLiveDataChartFlot("#live-server-usage");

	circloidSalesValueWidget("#sales-value-graph");

	circloidDateRangeChart(".block.top-products", "#top-products-graph", "donut");
});