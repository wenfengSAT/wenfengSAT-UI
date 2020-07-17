var Script = function () {
    $(".sparkline").each(function(){
        var $data = $(this).data();

        $data.valueSpots = {'0:': $data.spotColor};

        $(this).sparkline( $data.data || "html", $data,
            {
                tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
                    '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
            });
    });


    //income expense progress bar

    $("#balance").sparkline([87,109,111,95,120,99,87,100,67,75,65,87], {
        type: 'bar',
        height: '32',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#c5c5ca'
    });

    $("#item-sold").sparkline([102,109,90,120,70,99,110,80,87,50,65,74], {
        type: 'bar',
        height: '32',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#c5c5ca'
    });

    $("#foreign-visit").sparkline([102,109,120,99,110,80,87,74], {
        type: 'bar',
        height: '32',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#79d4a7'
    });

    $("#monthly-visit").sparkline([99,110,80,102,109,120,87,74], {
        type: 'bar',
        height: '32',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#f47669'
    });

    $("#unique-visit").sparkline([110,105,99,110,102,109,120], {
        type: 'bar',
        height: '32',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#57c8f1'
    });

    $("#page-view-graph").sparkline([102,109,90,120,70,99,110,80,87,50,65,74,102,109,90,120,70,99,110], {
        type: 'bar',
        height: '35',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#a979d1'
    });

    $("#m-g-light").sparkline([102,109,90,120,70,99,110,80,87,50,65,74,102,109,90,120,70,99,110], {
        type: 'bar',
        height: '35',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#e4e4e4'
    });

    $("#m-g-dark").sparkline([102,109,90,120,70,99,110,80,87,50,65,74,102,109,90,120,70,99,110], {
        type: 'bar',
        height: '35',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#5f5f5f'
    });



    $(".weather-chart").each(function(){
        var $data = $(this).data();

        $data.valueSpots = {'0:': $data.spotColor};

        $(this).sparkline( $data.data || "html", $data,
            {
                tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
                    '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
            });




    });


}();
