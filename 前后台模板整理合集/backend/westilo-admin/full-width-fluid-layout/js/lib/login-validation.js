$(document).ready(function(){

    /***************************************/
    /* Form validation */
    /***************************************/
    $( '#forms-login' ).validate({

        /* @validation states + elements */
        errorClass: 'error-view',
        validClass: 'success-view',
        errorElement: 'span',
        onkeyup: false,
        onclick: false,

        /* @validation rules */
        rules: {
            login: {
                required: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            login: {
                required: 'Please enter your login'
            },
            password: {
                required: 'Please enter your password',
                minlength: 'At least 6 characters'
            }
        },
        // Add class 'error-view'
        highlight: function(element, errorClass, validClass) {
            $(element).closest('.input').removeClass(validClass).addClass(errorClass);
            if ( $(element).is(':checkbox') || $(element).is(':radio') ) {
                $(element).closest('.check').removeClass(validClass).addClass(errorClass);
            }
        },
        // Add class 'success-view'
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.input').removeClass(errorClass).addClass(validClass);
            if ( $(element).is(':checkbox') || $(element).is(':radio') ) {
                $(element).closest('.check').removeClass(errorClass).addClass(validClass);
            }
        },
        // Error placement
        errorPlacement: function(error, element) {
            if ( $(element).is(':checkbox') || $(element).is(':radio') ) {
                $(element).closest('.check').append(error);
            } else {
                $(element).closest('.unit').append(error);
            }
        },
        // Submit the form
        submitHandler:function() {
            $( '#forms-login' ).ajaxSubmit({

                // Server response placement
                target:'#forms-login .response',

                // If error occurs
                error:function(xhr) {
                    $('#forms-login .response').html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
                },

                // Before submiting the form
                beforeSubmit:function(){
                    // Add class 'processing' to the submit button
                    $('#forms-login button[type="submit"]').attr('disabled', true).addClass('processing');
                },

                // If success occurs
                success:function(){
                    // Remove class 'processing'
                    $('#forms-login button[type="submit"]').attr('disabled', false).removeClass('processing');

                    // Remove classes 'error-view' and 'success-view'
                    $('#forms-login .input').removeClass('success-view error-view');
                    $('#forms-login .check').removeClass('success-view error-view');

                    // If response for the server is a 'success-message'
                    if ( $('#forms-login .success-message').length ) {

                        // Reset form
                        $('#forms-login').resetForm();

                        // Prevent submitting the form while success message is shown
                        $('#forms-login button[type="submit"]').attr('disabled', true);

                        setTimeout(function(){
                            // Delete success message after 5 seconds
                            $('#forms-login .response').removeClass('success-message').html('');

                            // Make submit button available
                            $('#forms-login button[type="submit"]').attr('disabled', false);
                        }, 5000);
                    }
                }
            });
        }
    });
    /***************************************/
    /* end form validation */
    /***************************************/
});