var $grid_color = "#eee";
var $bg_color = "#CBDBE4";

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

//Google Visualization 
google.load("visualization", "1", {
  packages: ["corechart"]
});

$(document).ready(function () {
  drawRegionsMap();
})

//Geo Charts
google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Visitors'],
    ['Germany', 1200],
    ['IN', 9200],
    ['United States', 2300],
    ['Brazil', 4200],
    ['Canada', 1500],
    ['France', 6200],
    ['RU', 2700]
    ]);

  var options = {
    width: 'auto',
    height: '275',
    backgroundColor: 'transparent',
    colors: [$success, $warning, $info, $yellow, $facebook, $gplus, $twitter, $linkedin],
  };

  var chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
  chart.draw(data, options);
};

//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    drawRegionsMap();
  });
});




// JQV Maps
$(document).ready(function () {
  drawChart1();
  drawChart2();
  drawChart3();
  drawChart4();
})

function drawChart1() {
  jQuery('#russia').vectorMap({
    map: 'russia_en',
    backgroundColor: $bg_color,
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#999999',
    enableZoom: true,
    showTooltip: true,
    values: sample_data,
    scaleColors: [$success, $warning, $info, $yellow, $facebook, $gplus, $twitter, $linkedin],
    normalizeFunction: 'polynomial'
  });
};


function drawChart2() {
  jQuery('#usa').vectorMap({
    map: 'usa_en',
    backgroundColor: $bg_color,
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#e9854f',
    enableZoom: true,
    showTooltip: true,
    selectedRegion: 'MO'
  });
};


function drawChart3() {
  jQuery('#world').vectorMap({
    map: 'world_en',
    backgroundColor: $bg_color,
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#e9854f',
    enableZoom: true,
    showTooltip: true,
    values: sample_data,
    scaleColors: [$success, $warning, $info, $yellow, $facebook, $gplus, $twitter, $linkedin],
    normalizeFunction: 'polynomial'
  });
};

function drawChart4() {
  jQuery('#germany').vectorMap({
    map: 'germany_en',
    backgroundColor: $bg_color,
    color: '#fff',
    hoverOpacity: 0.7,
    selectedColor: '#e9854f',
    onRegionClick: function(element, code, region){
    var message = 'You clicked "'
    + region 
    + '" which has the code: '
    + code.toUpperCase();
      alert(message);
    }
  });
};



//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    drawChart1();
    drawChart2();
    drawChart3();
    drawChart4();
  });
});
