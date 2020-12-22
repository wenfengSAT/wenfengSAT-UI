jQuery(document).ready(function() {
    "use strict";


    /* ------- Preloader ------ */
    $(window).load(function(){
        $('.preloader').delay(2000).slideUp('slow'); // set duration in brackets
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

    // /* ---------- ISoptope --------- */
    var $container = $('.portfolio-items');

    // filter items on button click

    //瀑布流
    // var $container = $('.portfolio-items');
    // $container.imagesLoaded(function() {
    //     $container.masonry({
    //         // set itemSelector so .grid-sizer is not used in layout
    //         itemSelector: '.item',
    //         // use element for option
    //         columnWidth: '.item',
    //         percentPosition: true,
    //         // isFitWidth: true,
    //         isAnimated: true,
    //     });
    //     $container.masonry('reloadItems');
    // });


    // $('#portfolio-filter ul li a').on('click',function(){
    //     var selector = $(this).attr('data-filter');
    //     $container.isotope({
    //         filter: selector,
    //         animationOptions: {
    //             duration: 750,
    //             easing: 'linear',
    //             queue: false
    //         }
    //     });
    //     $(this).addClass('selected').siblings().removeClass('selected');
    //     console.log($('#portfolio-filter li a.selected').attr('data-filter'));
    //     return false;
    // });

    var imgData=[
        {img:'../assets/images/cases/cover23.jpg',det:'casesDet_23.html',title:'昆山农商银行企业网银客户端'},
        {img:'../assets/images/cases/cover24.jpg',det:'casesDet_24.html',title:'昆山农商银行企业网银移动端'},
        {img:'../assets/images/cases/cover25.jpg',det:'casesDet_25.html',title:'太仓农村商业银行企业手机银行'},
        {img:'../assets/images/cases/cover26.jpg',det:'casesDet_26.html',title:'太仓农村商业银行企业网银'},
        {img:'../assets/images/cases/cover01.jpg',det:'casesDet_1.html',title:'晋城银行企业网银'},
        {img:'../assets/images/cases/cover02.png',det:'casesDet_2.html',title:'晋城银行手机银行'},
        {img:'../assets/images/cases/cover03.png',det:'casesDet_3.html',title:'晋城银行个人网银'},
        {img:'../assets/images/cases/cover04.jpg',det:'casesDet_4.html',title:'晋城银行-公务卡小程序'},


        {img:'../assets/images/cases/cover05.jpg',det:'casesDet_5.html',title:'鄞州银行企业网银'},
        {img:'../assets/images/cases/cover06.jpg',det:'casesDet_6.html',title:'鄞州银行手机银行'},
        {img:'../assets/images/cases/cover07.jpg',det:'casesDet_7.html',title:'鄞州银行直销银行'},
        {img:'../assets/images/cases/cover08.jpg',det:'casesDet_8.html',title:'汉口银行金融业机构信息共享系统'},
        {img:'../assets/images/cases/cover09.jpg',det:'casesDet_9.html',title:'海南农信社手机银行'},
        {img:'../assets/images/cases/cover13.jpg',det:'casesDet_13.html',title:'深圳农商行小微金融'},
        {img:'../assets/images/cases/cover18.jpg?v=1',det:'casesDet_18.html',title:'昆山农商行互联网核心系统'},
        {img:'../assets/images/cases/cover19.jpg',det:'casesDet_19.html',title:'鄞州银行ESB系统'},

        {img:'../assets/images/cases/cover20.jpg',det:'casesDet_20.html',title:'昆山农商行统一支付平台'},
        {img:'../assets/images/cases/cover21.jpg',det:'casesDet_21.html',title:'昆山农商行绩效考核系统'},
        {img:'../assets/images/cases/cover10.jpg',det:'casesDet_10.html',title:'网银管家云服务'},
        {img:'../assets/images/cases/cover11.jpg',det:'casesDet_11.html',title:'昆山农商行个人手机银行'},
        {img:'../assets/images/cases/cover12.jpg',det:'casesDet_12.html',title:'昆山农商行个人网银'},
        {img:'../assets/images/cases/cover14.jpg',det:'casesDet_14.html',title:'深圳农商行手机银行'},
        {img:'../assets/images/cases/cover16.jpg',det:'casesDet_16.html',title:'紫金农商行手机银行'},
        {img:'../assets/images/cases/cover17.png',det:'casesDet_17.html',title:'宁波清算中心移动支付'},

        {img:'../assets/images/cases/cover15.jpg',det:'casesDet_15.html',title:'太仓农商行手机银行'},
        {img:'../assets/images/cases/cover22.jpg',det:'casesDet_22.html',title:'更多案例'},
    ];
    var n=1;
    var max;
    var scrollTop;
    var windowHeight;
    var scrollHeight;
    var footHeight = $(".news-footer").height()+80;
    var throttledLoading = throttle(loading, 300);

    //默认加载8个案例
    f1();

    //滑动到底部加载更多
    $(window).scroll(function() {
        if($('.portfolio-item').length){
            max=Math.ceil(imgData.length/8);
            scrollTop=$(document).scrollTop();
            windowHeight=$(this).height();
            scrollHeight=$(document).height();
            throttledLoading();
        }
    });


    function f1(){
        var html='';
        for(var i=0;i<8;i++){
            html+='<div class="item portfolio-item" onclick="location.href=\''+imgData[i].det+'\'">' +
                '                <img src='+imgData[i].img+'>' +
                '                <div class="portfolio-details-wrapper">' +
                '                    <div class="portfolio-details">' +
                '                        <h3 class="animated slideInDown">'+imgData[i].title+'</h3>' +
                '                    </div>' +
                '                </div>' +
                '            </div>';
        }
        var $items=$(html);
        $container.append( $items );
        $container.isotope({
            filter: '*',
            itemSelector: '.item',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $container.imagesLoaded(function () {//图片加载完成之后再渲染新加的块儿
            $container.isotope('layout');
        });
        n++;
    }

    function loading() {
        console.log('enter loading');

        if (scrollTop + windowHeight >= scrollHeight-footHeight && n<=max) {
            console.log('enter if');

            var html = '';
            var len = imgData.length - (8 * n - 8) >= 8 ? 8 * n : 8 * (n - 1) + imgData.length - (8 * n - 8);
            for (var i = 8 * n - 8; i < len; i++) {
                html += '<div class="item portfolio-item" onclick="location.href=\'' + imgData[i].det + '\'">' +
                    '                <img src=' + imgData[i].img + '>' +
                    '                <div class="portfolio-details-wrapper">' +
                    '                    <div class="portfolio-details">' +
                    '                        <h3 class="animated slideInDown">' + imgData[i].title + '</h3>' +
                    '                    </div>' +
                    '                </div>' +
                    '            </div>';
            }
            var $items = $(html);
            $container.append($items);
            $container.isotope('appended', $items, true)
                .isotope('reloadItems');
            $container.imagesLoaded(function () {//图片加载完成之后再渲染新加的块儿
                $container.isotope('layout');
            });
            n++;
            console.log('load over')
        }
    }

    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : new Date().getTime();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = new Date().getTime();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }
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
