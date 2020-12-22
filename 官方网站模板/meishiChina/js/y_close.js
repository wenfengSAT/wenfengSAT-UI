$("#y_close").click(function(){
    $(this).parent().fadeOut();
});

$("#y_footer").mouseover(function (){
    $("#y_close").show();
}).mouseout(function (){
    $("#y_close").hide();
});