/* Example Line */
$(".sparkline-line").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
    type: 'line',
    width: '200',
    height: '50',
    lineColor: '#399bff',
    lineWidth: 3,
    spotColor: '#086c93',
    minSpotColor: '#086c93',
    maxSpotColor: '#086c93',
    spotRadius: 3,
    drawNormalOnTop: false});

/* Example Bar */
$(".sparkline-bar").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    height: '60',
    barWidth: 6,
    barColor: '#399bff'});

/* Example Pie */
$(".sparkline-pie").sparkline([1,1,2], {
    type: 'pie',
    width: '100',
    height: '50'});


/* Demo PROJECTS STATS */
$(".demo-project-stats").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
    type: 'line',
    width: '100',
    height: '20',
    lineColor: '#399bff',
    fillColor: '#ccddff',
    lineWidth: 2,
    spotColor: '#206fbf',
    minSpotColor: '#206fbf',
    maxSpotColor: '#206fbf',
    highlightSpotColor: '#000000',
    highlightLineColor: '#afafaf'});

/* Chart Line Green */
$(".sparkline-green").sparkline([4,2,1,6,2,3,5,2,3,1,3], {
    type: 'line',
    width: '105',
    height: '30',
    lineColor: '#26a65b',
    fillColor: '',
    lineWidth: 2,
    spotColor: '#074f23',
    minSpotColor: '#074f23',
    maxSpotColor: '#074f23',
    highlightLineColor: '#666666'});

/* Chart Line Blue */
$(".sparkline-blue").sparkline([4,2,2,4,2,6,5,2,3,1,3], {
    type: 'line',
    width: '105',
    height: '30',
    lineColor: '#399bff',
    fillColor: '',
    lineWidth: 2,
    spotColor: '#00478e',
    minSpotColor: '#00478e',
    maxSpotColor: '#00478e',
    highlightLineColor: '#666666',
    drawNormalOnTop: false});

/* Chart Line Red */
$(".sparkline-red").sparkline([4,2,1,6,5,1,5,2,2,1,3], {
    type: 'line',
    width: '105',
    height: '30',
    lineColor: '#ef4836',
    fillColor: '',
    lineWidth: 2,
    spotColor: '#a3180b',
    minSpotColor: '#a3180b',
    maxSpotColor: '#a3180b',
    highlightLineColor: '#666666',
    drawNormalOnTop: false});