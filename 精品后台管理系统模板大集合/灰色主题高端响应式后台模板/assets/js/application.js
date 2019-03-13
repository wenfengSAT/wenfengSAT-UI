// ------------------------------
// Variables
// ------------------------------

var headerHeight = 50; //$('header.navbar').outerHeight(); - hardcode this


// ------------------------------
// Application Helpers
// ------------------------------

//Browser Detection Plugin
//https://github.com/gabceb/jquery-browser-plugin/
!function(a,b){"use strict";var c,d;if(a.uaMatch=function(a){a=a.toLowerCase();var b=/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(iphone)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/i.exec(a)||[];return{browser:b[3]||b[1]||"",version:b[2]||"0",platform:c[0]||""}},c=a.uaMatch(b.navigator.userAgent),d={},c.browser&&(d[c.browser]=!0,d.version=c.version,d.versionNumber=parseInt(c.version)),c.platform&&(d[c.platform]=!0),(d.android||d.ipad||d.iphone||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv){var e="msie";c.browser=e,d[e]=!0}if(d.opr){var f="opera";c.browser=f,d[f]=!0}if(d.safari&&d.android){var g="android";c.browser=g,d[g]=!0}d.name=c.browser,d.platform=c.platform,a.browser=d}(jQuery,window);

// To get the correct viewport width based on
// http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/

var getViewPort = function () {
    var e = window, a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
}

// Helper function to calculate sidebar height for fixed sidebar layout.
var getSidebarViewportHeight = function () {
    var h;
    if ($('body').hasClass('infobar-offcanvas')) {
    //if (($('body').hasClass('infobar-offcanvas'))  || ($('body').hasClass('infobar-offcanvas')) ) {
      h = $(window).height();
    } else {
        h = $(window).height() -headerHeight;
    }
    return h;
}

//resize slimscroll
var initScrollSidebar = function (elements) {
    if( elements.length > 0 ) {
        $(document).ready(function () {
            elements.slimscroll({height:getSidebarViewportHeight});
        });

        $(window).resize(function(){
            resizeSidebar(elements);
        });
    }
};

function resizeSidebar(menu, modifier) { //change height of scroll based on sidebar viewport height
    modifier = typeof modifier !== 'undefined' ? modifier : 0;

    if (menu.parent('.slimScrollDiv').size() === 1) { 
        menu.slimScroll({destroy: true});
        menu.removeAttr('style');
    }
    menu.slimscroll({height: getSidebarViewportHeight() + modifier });
}

//
function resizePageHeight() {
   var v = getViewPort().height;
   var c = $("#wrapper").height();
   var f = $('footer').height();

   var h = 0;
   if ($('header').hasClass('navbar-fixed-top')) {
       h = headerHeight;
   }

   if (c < v) {
        $("#wrapper").height(v-h+f-20);
   }

}

// Store Brand colors in JS so it can be called from plugins
var brandColors = {
    'default':      '#ecf0f1',
    'gray':         '#aaa',

    'inverse':      '#95a5a6',
    'primary':      '#3498db',
    'success':      '#2ecc71',
    'warning':      '#f1c40f',
    'danger':       '#e74c3c',
    'info':         '#1abcaf',
    
    'brown':        '#c0392b',
    'indigo':       '#9b59b6',
    'orange':       '#e67e22',
    'midnightblue': '#34495e',
    'sky':          '#82c4e6',
    'magenta':      '#e73c68',
    'purple':       '#e044ab',
    'green':        '#16a085',
    'grape':        '#7a869c',
    'toyo':         '#556b8d',
    'alizarin':     '#e74c3c'
};

var getBrandColor = function (name) {
    if (brandColors[name]) {
        return brandColors[name];
    } else {
        return brandColors['default'];
    }
}



// ------------------------------
// Infobar Close on Keypress Esc
// ------------------------------

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // esc key
    try {
        vFSLayout.close('east');
    } catch (e) {
        $('body').removeClass('infobar-active');

        //TODO: check X axis and match X axis 
        if ($('body').hasClass('infobar-overlay')) {
            $('.infobar-wrapper').css('transform', 'translate(260px,50px)');
        };
    }
  }
});

// ------------------------------
// Infobar Scroll
// ------------------------------

initScrollSidebar($('.infobar'));


// ------------------------------
// Fixed Sidebars 
//       w/ jQuery Layout plugin
// ------------------------------

var vFSLayout;

$(document).ready(function () {
    try {
        vFSLayout = $('#layout-fixed').layout({
            togglerLength_open:0, // hide toggle button
            west__minSize : 260,  // sidebar
            east__minSize : 260   // infobar
        });


        // Closes and opens left and rightbar in small or big screens
        enquire.register("screen and (max-width: 767px)", {
            match : function() {
                //small
                vFSLayout.close('west');
                vFSLayout.close('east');
            },  
            unmatch : function() {
                //big
                vFSLayout.open('west');
                vFSLayout.open('east');
            },
            deferSetup : true
        });
    } catch(e) {
        // Code above is only executed in a page with #layout-fixed.
        // Requires js/jquery.layout.min.js to be loaded.
        // For more, refer to documentation
    }
});


initScrollSidebar($('.fixed-sidebar'));
initScrollSidebar($('.fixed-content-wrapper'));




// if sidebar-scroll on body then scroll the sidebar
FixedOnSmall($('.sidebar-scroll .static-sidebar .sidebar'));


// otherwise only if window size is small, scroll the static-sidebar
// ignore if body has .sidebar-scroll

window.unmatchedQuery = false;

enquire.register("screen and (max-width: 767px)", {
    match : function() {
        //small
        if (!$('body').hasClass("sidebar-scroll")) {
            FixedOnSmall($('.static-sidebar .sidebar'));
        }
        window.unmatchedQuery = false;
        //console.log('match- ' + window.unmatchedQuery);
    },  
    unmatch : function() {
        //big
        //destroy sidebar scroll on big screens
        if (!$('body').hasClass("sidebar-scroll")) {
            $('.static-sidebar .sidebar').slimscroll({destroy:true}).attr('style', '');
            window.unmatchedQuery = true;
            //console.log('unmatch- ' + window.unmatchedQuery);
        }
    },
    deferSetup : true
});

function FixedOnSmall (menuFS) {

    if( menuFS !== null ) {
        $(document).ready(function () {
             menuFS.slimscroll({height:(getSidebarViewportHeight)});
        });

        $(window).resize(function(){
            resizeSidebarForRealz(menuFS);
        });
    }
}


//Adjust Height of slimscroll in sidebar scroll
$('body').on('click', 'ul.acc-menu a', function() {
    if (window.unmatchedQuery == false) {
        if ($('body').hasClass('sidebar-scroll')) {
            $('.static-sidebar .sidebar').slimscroll({height:(getSidebarViewportHeight)});
        }
    }
    //console.log("click" + window.unmatchedQuery);
});


function resizeSidebarForRealz(menu) {
    if (menu.parent('.slimScrollDiv').size() === 1) { 
        menu.slimScroll({destroy: true});
        menu.removeAttr('style');
    }
    if (window.unmatchedQuery === false)
        menu.slimscroll({height:(getSidebarViewportHeight)});
}


// ------------------------------
// Scroll Sidebar
// ------------------------------

// Window load event used just in case window height is dependant upon images
// $(window).bind("load", function() { 
       
//        var footerHeight = 0,
//            footerTop = 0,
//            $footer = $(".static-content-wrapper footer");
           
//        positionFooter();
       
//        function positionFooter() {
       
//                 footerHeight = $footer.outerHeight();
//                 footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
//                 footerWidth = $footer.parent().width();
       
//                if ( ($(document.body).height()+footerHeight) < $(window).height()) {
//                    $footer.css({
//                         position: "absolute",
//                         top: footerTop,
//                         width: footerWidth
//                    })
//                } else {
//                    $footer.css({
//                         position: "static"
//                    })
//                }
//                $('.page-content').css('padding-bottom', footerHeight + "px");
//        }

//        $(window)
//                .scroll(positionFooter)
//                .resize(positionFooter)
               
// });
// ------------------------------
// Toggling Sidebars
// ------------------------------
$('#leftmenu-trigger').click(function () {
    toggle_leftbar();
});

$('#rightmenu-trigger').click(function () {
    toggle_rightbar();
});

function toggle_leftbar() {
    var menuCollapsed = localStorage.getItem('collapsed_menu');
    //console.log(menuCollapsed);
    if (menuCollapsed == "true")
        localStorage.setItem('collapsed_menu', "false");
    else if (menuCollapsed == "false")
        localStorage.setItem('collapsed_menu', "true");

    try {
        vFSLayout.toggle('west');
    } catch (e) {
        //control the order so position: fixed does not break the sidebar
        if ($('body').hasClass('sidebar-collapsed')) {
            leftbarTopPos();
            $('body').toggleClass('sidebar-collapsed');
        } else {
            $('body').toggleClass('sidebar-collapsed');
            leftbarTopPos();
        }
    }
    
    setTimeout(function(){              //wait 500ms before toggling rightbar
        $(window).trigger('resize');    //to ensure that toggle is faster than the
    }, 500);                            //resize event
}

function toggle_rightbar() {
    try {
        vFSLayout.toggle('east');
    } catch (e) {
        if ($('body').hasClass('infobar-overlay')) {
            $('.infobar-wrapper').css('transform','');
        }

        $('body').toggleClass('infobar-active');

        //in layout-boxed pages, toggle visibility instead of animation
        if ($('body').hasClass('layout-boxed')) {
            rightbarRightPos();
            $('.infobar-wrapper').toggle();
        }

        rightbarTopPos();
    }
}


// ------------------------------
// Megamenu
// This code will prevent unexpected menu close 
// when using some components (like accordion, forms, etc)
// ------------------------------

$(document).on('click', '.yamm .dropdown-menu, .dropdown-menu-form', function(e) {
  e.stopPropagation()
})

//For tabs inside dropdowns
$('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
    e.stopPropagation();
    $(this).tab('show');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).closest('.dropdown').removeClass('active');        
})

// ------------------------------
// Sidebar Accordion Menu
// ------------------------------

$(function () {
    var menuCollapsed = localStorage.getItem('collapsed_menu');
    if (menuCollapsed === null) {
        localStorage.setItem('collapsed_menu', "false");
    }
    if (menuCollapsed === "true") {
        $('body').addClass('sidebar-collapsed');
    }

    $('body').on('click', 'ul.acc-menu a', function() {
        var LIs = $(this).closest('ul.acc-menu').children('li');
        $(this).closest('li').addClass('clicked');
        $.each( LIs, function(i) {
            if( $(LIs[i]).hasClass('clicked') ) {
                $(LIs[i]).removeClass('clicked');
                return true;
            }
            //if($.cookie('admin_leftbar_collapse') !== 'collapse-leftbar' || $(this).parents('.acc-menu').length > 1) 
                $(LIs[i]).find('ul.acc-menu:visible').slideToggle();
            $(LIs[i]).removeClass('open');
        });

        if (!$('body').hasClass('sidebar-collapsed') || $(this).parents('ul.acc-menu').length > 1) {
            if($(this).siblings('ul.acc-menu:visible').length>0)
                $(this).closest('li').removeClass('open');
            else
                $(this).closest('li').addClass('open');
                //if($.cookie('admin_leftbar_collapse') !== 'collapse-leftbar' || $(this).parents('.acc-menu').length > 1)
                $(this).siblings('ul.acc-menu').slideToggle({
                    duration: 200
                });
        }
    });

    var targetAnchor;
    $.each ($('ul.acc-menu a'), function() {
        if( this.href == window.location ) {
            targetAnchor = this;
            return false;
        }
    });

    var parent = $(targetAnchor).closest('li');
    while(true) {
        parent.addClass('active');
        parent.closest('ul.acc-menu').show().closest('li').addClass('open');
        parent = $(parent).parents('li').eq(0);
        if( $(parent).parents('ul.acc-menu').length <= 0 ) break;
    }

    var liHasUlChild = $('li').filter(function(){
        return $(this).find('ul.acc-menu').length;
    });
    $(liHasUlChild).addClass('hasChild');

    //Make only visible area scrollable
   // $("#widgetarea").css({"max-height":$("body").height()});

});

// Recalculate widget area on a widget being shown
// $(".widget-body").on('shown.bs.collapse', function () {
//     widgetheight();
// });


// -------------------------------
// Sidebars Disabled Links
// -------------------------------

$('li.disabled-link a').click(function(e) { 
    e.preventDefault(); 
    e.stopPropagation(); 
    return false; 
});


//Helper functions
//---------------

function rightbarTopPos() {
    var scr=$('body').scrollTop();


    if ($('body').hasClass('infobar-overlay')) {
        if ($('body>header, body.horizontal-nav>#wrapper>header').hasClass('navbar-fixed-top')) {
            if ($('body.infobar-overlay').hasClass('infobar-active')) {
                $('.infobar-wrapper').css('transform','translate(0, 50px)');
            }
        } else {
            if ($('body.infobar-overlay').hasClass('infobar-active')) {
                if (scr < headerHeight) {
                    //recalculate sidebar scroll height for the first 50px
                    resizeSidebar($('.infobar'), scr) ;
                    $('.infobar-wrapper').css('transform','translate(0, '+ (50 - scr)+ 'px)');
                } else {
                    $('.infobar-wrapper').css('transform','translate(0, 0)');
                    //only redraw if there is a gap
                    if (($('.infobar-wrapper').height()) > ($('.infobar').height())) {
                        resizeSidebar($('.infobar'), 50);
                    }
                }

            }
        }
    }

}



function leftbarTopPos() {

    enquire.register("screen and (max-width: 767px)", {
        match : function() {
            //small

			if ($('body').hasClass('sidebar-collapsed')) {
			    $('.static-sidebar').css('position', 'static');
			} else {
				//first gets pos:a to fix an overflow issue with the sidebar animation
				//as soon as animation is completed (within 500ms), gets a pos:f attribute
			    //$('.static-sidebar').css('position', 'absolute');
			    //setTimeout(function(){ 
			    	$('.static-sidebar').css('position', 'fixed');
			    //}, 500);
			}
			redrawLeftbar();
        },
        unmatch : function() {
            $('.static-sidebar').css('position', 'static');
        },
        deferSetup: true
    });

    if ($('body').hasClass('sidebar-scroll')) {
        redrawLeftbar();
    }
}

function redrawLeftbar() {
    var scr=$('body').scrollTop();

    if ($('header').hasClass('navbar-fixed-top'))  {
            //$('.static-sidebar').css('transform','translateY(0px)');
            $('.static-sidebar').css('transform','');
            resizeSidebar($('.static-sidebar .sidebar'));
        } else {

        //recalculate sidebar scroll height for the first 50px
        if (scr < headerHeight) {
            resizeSidebar($('.static-sidebar .sidebar'), scr) ;
            $('.static-sidebar').css('transform','translateY('+ (0 - scr)+ 'px)');
        } else {
            $('.static-sidebar').css('transform','translateY(-50px)');
            //only redraw if there is a gap
            if (($('.static-sidebar-wrapper').height()) > ($('.static-sidebar').height())) {
                resizeSidebar($('.static-sidebar .sidebar'), 50);
            }
        }
    }
}

//small screen
enquire.register("screen and (min-width: 768px)", {
    match : function() {
        $('.static-sidebar').css('transform','');
    }
});

// -------------------------------
// Back to Top button
// -------------------------------

$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// -------------------------------
// Panel Collapses
// -------------------------------
$('a.panel-collapse').click(function() {
    $(this).children().toggleClass("fa-chevron-down fa-chevron-up");
    $(this).closest(".panel-heading").next().slideToggle({duration: 200});
    $(this).closest(".panel-heading").toggleClass('rounded-bottom');
    return false;
});

// -------------------------------
// Quick Start
// -------------------------------
$('#headerbardropdown').click(function() {
    $('#headerbar').css('top',0);
    return false;
});

$('#headerbardropdown').click(function(event) {
  $('html').one('click',function() {
    $('#headerbar').css('top','-1000px');
  });

  event.stopPropagation();
});

// -------------------------------
// Project Switcher
// -------------------------------

  // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  $('.project-switcher').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN //
  $('.project-switcher').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });




// -------------------------------
// Sidebar Collapse in small screen
// -------------------------------
enquire.register("screen and (max-width: 767px)", {
    match : function() {
        $('body').addClass('sidebar-collapsed');
    },  
    unmatch : function() {
        // Hide the sidebar
        $('body').removeClass('sidebar-collapsed');
    }
});


// Faux Off-cavas effect on collapse
// ---------------------------------

enquire.register("screen and (max-width: 767px)", {
    match : function() {
        if ($('body').hasClass('sidebar-collapsed')) {
            setWidthtoContent();
        }
        $(window).on('resize', setWidthtoContent);
    },
    unmatch : function() {
        $('.static-content').css('width','');
        $(window).off('resize', setWidthtoContent);
    }
});

function setWidthtoContent() {
    var w = $('#wrapper').innerWidth();
    $('.static-content').css('width',(w)+'px');
}

// -------------------------------
// Rightbar Right Position (in layout-boxed)
// -------------------------------


//Set Right position for fixed layouts
function rightbarRightPos () {
    $('.infobar-wrapper').css('right','0');

    if ($('body').hasClass('layout-boxed')) {
        var $pc = $('#wrapper');
        var ending_right = ($(window).width() - ($pc.offset().left + $pc.outerWidth()));
        if (ending_right<0) ending_right=0;
        $('.infobar-active.infobar-overlay .infobar-wrapper').css('right',ending_right);
    }
}


// -------------------------------
// Full Height Panel
// -------------------------------

function fullHeightResizer() {
    //Top 
    var h = getViewPort().height;
    //var h = $('#wrapper').height();
    var tOffset = $('.full-height-content').offset().top;
    var t = h - tOffset;

    //Bottom
    var f = 0;
    var f = ($('footer').height() + parseInt($('.static-content').css('margin-bottom').replace('px', '')));
    //if ($('.full-height-content').parents('.panel-body').length) {f=(f+21);}; //20+1 is padding+border bottom of panel
    

    if ($('.full-height-content').parent('.panel-body').size() === 1) { 
        //if full-height-panel
        $('.full-height-content').slimScroll({height: (t-f-1), railVisible: true,alwaysVisible: true});
    } else {
        //if full-height-body
        $('.full-height-content').slimScroll({height: (t-f+10), railVisible: true,alwaysVisible: true});
    }


}

try {
    fullHeightResizer();

    $(window).resize(function(){
       $('.full-height-content').slimscroll({destroy:true}).attr('style', '');  //Destroy before resizing again
        fullHeightResizer();
        resizePageHeight();

        // $("#wrapper").height("auto"); // don't set height manually
    });

} catch(e) {
    // Do nothing
}


// -------------------------------
// Auto Collapse Large Menu
// -------------------------------

function autocollapse() {
    var navbar = $('header.navbar');
    var menu = $('header.navbar .navbar-collapse');

    $('body').removeClass('topnav-collapsed');
    $('#navbar-links-toggle').parent('li').hide();
    $(menu).insertAfter('header.navbar a.navbar-brand');


    if((navbar.innerHeight() > headerHeight) || ($(window).innerWidth()<786)) { // check if we've got 2 lines Or less than 786px

        $('body').addClass('topnav-collapsed');
        $('#navbar-links-toggle').parent('li').show();

        navbar.append(menu.detach());
    }
}

$(document).on('ready', autocollapse);
$(window).on('resize', autocollapse);

// -------------------------------
// Search on Top
// -------------------------------

$('.search-toggler').click( function() {
    $(this).siblings('#sidebar-search').toggleClass('open');
    $(this).find('i').toggleClass('fa-times fa-search');
});


$('#widget-search').click(function(event) {
  $('html').one('click',function() {
    $('#sidebar-search').removeClass('open');
    $('.search-toggler i').removeClass('fa-times').addClass('fa-search');
  });

  event.stopPropagation();
});


// -------------------------------
// FireFox Shim
// FireFox is the *only* browser that doesn't support position:relative for
// block elements with display set to table-cell, which is needed for the footer.
// -------------------------------

$(function() {

    // TODO: Replace $.browser with Modernizer.

    if ($.browser.mozilla) {
        $('footer').css('width',$('footer').parent().width());

        $(window).on('resize', function() {
            $('footer').css('width',$('footer').parent().width());
        });
    }

});


//Unnecessary?

// Recalculate widget area to area visible
// function widgetheight() {
//     $("#widgetarea").css({"max-height":$("body").height()});
// }



// -------------------------------
// Positionings
// -------------------------------

$(window).scroll(function(){
    leftbarTopPos();
    rightbarTopPos();
});

$(window).resize(function(){
    leftbarTopPos();
    rightbarRightPos();
    resizePageHeight();

});
// leftbarTopPos();
// resizePageHeight();
// rightbarRightPos();


$(window).load( function () {
    $(window).trigger('resize');
})