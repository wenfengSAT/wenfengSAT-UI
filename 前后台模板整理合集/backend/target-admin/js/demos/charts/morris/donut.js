$(function () {
	
    if (!$('#donut-chart').length) { return false; }

	donut ();

	$(window).resize (target_admin.debounce (donut, 325));

});

function donut () {
	$('#donut-chart').empty ();

	Morris.Donut({
        element: 'donut-chart',
        data: [
            {label: 'Direct', value: 25 },
            {label: 'Referrals', value: 40 },
            {label: 'Search engines', value: 25 },
            {label: 'Unique visitors', value: 10 }
        ],
        colors: target_admin.layoutColors,
        hideHover: true,
        formatter: function (y) { return y + "%" }
    });
}