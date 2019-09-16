$(document).ready(function() {

	//slimScroll Function for NavTop alers
	//--------------------------------
	$(function () {
		$('#messageScroll, #alertScroll, #taskScroll').slimScroll({
			height: '150px',
			disableFadeOut: true,
			touchScrollStep: 50
		});
	});
	
	//slimScroll Function for large timeline content
	//--------------------------------
	$(function () {
		$('.timeline-content.large').slimScroll({
			height: '110px',
			alwaysVisible: true,
			disableFadeOut: true,
			touchScrollStep: 50
		});
	});
	
});
