//------------- charts-other.js -------------//
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

	//------------- Other charts -------------//
	//define chart colours first
	var chartColours = {
		gray: '#bac3d2',
		teal: '#43aea8',
		blue: '#60b1cc',
		red: '#df6a78',
		green: '#66c796',
		orange: '#cfa448',
		gray_lighter: '#e8ecf1',
		gray_light: '#777777',
	}

	//------------- Init Easy pie charts -------------//
    //pass the variables to pie chart init function
    //first is line width, size for pie, animated time , and colours object for theming.
	initPieChartPage(20,100,1500, chartColours);

	//------------- Sparklines -------------//

	//line default
	$("#spark-line").sparkline([2,4,7,9,9,5,3,2,2,4,6,7], {
    	type: 'line',
    	width: '100%',
		height: '30px',
		lineWidth: 1,
		lineColor: '#b4bac1',
		fillColor: chartColours.gray_lighter,
		spotRadius: 0, //remove spots
    });

    //line blue
	$("#spark-line-blue").sparkline([1,4,2,3,5,7,3,1,4,6,6,9], {
    	type: 'line',
    	width: '100%',
		height: '30px',
		lineWidth: 1,
		lineColor: chartColours.blue,
		fillColor: '#aaddee',
		spotRadius: 0, //remove spots
    });

    //line red
	$("#spark-line-red").sparkline([2,4,3,2,5,1,5,3,8,6,2,5], {
    	type: 'line',
    	width: '100%',
		height: '30px',
		lineWidth: 1,
		lineColor: chartColours.red,
		fillColor: '#ed96a0',
		spotRadius: 0, //remove spots
    });

    //line green
	$("#spark-line-green").sparkline([1,2,4,3,8,3,2,5,5,7,8,5], {
    	type: 'line',
    	width: '100%',
		height: '30px',
		lineWidth: 1,
		lineColor: chartColours.green,
		fillColor: '#99e8c0',
		spotRadius: 0, //remove spots
    });

	// Bar types
	//==========

    //bar default
	$("#spark-bar").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8,10,12,7,12,11,6,13,8,5,8], {
    	type: 'bar',
    	width: '100%',
		height: '30px',
		barColor: '#b4bac1',
    });

    //bar blue
	$("#spark-bar-blue").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8,10,12,7,12,11,6,13,8,5,8], {
    	type: 'bar',
    	width: '100%',
		height: '30px',
		barColor: chartColours.blue,
    });

    //bar red
	$("#spark-bar-red").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8,10,12,7,12,11,6,13,8,5,8], {
    	type: 'bar',
    	width: '100%',
		height: '30px',
		barColor: chartColours.red,
    });

    //bar green
	$("#spark-bar-green").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8,10,12,7,12,11,6,13,8,5,8], {
    	type: 'bar',
    	width: '100%',
		height: '30px',
		barColor: chartColours.green,
    });


	//------------- Gauge -------------//

	//default colors
	var gauge = new Gauge(document.getElementById('gauge')).setOptions({
		lines: 10, // The number of lines to draw
		angle: 0, // The length of each line
		lineWidth: 0.4, // The line thickness
		pointer: {
			length: 0.8, // The radius of the inner circle
			strokeWidth: 0.035, // The rotation offset
			color: chartColours.gray_light // Fill color
		},
		limitMax: true,   // If true, the pointer will not go past the end of the gauge
		colorStart: chartColours.gray_light,   // Colors
		colorStop: chartColours.gray_light,    // just experiment with them
		strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
		generateGradient: false	
	}); // create sexy gauge!
	gauge.maxValue = 100; // set max gauge value
	gauge.animationSpeed = 20; // set animation speed (32 is default value)
	gauge.set(35); // set actual value

	//red
	var gaugeRed = new Gauge(document.getElementById('gauge-red')).setOptions({
		lines: 10, // The number of lines to draw
		angle: 0, // The length of each line
		lineWidth: 0.4, // The line thickness
		pointer: {
			length: 0.8, // The radius of the inner circle
			strokeWidth: 0.035, // The rotation offset
			color: chartColours.gray_light // Fill color
		},
		limitMax: true,   // If true, the pointer will not go past the end of the gauge
		colorStart: chartColours.red,   // Colors
		colorStop: chartColours.red,    // just experiment with them
		strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
		generateGradient: false	
	}); // create sexy gauge!
	gaugeRed.maxValue = 100; // set max gauge value
	gaugeRed.animationSpeed = 20; // set animation speed (32 is default value)
	gaugeRed.set(45); // set actual value

	//blue
	var gaugeBlue = new Gauge(document.getElementById('gauge-blue')).setOptions({
		lines: 10, // The number of lines to draw
		angle: 0, // The length of each line
		lineWidth: 0.4, // The line thickness
		pointer: {
			length: 0.8, // The radius of the inner circle
			strokeWidth: 0.035, // The rotation offset
			color: chartColours.gray_light // Fill color
		},
		limitMax: true,   // If true, the pointer will not go past the end of the gauge
		colorStart: chartColours.blue,   // Colors
		colorStop: chartColours.blue,    // just experiment with them
		strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
		generateGradient: false	
	}); // create sexy gauge!
	gaugeBlue.maxValue = 100; // set max gauge value
	gaugeBlue.animationSpeed = 20; // set animation speed (32 is default value)
	gaugeBlue.set(55); // set actual value

	//green
	var gaugeGreen = new Gauge(document.getElementById('gauge-green')).setOptions({
		lines: 10, // The number of lines to draw
		angle: 0, // The length of each line
		lineWidth: 0.4, // The line thickness
		pointer: {
			length: 0.8, // The radius of the inner circle
			strokeWidth: 0.035, // The rotation offset
			color: chartColours.gray_light // Fill color
		},
		limitMax: true,   // If true, the pointer will not go past the end of the gauge
		colorStart: chartColours.green,   // Colors
		colorStop: chartColours.green,    // just experiment with them
		strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
		generateGradient: false	
	}); // create sexy gauge!
	gaugeGreen.maxValue = 100; // set max gauge value
	gaugeGreen.animationSpeed = 20; // set animation speed (32 is default value)
	gaugeGreen.set(65); // set actual value

	//With percentage colors
	var gaugePercent = new Gauge(document.getElementById('gauge-percent')).setOptions({
		lines: 10, // The number of lines to draw
		angle: 0, // The length of each line
		lineWidth: 0.4, // The line thickness
		pointer: {
			length: 0.8, // The radius of the inner circle
			strokeWidth: 0.035, // The rotation offset
			color: chartColours.gray_light // Fill color
		},
		limitMax: true,   // If true, the pointer will not go past the end of the gauge
		strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
		percentColors: [[0.0, chartColours.gray_light ], [0.35, chartColours.green], [0.55, chartColours.blue], [1.0, chartColours.red]],
		generateGradient: false	
	}); // create sexy gauge!
	gaugePercent.maxValue = 100; // set max gauge value
	gaugePercent.animationSpeed = 20; // set animation speed (32 is default value)
	gaugePercent.set(10); // set actual value

	//update gauges every 5 sec with random data
	setInterval(function() {
		gauge.set(Math.floor( Math.random()*(100-1+1)+1));
    	gaugeBlue.set(Math.floor( Math.random()*(100-1+1)+1));
    	gaugeRed.set(Math.floor( Math.random()*(100-1+1)+1));
    	gaugeGreen.set(Math.floor( Math.random()*(100-1+1)+1));
    	gaugePercent.set(Math.floor( Math.random()*(100-1+1)+1));
    }, 5000);

	//------------- Glow gauge -------------//
	var glowGauge = document.getElementById("glow-gauge");
	var glowGauge = new fabledweb.Gauge({
	    "tick_length": 10,
        "large_tick_length": 20,
        "tick_thickness": 2,
        "num_sub_ticks": 2,
        "total_degrees": 180,
        "tick_color": chartColours.gray_light,
        "tick_on_color": chartColours.blue,
        "tick_on_glow": 5,
        "bg_image": null,
        "gauge_scale": 1,
        "animation_duration": 1000,
        "percent": 70,
	    "canvas": glowGauge
	});
	glowGauge.render();

	//red gauge
	var glowRedGauge = document.getElementById("glow-red-gauge");
	var glowRedGauge = new fabledweb.Gauge({
	    "tick_length": 10,
        "large_tick_length": 20,
        "tick_thickness": 2,
        "num_sub_ticks": 2,
        "total_degrees": 180,
        "tick_color": chartColours.gray_light,
        "tick_on_color": chartColours.red,
        "tick_on_glow": 5,
        "bg_image": null,
        "gauge_scale": 1,
        "animation_duration": 1000,
        "percent": 30,
	    "canvas": glowRedGauge
	});
	glowRedGauge.render();

	//green gauge
	var glowGreenGauge = document.getElementById("glow-green-gauge");
	var glowGreenGauge = new fabledweb.Gauge({
	    "tick_length": 10,
        "large_tick_length": 20,
        "tick_thickness": 2,
        "num_sub_ticks": 2,
        "total_degrees": 180,
        "tick_color": chartColours.gray_light,
        "tick_on_color": chartColours.green,
        "tick_on_glow": 5,
        "bg_image": null,
        "gauge_scale": 1,
        "animation_duration": 1000,
        "percent": 50,
	    "canvas": glowGreenGauge
	});
	glowGreenGauge.render();

	//green gauge
	var glowYellowGauge = document.getElementById("glow-yellow-gauge");
	var glowYellowGauge = new fabledweb.Gauge({
	    "tick_length": 10,
        "large_tick_length": 20,
        "tick_thickness": 2,
        "num_sub_ticks": 2,
        "total_degrees": 180,
        "tick_color": chartColours.gray_light,
        "tick_on_color": chartColours.orange,
        "tick_on_glow": 5,
        "bg_image": null,
        "gauge_scale": 1,
        "animation_duration": 1000,
        "percent": 10,
	    "canvas": glowYellowGauge
	});
	glowYellowGauge.render();

	//update gauges every 5 sec with random data
	setInterval(function() {
        glowGauge.updatePercent(Math.floor( Math.random()*(100-1+1)+1));
        glowRedGauge.updatePercent(Math.floor( Math.random()*(100-1+1)+1));
        glowGreenGauge.updatePercent(Math.floor( Math.random()*(100-1+1)+1));
        glowYellowGauge.updatePercent(Math.floor( Math.random()*(100-1+1)+1));
    }, 5000);
	
});

//Setup easy pie charts in page
var initPieChartPage = function(lineWidth, size, animateTime, colours) {

	$(".easy-pie-chart").easyPieChart({
        barColor: colours.gray,
        borderColor: colours.gray,
        trackColor: colours.gray_lighter,
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-red").easyPieChart({
        barColor: colours.red,
        borderColor: colours.red,
        trackColor: '#ebb7bd',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-green").easyPieChart({
        barColor: colours.green,
        borderColor: colours.green,
        trackColor: '#a9e2c6',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-blue").easyPieChart({
        barColor: colours.blue,
        borderColor: colours.blue,
        trackColor: '#b7e0ee',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-yellow").easyPieChart({
        barColor: colours.orange,
        borderColor: colours.orange,
        trackColor: '#e9d09a',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
}