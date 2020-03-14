//Tokenfield Initialization and Demo Data
$('#tokenfield').tokenfield({})

$('#tokenfield-autocomplete').tokenfield({
    autocomplete: {
        source: ['red', 'blue', 'green', 'yellow', 'violet', 'brown', 'purple', 'black', 'white'],
        delay: 100
    },
    showAutocompleteOnFocus: true
})

$("#tokenfield-typeahead").tokenfield({
    typeahead: {
        name: "tags",
        local: ["red", "blue", "green", "yellow", "violet", "brown", "purple", "black", "white"]
    }
});

//Max Length Plugin Initialization and Custom Functions
$(document).ready(function() {
    $('input#basicMax').maxlength({
        alwaysShow: true,
        warningClass: "label green",
        limitReachedClass: "label orange"
    });

    $('textarea#textareaMax').maxlength({
        alwaysShow: true,
        warningClass: "label green",
        limitReachedClass: "label orange"
    });

    $('input#thresholdMax').maxlength({
        threshold: 20,
        warningClass: "label green",
        limitReachedClass: "label orange"
    });

});

//Time Picker Initialization and Custom Functions
$(document).ready(function() {
    $('#timepicker1').timepicker();

    setTimeout(function() {
        $('#timeDisplay').text($('#timepicker1').val());
    }, 100);

    $('#timepicker1').on('changeTime.timepicker', function(e) {
        $('#timeDisplay').text(e.time.value);
    });
});

$('#sandbox-container input').datepicker({
    autoclose: true,
    todayHighlight: true
});
