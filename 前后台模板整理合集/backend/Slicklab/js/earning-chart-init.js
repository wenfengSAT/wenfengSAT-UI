/**
 * Created by mosaddek on 3/2/15.
 */

$(document).ready(function() {

    var data1 = [
        [0,1],[1,6],[2,19],[3,0],[4,10],[5,3],[6,1],[7,5],[8,39],[9,3],[10,9],[11,3],[12,10],[13,6],[14,17],[15,10],[16,0]

    ];
    var data2 = [
        [0,8],[1,18],[2,5],[3,10],[4,53],[5,11],[6,5],[7,16],[8,6],[9,11],[10,28],[11,10],[12,13],[13,4],[14,3],[15,9],[16,26]
    ];

    $("#dashboard-earning-chart").length && $.plot($("#dashboard-earning-chart"), [
        data1, data2
    ],
        {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 0.5,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                color: '#d5d5d5',
                borderColor: "#f3f3f3"
            },
            colors: ["#5FD18A", "#76B6D0"],
            xaxis:{
            },
            yaxis: {
                ticks: 4
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }

        }
    );


});