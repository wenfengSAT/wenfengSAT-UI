$(function () {

	var sparkOptions = {
		type: 'bar'
		, height: '35px'
		, barWidth: '5px'
		, barSpacing: '2px'
	};

	$('#total-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: target_admin.layoutColors[0] })
	);

	$('#new-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: target_admin.layoutColors[1] })
	);

	$('#unique-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: target_admin.layoutColors[2] })
	);

	$('#revenue-visits').sparkline(
		'html', $.extend (sparkOptions, { barColor: target_admin.layoutColors[3] })
	);

});