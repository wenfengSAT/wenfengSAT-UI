jQuery(document).ready(function() {

  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });


  //Opens Modal with Bootbox
  $(".open-modal").click(function(e) {
        e.preventDefault();
        var img = $(this).closest(".item").find("img").attr("src");
        var imgname = $(this).closest(".item-wrapper").attr("data-name");

        bootbox.dialog({
            message: "<img src='" + img + "' class='img-responsive' />",
            title: imgname,
            buttons: {
                close: {
                    label: "Close",
                    className: "btn-default"
                }
            }
        });
    });

    //Slider Revolution Initialize

    revapi = jQuery('.tp-banner').revolution({
        dottedOverlay:"none",
        delay:16000,
        startwidth:1140,
        startheight:400,
        hideThumbs:200,
        
        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:5,
        
        navigationType:"bullet",
        navigationArrows:"solo",
        //navigationStyle:"preview4",
        
        touchenabled:"on",
        onHoverStop:"on",
        
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
                                
        parallax:"mouse",
        parallaxBgFreeze:"on",
        parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
                                
        keyboardNavigation:"off",
        
        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:20,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,
                
        shadow:0,
        fullWidth:"on",
        fullScreen:"off",

        spinner:"spinner4",
        
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,

        shuffle:"off",
        
        autoHeight:"off",                       
        forceFullWidth:"off",                       
                                
        hideTimerBar:"off",                     
                                
        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,                      
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResolution:0,
        
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        startWithSlide:0,
        videoJsPath:"rs-plugin/videojs/",
        fullScreenOffsetContainer: ""   
    });

});