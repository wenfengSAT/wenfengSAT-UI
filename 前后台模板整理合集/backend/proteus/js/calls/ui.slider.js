/*  ==========================================================================
    Table of Content for Sliders:

    === Function ===
	- runUiSlider
    - runUiSliderPips

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runUiSlider
    ========================================================================== */
function runUiSlider(uislider,type){

    switch(type){

        case 'horizontal':
            $(uislider).slider();
        break;

        case 'range':
            $(uislider).slider({
                  range: true,
                  min: 0,
                  max: 500,
                  values: [ 75, 300 ],
                  slide: function( event, ui ) {
                    $( "#amount_1" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                  }
            });
            $( "#amount_1" ).val( "$" + $(uislider).slider( "values", 0 ) +
              " - $" + $(uislider).slider( "values", 1 ) );

        break;

        case 'snap':
            $(uislider).slider({
              value:100,
              min: 0,
              max: 500,
              step: 50,
              slide: function( event, ui ) {
                $( "#amount_2" ).val( "$" + ui.value );
              }
            });
            $( "#amount_2" ).val( "$" + $(uislider).slider( "value" ) );
        break;

        case 'vertical':
            $(uislider).slider({
              orientation: "vertical",
              range: "min",
              min: 0,
              max: 100,
              value: 60
            });
        break;


        case 'vertical_range':
            $(uislider).slider({
              orientation: "vertical",
              range: true,
              values: [ 17, 67 ],
              slide: function( event, ui ) {
                $( "#amount_3" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              }
            });
            $( "#amount_3" ).val( "$" + $(uislider).slider( "values", 0 ) +
              " - $" + $(uislider).slider( "values", 1 ) );
        break;

    }

}


/*
    runUiSliderPips
    ========================================================================== */
function runUiSliderPips(uislider,type){

    switch(type){

        case 'basic_pips':
            var $uislider = $(uislider).slider({ max: 30 , value: 15 });

            $uislider.slider("pips");
        break;

        case 'basic_floats':
            var $uislider = $(uislider).slider({ max: 30 , value: 15 });

            $uislider.slider("float");
        break;

        case 'basic_both':
            $(uislider).slider({ max: 30 }).slider("pips").slider("float", { pips: true });
        break;

        case 'labeled':
            $(uislider).slider({ max: 20 }).slider("pips" , { rest: "label" });
        break;

        case 'range_hidden_label':
            $(uislider).slider({ max: 26, range: true, values: [ 8, 18 ] }).slider("pips" , { rest: false });
        break;

        case 'only_pips':
            $(uislider).slider({ max: 30 }).slider("pips", {  first: "pip",  last: "pip" });
        break;

        case 'with_fix':
            $(uislider).slider({ max: 10, value: 5 }).slider("pips", {  rest: "label", prefix: "$" , suffix: ".00" });
        break;

        case 'with_custom_label':
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            $(uislider).slider({ min: 0, max: 11, value: 5 });
            $(uislider).slider("pips" , { rest: "label", labels: months })
            $(uislider).on("slidechange", function(e,ui) {
                $("#custom_label_output").text( "You selected " + months[ui.value] );
            });
        break;

        case 'vertical_1':
            $(uislider).slider({ min: 0, max: 100, step: 10, orientation: "vertical" });
            $(uislider).slider("pips");
        break;

        case 'vertical_2':
            var suffix = "°c"

            $(uislider).slider({ max: 100, step: 10, orientation: "vertical" });
            $(uislider).slider("pips", { suffix: suffix });
            $(uislider).slider("float", { suffix: suffix });
        break;



    }

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var jqueryUiSlider_1 = "#jqueryUiSlider_1",
        jqueryUiSlider_2 = "#jqueryUiSlider_2",
        jqueryUiSlider_3 = "#jqueryUiSlider_3",
        jqueryUiSlider_4 = "#jqueryUiSlider_4";


    var jqueryUiSliderPips_1 = "#jqueryUiSliderPips_1",
        jqueryUiSliderPips_2 = "#jqueryUiSliderPips_2",
        jqueryUiSliderPips_3 = "#jqueryUiSliderPips_3",
        jqueryUiSliderPips_4 = "#jqueryUiSliderPips_4",
        jqueryUiSliderPips_5 = "#jqueryUiSliderPips_5",
        jqueryUiSliderPips_6 = "#jqueryUiSliderPips_6",
        jqueryUiSliderPips_7 = "#jqueryUiSliderPips_7",
        jqueryUiSliderPips_8 = "#jqueryUiSliderPips_8",
        jqueryUiSliderPips_9 = "#jqueryUiSliderPips_9",
        jqueryUiSliderPips_10 = "#jqueryUiSliderPips_10";

    var jqueryPrimaryUiSlider = "#jqueryPrimaryUiSlider",
        jquerySuccessUiSlider = "#jquerySuccessUiSlider",
        jqueryInfoUiSlider    = "#jqueryInfoUiSlider",
        jqueryWarningUiSlider = "#jqueryWarningUiSlider",
        jqueryDangerUiSlider  = "#jqueryDangerUiSlider";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runUiSlider(jqueryUiSlider_1, 'horizontal');
    runUiSlider(jqueryUiSlider_2, 'range');
    runUiSlider(jqueryUiSlider_3, 'snap');
    runUiSlider(jqueryUiSlider_4, 'vertical');
    runUiSlider(jqueryUiSlider_5, 'vertical_range');


    runUiSliderPips(jqueryUiSliderPips_1,'basic_pips');
    runUiSliderPips(jqueryUiSliderPips_2,'basic_floats');
    runUiSliderPips(jqueryUiSliderPips_3,'basic_both');
    runUiSliderPips(jqueryUiSliderPips_4,'labeled');
    runUiSliderPips(jqueryUiSliderPips_5,'range_hidden_label');
    runUiSliderPips(jqueryUiSliderPips_6,'only_pips');
    runUiSliderPips(jqueryUiSliderPips_7,'with_fix');
    runUiSliderPips(jqueryUiSliderPips_8,'with_custom_label');
    runUiSliderPips(jqueryUiSliderPips_9,'vertical_1');
    runUiSliderPips(jqueryUiSliderPips_10,'vertical_2');

    runUiSlider(jqueryPrimaryUiSlider, 'range');
    runUiSlider(jquerySuccessUiSlider, 'range');
    runUiSlider(jqueryInfoUiSlider,    'range');
    runUiSlider(jqueryWarningUiSlider, 'range');
    runUiSlider(jqueryDangerUiSlider,  'range');

});