/**
 * Created by Administrator on 2017/3/10.
 */

var width1 =1032;
var speed1 = 1000;
//var delay1 = 1000;
var now1 = 0;
var max1 =2;
var $imgs1 = $('.m_lun ul');
$imgs1.find('li:first').clone().appendTo($imgs1);
//var timer1=setInterval(changeAuto1,delay1);
function changeNext1(){
    $imgs1.animate({
        'left':-width1*now1+'px'
    },speed1)
}
function changeFirst1(){
    $imgs1.animate({
        'left':-width1*(max1+1)+'px'
    },speed1,function(){
        $(this).css('left',0)
    })
}
function changeAuto1(){
    if(!$imgs1.is(':animated')){
        if(now1<max1){
            now1+=1;
            changeNext1()
        }else{
            now1=0;
            changeFirst1()
        }
    }
}
//$('.lb').on({
//    mouseenter:function(){
//        clearInterval(timer1)
//    },
//    mouseleave:function(){
//        timer1=setInterval(changeAuto1,delay1)
//    }
//});
$('.prev').click(function(){
    if(!$imgs1.is(':animated')){
        if(now1<=0){
            now1=max1;
            $imgs1.css({
                'left':-width1*(max1+1)
            })
        }else{
            now1--
        }
        changeNext1();
    }
});
$('.next').click(function(){
    changeAuto1()
});
