/*global $ */
$(document).ready(function () {
    "use strict";

    //Bootstrap Switch
    $("[name='my-checkbox']").bootstrapSwitch();

    $("[name='my-checkbox-large']").bootstrapSwitch({
        size: 'large'
    });

    $("[name='my-checkbox-small']").bootstrapSwitch({
        size: 'small'
    });

    $("[name='my-checkbox-mini']").bootstrapSwitch({
        size: 'mini'
    });

    $("[name='my-checkbox-color']").bootstrapSwitch({
        onColor: "info",
        offColor: "light-orange"
    });

    $("[name='my-checkbox-text']").bootstrapSwitch({
        onText: "Male",
        offText: "Female"
    });

    $("[name='my-checkbox-state']").bootstrapSwitch();

    $('input[name="my-checkbox-state"]').on('switchChange.bootstrapSwitch', function (event, state) {
        if(state) {
            $('#checkbox-text').html('This switch is on.');
        } else {
            $('#checkbox-text').html('This switch is off.');
        }
    });
    //End Bootstrap Switch
    
    //Tooltips
    $('.tooltips').tooltip();
    //End Tooltips
    
    //Popover
    $('.popovers').popover();
    //End Popover
    
});