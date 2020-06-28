$(function () {
    $('.login-form').bootstrapValidator({
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
            password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required'
                    }
                }
            }
        }
    });

});

