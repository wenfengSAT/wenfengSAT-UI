jQuery(function ($) {
    'use strict';
    $('form.form-horizontal').validate({
        highlight: function (element) {
            jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            jQuery(element).closest('.form-group').removeClass('has-error');
        },
        rules: {
            passwordAgain: {
                equalTo: 'password'
            }
        },
        errorElement: 'span',
        errorClass: 'help-block jq-validate-error',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else if (element.prop('type') === 'checkbox') {
                error.appendTo(element.closest('.checkbox').parent());
            } else if (element.prop('type') === 'radio') {
                error.appendTo(element.closest('.radio').parent());
            }
            else {
                error.insertAfter(element);
            }
        }
    });
});
