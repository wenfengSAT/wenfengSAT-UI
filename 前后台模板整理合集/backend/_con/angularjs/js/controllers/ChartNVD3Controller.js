conAngular.controller('ChartNVD3Controller', function($rootScope, $scope, $http, $timeout) {

  function sinAndCos() {
    var sin = [],sin2 = [],
        cos = [];

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
      sin.push({x: i, y: Math.sin(i/10)});
      sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
      cos.push({x: i, y: .5 * Math.cos(i/10)});
    }

    //Line chart data should be sent as an array of series objects.
    return [
      {
        values: sin,      //values - represents the array of {x,y} data points
        key: 'Sine Wave', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      },
      {
        values: cos,
        key: 'Cosine Wave',
        color: '#2ca02c'
      },
      {
        values: sin2,
        key: 'Another sine wave',
        color: '#7777ff',
        area: true      //area - set to true if you want this line to turn into a filled area chart.
      }
    ];
  }


  /*
   * Line Chart
   */
  $scope.chart1opts = {
    chart: {
      type: 'lineChart',
      height: 300,
      margin: {right: 10},
      height: 300,
      useInteractiveGuideline: true,
      showLegend: true,
      showYAxis: true,
      showXAxis: true,

      xAxis: {
        axisLabel: 'Time (ms)',
        tickFormat: d3.format(',r')
      },

      yAxis: {
        axisLabel: 'Voltage (v)',
        tickFormat: d3.format('.02f')
      }
    }
  };
  $scope.chart1data = sinAndCos();



  /*
   * Stacked Area Chart
   */
  /*Data sample:
  { 
        "key" : "North America" , 
        "values" : [ [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832],
         [ 1030766400000 , 21.02286281168], 
         [ 1033358400000 , 22.093608385173],
         [ 1036040400000 , 25.108079299458],
         [ 1038632400000 , 26.982389242348]
         ...

  */
  $scope.chart2opts = {
    chart: {
      type: 'stackedAreaChart',
      color: ["#E27272","#64B5F6", "#FFD83C", "#81C784"],
      margin: {bottom: 20, right: 40, left: 40},
      height: 300,
      x: function(d) { return d[0] },
      y: function(d) { return d[1] },
      useInteractiveGuideline: true,
      rightAlignYAxis: true,
      showControls: true,
      clipEdge: true,

      xAxis: {
        tickFormat: function(d) { 
          return d3.time.format('%x')(new Date(d)) 
        }
      },

      yAxis: {
        tickFormat: d3.format(',.2f')
      }
    }
  };
  $http.get('../assets/nvd3/stackedAreaData.json').success(function(response) {
    $scope.chart2data = response;
  });



  /*
   * Discrete Bar Chart
   */
  $scope.chart3opts = {
    chart: {
      type: 'discreteBarChart',
      height: 300,
      margin: {right: 10, left: 40},
      x: function(d) { return d.label },
      y: function(d) { return d.value },
      staggerLabels: true,
      tooltips: false,
      showValues: true
    }
  };
  $scope.chart3data = [ 
    {
      key: "Cumulative Return",
      values: [
        { 
          "label" : "A Label" ,
          "value" : -29.765957771107
        } , 
        { 
          "label" : "B Label" , 
          "value" : 0
        } , 
        { 
          "label" : "C Label" , 
          "value" : 32.807804682612
        } , 
        { 
          "label" : "D Label" , 
          "value" : 196.45946739256
        } , 
        { 
          "label" : "E Label" ,
          "value" : 0.19434030906893
        } , 
        { 
          "label" : "F Label" , 
          "value" : -98.079782601442
        } , 
        { 
          "label" : "G Label" , 
          "value" : -13.925743130903
        } , 
        { 
          "label" : "H Label" , 
          "value" : -5.1387322875705
        }
      ]
    }
  ];



  /*
   * Pie Chart
   */
  $scope.chart4opts = {
    chart: {
      type: 'pieChart',
      color: ["#E27272","#64B5F6", "#FFD83C", "#81C784"],
      height: 300,
      x: function(d) { return d.label },
      y: function(d) { return d.value },
      showLabels: true,
      labelThreshold: .05,
      labelType: "percent",
      donutRatio: 0.35
    }
  };
  $scope.chart4data = [
    { 
      "label": "One",
      "value" : 29.765957771107
    } , 
    { 
      "label": "Two",
      "value" : 0
    } , 
    { 
      "label": "Three",
      "value" : 32.807804682612
    } , 
    { 
      "label": "Four",
      "value" : 196.45946739256
    } , 
    { 
      "label": "Five",
      "value" : 0.19434030906893
    } , 
    { 
      "label": "Six",
      "value" : 98.079782601442
    } , 
    { 
      "label": "Seven",
      "value" : 13.925743130903
    } , 
    { 
      "label": "Eight",
      "value" : 5.1387322875705
    }
  ];
});