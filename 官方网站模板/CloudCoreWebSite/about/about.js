jQuery(document).ready(function() {
    "use strict";


    /* ------- Preloader ------ */
    $(window).load(function(){
        $('.preloader').delay(1000).slideUp('slow'); // set duration in brackets
    });

    /* -------- Appears Menu 滚动显示scroll ------ */
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function () {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });

    /* --------- One Page Navigation 页内锚点导航 -------- */
    // $('#collapsingNavbar').onePageNav({
    //     currentClass: 'active',
    //     scrollSpeed: 500,
    //     easing: 'linear'
    // });

    /* ---------- Wow Js ---------- */
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'wow animated', // animation css class (default is animated)
            offset:       250,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
                $('.hidddden').removeClass('hidddden');
            }
        }
    );
    wow.init();

    /* ---------- ISoptope --------- */
    var $container = $('#about_map');

    // filter items on button click
    // $container.isotope({
    //     filter: '*',
    //     itemSelector: '.item',
    //     animationOptions: {
    //         duration: 750,
    //         easing: 'linear',
    //         queue: false
    //     }
    // });


    $('#portfolio-filter ul li a').on('click',function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $(this).addClass('selected').siblings().removeClass('selected');
        return false;
    });

    // var $optionSets = $('#portfolio-filter ul'),
    //     $optionLinks = $optionSets.find('a');
    //
    // $optionLinks.on('click',function(){
    //     var $this = $(this);
    //     // don't proceed if already selected
    //     if ( $this.hasClass('selected') ) {
    //         return false;
    //     }
    //     var $optionSet = $this.parents('#portfolio-filter ul');
    //     $optionSet.find('.selected').removeClass('selected');
    //     $this.addClass('selected');
    // });
    /*--------------底部切换-------------*/
    $('.contact div').mouseover(function(){
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq("+ $(this).index() +")").addClass('active');
    });
});
