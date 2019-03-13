var offset = $( "header" ).offset();

$(window).scroll(function() {

    if ( $('body').scrollTop() > offset.top){
        $('body').addClass('header-fixed-top');
    } else {
         $('body').removeClass('header-fixed-top');
    }

});


// ------------------------------
// Sidebar Accordion Menu
// ------------------------------

$(function () {

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

        // console.log()
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

});


// ------------------------------
// HeaderNav Active Class lication
// ------------------------------
$(function () {
    $.each ($('#headernav .smart-menu a'), function() {
        if( this.href == window.location ) {
            $(this).closest('ul.smart-menu>li').addClass('active');
        }
    });
});


// ------------------------------
// Brand Colors
// ------------------------------

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


// $(function(){
//     $('header .dropdown').hover(function() {
//          $(this).addClass('open');
//      }, function() {
//          $(this).removeClass('open');
//     });
// });


// -------------------------------
// Sidebars Disabled Links
// -------------------------------

$('li.disabled-link a').click(function(e) { 
    e.preventDefault(); 
    e.stopPropagation(); 
    return false; 
});