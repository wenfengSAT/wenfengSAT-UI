"use strict";

var dev_loaders_page_loader = {    
    open: function(){
        /* close opened loaders */
        this.close();
        /* ./end */
        
        /* new loader */
        var loading_layer = $("<div></div>").addClass("dev-page-loading");
        /* ./end */
        
        /* append loader */
        $("body").append(loading_layer).find(".dev-page-loading").animate({opacity: 1},200,"linear");
        /* ./end */
    },
    close: function(){
        /* close opened loader */
        if($(".dev-page-loading").length > 0){            
            $(".dev-page-loading").animate({opacity: 0},300,"linear",function(){
                $(this).remove();
            });                        
        }        
        /* ./close opened loader */
    }
}

var dev_loaders_circle = {        
    show: function(element) {        
    /* loader circle */
        /* build loader html */
        var loader = $("<div></div>").addClass("dev-loader-circle dev-loader-circle-active").html("<div></div><div></div><div></div><div></div>");        
        /* ./end */        
        /* show loader */
        element.append(loader);
        /* ./end */
    /* ./loader circle */
    },
    hide: function(element){
    /* hide loader */
        element.find(".dev-loader-circle").remove();
    /* ./hide loader */
    }
};

var dev_loaders_default = {
    show: function(element) {
    /* loader circle */    
        /* build loader html */
        var loader = $("<div></div>").addClass("dev-loader-default").html("<div></div>");
        /* ./end */
        /* show loader */
        element.append(loader);
        /* ./end */        
    /* ./loader circle */
    },
    hide: function(element){
    /* hide loader */
        element.find(".dev-loader-default").remove();
    /* ./hide loader */    
    }
};

$(function(){
    
    setTimeout(function(){
        dev_loaders_page_loader.close();
    },1000);    
});