//jQuery UI Slider Demos
$(function() {
    $("#slider-default-demo, #slider-green-demo, #slider-blue-demo, #slider-orange-demo, #slider-red-demo, #slider-purple-demo, #slider-gray-demo").slider({
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        animate: true
    });

    $("#vertical-slider-default-demo, #vertical-slider-green-demo, #vertical-slider-blue-demo, #vertical-slider-orange-demo, #vertical-slider-red-demo, #vertical-slider-purple-demo, #vertical-slider-gray-demo").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        animate: true
    });

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        animate: true,
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    $("#slider-increments").slider({
        range: "min",
        value: 100,
        min: 0,
        max: 500,
        step: 50,
        animate: true,
        slide: function(event, ui) {
            $("#increment-amount").val("$" + ui.value);
        }
    });
    $("#increment-amount").val("$" + $("#slider-increments").slider("value"));
});
