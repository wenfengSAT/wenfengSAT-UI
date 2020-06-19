/*  ==========================================================================
    Table of Content for Lock Screen Page:

    === Function ===
	- runValidation

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */


/*
 runValidation
 ========================================================================== */

function runValidation(formId){

    var form = $(formId);
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.after(error); },
        rules: {
            lockScreenPassword: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            lockScreenPassword: {
                required: "Please enter your password",
                minlength: jQuery.validator.format("Enter at least {0} characters")
            }
        }
    });
}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var lockScreenForm  = '#lockScreenForm';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runValidation(lockScreenForm);

    $(".lock-screen-image img").on('click',function(){
       $('#lockScreenPassword').focus();
    });

});