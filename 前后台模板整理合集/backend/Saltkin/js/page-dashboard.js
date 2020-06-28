$(function() {

	"use strict";

	// Knob plugin
	$(".js-knob").knob();

	// Sparklines plugin
	$('.spark-bar').sparkline('html', {
		type: 'bar',
		height: '45px',
		barColor: '#d2d2d2',
		barWidth: 10
	});

	// Tasks
	$('.panel-tasks input').click(function(e){
		$(this).parent().toggleClass('task-done');
	});

	// Rickshaw chart
	var graph;

	var seriesData = [ [], [], []];
	var random = new Rickshaw.Fixtures.RandomData(50);

	for (var i = 0; i < 50; i++) {
		random.addData(seriesData);
	}

	graph = new Rickshaw.Graph( {
	element: document.querySelector("#chart"),
	height: 260,
	renderer: 'area',
	series: [
		{
			data: seriesData[0],
			color: '#2e8bff',
			name:'Unique views'
		},{
			data: seriesData[1],
			color: '#5edb99',
			name:'Page views'
		},{
			data: seriesData[2],
			color: '#ff6363',
			name:'Robots'
		}
	]
	});

	var hoverDetail = new Rickshaw.Graph.HoverDetail( {
		graph: graph,
	});


	var data1 = [[0, 10], [1, 13], [2, 9], [3, 12],[4, 15], [5, 14], [6, 13], [7, 13],[8, 14], [9, 15], [10, 15], [11, 16],[12, 16], [13, 15], [14, 15], [15, 14]];
	var data2 = [[0, 1], [1, 2], [2, 3], [3, 4],[4, 5], [5, 4], [6, 3], [7, 3],[8, 4], [9, 5], [10, 5], [11, 6],[12, 6], [13, 5], [14, 5], [15, 4]];

	var plot = $.plot($("#sale-chart"),

		[ { data: data1, 
			label: "Visits", 
			lines: { 
				show: true, 
				lineWidth: 2,
				color: "#fff" 
			},
			points: { 
				show: false
			},
			shadowSize: 0	
		  }, {
			data: data2,
			bars: { 
				show: true,
				fill: true, 
				barWidth: 0.3, 
				align: "center",
				lineWidth: 2
			}
		  }
		], {

			grid: {
				show: false
			},
			legend: {
				show: false
			},	
			colors: ["#fff", "rgba(0,0,0,0.1)"],
			xaxis: {ticks:2, tickDecimals: 0 },
			yaxis: {ticks:2, tickDecimals: 0 },
		}
	);


	setInterval( function() {
		random.removeData(seriesData);
		random.addData(seriesData);
		graph.update();
	},1000);

})