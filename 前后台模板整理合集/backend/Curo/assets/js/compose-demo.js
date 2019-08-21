/*global $*/
$(document).ready(function () {
    "use strict";

    //Initialize Chosen Taginput
    $(".chzn-select").chosen({
        width: "100%"
    });
    //End Initialize Chosen Taginput

    //Initialize Summernote
    $('.summernote').summernote({
        height: 270,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ]
    });
    //End Initialize Summernote
});