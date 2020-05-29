$(function() {
    
    //===== Form wizards =====//

    $("#wizard1").formwizard({
        formPluginEnabled: false,
        validationEnabled: false,
        focusFirstInput: false,
        disableUIStyles: true
    });

    $("#wizard2").formwizard({
        formPluginEnabled: true,
        validationEnabled: false,
        focusFirstInput: false,
        disableUIStyles: true,
        formOptions: {
            success: function(data) {
                $("#status1").fadeTo(500, 1, function() {
                    $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0);
                })
            },
            beforeSubmit: function(data) {
                $("#data1").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");
            },
            resetForm: true
        }
    });

    $("#wizard3").formwizard({
        formPluginEnabled: true,
        validationEnabled: false,
        focusFirstInput: false,
        formOptions: {
            success: function(data) {
                $("#status2").fadeTo(500, 1, function() {
                    $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0);
                })
            },
            beforeSubmit: function(data) {
                $("#data2").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");
            },
            resetForm: true
        },
        inAnimation: {height: 'show'},
        outAnimation: {height: 'hide'},
        inDuration: 400,
        outDuration: 400,
        easing: 'easeInBack'	//see e.g. http://gsgd.co.uk/sandbox/jquery/easing/ for information on easing
    }
    );


});
