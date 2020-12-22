onload = function () {
    pullDown("h_pull", "h_pull_down");
    pullDown("h_bar_text", "h_pull_down");
    pullDown("h_blo", "h_pull_down");
    pullDown("h_blo_pull", "h_pull_down");
    function pullDown(f, z) {
        var pull = document.getElementsByClassName(f)[0];
        var pullDown = pull.getElementsByClassName(z)[0];
        pull.onmouseover = function () {
            pullDown.style.display = "block";
        };
        pull.onmouseout = function () {
            pullDown.style.display = "none";
        };
    }
var mainInfo=document.getElementsByClassName("h_event_tab_main_info")[0];
var main=document.getElementsByClassName("h_live_main")[0];
var mainW=main.getElementsByClassName("h_live_main_w");
var mainInfoA=mainInfo.getElementsByTagName("a");
    for(var i=0;i<mainInfoA.length;i++){
        mainInfoA[i].index = i;
        mainInfoA[i].onclick= function () {
            for(var i=0;i<mainInfoA.length;i++){
                mainInfoA[i].className='';
                mainW[i].style.display="none"
            }
            mainInfoA[this.index].className='h_tit_check';
            mainW[this.index].style.display="block";
        }
    }

    window.onscroll = function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

        console.log(scrollTop, scrollHeight, innerHeight);

        if (scrollHeight - scrollTop < innerHeight + 50) {
            $("#goTop").css('bottom', '70px');
        } else {
            $("#goTop").css('bottom', '10px');
        }
    };
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

        if (scrollHeight - scrollTop < innerHeight + 50) {
            $("#goTop").css('bottom', '70px');
        } else {
            $("#goTop").css('bottom', '10px');
        }
    };
    function goTop() {
        $(window).scroll(function () {
            var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
            var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //兼容浏览器
            if ($scrollTop > 100) { //滚动高度可调
                $("#goTop").css('opacity', '1');
            } else {
                $("#goTop").css('opacity', '0');
            }
            ;
        });

        $("#goTop").on("click", function () {
            $("body").stop().animate({
                scrollTop: 0
            });
        })
    }

    goTop();


    var fade = document.getElementsByClassName('h_event_carousel')[0],
        lb = fade.getElementsByTagName('ul')[0],
        li = lb.getElementsByTagName('li'),
        imgNum = 0,//图片计数器
        fadeOutTimer, fadeInTimer, autoPlayTimer,//淡出定时器,淡入定时器
        flag = true,
        dotNum = 0;//焦点按钮计数器

    function ri() {
        if (flag) {
            flag = false;
            var oldLi = li[imgNum];//旧的li
            if (imgNum >= li.length - 1) {
                imgNum = 0;
            }
            var newLi = li[imgNum + 1];//新的li
            var o1 = parseFloat(getComputedStyle(oldLi).opacity),
                o2 = parseFloat(getComputedStyle(newLi).opacity);
            if (o1 >= 0) {
                fadeOut(oldLi);
            } else {
                fadeIn(oldLi);
            }
            if (o2 <= 0) {
                fadeIn(newLi);
            } else {
                fadeOut(newLi);
            }
            dotNum++;
            imgNum++;
        }
    }

    autoPlay();
    function autoPlay() {
        autoPlayTimer = setInterval(
            function () {
                ri();
            }, 3500
        );
    }

    //淡出动画fadeOut
    function fadeOut(element) {
        fadeOutTimer = setInterval(
            function () {
                var op = getComputedStyle(element).opacity;
                if (op <= 0) {
                    clearInterval(fadeOutTimer);
                    flag = true;
                    return;
                }
                element.style.opacity = op - 0.1;
            }, 60
        )
    }

    //淡入动画fadeIn
    function fadeIn(element) {
        fadeInTimer = setInterval(
            function () {
                var op = parseFloat(getComputedStyle(element).opacity);
                if (op >= 1) {
                    clearInterval(fadeInTimer);
                    flag = true;
                    return;
                }
                element.style.opacity = op + 0.1;
            }, 60
        )
    }

    var liveMain = document.getElementsByClassName("h_live_main")[0];
    var liveLi = liveMain.getElementsByTagName("li");
    for(var i=0;i<liveLi.length;i++){
        liveLi[i].index=i;
        liveLi[i].onmouseover= function () {
            var Tra = liveLi[this.index].getElementsByClassName("h_tra");
            for(var i=0;i<Tra.length;i++){
                Tra[i].style.opacity='1'
            }
        };
        liveLi[i].onmouseout= function () {
            var Tra = liveLi[this.index].getElementsByClassName("h_tra");
            for(var i=0;i<Tra.length;i++){
                Tra[i].style.opacity='0'
            }
        }
    }
};