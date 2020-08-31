jQuery(document).ready(function() {

    /////////////////////
    // ANIMSITION ///////
    /////////////////////
    if (jQuery.fn.animsition) {
        jQuery('.animsition').animsition({
          
            inClass               :   'fade-in',
            outClass              :   'fade-out',
            inDuration            :    1500,
            outDuration           :    500,
            linkElement           :   'a:not([target="_blank"]):not([href^=#])',
            loading               :    true,
            loadingParentElement  :   'body', //animsition wrapper element
            loadingClass          :   'animsition-loading',
            unSupportCss          : [ 'animsition',
                                      '-webkit-animation-duration',
                                      '-o-animation-duration'
                                    ],
            overlay               :   false,      
            overlayClass          :   'animsition-overlay-slide',
            overlayParentElement  :   'body'

        });
    }
    
});