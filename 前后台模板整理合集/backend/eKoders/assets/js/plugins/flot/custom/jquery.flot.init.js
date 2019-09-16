$(document).ready(function() {

	$(function() {
		// Flot line chart
		//LINE randomly generated data

		var sin = [], cos = [];
		for (var i = 0; i < 14; i += 0.5) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}
		var line_data1 = {
			data: sin,
			label: "Sin",
			color: "#d15050"
		};
		var line_data2 = {
			data: cos,
			label: "Cos",
			color: "#686868"
		};
	
		$.plot("#line-chart", [line_data1, line_data2], {
			grid: {
				hoverable: true,
				show: true,
				clickable: true,
				autoHighlight: true,
				labelMargin: 5,
				axisMargin: 0,
			    minBorderMargin: 5,
				mouseActiveRadius: 20,
				borderColor: "#ddd",
				borderWidth: 1,
				tickColor: "#ddd"
			},
			
			series: {
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 3,
					steps: false
				},
                points: {
                    show: true,
					radius: 5,
					symbol: "circle",
					fill: true,
					borderColor: "#fff"
				}
				
			},
			
			legend: { position: "se" },
			
			lines: {
				fill: false
			},
			yaxis: {
				show: true
			},
			xaxis: {
				show: true
               }
		});
		//Initialize tooltip on hover
		$("<div class='tooltip-inner' id='line-chart-tooltip'></div>").css({
			position: "absolute",
			display: "none",
			opacity: 0.8
			}).appendTo("body");
			$("#line-chart").bind("plothover", function(event, pos, item) {

			if (item) {
				var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);
							
				$("#line-chart-tooltip").html(item.series.label + " of " + x + " = " + y)
					.css({top: item.pageY + 5, left: item.pageX + 5})
					.fadeIn(200);
							
					} else {
						$("#line-chart-tooltip").hide();
					}
			});
		/* end line chart */
	
	
		// Flot static chart
			var areaData = [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6],
				[8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9],
					[15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]];
				$.plot("#area-chart", [areaData], {
					grid: {
						borderWidth: 0
					},
					series: {
						shadowSize: 0, // Drawing is faster without shadows
						color: "#d15050"
					},
					lines: {
						fill: true //Converts the line chart to area chart
					},
					yaxis: {
						show: true
					},
					xaxis: {
						show: true
					}
			});
		// end static chart
		
		// bar chart
			var bar_data = {
				data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]],
				color: "#d15050"
			};
			$.plot("#bar-chart", [bar_data], {
				grid: {
					hoverable: true,
					show: true,
					clickable: true,
					autoHighlight: true,
					labelMargin: 5,
					axisMargin: 0,
					minBorderMargin: 5,
					mouseActiveRadius: 20,
					borderColor: "#ddd",
					borderWidth: 1,
					tickColor: "#ddd"
				},
				series: {
					bars: {
						show: true,
						barWidth: 0.5,
						align: "center"
					}
				},
				xaxis: {
					mode: "categories",
					tickLength: 0
				}
			});
		// end bar chart
		
		// donut chart
			var donutData = [
				{ label: "USA",  data: 38, color: "#d15050"},
				{ label: "Brazil",  data: 23, color: "#373737" },
				{ label: "India",  data: 15, color: "#575757" },
				{ label: "Turkey",  data: 9, color: "#676767" },
				{ label: "France",  data: 7, color: "#777777" },
				{ label: "China",  data: 5, color: "#878787" },
				{ label: "Germany",  data: 3, color: "#979797" }
			];
			$.plot("#donut-chart", donutData, {
				series: {
					pie: { 
						show: true,
						innerRadius: 0.4,
						highlight: {
							opacity: 0.1
						},
						radius: 1,
						stroke: {
							color: '#fff',
							width: 3
						},
						startAngle: 2,
						combine: {
							color: '#eee',
							threshold: 0.05
						},
						label: {
							show: true,
							radius: 1,
							formatter: function(label, series){
								return '<div class="label label-inverse label-sm">'+label+'&nbsp;'+Math.round(series.percent)+'%</div>';
							}
						}
					},
					grow: {	active: false}
				},
				legend: {
					show: false
				},
				grid: {
					hoverable: true,
					clickable: true,
					backgroundColor : { }
				},
			});
		// donut chart

	});
	
});