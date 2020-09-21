	
	$(function() {
		// nvd3 charts
		tisa_nvd3_charts.init();
		// flot chart
		tisa_flot_charts.init();
	})
	
	// nvd3 charts
	tisa_nvd3_charts = {
		init: function() {
			if($('#nvd3_cumulative_lines').length) {
				
				function defaultChartConfig(containerid, data, guideline, useDates, auxOptions) {
					if (auxOptions === undefined) auxOptions = {};
					if (guideline === undefined) guideline = true;
					nv.addGraph(function() {
						var chart;
						chart = nv.models.lineChart().useInteractiveGuideline(guideline);
					
						chart.x(function(d,i) { 
								return d.x;
							});
					
						if (auxOptions.width) 
							chart.width(auxOptions.width);
					
						if (auxOptions.height)
							chart.height(auxOptions.height);
					
						if (auxOptions.forceY) 
							chart.forceY([0]);
					
						var formatter;
						if (useDates !== undefined) {
							formatter = function(d,i) {
								var now = (new Date()).getTime() - 86400 * 1000 * 365;
								now = new Date(now + d * 86400 * 1000);
								return d3.time.format('%b %d %Y')(now);
							}
						}
						else {
							formatter = d3.format(",.1f");
						}
						chart.margin({right: 40});
						chart.xAxis // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
							.tickFormat(
								formatter
							);
					
						chart.yAxis
							.tickFormat(d3.format(',.2f'));
					
						d3.select('#' + containerid + ' svg')
						.datum(data)
						.transition().duration(500)
						.call(chart);
					
						nv.utils.windowResize(chart.update);
					
						return chart;
					});
				}
				
				function dummyStocks(numPoints) {
					numPoints = numPoints || 200;
					function volatileChart(key,startPrice, volatility, isArea) {
						var rval = {key: key, values: []};
						if (isArea) rval.area = true;
						for(var i = 1; i < numPoints; i++) {
				   
							rval.values.push({x: i, y: (i > 110 && i < 130) ? null : startPrice});
							var rnd = Math.random();
							var changePct = 2 * volatility * rnd;
							if ( changePct > volatility) {
								changePct -= (2*volatility);
							}
				   
						   startPrice = startPrice + startPrice * changePct;
				   
						}
						return rval;
					}
				  
					var stocks = [];
					stocks.push(volatileChart("APPL",5.00, 0.02));
					stocks.push(volatileChart("GOOG", 6.01,0.024));
					stocks.push(volatileChart("MSFT", 2.01, 0.012));
					stocks.push(volatileChart("IBM US", 2.5, 0.08, true));
					return stocks;
				}
				
				defaultChartConfig("nvd3_cumulative_lines", dummyStocks(),true, true, {forceY:false});
				
			}
			if ($('#nvd3_live').length) {
				var chart,
					data = [{
					key: "Stream 1",
						color: "orange",
						values: [
							{x: 1, y: 1}
						]
					}];
					
				nv.addGraph(function() {
				  
					chart = nv.models.historicalBarChart();
				  
					chart.x(function(d,i) { return d.x });
				  
					chart.xAxis
						.tickFormat(d3.format(',.1f'))
						.axisLabel("Time");
				  
					chart.yAxis
						.axisLabel('Random Number')
						.tickFormat(d3.format(',.4f'));
				  
					chart.showXAxis(true).showYAxis(true).rightAlignYAxis(true).margin({right: 90});
				  
					d3.select('#nvd3_live svg')
						.datum(data)
						.transition().duration(500)
						.call(chart);
				  
					nv.utils.windowResize(chart.update);
				  
					return chart;
				});
				
				var x = 2;
				var run = true;
				setInterval(function(){
					if (!run) return;
					
					var spike = (Math.random() > 0.95) ? 10: 1;
					data[0].values.push({
						x: x,
						y: Math.random() * spike
					});
				
					if (data[0].values.length > 70) {
						data[0].values.shift();
					}
					x++;
				
					chart.update();
				}, 500);
				
				d3.select("#start-stop-button").on("click",function() {
					run = !run;
				});
			}
			if ($('#nvd3_scatter').length) {
				
				function defaultChartTest(container, data, margin) {
					nv.addGraph(function() {
						var chart;
						chart = nv.models.scatterChart().showDistX(true).showDistY(true);
						chart.xAxis.tickFormat(d3.format('.02f'));
						chart.yAxis.tickFormat(d3.format('.02f'));
						
						if (margin) {
							chart.margin(margin);
						}
						chart.tooltipContent(function(key) {
							return "<h3>" + key + "</h3>";
						});
						d3.select('#' + container + ' svg').datum(data).transition().duration(500).call(chart);
						nv.utils.windowResize(chart.update);
						return chart;
					});
				}
				
				function randomData(groups, points) { //# groups,# points per group
				  var data = [],
					  shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
					  random = d3.random.normal();
				
				  for (i = 0; i < groups; i++) {
					data.push({
					  key: 'Group ' + i,
					  values: []
					});
				
					for (j = 0; j < points; j++) {
					  data[i].values.push({
						x: random(), 
						y: random(), 
						size: Math.random(), 
						shape: shapes[j % 6]
					  });
					}
				  }
				  return data;
				}
				
				defaultChartTest("nvd3_scatter", randomData(4,40));
			}
		}
	}
	// flot charts
	tisa_flot_charts = {
		init: function() {
			
			if($('#flot_pie').length) {
				function labelFormatter(label, series) {
					return "<div class=\"chart_label\">" + label + "<br/>" + Math.round(series.percent) + "%</div>";
				}
				$.plot('#flot_pie', flot_pie_data, {
					series: {
						pie: {
							show: true,
							radius: 3/4,
							label: {
								show: true,
								radius: 0.54,
								formatter: labelFormatter,
							},
							innerRadius: 0.35
						}
					},
					legend: {
						show: false
					}
				});
			}
			
			if($('#flot_tracking').length) {
				
				var sin = [], cos = [];
				for (var i = 0; i < 14; i += 0.1) {
					sin.push([i, Math.sin(i)]);
					cos.push([i, Math.cos(i)]);
				}
		
				var plot = $.plot("#flot_tracking", [
					{ data: sin, label: "sin(x) = -0.00"},
					{ data: cos, label: "cos(x) = -0.00" }
				], {
					series: {
						lines: {
							show: true
						}
					},
					crosshair: {
						mode: "x"
					},
					grid: {
						hoverable: true,
						autoHighlight: false,
						backgroundColor: null,
						borderWidth: 0
					},
					yaxis: {
						min: -1.2,
						max: 1.2
					},
					colors: ["#2c3e50","#c0392b"]
				});
		
				var legends = $("#flot_tracking .legendLabel");
		
				legends.each(function () {
					// fix the widths so they don't jump around
					$(this).css('width', $(this).width()+5);
				});
		
				var updateLegendTimeout = null;
				var latestPosition = null;
		
				function updateLegend() {
					updateLegendTimeout = null;
					var pos = latestPosition;
					var axes = plot.getAxes();
					if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
						pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
						return;
					}
					var i, j, dataset = plot.getData();
					for (i = 0; i < dataset.length; ++i) {
						var series = dataset[i];
						// Find the nearest points, x-wise
						for (j = 0; j < series.data.length; ++j) {
							if (series.data[j][0] > pos.x) {
								break;
							}
						}
						// Now Interpolate
						var y,
							p1 = series.data[j - 1],
							p2 = series.data[j];
						if (p1 == null) {
							y = p2[1];
						} else if (p2 == null) {
							y = p1[1];
						} else {
							y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
						}
						legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
					}
				}
		
				$("#flot_tracking").bind("plothover",  function (event, pos, item) {
					latestPosition = pos;
					if (!updateLegendTimeout) {
						updateLegendTimeout = setTimeout(updateLegend, 50);
					}
				});
			}
		}
	}