var Charts = function() {
	"use strict";
	var runChart1 = function() {
		/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
		nv.addGraph(function() {
			var chart = nv.models.lineChart().margin({
				left : 100
			})//Adjust chart margins to give the x-axis some breathing room.
			.useInteractiveGuideline(true)//We want nice looking tooltips and a guideline!
			.transitionDuration(350)//how fast do you want the lines to transition?
			.showLegend(true)//Show the legend, allowing users to turn on/off line series.
			.showYAxis(true)//Show the y-axis
			.showXAxis(true)//Show the x-axis
			;

			chart.xAxis//Chart x-axis settings
			.axisLabel('Time (ms)').tickFormat(d3.format(',r'));

			chart.yAxis//Chart y-axis settings
			.axisLabel('Voltage (v)').tickFormat(d3.format('.02f'));

			/* Done setting the chart up? Time to render it!*/
			var myData = sinAndCos();
			//You need data...

			d3.select('#demo-chart-1 svg')//Select the <svg> element you want to render the chart in.
			.datum(myData)//Populate the <svg> element with chart data...
			.call(chart);
			//Finally, render the chart!

			//Update the chart when window resizes.
			nv.utils.windowResize(function() {
				chart.update();
			});
			return chart;
		});
		/**************************************
		 * Simple test data generator
		 */
		function sinAndCos() {
			var sin = [], sin2 = [], cos = [];

			//Data is represented as an array of {x,y} pairs.
			for (var i = 0; i < 100; i++) {
				sin.push({
					x : i,
					y : Math.sin(i / 10)
				});
				sin2.push({
					x : i,
					y : Math.sin(i / 10) * 0.25 + 0.5
				});
				cos.push({
					x : i,
					y : .5 * Math.cos(i / 10)
				});
			}

			//Line chart data should be sent as an array of series objects.
			return [{
				values : sin, //values - represents the array of {x,y} data points
				key : 'Sine Wave', //key  - the name of the series.
				color : '#ff7f0e' //color - optional: choose your own line color.
			}, {
				values : cos,
				key : 'Cosine Wave',
				color : '#2ca02c'
			}, {
				values : sin2,
				key : 'Another sine wave',
				color : '#7777ff',
				area : true //area - set to true if you want this line to turn into a filled area chart.
			}];
		}

	};
	var runChart2 = function() {
		nv.addGraph(function() {
			var chart = nv.models.scatterChart().showDistX(true)//showDist, when true, will display those little distribution lines on the axis.
			.showDistY(true).transitionDuration(350).color(d3.scale.category10().range());

			//Configure how the tooltip looks.
			chart.tooltipContent(function(key) {
				return '<h3>' + key + '</h3>';
			});

			//Axis settings
			chart.xAxis.tickFormat(d3.format('.02f'));
			chart.yAxis.tickFormat(d3.format('.02f'));

			//We want to show shapes other than circles.
			chart.scatter.onlyCircles(false);

			var myData = randomData(4, 40);
			d3.select('#demo-chart-2 svg').datum(myData).call(chart);

			nv.utils.windowResize(chart.update);

			return chart;
		});

		/**************************************
		 * Simple test data generator
		 */
		function randomData(groups, points) {//# groups,# points per group
			var data = [], shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'], random = d3.random.normal();

			for ( var i = 0; i < groups; i++) {
				data.push({
					key : 'Group ' + i,
					values : []
				});

				for ( var j = 0; j < points; j++) {
					data[i].values.push({
						x : random(),
						y : random(),
						size : Math.random()//Configure the size of each scatter point
						,
						shape : (Math.random() > 0.95) ? shapes[j % 6] : "circle" //Configure the shape of each scatter point.
					});
				}
			}

			return data;
		}

	};
	var runChart3 = function() {

		d3.json('assets/plugins/nvd3/json/stackedAreaData.txt', function(data) {
			nv.addGraph(function() {

				var chart = nv.models.stackedAreaChart().margin({
					top : 30,
					right : 10,
					bottom : 20,
					left : 25
				}).x(function(d) {
					return d[0];
				}).y(function(d) {
					return d[1];
				}).forceY([0, 8000]).useInteractiveGuideline(true);
				var options = {
					showControls : false,
					showLegend : true
				};
				chart.options(options);
				chart.xAxis.tickFormat(function(d) {
					return d3.time.format('%x')(new Date(d));
				}).showMaxMin(false);

				chart.yAxis.tickFormat(d3.format(',f'));
				d3.select('#demo-chart-3 svg').datum(data).call(chart);

				nv.utils.windowResize(chart.update);

				return chart;
			});
		});
	};
	var runChart4 = function() {
		nv.addGraph(function() {
			var chart = nv.models.discreteBarChart().x(function(d) {
				return d.label;
			})//Specify the data accessors.
			.y(function(d) {
				return d.value;
			}).staggerLabels(true)//Too many bars and not enough room? Try staggering labels.
			.tooltips(false)//Don't show tooltips
			.showValues(true)//...instead, show the bar value right on top of each bar.
			.transitionDuration(350);

			d3.select('#demo-chart-4 svg').datum(exampleData()).call(chart);

			nv.utils.windowResize(chart.update);

			return chart;
		});

		//Each bar represents a single discrete quantity.
		function exampleData() {
			return [{
				key : "Cumulative Return",
				values : [{
					"label" : "A Label",
					"value" : -29.765957771107
				}, {
					"label" : "B Label",
					"value" : 0
				}, {
					"label" : "C Label",
					"value" : 32.807804682612
				}, {
					"label" : "D Label",
					"value" : 196.45946739256
				}, {
					"label" : "E Label",
					"value" : 0.19434030906893
				}, {
					"label" : "F Label",
					"value" : -98.079782601442
				}, {
					"label" : "G Label",
					"value" : -13.925743130903
				}, {
					"label" : "H Label",
					"value" : -5.1387322875705
				}]
			}];

		}

	};
	var runChart5 = function() {
		d3.json('assets/plugins/nvd3/json/multiBarHorizontalData.txt', function(data) {
			nv.addGraph(function() {
				var chart = nv.models.multiBarHorizontalChart().x(function(d) {
					return d.label;
				}).y(function(d) {
					return d.value;
				}).margin({
					top : 30,
					right : 20,
					bottom : 50,
					left : 175
				}).showValues(true)//Show bar value next to each bar.
				.tooltips(true)//Show tooltips on hover.
				.transitionDuration(350).showControls(true);
				//Allow user to switch between "Grouped" and "Stacked" mode.

				chart.yAxis.tickFormat(d3.format(',.2f'));

				d3.select('#demo-chart-5 svg').datum(data).call(chart);

				nv.utils.windowResize(chart.update);

				return chart;
			});
		});

	};
	var runChart6 = function() {
		d3.json("assets/plugins/nvd3/json/linePlusBarData.json", function(error, data) {
			nv.addGraph(function() {
				var chart = nv.models.linePlusBarChart().margin({
					top : 30,
					right : 60,
					bottom : 50,
					left : 70
				})
				//We can set x data accessor to use index. Reason? So the bars all appear evenly spaced.
				.x(function(d, i) {
					return i;
				}).y(function(d, i) {
					return d[1];
				});

				chart.xAxis.tickFormat(function(d) {
					var dx = data[0].values[d] && data[0].values[d][0] || 0;
					return d3.time.format('%x')(new Date(dx));
				});

				chart.y1Axis.tickFormat(d3.format(',f'));

				chart.y2Axis.tickFormat(function(d) {
					return '$' + d3.format(',f')(d);
				});

				chart.bars.forceY([0]);

				d3.select('#demo-chart-6 svg').datum(data).transition().duration(0).call(chart);

				nv.utils.windowResize(chart.update);

				return chart;
			});

		});

	};
	var runChart7 = function() {
		d3.json('assets/plugins/nvd3/json/cumulativeLineData.json', function(data) {
			nv.addGraph(function() {
				var chart = nv.models.cumulativeLineChart().x(function(d) {
					return d[0];
				}).y(function(d) {
					return d[1] / 100;
				})//adjusting, 100% is 1.00, not 100 as it is in the data
				.color(d3.scale.category10().range()).useInteractiveGuideline(true);

				chart.xAxis.tickValues([1078030800000, 1122782400000, 1167541200000, 1251691200000]).tickFormat(function(d) {
					return d3.time.format('%x')(new Date(d));
				});

				chart.yAxis.tickFormat(d3.format(',.1%'));

				d3.select('#demo-chart-7 svg').datum(data).call(chart);

				//TODO: Figure out a good way to do this automatically
				nv.utils.windowResize(chart.update);

				return chart;
			});
		});

	};
	var runChart8 = function() {
		nv.addGraph(function() {
			var chart = nv.models.lineWithFocusChart();

			chart.xAxis.tickFormat(d3.format(',f'));

			chart.yAxis.tickFormat(d3.format(',.2f'));

			chart.y2Axis.tickFormat(d3.format(',.2f'));

			d3.select('#demo-chart-8 svg').datum(testData()).transition().duration(500).call(chart);

			nv.utils.windowResize(chart.update);

			return chart;
		});
		/**************************************
		 * Simple test data generator
		 */

		function testData() {
			return stream_layers(3, 128, .1).map(function(data, i) {
				return {
					key : 'Stream' + i,
					values : data
				};
			});
		}

	};
	var runChart9_10 = function() {
		//Regular pie chart example
		nv.addGraph(function() {
			var chart = nv.models.pieChart().x(function(d) {
				return d.label;
			}).y(function(d) {
				return d.value;
			}).showLabels(true);

			d3.select("#demo-chart-9 svg").datum(exampleData()).transition().duration(350).call(chart);

			return chart;
		});

		//Donut chart example
		nv.addGraph(function() {
			var chart = nv.models.pieChart().x(function(d) {
				return d.label;
			}).y(function(d) {
				return d.value;
			}).showLabels(true)//Display pie labels
			.labelThreshold(.05)//Configure the minimum slice size for labels to show up
			.labelType("percent")//Configure what type of data to show in the label. Can be "key", "value" or "percent"
			.donut(true)//Turn on Donut mode. Makes pie chart look tasty!
			.donutRatio(0.35)//Configure how big you want the donut hole size to be.
			;

			d3.select("#demo-chart-10 svg").datum(exampleData()).transition().duration(350).call(chart);

			return chart;
		});

		//Pie chart example data. Note how there is only a single array of key-value pairs.
		function exampleData() {
			return [{
				"label" : "One",
				"value" : 29.765957771107
			}, {
				"label" : "Two",
				"value" : 0
			}, {
				"label" : "Three",
				"value" : 32.807804682612
			}, {
				"label" : "Four",
				"value" : 196.45946739256
			}, {
				"label" : "Five",
				"value" : 0.19434030906893
			}, {
				"label" : "Six",
				"value" : 98.079782601442
			}, {
				"label" : "Seven",
				"value" : 13.925743130903
			}, {
				"label" : "Eight",
				"value" : 5.1387322875705
			}];
		}

	};
	var runChart11 = function() {

	};
	var runChart11 = function() {

	};
	function stream_layers(n, m, o) {
		if (arguments.length < 3)
			o = 0;
		function bump(a) {
			var x = 1 / (.1 + Math.random()), y = 2 * Math.random() - .5, z = 10 / (.1 + Math.random());
			for (var i = 0; i < m; i++) {
				var w = (i / m - y) * z;
				a[i] += x * Math.exp(-w * w);
			}
		}

		return d3.range(n).map(function() {
			var a = [], i;
			for ( i = 0; i < m; i++)
				a[i] = o + o * Math.random();
			for ( i = 0; i < 5; i++)
				bump(a);
			return a.map(stream_index);
		});
	}

	function stream_index(d, i) {
		return {
			x : i,
			y : Math.max(0, d)
		};
	}

	return {
		//main function to initiate template pages
		init : function() {
			runChart1();
			runChart2();
			runChart3();
			runChart4();
			runChart5();
			runChart6();
			runChart7();
			runChart8();
			runChart9_10();
		}
	};
}();
