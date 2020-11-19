$(document).ready(function(){

    /***************************************/
    /* Initiallizing for the Stepper plugin */
    /***************************************/
        // Nummeric stepper for the quantity
    $("#first_field_quantity, #second_field_quantity, #third_field_quantity").stepper({
        limit: [0]
    });
    /***************************************/
    /* end Initiallizing for the Stepper plugin */
    /***************************************/

    /***************************************/
    /* Initiallizing for the AutoNumerric plugin */
    /***************************************/
    $('#third_field_price').autoNumeric('init');
    /***************************************/
    /* end Initiallizing for the AutoNumerric plugin */
    /***************************************/

    /***************************************/
    /* Order processing */
    /***************************************/

    var getFruitTotal = function() {

        // Coconut
        var $firstFieldQuantity = $('#first_field_quantity').val(),
            $firstFieldPrice = 1.30,
            $firstFieldTotal = $('#first_field_total');

        // Watermelon
        var $secondFieldQuantity = $('#second_field_quantity').val(),
            $secondFieldPrice = 3.50,
            $secondFieldTotal = $('#second_field_total');

        // Additional field
        var $thirdFieldQuantity = $('#third_field_quantity').val(),
            $thirdFieldPrice = $('#third_field_price').val().split(' ')[1] || 0,
            $thirdFieldTotal = $('#third_field_total');

        // Totals
        var $rowTotal = 0,
            $fruitTotals = 0,
            $fieldTotals = $('#field_totals');

        $rowTotal = Math.round(($firstFieldQuantity * $firstFieldPrice)*100)/100;
        $firstFieldTotal.val('$ ' + $rowTotal);
        $fruitTotals += $rowTotal;

        $rowTotal = Math.round(($secondFieldQuantity * $secondFieldPrice)*100)/100;
        $secondFieldTotal.val('$ ' + $rowTotal);
        $fruitTotals += $rowTotal;

        $rowTotal = Math.round(($thirdFieldQuantity * $thirdFieldPrice)*100)/100;
        $thirdFieldTotal.val('$ ' + $rowTotal);
        $fruitTotals += $rowTotal;

        $fieldTotals.val('$ ' + $fruitTotals);
    };

    // Execute "getFruitTotal()" function when user click or change fields with values
    $("#order-forms-quantity .fruits-calculation").on('click', function() {
        getFruitTotal();
    });

    $('#order-forms-quantity .fruits-calculation').change(function() {
        getFruitTotal();
    });

    // Add event listeners for "quantity" fields
    // execute "getFruitTotal()" function when user press up and down buttons, scroll mousewheel
    //Firefox
    $('#order-forms-quantity .quantity-events').bind('DOMMouseScroll', function(e){
        if(e.originalEvent.detail > 0) {
            getFruitTotal();
        }else {
            getFruitTotal();
        }
        return false;
    });

    //IE, Opera, Safari
    $('#order-forms-quantity .quantity-events').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0) {
            getFruitTotal();
        }else {
            getFruitTotal();
        }
        return false;
    });

    $('#order-forms-quantity .quantity-events').keyup(function(event){
        if ( (event.keyCode == 38) || (event.keyCode == 40) ) {
            getFruitTotal();
        }
    });

    /***************************************/
    /* end Order processing */
    /***************************************/

        // Phone masking
    $('#phone').mask('(999) 999-9999', {placeholder:'x'});

    /***************************************/
    /* Form validation */
    /***************************************/
    $( '#order-forms-quantity' ).validate({

        /* @validation states + elements */
        errorClass: 'error-view',
        validClass: 'success-view',
        errorElement: 'span',
        onkeyup: false,
        onclick: false,
        ignore: "",

        /* @validation rules */
        rules: {
            first_field_quantity: {
                required: true
            },
            second_field_quantity: {
                required: true
            },
            third_field: {
                required: true
            },
            third_field_quantity: {
                required: true
            },
            third_field_price: {
                required: true
            },
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
        messages: {
            first_field_quantity: {
                required: 'Required'
            },
            second_field_quantity: {
                required: 'Required'
            },
            third_field: {
                required: 'Please enter a fruit'
            },
            third_field_quantity: {
                required: 'Required'
            },
            third_field_price: {
                required: 'Required'
            },
            name: {
                required: 'Please enter your name'
            },
            email: {
                required: 'Please enter your email',
                email: 'Incorrect email format'
            },
            phone: {
                required: 'Please enter your phone'
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
            $( '#order-forms-quantity' ).ajaxSubmit({

                // Server response placement
                target:'#order-forms-quantity #response',

                // If error occurs
                error:function(xhr) {
                    $('#order-forms-quantity #response').html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
                },

                // Before submiting the form
                beforeSubmit:function(){
                    // Add class 'processing' to the submit button
                    $('#order-forms-quantity button[type="submit"]').attr('disabled', true).addClass('processing');
                },

                // If success occurs
                success:function(){
                    // Remove class 'processing'
                    $('#order-forms-quantity button[type="submit"]').attr('disabled', false).removeClass('processing');

                    // If response for the server is a 'success-message'
                    if ( $('#order-forms-quantity .success-message').length ) {

                        // Remove classes 'error-view' and 'success-view'
                        $('#order-forms-quantity .input').removeClass('success-view error-view');
                        $('#order-forms-quantity .check').removeClass('success-view error-view');

                        // Reset form
                        $('#order-forms-quantity').resetForm();

                        // Prevent submitting the form while success message is shown
                        $('#order-forms-quantity button[type="submit"]').attr('disabled', true);

                        setTimeout(function(){
                            // Delete success message after 5 seconds
                            $('#order-forms-quantity #response').removeClass('success-message').html('');

                            // Make submit button available
                            $('#order-forms-quantity button[type="submit"]').attr('disabled', false);
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