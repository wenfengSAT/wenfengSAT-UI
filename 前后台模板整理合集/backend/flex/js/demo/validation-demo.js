//Form Validation Demo
$('form#validate').validate({
    rules: {
        textInput: {
            required: true
        },
        textArea: {
            required: true
        }
    },
    messages: {
        textArea: "<i class='fa fa-warning'></i> This field is required."
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
});
