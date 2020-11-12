$(document).ready(function(){

    // Phone masking
    $('#phone').mask('(999) 999-9999', {placeholder:'x'});

    // Post code masking
    $('#post').mask('999-9999', {placeholder:'x'});

    // Credit card masking
    $('#card_number').mask('9999-9999-9999-9999', {placeholder:'x'});

    // CVV2 masking
    $('#cvv2').mask('999', {placeholder:'x'});

    /***************************************/
    /* Form validation */
    /***************************************/
    $( '#checkout-wizard' ).validate({

        /* @validation states + elements */
        errorClass: 'error-view',
        validClass: 'success-view',
        errorElement: 'span',
        onkeyup: false,
        onclick: false,

        /* @validation rules */
        rules: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            country: {
                required: true
            },
            city: {
                required: true
            },
            post: {
                required: true
            },
            address: {
                required: true
            },
            message: {
                required: true,
                minlength: 20
            },
            card_name: {
                required: true
            },
            card_number: {
                required: true
            },
            cvv2: {
                required: true
            },
            card_month: {
                required: true
            },
            card_year: {
                required: true
            }
        },
        messages: {
            first_name: {
                required: 'Please enter your first name'
            },
            last_name: {
                required: 'Please enter your last name'
            },
            email: {
                required: 'Please enter your email',
                email: 'Incorrect email format'
            },
            phone: {
                required: 'Please enter your phone'
            },
            country: {
                required: 'Please select a country'
            },
            city: {
                required: 'Please field is required'
            },
            post: {
                required: 'Please enter a post code'
            },
            address: {
                required: 'Please enter your address'
            },
            message: {
                required: 'Please enter your message'
            },
            card_name: {
                required: 'Please enter name on card'
            },
            card_number: {
                required: 'Please enter a card number'
            },
            cvv2: {
                required: 'Please enter a code'
            },
            card_month: {
                required: 'Please select a month'
            },
            card_year: {
                required: 'Please select a year'
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
            $( '#checkout-wizard' ).ajaxSubmit({

                // Server response placement
                target:'#checkout-wizard #response',

                // If error occurs
                error:function(xhr) {
                    $('#checkout-wizard #response').html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
                },

                // Before submiting the form
                beforeSubmit:function(){
                    // Add class 'processing' to the submit button
                    $('#checkout-wizard button[type="submit"]').attr('disabled', true).addClass('processing');
                },

                // If success occurs
                success:function(){
                    // Remove class 'processing'
                    $('#checkout-wizard button[type="submit"]').attr('disabled', false).removeClass('processing');

                    // Remove classes 'error-view' and 'success-view'
                    $('#checkout-wizard .input').removeClass('success-view error-view');
                    $('#checkout-wizard .check').removeClass('success-view error-view');

                    // If response from the server is a 'success-message'
                    if ( $('#checkout-wizard .success-message').length ) {

                        // Reset form
                        $('#checkout-wizard').resetForm();

                        // Prevent submitting the form while success message is shown
                        $('#checkout-wizard button[type="submit"]').attr('disabled', true);

                        // Prevent clicking on the 'prev' button
                        $('#checkout-wizard .multi-prev-btn').attr('disabled', true);

                        setTimeout(function(){
                            // Delete success message after 5 seconds
                            $('#checkout-wizard #response').removeClass('success-message').html('');

                            // Make submit button available
                            $('#checkout-wizard button[type="submit"]').attr('disabled', false);

                            // Make 'prev' button available
                            $('#checkout-wizard .multi-prev-btn').attr('disabled', false);

                            // Hide submit button and 'prev' button
                            $('#checkout-wizard .multi-prev-btn').css('display', 'none');
                            $('#checkout-wizard .multi-submit-btn').css('display', 'none');

                            // Make first fieldset from multistep form active
                            $('#checkout-wizard fieldset').removeClass('active-fieldset');
                            $('#checkout-wizard fieldset').eq(0).addClass('active-fieldset');

                            // Make first step from multistep form active
                            $('#checkout-wizard .step').removeClass('active-step passed-step');
                            $('#checkout-wizard .step').eq(0).addClass('active-step');

                            // Show 'next' button
                            $('#checkout-wizard .multi-next-btn').css('display', 'block');
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