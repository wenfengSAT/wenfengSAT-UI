//easyPieCharts

$(document).ready(function() {
	//For dashboard
	$(function() {	
		var chartSize = parseInt($(this).data('size')) || 67;			
			$('#easyPieChart-visit').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 5,
				lineCap: 'square',
				size: chartSize,
				barColor: "#466baf",
				trackColor: "#eee",
			});
				
			$('#easyPieChart-visit').css({
				width : chartSize + 'px',
				height : chartSize + 'px'
			});
			
			$('#easyPieChart-visit .number').css({
				"line-height": chartSize + 'px',
				"font-size": 14 + 'px'
			});	

	});
	$(function() {	
		var chartSize = parseInt($(this).data('size')) || 67;			
			$('#easyPieChart-bounce').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 5,
				lineCap: 'square',
				size: chartSize,
				barColor: "#89c402",
				trackColor: "#eee",
			});
				
			$('#easyPieChart-bounce').css({
				width : chartSize + 'px',
				height : chartSize + 'px'
			});
			
			$('#easyPieChart-bounce .percent').css({
				"line-height": chartSize + 'px',
				"font-size": 14 + 'px'
			});	

	});
	
	// From element page
	$(function() {	
		var chartSize = parseInt($(this).data('size')) || 67;			
			$('#easyPieChart-uses').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 5,
				lineCap: 'square',
				size: chartSize,
				barColor: "#466baf",
				trackColor: "#eee",
			});
				
			$('#easyPieChart-uses').css({
				width : chartSize + 'px',
				height : chartSize + 'px'
			});
			
			$('#easyPieChart-uses .percent').css({
				"line-height": chartSize + 'px',
				"font-size": 14 + 'px'
			});	

	});
	
// few more examples	
	$(function() {	
		var chartSize = parseInt($(this).data('size')) || 56;			
			$('#easyPieChart').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 3,
				lineCap: 'square',
				size: chartSize,
				trackColor: '#eee',
				barColor: '#ffb848'
			});
				
			$('#easyPieChart').css({
				width : chartSize + 'px',
				height : chartSize + 'px'
			});
			
			$('#easyPieChart .percent').css({
				"line-height": chartSize + 'px',
				"font-size": 14 + 'px'
			});	

	});
		
	$(function() {	
		var chartSize = parseInt($(this).data('size')) || 30;			
			$('#easyPieChart-xs').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 3,
				lineCap: 'square',
				size: chartSize,
				trackColor: '#eee',
				barColor: '#2E8965'
			});
				
			$('#easyPieChart-xs').css({
				width : chartSize + 'px',
				height : chartSize + 'px'
			});
			
			$('#easyPieChart-xs .percent').css({
				"line-height": chartSize + 'px',
				"font-size": 9 + 'px'
			});	

	});
		
	$(function() {	
		var chartSize = parseInt($(this).data('size')) || 46;			
			$('#easyPieChart-sm').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 3,
				lineCap: 'square',
				size: chartSize,
				trackColor: '#eee',
				barColor: '#e56c69'
			});
				
			$('#easyPieChart-sm').css({
				width : chartSize + 'px',
				height : chartSize + 'px'
			});
			
			$('#easyPieChart-sm .percent').css({
				"line-height": chartSize + 'px',
				"font-size": 12 + 'px'
			});	

	});
		
	$(function() {	
		var chartSize = parseInt($(this).data('size')) || 76;			
			$('#easyPieChart-lg').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 3,
				lineCap: 'square',
				size: chartSize,
				trackColor: '#eee',
				barColor: '#A069C3'
			});
				
			$('#easyPieChart-lg').css({
				width : chartSize + 'px',
				height : chartSize + 'px'
			});
			
			$('#easyPieChart-lg .percent').css({
				"line-height": chartSize + 'px',
				"font-size": 16 + 'px'
			});	

	});
	$(function() {			
			$('#easyPieChart-custom').easyPieChart({
				animate: 2000,
				scaleColor: false,
				lineWidth: 3,
				lineCap: 'square',
				trackColor: '#eee',
				barColor: '#ffb848'
			});

	});
});	