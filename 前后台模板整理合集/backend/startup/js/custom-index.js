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

/*

  Table of Contents

  - SparkLine graphs
  - Flot charts

*/

$(document).ready(function () {
  sparklineGraphs();
  setupFlots();
});

// Sparkline
function sparklineGraphs() {

  // Pie charts
  $(function () {

    $("#spark_1").sparkline([1,1,4 ], {
      type: 'pie',
      sliceColors: [$primary_color, $ruby_red, $jet_blue, $go_green, $lemon_yellow, $nagpur_orange, $default_black],
    });

    $("#spark_2").sparkline([2,3,2 ], {
      type: 'pie',
      sliceColors: [$primary_color, $ruby_red, $default_grey, $jet_blue, $nagpur_orange, $go_green, $lemon_yellow ],
    });

    $("#spark_3").sparkline([3,1,4 ], {
      type: 'pie',
      sliceColors: [$go_green, $lemon_yellow, $ruby_red, $primary_color, $jet_blue, $nagpur_orange, $default_black],
    });

    $("#spark_4").sparkline([4,1,1 ], {
      type: 'pie',
      sliceColors: [$primary_color, $lemon_yellow, $jet_blue, $nagpur_orange, $default_grey, $ruby_red, $go_green],
    });

    $("#spark_5").sparkline([2,3,4 ], {
      type: 'pie',
      sliceColors: [$go_green, $jet_blue, $lemon_yellow, $default_grey, $primary_color, $ruby_red, $nagpur_orange],
    });

    $("#spark_6").sparkline([5,1,1,3,7], {
      type: 'pie',
      sliceColors: [$go_green, $ruby_red, $jet_blue, $primary_color, $lemon_yellow, $nagpur_orange, $default_grey],
      width: '136px ',
      height: '136px'
    });
  });

}


//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    sparklineGraphs();
    setupFlots();
  });
});


// Flot charts
function setupFlots() {
  
  //Section Chart
  $(function() {

    var data = [{
      data: [[1990, 11], [1991, 67], [1992, 92], [1993, 129], [1994, 215], [1995, 311], [1996, 187], [1997, 513], [1998, 329], [1999, 251], [2000, 707], [2001, 1152], [2002, 1029], [2003, 1315], [2004, 2711], [2005, 1487], [2006, 2913], [2007, 2119], [2008, 2926], [2009, 2729], [2010, 3533], [2011, 4137], [2012, 4242], [2013, 5757]]
    }];

    var options = {
      series: {
        lines: { show: true,
          lineWidth: 1,
          fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
        },
        points: { show: true, 
          lineWidth: 2 
        },
        shadowSize: 0
      },
      grid: { hoverable: true, 
        clickable: true, 
        tickColor: "#eeeeee",
        borderWidth: 0,
        hoverable : true,
        clickable : true
      },
      tooltip : true,
      tooltipOpts : {
        content : "Your sales for <b>%x</b> was <span>$%y</span>",
        dateFormat : "%y-%0m-%0d",
        defaultTheme : false
      },
      legend: {
        noColumns: 2
      },
      colors: [$primary_color, $jet_blue, $lemon_yellow, $nagpur_orange, $ruby_red, $go_green, $default_black],
       xaxis: {ticks:24, tickDecimals: 0},
       yaxis: {ticks:6, tickDecimals: 0},
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

    $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
  });
  
}


//Recent Tweets show hide function
function showHide(){
  if($('#reTweet').hasClass('hide_tweet')){
    $('.tweet-form').hide('slow'); $("#reTweet").removeClass('selected').removeClass('hide_tweet')
  } else {
    $('.tweet-form').show('slow'); $("#reTweet").addClass('selected').addClass('hide_tweet')
  }
  return false;
}

//Data Tables
$(document).ready(function () {
  $('#data-table').dataTable({
    "sPaginationType": "full_numbers"
  });
  $("#data-table_length").css("float","right")
});

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

//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    drawRegionsMap();
  });
});

//Tiny Scrollbar
$('#scrollbar-two').tinyscrollbar();