//------------- profile.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	//------------- Profile page -------------//
	//activate profile tab
	$('#profileTab a:first').tab('show'); // Select first tab

	//------------- Animated progress bars -------------//
	//animate bar only when reach the bottom of screen
	$('.animated-bar .progress-bar').waypoint(function(direction) {
		$(this).progressbar({display_text: 'fill'});
	}, { offset: 'bottom-in-view' })


	//define chart colours first
	var chartColours = {
		gray: '#bac3d2',
		teal: '#43aea8',
		blue: '#60b1cc',
		red: '#df6a78',
		orange: '#cfa448',
		gray_lighter: '#e8ecf1',
		gray_light: '#777777',
		gridColor: '#bfbfbf'
	}

	//convert the object to array for flot use
	var chartColoursArr = Object.keys(chartColours).map(function (key) {return chartColours[key]});

	/* ------------------ Users purchases line chart --------------------*/
	$(function () {
		//declare the data
		var d1 = [];
		//here we add data for chart

		var d1 = [
			[new Date(Date.today().add(0).days()), 17],
			[new Date(Date.today().add(1).days()), 34],
			[new Date(Date.today().add(2).days()), 56],
			[new Date(Date.today().add(3).days()), 12],
			[new Date(Date.today().add(4).days()), 20],
			[new Date(Date.today().add(5).days()), 5],
			[new Date(Date.today().add(6).days()), 6]
		];

		var chartMinDate = d1[0][0]; //first day
    	var chartMaxDate = d1[6][0];//last day

    	var tickSize = [1, "day"];
    	var tformat = "%a";

		var options = {
			grid: {
				show: true,
			    aboveData: true,
			    color: chartColours.gridColor,
			    labelMargin: 15,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 5 ,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 20
			},
	        series: {
	        	grow: {active:false},
	            lines: {
            		show: true,
            		fill: true,
            		lineWidth: 2,
            		steps: false
	            	},
	            points: {show:false}
	        },
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    // just add some space to labes
				    return '&nbsp;&nbsp;' + label + ' &nbsp;&nbsp;';
				},
				width: 30,
				height: 2
	    	},
	        yaxis: { min: 0, tickSize: 10},
		    xaxis: {
		    	mode: "time",
	        	minTickSize: tickSize,
	        	timeformat: tformat,
	        	min: chartMinDate,
	        	max: chartMaxDate,
	        	tickLength: 0
		    },
	        colors: chartColoursArr,
	        shadowSize:1,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0" + " $",
				shifts: {
					x: -30,
					y: -50
				}
			}
	    };   

    	$.plot($("#user-purchase-chart"), [ 

    		{
    			label: "Purchases", 
    			data: d1,
    			lines: {fillColor: chartColours.gray_lighter},
    			points: {fillColor: chartColours.gray}
    		}

    	], options);

	});

	//------------- Donut chart purchase -------------//
	Morris.Donut({
		element: 'morris-donut',
		data: [
			{value: 45, label: 'Clothes'},
			{value: 25, label: 'Shoes'},
			{value: 20, label: 'Jackets'},
			{value: 10, label: 'Other'}
		],
		formatter: function (x) { return x + "%"},
		colors: chartColoursArr,
		resize: true
	});

	//------------- Radar chart -------------//
	var radarChartData = {
		labels: ["Shirts", "Pants", "Vests", "Boots", "Sandals", "Watches", "Belts"],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(186,195,210,0.2)",
				strokeColor: "rgba(186,195,210,1)",
				pointColor: "rgba(186,195,210,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(186,195,210,1)",
				data: [65,59,90,81,56,55,40]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(96,177,204,0.2)",
				strokeColor: "rgba(96,177,204,1)",
				pointColor: "rgba(96,177,204,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(96,177,204,1)",
				data: [28,48,40,19,96,27,100]
			}
		]
	};

	myRadar = new Chart(document.getElementById("radar-chartjs").getContext("2d")).Radar(radarChartData, {
		responsive: true,
		//radar options
		scaleShowLine : true,
		angleShowLineOut : true,
		scaleShowLabels : false,
		angleLineColor : "rgba(0,0,0,.0.5)",
		angleLineWidth : 1,
		pointDotRadius : 3,
		pointDotStrokeWidth : 1,
		//points
		pointLabelFontFamily : "'Roboto'",
		pointDot : true,
		//animations
    	animation: true,
    	animationSteps: 100,
    	animationEasing: "easeOutBounce",
    	animateRotate : true,
    	animateScale : true,
    	//tooltips
    	showTooltips: true,
    	tooltipFillColor: "#344154",
    	tooltipFontFamily: "'Roboto'",
    	tooltipFontSize: 13,
    	tooltipFontColor: "#fff",
    	tooltipYPadding: 8,
    	tooltipXPadding: 10,
    	tooltipCornerRadius: 2,
    	tooltipTitleFontFamily: "'Roboto'",
	});
	
});