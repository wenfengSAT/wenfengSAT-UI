'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        // Dropzone autoattaches to "dropzone" class.
        // Configure Dropzone options
        Dropzone.options.dropZone = {
            paramName: "file", // The name that will be used to transfer the file
            maxFilesize: 0, // MB

            addRemoveLinks: true,
            dictDefaultMessage: '<i class="fa fa-cloud-upload"></i> \
         <span class="main-text"><b>Drop Files</b> to upload</span> <br /> \
         <span class="sub-text">(or click)</span> \
        ',
            dictResponseError: 'Server not Configured'
        };

        Dropzone.options.dropZone2 = {
            paramName: "file", // The name that will be used to transfer the file
            maxFilesize: 0, // MB

            addRemoveLinks: true,
            dictDefaultMessage: '<i class="fa fa-cloud-upload"></i> \
         <span class="main-text"><b>Drop Files</b> to upload</span> <br /> \
         <span class="sub-text">(or click)</span> \
        ',
            dictResponseError: 'Server not Configured'
        };

        // DEMO CODE - creates mock uploads upon pageload
        setTimeout(function () {
            var Drop = $('#dropZone2');
            Drop.addClass('dz-started dz-demo');

            setTimeout(function () {
                $('.example-preview').each(function (i, e) {
                    var This = $(e);

                    var thumbOut = setTimeout(function () {
                        Drop.append(This);
                        This.addClass('animated fadeInRight').removeClass('hidden');
                    }, i * 135);

                });
            }, 750);

        }, 800);

        // Demo code
        $('.example-preview').on('click', 'a.dz-remove', function () {
            $(this).parent('.example-preview').remove();
        });
    });

})(jQuery);
