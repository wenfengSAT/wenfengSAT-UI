jQuery(document).ready(function() {
    "use strict";


    /* ------- Preloader ------ */
    $(window).load(function(){
        var html=` <p onclick="location.href='cases.html'"><a>&lt;&lt;<span>更多案例</span></a></p>
            <div class="con-leftBox" onclick="location.href='casesDet_23.html'">
                <img src="../assets/images/cases/cover23.jpg">
                <div class="con-leftCover">
                    <div>
                        <h4 class="animated wow slideInDown">昆山农商银行企业网银客户端</h4>
                    </div>
                </div>
            </div>
            <div class="con-leftBox" onclick="location.href='casesDet_24.html'">
                <img src="../assets/images/cases/cover24.jpg">
                <div class="con-leftCover">
                    <div>
                        <h4 class="animated wow slideInDown">昆山农商银行企业网银移动端</h4>
                    </div>
                </div>
            </div>
            <div class="con-leftBox" onclick="location.href='casesDet_25.html'">
                <img src="../assets/images/cases/cover25.jpg">
                <div class="con-leftCover">
                    <div>
                        <h4 class="animated wow slideInDown">太仓农村商业银行企业手机银行</h4>
                    </div>
                </div>
            </div>`;
        $('.con-left.animated').html(html);

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


    /*--------------底部切换-------------*/
    $('.contact div').mouseover(function(){
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq("+ $(this).index() +")").addClass('active');
    });


    //详情页
    $(window).scroll(function() {
        if($('.caDet-content').length){
            if($(window).scrollTop() > 220){
                $('.caDet-content .con-left').css('position','fixed');
                $('.caDet-content .con-left').css('top','100px');
                $('.fixed_a').addClass('active');
            }else{
                $('.caDet-content .con-left').css('position','absolute');
                $('.caDet-content .con-left').css('top','320px');
                $('.fixed_a').removeClass('active');
            }
        }
    });




});
