var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $dark_blue = "#005387";
var $info = "#87CEEB";
var $danger = "#F56B6B";
var $warning = "#F38733";
var $success = "#2ecc71";
var $yellow = "#fdd922";
var $facebook = "#3b5999";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";
  
$(function () {

  var ds=[], data, chartOptions;

  ds.push ([[1700, 1],[3400, 2],[2300, 3],[4500, 4],[6300, 5]]);
  ds.push ([[1300, 1],[1200, 2],[2900, 3],[2300, 4],[4500, 5]]);
  ds.push ([[800, 1],[1900, 2],[1200, 3],[2100, 4],[3800, 5]]);

  data = [ {
    label: 'Foursquare',
    data: ds[1]
  }, {
    label: 'Twitter',
    data: ds[0]
  }, {
    label: 'Google plus',
    data: ds[2]
  }];

  chartOptions = {
    xaxis: {
        
    },
    grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
      tickColor: $border_color,
      borderColor: $grid_color,
    },
    shadowSize: 0,
    bars: {
    horizontal: true,
    show: true,
    barWidth: 8*24*60*60*300,
    barWidth: .2,
    fill: true,
    lineWidth: 1,
    order: true,
    lineWidth: 0,
    fillColor: { colors: [ { opacity: 1 }, { opacity: 1 } ] }
  },
  
  tooltip: true,

  tooltipOpts: {
    content: '%s: %x'
  },
    colors: [$dark_blue, $warning, $danger, $info, $facebook, $gplus, $yellow],
  }

  var holder = $('#horizontal-chart');

  if (holder.length) {
      $.plot(holder, data, chartOptions );
  }

});