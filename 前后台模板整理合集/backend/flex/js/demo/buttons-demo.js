// Ladda Button Spinners
// Bind normal buttons
Ladda.bind('div:not(.progress-demo) button.ladda-button', {
    timeout: 2000
});

// Bind progress buttons and simulate loading progress
Ladda.bind('.progress-demo button', {
    callback: function(instance) {
        var progress = 0;
        var interval = setInterval(function() {
            progress = Math.min(progress + Math.random() * 0.1, 1);
            instance.setProgress(progress);

            if (progress === 1) {
                instance.stop();
                clearInterval(interval);
            }
        }, 200);
    }
});

// You can control loading explicitly using the JavaScript API
// as outlined below:

// var l = Ladda.create( document.querySelector( 'button' ) );
// l.start();
// l.stop();
// l.toggle();
// l.isLoading();
// l.setProgress( 0-1 );

// Bootstrap Multiselect
$(document).ready(function() {

    $('#multiselect1').multiselect();

    $('#multiselect2').multiselect({
        buttonClass: 'btn btn-green'
    });

    $('#multiselect3').multiselect({
        includeSelectAllOption: true,
        buttonClass: 'btn btn-blue'
    });

    // Add options for example 28.
    for (var i = 1; i <= 100; i++) {
        $('#multiselect4').append('<option value="' + i + '">' + i + '</option>');
    }

    $('#multiselect4').multiselect({
        includeSelectAllOption: true,
        enableFiltering: true,
        maxHeight: 250,
        buttonClass: 'btn btn-orange'
    });

});
