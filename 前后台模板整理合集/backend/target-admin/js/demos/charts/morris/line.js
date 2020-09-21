$(function () {

	if (!$('#line-chart').length) { return false; }
	
	line ();

	$(window).resize (target_admin.debounce (line, 325));

});

function line () {
	$('#line-chart').empty ();

	Morris.Line({
		element: 'line-chart',
		data: [
			{ y: '2006', a: 100, b: 90 },
			{ y: '2007', a: 75,  b: 65 },
			{ y: '2008', a: 50,  b: 40 },
			{ y: '2009', a: 75,  b: 65 },
			{ y: '2010', a: 50,  b: 40 },
			{ y: '2011', a: 75,  b: 65 },
			{ y: '2012', a: 100, b: 90 }
		],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Series A', 'Series B', 'Series C'],
		lineColors: target_admin.layoutColors
	});
}