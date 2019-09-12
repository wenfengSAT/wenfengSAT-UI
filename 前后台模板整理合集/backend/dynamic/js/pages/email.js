//------------- email.js -------------//
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

	//------------- Check all Checkboxes -------------//
	if ($('.checkall').length) {
		$('.checkall').checkAll({
			masterCheckbox: '.check-all',
			otherCheckboxes: '.check',
			highlightRows: {
				active: true,
				row: '.email-list-item'
			}
		});
	}

	//------------- Loading overlay in refresh click -------------//
	$('#refresh-inbox').click(function(){
		$('.email-list').waitMe({
            effect : 'facebook',
            text : 'Refres inbox ...',
            bg : 'rgba(255,255,255,0.7)',
            color : '#616469'
        });
        setTimeout(function() {
            $('.email-list').waitMe("hide");
        }, 3000);
	});

	if ($('#email-text-area').length) {
		$('#email-text-area').summernote({
	        height: 200
	    });
	}
	
});