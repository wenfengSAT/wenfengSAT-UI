//------------- progressbars.js -------------//
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

	//------------- Animated progress bars -------------//
	//animate bar only when reach the bottom of screen
	$('.animated-bar .progress-bar').waypoint(function(direction) {
		$(this).progressbar({display_text: 'fill'});
	}, { offset: 'bottom-in-view' });

    //------------- Circfull progress bar -------------//
	//red color
	$('.progress-circular-red').circliful({ backgroundColor: '#eeeeee',  foregroundColor: '#df6a78' });
	//blue color
	$('.progress-circular-blue').circliful({ backgroundColor: '#eeeeee',  foregroundColor: '#29b6d8' });
	//green color
	$('.progress-circular-green').circliful({ backgroundColor: '#eeeeee',  foregroundColor: '#66c796' });
	//orange color
	$('.progress-circular-orange').circliful({ backgroundColor: '#eeeeee',  foregroundColor: '#f4ad49' });
	
});