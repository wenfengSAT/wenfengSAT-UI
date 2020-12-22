$(function () {
    var height = 640;  //图片高度
    var speed = 700;   //动画时间
    var delay = 1500;   //自动切换
    var now = 0;     //当前图片的索引
    var max = 5;     //最大索引
    var $imgs = $('.y_lunbo-imgs');   //获取对象
    //复制第一个图片追加到列表最后
    $imgs.find('li:first').clone().appendTo($imgs);
    function changeAuto() {
        if (!$imgs.is(':animated')) {
            if (now < max) {
                now += 1;
                changeNext();
            } else {
                now = 0;
                changeFirst();
            }
        }
    }

    //切换到下一张
    function changeNext() {
        $imgs.animate({'left': -height * now}, speed)
    }

    //切换到第一张图片
    function changeFirst() {
        $imgs.animate({
            left: -height * (max + 1)
        }, speed, function () {
            $(this).css('left', '0')
        })
    }

    var $lunboNum = $('.y_lunbo-num li');

    $lunboNum.click(function () {
        var x = now;
        now = $(this).index();
        if (x < now) {
            $imgs.css({left: -height * (now - 1) + "px"});
            changeNext();
        }
        else if (x > now) {
            $imgs.css({left: -height * (now + 1) + "px"});
            changeNext();
        }
        changeNum();
    })
    $('.y_prev').click(function () {
        if (!$imgs.is(':animated')) {
            if (now <= 0) {
                now = max;
                $imgs.css({
                    left: -height * (max + 1)
                })
            } else {
                now--;
            }
            changeNext();
        }
    });
    $('.y_next').click(function () {
        changeAuto()
    });
})