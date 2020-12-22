/**
 * Created by Udea on 2017/5/31.
 */
(function () {
    var j = 1;
    $.each($("#search_list > .list-group-item"),function (i) {
        if(i != 0){
            var top = (i-1)*80;
            if(i > 19){
                if(i == 25){
                    top = 1510;
                }else {
                    top = (i-1)*65;
                }
            }
            $(this).click(function () {
                $('#moveHeight').css('display','block');
                var com = ($(this).find(".name-com").text());
                var namein = ($(this).find(".name-in").text());
                var nameout = ($(this).find(".name-out").text());
                $('.com').html(com);
                $('.in-span').html(namein);
                $('.out-span').html(nameout);
                $('#moveHeight').css('top',top);
                // console.log(i);
            })
        }
    })
})();