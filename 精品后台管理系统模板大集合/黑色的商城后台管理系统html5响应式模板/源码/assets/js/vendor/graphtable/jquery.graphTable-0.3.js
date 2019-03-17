(function($) { 
 
 $.fn.graphTable = function(_graphArgs,_flotArgs) {

    var args = {

      /* 
       * options for reading the table -- defaults will work in most cases except
       * you'll want to override the default args.series if your series are in columns 
       * 
       * note that anywhere the word "index" is used, the count starts from 0 at
       * the top left of the table 
       *
       */
      series: 'rows', // are the series in rows or columns?
      labels: 0, // index of the cell in the series row/column that contains the label for the series
      xaxis: 0, // index of the row/column (whatever args.series is) that contains the x values
      firstSeries: 1, // index of the row/column containing the first series
      lastSeries: null, // index of the row/column containing the last series; will use the last cell in the row/col if not set
      dataStart: 1, // index of the first cell in the series containing data
      dataEnd: null, // index of the last cell in the series containing data; will use the last cell in the row/col if not set

      /* graph size and position */
      position: 'after', // before the table, after the table, or replace the table
      width: null, // set to null to use the width of the table
      height: null, // set to null to use the height of the table
      min: 0, // defaults to minimum y value in the table
      max: 0, // defaults to maximum y value in the table

      /* data transformation before plotting */
      dataTransform: null, // function to run on cell contents before passing to flot; string -> string
      labelTransform: null, // function to run on cell contents before passing to flot; string -> string
      xaxisTransform: null, // function to run on cell contents before passing to flot; string -> string

      //extra info added by me
      colors: null
    }

    // override defaults with user args
    $.extend(true,args,_graphArgs);
    
    /* default to last cell in the row/col for 
     * lastSeries and dataEnd if they haven't been set yet */

    // index of the row/column containing the last series
    if (! args.lastSeries) {
      args.lastSeries = (args.series == 'columns') ? 
        $('tr',$(this)).eq(args.labels).find('th,td').length - 1 : 
        $('tr',$(this)).length - 1;  
    }

    // index of the last cell in the series containing data
    if (! args.dataEnd) {
      args.dataEnd = (args.series == 'rows') ? 
        $('tr',$(this)).eq(args.firstSeries).find('th,td').length - 1:
        $('tr',$(this)).length - 1;
    }

    return $(this).each(function() {
      // use local min/max for y of each graph, based on initial args
      var $table = $(this);

      // make sure the table is a table!
      if (! $table.is('table')) { return; }

      // if no height and width have been set, then set 
      // width and height based on the width and height of the table
      if (! args.width) { args.width = $table.width(); }
      if (! args.height) { args.height = $table.height(); }

      var min = args.min;
      var max = args.max;
      var $rows = $('tr',$table);
      var tableData = new Array();

      switch (args.series) {
        case 'rows':

          var $xaxisRow = $rows.eq(args.xaxis);
          
          // iterate over each of the rows in the series
          for (i=args.firstSeries;i<=args.lastSeries;i++) {
            var rowData = new Array();

            $dataRow = $('tr',$table).eq(i);

            // get the label for the whole row
            var label = $('th,td',$dataRow).eq(args.labels).text();

            if (args.labelTransform) { label = args.labelTransform(label); }

            for (j=args.dataStart;j<=args.dataEnd;j++) {
              var x = $('th,td',$xaxisRow).eq(j).text();
              var y = $('th,td',$dataRow).eq(j).text();

              if (args.dataTransform) { y = args.dataTransform(y); }
              if (args.xaxisTransform) { x = args.xaxisTransform(x); }
              
              test_x = parseFloat(x);
              test_y = parseFloat(y);

              if (test_y < min) { min = test_y; }
              else if (test_y > max) { max = test_y; }

              rowData[rowData.length] = [x,y];
            }

            tableData[tableData.length] = { label: label, data: rowData };

          }

          break;


        case 'columns':
          // iterate over each of the columns in the series
          var $labelRow = $rows.eq(args.labels);

          for (j=args.firstSeries;j<=args.lastSeries;j++) { // j designates the column
            var colData = new Array();

            var label = $labelRow.find('th,td').eq(j).text();
            if (args.labelTransform) { label = args.labelTransform(label); }

            for (i=args.dataStart;i<=args.dataEnd;i++) { // i designates the row
              $cell = $rows.eq(i).find('th,td').eq(j);
              var y = $cell.text();
              var x = $rows.eq(i).find('th,td').eq(args.xaxis).text();

              if (args.dataTransform) { y = args.dataTransform(y); }
              if (args.xaxisTransform) { x = args.xaxisTransform(x); }
              
              test_x = parseFloat(x);
              test_y = parseFloat(y);

              if (test_y < min) { min = test_y; }
              else if (test_y > max) { max = test_y; }

              colData[colData.length] = [x,y];
            }

              //changed/added this code
              var series = {label: label, data: colData };
              if (args.colors && args.colors[j-args.dataStart]){
                  series.color = args.colors[j-args.dataStart]
              }
              tableData[tableData.length] = series;


          }

          break;
      }

      switch (args.position) {
        case 'after':
      $div = $('<div class="flot-graph" />').insertAfter($table);
          break;

        case 'replace':
      $div = $('<div class="flot-graph" />').insertAfter($table);
          $table.remove();
          break;

        default:
      $div = $('<div class="flot-graph" />').insertBefore($table);
          break;
      }

      var flotArgs = { yaxis: { min: min, max: max }, title: 'foo' };

      $div.width(args.width).height(args.height);
      $.extend(true,flotArgs,_flotArgs);
      $.plot($div, tableData, flotArgs);

    });
  };

})(jQuery);