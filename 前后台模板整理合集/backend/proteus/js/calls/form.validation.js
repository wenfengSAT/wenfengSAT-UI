/*  ==========================================================================
    Table of Content for Form Validation:

    === Function ===
    - runValidate
    - runCheckradios

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runValidate
    ========================================================================== */
    function runValidate(form,type){

        $(form).validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                agree: "required",
                gender_v: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "Please enter a valid email address",
                agree: "Please accept our policy",
                gender_v: "Please select your gender"
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
    var validateDefault  = '#validateDefault',
        checkradios = '.checkradios';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runValidate(validateDefault,'default');
    runCheckradios(checkradios);

});