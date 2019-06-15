conAngular.controller('ChartFlotController', function($rootScope, $scope, $http, $timeout, $interval) {

  // Chart 1
  $scope.flot1data = [{
      data: [[1, 50], [2, 40], [3, 45], [4, 23],[5, 55],[6, 65],[7, 61],[8, 70],[9, 65],[10, 75],[11, 57],[12, 59]],
      label: "Mails"
    }, {
      data: [[1, 25], [2, 50], [3, 23], [4, 48],[5, 38],[6, 40],[7, 47],[8, 55],[9, 43],[10,50],[11,47],[12, 39]],
      label: "SMS"
    }];
  $scope.flot1opts = {
    series: {
      lines: {
        show: true,
        lineWidth: 1,
        fill: true, 
        fillColor: { colors: [ { opacity: 0.1 }, { opacity: 0.13 } ] }
      },
      points: {
        show: true, 
        lineWidth: 2,
        radius: 3
      },
      shadowSize: 0,
      stack: true
    },
    grid: {
      hoverable: true, 
      clickable: true, 
      tickColor: "#f9f9f9",
      borderWidth: 0
    },
    legend: {
      // show: false
      backgroundOpacity: 0,
      labelBoxBorderColor: "#fff"
    },  
    colors: ["#3f51b5", "#009688"],
    xaxis: {
      ticks: [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4,"Apr"], [5,"May"], [6,"Jun"], 
                 [7,"Jul"], [8,"Aug"], [9,"Sep"], [10,"Oct"], [11,"Nov"], [12,"Dec"]],
      font: {
        family: "Roboto,sans-serif",
        color: "#ccc"
      }
    },
    yaxis: {
      ticks:7, 
      tickDecimals: 0,
      font: {color: "#ccc"}
    },

    conTooltip: function(chart) {
      function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css( {
          position: 'absolute',
          display: 'none',
          top: y - 40,
          left: x - 55,
          color: "#fff",
          padding: '5px 10px',
          'border-radius': '3px',
          'background-color': 'rgba(0,0,0,0.6)'
        }).appendTo("body").fadeIn(200);
      }

      var previousPoint = null;
      chart.bind("plothover.conApp", function (event, pos, item) {
        if (item) {
          if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;

            $("#tooltip").remove();
            var x = item.datapoint[0].toFixed(0),
                y = item.datapoint[1].toFixed(0);

            var month = item.series.xaxis.ticks[item.dataIndex].label;

            showTooltip(item.pageX, item.pageY,
                        item.series.label + " of " + month + ": " + y);
          }
        }
        else {
          $("#tooltip").remove();
          previousPoint = null;
        }
      });
    }
  };



  // Chart 2
  $scope.flot2data = [
    { label: "IE",  data: 19.5, color: "#90a4ae"},
    { label: "Safari",  data: 4.5, color: "#7986cb"},
    { label: "Firefox",  data: 36.6, color: "#9575cd"},
    { label: "Opera",  data: 2.3, color: "#4db6ac"},
    { label: "Chrome",  data: 36.3, color: "#64b5f6"}
  ];
  $scope.flot2opts = {
    series: {
      pie: {
        innerRadius: 0.5,
        show: true
      }
    },
    grid: {
      hoverable: true
    },
    legend: {
      backgroundOpacity: 0,
      labelBoxBorderColor: "none"
    },
    tooltip: true,
    tooltipOpts: {
      content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
      shifts: {
        x: 20,
        y: 0
      },
      defaultTheme: false
    }
  };



  // Chart 3
  var data = [];
  var totalPoints = 300;
  function getRandomData() {
    if (data.length > 0) {
      data = data.slice(1);
    }

    // Do a random walk
    while (data.length < totalPoints) {
      var prev = data.length > 0 ? data[data.length - 1] : 50;
      var y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }
      data.push(y);
    }

    // Zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
      res.push([i, data[i]])
    }
    return res;
  }
  $scope.flot3opts = {
    colors: ['#3f51b5', '#3f51b5'],
    series: {
      shadowSize: 0,
      lines: {
        show: true,
        lineWidth: 1,
        fill: true
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      show: false,
      font: {color: '#ccc'}
    },
    yaxis: {
      min: 0,
      max: 100,
      font: {color: '#ccc'}
    },
    grid: {
      borderWidth: 0,
      color: '#ccc',
      hoverable: true
    }
  };

  // random data
  $scope.flot3data = [getRandomData()];
  $interval(function() {
    $scope.flot3data = [getRandomData()];
  }, 30);

});