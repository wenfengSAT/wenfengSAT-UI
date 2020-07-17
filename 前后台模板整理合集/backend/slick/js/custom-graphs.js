var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#666";
var $green = "#8ecf67";
var $yellow = "#fac567";
var $orange = "#F08C56";
var $blue = "#87ceeb";
var $red = "#f74e4d";
var $teal = "#28D8CA";
var $grey = "#999999";


//Google Visualization 
google.load("visualization", "1", {
  packages: ["corechart"]
});

$(document).ready(function () {
  drawChart1();
  drawChart2();
  drawChart3();
  drawChart4()
  drawTable();
  candlestick();
  bubbleChart();
})

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Male', 'Female'],
    ['2005', 10, 30],
    ['2006', 180, 490],
    ['2007', 780, 2630],
    ['2008', 1390, 750],
    ['2009', 2120, 970],
    ['2010', 3270, 1960],
    ['2011', 2950, 2090],
    ['2012', 2190, 4440],
    ['2013', 1320, 2440]
    ]);

  var options = {
    width: 'auto',
    pointSize: 7,
    lineWidth: 1,
    height: '200',
    backgroundColor: 'transparent',
    colors: [$orange, $blue, $red, $green, $teal, $yellow, $default_black],
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
    ['x', 'Sales', 'Income', 'Expenses'],
    ['A',   1,       1,           0.5],
    ['B',   2,       0.5,         1],
    ['C',   4,       1,           0.5],
    ['D',   8,       0.5,         1],
    ['E',   7,       1,           0.5],
    ['F',   7,       0.5,         1],
    ['G',   8,       1,           0.5],
    ['H',   4,       0.5,         1],
    ['I',   2,       1,           0.5],
    ['J',   3.5,     0.5,         1],
    ['K',   3,       1,           0.5],
    ['L',   3.5,     0.5,         1],
    ['M',   1,       1,           0.5],
    ['N',   1,       0.5,         1]
  ]);

  var options = {
    width: 'auto',
    height: '160',
    backgroundColor: 'transparent',
    colors: [$green, $red, $teal, $yellow,  $blue, $orange, $default_black],
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
    colors: [$green, $red, $blue, $teal, $yellow, $orange, $grey],
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
    ['Eat', 4],
    ['Work', 3],
    ['Commute', 5],
    ['Read', 3],
    ['Sleep', 6],
    ['Play', 2],
    ]);

  var options = {
    width: 'auto',
    height: '160',
    backgroundColor: 'transparent',
    colors: [$blue, $teal, $green, $red, $yellow, $orange, $grey],
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
    ['Johnny',  {v: 10000, f: '$11,000'}, true]
    ]);

  var table = new google.visualization.Table(document.getElementById('table_chart'));
  table.draw(data, {showRowNumber: true});
}

//Candlestick Chart
function candlestick() {
  var data = google.visualization.arrayToDataTable([
    ['GOOG', 90, 100, 110, 120],
    ['MSFT', 70, 80, 90, 100],
    ['ORCL', 50, 60, 70, 80],
    ['AAPL', 20, 30, 40, 50],
    ['IBM',  15, 45, 35, 55],
    ['INTC', 10, 20, 30, 40]
    // Treat first row as data as well.
    ], true);

  var options = {
    legend: 'none',
    width: 'auto',
    height: '220',
    backgroundColor: 'transparent',
    colors: [$orange, $teal, $blue, $yellow, $red, $green, $default_black],
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
    colors: [$red, $green, $teal, $blue, $yellow, $orange,$default_black],
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
    candlestick()
  });
});
