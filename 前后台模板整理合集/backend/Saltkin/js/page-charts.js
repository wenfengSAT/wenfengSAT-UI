$(function() {

	"use strict";

	// Flot chart
	var data1 = [
		[1, 30],
		[2, 30],
		[3, 20],
		[4, 40],
		[5, 30],
		[6, 45]
	];

    var plot = $.plot($("#flot-chart"), [{
		label: "Rate",
		data: data1,
		lines: {
		  lineWidth: 2,
		  fill: 0.6
		},
		color: '#2e8bff'
    }, {
		label: "Rate",
		data: data1,
		points: {
		  show: true,
		  fill: true,
		  radius: 4,
		  fillColor: "#2e8bff",
		  lineWidth: 2
		},
		color: '#fff'
    } ], {
		xaxis: {
		  tickLength: 0,
		  tickDecimals: 0,
		  min: 2,
		  font: {
		      lineHeight: 12,
		      family: "Open sans",
		      color: "#304269"
		  }
		},
		yaxis: {
		  ticks: 3,
		  tickDecimals: 0,
		  tickColor: "#f3f3f3",
		  font: {
		      lineHeight: 13,
		      family: "Open sans",
		      color: "#304269"
		  }
		},
		grid: {
		  backgroundColor: {
		      colors: ["#fff", "#fff"]
		  },
		  borderColor: "#f3f3f3",
		  margin: 0,
		  minBorderMargin: 0,
		  labelMargin: 15,
		  hoverable: false,
		  clickable: false,
		  mouseActiveRadius: 4
		},
		legend: {
		  show: false
		}
    });

    // Rickshaw chart
	var seriesData = [ [], [], [] ];
	var random = new Rickshaw.Fixtures.RandomData(150);

	for (var i = 0; i < 50; i++) {
		random.addData(seriesData);
	}

	var graph = new Rickshaw.Graph( {
		element: document.getElementById("rickshaw-chart"),
		renderer: 'line',
		series: [
			{
				color: "#2e8bff",
				data: seriesData[0],
				name: 'New York'
			}, {
				color: "#5edb99",
				data: seriesData[1],
				name: 'London'
			}, {
				color: "#ff9538",
				data: seriesData[2],
				name: 'Tokyo'
			}
		]
	} );

	graph.render();

	var hoverDetail = new Rickshaw.Graph.HoverDetail( {
		graph: graph
	} );

	var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
		graph: graph
	} );

	var axes = new Rickshaw.Graph.Axis.Time( {
		graph: graph
	} );

	axes.render();

	// Combined chart
	var data4 = [[0, 1], [1, 2], [2, 3], [3, 4],[4, 5], [5, 4], [6, 3], [7, 3],[8, 4], [9, 5], [10, 5], [11, 6],[12, 6], [13, 5], [14, 5], [15, 4],[16, 6], [17, 5], [18, 4], [19, 3],[20, 2], [21, 1], [22, 2], [23, 2],[24, 3], [25, 4], [26, 5], [27, 6],[28, 5], [29, 4], [30, 3], [31, 2]];
	
	var plot = $.plot($("#chart-combined"),

		[ {
			data: data4,
			bars: { 
				show: true,
				fill: false, 
				barWidth: 0.1, 
				align: "center",
				lineWidth: 16
			}
		  },{ data: data4, 
			label: "Visits", 
			lines: { 
				show: true, 
				lineWidth: 1.5 
			},
			points: { 
				show: true, 
				fill: true,
				radius: 4,
				fillColor: "#fff",
				lineWidth: 2
			},
			shadowSize: 0	
		}], {

			grid: { 
				hoverable: false, 
				clickable: false, 
				borderWidth: 0,
				labelMargin: 10,
				margin: {
				    top: 0,
				    left: 5,
				    bottom: 0,
				    right: 0
				}
			},
			legend: {
				show: false
			},	
			colors: ["rgba(94, 219, 153, 0.4)","#5edb99","#5edb99"],
			xaxis: {ticks:5, tickDecimals: 0, tickColor: "#fff"},
			yaxis: {ticks:3, tickDecimals: 0},
		}
	);

	// Donut / Knob chart
	$(".dial").knob();

	// Sparkline charts
	$("#sparkline-line").sparkline('html',{
    	type: 'line'
	});
	$("#sparkline-bar").sparkline('html',{
    	type: 'bar'
	});
	$("#sparkline-tristate").sparkline('html',{
    	type: 'tristate'
	});
	$("#sparkline-bullet").sparkline('html',{
    	type: 'bullet'
	});
})