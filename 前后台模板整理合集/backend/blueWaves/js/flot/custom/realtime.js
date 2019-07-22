var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $dark_blue = "#005387";
var $info = "#87CEEB";
var $danger = "#F56B6B";
var $warning = "#F38733";
var $success = "#2ecc71";
var $yellow = "#fdd922";
var $facebook = "#3b5999";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";

var data = [];
var dataset;
var totalPoints = 100;
var updateInterval = 1000;
var now = new Date().getTime();


function GetData() {
	data.shift();

	while (data.length < totalPoints) {     
		var y = Math.random() * 100;
		var temp = [now += updateInterval, y];

		data.push(temp);
	}
}

var options = {
	series: {
		lines: {
			show: true,
			lineWidth: 1,
			fill: true
		}
	},
	xaxis: {
		mode: "time",
		tickSize: [5, "second"],
		tickFormatter: function (v, axis) {
		var date = new Date(v);
		if (date.getSeconds() % 20 == 0) {
			var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
			var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
			return hours + ":" + minutes;
		} else {
				return "";
			}
		},
		axisLabel: "Time",
		axisLabelUseCanvas: true,
		axisLabelFontSizePixels: 12,
		axisLabelFontFamily: 'Verdana, Arial',
		axisLabelPadding: 10
	},
	yaxis: {
		min: 0,
		max: 100,        
		tickSize: 15,
		tickFormatter: function (v, axis) {
			if (v % 10 == 0) {
				return v + "%";
			} else {
				return "";
			}
		},
		axisLabel: "CPU loading",
		axisLabelUseCanvas: true,
		axisLabelFontSizePixels: 12,
		axisLabelFontFamily: 'Verdana, Arial',
		axisLabelPadding: 3
	},
	legend:{        
		show: true,
		position: 'nw'
	},

	tooltip: true,
	tooltipOpts: {
		content: '%s: %y'
	},

	colors: [$facebook, $gplus, $yellow, $success, $warning, $primary, $danger, $info],

	grid: {                
		hoverable: true,
		clickable: true,
		borderWidth: 1,
		tickColor: $border_color,
		borderColor: $grid_color,
	}
};

$(document).ready(function () {
	GetData();

	dataset = [
		{ label: "CPU", data: data, color: "#1e91cf" }
	];

	$.plot($("#flot-placeholder"), dataset, options);

	function update() {
		GetData();

		$.plot($("#flot-placeholder"), dataset, options)
		setTimeout(update, updateInterval);
	}

	update();
});
