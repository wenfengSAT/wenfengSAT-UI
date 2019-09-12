//------------- tables-basic.js -------------//
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
	
	//------------- Check all checkboxes -------------//
	/*$('.table').checkAll({
		masterCheckbox: '.check-all',
		otherCheckboxes: '.check',
		highlightRows: {
            active: true,
            row: 'tr'
        }
	})*/

	$('.table').checkAll({
		masterCheckbox: '.check-all',
		otherCheckboxes: '.check',
		highlightElement: {
            active: true,
            elementClass: 'tr',
            highlightClass: 'highlight'
        }
	});

	//------------- Hilight table rows on checkbox click -------------// 
	function tableHighlight () {
	    var table = $('.table');
	    var chboxes = table.find('input.check');

	    chboxes.on('change', function () {
	        if(this.checked) {
	           $(this).closest('tr').addClass('highlight');
	        } else {
	        	$(this).closest('tr').removeClass('highlight');
	        }
	    });
	}

	//tableHighlight();
});