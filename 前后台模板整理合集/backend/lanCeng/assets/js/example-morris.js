//GRAPH PAGE
Morris.Area({
  element: 'morris-area-chart',
  data: [
    { y: '2006', a: 100, b: 90, c: 112 },
    { y: '2007', a: 75,  b: 65, c: 95 },
    { y: '2008', a: 50,  b: 40, c: 80 },
    { y: '2009', a: 75,  b: 65, c: 96 },
    { y: '2010', a: 50,  b: 40, c: 75 },
    { y: '2011', a: 75,  b: 65, c: 110 },
    { y: '2012', a: 100, b: 90, c: 132 },
    { y: '2013', a: 125, b: 110, c: 152 },
    { y: '2014', a: 145, b: 135, c: 165 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b', 'c'],
  labels: ['Series A', 'Series B', 'Series C'],
  resize: true,
  lineColors: ['#5CB85C', '#FFD600', '#D10D0D']
});


Morris.Line({
  element: 'morris-line-chart',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  resize: true,
  lineColors: ['#5CB85C', '#D10D0D']
});


Morris.Bar({
  element: 'morris-bar-chart',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  barColors: ['#5CB85C', '#D10D0D']
});


Morris.Donut({
  element: 'morris-donut-chart',
  data: [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Out of stock", value: 32},
    {label: "Mail-Order Sales", value: 20}
  ],
  colors: ['#5CB85C', '#FFD600', '#D10D0D', '#1A89E8']
});
