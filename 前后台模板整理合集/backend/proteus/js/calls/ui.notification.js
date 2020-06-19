/*  ==========================================================================
    Table of Content for Notifications:

    === Function ===
	- runjGrowl
    - runToastr


    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runjGrowl
    ========================================================================== */
function runjGrowl(obj){

    $(obj.elem).on( "click", function(e) {
        e.preventDefault();

        switch(obj.type){

            case 'basic':
                $.jGrowl("Basic jGrowl example!");
            break;

            case 'sticky':
                $.jGrowl("This is a sticky notification, you have to close it manually!", { sticky: true });
            break;

            case 'header':
               $.jGrowl("Notification with custom header", { header: 'Custom header', sticky: true  });
            break;

            case 'life':
               $.jGrowl("This message  will live a little longer.", { life: 7000 });
            break;

            case 'position':
               $('.'+obj.pos).jGrowl("This message position is " + obj.pos);
            break;
        }

    });

}

/*
    runToastr
    ========================================================================== */
function runToastr(obj){


    $(obj.elem).on( "click", function(e) {
        e.preventDefault();

        toastr.options.closeButton = false;
        toastr.remove();

        switch(obj.type){

            case 'basic':
                toastr.info('Basic toastr message display.', 'Toastr title');
            break;

            case 'close':
                toastr.options.closeButton = true;
                toastr.success('Basic toastr message with close button.');

            break;

            case 'easing':

                switch(obj.effect) {
                    case 'swing':
                        toastr.options.showEasing = 'swing';
                        toastr.options.hideEasing = 'swing';
                        break;
                    case 'linear':
                        toastr.options.showEasing = 'linear';
                        toastr.options.hideEasing = 'linear';
                        break;
                    case 'bounce':
                        toastr.options.showEasing = 'easeOutBounce';
                        toastr.options.hideEasing = 'easeInBounce';
                        break;
                    case 'elastic':
                        toastr.options.showEasing = 'easeOutElastic';
                        toastr.options.hideEasing = 'easeInElastic';
                        break;
                    case 'sine':
                        toastr.options.showEasing = 'easeOutSine';
                        toastr.options.hideEasing = 'easeInSine';
                        break;
                }

                toastr.warning('Basic toastr message with custom easing effect. Check out the easing plugin documentation for more info.');

                break;

            case 'animation':

                switch(obj.effect) {
                    case 'fade':
                        toastr.options.showMethod = 'fadeIn';
                        toastr.options.hideMethod = 'fadeOut';
                        break;
                    case 'slide':
                        toastr.options.showMethod = 'slideDown';
                        toastr.options.hideMethod = 'slideUp';
                        break;
                    case 'show':
                        toastr.options.showMethod = 'show';
                        toastr.options.hideMethod = 'hide';
                        break;
                }

                toastr.info('Basic toastr message with custom animation.');

            break;

            case 'position':
                var items = Array('success','info','warning','error');
                randomNumber = rand(0, items.length - 1);
                messageType = items[randomNumber];
                toastr.clear;
                toastr.options.positionClass = 'toast-'+obj.pos;
                toastr[messageType]("This '"+ messageType +"' message position is " + obj.pos);
            break;
        }

    });

}

function rand(min, max) {
  var offset = min;
  var range = (max - min) + 1;

  var randomNumber = Math.floor( Math.random() * range) + offset;
  return randomNumber;
}



/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var jGrowl_1 = {elem:"#jGrowl_1", type:"basic"},
        jGrowl_2 = {elem:"#jGrowl_2", type:"sticky"},
        jGrowl_3 = {elem:"#jGrowl_3", type:"header"},
        jGrowl_4 = {elem:"#jGrowl_4", type:"life"},

        jGrowl_tr = {elem:"#jGrowl_tr", type:"position", pos:'top-right'},
        jGrowl_tl = {elem:"#jGrowl_tl", type:"position", pos:'top-left'},
        jGrowl_br = {elem:"#jGrowl_br", type:"position", pos:'bottom-right'},
        jGrowl_bl = {elem:"#jGrowl_bl", type:"position", pos:'bottom-left'},


        toastr_1 = {elem:"#toastr_1", type:"basic"},
        toastr_2 = {elem:"#toastr_2", type:"close"},

        toastr_swing   = {elem:"#toastr_swing",   type:"easing", effect: 'swing'},
        toastr_linear  = {elem:"#toastr_linear",  type:"easing", effect: 'linear'},
        toastr_bounce  = {elem:"#toastr_bounce",  type:"easing", effect: 'bounce'},
        toastr_elastic = {elem:"#toastr_elastic", type:"easing", effect: 'elastic'},
        toastr_sine    = {elem:"#toastr_sine",    type:"easing", effect: 'sine'},

        toastr_fade  = {elem:"#toastr_fade",  type:"animation", effect: 'fade'},
        toastr_slide = {elem:"#toastr_slide", type:"animation", effect: 'slide'},
        toastr_show  = {elem:"#toastr_show",  type:"animation", effect: 'show'},

        toastr_tr = {elem:"#toastr_tr", type:"position", pos:'top-right'},
        toastr_tc = {elem:"#toastr_tc", type:"position", pos:'top-center'},
        toastr_tl = {elem:"#toastr_tl", type:"position", pos:'top-left'},
        toastr_br = {elem:"#toastr_br", type:"position", pos:'bottom-right'},
        toastr_bc = {elem:"#toastr_bc", type:"position", pos:'bottom-center'},
        toastr_bl = {elem:"#toastr_bl", type:"position", pos:'bottom-left'},

        toastr_tfw = {elem:"#toastr_tfw", type:"position", pos:'top-full-width'},
        toastr_bfw = {elem:"#toastr_bfw", type:"position", pos:'bottom-full-width'};


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runjGrowl(jGrowl_1);
    runjGrowl(jGrowl_2);
    runjGrowl(jGrowl_3);
    runjGrowl(jGrowl_4);

    runjGrowl(jGrowl_tr);
    runjGrowl(jGrowl_tl);
    runjGrowl(jGrowl_br);
    runjGrowl(jGrowl_bl);

    runToastr(toastr_1);
    runToastr(toastr_2);

    runToastr(toastr_swing);
    runToastr(toastr_linear);
    runToastr(toastr_bounce);
    runToastr(toastr_elastic);
    runToastr(toastr_sine);

    runToastr(toastr_fade);
    runToastr(toastr_slide);
    runToastr(toastr_show);

    runToastr(toastr_tr);
    runToastr(toastr_tc);
    runToastr(toastr_tl);
    runToastr(toastr_br);
    runToastr(toastr_bc);
    runToastr(toastr_bl);

    runToastr(toastr_tfw);
    runToastr(toastr_bfw);

});