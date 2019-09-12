//------------- tabs.js -------------//
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

	//------------- Activate tabs -------------//
	$('#myTab a:first').tab('show'); // Select first tab
	$('#myTab2 a:first').tab('show'); // Select first tab
	$('#myTab3 a:first').tab('show'); // Select first tab
	$('#myTab4 a:first').tab('show'); // Select first tab
	$('#myTab5 a:first').tab('show'); // Select first tab
	$('#myTab6 a:first').tab('show'); // Select first tab
	$('#myTab7 a:first').tab('show'); // Select first tab
	$('#myTab8 a:first').tab('show'); // Select first tab
	$('#myTab9 a:first').tab('show'); // Select first tab

	//------------- Tab drop -------------//
	function tabdrop() {
		$('.tabdrop').tabdrop({
			text: '<i class="fa fa-align-justify"></i>'
		}).on("click", function(){
		    $(this).tabdrop('layout');
		});
	}
	$(window).on("load", function(){
	   tabdrop();
	});
	$(window).resize(tabdrop);
	
});