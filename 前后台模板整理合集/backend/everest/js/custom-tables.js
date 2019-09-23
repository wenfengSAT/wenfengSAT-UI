var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#666";
var $red = "#eb4343";
var $blue = "#5da4cd";
var $green = "#abd14f";
var $yellow = "#ffaa3a";
var $yellow_one = "#FFF844";
var $grey = "#999999";
var $blue_one = "#74b1d4";
var $blue_two = "#84bad9";
var $blue_three = "#9bc7e0";
var $blue_four = "#afd2e6";
var $blue_five = "#badff2";


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

  // Pie charts
  $(function () {

    $("#spark_1").sparkline([1,1,4 ], {
      type: 'pie',
      sliceColors: [$blue, $green, $yellow],
    });

    $("#spark_2").sparkline([2,3,2 ], {
      type: 'pie',
      sliceColors: [$blue, $green, $yellow],
    });

    $("#spark_3").sparkline([3,1,4 ], {
      type: 'pie',
      sliceColors: [$blue, $green, $yellow],
    });

    $("#spark_4").sparkline([5,1,2,1 ], {
      type: 'pie',
      sliceColors: [$blue, $green, $yellow, $blue_two],
    });

    $("#spark_5").sparkline([3,3,4,2 ], {
      type: 'pie',
      sliceColors: [$blue, $green, $yellow, $blue_five],
    });

    $("#spark_6").sparkline([5,1,1,3,7], {
      type: 'pie',
      sliceColors: [$blue_one, $blue_two, $blue_three, $blue_four, $blue_five],
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