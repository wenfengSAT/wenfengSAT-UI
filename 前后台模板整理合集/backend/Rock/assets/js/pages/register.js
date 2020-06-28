$(function () {

    function format(state) {
        if (!state.id) return state.text; // optgroup
        return "<img class='flag' src='../../global/images/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
    }
    $("#select2-country").select2({
        placeholder: "Select a Country",
        allowClear: true,
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function (m) {
            return m;
        }
    });

    $('.register-form').bootstrapValidator({
        live: 'submitted',
        feedbackIcons: {
            valid: '',
            invalid: '',
            validating: ''
        },
        fields: {
            firstname: {
                validators: {
                    notEmpty: {
                        message: 'Firstname is required'
                    }
                }
            },
            lastname: {
                validators: {
                    notEmpty: {
                        message: 'Lastname is required'
                    }
                }
            },
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
            },
            rpassword: {
                validators: {
                    notEmpty: {
                        message: 'rpassword is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'email is required'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'Address is required'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Country is required'
                    }
                }
            }
        }
    });

});

