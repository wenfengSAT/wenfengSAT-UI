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

    var dbParent = document.getElementsByClassName('h_advertise')[0];
    var db = dbParent.getElementsByClassName('h_db');
    dbParent.onmouseover = function () {
        for (var i = 0; i < db.length; i++) {
            db[i].style.display = "block"
        }
    };
    dbParent.onmouseout = function () {
        for (var i = 0; i < db.length; i++) {
            db[i].style.display = "none"
        }
    };
    var tabUl = document.getElementsByClassName('h_tab_ul')[0];
    var tabLi = tabUl.getElementsByClassName('h_tab_li');
    for (var i = 0; i < tabLi.length; i++) {
        tabLi[i].index = i;
        tabLi[i].onmouseover = function () {
            var tabMain = tabLi[this.index].getElementsByTagName('ul')[0];
            tabMain.style.display = "block"
        };
        tabLi[i].onmouseout = function () {
            var tabMain = tabLi[this.index].getElementsByTagName('ul')[0];
            tabMain.style.display = "none"
        };
    }
    tab('ah_live_fi');
    tab('ah_live_tw');
    tab('h_menu');
    tab('h_topic');
    function tab(tp) {
        var tParent = document.getElementsByClassName(tp)[0];
        var hTit=tParent.getElementsByClassName('h_tit')[0];
        var hLe=hTit.getElementsByClassName('le')[0];
        var tit=hLe.getElementsByTagName('a');
        var hMain=tParent.getElementsByClassName('h_live_main')[0];
        var titDiv=hMain.getElementsByClassName('h_live_main_w');
        for (var i = 0; i < tit.length; i++) {
            tit[i].index = i;
            tit[i].onclick = function () {
                for (var i = 0; i < tit.length; i++) {
                    tit[i].className = "";
                    titDiv[i].style.display = "none"
                }
                this.className = "h_tit_check";
                titDiv[this.index].style.display = "block";
            }
        }
    }
    window.onscroll = function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

        console.log(scrollTop,scrollHeight,innerHeight);

        if(scrollHeight - scrollTop < innerHeight + 50){
            $("#goTop").css('bottom','70px');
        }else{
            $("#goTop").css('bottom','10px');
        }
    };
    window.onscroll = function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

        if(scrollHeight - scrollTop < innerHeight + 50){
            $("#goTop").css('bottom','70px');
        }else{
            $("#goTop").css('bottom','10px');
        }
    };
    function goTop() {
        $(window).scroll(function() {
            var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
            var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //兼容浏览器
            if($scrollTop > 100) { //滚动高度可调
                $("#goTop").css('opacity','1');
            }else {
                $("#goTop").css('opacity','0');
            };
        });

        $("#goTop").on("click", function() {
            $("body").stop().animate({
                scrollTop: 0
            });
        })
    }
    goTop();

    var advertise = document.getElementsByClassName("h_advertise_main")[0];
    var aUl = advertise.getElementsByTagName("ul")[0];
    var aLl = aUl.getElementsByTagName("li");
    var hSolid = document.getElementsByClassName("h_db");
    var i = 20, lastNum = 0, timer, flags = true, imgNums = 0;

    function animate(dis) {
        var every = dis / i;
        timer = setInterval(function () {
            if (lastNum >= i) {
                clearInterval(timer);
                flags = true;
                lastNum = 0;
                return;
            }
            var le = parseFloat(getComputedStyle(aUl).left);
            aUl.style.left = le + every + 'px';
            lastNum++;
        }, 17)
    }

    hSolid[0].onclick = function () {
        if (flags) {
            flags = false;
            if (imgNums <= 0) {
                aUl.style.left = -parseFloat(getComputedStyle(aUl).width) + 910 + 'px';
                imgNums = aLl.length - 1;
            }
            animate(910);
            imgNums--;
        }
    };
    hSolid[1].onclick = function () {
        if (flags) {
            flags = false;
            if (imgNums >= aLl.length - 1) {
                aUl.style.left = '0px';
                imgNums = 0;
            }
            animate(-910);
            imgNums++;
        }
    };


    var fade = document.getElementsByClassName('h_banner')[0],
        lb = fade.getElementsByClassName('h_banner_con')[0],
        li = lb.getElementsByTagName('li'),
        le = document.getElementsByClassName('h_ban')[0],
        ri = document.getElementsByClassName('h_ban')[1],
        dot = document.getElementsByClassName('h_banner_main_ul')[0],
        dotLi = dot.getElementsByTagName('li'),
        imgNum = 0,//图片计数器
        fadeOutTimer, fadeInTimer, autoPlayTimer,//淡出定时器,淡入定时器
        flag = true,
        dotNum = 0;//焦点按钮计数器

    ri.onclick = function () {
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
            noBg();
            if (dotNum >= dotLi.length - 1) {
                dotNum = -1;
            }
            dotLi[dotNum + 1].className  = 'h_liche';
            dotNum++;
            imgNum++;
        }
    };
    le.onclick = function () {
        if (flag) {
            flag = false;
            var oldLi = li[imgNum];//旧的li
            if (imgNum <= 0) {
                imgNum = li.length - 1;
            }
            var newLi = li[imgNum - 1];//新的li
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
            noBg();
            if (dotNum <= 0) {
                dotNum = dotLi.length
            }
            dotLi[dotNum - 1].className  = 'h_liche';
            dotNum--;
            imgNum--;
        }
    };
    autoPlay();
    function autoPlay() {
        autoPlayTimer = setInterval(
            function () {
                ri.onclick()
            }, 3500
        );
    }

    fade.onmousemove = function () {
        clearInterval(autoPlayTimer);
    };
    fade.onmouseout = function () {
        autoPlay();
    };
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

    //焦点按钮背景色变白
    function noBg() {
        for (var i = 0; i <= dotLi.length - 1; i++) {
            dotLi[i].className = '';
        }
    }

    //焦点按钮点击事件
    for (var i = 0; i < dotLi.length; i++) {
        dotLi[i].index = i;//通过对象自定义属性获得每个元素下标值
        dotLi[i].onclick = function () {
            if (flag) {
                flag = false;
                if (dotNum == 0) {
                    li[li.length - 1].style.opacity = 0;
                }
                noBg();//所有焦点按钮背景色变白
                this.className  = 'h_liche';//当前焦点按钮背景色变色
                fadeOut(li[dotNum]);//旧图片淡出
                fadeIn(li[this.index]);//新图片淡入
                dotNum = this.index;//新下标赋值给旧下标
                imgNum = this.index;//图片、焦点按钮计数器统一
            }
        };
        flag = true;
    }
};