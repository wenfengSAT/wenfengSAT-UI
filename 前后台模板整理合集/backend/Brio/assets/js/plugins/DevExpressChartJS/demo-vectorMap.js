/****************************************
Vector Map 1
****************************************/

var mapData1 = {
    "China": 19,
    "India": 17.4,
    "United States of America": 4.44,
    "Indonesia": 3.45,
    "Brazil": 2.83,
    "Pakistan": 2.62,
    "Nigeria": 2.42,
    "Bangladesh": 2.18,
    "Russia": 2.04,
    "Japan": 1.77,
    "Mexico": 1.67,
    "Philippines": 1.39,
    "Vietnam": 1.25,
    "Ethiopia": 1.23,
    "Egypt": 1.21,
    "Germany": 1.13,
    "Iran": 1.08,
    "Turkey": 1.07,
    "Democratic Republic of the Congo": 0.94,
    "France": 0.92,
    "Thailand": 0.9,
    "United Kingdom": 0.89,
    "Italy": 0.85,
    "Burma": 0.84,
    "South Africa": 0.74,
    "South Korea": 0.7,
    "Colombia": 0.66,
    "Spain": 0.65,
    "Tanzania": 0.63,
    "Kenya": 0.62,
    "Ukraine": 0.6,
    "Argentina": 0.59,
    "Algeria": 0.54,
    "Poland": 0.54,
    "Sudan": 0.52,
    "Canada": 0.49,
    "Uganda": 0.49,
    "Iraq": 0.47,
    "Morocco": 0.46,
    "Uzbekistan": 0.43
};



var getPaletteIndex = function (percent) {
    if (percent < 0.5) {
        return 0;
    } else if (percent < 0.8) {
        return 1;
    } else if (percent < 1) {
        return 2;
    } else if (percent < 2) {
        return 3;
    } else if (percent < 3) {
        return 4;
    } else {
        return 5;
    }
};

$('#demo-map-1').dxVectorMap({
    mapData: DevExpress.viz.map.sources.world,
    bounds: [-180, 85, 180, -60],
	zoomFactor: 2.5,
	controlBar: {
	enabled: false
	},
	areaSettings: {
	    palette: 'Violet',
		paletteSize: 6,
		customize: function(arg) {
		    var percent = mapData1[arg.attributes.name];
		    if(percent) {
		        return {
		            paletteIndex: getPaletteIndex(percent)
		        };
		    }
		}
	},
	tooltip: {
	    enabled: true,
	    customizeTooltip: function(arg) {
	        var name = arg.attribute("name"),
                percent = mapData1[name];
	        if(percent) {
	            return { text: name + ": " + percent + "% of world population" }
	        }
	    }
	}
});









/*******************************************
Vector Map
*******************************************/

var mapMarkers2 = [
	{
		coordinates: [-74, 40.7],
		text: 'New York City',
		value: 8406
	},
	{
		coordinates: [100.47, 13.75],
		text: 'Bangkok',
		value: 8281
	},
	{
		coordinates: [44.43, 33.33],
		text: 'Baghdad',
		value: 7181
	},
	{
		coordinates: [37.62, 55.75],
		text: 'Moscow',
		value: 12111
	},
	{
		coordinates: [121.5, 31.2],
		text: 'Shanghai',
		value: 24150
	},
	{
		coordinates: [-43.18, -22.9],
		text: 'Rio de Janeiro',
		value: 6429
	},
	{
		coordinates: [31.23, 30.05],
		text: 'Cairo',
		value: 8922
	},
	{
		coordinates: [28.95, 41],
		text: 'Istanbul',
		value: 14160
	},
	{
		coordinates: [127, 37.55],
		text: 'Seoul',
		value: 10388
	},
	{
		coordinates: [139.68, 35.68],
		text: 'Tokyo',
		value: 9071
	},
	{
		coordinates: [103.83, 1.28],
		text: 'Singapore',
		value: 5399
	},
	{
		coordinates: [30.3, 59.95],
		text: 'Saint Petersburg',
		value: 5131
	},
	{
		coordinates: [28.03, -26.2],
		text: 'Johannesburg',
		value: 4434
	},
	{
		coordinates: [144.95, -37.8],
		text: 'Melbourne',
		value: 4252
	}
];

var mapData2 = {
    "Russia": { totalArea: 17.12, color: "#9d9ea5" },
    "Canada": { totalArea: 9.98, color: "#9d9ea5" },
    "China": { totalArea: 9.59, color: "#9d9ea5" },
    "United States": { totalArea: 9.52, color: "#9d9ea5" },
    "Brazil": { totalArea: 8.51, color: "#9d9ea5" },
    "Australia": { totalArea: 7.69, color: "#9d9ea5" },
    "India": { totalArea: 3.29, color: "#9d9ea5" },
    "Argentina": { totalArea: 2.78, color: "#9d9ea5" },
    "Kazakhstan": { totalArea: 2.72, color: "#9d9ea5" },
    "Algeria": { totalArea: 2.38, color: "#9d9ea5" }
};

$('#demo-map-2').dxVectorMap({
	mapData: DevExpress.viz.map.sources.world,
	zoomFactor: 4.25,
	controlBar: {
	enabled: false
	},
	markers: mapMarkers2,
	areaSettings: {
		hoverEnabled: false,
		customize: function(arg) {
            var country = mapData2[arg.attributes.name];
            if(country) {
                return {
                    color: country.color,
                }
            }
        }
	},
	markerSettings: {
		type: 'bubble',
		minSize: 60,
		maxSize: 60
	}
});



/*******************************************
Vector Map
*******************************************/
var i = 0;

$('#demo-map-3').dxVectorMap({
    mapData: DevExpress.viz.map.sources.usa,
	controlBar: {
	enabled: false
	},
	 zoomFactor: 8.5,
	center: [-100, 40],
	areaSettings: {
		palette: 'Default',
		paletteSize: 9,
		customize: function () {
		return { paletteIndex: i++ % 9 };
		}
	},
	
});







/*******************************************
Vector Map
*******************************************/

$('#demo-map-4').dxVectorMap({
    mapData: DevExpress.viz.map.sources.africa,
	controlBar: {
	enabled: false
	},
	 zoomFactor: 4.5,
	center: [20, 2],
	areaSettings: {
		palette: 'Harmony Light',
		paletteSize: 9,
		customize: function () {
		return { paletteIndex: i++ % 9 };
		}
	},
	
});




/*******************************************
Vector Map
*******************************************/

$('#demo-map-5').dxVectorMap({
    mapData: DevExpress.viz.map.sources.canada,
	controlBar: {
	enabled: false
	},
	 zoomFactor: 3.5,
	center: [-80, 70],
	areaSettings: {
		palette: 'Ocean',
		paletteSize: 9,
		customize: function () {
		return { paletteIndex: i++ % 9 };
		}
	},
	
});



/*******************************************
Vector Map
*******************************************/

$('#demo-map-6').dxVectorMap({
    mapData: DevExpress.viz.map.sources.europe,
	controlBar: {
	enabled: false
	},
	 zoomFactor: 4.5,
	center: [20, 60],
	areaSettings: {
		palette: 'Vintage',
		paletteSize: 9,
		customize: function () {
		return { paletteIndex: i++ % 9 };
		}
	},
	
});