conAngular.controller('DashboardV1Controller', function($rootScope, $scope, $http, $timeout) {

  /* Inspired by Lee Byron's test data generator. */
  function stream_layers(n, m, o) {
    if (arguments.length < 3) o = 0;
    function bump(a) {
      var x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
      for (var i = 0; i < m; i++) {
        var w = (i / m - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    }
    return d3.range(n).map(function() {
        var a = [], i;
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        for (i = 0; i < 5; i++) bump(a);
        return a.map(stream_index);
      });
  }
  function stream_index(d, i) {
    return {x: i, y: Math.max(0, d)};
  }
  //Generate some nice data.
  function exampleData() {
    return stream_layers(2,30,50).map(function(data, i) {
      return {
        key: i?'Visitors':'New Posts',
        values: data
      };
    });
  }


  /*
   * Stacked Bar Chart
   */
  $scope.chart1opts = {
    chart: {
      type: 'multiBarChart',
      color: ["#64B5F6","#42A5F5"],
      margin: {left: 20, bottom: 20, right: 20},
      reduceXTicks: true,
      rotateLabels: 0,
      showControls: true,
      groupSpacing: 0.1,

      xAxis: {
        tickFormat: d3.format(',f')
      },

      yAxis: {
        tickFormat: d3.format(',.1f')
      }
    }
  };
  $scope.chart1data = exampleData();



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
      height: 350,
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
   * Pie Chart
   */
  $scope.chart3opts = {
    chart: {
      type: 'pieChart',
      color: ["#E27272","#64B5F6", "#FFD83C", "#81C784"],
      height: 350,
      x: function(d) { return d.label },
      y: function(d) { return d.value },
      showLabels: true,
      labelThreshold: .05,
      labelType: "percent",
      donutRatio: 0.35
    }
  };
  $scope.chart3data = [
    { 
      "label": "India",
      "value" : 29.765957771107
    } , 
    { 
      "label": "USA",
      "value" : 13.4783623743534
    } , 
    { 
      "label": "Russia",
      "value" : 32.807804682612
    } , 
    { 
      "label": "Turkey",
      "value" : 56.45946739256
    }
  ];
});