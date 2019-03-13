$(function () {
    try {
        $('.easypiechart#bandwidth').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

        $('.easypiechart#ramusage').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

        $('.easypiechart#serverload').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.easypiechart#space').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.easypiechart#network').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.easypiechart#beer').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


        $('#updatePieCharts').on('click', function() {
            $('.easypiechart#bandwidth').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#ramusage').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#serverload').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#space').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#network').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#beer').data('easyPieChart').update(Math.random()*100);
            return false;
        });
    }
    catch(error) {}
});


//Sparkline Tiles

var responsiveSparklinePageView = function() {
    $("#tiles-sparkline-stats-pageviews").sparkline([2455,1234,776,349,1776,2234,2455], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1.5',
        fillColor: 'transparent',
        height: 70,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '4',
        highlightSpotColor: '#999999',
        highlightLineColor: '#cccccc'
    });

    $("#tiles-sparkline-stats-totalsales").sparkline([2455,3534,5776,4349,5179,524,1123], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1.5',
        fillColor: 'transparent',
        height: 70,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '4',
        highlightSpotColor: '#999999',
        highlightLineColor: '#cccccc'
    });

    $("#tiles-sparkline-stats-totalorders").sparkline([255,134,76,120,350,400,98], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1.5',
        fillColor: 'transparent',
        height: 70,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '4',
        highlightSpotColor: '#999999',
        highlightLineColor: '#cccccc'
    });

    $("#tiles-sparkline-stats-pageviews4").sparkline([1455,634,776,1349,2179,2524,1423], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1.5',
        fillColor: 'transparent',
        height: 70,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '4',
        highlightSpotColor: '#999999',
        highlightLineColor: '#cccccc'
    });

    $("#tiles-sparkline-stats-blogviews").sparkline([1455,634,776,1349,2179,2524,1423], {
        type: 'line',
        lineColor: '#e3e3e3',
        lineWidth: '2',
        fillColor: 'transparent',
        height: 173,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '4',
        highlightSpotColor: '#e3e3e3',
        highlightLineColor: 'rgba(227,227,227,0.3)'
    });

    $("#tiles-sparkline-stats-blogviews").sparkline([2455,1634,376,2349,3179,1524,4423], {
        composite: true,
        lineColor: '#9b59b6',
        lineWidth: '2',
        fillColor: 'transparent',
        height: 173,
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '4',
        highlightSpotColor: '#9b59b6',
        highlightLineColor: 'rgba(227,227,227,0.3)'
    });
}

var refreshSparklines;
$(window).resize(function(e) {
    clearTimeout(refreshSparklines);
    refreshSparklines = setTimeout(responsiveSparklinePageView, 500);
});

responsiveSparklinePageView();


//Info Tiles: Sparkline Variant
$("#tileorders").sparkline([112,182,130,191,75,214,159,138,156,120], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.3)',
    barSpacing: 1,
    height: '13',
    barWidth: 3
});

$("#tilemembers").sparkline([41,38,73,49,51,20,55,13,35,23], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.3)',
    barSpacing: 1,
    height: '13',
    barWidth: 3
});

$("#tiletickets").sparkline([50,100,78], { 
    type: 'pie',
    sliceColors: ['rgba(255, 255, 255, 0.75)','rgba(255, 255, 255, 0.5)','rgba(255, 255, 255, 0.25)'],
    height: '13',
    width: '13'
});

$("#tilerevenues").sparkline([11270,17257,15014,13107,15538,13439,17915,23874,16677,12003], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.3)',
    lineWidth: '1.5',
    fillColor: 'transparent',
    height: '13',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '40'
});

$("#tileprofits").sparkline([412,382,130,191,215,204,559,738,456,239], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.3)',
    lineWidth: '1.5',
    fillColor: 'transparent',
    height: '13',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '48'
});
