//////////////////
// Maps Vectors //
//////////////////

"use strict";

$(document).ready(function(){

	/**
	 * circloidMapWorld handles the world map
	 * @param  {string} placeholder		id of graph
	 */
	function circloidMapWorld(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');	

		$(placeholder).vectorMap({
			map: 'world_en',
			backgroundColor: '#FFFFFF',
			color: '#ffffff',
			hoverOpacity: 0.7,
			selectedColor: '#666666',
			enableZoom: true,
			showTooltip: true,
			values: sample_data,
			scaleColors: colors,
			normalizeFunction: 'polynomial'
		});
	}

	/**
	 * circloidMapContinent creates individual continent maps
	 * @param  {string} placeholder		id of graph
	 * @param  {string} continent		name of the continent (as set by JQVMaps)
	 */
	function circloidMapContinent(placeholder, continent){

		if((continent === undefined) || (continent === null)){
			var continent = "europe_en";
		}

		var colors = $(placeholder).data("graph-colors").split(',');	

		$(placeholder).vectorMap({
			map: continent,
			backgroundColor: '#FFFFFF',
			color: colors,
			hoverColor: '#999999',
			enableZoom: true,
			showTooltip: true
		});
	}

	/**
	 * Call Functions
	 */
	 
	circloidMapWorld("#world-map-1");

	circloidMapContinent("#north-america-map-1", "north-america_en");
	circloidMapContinent("#south-america-map-1", "south-america_en");
	circloidMapContinent("#australia-map-1", "australia_en");
	circloidMapContinent("#africa-map-1", "africa_en");
	circloidMapContinent("#asia-map-1", "asia_en");
	circloidMapContinent("#europe-map-1", "europe_en");
});