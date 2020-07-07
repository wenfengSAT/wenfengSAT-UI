
$(function() {
	$('.easy-pie-chart-1').easyPieChart({
		easing: 'easeOutBounce',
		barColor : '#8CC152',
		lineWidth: 3,
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});
	$('.easy-pie-chart-2').easyPieChart({
		easing: 'easeOutBounce',
		barColor : '#F6BB42',
		lineWidth: 3,
		trackColor : false,
		lineCap : 'butt',
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});
	$('.easy-pie-chart-3').easyPieChart({
		easing: 'easeOutBounce',
		barColor : '#E9573F',
		lineWidth: 10,
		lineCap : 'square',
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});
	$('.easy-pie-chart-4').easyPieChart({
		easing: 'easeOutBounce',
		barColor : '#3BAFDA',
		lineWidth: 20,
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});
});