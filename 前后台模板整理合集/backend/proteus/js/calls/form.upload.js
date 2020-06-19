/*  ==========================================================================
    Table of Content for Form Upload and WYSIWYG:

    === Function ===
    - runBootstrapFileupload
    - runjQueryFileupload
    - runSummernote
    - runCheckradios

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */


/*
    runBootstrapFileupload
    ========================================================================== */
function runBootstrapFileupload() {

    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }

    });
}


/*
    runjQueryFileupload
    ========================================================================== */
function runjQueryFileupload(){

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        url: 'server/php/',
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        //maxFileSize: 2000000 // 2 MB,
        maxFileSize: 50000 // 50 KB
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    if (window.location.hostname === 'blueimp.github.io') {
        // Demo settings:
        $('#fileupload').fileupload('option', {
            url: '//jquery-file-upload.appspot.com/',
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            maxFileSize: 5000000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
        });
        // Upload server status check for browsers with CORS support:
        if ($.support.cors) {
            $.ajax({
                url: '//jquery-file-upload.appspot.com/',
                type: 'HEAD'
            }).fail(function () {
                $('<div class="alert alert-danger"/>')
                    .text('Upload server currently unavailable - ' +
                            new Date())
                    .appendTo('#fileupload');
            });
        }
    } else {
        // Load existing files:
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: $('#fileupload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
        });
    }
}

/*
    runSummernote
    ========================================================================== */
function runSummernote(cont){

     $(cont).summernote({
        height: 200,                 // set editor height

        minHeight: 100,             // set minimum height of editor
        maxHeight: 400,             // set maximum height of editor

        focus: true
     });

}

/*
 runCheckradios
 ========================================================================== */
function runCheckradios(input){

    $(input).checkradios({

        checkbox: {

            iconClass:'fa fa-check'

        },

        radio: {

            iconClass:'fa fa-circle'

        }

    });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var summernote  = '#summernote',
        checkradios = '.checkradios';

    // === Checkers ===

    // === Setters ===

    // === Executions ===
    runBootstrapFileupload();
    runjQueryFileupload();
    runSummernote(summernote);
    runCheckradios(checkradios);


});