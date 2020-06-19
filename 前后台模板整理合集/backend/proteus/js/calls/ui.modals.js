/*  ==========================================================================
    Table of Content for Modals:

    === Function ===
    - runMagnific

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runMagnific
    ========================================================================== */
function runMagnific(magnific,type){

    if(type != 'multiImage'){
        $(magnific).on( "click", function(e) {
          e.preventDefault();
        });
    }

     switch(type){

        case 'image':
            $(magnific).magnificPopup({type:'image'});
        break;

        case 'multiImage':
            $(magnific).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                  enabled: true
                }
            });
        break;

        case 'iframe':
            $(magnific).magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,

              fixedContentPos: false
            });
        break;

        case 'form':
            $(magnific).magnificPopup({
              type: 'inline',
              preloader: false,
              focus: '#name',

              // When elemened is focused, some mobile browsers in some cases zoom in
              // It looks not nice, so we disable it:
              callbacks: {
                beforeOpen: function() {
                  if($(window).width() < 700) {
                    this.st.focus = false;
                  } else {
                    this.st.focus = '#name';
                  }
                }
              }
            });
        break;

        case 'ajax':
            $(magnific).magnificPopup({
                type: 'ajax'
            });
        break;

        case 'ajax_top':
            $(magnific).magnificPopup({
                type: 'ajax',
                alignTop: true,
                overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
            });
        break;

        case 'zoom':
            $(magnific).magnificPopup({
              type: 'inline',

              fixedContentPos: false,
              fixedBgPos: true,

              overflowY: 'auto',

              closeBtnInside: true,
              preloader: false,

              midClick: true,
              removalDelay: 300,
              mainClass: 'prot-mfp-zoom-in'
            });
        break;

        case 'slide':
            $(magnific).magnificPopup({
              type: 'inline',

              fixedContentPos: false,
              fixedBgPos: true,

              overflowY: 'auto',

              closeBtnInside: true,
              preloader: false,

              midClick: true,
              removalDelay: 300,
              mainClass: 'prot-mfp-slide-bottom'
            });
        break;


    }
}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables

    var imageMagnific        = "#imageMagnific";
    var multiImageMagnific   = "#multiImageMagnific";
    var iframeMagnific       = ".iframeMagnific";
    var formMagnific         = "#formMagnific";
    var ajaxMagnific         = "#ajaxMagnific";
    var ajaxTopMagnific      = "#ajaxTopMagnific";
    var zoomEffectMagnific   = "#zoomEffectMagnific";
    var slideEffectMagnific  = "#slideEffectMagnific";


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runMagnific(imageMagnific,'image');
    runMagnific(multiImageMagnific,'multiImage');
    runMagnific(iframeMagnific,'iframe');
    runMagnific(formMagnific,'form');
    runMagnific(ajaxMagnific,'ajax');
    runMagnific(ajaxTopMagnific,'ajax_top');
    runMagnific(zoomEffectMagnific,'zoom');
    runMagnific(slideEffectMagnific,'slide');

});