/* file:           actions.js
 * version:        1.3
 * last changed:   23.03.2014
 * description:    In this file you will find all template actions and controllers
*/
$(document).ready(function(){        
    
    $.mpb("show",{value: [0,50],speed: 5});
    
    navigation_state = navigation_state_was = $(".page-navigation").hasClass('page-navigation-closed');
    
    $(".page-head-elements .dropdown").on("click",function(event){
        var popup = $(this).next(".popup");

        if(!popup.hasClass('open')){
            popup.addClass('open');
            list_height();
            $(".scroll").mCustomScrollbar("update");                        
        }else{
            popup.removeClass('open');
        }        
        return false;
    });
    
    /* remove content from ui spinner buttons */
    $(".ui-spinner").find('span').html('');
    /* icons */
    
    /* table checkall */
    $("table .checkall").on("click", function(){
        var state = $(this).is(":checked") ? true : false;
        var tbody = $(this).parents("table").find("tbody");
        var index = $(this).parent("th").index();
        
        tbody.find("tr").each(function(){
            $(this).find("td:eq("+index+") input:checkbox").prop("checked",state);
        }); 
        return false;
    });
    /* eof table checkall */ 
    
    /* page toolbar tabs */
    $(".page-toolbar-tabs a").on("click",function(){
        var pli = $(this).parent("li");
        var act = $($(this).attr("href"));
        
        $(".page-toolbar-tabs li,.page-toolbar-tab").removeClass("active");
        pli.addClass("active");
        act.addClass("active");
        return false;
    });
    /* eof page toolbar tabs */
    
    $(".page-head .search").on("click",function(){        
        $(this).find("input").focus();        
    });
    
    // navigation sublevels
    $(".navigation > li").each(function(){
        if($(this).children("ul").length > 0){
            $(this).addClass("openable");
        }
    });
    
    $(".navigation li > a").on("click",function(){
        
        var pli = $(this).parent("li");
        var sub = pli.children("ul");        
        
        if(sub.length > 0){
            sub.is(":visible") ? sub.slideUp(200,function(){
                pli.removeClass("open");
                $(".page-navigation").mCustomScrollbar("update");
            }) : sub.slideDown(200,function(){
                pli.addClass("open");                
                $(".page-navigation").mCustomScrollbar("update");
            });            
            return false;
        }                      
    });
    
    // eof navigation sublevels
    
    /* input file */
    $(".file .btn,.file input:text").on('click',function(){                
        var block = $(this).parents('.file');
        block.find('input:file').click();
        block.find('input:file').change(function(){
            block.find('input:text').val(block.find('input:file').val());
        });
    });
    /* eof input file */
    
    // List items control show        
    gListItemControls = {
        init: function(){
            // on item click
            $(".list .list-item .list-item-content,.list .list-item .list-item-trigger-external").on("click",function(){        
                list_item_controls($(this).parents(".list-item"),0);
            });        
            // on trigger click
            $(".list .list-item .list-item-trigger").on("click",function(){
                list_item_controls($(this).parents(".list-item"),1);
            });                
        }
    }
    gListItemControls.init();
    // eof list items control show
    
    // Toogle navigation controller
    $(".page-navigation-toggle").on("click",function(){        
        page_navigation();
        return false;
    });
    
    // Toggle sidebar controller
    $(".page-sidebar-toggle").on("click",function(){        
        if($(".page-sidebar").hasClass("page-sidebar-opened")){
            //If sidebar opened - close
            page_sidebar('close');
        }else{        
            //If sidebar closed - open
            page_sidebar('open');
        }        
        return false;        
    });
    //End of sidebar controller
    
    /* block controls */
    $(".block-remove").on("click",function(){
        block_remove($(this).parents(".block"));
        return false;
    });

    $(".block-toggle").on("click",function(){
        block_toggle($(this).parents(".block"));
        return false;
    });

    $(".block-refresh").on("click",function(){
        var block = $(this).parents(".block");
        block_refresh(block);

        setTimeout(function(){
            block_refresh(block);
        },2000);
        return false;
    });        
    /* eof block controls */
    
    /* Draggable blocks */   
    if($(".sortableContent").length > 0){
        var scid = 'sc-'+$(".sortableContent").attr('id');
                
        var sCdata = $.cookies.get( scid );          

        if(null != sCdata){            
            for(row=0;row<Object.size(sCdata); row++){                
                for(column=0;column<Object.size(sCdata[row]);column++){                    
                    for(block=0;block<Object.size(sCdata[row][column]);block++){                        
                        $("#"+sCdata[row][column][block]).appendTo(".sortableContent .scRow:eq("+row+") .scCol:eq("+column+")");                        
                    }
                }               
            }            
        }                    
       
        $(".sortableContent .scCol").sortable({
            connectWith: ".sortableContent .scCol",
            items: "> .block",
            handle: ".block-head",
            placeholder: "scPlaceholder",
            start: function(event,ui){
                $(".scPlaceholder").height(ui.item.height());
            },
            stop: function(event, ui){                                
                
                var sorted = {};
                var row = 0;
                $(".sortableContent .scRow").each(function(){                    
                    sorted[row] = {};
                    $(this).find(".scCol").each(function(){
                        var column = $(this).index();                        
                        sorted[row][column] = {};

                        $(this).find('.block').each(function(){
                            sorted[row][column][$(this).index()] = $(this).attr('id');
                        });
                    });
                    row++;
                });
                                                
                $.cookies.set(scid, JSON.stringify(sorted));
            }
        }).disableSelection();
        
        $(".sc-set-default").on("click",function(){
            $.cookies.del(scid);
            location.reload();
        });
        
    }    
    /* EOF Draggable blocks */
    

    // Onload page functions

    $.mpb("update",{value: 100, speed: 5, complete: function(){            
        $(".mpb").fadeOut(200,function(){
            $(this).remove();
        });
    }});

});

$(function(){
    page_layout();
    list_controls_wrapper();    
    list_height();
    
    if($.isFunction($.updateCharts)) $.updateCharts();
    if($.isFunction($.updateMaps)) $.updateMaps();
    navigation_state = false;        
});

$(document).mouseup(function(e){
    var container = $(".popup");
    if (!container.is(e.target) && container.has(e.target).length === 0)        
        container.removeClass('open');        
});

$(window).resize(function(){
    // Onresize page functions     
    page_layout();
    list_height();
});

function page_layout(){
    
    if($(window).width() < 769){
        $(".page-container").addClass("page-layout-mobile");
        $(".page-navigation").addClass('page-navigation-closed');
        page_navigation('close');
    }else{
        $(".page-container").removeClass("page-layout-mobile");                
        $(".page-navigation").removeClass('page-navigation-closed');        
        $(".page-container").removeAttr("style");                
        
        page_sidebar('close');
        
        if(navigation_state)
            page_navigation('close');
    }
    
    if($(".content-wide-control").length > 0)
        $(".content-wide-control").height($(".page-content").height()-$(".page-toolbar").height());
    
    $(".page-content .container").height($(window).height()-60);
    
    $(".page-navigation, .page-sidebar").height($(window).height());        
    $(".page-navigation, .page-sidebar").mCustomScrollbar("update");    
}

function list_item_controls(item,hasTrigger){    
    var content     = item.find(".list-item-content");
    var controls    = item.find(".list-item-controls");
    var trigger     = item.find(".list-item-trigger");
    
    if(trigger.length > 0 && hasTrigger == 0) return false;
    
    if(!item.hasClass("item-state-active")){
        if(controls.length > 0){

            content.css({position: "absolute"}).animate({left: "-50%"},300);
            controls.animate({right: "0%"},300);
            
            item.addClass("item-state-active");            
        }
    }else{            
        content.animate({left: "0%"},300,function(){
            $(this).removeAttr("style");
        });
        controls.animate({right: "-50%"},300,function(){
            item.removeClass("item-state-active");
        });       
    }
}

function list_height(){
    $(".list .list-item").each(function(){
        $(this).height($(this).find(".list-item-content").height()+10);
    });    
}

function block_remove(block){
    block.animate({'opacity':0},200,function(){
        $(this).remove();
    });
}
function block_toggle(block){    
    if(!block.hasClass("block-toggled")){
        block.children("div:not(.block-head)").slideUp(200,function(){
            block.addClass("block-toggled");
            block.find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        });
        
    }else{        
        block.children("div:not(.block-head)").slideDown(200,function(){
            block.removeClass("block-toggled");
            block.find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");            
        });
    }   
}
function block_refresh(block){        
    if(!block.hasClass("block-refreshing")){
        block.append('<div class="block-refresh-layer"><i class="fa fa-spinner fa-spin"></i></div>');
        block.find(".block-refresh-layer").width(block.width()).height(block.height());
        block.addClass("block-refreshing");
    }else{
        block.find(".block-refresh-layer").remove();
        block.removeClass("block-refreshing");
    }    
}

function page_navigation(action,sidebar){
    //Hide sidebar if opened
    if($(".page-sidebar").hasClass("page-sidebar-opened") && !sidebar){
        navigation_state_was = $(".page-navigation").hasClass("page-navigation-closed");
        page_sidebar("close");        
        return false;
    }
    
    //Get width of navigation block
    var navigation_width  = $(".page-navigation").width();
    //Get navigation state
    var navigation_action = null != action ? action : 'auto';
    //Get navigation mode
    var navigation_mode   = $(".page-container").hasClass('page-layout-mobile');
        
    if(navigation_action == 'open')
        page_navigation_open(navigation_mode,navigation_width);
    
    if(navigation_action == 'close')
        page_navigation_close(navigation_mode,navigation_width);
    
    if(navigation_action == 'auto'){
        if(!navigation_mode){
            $(".page-navigation").hasClass("page-navigation-closed") 
            ? page_navigation_open(navigation_mode,navigation_width)
            : page_navigation_close(navigation_mode,navigation_width);
        }else{
            !$(".page-navigation").hasClass("page-navigation-opened")
            ? page_navigation_open(navigation_mode,navigation_width)
            : page_navigation_close(navigation_mode,navigation_width);
        }        
    }
    
    return false;
    //End of navigation controller
    
}

function page_navigation_open(mode,width){
    
    if(!mode){ //Desktop mode
        $(".page-content,.page-head").animate({'padding-left': width},300,function(){
            $(this).removeAttr("style");
         });                                
         $(".page-navigation").animate({left: 0},300,function(){
             $(this).removeClass("page-navigation-closed");
             
             if($.isFunction($.updateCharts)) $.updateCharts();
         });        
    }else{ //Mobile mode
        $(".page-container").css({"position":"absolute","width":$(".page-container").width()}).animate({left: width},300);
        $(".page-navigation").addClass("page-navigation-opened"); 
    }
    
    list_height();
    
    return false;
    
}

function page_navigation_close(mode,width){

    if(!mode){ //Desktop mode
        var speed = navigation_state ? 0 : 300;
        $(".page-content,.page-head").animate({"padding-left": 0},speed);                
        $(".page-navigation").animate({left: -width},speed,function(){
            $(this).addClass("page-navigation-closed");
            
            if($.isFunction($.updateCharts)) $.updateCharts();
        });
    }else{ //Mobile mode
        $(".page-container").animate({left: 0},300,function(){
               $(this).removeAttr("style");
            });
        $(".page-navigation").removeClass("page-navigation-opened");
    }
    
    list_height();
    
    return false;
    
}

function page_sidebar(action){        
    // Get width of sidebar block    
    var sidebar_width = $(".page-sidebar").width();
    var navigation_mode = $(".page-container").hasClass('page-layout-mobile');
    
    //Check state
    if(action == "close"){              
        if(!$(".page-sidebar").hasClass("page-sidebar-opened")) return false;        
        
        if(navigation_state_was && !navigation_mode) page_navigation("close",true);
        
        $(".page-container").animate({right: 0},300);
        $(".page-sidebar").animate({right: -sidebar_width},300,function(){
            $(this).removeClass("page-sidebar-opened");
            page_layout_repair();
        });               
    }else{                
        navigation_state_was = $(".page-navigation").hasClass("page-navigation-closed");
        
        if(!navigation_mode) page_navigation("open");
        
        $(".page-container").css({"position":"absolute","width":$(".page-container").width()}).animate({right: sidebar_width},300);        
        $(".page-sidebar").animate({right: 0},300,function(){
            $(this).addClass("page-sidebar-opened");
        });        
    } 
}

function page_layout_repair(){
    if(!$(".page-sidebar").hasClass("page-sidebar-opened")){
        $(".page-container").removeAttr("style");
    }
}

function list_controls_wrapper(){    
    $(".list .list-item .list-item-controls, .list .list-item .list-item-right").each(function(){
       $(this).wrapInner("<div/>");
    });
}

function theme(elm,css){
    $(".themes .theme-item").removeClass("active");
    elm.addClass("active");
    $("#theme").attr("href","css/"+css);
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};