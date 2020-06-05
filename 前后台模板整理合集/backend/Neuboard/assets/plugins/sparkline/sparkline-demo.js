$(function() {
    $("#sparkline1").sparkline([2, 4, 4, 6, 9, 12, 15, 15, 18, 22, 14, 23, 24, 25, 29, 29, 25, 26, 23, 22, 18, 15, 14, 22, 23, 12, 8, 4, 2], {
        type: 'line',
        lineWidth: 2,
        lineColor: '#1F7BB6',
        fillColor: '#1ABC9C',
        height: '12em',
        width: '15em'
    });

    $("#sparkline2").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, -1, 7, 2, 4, 12, 14, 4, -1, 2, 14, 12, 7], {
        type: 'bar',
        barWidth: 12,
        barColor: '#1ABC9C',
        negBarColor: '#1F7BB6',
        height: '12em',
        width: '15em'
    });

    $("#sparkline3").sparkline([5, 3, 4, 1], {
        type: 'pie',
        height: '12em',
        width: '15em',
        sliceColors: ['#1ABC9C', '#1F7BB6', '#556B8D', '#EDCE8C']
    });

    $("#sparkline4").sparkline([22, 24, 55, 12, 34, 66, 23, 45, 77, 43, 34, 25, 88, 44, 26, 22, 14, 32, 42, 56, 27, 33, 47, 79, 34, 67, 43, 84, 19, 22], {
        type: 'line',
        lineWidth: 2,
        height: '12em',
        width: '15em',
        lineColor: '#17997f',
        fillColor: '#ffffff',
    });
});
