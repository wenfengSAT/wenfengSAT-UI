/*
 * Template name: Kertas - Responsive Bootstrap 3 Admin Template
 * Version: 1.0.0
 * Author: VergoLabs
 */

/* FLOT CHART */
function initFlot() {
	/* FLOT DATA */
	var data1 = [[1, 10], [2, 20], [3, 10], [4, 25], [5, 15], [6, 20], [7, 40]];
	var data2 = [[1, 15], [2, 30], [3, 25], [4, 55], [5, 30], [6, 45], [7, 50]];
	var data3 = [[1, 40], [2, 65], [3, 70], [4, 100], [5, 120]];
	var data4 = [[1, 35], [2, 55], [3, 65], [4, 80], [5, 100]];
	var data5 = [[1, 30], [2, 60], [3, 60], [4, 90], [5, 110]];
	var data6 = [[1, 30], [2, 45], [3, 70], [4, 85], [5, 90]];
	var data7 = [[1, 100], [2, 110], [3, 120], [4, 130], [5, 150]];
	var data8 = [[1, 80], [2, 60], [3, 100], [4, 110], [5, 120]];
	var data9 = [[1, 30], [2, 40], [3, 60], [4, 70], [5, 80]];
	
	/* DATASET */
	var dataSet1 = [
		{ label: "Label 1", data: data1, color: "#3498db" },
		{ label: "Label 2", data: data2, color: "#2ecc71" }
	]
	var dataSet2 = [
		{ label: "Label 1", data: data1, color: "#3498db" },
		{ label: "Label 2", data: data2, color: "#e74c3c" }
	]
	var dataSet3 = [
		{ label: "Label 1", data: data3, color: "#e74c3c" },
		{ label: "Label 2", data: data4, color: "#f39c12" },
		{ label: "Label 3", data: data5, color: "#2ecc71" },
		{ label: "Label 4", data: data6, color: "#3498db" }
	]
	var dataSet4 = [
		{ label: "Label 1", data: data7, color: "rgba(231, 76, 60, 0.7)" },
		{ label: "Label 2", data: data8, color: "rgba(241, 196, 15, 0.6)" },
		{ label: "Label 3", data: data9, color: "rgba(46, 204, 113, 0.8)" }
	]
	var dataSet5 = [
		{ label: "Label 1", data: [1,60], color: "rgba(52, 152, 219, 0.7)" },
		{ label: "Label 2", data: [1,70], color: "rgba(46, 204, 113, 0.7)" },
		{ label: "Label 3", data: [1,40], color: "rgba(231, 76, 60, 0.7)" },
		{ label: "Label 4", data: [1,30], color: "rgba(241, 196, 15, 0.7)" }
	]

	/* LABEL FORMATTER */
	function labelFormatter(label, series) {
		return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}
	
	/* TOOLTIP */
	var previousPoint = null;
	function showTooltip(x, y, contents) {
		$("<div id='tooltip'>" + contents + "</div>").css({
			position: "absolute",
			display: "none",
			top: y + 5,
			left: x + 5,
			border: "1px solid #000",
			padding: "5px",
			'color':'#fff',
			'border-radius':'2px',
			'font-size':'11px',
			"background-color": "#000",
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}
	
	/* LINE CHART */
	var line_chart = $.plot($("#chart-line"), dataSet1, {
		series: {
			lines: {
				show: true,
				lineWidth: 2, 
				fill: false,
				fillColor: {
					colors: [{
						opacity: 0.1
					}, {
						opacity: 0.1
					}
					]
				}
			},
			points: {
				show: true
			},
			shadowSize: 2
		},
		legend:{
			show: false
		},
		grid: {
			labelMargin: 10,
			axisMargin: 500,
			hoverable: true,
			clickable: true,
			tickColor: "rgba(0, 0, 0, 0.1)",
			borderWidth: 0
		},
		xaxis: {
			ticks: 11,
			tickDecimals: 0
		},
		yaxis: {
			ticks: 5,
			tickDecimals: 0
		}
	});

	$("#chart-line").bind("plothover", function (event, pos, item) {
		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);
				showTooltip(item.pageX, item.pageY,
				item.series.label + " (" + x + ", " + y + ")");
			}
		} else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
	
	/* AREA CHART */
	var area_chart = $.plot($("#chart-area"), dataSet2, {
		series: {
			lines: {
				show: true,
				lineWidth: 2, 
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.1
					}, {
						opacity: 0.1
					}
					]
				}
			},
			points: {
				show: true
			},
			shadowSize: 2
		},
		legend:{
			show: false
		},
		grid: {
			labelMargin: 10,
			axisMargin: 500,
			hoverable: true,
			clickable: true,
			tickColor: "rgba(0, 0, 0, 0.1)",
			borderWidth: 0
		},
		xaxis: {
			ticks: 11,
			tickDecimals: 0
		},
		yaxis: {
			ticks: 5,
			tickDecimals: 0
		}
	});

	$("#chart-area").bind("plothover", function (event, pos, item) {
		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);
				showTooltip(item.pageX, item.pageY,
				item.series.label + " (" + x + ", " + y + ")");
			}
		} else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
	
	/* LIVE CHART */
	var data = [];
	var totalPoints = 500;
	
	function getRandomData() {
		if (data.length > 0) data = data.slice(1);
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50;
			var y = prev + Math.random() * 10 - 5;
			if (y < 0) y = 0;
			if (y > 100) y = 100;
			data.push(y);
		}
		var res = [];
		for (var i = 0; i < data.length; ++i) res.push([i, data[i]])
		return res;
	}

	function update() {
		live_chart.setData([getRandomData()]);
		live_chart.draw();
		setTimeout(update, 500);
	}

	var live_chart = $.plot($("#chart-live"), [{
		data:  getRandomData(),
		label: "Label"
	}
	], {
		series: {
			lines: {
				show: true,
				lineWidth: 2, 
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.25
					}, {
						opacity: 0.25
					}]
				}
			},
			points: {
				show: false
			},
			shadowSize: 2
		},
		legend: {
			show: false
		},
		grid: {
			labelMargin: 10,
			axisMargin: 500,
			hoverable: true,
			clickable: true,
			tickColor: "rgba(0, 0, 0, 0.1)",
			borderWidth: 0
		},
		colors: ["#3498db"],
		xaxis: {
			ticks: 10,
			tickDecimals: 0
		},
		yaxis: {
			ticks: 5,
			tickDecimals: 0
		}
	});

	update();
	
	/* BAR CHART */
	var bar_chart = $.plot($("#chart-bar"), dataSet3, {
		series: {
			bars: {
				show: true,
				barWidth: 0.1,
				lineWidth: 0.2,
				fill: true,
				hoverable: true,
				order: 1,
				fillColor: {
					colors: [{
						opacity: 0.6
					}, {
						opacity: 0.6
					}]
				}
			},
			shadowSize: 2
		},
		legend:{
			show: false
		},
		grid: {
			labelMargin: 10,
			axisMargin: 500,
			hoverable: true,
			clickable: true,
			tickColor: "rgba(0, 0, 0 , 0.1)",
			borderWidth: 0
		},
		xaxis: {
			ticks: [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"]],
			tickDecimals: 0
		},
		yaxis: {
			ticks: 6,
			tickDecimals: 0
		}
	});

	$("#chart-bar").bind("plothover", function (event, pos, item) {
		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";

		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0],
				y = item.datapoint[1];
				showTooltip(item.pageX, item.pageY,
				item.series.label + " = " + y);
			}
		} else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
	
	/* STACKED CHART */
	var stacked_chart = $.plot($("#chart-stacked"), dataSet4, {
		series: {
			stack: true,
			bars: {
				align: "center",
				show: true,
				barWidth: 0.15,
				lineWidth: 0.2,
				fill: true,
				hoverable: true,
				fillColor: {
					colors: [{
						opacity: 1
					}, {
						opacity: 1
					}]
				}
			},
			shadowSize: 2
		},
		legend:{
			show: false
		},
		grid: {
			labelMargin: 10,
			axisMargin: 500,
			hoverable: true,
			clickable: true,
			tickColor: "rgba(0, 0, 0, 0.1)",
			borderWidth: 0
		},
		xaxis: {
			ticks: [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"]],
			tickDecimals: 0,
			align: "center"
		},
		yaxis: {
			ticks: 6,
			tickDecimals: 0
		}
	});

	$("#chart-stacked").bind("plothover", function (event, pos, item) {
		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";

		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0],
				y = item.datapoint[1];
				showTooltip(item.pageX, item.pageY,
				item.series.label + " = " + y);
			}
		} else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
	
	/* PIE CHART */
	var pie_chart = $.plot($("#chart-pie"), dataSet5, {
		series: {
			pie: {
				show: true,
				radius: 0.9,
				label: {
					radius: 3/6,
					formatter: labelFormatter
				}
			}
		},
		legend: {
			show: false
		},
		grid: {
			hoverable: true
		}
	});
	
	/* DONUT CHART */
	var donut_chart = $.plot($("#chart-donut"), dataSet5, {
		series: {
			pie: {
				show: true,
				innerRadius: 0.4,
				radius: 0.9,
				label: {
					radius: 1
				}
			}
		},
		legend: {
			show: true
		},
		grid: {
			hoverable: true
		}
	});
}

/* JQUERY KNOB */
function initKnob() {
	$(".knob").knob({
		release : function (value) {
			console.log("release : " + value);
		},
		cancel : function () {
			console.log("cancel : ", this);
		},
		draw : function () {
			if(this.$.data('skin') == 'tron') {
				this.cursorExt = 0.3;
				var a = this.arc(this.cv)
					, pa
					, r = 1;
				this.g.lineWidth = this.lineWidth;
				if (this.o.displayPrevious) {
					pa = this.arc(this.v);
					this.g.beginPath();
					this.g.strokeStyle = this.pColor;
					this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
					this.g.stroke();
				}
				this.g.beginPath();
				this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
				this.g.stroke();
				this.g.lineWidth = 2;
				this.g.beginPath();
				this.g.strokeStyle = this.o.fgColor;
				this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
				this.g.stroke();
				return false;
			}
		}
	});

	var v, up=0,down=0,i=0
		,$idir = $("div.idir")
		,$ival = $("div.ival")
		,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
		,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
	$("input.infinite").knob({
		min : 0
		, max : 20
		, stopper : false
		, change : function () {
			if(v > this.cv){
				if(up){
					decr();
					up=0;
				}else{up=1;down=0;}
			} else {
				if(v < this.cv){
					if(down){
						incr();
						down=0;
					}else{down=1;up=0;}
				}
			}
			v = this.cv;
		}
	});
}

$(function($) {
	"use strict";
	
	initFlot();
	initKnob();
});