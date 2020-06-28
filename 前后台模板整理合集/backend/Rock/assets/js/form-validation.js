$(function () {

    /* Begin jQuery Select2 */
    $(".select2, .select2-multiple").select2();
    $("#state").select2({
        placeholder: "Select a State"
    });
    /* End jQuery Select2 */

    $('#basic-form').bootstrapValidator({
        live: 'submitted',
        feedbackIcons: {
            valid: '',
            invalid: '',
            validating: ''
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Username is required'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required'
                    },
                    numeric: {
                        message: 'The price must be a number'
                    }
                }
            },
            amount: {
                validators: {
                    notEmpty: {
                        message: 'The amount is required'
                    },
                    numeric: {
                        message: 'The amount must be a number'
                    }
                }
            },
            color: {
                validators: {
                    notEmpty: {
                        message: 'The color is required'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            'languages[]': {
                validators: {
                    choice: {
                        min: 1,
                        max: 2,
                        message: 'Please choose 1 - 2 languages you can speak'
                    }
                }
            }
        }
    });

    $('#advanced-form')
        .find('[name="colors"]')
            .select2()
            // Revalidate the color when it is changed
            .change(function(e) {
                $('#advanced-form').bootstrapValidator('revalidateField', 'colors');
            })
        .end()
//        .find('input[name="job"], input[name="languages[]"]')
//            // Init iCheck elements
//            .iCheck({
//                checkboxClass: 'icheckbox_minimal-grey',
//                radioClass: 'iradio_minimal-grey'
//            })
//            // Called when the radios/checkboxes are changed
//            .on('ifChanged', function(e) {
//                // Get the field name
//                var field = $(this).attr('name');
//                $('#advanced-form').bootstrapValidator('revalidateField', field);
//            })
//            .end()
        .bootstrapValidator({
        live: 'submitted',
        feedbackIcons: {
            valid: '',
            invalid: '',
            validating: ''
        },
        fields: {
            country: {
                validators: {
                    choice: {
                        min: 1,
                        max: 1,
                        message: 'Please choose a State you like most'
                    }
                }
            },
            colors: {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(value, validator) {
                            // Get the selected options
                            var options = validator.getFieldElements('colors').val();
                            return (options != null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            },
            job: {
                validators: {
                    notEmpty: {
                        message: 'The job position is required'
                    }
                }
            },
            'languages[]': {
                validators: {
                    choice: {
                        min: 1,
                        max: 3,
                        message: 'Please choose 1 - 3 programming languages you are good at'
                    }
                }
            }
        }
    })


});

