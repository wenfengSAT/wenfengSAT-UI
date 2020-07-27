// chart colors
  var $border_color = "#efefef";
  var $grid_color = "#ddd";
  var $default_black = "#666";
  var $default_grey = "#ccc";
  var $primary_color = "#428bca"
  var $go_green = "#93caa3";
  var $jet_blue = "#70aacf";
  var $lemon_yellow = "#ffe38a";
  var $nagpur_orange = "#fc965f";
  var $ruby_red = "#fa9c9b";


//NVD3 Charts
// Discrete Bar Chart
historicalBarChart = [ 
  {
    key: "Cumulative Return",
    values: [
      { 
        "label" : "A" ,
        "value" : 32
      } , 
      { 
        "label" : "B" , 
        "value" : 9
      } , 
      { 
        "label" : "C" , 
        "value" : 44
      } , 
      { 
        "label" : "D" , 
        "value" : 196
      } , 
      { 
        "label" : "E" ,
        "value" : 21
      } , 
      { 
        "label" : "F" , 
        "value" : 98
      } , 
      { 
        "label" : "G" , 
        "value" : 13
      } , 
      { 
        "label" : "H" , 
        "value" : 5
      } , 
      { 
        "label" : "I" , 
        "value" : 124
      } , 
      { 
        "label" : "J" , 
        "value" : 16
      } , 
      { 
        "label" : "K" ,
        "value" : 221
      } , 
      { 
        "label" : "L" , 
        "value" : 98
      } , 
      { 
        "label" : "M" , 
        "value" : 113
      } , 
      { 
        "label" : "N" , 
        "value" : 59
      } , 
      { 
        "label" : "O" , 
        "value" : 140
      } , 
      { 
        "label" : "P" , 
        "value" : 190
      } , 
      { 
        "label" : "Q" ,
        "value" : 329
      } , 
      { 
        "label" : "R" , 
        "value" : 48
      } , 
      { 
        "label" : "S" , 
        "value" : 239
      } , 
      { 
        "label" : "T" , 
        "value" : 182
      } , 
      { 
        "label" : "U" , 
        "value" : 140
      } , 
      { 
        "label" : "V" , 
        "value" : 149
      } , 
      { 
        "label" : "W" ,
        "value" : 19
      } , 
      { 
        "label" : "X" , 
        "value" : 482
      } , 
      { 
        "label" : "Y" , 
        "value" : 119
      } , 
      { 
        "label" : "Z" , 
        "value" : 280
      }
    ]
  }
];

nv.addGraph(function() {  
  var chart = nv.models.discreteBarChart()
  .x(function(d) { return d.label })
  .y(function(d) { return d.value })
  .staggerLabels(true)
  //.staggerLabels(historicalBarChart[0].values.length > 8)
  .tooltips(false)
  .showValues(true)

  d3.select('#discrete_bar_chart svg')
  .datum(historicalBarChart)
  .transition().duration(500)
  .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});


// Flot Charts

$(function socialCatigories() {

  var data = [ ["2001", 3393], ["2002", 1198], ["2003", 252], ["2004", 2510], ["2005", 3993], ["2006", 1898], ["2007", 3252], ["2008", 710], ["2009", 998], ["2010", 1452], ["2011", 1913], ["2012", 3175], ["2013", 6449] ];

  $.plot("#social-catigories", [ data], {
    series: {
      bars: {
        show: true,
        lineWidth: 1,
        fill: true,
        barWidth: 0.5,
        fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.1 } ] }
      }
    },
    grid: { hoverable: true, 
      clickable: true, 
      tickColor: $border_color,
      borderWidth: 0
    },
    colors: [$primary_color, $go_green, $nagpur_orange, $jet_blue, $lemon_yellow, $ruby_red, $default_black],
    xaxis: {
      mode: "categories",
      tickLength: 0
    },
    yaxis: {ticks:7, tickDecimals: 0},
  });

  // Add the Flot version string to the footer

  $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});


//Pie Charts
$(function pieCharts() {
  
  var data = [
    { label: "Feed",  data: 15},
    { label: "Organic",  data: 40},
    { label: "Referral",  data: 15},
    { label: "Direct",  data: 20},
    { label: "Email",  data: 10}
  ];

  if($("#piechart").length){
    $.plot($("#piechart"), data,{
      series: {
        pie: {
          show: true
        }
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      legend: {
        show: false
      },
      colors: [$jet_blue, $lemon_yellow, $nagpur_orange, $ruby_red, $go_green, $default_black],
    });
  }

  if($("#donutchart").length){
    $.plot($("#donutchart"), data,{
      series: {
        pie: {
          innerRadius: 0.5,
          show: true
        }
      },
      legend: {
        show: false
      },
      colors: [$go_green, $ruby_red, $nagpur_orange, $jet_blue, $lemon_yellow, $default_black],
    });
  }

  if($("#piechart-1").length){
    $.plot('#piechart-1', data, {
      series: {
        pie: {
          show: true,
          radius: 3/4,
          label: {
            show: true,
            radius: 1,
            formatter: function(label, series){
              return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
            },
            background: {
              opacity: 0.8,
            },
          }
        }
      },
      legend: {
        show: false
      },
      colors: [$go_green, $lemon_yellow, $default_black, $nagpur_orange, $jet_blue, $ruby_red],
    });
  }

});
