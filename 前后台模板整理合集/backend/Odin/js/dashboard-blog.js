$(function () {

    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

    /*****************************/
    /********* TAB BLOG **********/

    //BEGIN JQUERY FLOT CHART
    var d2 = [
        ["Jan 1", 93],
        ["Jan 3", 78],
        ["Jan 5", 47],
        ["Jan 7", 35],
        ["Jan 9", 48],
        ["Jan 11", 26],
        ["Jan 13", 49],
        ["Jan 15", 96],
        ["Jan 17", 54],
        ["Jan 19", 99],
        ["Jan 21", 92],
        ["Jan 23", 43]
    ];
    $.plot("#site-stats-chart", [
        {
            data: d2,
            color: "#01b6ad"
        }
    ], {
        series: {
            bars: {
                align: "left",
                lineWidth: 0,
                show: !0,
                barWidth: .4,
                fill: .9
            }
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 1,
            hoverable: !0
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%x : %y",
            defaultTheme: false
        },
        xaxis: {
            tickColor: "#fafafa",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#fafafa"
        },
        shadowSize: 0
    });
    //END JQUERY FLOT CHART

    /********* TAB BLOG ***********/
    /*****************************/

});

