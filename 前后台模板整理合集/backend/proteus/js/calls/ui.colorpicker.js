/*  ==========================================================================
    Table of Content for Colorpicker:

    === Function ===
	- runBootstrapColorpicker
    - runBootstrapColorpickerSlider

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runBootstrapColorpicker
    ========================================================================== */
function runBootstrapColorpicker(colorpicker){

    $(colorpicker).colorpicker();
}


/*
    runBootstrapColorpickerSlider
    ========================================================================== */
function runBootstrapColorpickerSlider(colorpickerSlider,type){

    switch(type){

        case 'default':
            $(colorpickerSlider).ColorPickerSliders({
              placement: 'bottom',
              hsvpanel: true,
              previewformat: 'hex'
            });
        break;

        case 'small_sized_hsl':
            $(colorpickerSlider).ColorPickerSliders({
                size: 'sm',
                placement: 'bottom',
                swatches: false,
                order: {
                  hsl: 1
                }
            });
        break;

        case 'small_sized_hsv':
            $(colorpickerSlider).ColorPickerSliders({
                size: 'sm',
                placement: 'top',
                swatches: false,
                sliders: false,
                hsvpanel: true
            });
        break;

        case 'default_sized_rgb':
            $(colorpickerSlider).ColorPickerSliders({
                placement: 'top',
                swatches: false,
                order: {
                  rgb: 1
                }
            });
        break;

        case 'large_sized_cie_lch':
            $(colorpickerSlider).ColorPickerSliders({
                size: 'lg',
                placement: 'bottom',
                swatches: false,
                order: {
                  cie: 1
                }
            });
        break;

        case 'swatches_only':
            $(colorpickerSlider).ColorPickerSliders({
                placement: 'bottom',
                color: 'red',
                swatches: ['red', 'green', 'blue', 'yellow','white', 'black'],
                customswatches: false,
                order: {}
            });
        break;

        case 'hsl_with_opdacity_and_swatches':
            $(colorpickerSlider).ColorPickerSliders({
                placement: 'bottom',
                order: {
                  hsl: 1,
                  opacity: 2
                }
            });
        break;
    }

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var bootColorpicker_1       = "#bootColorpicker_1";
    var bootColorpicker_2       = "#bootColorpicker_2";
    var bootColorpicker_3       = "#bootColorpicker_3";
    var bootColorpicker_4       = "#bootColorpicker_4";

    var bootColorpickerSlider_1 = "#bootColorpickerSlider_1";
    var bootColorpickerSlider_2 = "#bootColorpickerSlider_2";
    var bootColorpickerSlider_3 = "#bootColorpickerSlider_3";
    var bootColorpickerSlider_4 = "#bootColorpickerSlider_4";
    var bootColorpickerSlider_5 = "#bootColorpickerSlider_5";
    var bootColorpickerSlider_6 = "#bootColorpickerSlider_6";
    var bootColorpickerSlider_7 = "#bootColorpickerSlider_7";



    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runBootstrapColorpicker(bootColorpicker_1);
    runBootstrapColorpicker(bootColorpicker_2);
    runBootstrapColorpicker(bootColorpicker_3);
    runBootstrapColorpicker(bootColorpicker_4);


    runBootstrapColorpickerSlider(bootColorpickerSlider_1,'default');
    runBootstrapColorpickerSlider(bootColorpickerSlider_2,'small_sized_hsl');
    runBootstrapColorpickerSlider(bootColorpickerSlider_3,'small_sized_hsv');
    runBootstrapColorpickerSlider(bootColorpickerSlider_4,'default_sized_rgb');
    runBootstrapColorpickerSlider(bootColorpickerSlider_5,'large_sized_cie_lch');
    runBootstrapColorpickerSlider(bootColorpickerSlider_6,'swatches_only');
    runBootstrapColorpickerSlider(bootColorpickerSlider_7,'hsl_with_opdacity_and_swatches');

});