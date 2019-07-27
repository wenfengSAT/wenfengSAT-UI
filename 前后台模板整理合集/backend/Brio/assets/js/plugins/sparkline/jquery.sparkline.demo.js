/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 

** Just For Template Demos */





/********************************
Sparklines on Dashboard
*********************************/

$("#dashboard-stats-sparkline1").sparkline([5,10,7,2,0,-4,-2,4,5,-6,-1.5,2.2,4.7,-3.5,-0.7,-2,3.1,6], {
    type: 'bar',
    height: '60',
    barColor: '#9D9EA5',
    negBarColor: '#e9573f'});
	
$("#dashboard-stats-sparkline2").sparkline([10,5,3,-6,5,3,-2,6,1,-4,-1.5,2.2,4.7,-3.5,-0.7,-2,3.1,6], {
    type: 'bar',
    height: '60',
    barColor: '#9D9EA5',
    negBarColor: '#e9573f'});
	
$("#dashboard-stats-sparkline3").sparkline([5,10,7,2,0,-4,-2,4,5,-6,-1.5,2.2,4.7,-3.5,-0.7,-2,3.1,6], {
    type: 'bar',
    height: '60',
    barColor: '#9D9EA5',
    negBarColor: '#e9573f'});
	
$("#dashboard-stats-sparkline4").sparkline([5,10,7,2,0,-4,-2,4,5,-6,-1.5,2.2,4.7,-3.5,-0.7,-2,3.1,6], {
    type: 'bar',
    height: '60',
    barColor: '#9D9EA5',
    negBarColor: '#e9573f'});
	
	
	
	
$("#dashboard-stats-sparkline5").sparkline([0,10,5,22,10,16,6,20,5,22], {
    type: 'line',
    width: '130',
    height: '70',
    lineColor: '#f25648',
    fillColor: false,
    lineWidth: 2,
    spotColor: '#f25648',
    minSpotColor: '#f25648',
    maxSpotColor: '#f25648',
    highlightSpotColor: '#a01509',
    highlightLineColor: '#a01509',
    spotRadius: 4});
	
$("#dashboard-stats-sparkline6").sparkline([5,10,7,2,0,-4,-2,4,5,-6,-1.5,2.2,4.7,-3.5,-0.7,-2,3.1,6], {
    type: 'bar',
    height: '70',
    barWidth: 6,
    barSpacing: 2,
    barColor: '#f2b635',
    negBarColor: '#f19a2b'});
	





$("#table-sparkline1").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    zeroAxis: false,
    barColor: '#e9573f',
    negBarColor: '#e9573f'});
	
	
	
$("#table-sparkline2").sparkline([1,2,0.5], {
    type: 'pie',
    sliceColors: ['#f0ad4e','#5bc0de','#fff']});
	
	
$("#table-sparkline3").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
    type: 'line',
    fillColor: '#fff'});
	

$("#table-sparkline4").sparkline([4,6,7,7,4,3,2,1,4,4,7,7,4,3,2,1], {
    type: 'discrete',
    lineColor: '#70ba63'});