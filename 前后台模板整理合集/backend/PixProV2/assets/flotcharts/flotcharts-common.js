var charts =
{
  // utility class
  utility:
  {
    chartColors: [ "#ecf0f1", "#444", "#777", "#999", "#DDD", "#EEE" ],
    //chartBackgroundColors: ["transparent", "transparent"],
    chartBackgroundColors: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"],

    applyStyle: function(that)
    {
      that.options.colors = charts.utility.chartColors;
      that.options.grid.backgroundColor = { colors: charts.utility.chartBackgroundColors };
      // that.options.grid.borderColor = charts.utility.chartColors[0];
      // that.options.grid.color = charts.utility.chartColors[0];
    },

    // generate random number for charts
    randNum: function()
    {
      return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
    }
  }

};