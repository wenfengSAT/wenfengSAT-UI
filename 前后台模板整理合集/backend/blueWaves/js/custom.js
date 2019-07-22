var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#666";
var $primary = "#575348";
var $secondary = "#8FBB6C";
var $orange = "#F38733";
var $yellow = "#fdd922";
var $green = "#2ecc71";

// SparkLine Bar
$(function () {
  $('#currentSale').sparkline([23213, 63216, 82234, 29341, 61789, 88732, 11234, 54328, 33245], {
    type: 'bar',
    barColor: [$green],
    barWidth: 6,
    height: 18,
  });

  $('#currentBalance').sparkline([33251, 98123, 54312, 88763, 12341, 55672, 87904, 23412, 17632], {
    type: 'bar',
    barColor: [$yellow],
    barWidth: 6,
    height: 18,
  });
  
});


// Header and Right side bar
$( document ).ready(function() {
        
  //Header Bar
  $('#show-header-bar').on('click', function(){
    if($('#show-header-bar').hasClass('open')){
      $('.header-bar').attr('style','top: -200px');
      $('#show-header-bar').removeClass('open')
    } else {
      $('.header-bar').attr('style','top: 98px');
      $('#show-header-bar').addClass('open')
    }
  });
});



//Timer for tiles info

var x = 3395, y=5578;

function incrementX() {
  x++;  
  document.getElementById('sales-x').innerHTML = x;
}
setInterval('incrementX()', 22000);

function incrementY() {
  y++;
  document.getElementById('income-y').innerHTML = y;
}
setInterval('incrementY()', 32000);


// Tooltip
$('a').tooltip('hide');