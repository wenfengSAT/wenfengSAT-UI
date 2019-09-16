 //jQuery sparkline examples
$(document).ready(function() {
	$(function() {	
		$(".sparkline-bar").sparkline([8,9,10,11,10,10,12,10,10,11,9,12,11,10,9,11,13,13,12], {
                type: 'bar',
                width: '110',
                barWidth: 5,
                height: '55',
                barColor: '#466baf',
                negBarColor: '#aaaaaa'}
        );

        $(".sparkline-line").sparkline([8,9,11,12,13,12,13,10,14,13,11,11,12,11,11,10,12,11,10], {
                type: 'line',
                width: '110',
                barWidth: 5,
                height: '55',
                lineColor: '#89c402',
				tooltipSuffix: ' MB per second',
                fillColor: '#fff'}
        );

        $(".sparkline-pie").sparkline([1,1,2], {
                type: 'pie',
                width: '55',
				sliceColors: ['#83A46B', '#455B8C', '#1a1a1a'],
                height: '55'
        });
		
		
    });
});	