//Gauge 1
var opts = {
    lines: 12, // The number of lines to draw
    angle: 0.15, // The length of each line
    lineWidth: 0.44, // The line thickness
    pointer: {
    length: 0.9, // The radius of the inner circle
    strokeWidth: 0.035, // The rotation offset
    color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#118FDD',   // Colors
    colorStop: '#118FDD',    // just experiment with them
    strokeColor: '#E0E0E0',   // to see which ones work best for you
    generateGradient: true
};
var target = document.getElementById('gauge-chart'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create gauge!
gauge.maxValue = 3000; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(1250); // set actual value

//Gauge 2
var opts_2 = {
  lines: 12, // The number of lines to draw
  angle: 0.35, // The length of each line
  lineWidth: 0.1, // The line thickness
  pointer: {
    length: 0.9, // The radius of the inner circle
    strokeWidth: 0.035, // The rotation offset
    color: '#000000' // Fill color
  },
  limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
  colorStart: '#54BC75',   // Colors
  colorStop: '#54BC75',    // just experiment with them
  strokeColor: '#EEEEEE',   // to see which ones work best for you
  generateGradient: false
};
var target = document.getElementById('gauge-chart-2'); // your canvas element
var gauge = new Donut(target).setOptions(opts_2); // create gauge!
gauge.maxValue = 3000; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(1475); // set actual value

$(".sparkline").each(function() {
    var $this = $(this);
    $this.sparkline('html', $this.data());
});

$("#sparkline1").sparkline([34,43,43,35,44,32,44,52,25], {
    type: 'line',
    lineColor: '#54BC75',
    fillColor: '#54BC75',
});
$("#sparkline2").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    barColor: '#54BC75',
    negBarColor: '#DF4B33'});

$("#sparkline3").sparkline([1,1,2], {
    type: 'pie',
    sliceColors: ['#118FDD', '#54BC75', '#FFA800']});

$("#sparkline4").sparkline([34,43,43,35,44,32,15,22,46,33,86,54,73,53,12,53,23,65,23,63,53,42,34,56,76,15,54,23,44], {
    type: 'line',
    lineColor: '#54BC75',
    fillColor: 'transparent',
});

$("#sparkline5").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    type: 'tristate',
    posBarColor: '#118FDD',
    negBarColor: '#bfbfbf'});


$("#sparkline6").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,3,4,5,8,7,6,9,3,2,4,1,5,6,4,3,7,], {
    type: 'discrete',
    lineColor: '#118FDD'});

$("#sparkline7").sparkline([1,1,2], {
    type: 'pie',
    width: '100px',
    height: '100px',
    sliceColors: ['#118FDD', '#54BC75', '#FFA800']});

$("#sparkline8").sparkline([34,43,43,35,44,32,15,22,46,33,86,54,73,53,12,53,23,65,23,63,53,42,34,56,76,15,54,23,44], {
    type: 'line',
    lineWidth: 2,
    width: '190px',
    height: '100px',
    lineColor: '#54BC75',
    fillColor: '#dff0d8',
});

$("#sparkline9").sparkline([5,6,7,2,0,-4,-2,4, 5,-6,7,2,0,4,-2,4], {
    type: 'bar',
    barWidth: '10px',
    barSpacing: '2px',
    height: '100px',
    barColor: '#54BC75',
    negBarColor: '#DF4B33'
});