$(function () {

    $('#wizard-option1').bootstrapWizard({'tabClass': 'bwizard-steps'});

    var $validator = $("#checkout-form").bootstrapValidator({
        live: 'submitted',
        feedbackIcons: {
            valid: '',
            invalid: '',
            validating: ''
        },
        fields: {
            emailfield: {
                required: true,
                email: true,
                minlength: 3
            },
            namefield: {
                required: true,
                minlength: 3
            },
            urlfield: {
                required: true,
                minlength: 3,
                url: true
            }
        }
    });

    $('#rootwizard').bootstrapWizard({
        'tabClass': 'nav nav-tabs',
        'onNext': function(tab, navigation, index) {
            alert(index);
            if(index==1) {
                $('#wizard-nav .liner .liner-percent').removeClass('liner-step1').addClass('liner-step2');
                $('#wizard-nav li:eq(1)').addClass('active');
            } else if(index==2) {
                $('#wizard-nav .liner .liner-percent').removeClass('liner-step2').addClass('liner-step3');
                $('#wizard-nav li:eq(2)').addClass('active');
            } else if(index==3) {
                $('#wizard-nav .liner .liner-percent').removeClass('liner-step3').addClass('liner-step4');
                $('#wizard-nav li:eq(3)').addClass('active');
            }
            index = index + 1;
            var $valid = $("#checkout-form").bootstrapValidator();

        }
    });

});

