

function goTop() {
    $(window).scroll(function() {
        var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  //兼容浏览器

     // 改进之后   
if(scrollHeight - $scrollTop < innerHeight + 50){
        $("#goTop").css('bottom','142px');
    }else{
        $("#goTop").css('bottom','10px');
    }

        if($scrollTop > 100) {  //滚动高度可调
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
