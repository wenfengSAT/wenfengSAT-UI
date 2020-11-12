jQuery(function ($) {
    'use strict';
    function morrisArea() {
        Morris.Area({
            element: 'morris-area',
            data: [
                { y: '2006', a: 30, b: 20 },
                { y: '2007', a: 45, b: 33 },
                { y: '2008', a: 50, b: 40 },
                { y: '2009', a: 75, b: 65 },
                { y: '2010', a: 50, b: 40 },
                { y: '2011', a: 75, b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#1CAF9A', '#95CBA9'],
            lineWidth: '1px',
            fillOpacity: 0.8,
            hideHover: true,
            resize: true
        });
    }

    function morrisLine() {
        Morris.Line({
            element: 'morris-line',
            data: [
                { y: '2006', a: 30, b: 20 },
                { y: '2007', a: 45, b: 33 },
                { y: '2008', a: 50, b: 40 },
                { y: '2009', a: 75, b: 65 },
                { y: '2010', a: 50, b: 40 },
                { y: '2011', a: 75, b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#1CAF9A', '#D9534F'],
            lineWidth: '2px',
            fillOpacity: 0.8,
            smooth: false,
            hideHover: true,
            resize: true
        });
    }

    function morrisBar() {
        Morris.Bar({
            element: 'morris-bar',
            data: [
                { y: '2006', a: 30, b: 20 },
                { y: '2007', a: 45, b: 33 },
                { y: '2008', a: 50, b: 40 },
                { y: '2009', a: 75, b: 65 },
                { y: '2010', a: 50, b: 40 },
                { y: '2011', a: 75, b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            barColors: ['#34A8DB', '#D9534F'],
            hideHover: true,
            resize: true
        });
    }

    function morrisBarStacked() {
        Morris.Bar({
            element: 'morris-bar-stacked',
            data: [
                { y: '2006', a: 30, b: 20 },
                { y: '2007', a: 45, b: 33 },
                { y: '2008', a: 50, b: 40 },
                { y: '2009', a: 75, b: 65 },
                { y: '2010', a: 50, b: 40 },
                { y: '2011', a: 75, b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            barColors: ['#1D2939', '#34A8DB'],
            stacked: true,
            hideHover: true,
            barSizeRatio: 0.5,
            resize: true
        });
    }

    function morrisDonut() {
        Morris.Donut({
            element: 'morris-donut',
            data: [
                {label: 'Download Sales', value: 12},
                {label: 'In-Store Sales', value: 30},
                {label: 'Mail-Order Sales', value: 20}
            ],
            resize: true
        });
    }

    function morrisColorDonut() {
        Morris.Donut({
            element: 'morris-color-donut',
            data: [
                {label: 'Chrome', value: 41},
                {label: 'Internet Explorer', value: 24},
                {label: 'Firefox', value: 21},
                {label: 'Safari', value: 5}
            ],
            colors: ['#428BCA', '#F0AD4E', '#5CB85C', '#D9534F'],
            resize: true
        });
    }

    morrisArea();
    morrisLine();
    morrisBar();
    morrisBarStacked();
    morrisDonut();
    morrisColorDonut();
});
