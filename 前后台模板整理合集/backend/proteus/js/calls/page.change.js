/*  ==========================================================================
    Table of Content for Change Password Page:

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
                changePassword: {
                    required: true,
                    minlength: 5
                },
                changePasswordRepeat: {
                    required: true,
                    minlength: 5,
                    equalTo: "#changePassword"
                }
            },
            messages: {
                changePassword: {
                    required: "Please enter a valid password",
                    minlength: jQuery.validator.format("Enter at least {0} characters")
                },
                changePasswordRepeat: {
                    required: "Repeat your password",
                    minlength: jQuery.validator.format("Enter at least {0} characters"),
                    equalTo: "Enter the same password as above"
                }
            }
        });
    }


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var changeForm  = '#changeForm';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runValidation(changeForm);

});