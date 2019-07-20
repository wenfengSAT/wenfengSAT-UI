var BlankonWeather = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonWeather.weatherWidget();
        },

        weatherWidget: function () {
            var icons = new Skycons({"color": "white"},{"resizeClear": true}),
                list  = [
                    "clear-day", "clear-night", "partly-cloudy-day",
                    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                    "fog"
                ],
                i;

            for(i = list.length; i--; )
                icons.set(list[i], list[i]);

            icons.play();
        }

    };

}();

// Call main app init
BlankonWeather.init();