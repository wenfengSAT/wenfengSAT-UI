var $grid_color = "#eee";

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


(function(){
  var t;
  function size(animate){
    if (animate == undefined){
      animate = false;
    }
    clearTimeout(t);
    t = setTimeout(function(){
      $("canvas").each(function(i,el){
        $(el).attr({
          "width":$(el).parent().width(),
          "height":$(el).parent().outerHeight()
        });
      });
      redraw(animate);
      var m = 0;
      $(".chartJS").height("");
      $(".chartJS").each(function(i,el){ m = Math.max(m,$(el).height()); });
      $(".chartJS").height(m);
      }, 30);
    }
  $(window).on('resize', function(){ size(false); });

  function redraw(animation){
    var options = {};
    if (!animation){
        options.animation = false;
    } else {
        options.animation = true;
    }
      
    // Custom chart Js code starts here

    // 1. Bar Charts
    var barChartData = {
      labels : ["January","February","March","April","May","June","July"],
      datasets : [
        {
          fillColor : $dark_blue,
          strokeColor : $dark_blue,
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor : $gplus,
          strokeColor : $gplus,
          data : [28,48,40,19,96,27,100]
        }
      ]
    }
    var myLine = new Chart(document.getElementById("barChart").getContext("2d")).Bar(barChartData);

    // 2 Line Chart
    var lineChartData = {
      labels : ["January","February","March","April","May","June","July"],
      datasets : [
        {
          fillColor : $info,
          strokeColor : "rgba(220,220,220,1)",
          pointColor : $yellow,
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor : $dark_blue,
          strokeColor : "rgba(151,187,205,1)",
          pointColor : $gplus,
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100]
        }
      ]
      
    }

    var myLine = new Chart(document.getElementById("lineChart").getContext("2d")).Line(lineChartData);

    //3. Polar Area Chart
    var chartData = [
      {
        value : Math.random(),
        color: $yellow
      },
      {
        value : Math.random(),
        color: $info
      },
      {
        value : Math.random(),
        color: $success
      },
      {
        value : Math.random(),
        color: $warning
      },
      {
        value : Math.random(),
        color: $gplus
      },
      {
        value : Math.random(),
        color: $twitter
      }
    ];
    var myPolarArea = new Chart(document.getElementById("polarAreaChart").getContext("2d")).PolarArea(chartData);
  
    // 4. Radar Chart
    var radarChartData = {
      labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100]
        }
      ]
    }
    var myRadar = new Chart(document.getElementById("radarChart").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 10});

    // 5. Pie Chart
    var pieData = [
      {
        value: 30,
        color: $yellow
      },
      {
        value : 50,
        color : $info
      },
      {
        value : 100,
        color : $success
      }
    
    ];

    var myPie = new Chart(document.getElementById("pieChart").getContext("2d")).Pie(pieData);


    // 6. Doughnut
    var doughnutData = [
      {
        value: 30,
        color: $yellow
      },
      {
        value : 50,
        color : $success
      },
      {
        value : 100,
        color : $info
      },
      {
        value : 40,
        color : $warning
      },
      {
        value : 120,
        color : $gplus,
      }
    
    ];

    var myDoughnut = new Chart(document.getElementById("doughnutChart").getContext("2d")).Doughnut(doughnutData);

    // Custom chart Js code ends here


  }

  size(true);

}());