/*******************************************
Gauges
*******************************************/
$('#gauges-1').dxCircularGauge({
	scale: {
		startValue: 50,
		endValue: 150,
		majorTick: {
			tickInterval: 10
		}
	},
	rangeContainer: {
		palette: 'pastel',
		ranges: [
			{ startValue: 50, endValue: 90 },
			{ startValue: 90, endValue: 130 },
			{ startValue: 130, endValue: 150 },
		]
	},
	value: 105
});



$('#gauges-2').dxCircularGauge({
	scale: {
		startValue: 0,
		endValue: 1000,
		majorTick: {
			color: '#1A1100',
			tickInterval: 100
		},
		minorTick: {
			color: '#1A1100',
			visible: true,
			tickInterval: 25
		}
	},
	rangeContainer: {
		backgroundColor: 'none'
	},
	value: 750
});






/*******************************************
Bar Gauges
*******************************************/

$('#bar-gauge-1').dxBarGauge({
	startValue: 0,
	endValue: 100,
	values: [47.27, 65.32, 84.59, 71.86],
	label: {
		indent: 30,
		format: 'fixedPoint',
		precision: 1,
		customizeText: function (arg) {
			return arg.valueText + ' %';
		}
	}
});



$('#bar-gauge-2').dxBarGauge({
	startValue: -50,
	endValue: 50,
	baseValue: 0,
	values: [-21.3, 14.8, -30.9, 45.2],
	label: {
		customizeText: function (arg) {
			return arg.valueText + ' mm';
		}
	},
	palette: 'ocean',
});









/*******************************************
Linear Gauges
*******************************************/

$('#linear-gauge-1').dxLinearGauge({
	scale: {
		startValue: 0, endValue: 30,
		majorTick: {
			color: '#536878',
			tickInterval: 5
		},
		label: {
			indentFromTick: -3
		}
	},
	rangeContainer: {
		offset: 10,
		ranges: [
			{ startValue: 0, endValue: 5, color: '#92000A' },
			{ startValue: 5, endValue: 20, color: '#E6E200' },
			{ startValue: 20, endValue: 30, color: '#77DD77' }
		]
	},
	valueIndicator: {
		offset: 20
	},
	subvalueIndicator: {
		offset: -15
	},
	value: 17,
	subvalues: [5, 25]
});



$('#linear-gauge-2').dxLinearGauge({
	scale: {
		startValue: 0,
		endValue: 5,
		majorTick: {
			tickInterval: 2.5
		},
		minorTick: {
			visible: true,
			tickInterval: 0.625
		}
	},
	value: 4.3
});