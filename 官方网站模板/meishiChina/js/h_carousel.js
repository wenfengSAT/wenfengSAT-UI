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
    //var hMain=document.getElementsByClassName('h_main')[0];
    //var mainUl=hMain.getElementsByTagName('ul');
    //var navWrap=document.getElementsByClassName('nav_wrap')[0];
    //var navLi=navWrap.getElementsByTagName('a');
    //for(var i=0;i<navLi.length;i++){
    //    navLi[i].index = i;
    //    navLi[i].onclick= function () {
    //        for(var i=0;i<navLi.length;i++){
    //            navLi[i].className='';
    //            mainUl[i].style.display='none';
    //        }
    //        this.className='y_on';
    //        mainUl[this.index].style.display="block";
    //    }
    //}
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
};