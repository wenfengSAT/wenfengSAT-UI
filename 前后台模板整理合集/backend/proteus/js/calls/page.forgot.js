/*  ==========================================================================
    Table of Content for Forgot Password Page:

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
                forgotEmail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                forgotEmail: {
                    required: "Please enter a valid email address",
                    minlength: "Please enter a valid email address"
                }
            }
        });
    }

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var forgotForm  = '#forgotForm';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runValidation(forgotForm);

});