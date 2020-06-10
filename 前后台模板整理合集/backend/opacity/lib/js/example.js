/*
 Example file contains all of the necessary javascript to run the demo.  Please 
 do not adjust these files until you are ready to build out your system.  The 
 code in this file is meant as an example of how to initialize certain aspects 
 of Opacity admin.
*/

/* INITIALIZATION FUNCTIONS */

function buildCharts(){
 sparklineBarChart();
 sparklineLineChart();
 sparklinePieChart();
 morrisAreaChart();
 morrisBarChart();
 morrisDonutChart();
 flotSelectionChart();
 xMultChart();
}
function gritterRemove(){
 $.gritter.removeAll();
 return false;
}

function addGritterImage(style){
 $.gritter.add({
  title: 'This is a notice!',
  text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
  image: 'lib/img/avatars/1.png',
  sticky: true,
  class_name: style
 }); return false;
}

function addGritter(style){
 $.gritter.add({
  title: 'This is a notice!',
  text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
  sticky: false,
  class_name: style
 }); return false;
}

/* END INITIALIZATION FUNCTIONS */

 

/* charts.html EXAMPLE JS */

function sparklineBarChart(){
 $('.sparklines1').sparkline(
  [5,9,6,3,6,7,8,2,4,3,6,8,5,7,7,8,9,5,6,3,4], 
  { 
   type: 'bar', 
   width:'100%', 
   height: '200px', 
   barWidth: '10px', 
   barColor: '#ACACCF'
  }
 );
}

function sparklineLineChart(){
 $('.sparklines2').sparkline(
  [5,9,6,3,6,7,8,2,4,3,6,8,5,7,7,8,9,5,6,3,4], 
  { 
   type: 'line', 
   width:'100%', 
   height: '200px', 
   lineWidth: 3, 
   lineColor: '#7BAEDA', 
   fillColor: '#B4D1EA' 
  }
 );
}

function sparklinePieChart(){
 $('.sparklines3').sparkline(
  [3, 5, 6, 8, 10, 12], 
  { 
   type: 'pie', 
   width:'200px', 
   height: '200px', 
   borderWidth: 0, 
   sliceColors: ['#adadad', '#7BAEDA', '#F2BA68', '#8CD3E8', '#8DCD8D', '#ACACCF']
  }
 );
}

function morrisAreaChart(){
 Morris.Area({
  element: 'hero-area',
  data: [
   {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
   {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
   {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
   {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
   {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
   {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
   {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
   {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
   {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
   {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
  ],
  xkey: 'period',
  ykeys: ['iphone', 'ipad', 'itouch'],
  labels: ['iPhone', 'iPad', 'iPod Touch'],
  pointSize: 2,
  hideHover: 'auto',
  lineColors: ['#82A1D2', '#96CBA1', '#E4D08C', '#ACACCF']
 });
}

function morrisBarChart(){
 Morris.Bar({
  element: 'hero-bar',
  data: [
   {device: 'iPhone', geekbench: 136},
   {device: 'iPhone 3G', geekbench: 137},
   {device: 'iPhone 3GS', geekbench: 275},
   {device: 'iPhone 4', geekbench: 380},
   {device: 'iPhone 4S', geekbench: 655},
   {device: 'iPhone 5', geekbench: 1571}
  ],
  xkey: 'device',
  ykeys: ['geekbench'],
  labels: ['Geekbench'],
  barRatio: 0.4,
  xLabelAngle: 35,
  barColors: ['#82A1D2', '#96CBA1', '#E4D08C'],
  hideHover: 'auto'
 });
}

function morrisDonutChart(){
 Morris.Donut({
  element: 'hero-donut',
  data: [
   {label: 'BMW M3', value: 25 },
   {label: 'BMW M5', value: 40 },
   {label: 'BMW 328', value: 25 },
   {label: 'BMW Z4', value: 10 }
  ],
  colors: ['#82A1D2', '#96CBA1', '#E4D08C', '#8DBCDA'],
  formatter: function (y) { return y + "%" }
 });
}

function flotSelectionChart(){
 var data = [{
  label: "Volume", bars: { show: true, barWidth: 0.5 }, points: {show: false},
  data: [[0, 187654], [2, 252342], [4, 323456], [6, 34154], [8, 125550], [10, 425413]]
 }, {
  label: "Users", bars: { show: true, barWidth: 0.5 }, points: {show: false}, yaxis: 2,
  data: [[0.5, 13.4], [2.5, 12.2], [4.5, 10.6], [6.5, 87], [8.5, 41], [10.5, 38]]
 }, {
  label: "Normalization", lines: { show: true }, points: {show: true},  yaxis: 3,
  data: [[0.5, 50], [2.5, 55], [4.5, 48], [6.5, 41], [8.5, 57], [10.5, 37]]
 }];

 var options = { series: {},
  colors: [ '#E48784', '#7BAEDA', '#F2BA68'],
  legend: { noColumns: 2 },
  xaxis: { min:-0.5, max:11.5,
   ticks: [
    [ 0.5, "iPhone 3" ],
    [ 2.5, "iPhone 3GS" ], 
    [ 4.5, "iPhone 4" ],
    [ 6.5, "iPhone 4S" ], 
    [ 8.5, "iPhone 5" ],
    [ 10.5, "iPhone 5S" ]
   ]
  },
  yaxes: [{ min: 0 }, {position: "right", alignTicksWithAxis: 1 }, {show: false, min:0, max:100}],
  selection: { mode: "x" }
 };

 var placeholder = $("#placeholder");

 placeholder.bind("plotselected", function (event, ranges) {

  $("#selection").text(ranges.xaxis.from.toFixed(1) + " to " + ranges.xaxis.to.toFixed(1));
  var zoom = $("#zoom").attr("checked");

  if (zoom) {
   plot = $.plot(placeholder, data, $.extend(true, {}, options, {
    xaxis: {
     min: ranges.xaxis.from,
     max: ranges.xaxis.to
    }
   }));
  }
 });

 placeholder.bind("plotunselected", function (event) {
  $("#selection").text("");
 });

 var plot = $.plot(placeholder, data, options);
 plot.setSelection({ xaxis: { from: 3.5, to: 5.5 } });
 
}

function xMultChart(){
 var data = [{"xScale":"ordinal","comp":[],"main":[{"className":".main.l1","data":[{"y":15,"x":"2012-11-19T00:00:00"},{"y":11,"x":"2012-11-20T00:00:00"},{"y":8,"x":"2012-11-21T00:00:00"},{"y":10,"x":"2012-11-22T00:00:00"},{"y":1,"x":"2012-11-23T00:00:00"},{"y":6,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]},{"className":".main.l2","data":[{"y":29,"x":"2012-11-19T00:00:00"},{"y":33,"x":"2012-11-20T00:00:00"},{"y":13,"x":"2012-11-21T00:00:00"},{"y":16,"x":"2012-11-22T00:00:00"},{"y":7,"x":"2012-11-23T00:00:00"},{"y":18,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]}],"type":"line-dotted","yScale":"linear"},{"xScale":"ordinal","comp":[],"main":[{"className":".main.l1","data":[{"y":12,"x":"2012-11-19T00:00:00"},{"y":18,"x":"2012-11-20T00:00:00"},{"y":8,"x":"2012-11-21T00:00:00"},{"y":7,"x":"2012-11-22T00:00:00"},{"y":6,"x":"2012-11-23T00:00:00"},{"y":12,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]},{"className":".main.l2","data":[{"y":29,"x":"2012-11-19T00:00:00"},{"y":33,"x":"2012-11-20T00:00:00"},{"y":13,"x":"2012-11-21T00:00:00"},{"y":16,"x":"2012-11-22T00:00:00"},{"y":7,"x":"2012-11-23T00:00:00"},{"y":18,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]}],"type":"cumulative","yScale":"linear"},{"xScale":"ordinal","comp":[],"main":[{"className":".main.l1","data":[{"y":12,"x":"2012-11-19T00:00:00"},{"y":18,"x":"2012-11-20T00:00:00"},{"y":8,"x":"2012-11-21T00:00:00"},{"y":7,"x":"2012-11-22T00:00:00"},{"y":6,"x":"2012-11-23T00:00:00"},{"y":12,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]},{"className":".main.l2","data":[{"y":29,"x":"2012-11-19T00:00:00"},{"y":33,"x":"2012-11-20T00:00:00"},{"y":13,"x":"2012-11-21T00:00:00"},{"y":16,"x":"2012-11-22T00:00:00"},{"y":7,"x":"2012-11-23T00:00:00"},{"y":18,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]}],"type":"bar","yScale":"linear"}];
 var order = [0, 1, 0, 2], i = 0, xFormat = d3.time.format('%A'),
 chart = new xChart('line-dotted', data[order[i]], '#chart', {
 axisPaddingTop: 5,
 dataFormatX: function (x) {
   return new Date(x);
 },
 tickFormatX: function (x) {
   return xFormat(x);
 },
 timing: 1250
 }),
 rotateTimer,
 toggles = d3.selectAll('.multi button'),
 t = 3500;

 function updateChart(i) {
  var d = data[i];
  chart.setData(d);
  toggles.classed('toggled', function () {
   return (d3.select(this).attr('data-type') === d.type);
  });
  return d;
 }

 function rotateChart() {
   i += 1;
   i = (i >= order.length) ? 0 : i;
   var d = updateChart(order[i]);
   rotateTimer = setTimeout(rotateChart, t);
 }
 rotateTimer = setTimeout(rotateChart, t);
}

/* END charts.html EXAMPLE JS */
 