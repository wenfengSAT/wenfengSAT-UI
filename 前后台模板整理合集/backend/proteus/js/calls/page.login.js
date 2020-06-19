/*  ==========================================================================
    Table of Content for Login Page:

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
                loginEmail: {
                    required: true,
                    email: true
                },
                loginPassword: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                loginEmail: {
                    required: "Please enter a valid email address",
                    minlength: "Please enter a valid email address"
                },
                loginPassword: {
                    required: "Please enter a valid password",
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
    var loginForm  = '#loginForm';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runValidation(loginForm);

});