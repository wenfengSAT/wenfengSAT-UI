$(document).ready(function() {

    //Load Wizards
    $('#basicwizard').stepy();
    $('#wizard').stepy({finishButton: true, titleClick: true, block: true, validate: true});

    //Add Wizard Compability - see docs
    $('.stepy-navigator').wrapInner('<div class="pull-right"></div>');

    //Make Validation Compability - see docs
    $('#wizard').validate({
        errorClass: "help-block",
        validClass: "help-block",
        highlight: function(element, errorClass,validClass) {
           $(element).closest('.form-group').addClass("has-error");
        },
        unhighlight: function(element, errorClass,validClass) {
            $(element).closest('.form-group').removeClass("has-error");
        }
     });
    
});