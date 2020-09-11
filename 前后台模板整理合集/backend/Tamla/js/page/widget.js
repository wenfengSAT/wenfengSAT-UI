$(function() {
    "use strict";
	/** BEGIN SVG WEATHER ICON **/
	if (typeof Skycons !== 'undefined'){
	var icons = new Skycons(
	  {"color": "#fff"},
	  {"resizeClear": true}
	  ),
         list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;

      for(i = list.length; i--; )
      icons.set(list[i], list[i]);
      icons.play();
	};
   
   if ($('#weather-widget-1').length > 0){
		$("#weather-widget-1").backstretch("images/w-bg.jpg");
	}
	
	
	
	});