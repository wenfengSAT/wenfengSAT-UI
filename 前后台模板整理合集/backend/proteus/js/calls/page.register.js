/*  ==========================================================================
    Table of Content for Register Page:

    === Function ===
    - runValidation
    - runCheckradios

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
            errorPlacement: function(error, element) {
                if (element.is(":checkbox"))
                    $('.checkbox').addClass('errorTerms');
                else
                    element.after(error);
            },
            success: function(label) {
                console.log(label);
                if (label.is("#registerTerms-error"))
                    $('.checkbox').removeClass('errorTerms');
            },
            rules: {
                registerName: "required",
                registerEmail: {
                    required: true,
                    email: true
                },
                registerPassword: {
                    required: true,
                    minlength: 5
                },
                registerPasswordRepeat: {
                    required: true,
                    minlength: 5,
                    equalTo: "#registerPassword"
                },
                registerTerms: "required"
            },
            messages: {
                registerName: "Enter your name",
                registerEmail: {
                    required: "Please enter a valid email address",
                    minlength: "Please enter a valid email address"
                },
                registerPassword: {
                    required: "Please enter a valid password",
                    minlength: jQuery.validator.format("Enter at least {0} characters")
                },
                registerPasswordRepeat: {
                    required: "Repeat your password",
                    minlength: jQuery.validator.format("Enter at least {0} characters"),
                    equalTo: "Enter the same password as above"
                },
                registerTerms: "Please accept our Terms and Conditions"
            }
        });
    }

/*
    runCheckradios
    ========================================================================== */

    function runCheckradios(input){

        $(input).checkradios({

            checkbox: {

                iconClass:'fa fa-check'

            },

            radio: {

                iconClass:'fa fa-circle'

            }

        });

    }


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var registerForm  = '#registerForm';
    var checkradios = '.checkradios';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runValidation(registerForm);
    runCheckradios(checkradios);

});