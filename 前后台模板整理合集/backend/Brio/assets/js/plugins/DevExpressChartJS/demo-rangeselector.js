/*******************************************
Numeric Scale
*******************************************/
$("#numeric-scale").dxRangeSelector({
    scale: {
        startValue: 150,
        endValue: 999,
    },
    selectedRange: {
        startValue: 299,
        endValue: 499
    },
	selectedRangeChanged: function (e) {
		$('#numeric-scale-selected-value').html('Selected Range: [' +e.startValue + ', ' + e.endValue + ']');
	}
});


$("#date-time-scale").dxRangeSelector({
    scale: {
        startValue: new Date(2011, 1, 1),
        endValue: new Date(2011, 6, 1),
        minorTickInterval: "day",
        majorTickInterval: { days: 7 },
        minRange: "week",
        maxRange: "month",
        showMinorTicks: false
    },
    sliderMarker: {
        format: "monthAndDay"
    },
    selectedRange: {
        startValue: new Date(2011, 1, 5),
        endValue: new Date(2011, 2, 5)
    }
});




var dataSource = [],
    max = 100;

for (var i = 0; i < max; i++) {
    dataSource.push({ arg: Math.pow(10, i * 0.1), val: Math.log(i + 1) / Math.log(0.5) + (Math.random() - 0.5) * (100 / (i + 1)) + 10 });
}

$("#zoomedChart").dxChart({
    dataSource: dataSource,
    argumentAxis: {
        valueMarginsEnabled: false,
        type: "logarithmic",
        label: { format: "exponential" }
    },
    legend: {
        visible: false
    },
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
	},

    series: {color:"#ff6264"}
});
$("#range").dxRangeSelector({
    dataSource: dataSource,
    chart: {
        series: {},
    },
    scale: {
        type: "logarithmic",
        label: { format: "exponential" },
        minRange: 1
    },
    sliderMarker: {
        format: 'exponential'
    },
    behavior: {
        callSelectedRangeChanged: "onMoving",
        snapToTicks: false
    },
    selectedRangeChanged: function (e) {
        var zoomedChart = $("#zoomedChart").dxChart("instance");
        zoomedChart.zoomArgument(e.startValue, e.endValue);
    }
});