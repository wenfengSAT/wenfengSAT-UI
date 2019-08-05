$(function () {

	var sparkOptions = {
		type: 'bar'
		, height: '35px'
		, barWidth: '5px'
		, barSpacing: '2px'
	};

	$('#total-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: '#e5412d' })
	);

	$('#new-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: '#444' })
	);

	$('#unique-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: '#999' })
	);

	$('#revenue-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: '#5cb85c' })
	);

});