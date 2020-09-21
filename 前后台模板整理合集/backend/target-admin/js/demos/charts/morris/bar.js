$(function () {

	if (!$('#bar-chart').length) { return false; }
	
	bar ();

	$(window).resize (target_admin.debounce (bar, 325));

});

function bar () {
	$('#bar-chart').empty ();

	Morris.Bar({
		element: 'bar-chart',
		data: [
			{ y: '2006', a: 100, b: 90, c: 120 },
			{ y: '2007', a: 75,  b: 65, c: 60 },
			{ y: '2008', a: 50,  b: 40, c: 60 },
			{ y: '2009', a: 75,  b: 65, c: 75 },
			{ y: '2010', a: 50,  b: 40, c: 65 },
			{ y: '2011', a: 75,  b: 65, c: 40 }
		],
		xkey: 'y',
		ykeys: ['a', 'b', 'c'],
		labels: ['Series A', 'Series B', 'Series C'],
		barColors: target_admin.layoutColors
	});
}