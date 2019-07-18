$(function(){
    /* ION Range Slider Samples */
    
    //Default
    $("#ise_default").ionRangeSlider();
    //End Default
    
    //Min Max Value
    $("#ise_min_max").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });
    //End Min Max Value
    
    //Prefix
    $("#ise_prefix").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });
    //End Prefix
    
    //Step
    $("#ise_step").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 10000,
        from: 3000,
        to: 7000,
        step: 250
    });
    //End Step
    
    //Custom Values
    $("#ise_custom_values").ionRangeSlider({
        grid: true,
        from: 3,
        values: [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ]
    });    
    //End Custom Values
    
    //Decorate
    $("#ise_decorate").ionRangeSlider({
        type: "double",
        min: 100,
        max: 200,
        from: 145,
        to: 155,
        prefix: "Weight: ",
        postfix: " million pounds",
        decorate_both: false
    });
    //End Decorate
    
    //Disabled
    $("#ise_disabled").ionRangeSlider({
        min: 0,
        max: 100,
        from: 30,
        disable: true
    });
    //End Disabled
    
    /* END ION Range Slider Samples */
});      