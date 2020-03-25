/* ------------------------------------------------------------------------------
*
*  # Hide navbar on scroll
*
*  Specific JS code additions for navbar_hideable.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Setup Headroom.js
    // ------------------------------

    // Initialize top by default
    headroomTop();


    // Top navbar
    function headroomTop() {
        $(".navbar-fixed-top").headroom({
            classes: {
                pinned: "headroom-top-pinned",
                unpinned: "headroom-top-unpinned"
            },
            offset: $('.navbar').outerHeight(),
            onUnpin : function() {
                $('.navbar .dropdown-menu').parent().removeClass('open');
            }
        });
    }


    // Bottom navbar
    function headroomBottom() {
        $(".navbar-fixed-bottom").headroom({
            classes : {
                pinned : "headroom-bottom-pinned",
                unpinned : "headroom-bottom-unpinned"
            },
            offset: $('.navbar').outerHeight(),
            onPin : function() {
                $('.navbar .dropdown-menu').parent().removeClass('open');
            }
        });
    }



    // Toggle navbar position
    // ------------------------------

    // Initialize switch
    var togglePosition = document.querySelector('.toggle-position');
    var togglePositionInit = new Switchery(togglePosition, {color: '#283133', secondaryColor: '#283133'});


    // Toggle position on state change
    togglePosition.onchange = function() {
      if(togglePosition.checked) {

        // Destroy top headroom
        $(".navbar-fixed-top").headroom('destroy').removeData('headroom');

        // Toggle classes
        $('body').children('.navbar').removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
        $('body').removeClass('navbar-top').addClass('navbar-bottom');

        // Initialize bottom navbar
        headroomBottom();


      }
      else {

        // Destroy bottom headroom
        $(".navbar-fixed-bottom").headroom('destroy').removeData('headroom');

        // Toggle classes
        $('body').children('.navbar').removeClass('navbar-fixed-bottom').addClass('navbar-fixed-top');
        $('body').removeClass('navbar-bottom').addClass('navbar-top');

        // Initialize top navbar
        headroomTop();
      }
    };
    
});
