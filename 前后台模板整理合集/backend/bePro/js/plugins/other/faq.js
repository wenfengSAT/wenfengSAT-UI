$(document).ready(function(){

    $(".faq .item .title").click(function(){
        var text = $(this).parent('.item').find('.text');
        
        if(text.is(':visible'))
            text.slideUp(200,function(){
                $(".page-content").mCustomScrollbar("update");
            });
        else
            text.slideDown(200,function(){
                $(".page-content").mCustomScrollbar("update");
            });                
    });

    $("#faqSearch").click(function(){
        var keyword = $(".faqSearchKeyword").val();
        
        if(keyword.length >= 3){
            $(".faq").find('.text').slideUp(200,function(){
                $(".page-content").mCustomScrollbar("update");
            });
            $("#faqSearchResult").html("");
            $(".faq").removeHighlight();
            
            var items = $(".faq .text:containsi('"+keyword+"')");
            items.highlight(keyword);
            items.slideDown(200,function(){
                $(".page-content").mCustomScrollbar("update");
            });
            $("#faqSearchResult").html("<span class='text-success'>Found in "+items.length+" answers</span>");            
            
        }else
            $("#faqSearchResult").html("<span class='text-error'>Minimum 3 chars</span>");
                 
    });
    
    $("#faqListController a").click(function(){
        var open = $(this).attr('href');
        $(open).find('.text').slideDown(200,function(){
            $(".page-content").mCustomScrollbar("update");
        });
        
    });
    
    $("#faqOpenAll").click(function(){
        $(".faq").find('.text').slideDown(200,function(){
            $(".page-content").mCustomScrollbar("update");
        });        
    });
    
    $("#faqCloseAll").click(function(){
        $(".faq").find('.text').slideUp(function(){
            $(".page-content").mCustomScrollbar("update");
        });        
    });
    
    $("#faqRemoveHighlights").click(function(){
        $(".faq").removeHighlight();
    });
    
    
    
});
