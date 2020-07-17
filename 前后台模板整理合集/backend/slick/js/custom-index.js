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


$(document).ready(function () {
  setupFlots();
});

// Flot charts
function setupFlots() {
  var sin = [],
      cos = [];

    for (var i = 0; i < 14; i += 0.5) {
      sin.push([i, Math.sin(i)]);
      cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot("#social-stats", [
      { data: sin, label: "Facebook"},
      { data: cos, label: "Twitter"}
    ], {
      series: {
        lines: {
          show: true,
          lineWidth: 1,
        },
        points: {
          show: true
        }
      },
      grid:{
        hoverable: true,
        clickable: true,
        borderWidth: 1,
        tickColor: $border_color,
        borderColor: '#eeeeee',
      },
      colors: [$grey, $red],
      shadowSize: 0,
      yaxis: {
        min: -1.2,
        max: 1.2
      }

    });

    function showTooltip(x, y, contents) {
      $("<div id='tooltip'>" + contents + "</div>").css({
        position: "absolute",
        display: "none",
        top: y + 5,
        left: x + 5,
        border: "1px solid #fdd",
        padding: "2px",
        "background-color": "#fee",
        opacity: 0.80
      }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#placeholder").bind("plothover", function (event, pos, item) {

      if ($("#enablePosition:checked").length > 0) {
        var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
        $("#hoverdata").text(str);
      }

      if ($("#enableTooltip:checked").length > 0) {
        if (item) {
          if (previousPoint != item.dataIndex) {

            previousPoint = item.dataIndex;

            $("#tooltip").remove();
            var x = item.datapoint[0].toFixed(2),
            y = item.datapoint[1].toFixed(2);

            showTooltip(item.pageX, item.pageY,
                item.series.label + " of " + x + " = " + y);
          }
        } else {
          $("#tooltip").remove();
          previousPoint = null;            
        }
      }
    });

    $("#placeholder").bind("plotclick", function (event, pos, item) {
      if (item) {
        $("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
        plot.highlight(item.series, item.datapoint);
      }
    });

    // Add the Flot version string to the footer

    $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
};


//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    setupFlots();
  });
});


// SparkLine charts
$(function () {
  try{
    $('#currentSale').sparkline('html', {
      type: 'bar',
      barColor: '#fff',
      barWidth: 8,
      height: 30,
    });
    $('#currentBalance').sparkline('html', {
      type: 'bar',
      barColor: '#fff',
      barWidth: 8,
      height: 30,
    });

    $("#demography").sparkline([1,1,4, 3, 5 ], {
      type: 'pie',
      sliceColors: [$blue, $orange, $green, $yellow, $red],
      width: '150px ',
      height: '150px'
    });


  }catch(e){

  }
});


// Tiny Scrollbar
$('#scrollbar').tinyscrollbar();
$('#scrollbar-one').tinyscrollbar();


$(document).ready(function () {
  pie_chart();
});

//Animated Pie Charts 
function pie_chart() {
  $(function () {
    //create instance
    $('.chart1').easyPieChart({
      animate: 2000,
      barColor: $red,
      trackColor: $border_color,
      scaleColor: $red,
      lineWidth: 2,
    });
    //update instance after 5 sec
    setTimeout(function () {
      $('.chart1').data('easyPieChart').update(50);
    }, 5000);
    setTimeout(function () {
      $('.chart1').data('easyPieChart').update(70);
    }, 10000);
    setTimeout(function () {
      $('.chart1').data('easyPieChart').update(30);
    }, 15000);
    setTimeout(function () {
      $('.chart1').data('easyPieChart').update(90);
    }, 19000);
    setTimeout(function () {
      $('.chart1').data('easyPieChart').update(40);
    }, 32000);
  });

  $(function () {
    //create instance
    $('.chart2').easyPieChart({
      animate: 2000,
      barColor: $yellow,
      trackColor: $border_color,
      scaleColor: $yellow,
      lineWidth: 2,
    });
    //update instance after 5 sec
    setTimeout(function () {
      $('.chart2').data('easyPieChart').update(90);
    }, 10000);
    setTimeout(function () {
      $('.chart2').data('easyPieChart').update(40);
    }, 18000);
    setTimeout(function () {
      $('.chart2').data('easyPieChart').update(70);
    }, 28000);
    setTimeout(function () {
      $('.chart2').data('easyPieChart').update(50);
    }, 32000);
    setTimeout(function () {
      $('.chart2').data('easyPieChart').update(80);
    }, 40000);
  });

  $(function () {
    //create instance
    $('.chart3').easyPieChart({
      animate: 2000,
      barColor: $blue,
      trackColor: $border_color,
      scaleColor: $blue,
      lineWidth: 2,
    });
    //update instance after 5 sec
    setTimeout(function () {
      $('.chart3').data('easyPieChart').update(51);
    }, 9000);
    setTimeout(function () {
      $('.chart3').data('easyPieChart').update(35);
    }, 20000);
    setTimeout(function () {
      $('.chart3').data('easyPieChart').update(78);
    }, 35000);
    setTimeout(function () {
      $('.chart3').data('easyPieChart').update(36);
    }, 49000);
    setTimeout(function () {
      $('.chart3').data('easyPieChart').update(16);
    }, 52000);
  });

  $(function () {
    //create instance
    $('.chart4').easyPieChart({
      animate: 2000,
      barColor: $green,
      trackColor: $border_color,
      scaleColor: $green,
      lineWidth: 2,
    });
    //update instance after 5 sec
    setTimeout(function () {
      $('.chart4').data('easyPieChart').update(79);
    }, 4000);
    setTimeout(function () {
      $('.chart4').data('easyPieChart').update(22);
    }, 15000);
    setTimeout(function () {
      $('.chart4').data('easyPieChart').update(62);
    }, 27000);
    setTimeout(function () {
      $('.chart4').data('easyPieChart').update(55);
    }, 58000);
    setTimeout(function () {
      $('.chart4').data('easyPieChart').update(69);
    }, 72000);
  });

}

//Resize animated charts on window resize
$(document).ready(function () {
  $(window).resize(function(){
    pie_chart();
  });
});
