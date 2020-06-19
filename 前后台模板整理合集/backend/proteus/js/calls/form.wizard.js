/*  ==========================================================================
    Table of Content for Form Wizard:

    === Function ===
    - runSteps

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runSteps
    ========================================================================== */
function runSteps(step,type){

    switch(type){

        case 'default':

            var form = $(step);
            form.validate({
                errorPlacement: function errorPlacement(error, element) { element.after(error); },
                rules: {
                    confirm: {
                        equalTo: "#password"
                    }
                }
            });
            form.children("div").steps({
                headerTag: "h3",
                bodyTag: "section",
                transitionEffect: "slideLeft",
                onStepChanging: function (event, currentIndex, newIndex)
                {
                    form.validate().settings.ignore = ":disabled,:hidden";
                    return form.valid();
                },
                onFinishing: function (event, currentIndex)
                {
                    form.validate().settings.ignore = ":disabled";
                    return form.valid();
                },
                onFinished: function (event, currentIndex)
                {
                    alert("Submitted!");
                }
            });
        break;

        case 'vertical':

            var form = $(step);
            form.validate({
                errorPlacement: function errorPlacement(error, element) { element.after(error); },
                rules: {
                    confirm: {
                        equalTo: "#password-v"
                    }
                }
            });
            form.children("div").steps({
                headerTag: "h3",
                bodyTag: "section",
                transitionEffect: "slide",
                stepsOrientation: "vertical",
                onStepChanging: function (event, currentIndex, newIndex)
                {
                    form.validate().settings.ignore = ":disabled,:hidden";
                    return form.valid();
                },
                onFinishing: function (event, currentIndex)
                {
                    form.validate().settings.ignore = ":disabled";
                    return form.valid();
                },
                onFinished: function (event, currentIndex)
                {
                    alert("Submitted!");
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
    var stepDefault  = '#wizardDefault';
    var stepVertical = '#wizardVertical';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runSteps(stepDefault,'default');
    runSteps(stepVertical,'vertical');

});