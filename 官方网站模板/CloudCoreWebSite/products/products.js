jQuery(document).ready(function() {
    "use strict";

    /* ------- Preloader ------ */
    $(window).load(function(){
        $('.preloader').delay(1000).slideUp('slow'); // set duration in brackets
    });

    //产品详情
    if( $('.detail_nav').length>0){
        window.addEventListener("scroll", function (e) {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            if (top > 200) {
                $('.detail_nav').css('top',120+'px');
                $('.fixed_a').addClass('active');
            }else{
                $('.detail_nav').css('top',320-top+'px');
                $('.fixed_a').removeClass('active');
            }
        });
        /*---------上一篇下一篇显示三行"..."---------*/
        $('.row.article_box .article p:last-child').each(function (index,val) {
            $clamp(val,{clamp:3});
        });
        $('.article_box .article span').each(function (index,val) {
            $clamp(val,{clamp:3});
        });
        $('.article-content div p').each(function (index,val) {
            $clamp(val,{clamp:8});
        });
    }

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
    var $container = $('.portfolio-items');

    // filter items on button click
    if($container.length){
        $container.isotope({
            filter: '*',
            itemSelector: '.item',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $container.imagesLoaded(function() {
            $container.isotope('layout');
        });
    }


    /* ---------- 切换内容 --------- */
    let t=0;
    function move(num) {
        if(!num && num!=0){
            t++;
            if(t>6) t=0;
        } else{
            t=num;
        }
        $('.article-title > div').removeClass('active');
        $('.article-content > div').removeClass('active');
        $(".article-title > div:eq(" + t + ")").addClass('active');
        $(".article-content > div:eq(" + t+ ")").addClass('active');
    }
    if( $('.article-title').length>0){
        var content=setInterval(move,2000);
        $('.article-title > div').hover(function (e) {
            clearInterval(content);
            move($(e.target).parents('div').index());
        },function(){
            content=setInterval(move,2000);
        });
        $('.article-content > div').hover(function (){
            clearInterval(content);
        },function (){
            content=setInterval(move,2000);
        });
    }


    /*底部切换*/
    $('.contact div').mouseover(function () {
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq(" + $(this).index() + ")").addClass('active');
    });

    if(location.href.indexOf('?')>-1){
        if(location.href.split('?')[1]=='finance') $("html,body").scrollTop($('#finance').position().top-$('#finance').height()-250);
        else $("html,body").scrollTop($('#'+location.href.split('?')[1]).position().top);//-130
    }
    /*-----金融产品轮播-----*/
    if($('.water-mask').length>0){
        var swiper = new Swiper('.swiper-container', {
            loopFillGroupWithBlank: true,
            slidesPerView:'auto',
            slidesPerGroup :3,
            spaceBetween: 30,
            speed:3000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        $('.swiper-container a').hover(function () {
            swiper.autoplay.stop();
        },function () {
            swiper.autoplay.start();
        });
    }

});
