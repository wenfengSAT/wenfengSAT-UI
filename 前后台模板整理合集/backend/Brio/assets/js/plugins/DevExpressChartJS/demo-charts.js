/*******************************************
Simple Bar Chart
*******************************************/

$("#bar-chart").dxChart({
    dataSource: [
        {day: "Mon", oranges: 3},
        {day: "Tue", oranges: 2},
        {day: "Wed", oranges: 3},
        {day: "Thu", oranges: 4},
        {day: "Fri", oranges: 6},
        {day: "Sat", oranges: 11},
        {day: "Sun", oranges: 4} ],
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
	},
	legend: {
		visible: false,
	},
    series: {
        argumentField: "day",
        valueField: "oranges",
        name: "My oranges",
		visible: false,
        type: "bar",
        color: '#a49bc4'
    }
});






/*******************************************
Side by Side Bar
*******************************************/

$("#side-by-side-bar").dxChart({
    dataSource: [
					{ state: "Illinois", year1998: 423.721, year2001: 476.851, year2004: 528.904 },
					{ state: "Indiana", year1998: 178.719, year2001: 195.769, year2004: 227.271 },
					{ state: "Michigan", year1998: 308.845, year2001: 335.793, year2004: 372.576 },
					{ state: "Ohio", year1998: 348.555, year2001: 374.771, year2004: 418.258 },
					{ state: "Wisconsin", year1998: 160.274, year2001: 182.373, year2004: 211.727 }
				],
    commonSeriesSettings: {
        argumentField: "state",
        type: "bar",
        hoverMode: "allArgumentPoints",
        selectionMode: "allArgumentPoints",
        label: {
            visible: true,
            format: "fixedPoint",
            precision: 0
        }
    },
    series: [
        { valueField: "year2004", name: "2004", color: '#ff6c60' },
        { valueField: "year2001", name: "2001", color: '#ff897f' },
        { valueField: "year1998", name: "1998", color: '#ffa69f' }
    ],
    legend: {
        visible: false
    },
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
	},
    pointClick: function (point) {
        this.select();
    }
});






/*******************************************
Barwidth Bar
*******************************************/


$("#barwidth-bar").dxChart({
    dataSource: [
				  { state: "Saudi Arabia", year1970: 192.2, year1980: 509.8, year1990: 342.6, year2000: 456.3, year2008: 515.3, year2009: 459.5 },
				  { state: "USA", year1970: 533.5, year1980: 480.2, year1990: 416.6, year2000: 352.6, year2008: 304.9, year2009: 325.3 },
				  { state: "China", year1970: 30.7, year1980: 106, year1990: 138.3, year2000: 162.6, year2008: 195.1, year2009: 189 },
				  { state: "Canada", year1970: 70.1, year1980: 83.3, year1990: 92.6, year2000: 126.9, year2008: 157.7, year2009: 155.7 },
				  { state: "Mexico", year1970: 24.2, year1980:  107.2, year1990: 146.3, year2000: 171.2, year2008: 157.7, year2009: 147.5}
				],
    equalBarWidth: {
        width: 5
    },
    commonSeriesSettings: {
        argumentField: "state",
        type: "bar"
    },
    series: [
        { valueField: "year1970", name: "1970", color: '#4ecdc4' },
        { valueField: "year1980", name: "1980", color: '#ff6c60' },
        { valueField: "year1990", name: "1990", color: '#edd655' },
        { valueField: "year2000", name: "2000", color: '#ac92ec' },
        { valueField: "year2008", name: "2008", color: '#e1e1e3' },
        { valueField: "year2009", name: "2009" }
    ],
    legend: {
        visible: false
    },
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
	},
});











/*******************************************
Stacked Bar
*******************************************/



$("#stacked-bar").dxChart({
    dataSource: [
					{ state: "Germany", young: 6.7, middle: 28.6, older: 5.1 },
					{ state: "Japan", young: 9.6, middle: 43.4, older: 9},
					{ state: "Russia", young: 13.5, middle: 49, older: 5.8 },
					{ state: "USA", young: 30, middle: 90.3, older: 14.5 }
				],
    commonSeriesSettings: {
        argumentField: "state",
        type: "stackedBar"
    },
    series: [
        { valueField: "young", name: "0-14", color: '#4ecdc4' },
        { valueField: "middle", name: "15-64", color: '#ff6c60' },
        { valueField: "older", name: "65 and older", color: '#edd655' }
    ],
    legend: {
        visible: false
    },
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
	},
    tooltip: {
        enabled: true,
        customizeText: function () {
            return this.seriesName + " years: " + this.valueText;
        },
		font: { size: 16 }
    }
});






/*******************************************
Area Chart
*******************************************/





$("#area-chart").dxChart({
    dataSource: [
        { country: "China", y014: 320866959, y1564: 853191410, y65: 87774113 },
        { country: "India", y014: 340419115, y1564: 626520945, y65: 47063757 },
        { country: "US", y014: 58554755, y1564: 182172625, y65: 34835293 },
        { country: "Indonesia", y014: 68715705, y1564: 146014815, y65: 10053690 },
        { country: "Brazil", y014: 50278034, y1564: 113391494, y65: 9190842 },
        { country: "Russia", y014: 26465156, y1564: 101123777, y65: 18412243 }
	],
    commonSeriesSettings: {
        type: "area",
        argumentField: "country"
    },
    series: [
        { valueField: "y1564", name: "15-64 years", color: "#6ab704" },
        { valueField: "y014", name: "0-14 years", color: "#7a34c3" },
        { valueField: "y65", name: "65 years and older", color: "#fbcf04" }
    ],
    argumentAxis:{
        valueMarginsEnabled: false
    },
	legend: {
        visible: false
    },
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			},
		label: {
			format: "millions"
		}
	},
});







$("#splinearea-chart").dxChart({
    dataSource: [
		{ company: "ExxonMobil", y2005: 362.53, y2004: 277.02},
		{ company: "GE", y2005: 348.45, y2004: 328.54},
		{ company: "Microsoft", y2005: 279.02, y2004: 297.02},
		{ company: "Citigroup", y2005: 230.93, y2004: 255.3},
		{ company: "Royal Dutch", y2005: 203.52, y2004: 173.54},
		{ company: "Google", y2005: 197.12, y2004: 131.89}
	],
    commonSeriesSettings: {
        type: "splineArea",
        argumentField: "company"
    },
    argumentAxis:{
        valueMarginsEnabled: false
    },
    series: [
        { valueField: "y2005", name: "2005", color: "#5f8b95" },
        { valueField: "y2004", name: "2004", color: "#e1e1e3" }
    ],
    legend: {
        visible: false
    },
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
	},
});











/*******************************************
Line Chart
*******************************************/


$("#line-chart").dxChart({
    dataSource: [
		{ year: 1950, europe: 546, americas: 332, africa: 227 },
		{ year: 1960, europe: 605, americas: 417, africa: 283 },
		{ year: 1970, europe: 656, americas: 513, africa: 361 },
		{ year: 1980, europe: 694, americas: 614, africa: 471 },
		{ year: 1990, europe: 721, americas: 721, africa: 623 },
		{ year: 2000, europe: 730, americas: 836, africa: 797 },
		{ year: 2010, europe: 728, americas: 935, africa: 982 },
		{ year: 2020, europe: 721, americas: 1027, africa: 1189 },
		{ year: 2030, europe: 704, americas: 1110, africa: 1416 },
		{ year: 2040, europe: 680, americas: 1178, africa: 1665 },
		{ year: 2050, europe: 650, americas: 1231, africa: 1937 }
	],
    commonSeriesSettings: {
        argumentField: "year"
    },
    series: [
        { valueField: "europe", name: "Europe", color: "#27c24c" },
        { valueField: "americas", name: "Americas", color: "#fad733" },
        { valueField: "africa", name: "Africa", color: "#f05050" }
    ],
    tooltip:{
        enabled: true,
		font: { size: 16 }
    },
    legend: {
        visible: false
    },
	valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
	}
});










$("#bubble-chart").dxChart({
	dataSource: [
				{ total1: 9.5, total2: 168.8, total3: 127.2, older1: 2.4, older2: 8.8, older3: 40.0, perc1: 25.4, perc2: 5.3, perc3: 31.6, tag1: 'Sweden', tag2: 'Nigeria', tag3: 'Japan' },
				{ total1: 82.8, total2: 91.7, total3: 90.8, older1: 21.9, older2: 4.6, older3: 8.0, perc1: 26.7, perc2: 5.4, perc3: 8.9, tag1: 'Germany', tag2: 'Ethiopia', tag3: 'Viet Nam' },
				{ total1: 16.7, total2: 80.7, total3: 21.1, older1: 3.8, older2: 7.0, older3: 2.7, perc1: 22.8, perc2: 8.4, perc3: 12.9, tag1: 'Netherlands', tag2: 'Egypt', tag3: 'Sri Lanka' },
				{ total1: 62.8, total2: 52.4, total3: 96.7, older1: 14.4, older2: 4.0, older3: 5.9, perc1: 23.0, perc2: 7.8, perc3: 6.1, tag1: 'United Kingdom', tag2: 'South Africa', tag3: 'Philippines' },
				{ total1: 38.2, total2: 43.2, total3: 66.8, older1: 7.8, older2: 1.8, older3: 9.6, perc1: 20.4, perc2: 4.3, perc3: 13.7, tag1: 'Poland', tag2: 'Kenya', tag3: 'Thailand' },
				{ total1: 45.5, total3: 154.7, total4: 34.8, older1: 9.5, older3: 10.3, older4: 7.2, perc1: 21.1, perc3: 6.8, perc4: 20.8, tag1: 'Ukraine', tag3: 'Bangladesh', tag4: 'Canada' },
				{ total1: 143.2, total4: 120.8, older1: 26.5, older4: 11.0, perc1: 18.6, perc4: 9.5, tag1: 'Russian Federation', tag4: 'Mexico' }
				],
    commonSeriesSettings: {
        type: 'bubble'
    },
    tooltip: {
        enabled: true,
		font: { size: 16 },
        customizeText: function () { return this.point.tag + '<br/>Total Population: ' + this.argumentText + 'M <br/>Population Over 60: ' + this.valueText + 'M <br/>% of population over 60: ' + this.size; }
    },
    
    legend: {
        
            visible: false
        
    },
    palette: ["#00ced1", "#008000", "#ffd700", "#ff7f50"],
	seriesClick: function(series) {
		series.isVisible() ? series.hide() : series.show(); 
    },
    series: [{
        name: 'Europe',
        argumentField: 'total1',
        valueField: 'older1',
        sizeField: 'perc1',
        tagField:'tag1'
    }, {
        name: 'Africa',
        argumentField: 'total2',
        valueField: 'older2',
        sizeField: 'perc2',
        tagField: 'tag2'
    }, {
        name: 'Asia',
        argumentField: 'total3',
        valueField: 'older3',
        sizeField: 'perc3',
        tagField: 'tag3'
    }, {
        name: 'North America',
        argumentField: 'total4',
        valueField: 'older4',
        sizeField: 'perc4',
        tagField: 'tag4'
    }]
});












/*******************************************
Pie Chart
*******************************************/

$("#pie-chart").dxPieChart({
    dataSource: [
				  { country: "USA", medals: 110 },
				  { country: "China", medals: 100 },
				  { country: "Russia", medals: 72 },
				  { country: "Britain", medals: 47 },
				  { country: "Australia", medals: 46 },
				  { country: "Germany", medals: 41 },
				  { country: "France", medals: 40 },
				  { country: "South Korea", medals: 31 }
				],
    legend: {
		visible: false
    },
	palette: ["#6bb802", "#7c37c3", "#0861ce", "#fbd005", "#4fcdfc", "#00b19d", "#ff6264"],
    series: [{
        argumentField: "country",
        valueField: "medals",
        label: {
            visible: true,
            font: {
                size: 12
            },
            connector: {
                visible: true,
                width: 0.5
            },
            position: "columns",
            customizeText: function(arg) {
                return arg.valueText + " ( " + arg.percentText + ")";
            }
        }
    }]
});








/*******************************************
Doughnut Chart
*******************************************/

$("#doughnut-chart").dxPieChart({
    dataSource: [
				{region: "Asia", val: 4119626293},
				{region: "Africa", val: 1012956064},
				{region: "Northern America", val: 344124520},
				{region: "Latin America and the Caribbean", val: 590946440},
				{region: "Europe", val: 727082222},
				{region: "Oceania", val: 35104756}
			],
	legend: {
		visible: false
	},
	palette: ["#6bb802", "#7c37c3", "#0861ce", "#fbd005", "#4fcdfc", "#00b19d", "#ff6264"],
	series: [{
		type: "doughnut",
		argumentField: "region",
		label: {
			visible: true,
			format: "millions",
			connector: {
				visible: true
			}
		}
	}]
});










/*******************************************
Spline Area
*******************************************/

	$("#splineArea-chart").dxChart({
		
		title: {visible: false},
		dataSource: [
			{ time: "Jan", y2005: 0, y2004: 0},
			{ time: "Feb", y2005: 10, y2004: 48},
			{ time: "Mar", y2005: 41, y2004: 20},
			{ time: "Apr", y2005: 12, y2004: 127},
			{ time: "May", y2005: 89, y2004: 25},
			{ time: "Jun", y2005: 10, y2004: 480},
			{ time: "Jul", y2005: 290, y2004: 12.32},
			{ time: "Aug", y2005: 60, y2004: 185.2},
			{ time: "Sep", y2005: 23, y2004: 28.2},
			{ time: "Oct", y2005: 44, y2004: 70.54},
			{ time: "Nov", y2005: 0, y2004: 0}
		],
		commonSeriesSettings: {
			type: "splineArea",
		argumentField: "time",
			label: {visible: false},
		},
		argumentAxis:{
			valueMarginsEnabled: true
		},
		valueAxis:{
		grid:{
			color: '#9D9EA5',
			width: 0.1
			}
		},
		series: [
			{ valueField: "y2005", name: "Microsoft", color: '#FF404B', opacity: 0.8 },
			{ valueField: "y2004", name: "Google Inc", color: '#8D82B5', opacity: 0.8 }
		],
		legend: {
			/*visible: true,
			horizontalAlignment: 'right',
			verticalAlignment: 'top',
			position:'inside',
			backgroundColor: 'transparent',
			markerSize: 6,
			font: { color: '#b2b2b2' }*/
			visible: false
		},
		commonAxisSettings: {
			label: { font: { color: '#9D9EA5' } }
		}
		
	});








