(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module depending on jQuery.
        define(['jquery'], factory);
    } else {
        // No AMD. Register plugin with global jQuery object.
        factory(jQuery);
    }
}(function ($) {
    try {
        // Phone masking
        $('#phone').mask('(999) 999-9999', {placeholder:'x'});

        // Post code masking
        $('#post').mask('999-9999', {placeholder:'x'});

        // Credit card masking
        $('#card_number').mask('9999-9999-9999-9999', {placeholder:'x'});

        // CVV2 masking
        $('#cvv2').mask('999', {placeholder:'x'});

        /***************************************/
        /* Datepicker */
        /***************************************/
            // Start date
        function dateFrom(date_from, date_to) {
            $( date_from ).datepicker({
                dateFormat: 'mm/dd/yy',
                prevText: '<i class="zmdi zmdi-chevron-left"></i>',
                nextText: '<i class="zmdi zmdi-chevron-right"></i>',
                onClose: function( selectedDate ) {
                    $( date_to ).datepicker( 'option', 'minDate', selectedDate );

                    // validate this field after focus is lost
                    $( this ).valid();
                }
            });
        };

        // Finish date
        function dateTo(date_from, date_to) {
            $( date_to ).datepicker({
                dateFormat: 'mm/dd/yy',
                prevText: '<i class="zmdi zmdi-chevron-left"></i>',
                nextText: '<i class="zmdi zmdi-chevron-right"></i>',
                onClose: function( selectedDate ) {
                    $( date_from ).datepicker( 'option', 'maxDate', selectedDate );

                    // validate this field after focus is lost
                    $( this ).valid();
                }
            });
        };

        // Destroy date
        function destroyDate (date) {
            $( date ).datepicker('destroy');
        }

        // Initialize date range
        dateFrom('#date_from', '#date_to');
        dateTo('#date_from', '#date_to');
        /***************************************/
        /* end datepicker */
        /***************************************/

        /***************************************/
        /* Form validation */
        /***************************************/
        $( '#j-forms' ).validate({

            /* @validation states + elements */
            errorClass: 'error-view',
            validClass: 'success-view',
            errorElement: 'span',
            onkeyup: false,
            onclick: false,

            /* @validation rules */
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                adults: {
                    required: true,
                    digits: true,
                    range: [0,30]
                },
                children: {
                    required: true,
                    digits: true,
                    range: [0,30]
                },
                date_from: {
                    required: true
                },
                date_to: {
                    required: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                email: {
                    required: 'Please enter your email',
                    email: 'Incorrect email format'
                },
                phone: {
                    required: 'Please enter your phone'
                },
                adults: {
                    required: 'Please field is required'
                },
                children: {
                    required: 'Please field is required'
                },
                date_from: {
                    required: 'Please select check-in date'
                },
                date_to: {
                    required: 'Please select check-out date'
                },
                message: {
                    required: 'Please enter your message'
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
                $( '#j-forms' ).ajaxSubmit({

                    // Server response placement
                    target:'#j-forms #response',

                    // If ajax error occurs
                    error:function(xhr) {
                        $('#j-forms #response').html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
                    },

                    // Before submiting the form
                    beforeSubmit:function(){
                        // Add class 'processing' to the submit button
                        $('#j-forms button[type="submit"]').attr('disabled', true).addClass('processing');
                    },

                    // If ajax success occurs
                    success:function(){
                        // Remove class 'processing'
                        $('#j-forms button[type="submit"]').attr('disabled', false).removeClass('processing');

                        // Remove classes 'error-view' and 'success-view'
                        $('#j-forms .input').removeClass('success-view error-view');
                        $('#j-forms .check').removeClass('success-view error-view');

                        // If response for the server is a 'success-message'
                        if ( $('#j-forms .success-message').length ) {

                            // Reset form
                            $('#j-forms').resetForm();

                            // Destroy old date range
                            destroyDate('#date_from');
                            destroyDate('#date_to');

                            // Initialize new date range
                            dateFrom('#date_from', '#date_to');
                            dateTo('#date_from', '#date_to');

                            // Prevent submitting the form while success message is shown
                            $('#j-forms button[type="submit"]').attr('disabled', true);

                            // Prevent clicking on the 'prev' button
                            $('#j-forms .multi-prev-btn').attr('disabled', true);

                            setTimeout(function(){
                                // Delete success message after 5 seconds
                                $('#j-forms #response').removeClass('success-message').html('');

                                // Make submit button available
                                $('#j-forms button[type="submit"]').attr('disabled', false);

                                // Make 'prev' button available
                                $('#j-forms .multi-prev-btn').attr('disabled', false);

                                // Hide submit button and 'prev' button
                                $('#j-forms .multi-prev-btn').css('display', 'none');
                                $('#j-forms .multi-submit-btn').css('display', 'none');

                                // Make first fieldset from multistep form active
                                $('#j-forms fieldset').removeClass('active-fieldset');
                                $('#j-forms fieldset').eq(0).addClass('active-fieldset');

                                // Show 'next' button
                                $('#j-forms .multi-next-btn').css('display', 'block');
                            }, 5000);
                        }
                    }
                });
            }
        });
        /***************************************/
        /* end form validation */
        /***************************************/

        /***************************************/
        /* Multistep form */
        /***************************************/
        // if multistep form exists
        if ( $('form.j-multistep').length ) {

            // For each multistep form
            // Execute the function
            $('form.j-multistep').each( function() {

                // Variables
                var
                    $id 		= $(this).attr('id'),							// form ID
                    $i			= $('#' + $id + ' fieldset').length,			// number of fieldsets
                    $step		= $('#' + $id + ' .step').length,				// number of steps
                    $next_btn	= $('#' + $id + ' .multi-next-btn'),			// 'next' button
                    $prev_btn	= $('#' + $id + ' .multi-prev-btn'),			// 'previous' button
                    $submit_btn	= $('#' + $id + ' .multi-submit-btn');			// 'submit' button

                // Add class "active-fieldset" to the first fieldset on the page
                $( '#' + $id + ' fieldset').eq(0).addClass('active-fieldset');

                // If class ".step" exists
                // Add class "active-step"
                if ( $step ) {
                    $('#' + $id + ' .step').eq(0).addClass('active-step');
                }

                // If first fieldset has class 'active'
                // Processing the buttons
                if ( $('#' + $id + ' fieldset').eq(0).hasClass('active-fieldset') ) {
                    $submit_btn.css('display', 'none');
                    $prev_btn.css('display', 'none');
                }

                // Click on the "next" button
                $next_btn.on('click', function() {

                    // If current fieldset doesn't have validation errors
                    // Switch to the next step
                    if ($('#' + $id).valid() == true) {

                        // Switch the "active" class to the next fieldset
                        $('#' + $id + ' fieldset.active-fieldset').removeClass('active-fieldset').next('fieldset').addClass('active-fieldset');

                        // If ".step" exists
                        // Switch the "active" class to the next step
                        if ( $step ) {
                            $('#' + $id + ' .step.active-step').removeClass('active-step').addClass('passed-step').next('.step').addClass('active-step');
                        }

                        // Display "prev" button
                        $prev_btn.css('display', 'block');

                        // If active fieldset is a last
                        // processing the buttons
                        if ( $('#' + $id + ' fieldset').eq($i-1).hasClass('active-fieldset') ) {
                            $submit_btn.css('display', 'block');
                            $next_btn.css('display', 'none');
                        }

                        // If current fieldset has validation errors
                    } else {
                        return false;
                    }
                });

                // Click on the "prev" button
                $prev_btn.on('click', function() {

                    // Switch the "active" class to the previous fieldset
                    $('#' + $id + ' fieldset.active-fieldset').removeClass('active-fieldset').prev('fieldset').addClass('active-fieldset');

                    // If ".step" exists
                    // Switch the "active" class to the previous step
                    if ( $step ) {
                        $('#' + $id + ' .step.active-step').removeClass('active-step').prev('.step').removeClass('passed-step').addClass('active-step');
                    }

                    // If active fieldset is a first
                    // processing the buttons
                    if ( $('#' + $id + ' fieldset').eq(0).hasClass('active-fieldset') ) {
                        $prev_btn.css('display', 'none');
                    }

                    // If active fieldset is a penultimate
                    // processing the buttons
                    if ( $('#' + $id + ' fieldset').eq($i-2).hasClass('active-fieldset') ) {
                        $submit_btn.css('display', 'none');
                        $next_btn.css('display', 'block');
                    }
                });
            });
            // end "each" statement
        }
        /***************************************/
        /* end multistep form */
        /***************************************/


            // Reload the captcha
        function reloadCaptcha(){
            $('.captcha img').attr('src', 'php/captcha/captcha-image.php?x=' + Math.random());
        }

        /***************************************/
        /* Form validation */
        /***************************************/
        $( '#j-forms-captcha' ).validate({

            /* @validation states + elements */
            errorClass: 'error-view',
            validClass: 'success-view',
            errorElement: 'span',
            onkeyup: false,
            onclick: false,

            /* @validation rules */
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true
                },
                time: {
                    required: true
                },
                message: {
                    required: true,
                    minlength: 20
                },
                captcha_code: {
                    required: true,
                    remote: 'php/captcha/captcha-processing.php'
                }
            },
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                phone: {
                    required: 'Please enter your phone'
                },
                time: {
                    required: 'Please select time'
                },
                message: {
                    required: 'Please enter your message'
                },
                captcha_code: {
                    required: 'Captcha is required',
                    remote: 'Correct captcha is required'
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
                $( '#j-forms-captcha' ).ajaxSubmit({

                    // Server response placement
                    target:'#j-forms-captcha #response',

                    // If error occurs
                    error:function(xhr) {
                        $('#j-forms-captcha #response').html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
                    },

                    // Before submiting the form
                    beforeSubmit:function(){
                        // Add class 'processing' to the submit button
                        $('#j-forms-captcha button[type="submit"]').attr('disabled', true).addClass('processing');
                    },

                    // If success occurs
                    success:function(){
                        // Remove class 'processing'
                        $('#j-forms-captcha button[type="submit"]').attr('disabled', false).removeClass('processing');

                        // Remove classes 'error-view' and 'success-view'
                        $('#j-forms-captcha .input').removeClass('success-view error-view');
                        $('#j-forms-captcha .check').removeClass('success-view error-view');

                        // If response from the server is a 'success-message'
                        if ( $('#j-forms-captcha .success-message').length ) {

                            // Reset form
                            $('#j-forms-captcha').resetForm();

                            // Reload the captcha
                            reloadCaptcha();

                            // Prevent submitting the form while success message is shown
                            $('#j-forms-captcha button[type="submit"]').attr('disabled', true);

                            setTimeout(function(){
                                // Delete success message after 5 seconds
                                $('#j-forms-captcha #response').removeClass('success-message').html('');

                                // Make submit button available
                                $('#j-forms-captcha button[type="submit"]').attr('disabled', false);
                            }, 5000);
                        }
                    }
                });
            }
        });
        /***************************************/
        /* end form validation */
        /***************************************/


        /***************************************/
        /* Form validation */
        /***************************************/
        $( '#j-forms-checkout' ).validate({

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
                $( '#j-forms-checkout' ).ajaxSubmit({

                    // Server response placement
                    target:'#j-forms-checkout #response',

                    // If error occurs
                    error:function(xhr) {
                        $('#j-forms-checkout #response').html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
                    },

                    // Before submiting the form
                    beforeSubmit:function(){
                        // Add class 'processing' to the submit button
                        $('#j-forms-checkout button[type="submit"]').attr('disabled', true).addClass('processing');
                    },

                    // If success occurs
                    success:function(){
                        // Remove class 'processing'
                        $('#j-forms-checkout button[type="submit"]').attr('disabled', false).removeClass('processing');

                        // Remove classes 'error-view' and 'success-view'
                        $('#j-forms-checkout .input').removeClass('success-view error-view');
                        $('#j-forms-checkout .check').removeClass('success-view error-view');

                        // If response from the server is a 'success-message'
                        if ( $('#j-forms-checkout .success-message').length ) {

                            // Reset form
                            $('#j-forms-checkout').resetForm();

                            // Prevent submitting the form while success message is shown
                            $('#j-forms-checkout button[type="submit"]').attr('disabled', true);

                            setTimeout(function(){
                                // Delete success message after 5 seconds
                                $('#j-forms-checkout #response').removeClass('success-message').html('');

                                // Make submit button available
                                $('#j-forms-checkout button[type="submit"]').attr('disabled', false);
                            }, 5000);
                        }
                    }
                });
            }
        });
        /***************************************/
        /* end form validation */
        /***************************************/


        /***************************************/
        /* Cloned element */
        /***************************************/
        $('.clone-widget').cloneya();

        $('.clone-rightside-btn-1').cloneya();

        $('.clone-rightside-btn-2').cloneya();

        $('.clone-leftside-btn-1').cloneya();

        $('.clone-leftside-btn-2').cloneya();

        $('.clone-link').cloneya();
        /***************************************/
        /* end Cloned element */
        /***************************************/




        /***************************************/
        /* single Data list */
        /***************************************/
        $('#list-autocomplete').autocomplete({
            source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ],
            messages: {
                noResults:''
            }
        });
        /***************************************/
        /* end single Data list */
        /***************************************/

        /***************************************/
        /* multiple Data list */
        /***************************************/
        $(function(){

            // array with values for the field
            var listTags = [
                "ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"
            ];

            function split( val ) {
                return val.split( /,\s*/ );
            }

            function extractLast( term ) {
                return split( term ).pop();
            }

            $( "#multi-list-autocomplete" )
                // don't navigate away from the field on tab when selecting an item
                .bind( "keydown", function( event ) {
                    if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).autocomplete( "instance" ).menu.active ) {
                        event.preventDefault();
                    }
                })
                .autocomplete({
                    minLength: 0,
                    source: function( request, response ) {
                        // delegate back to autocomplete, but extract the last term
                        response( $.ui.autocomplete.filter(
                            listTags, extractLast( request.term ) ) );
                    },
                    focus: function() {
                        // prevent value inserted on focus
                        return false;
                    },
                    select: function( event, ui ) {
                        var terms = split( this.value );
                        // remove the current input
                        terms.pop();
                        // add the selected item
                        terms.push( ui.item.value );
                        // add placeholder to get the comma-and-space at the end
                        terms.push( "" );
                        this.value = terms.join( ", " );
                        return false;
                    }
                });
        });
        /***************************************/
        /* end multiple Data list */
        /***************************************/
        if($.fn.spectrum){
            // HEX
            $("#hex").spectrum({
                color: "#f00",
                preferredFormat: "hex",
                showInput: true
            });
            // HSL
            $("#hsl").spectrum({
                color: "#c34040",
                preferredFormat: "hsl",
                showInput: true
            });
            // RGB
            $("#rgb").spectrum({
                color: "#dbc75e",
                preferredFormat: "rgb",
                showInput: true
            });
            // Alpha RGB
            $("#a-rgb").spectrum({
                showAlpha: true,
                color: "#3dbb8f",
                preferredFormat: "rgb",
                showInput: true
            });
            // Alpha HSL
            $("#a-hsl").spectrum({
                showAlpha: true,
                color: "#8bc177",
                preferredFormat: "hsl",
                showInput: true
            });
            // Palette
            $("#palette1").spectrum({
                color: "#9257b4",
                preferredFormat: "hex",
                showInput: true,
                showPalette: true,
                palette: [
                    ['#000', '#fff', '#ffebcd'],
                    ['#ff8000', '#448026', '#ffffe0']
                ]
            });
            // Palette only
            $("#palette2").spectrum({
                showPaletteOnly: true,
                showPalette:true,
                color: '#780707',
                palette: [
                    ['#000', '#fff', '#ffebcd','#ff8000', '#448026'],
                    ['#ff0000', '#fff700', '#75b274', '#1d31c3', '#9257b4']
                ]
            });
            // Method "show"
            $("#hex, #hsl, #rgb, #a-hsl, #a-rgb, #palette1, #palette2").show();
        }

        // Single date with icon
        $(function(){
            $("#date-icon").datepicker({
                dateFormat: 'mm/dd/yy',
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>'
            });
        });
        // Single date with widget
        $(function(){
            $("#date-widget").datepicker({
                dateFormat: 'mm/dd/yy',
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>'
            });
        });
        // Popup time interval
        $(function() {
            $( "#popup-from" ).datepicker({
                dateFormat: 'mm/dd/yy',
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
                onClose: function( selectedDate ) {
                    $( "#popup-to" ).datepicker( "option", "minDate", selectedDate );
                }
            });
            $( "#popup-to" ).datepicker({
                dateFormat: 'mm/dd/yy',
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
                onClose: function( selectedDate ) {
                    $( "#popup-from" ).datepicker( "option", "maxDate", selectedDate );
                }
            });
        });
        // Inline time interval
        $(function() {
            $( "#inline-from" ).datepicker({
                dateFormat: 'mm/dd/yy',
                altField: '#inline-range-from',
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
                onSelect: function( selectedDate ) {
                    $( "#inline-to" ).datepicker( "option", "minDate", selectedDate );
                }
            });
            $( "#inline-to" ).datepicker({
                dateFormat: 'mm/dd/yy',
                altField: '#inline-range-to',
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
                onSelect: function( selectedDate ) {
                    $( "#inline-from" ).datepicker( "option", "maxDate", selectedDate );
                }
            });
        });
        //Inline date
        $(function(){
            $("#inline").datepicker({
                dateFormat: 'mm/dd/yy',
                altField: "#inline-single",
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>'
            });
        });

        if($.fn.autoNumeric){
            /***************************************/
            /* Initiallizing for the plugin */
            /***************************************/
            $('.currency').autoNumeric('init');
            /***************************************/
            /* end Initiallizing for the plugin */
            /***************************************/

            /***************************************/
            /* Select currency section */
            /***************************************/
            $('#input-select-currency').autoNumeric('init');

            $('#radio-select-currency').change(function(){
                var value = $('#radio-select-currency input:checked').val();

                if ( value == 'dollar') {
                    $('#input-select-currency').autoNumeric('update', {aSign: '$ '});
                }
                if ( value == 'euro') {
                    $('#input-select-currency').autoNumeric('update', {aSign: '€ '});
                }
                if ( value == 'pound') {
                    $('#input-select-currency').autoNumeric('update', {aSign: '£ '});
                }
                if ( value == 'yen') {
                    $('#input-select-currency').autoNumeric('update', {aSign: '¥ '});
                }
            }).change();
            /***************************************/
            /* end Select currency section */
            /***************************************/
        }


        // Single date time picker
        $('#timepic-1').datetimepicker({
            prevText: '<i class="fa fa-caret-left"></i>',
            nextText: '<i class="fa fa-caret-right"></i>'
        });
////////////////////////////////////////////////////////////
        // Single time picker
        $('#timepic-2').timepicker({
            prevText: '<i class="fa fa-caret-left"></i>',
            nextText: '<i class="fa fa-caret-right"></i>'
        });
///////////////////////////////////////////////////////////
        // Popup date/time interval
        var startPopupTime = $('#pop-time-1');
        var endPopupTime = $('#pop-time-2');
        $.timepicker.datetimeRange(
            startPopupTime,
            endPopupTime,
            {
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
                minInterval: (1000*60*60), // 1hr time difference
                dateFormat: 'mm/dd/yy',
                timeFormat: 'HH:mm',
                start: {}, // start picker options
                end: {} // end picker options
            }
        );
//////////////////////////////////////////////////////////////
        // Inline date/time picker
        $('#i-single').datetimepicker({
            prevText: '<i class="fa fa-caret-left"></i>',
            nextText: '<i class="fa fa-caret-right"></i>',
            altField: "#i-single-alt",
            altFieldTimeOnly: false
        });
    } catch (e) {

    }



}));
