$(function () {

    //BEGIN SUBMIT FORM VALIDATION
    $('#btn-valdation-text').live('click', function () {
        var form = $('#form-validation-text');
        form.find('.form-group').addClass('has-error');
    });
    $('#btn-valdation-text-horizontal').live('click', function () {
        var form = $('#form-valdation-text-horizontal');
        form.find('.form-group').addClass('has-error');
    });
    //END SUBMIT FORM VALIDATION

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

    $("#form-register").validate({
        errorElement: 'span',
        errorClass: 'help-block',
        rules: {
            firstname: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            zipcode: {
                required: true
            },
            city: {
                required: true
            }
        },
        messages: {
            firstname: {
                required: "Please specify your first name",
                minlength: "Your first name must consist of at least 2 characters"
            },
            lastname: {
                required: "Please specify your last name",
                minlength: "Your last name must consist of at least 2 characters"
            },
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirmPassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            zipcode: {
                required: "Please provide a Zip Code"
            },
            city: {
                required: "Please provide a City"
            }
        },
        highlight: function (element) { // hightlight error inputs
            $(element)
                .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
        },
        unhighlight: function (element) { // revert the change done by hightlight
            $(element)
                .closest('.form-group').removeClass('has-error'); // set error class to the control group
        }
    });

    $("#advance-form").validate({
        errorElement: 'span',
        errorClass: 'help-block',
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            country: {
                required: true
            },
            acceptTerms: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            website: {
                required: true
            },
            phoneNumber: {
                required: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            zipCode: {
                required: true
            },
            city: {
                required: true
            },
            ages: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            country: {
                required: "Please enter a country"
            },
            email: "Please enter a valid email address",
            website: "The input is not a valid URL",
            phoneNumber: {
                required: "The value can contain only digits"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirmPassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            zipCode: {
                required: "Please provide a Zip Code"
            }
        },
        highlight: function (element) { // hightlight error inputs
            $(element)
                .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
        },
        unhighlight: function (element) { // revert the change done by hightlight
            $(element)
                .closest('.form-group').removeClass('has-error'); // set error class to the control group
        }
    });

});