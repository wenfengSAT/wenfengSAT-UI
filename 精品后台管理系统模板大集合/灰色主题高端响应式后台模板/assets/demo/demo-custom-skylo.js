$(function () {

    $('#demoskylo').on('click',function(){
        $(document).skylo('start');

        setTimeout(function(){
            $(document).skylo('set',50);
        },1000);

        setTimeout(function(){
            $(document).skylo('end');
        },1500);
    });
    
    $('#setskylo').on('click',function(){
        $(document).skylo('show',function(){
            $(document).skylo('set',50);
        });
    });
    
    $('#getskylo').on('click',function(){
        alert($(document).skylo('get')+'%');
    });
    
    $('#inchskylo').on('click',function(){
        $(document).skylo('show',function(){
            $(document).skylo('inch',10);
        });
    });

});