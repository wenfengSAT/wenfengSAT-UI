var PagesGallery = function () {
	"use strict";
    //function to initiate Colorbox
    var runMixItUp = function () {
       $('#Grid').mixItUp();
    };

    //function to Image Picker
    var runImagePicker = function () {
        $('.portfolio-item .chkbox').bind('click', function () {
            if ($(this).parent().hasClass('selected')) {
                $(this).parent().removeClass('selected').children('a').children('img').removeClass('selected');
            } else {
                $(this).parent().addClass('selected').children('a').children('img').addClass('selected');
            }
        });
    };

    return {
        //main function to initiate template pages
        init: function () {
            runMixItUp();
            runImagePicker();
        }
    };
}();