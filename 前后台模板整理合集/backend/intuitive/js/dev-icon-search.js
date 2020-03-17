"use strict";

var icon_search = {
    settings: {
        min_keyword_length: 3
    },
    search: function(keyword){
        var list = "";
        
        var results = $("#fa_icons, #gl_icons").find("i[class*="+keyword+"]");
        
        if(results.length > 0){
            results.each(function(){
                list += "<li><i class=\""+$(this).attr("class")+"\"></i> "+$(this).attr("class")+"</li>";
            });                        
        }else{                        
            $("#icon_search_info").show().html("No results found");
        }
        
        $(".icon_search_results").fadeIn().find(".icons-list").html(list);
    },
    init: function(){
        var  self = this;
        
        $("#icon_search_form").submit(function(){
            $(".icon_search_results").hide().find(".icons-list").html("");
            $("#icon_search_message").html("").parents(".form-group").removeClass("has-error");
            $("#icon_search_info").hide().html("");
            
            if($("#icon_search_keyword").val().length >= self.settings.min_keyword_length){                
                self.search($("#icon_search_keyword").val());                
            }else{
                $("#icon_search_message")
                    .html("Min keyword length should be "+self.settings.min_keyword_length)
                    .parents(".form-group").addClass("has-error");
            }
            return false;
        });
    }    
};

$(function(){
    icon_search.init();
});