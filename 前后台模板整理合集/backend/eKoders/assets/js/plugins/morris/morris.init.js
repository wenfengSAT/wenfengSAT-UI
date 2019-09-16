$(document).ready(function() {

	// Morris chart examples.
	
	// BAR CHART
	new Morris.Bar({
	// ID of the element in which to draw the chart.
	element: 'morris-chart-1',
	// Chart data records -- each entry in this array corresponds to a point on
	// the chart.
	data: [
		{ load: 'Sunday', a: 20, b: 25 },
		{ load: 'Monday', a: 75,  b: 65 },
		{ load: 'Tuseday', a: 50,  b: 40 },
		{ load: 'Wednesday', a: 75,  b: 65 },
		{ load: 'Thursday', a: 50,  b: 40 },
		{ load: 'Friday', a: 75,  b: 65 },
		{ load: 'Saturday', a: 40, b: 30 }
	],
	// The name of the data record attribute that contains x-values.
	xkey: 'load',
	// A list of names of data record attributes that contain y-values.
	ykeys: ['a', 'b'],
	 yLabelFormat: function(y) {
        return y + " %";
	 },
	// Labels for the ykeys -- will be displayed when you hover over the
	// chart.
	labels: ['CPU', 'RAM'],
	grid: true,
	smooth: true,
	resize: true,
	barColors: ['#373737', '#797979'],
	gridTextColor: ['#797979'],
	hideHover: 'auto'
	});
	
	// AREA CHART
	var area = new Morris.Area({
		element: 'morris-chart-2',
		resize: true,
		data: [
			{y: '2011 Q1', item1: 2666, item2: 2666},
			{y: '2011 Q2', item1: 2778, item2: 2294},
			{y: '2011 Q3', item1: 4912, item2: 1969},
			{y: '2011 Q4', item1: 3767, item2: 3597},
			{y: '2012 Q1', item1: 6810, item2: 1914},
			{y: '2012 Q2', item1: 5670, item2: 4293},
			{y: '2012 Q3', item1: 4820, item2: 3795},
			{y: '2012 Q4', item1: 15073, item2: 5967},
			{y: '2013 Q1', item1: 10687, item2: 4460},
			{y: '2013 Q2', item1: 8432, item2: 5713}
		],
		xkey: 'y',
		ykeys: ['item1', 'item2'],
		labels: ['Item 1', 'Item 2'],
		lineColors: ['#373737', '#797979'],
		hideHover: 'auto'
	});
	
	//DONUT CHART
	var donut = new Morris.Donut({
		element: 'morris-chart-3',
		resize: true,
		colors: ["#373737", "#797979", "#d15050"],
		data: [
			{label: "Download Sales", value: 12},
			{label: "In-Store Sales", value: 30},
			{label: "Mail-Order Sales", value: 20}
		],
		hideHover: 'auto'
	});
	
	// LINE CHART
	var line = new Morris.Line({
		element: 'morris-chart-4',
		resize: true,
		data: [
			{y: '2011 Q1', item1: 2666},
			{y: '2011 Q2', item1: 2778},
			{y: '2011 Q3', item1: 4912},
			{y: '2011 Q4', item1: 3767},
			{y: '2012 Q1', item1: 6810},
			{y: '2012 Q2', item1: 5670},
			{y: '2012 Q3', item1: 4820},
			{y: '2012 Q4', item1: 15073},
			{y: '2013 Q1', item1: 10687},
			{y: '2013 Q2', item1: 8432}
		],
		xkey: 'y',
		ykeys: ['item1'],
		labels: ['Item 1'],
		lineColors: ['#d15050'],
		hideHover: 'auto'
	});
				
});