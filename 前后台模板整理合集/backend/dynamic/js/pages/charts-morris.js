//------------- charts-morris.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	//------------- Morris charts -------------//
	//define chart colours first
	var chartColours = {
		gray: '#bac3d2',
		teal: '#43aea8',
		blue: '#60b1cc',
		red: '#df6a78',
		orange: '#cfa448',
		gray_lighter: '#e8ecf1',
		gray_light: '#777777',
		gridColor: '#bfbfbf'
	}

	//convert the object to array for flot use
	var chartColoursArr = Object.keys(chartColours).map(function (key) {return chartColours[key]});

	//------------- Line chart -------------//
	var day_data = [
		{"period": "2014-10-01", "Sales": 560, "PayPal": 300},
		{"period": "2014-10-02", "Sales": 340, "PayPal": 276},
		{"period": "2014-10-03", "Sales": 326, "PayPal": 189},
		{"period": "2014-10-04", "Sales": 730, "PayPal": 314},
		{"period": "2014-10-05", "Sales": 145, "PayPal": 140},
		{"period": "2014-10-06", "Sales": 190, "PayPal": 135},
		{"period": "2014-10-07", "Sales": 459, "PayPal": 356},
		{"period": "2014-10-08", "Sales": 567, "PayPal": 501},
		{"period": "2014-10-09", "Sales": 345, "PayPal": 203},
		{"period": "2014-10-10", "Sales": 800, "PayPal": 560}
	];
	Morris.Line({
		element: 'morris-line-chart',
		data: day_data,
		xkey: 'period',
		ykeys: ['Sales', 'PayPal'],
		labels: ['Sales', 'Paypal'],
		resize: true,
		lineColors: chartColoursArr,
		lineWidth: 2,
		pointSize: 4,
		hideHover: 'auto',
		preUnits: '$',
		fillOpacity: '0.6'
	});

	//------------- Line charts without points -------------//
	//we use the same data 
	Morris.Line({
		element: 'morris-line-chart-nopoints',
		data: day_data,
		xkey: 'period',
		ykeys: ['Sales', 'PayPal'],
		labels: ['Sales', 'Paypal'],
		resize: true,
		lineColors: chartColoursArr,
		lineWidth: 2,
		pointSize: 0,
		hideHover: 'auto',
		preUnits: '$',
		fillOpacity: '0.6'
	});

	//------------- Area chart -------------//
	// Use Morris.Area instead of Morris.Line
	Morris.Area({
		element: 'morris-area-chart',
		data: [
		    {x: '2005', y: 135, z: 125},
		    {x: '2006', y: 207, z: 189},
		    {x: '2007', y: 345, z: 301},
		    {x: '2008', y: 256, z: 223},
			{x: '2009', y: 187, z: 167},
			{x: '2010', y: 345, z: 312},
			{x: '2011', y: 456, z: 423},
			{x: '2012', y: 401, z: 378},
			{x: '2013', y: 345, z: 311},
			{x: '2014', y: 412, z: 389}
		],
		xkey: 'x',
		ykeys: ['y', 'z'],
		labels: ['Y', 'Z'],
		lineWidth: 0,
		pointSize: 0,
		resize: true,
		lineColors: chartColoursArr,
		fillOpacity: '0.6'
		//behaveLikeLine: true,
	});

	//------------- Bar chart -------------//
	Morris.Bar({
		element: 'morris-bar-chart',
		data: [
		    {x: '2005', y: 135, z: 125, a: 117},
		    {x: '2006', y: 207, z: 189, a: 312},
		    {x: '2007', y: 345, z: 301, a: 267},
		    {x: '2008', y: 256, z: 223, a: 167},
			{x: '2009', y: 187, z: 167, a: 234},
			{x: '2010', y: 345, z: 312, a: 280},
			{x: '2011', y: 456, z: 423, a: 350},
			{x: '2012', y: 401, z: 378, a: 178},
			{x: '2013', y: 345, z: 311, a: 509},
			{x: '2014', y: 412, z: 389, a: 602}
		],
		xkey: 'x',
		ykeys: ['y', 'z', 'a'],
		labels: ['Y', 'Z', 'A'],
		resize: true,
		barColors: chartColoursArr,
		fillOpacity: '0.6'
	});

	//------------- Stacked bar chart -------------//
	Morris.Bar({
		element: 'morris-bar-stacked',
		data: [
		    {x: '2005', y: 135, z: 125, a: 117},
		    {x: '2006', y: 207, z: 189, a: 312},
		    {x: '2007', y: 345, z: 301, a: 267},
		    {x: '2008', y: 256, z: 223, a: 167},
			{x: '2009', y: 187, z: 167, a: 234},
			{x: '2010', y: 345, z: 312, a: 280},
			{x: '2011', y: 456, z: 423, a: 350},
			{x: '2012', y: 401, z: 378, a: 178},
			{x: '2013', y: 345, z: 311, a: 509},
			{x: '2014', y: 412, z: 389, a: 602}
		],
		xkey: 'x',
		ykeys: ['y', 'z', 'a'],
		labels: ['Y', 'Z', 'A'],
		resize: true,
		barColors: chartColoursArr,
		fillOpacity: '0.6',
		stacked: true
	});

	//------------- Donut chart -------------//
	Morris.Donut({
		element: 'morris-donut',
		data: [
			{value: 70, label: 'Desing'},
			{value: 15, label: 'Coding'},
			{value: 10, label: 'SEO'},
			{value: 5, label: 'Other'}
		],
		formatter: function (x) { return x + "%"},
		colors: chartColoursArr,
		resize: true
	});
	
});