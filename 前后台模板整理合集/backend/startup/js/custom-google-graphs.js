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

//Google Visualization 
google.load("visualization", "1", {
  packages: ["corechart"]
});

$(document).ready(function () {
  drawChart1();
  drawChart2();
  drawChart3();
  drawChart4();
  drawRegionsMap();
  drawTable();
  candlestick();
  bubbleChart();
})

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Google+', 'Facebook'],
    ['2005', 90, 30],
    ['2006', 180, 290],
    ['2007', 1050, 230],
    ['2008', 1390, 750],
    ['2009', 2120, 970],
    ['2010', 3270, 1960],
    ['2011', 2950, 2090],
    ['2012', 1790, 4440]
    ]);

  var options = {
    width: 'auto',
    pointSize: 7,
    lineWidth: 1,
    height: '200',
    backgroundColor: 'transparent',
    colors: [$primary_color, $ruby_red, $jet_blue, $go_green, $lemon_yellow, $nagpur_orange, $default_black],
    tooltip: {
      textStyle: {
        color: '#666666',
        fontSize: 11
      },
      showColorCode: true
    },
    legend: {
      textStyle: {
        color: 'black',
        fontSize: 12
      }
    },
    chartArea: {
      left: 40,
      top: 10,
      height: "80%"
    }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
  chart.draw(data, options);
}


function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Visitors', 'Sales'],
    ['Jan', 99, 27],
    ['Feb', 1200, 731],
    ['Mar', 20, 197],
    ['Apr', 1967, 1591],
    ['May', 39, 212],
    ['June', 210, 967],
    ['July', 61, 109],
    ['Aug', 1830, 2967],
    ['Sep', 120, 38],
    ['Oct', 2280, 1967],
    ['Nov', 10, 79],
    ['Dec', 1290, 1967],
    ]);

  var options = {
    width: 'auto',
    height: '160',
    backgroundColor: 'transparent',
    colors: [$go_green, $lemon_yellow, $ruby_red, $primary_color, $jet_blue, $nagpur_orange, $default_black],
    tooltip: {
      textStyle: {
        color: '#666666',
        fontSize: 11
      },
      showColorCode: true
    },
    legend: {
      textStyle: {
        color: 'black',
        fontSize: 12
      }
    },
    chartArea: {
      left: 100,
      top: 10
    },
    focusTarget: 'category',
    hAxis: {
      textStyle: {
        color: 'black',
        fontSize: 12
      }
    },
    vAxis: {
      textStyle: {
        color: 'black',
        fontSize: 12
      }
    },
    pointSize: 8,
    chartArea: {
      left: 60,
      top: 10,
      height: '80%'
    },
    lineWidth: 2,
  };

  var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
  chart.draw(data, options);
}


function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Visits', 'Orders', 'Income', 'Expenses'],
    ['2007', 300, 800, 900, 300],
    ['2008', 1170, 860, 1220, 564],
    ['2009', 260, 1120, 2870, 2340],
    ['2010', 1030, 540, 3430, 1200],
    ['2011', 200, 700, 1700, 770],
    ['2012', 1170, 2160, 3920, 800],
    ['2013', 2170, 1160, 2820, 500] ]);

  var options = {
    width: 'auto',
    height: '160',
    backgroundColor: 'transparent',
    colors: [$go_green, $ruby_red, $jet_blue, $primary_color, $lemon_yellow, $nagpur_orange, $default_grey],
    tooltip: {
      textStyle: {
        color: '#666666',
        fontSize: 11
      },
      showColorCode: true
    },
    legend: {
      textStyle: {
        color: 'black',
        fontSize: 12
      }
    },
    chartArea: {
      left: 60,
      top: 10,
      height: '80%'
    },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('column_chart'));
  chart.draw(data, options);
}

function drawChart4() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Eat', 2],
    ['Work', 9],
    ['Commute', 2],
    ['Read', 2],
    ['Sleep', 7],
    ['Play', 2],
    ]);

  var options = {
    width: 'auto',
    height: '265',
    backgroundColor: 'transparent',
    colors: [$jet_blue, $primary_color, $go_green, $ruby_red, $lemon_yellow, $nagpur_orange, $default_grey],
    tooltip: {
      textStyle: {
        color: '#666666',
        fontSize: 11
      },
      showColorCode: true
    },
    legend: {
      position: 'left',
      textStyle: {
        color: 'black',
        fontSize: 12
      }
    },
    chartArea: {
      left: 0,
      top: 10,
      width: "100%",
      height: "100%"
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
  chart.draw(data, options);
}

//Geo Charts
google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['IN', 900],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
    ]);

  var options = {
    width: 'auto',
    height: '280',
    backgroundColor: 'transparent',
    colors: [$primary_color, $jet_blue, $lemon_yellow, $nagpur_orange, $ruby_red, $go_green, $default_black],
  };

  var chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
  chart.draw(data, options);
};

//Table Charts
google.load('visualization', '1', {packages:['table']});
google.setOnLoadCallback(drawTable);
function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Salary');
  data.addColumn('boolean', 'Full Time Employee');
  data.addRows([
    ['Mike',  {v: 10000, f: '$10,000'}, true],
    ['Carry',   {v: 18000, f: '$18,000'},  false],
    ['Arjun', {v: 12500, f: '$12,500'}, false],
    ['Basava',   {v: 28000, f: '$17,000'}, true],
    ['Sandy',  {v: 10000, f: '$11,000'}, true]
    ]);

  var table = new google.visualization.Table(document.getElementById('table_chart'));
  table.draw(data, {showRowNumber: true});
}

//Candlestick Chart
function candlestick() {
  var data = google.visualization.arrayToDataTable([
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15]
    // Treat first row as data as well.
    ], true);

  var options = {
    legend: 'none',
    width: 'auto',
    height: '280',
    backgroundColor: 'transparent',
    colors: [$nagpur_orange, $primary_color, $jet_blue, $lemon_yellow, $ruby_red, $go_green, $default_black],
  };

  var chart = new google.visualization.CandlestickChart(document.getElementById('candlestick_chart'));
  chart.draw(data, options);
}

// google.setOnLoadCallback(drawVisualization);

//Bubble Chart

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(bubbleChart);
function bubbleChart() {
  var data = google.visualization.arrayToDataTable([
    ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
    ['CAN',    80.66,              1.67,      'North America',  33739900],
    ['DEU',    79.84,              1.36,      'Europe',         81902307],
    ['DNK',    78.6,               1.84,      'Europe',         5523095],
    ['SL',     72.73,              2.78,      'South Asia',    109716203],
    ['GBR',    80.05,              2,         'Europe',         61801570],
    ['IRN',    72.49,              1.7,       'Middle East',    73137148],
    ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
    ['ISR',    81.55,              2.96,      'Middle East',    7485600],
    ['RUS',    68.6,               1.54,      'Europe',         141850000],
    ['USA',    78.09,              2.05,      'North America',  307007000]
    ]);

  var options = {
    title: 'Correlation between life expectancy, fertility rate and population of some world countries (2012)',
    hAxis: {title: 'Life Expectancy'},
    vAxis: {title: 'Fertility Rate'},
    colors: [$ruby_red, $go_green, $primary_color, $jet_blue, $lemon_yellow, $nagpur_orange,$default_black],
    fontSize: 11,
    bubble: {textStyle: {fontSize: 11}}
  };

  var chart = new google.visualization.BubbleChart(document.getElementById('bubble_chart'));
  chart.draw(data, options);
}

//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    drawChart1();
    drawChart2();
    drawChart3();
    drawChart4();
    drawTable();
    bubbleChart();
    drawRegionsMap();
    candlestick()
  });
});
