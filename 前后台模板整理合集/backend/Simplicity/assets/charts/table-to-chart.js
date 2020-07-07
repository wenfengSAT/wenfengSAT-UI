(function ($) {

    $.fn.tabletochart = function (options) {
        options = $.extend({}, $.fn.tabletochart.config, options);

        return this.each(function (i, item) {
          var table = $(item);

          var chart_type = $(item).attr('data-chart-type');
          var chart_drawboard = $(item).attr('data-chart-drawboard-id');
          var chart_title = $(item).attr('chart-title');
          var x_axis_title = $(item).attr('data-h-axis-title');


          var data_array = new Array();
          if ($(table).length) {

            var thead = $('thead', table);
            var tbody = $('tbody', table);
            var values_array = [];

            $('th', thead).each(function(i, item) {
              var value = $(item).html();
              values_array.push(value);
            });

            data_array.push(values_array);


            $('tr', tbody).each(function(i, item) {
              values_array = [];

              $('td', $(item)).each(function(i, item_inner){
                if ($(item_inner).attr('data-type') == 'int') {
                  values_array.push(parseInt($(item_inner).html()));
                } else {
                  values_array.push($(item_inner).html());
                }
              });

              data_array.push(values_array);
            });

          }


          switch(chart_type) {
            case 'pie':
              google.setOnLoadCallback(function() {
                drawPie(chart_drawboard, data_array, chart_title);
              });
            break;
            case 'columns':
              google.setOnLoadCallback(function() {
                drawColumns(chart_drawboard, data_array, chart_title, x_axis_title);
              });
            break;
            case 'line':
              google.setOnLoadCallback(function() {
                drawLine(chart_drawboard, data_array, chart_title);
              });
            break;
            case 'geo':
              google.setOnLoadCallback(function() {
                drawGeo(chart_drawboard, data_array);
              });
            break;
          }

        });
    };

    $.fn.tabletochart.config = {
        // set values and custom functions
    };

    /*
     * Draw a Geo Map Chart out of Table
     * 22/11/2013
     */
     function drawGeo(chart_drawboard, data_array) {
       var data = google.visualization.arrayToDataTable(data_array);

       var options = {backgroundColor: { fill:'transparent' }};

       var chart = new google.visualization.GeoChart(document.getElementById(chart_drawboard));
       chart.draw(data, options);

     }

    /*
     * Draw a Line Chart out of Table
     * 22/11/2013
     */
     function drawLine(chart_drawboard, data_array, chart_title) {
       var data = google.visualization.arrayToDataTable(data_array);

       var options = {
         title: chart_title,
         backgroundColor: { fill:'transparent' }
       };

       var chart = new google.visualization.LineChart(document.getElementById(chart_drawboard));
       chart.draw(data, options);
     }

    /*
     * Draw a Pie Chart out of Table
     * 22/11/2013
     */
     function drawPie(chart_drawboard, data_array, chart_title) {
       var data = google.visualization.arrayToDataTable(data_array);

       var options = {title: chart_title,
                      is3D: true,
                      backgroundColor: { fill:'transparent' }};

       var chart = new google.visualization.PieChart(document.getElementById(chart_drawboard));
        chart.draw(data, options);
     }

    /*
     * Draw Columns out of Table
     * 22/11/2013
     */
     function drawColumns(chart_drawboard, data_array, chart_title, x_axis_title) {
       var data = google.visualization.arrayToDataTable(data_array);

       var options = {
         title: chart_title,
         hAxis: {title: x_axis_title },
         backgroundColor: { fill:'transparent' }
       };

       var chart = new google.visualization.ColumnChart(document.getElementById(chart_drawboard));
       chart.draw(data, options);

     }


}(jQuery));