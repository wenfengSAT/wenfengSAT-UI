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



// Flot Charts
var updateInterval = 60;

$("#updateInterval").val(updateInterval).change(function () {
  var v = $(this).val();
  if (v && !isNaN(+v)) {
    updateInterval = +v;
    if (updateInterval < 1)
      updateInterval = 1;
    if (updateInterval > 2000)
      updateInterval = 2000;
    $(this).val("" + updateInterval);
  }
});

var data = [], totalPoints = 200;
function getRandomData() {
  if (data.length > 0)
    data = data.slice(1);

  // do a random walk
  while (data.length < totalPoints) {
    var prev = data.length > 0 ? data[data.length - 1] : 90;
    var y = prev + Math.random() * 10 - 5;
    if (y < 0)
      y = 0;
    if (y > 100)
      y = 100;
    data.push(y);
  }

  // zip the generated y values with the x values
  var res = [];
  for (var i = 0; i < data.length; ++i)
    res.push([i, data[i]])
  return res;
}

if($("#serverLoad").length){
  var options = {
    series: { shadowSize: 1 },
    lines: { show: true, lineWidth: 3, fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.5 } ] }},
    yaxis: { min: 0, max: 200, tickFormatter: function (v) { return v + "%"; }},
    xaxis: { show: false },
    colors: [$primary_color],
    grid: { tickColor: $border_color,
      borderWidth: 0, 
    },
  };
  var plot = $.plot($("#serverLoad"), [ getRandomData() ], options);
  function update() {
    plot.setData([ getRandomData() ]);
    // since the axes don't change, we don't need to call plot.setupGrid()
    plot.draw();
    setTimeout(update, updateInterval);
  }
  update();
}

if($("#realtimechart").length){
  var options = {
    series: { shadowSize: 1 },
    lines: { lineWidth: 1, fill: true, fillColor: { colors: [ { opacity: 1 }, { opacity: 0.1 } ] }},
    yaxis: { min: 0, max: 200 },
    xaxis: { show: false },
    colors: [$primary_color],
    grid: { 
      tickColor: $border_color,
      borderWidth: 0 
    }
  };
  var plot = $.plot($("#realtimechart"), [ getRandomData() ], options);
  function update() {
    plot.setData([ getRandomData() ]);
    // since the axes don't change, we don't need to call plot.setupGrid()
    plot.draw();
    setTimeout(update, updateInterval);
  }
  update();
}

//Section Charts
$(function sectionCharts() {

  var data = [{
    label: "Facebook",
    data: [[1990, 11], [1991, 67], [1992, 92], [1993, 129], [1994, 215], [1995, 311], [1996, 187], [1997, 513], [1998, 19], [1999, 251], [2000, 767], [2001, 1152], [2002, 1029], [2003, 1315], [2004, 2711], [2005, 1487], [2006, 2913], [2007, 2119], [2008, 2926], [2009, 2729], [2010, 3533], [2011, 4137], [2012, 4242], [2013, 5757]]
  },{
    label: "Twitter",
    data: [[1999, 51], [2000, 367], [2001, 152], [2002, 1029], [2003, 415], [2004, 711], [2005, 1487], [2006, 813], [2007, 919], [2008, 1926], [2009, 1729], [2010, 1533], [2011, 2037], [2012, 2242], [2013, 4757]]
  }];

  var options = {
    series: {
      lines: { show: true,
        lineWidth: 2,
        fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
        },
      points: { show: true, 
        lineWidth: 2 
        },
      shadowSize: 0
    },
    grid: { hoverable: true, 
      clickable: true, 
      tickColor: $border_color,
      borderWidth: 0
    },
    legend: {
      noColumns: 2
    },
    colors: [$primary_color, $ruby_red],
     xaxis: {ticks:12, tickDecimals: 0},
     yaxis: {ticks:7, tickDecimals: 0},
    selection: {
      mode: "x"
    }
  };

  var placeholder = $("#section-chart");

  placeholder.bind("plotselected", function (event, ranges) {

    $("#selection").text(ranges.xaxis.from.toFixed(1) + " to " + ranges.xaxis.to.toFixed(1));

    var zoom = $("#zoom").attr("checked");

    if (zoom) {
      plot = $.plot(placeholder, data, $.extend(true, {}, options, {
        xaxis: {
          min: ranges.xaxis.from,
          max: ranges.xaxis.to
        }
      }));
    }
  });

  placeholder.bind("plotunselected", function (event) {
    $("#selection").text("");
  });

  var plot = $.plot(placeholder, data, options);

  $("#clearSelection").click(function () {
    plot.clearSelection();
  });

  $("#setSelection").click(function () {
    plot.setSelection({
      xaxis: {
        from: 1994,
        to: 1995
      }
    });
  });

  // Add the Flot version string to the footer

  $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});


$(function socialCatigories() {

  var data = [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9], ["July", 21], ["August", 3], ["September", 27], ["October", 14], ["November", 9], ["December", 11] ];

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
    colors: [$nagpur_orange, $primary_color, $jet_blue, $lemon_yellow, $ruby_red, $go_green, $default_black],
    xaxis: {
      mode: "categories",
      tickLength: 0
    }
  });

  // Add the Flot version string to the footer

  $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});

$(function pieCharts() {
  //Pie Chart
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
      colors: [$ruby_red, $go_green, $nagpur_orange, $jet_blue, $lemon_yellow, $default_black],
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
      colors: [$nagpur_orange, $jet_blue, $ruby_red, $go_green, $lemon_yellow, $default_black],
    });
  }

});




