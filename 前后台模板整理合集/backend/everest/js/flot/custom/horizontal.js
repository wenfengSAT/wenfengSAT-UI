var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";

var $info = "#5B90BF";
var $danger = "#D66061";
var $warning = "#ffaa3a";
var $success = "#76BBAD";
var $yellow = "#ffee00";
var $facebook = "#4c66a4";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";
var $brown = "#ab7967";
  
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
      fillColor: { colors: [ { opacity: 0.9 }, { opacity: 0.6 } ] }
    },
  
  tooltip: true,

  tooltipOpts: {
    content: '%s: %x'
  },
    colors: [$success, $info, $danger],
  }

  var holder = $('#horizontal-chart');

  if (holder.length) {
      $.plot(holder, data, chartOptions );
  }

});