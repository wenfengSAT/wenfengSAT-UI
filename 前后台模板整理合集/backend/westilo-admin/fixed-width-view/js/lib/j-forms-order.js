$(document).ready(function(){

    /***************************************/
    /* Cake price */
    /***************************************/
    // Find the price based on the cake size
    var getCakeSizePrice = function() {

        var $cakeSizeObj = $('#order-forms .cake-size input[type="radio"]'),
            $cakeSizePrice = 0;

        $cakeSizeObj.each(function() {
            if (this.checked) {
                $.each( this.attributes, function() {
                    if (this.name === 'data-price') {
                        $cakeSizePrice += parseFloat(this.value);
                    }
                });
            }
        });
        $cakeSizePrice = Math.round(($cakeSizePrice)*100)/100;
        return $cakeSizePrice;
    };

    // Find the price based on the cake filling
    // Multiple select
    var getFillingPrice = function() {

        var $fillingPriceObj = $('#order-forms .filling option:selected'),
            $fillingPrice = 0;

        $fillingPriceObj.each(function() {
            $.each(this.attributes, function() {
                if (this.name === 'data-price') {
                    $fillingPrice += parseFloat(this.value);
                }
            });
        });
        $fillingPrice = Math.round(($fillingPrice)*100)/100;
        return $fillingPrice;
    };

    // Find the price based on the additional things
    var getLovelyThingsPrice = function() {

        var $lovelyThingsObj = $('#order-forms .lovely-things input[type="checkbox"]'),
            $lovelyThingsPrice = 0;

        $lovelyThingsObj.each(function() {
            if (this.checked) {
                $.each( this.attributes, function() {
                    if (this.name === 'data-price') {
                        $lovelyThingsPrice += parseFloat(this.value);
                    }
                });
            }
        });
        $lovelyThingsPrice = Math.round(($lovelyThingsPrice)*100)/100;
        return $lovelyThingsPrice;
    };

    // Find delivery price
    // Single select
    var getDeliveryPrice = function() {

        var $deliveryPrice = 0;

        $deliveryPrice = $('#order-forms .delivery option:selected').attr('data-price');
        $deliveryPrice = parseFloat($deliveryPrice);
        $deliveryPrice = Math.round(($deliveryPrice)*100)/100;
        return $deliveryPrice;
    };

    // Find the total price
    function calculateTotalPrice() {

        var $totalCakePrice = getCakeSizePrice() + getFillingPrice() + getLovelyThingsPrice() + getDeliveryPrice();

        return $totalCakePrice;

    }

    // If any field will be changed - new price will be found
    $('.cake-size, .filling, .lovely-things, .delivery').change(function() {

        $('#total-cake-price').removeClass('hidden');
        $('#total-cake-price span').html(' $' + calculateTotalPrice());

    });
    /***************************************/
    /* end Cake price */
    /***************************************/

    /***************************************/
    /* Show/hide inscription */
    /***************************************/
    $('#show-inscription').change(function() {
        if ( $('#show-inscription').is(':checked') ) {
            $('#inscription').removeClass('hidden');
        } else {
            $('#inscription').addClass('hidden');
            $('#inscription input[type="text"]').val('');
        };
    });
    /***************************************/
    /* end Show/hide inscription */
    /***************************************/

    /***************************************/
    /* Show/hide delivery address */
    /***************************************/
    $('#delivery').change(function() {

        // Variables
        var
            $value = "";

        // Get the value
        $( "#delivery option:selected" ).each(function() {
            $value = $( this ).val();
        });

        // Display fields according to the value
        if ( $value == 'Delivery-5$' ) {
            if ( $("#delivery-address").hasClass("hidden") ) $("#delivery-address").removeClass("hidden");
        } else {
            if ( !$("#delivery-address").hasClass("hidden") ) $("#delivery-address").addClass("hidden");
            $('#delivery-address input[type="text"]').val('');
        };
    });
    /***************************************/
    /* end Show/hide delivery address */
    /***************************************/

        // Phone masking
    $('#phone').mask('(999) 999-9999', {placeholder:'x'});

    /***************************************/
    /* Form validation */
    /***************************************/
    $( '#order-forms' ).validate({

        /* @validation states + elements */
        errorClass: 'error-view',
        validClass: 'success-view',
        errorElement: 'span',
        onkeyup: false,
        onclick: false,
        ignore: "",

        /* @validation rules */
        rules: {
            cake_size: {
                required: true
            },
            'filling[]': {
                required: true
            },
            inscription: {
                required: '#show-inscription:checked'
            },
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            address: {
                required: '#delivery option[value="Delivery-5$"]:selected'
            }
        },
        messages: {
            cake_size: {
                required: 'Please select a cake size'
            },
            'filling[]': {
                required: 'Please select a filling'
            },
            inscription: {
                required: 'Please enter your inscription'
            },
            name: {
                required: 'Please enter your name'
            },
            phone: {
                required: 'Please enter your phone'
            },
            email: {
                required:'Please enter your email',
                email:'Incorrect email format'
            },
            address: {
                required: 'Please enter your address'
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
            $( '#order-forms' ).ajaxSubmit({

                // Server response placement
                target:'#order-forms #response',

                // If error occurs
                error:function(xhr) {
                    $('#order-forms #response').html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
                },

                // Before submiting the form
                beforeSubmit:function(){
                    // Add class 'processing' to the submit button
                    $('#order-forms button[type="submit"]').attr('disabled', true).addClass('processing');
                },

                // If success occurs
                success:function(){
                    // Remove class 'processing'
                    $('#order-forms button[type="submit"]').attr('disabled', false).removeClass('processing');

                    // If response for the server is a 'success-message'
                    if ( $('#order-forms .success-message').length ) {

                        // Remove classes 'error-view' and 'success-view'
                        $('#order-forms .input').removeClass('success-view error-view');
                        $('#order-forms .check').removeClass('success-view error-view');

                        // Hide inscription field
                        if ( !$('#inscription').hasClass('hidden') ) {
                            $('#inscription').addClass('hidden');
                        };

                        // Reset form
                        $('#order-forms').resetForm();

                        // Hide total price div
                        $('#total-cake-price').addClass('hidden');

                        // Prevent submitting the form while success message is shown
                        $('#order-forms button[type="submit"]').attr('disabled', true);

                        setTimeout(function(){
                            // Delete success message after 5 seconds
                            $('#order-forms #response').removeClass('success-message').html('');

                            // Make submit button available
                            $('#order-forms button[type="submit"]').attr('disabled', false);
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


