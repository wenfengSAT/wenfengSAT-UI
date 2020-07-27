// chart colors
var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#666";
var $default_grey = "#ccc";
var $primary_color = "#428bca";
var $go_green = "#93caa3";
var $jet_blue = "#70aacf";
var $lemon_yellow = "#ffe38a";
var $nagpur_orange = "#fc965f";
var $ruby_red = "#fa9c9b";


$(document).ready(function () {
  sparklineGraphs();
});


// Sparkline
function sparklineGraphs() {

  // SparkLine Line Graphs
  $(function () {
    $('#unique-visitors').sparkline('html', {
      type: 'line',
      fillColor: '#f9f9f9',
      lineColor: '#860e1c',
      height: 20,
    });
    $('#monthly-sales').sparkline('html', {
      type: 'line',
      fillColor: '#f9f9f9',
      lineColor: '#3eb157',
      height: 20,
    });
    $('#current-balance').sparkline('html', {
      type: 'line',
      fillColor: '#f9f9f9',
      lineColor: '#9564e2',
      height: 20,
    });
    $('#registrations').sparkline('html', {
      type: 'line',
      fillColor: '#f9f9f9',
      lineColor: '#3660aa',
      height: 20,
    });
    $('#site-visits').sparkline('html', {
      type: 'line',
      fillColor: '#f9f9f9',
      lineColor: '#333333',
      height: 20,
    });

    // SparkLine Bar Graphs
    $('#ax').sparkline('html', {
      type: 'bar',
      barColor: '#f26645',
      barWidth: 5,
      height: 20,
    });
    $('#cx').sparkline('html', {
      type: 'bar',
      barColor: '#3eb157',
      barWidth: 5,
      height: 20,
    });
    $('#bx').sparkline('html', {
      type: 'bar',
      barColor: '#dba26b',
      barWidth: 5,
      height: 20,
    });
    $('#ex').sparkline('html', {
      type: 'bar',
      barColor: '#3660aa',
      barWidth: 5,
      height: 20,
    });
    $('#dx').sparkline('html', {
      type: 'bar',
      barColor: '#d14836',
      barWidth: 5,
      height: 20,
    });
    

    // SparkLine Pie Charts
    $("#spark_1").sparkline([1,1,4 ], {
      type: 'pie',
      sliceColors: [$primary_color, $ruby_red, $jet_blue, $go_green, $lemon_yellow, $nagpur_orange, $default_black],
    });

    $("#spark_2").sparkline([2,3,2 ], {
      type: 'pie',
      sliceColors: [$primary_color, $ruby_red, $default_grey, $jet_blue, $nagpur_orange, $go_green, $lemon_yellow ],
    });

    $("#spark_3").sparkline([3,1,4 ], {
      type: 'pie',
      sliceColors: [$go_green, $lemon_yellow, $ruby_red, $primary_color, $jet_blue, $nagpur_orange, $default_black],
    });

    $("#spark_4").sparkline([4,1,1 ], {
      type: 'pie',
      sliceColors: [$primary_color, $lemon_yellow, $jet_blue, $nagpur_orange, $default_grey, $ruby_red, $go_green],
    });

    $("#spark_5").sparkline([2,3,4 ], {
      type: 'pie',
      sliceColors: [$go_green, $jet_blue, $lemon_yellow, $default_grey, $primary_color, $ruby_red, $nagpur_orange],
    });

    $("#spark_6").sparkline([5,1,1,3,7], {
      type: 'pie',
      sliceColors: [$go_green, $ruby_red, $jet_blue, $primary_color, $lemon_yellow, $nagpur_orange, $default_grey],
      width: '136px ',
      height: '136px'
    });
  });

}

//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    sparklineGraphs();
  });
});

jQuery('.delete-row').click(function () {
  var conf = confirm('Continue delete?');
  if (conf) jQuery(this).parents('tr').fadeOut(function () {
    jQuery(this).remove();
  });
    return false;
});