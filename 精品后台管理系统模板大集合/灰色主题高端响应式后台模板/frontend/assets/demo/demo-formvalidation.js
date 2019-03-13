$(document).ready(function () {
    //    Normally no JS is required to initialize parsley, however
    //    we will use it to do a faux-validation
    //    Do see the docs for configuration options
    $('#validate-form .btn').on('click', function () {
        $('#validate-form').parsley().validate();
    });
});