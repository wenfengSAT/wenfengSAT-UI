var Index = function() {"use strict";

	// function to initiate Chart 1
	var runChart1 = function() {
		function randValue() {
			return (Math.floor(Math.random() * (100 + 4000 - 2000))) + 2000;
		};
		function createSeries() {
			var y = date.getFullYear(), m = date.getMonth();
			var firstDay = new Date(y, m, 1);
			var fifthDay = new Date(y, m, 5);
			var tenthDay = new Date(y, m, 10);
			var fifteenthDay = new Date(y, m, 15);
			var twentiethDay = new Date(y, m, 20);
			var twentyfifthDay = new Date(y, m, 25);
			var lastDay = new Date(y, m + 1, 0);

			for(var d = new Date(new Date().setDate(new Date().getDate() - 15)); d <= new Date(); d.setDate(d.getDate() + 1)) {

				series1.push([new Date(d), Math.floor(Math.random() * (1500000 - 450000 + 1)) + 450000]);
				series2.push([new Date(d), Math.random() * (400 - 70) + 70]);
			}
		}

		if($("#chart1 > svg").length) {
			var date = new Date();
			var series1 = [];
			var series2 = [];

			createSeries();

			var data = [{
				"key": "Quantity",
				"bar": true,
				"values": series1
			}, {
				"key": "Price",
				"values": series2
			}];
			nv.addGraph(function() {
				var chart = nv.models.linePlusBarChart().margin({
					top: 15,
					right: 30,
					bottom: 15,
					left: 60
				})
				//We can set x data accessor to use index. Reason? So the bars all appear evenly spaced.
				.x(function(d, i) {
					return i;
				}).y(function(d, i) {
					return d[1];
				}).color(['#DFDFDD', '#E66F6F']);

				chart.xAxis.tickFormat(function(d) {
					var dx = data[0].values[d] && data[0].values[d][0] || 0;
					return d3.time.format('%x')(new Date(dx));
				});

				chart.y1Axis.tickFormat(d3.format(',f'));

				chart.y2Axis.tickFormat(function(d) {
					return '$' + d3.format(',f')(d);
				});

				chart.bars.forceY([0, 2000000]);
				chart.lines.forceY([0, 900]);

				d3.select('#chart1 svg').datum(data).transition().duration(0).call(chart);

				nv.utils.windowResize(chart.update);

				return chart;
			});
		}
	};
	// function to initiate Chart 2
	var runChart2 = function() {
		if($("#chart2 > svg").length) {
			var chart;
			var data = [{
				key: "Stream 1",
				values: [{
					x: 1,
					y: 1
				}]
			}];
			nv.addGraph(function() {

				chart = nv.models.historicalBarChart().margin({
					top: 30,
					right: 0,
					bottom: 40,
					left: 0
				}).color(['#5F8295']);

				chart.x(function(d, i) {
					return d.x;
				});

				chart.xAxis// chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
				.tickFormat(d3.format(',.1f'));

				chart.yAxis.tickFormat(d3.format(',.4f'));

				chart.showXAxis(true).showYAxis(false);

				d3.select('#chart2 svg').datum(data).transition().duration(500).call(chart);

				nv.utils.windowResize(chart.update);

				return chart;
			});

			var x = 2;
			var run = true;

			setInterval(function() {
				if(!run)
					return;
				d3.select(".nv-bars").on("mouseover", function() {
					run = false;

				}).on("mouseout", function() {
					run = true;

				});
				var spike = (Math.random() > 0.95) ? 10 : 1;
				data[0].values.push({
					x: x,
					y: Math.random() * spike
				});

				if(data[0].values.length > 10) {
					data[0].values.shift();
				}
				x++;

				chart.update();
			}, 1000);

			d3.select("#start-stop-button").on("click", function() {
				run = !run;
			});
		}
	};
	// function to initiate Chart 3
	var runChart3 = function() {
		if($("#chart3 > svg").length) {
			var data = [{
				"label": "EUR",
				"value": 29.765957771107
			}, {
				"label": "USD",
				"value": 196.45946739256
			}, {
				"label": "Others",
				"value": 92.807804682612
			}];
			nv.addGraph(function() {
				var chart = nv.models.pieChart().margin({
					top: 5,
					right: 0,
					bottom: 0,
					left: 10
				}).x(function(d) {
					return d.label;
				}).y(function(d) {
					return d.value;
				}).showLabels(true)//Display pie labels
				.showLegend(false).labelType("key")//Configure what type of data to show in the label. Can be "key", "value" or "percent"
				.color(['#F3EDED', '#E0CDD1', '#CAABB0']);

				d3.select("#chart3 svg").datum(data).transition().duration(350).call(chart);
				nv.utils.windowResize(chart.update);

				return chart;
			});
		}
	};

	// function to initiate Chart 4
	var runChart4 = function() {
		function randValue() {
			return (Math.floor(Math.random() * (100 + 4000 - 2000))) + 2000;
		};

		function createSeries() {
			var y = date.getFullYear(), m = date.getMonth();
			var firstDay = new Date(y, m, 1);
			var fifthDay = new Date(y, m, 5);
			var tenthDay = new Date(y, m, 10);
			var fifteenthDay = new Date(y, m, 15);
			var twentiethDay = new Date(y, m, 20);
			var twentyfifthDay = new Date(y, m, 25);
			var lastDay = new Date(y, m + 1, 0);

			for(var d = new Date(new Date().setMonth(new Date().getMonth() - 1)); d <= new Date(); d.setDate(d.getDate() + 1)) {

				series1.push([new Date(d), randValue() + Math.floor(Math.random() * 1000)]);
				series2.push([new Date(d), randValue() - Math.floor(Math.random() * 1000)]);
			}
		}

		if($("#chart4 > svg").length) {
			var date = new Date();
			var series1 = [];
			var series2 = [];
			var firstDay, lastDay, fifthDay, tenthDay, fifteenthDay, twentiethDay, twentyfifthDay;

			createSeries();
			var data = [{
				"key": "Page Views",
				"values": series1
			}, {
				"key": "Unique Visits",
				"values": series2
			}];

			nv.addGraph(function() {

				var chart = nv.models.lineChart().margin({
					top: 30,
					right: 0,
					bottom: 20,
					left: 35
				}).x(function(d) {
					return d[0];
				}).y(function(d) {
					return d[1];
				}).forceY([0, 8000]).useInteractiveGuideline(true).color(['#D9534F', '#ffffff']).clipEdge(true);
				var options = {
					showControls: false,
					showLegend: true
				};
				chart.options(options);
				chart.xAxis.tickFormat(function(d) {
					return d3.time.format('%x')(new Date(d));
				}).showMaxMin(false);

				chart.yAxis.tickFormat(d3.format(',f'));
				d3.select('#chart4 svg').datum(data).call(chart);

				nv.utils.windowResize(chart.update);

				return chart;
			});
		}
	};
	// function to initiate Sparkline
	var sparkResize;
	$(window).resize(function(e) {
		clearTimeout(sparkResize);
		sparkResize = setTimeout(runSparkline, 500);
	});
	var runSparkline = function() {

		$(".sparkline-1 span").sparkline([300, 523, 982, 811, 1300, 1125, 1487], {
			type: "bar",
			barColor: "#266866",
			barWidth: "5",
			height: "24",
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{value}}',
			tooltipValueLookups: {
				names: {
					0: 'Sunday',
					1: 'Monday',
					2: 'Tuesday',
					3: 'Wednesday',
					4: 'Thursday',
					5: 'Friday',
					6: 'Saturday'

				}
			}
		});
		$(".sparkline-2 span").sparkline([400, 650, 886, 443, 502, 412, 353], {
			type: "bar",
			barColor: "#ffffff",
			barWidth: "5",
			height: "24",
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{value}}',
			tooltipValueLookups: {
				names: {
					0: 'Sunday',
					1: 'Monday',
					2: 'Tuesday',
					3: 'Wednesday',
					4: 'Thursday',
					5: 'Friday',
					6: 'Saturday'

				}
			}
		});
		$(".sparkline-3 span").sparkline([4879, 6567, 5022, 8890, 9234, 7128, 4811], {
			type: "bar",
			barColor: "#A5E5DD",
			barWidth: "5",
			height: "24",
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{value}}',
			tooltipValueLookups: {
				names: {
					0: 'Sunday',
					1: 'Monday',
					2: 'Tuesday',
					3: 'Wednesday',
					4: 'Thursday',
					5: 'Friday',
					6: 'Saturday'

				}
			}
		});
		$(".sparkline-4 span").sparkline([1122, 1735, 559, 2534, 1600, 2860, 1345, 1987, 2675, 457, 3965, 3765], {
			type: "line",
			lineColor: '#ffffff',
			width: "80%",
			height: "70",
			fillColor: "",
			spotRadius: 4,
			lineWidth: 2,
			resize: true,
			spotColor: '#ffffff',
			minSpotColor: '#ffffff',
			maxSpotColor: '#ffffff',
			highlightSpotColor: '#bf005f',
			highlightLineColor: '#ffffff',
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{y:val}}',
			tooltipValueLookups: {
				names: {
					0: 'January',
					1: 'February',
					2: 'March',
					3: 'April',
					4: 'May',
					5: 'June',
					6: 'July',
					7: 'August',
					8: 'September',
					9: 'October',
					10: 'November',
					11: 'December'

				}
			}
		});
		$(".sparkline-5 span").sparkline([422, 1335, 1059, 2235, 1300, 1860, 1126, 1387, 1675, 1357, 2165, 1765], {
			type: "line",
			lineColor: '#ffffff',
			width: "80%",
			height: "70",
			fillColor: "",
			spotRadius: 4,
			lineWidth: 2,
			resize: true,
			spotColor: '#ffffff',
			minSpotColor: '#ffffff',
			maxSpotColor: '#ffffff',
			highlightSpotColor: '#bf005f',
			highlightLineColor: '#ffffff',
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{y:val}}',
			tooltipValueLookups: {
				names: {
					0: 'January',
					1: 'February',
					2: 'March',
					3: 'April',
					4: 'May',
					5: 'June',
					6: 'July',
					7: 'August',
					8: 'September',
					9: 'October',
					10: 'November',
					11: 'December'

				}
			}
		});
	};
	// function to initiate EasyPieChart
	var runEasyPieChart = function() {
		if(isIE8 || isIE9) {
			if(!Function.prototype.bind) {
				Function.prototype.bind = function(oThis) {
					if( typeof this !== "function") {
						// closest thing possible to the ECMAScript 5 internal IsCallable function
						throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
					}
					var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
					}, fBound = function() {
						return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
					};
					fNOP.prototype = this.prototype;
					fBound.prototype = new fNOP();
					return fBound;
				};
			}
		}
		var easyDefaultsOptions = {
			animate: 1000,
			lineWidth: 3,
			size: 70,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		};
		$('.easy-pie-chart .appear').each(function() {
			var configEasy = $.extend({}, easyDefaultsOptions, $(this).data("plugin-options"));
			if($(this).is(':appeared') || isMobile) {
				$(this).easyPieChart(configEasy);
			} else {
				$(this).appear();
				$(this).on("appear", function(event, $all_appeared_elements) {
					$(this).easyPieChart(configEasy);
				});
			}

		});

	};
	// function to initiate Report Range Date
	var runReportRange = function() {
		if($('#reportrange').length) {
			$('#reportrange').daterangepicker({
				ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
					'Last 7 Days': [moment().subtract('days', 6), moment()],
					'Last 30 Days': [moment().subtract('days', 29), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
				},
				startDate: moment().subtract('days', 29),
				endDate: moment()
			}, function(start, end) {
				$('#reportrange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY') + ' ');
			});
		}

	};
	// function to animate CoreBox Icons
	var runCoreBoxIcons = function() {
		$(".core-box").on("mouseover", function() {
			$(this).find(".icon-big").addClass("tada animated");
		}).on("mouseleave", function() {
			$(this).find(".icon-big").removeClass("tada animated");
		});
	};
	// function to activate animated Clock and Actual Date
	var runClock = function() {
		function update() {
			var now = moment(), second = now.seconds() * 6, minute = now.minutes() * 6 + second / 60, hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
			$('#hour').css({
				"-webkit-transform": "rotate(" + hour + "deg)",
				"-moz-transform": "rotate(" + hour + "deg)",
				"-ms-transform": "rotate(" + hour + "deg)",
				"transform": "rotate(" + hour + "deg)"
			});
			$('#minute').css({
				"-webkit-transform": "rotate(" + minute + "deg)",
				"-moz-transform": "rotate(" + minute + "deg)",
				"-ms-transform": "rotate(" + minute + "deg)",
				"transform": "rotate(" + minute + "deg)"
			});
			$('.clock #second').css({
				"-webkit-transform": "rotate(" + second + "deg)",
				"-moz-transform": "rotate(" + second + "deg)",
				"-ms-transform": "rotate(" + second + "deg)",
				"transform": "rotate(" + second + "deg)"
			});
		}

		function timedUpdate() {
			update();
			setTimeout(timedUpdate, 1000);
		}

		timedUpdate();
		$(".actual-date .actual-day").text(moment().format('DD'));
		$(".actual-date .actual-month").text(moment().format('MMMM'));
	};
	// function to activate owlCarousel in Appointments Panel
	var runEventsSlider = function() {
		var owlEvents = $(".appointments .e-slider").data('owlCarousel');
		$(".appointments .owl-next").on("click", function(e) {
			owlEvents.next();
			e.preventDefault();
		});
		$(".appointments .owl-prev").on("click", function(e) {
			owlEvents.prev();
			e.preventDefault();
		});
	};
	return {
		init: function() {
			runChart1();
			runChart2();
			runChart3();
			runChart4();
			runSparkline();
			runReportRange();
			runEasyPieChart();
			runClock();
			runCoreBoxIcons();
			runEventsSlider();
		}
	};
}();
