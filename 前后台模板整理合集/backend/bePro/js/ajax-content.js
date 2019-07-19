/* file:           ajax-content.js
 * version:        1.3
 * last changed:   23.03.2014
 * description:    Ajax content plugin
*/

$(function(){
    
    $("#ajax-content-tabs li a").each(function(){
        
        if($(this).hasClass("new-tab")) return true;
        
        var data_link = $(this).attr("data-link");
        var container = $(this).attr("href");
        
        ajax_content(data_link, container);
    });
    
    $(".navigation li > a").on("click",function(){
        if($(this).attr("href") == '#') return false;
        
        var tab_id = $("#ajax-content-tabs li.active a").attr("href");
        $("#ajax-content-tabs li.active a").attr("data-link",$(this).attr("href")).html($(this).html()).append('<span class="fa fa-times tab-close"></span>');
        ajax_content($(this).attr("href"), tab_id);
        
        return false;
    });
    
    $("#ajax-content-tabs").on("click","li a span.tab-close",function(){
        var tab_id = $(this).parent("a").attr("href");
        $(this).parents("li").remove();
        $(tab_id).remove();
    });
    
    $("#ajax-content-tabs li a.new-tab").on("click",function(){
        ajax_new_tab("New tab");
        return false;
    });
    
});

function ajax_content(link,content){
    if(link.length <= 3) return false;
    
    $.get(link, function(data){
        
        var data = $(data).find(".page-content .container").html();
        $(content).html(data);

        gPlugins(content);     
        gDemos.init();
        gFormEditable.init();
        gListItemControls.init();        
        list_controls_wrapper();
        list_height();        
    });    
    
}
function ajax_new_tab(tab_name){
    $("#ajax-content-tabs li,#ajax-content .page-toolbar-tab").removeClass("active");
    
    var tab_id  = "tab-"+Math.floor(+new Date() / 1000);
    
    var new_tab = $("<li></li>").addClass("active").append($("<a>"+tab_name+"</a>").attr("href",'#'+tab_id).attr("data-link","#").append('<span class="fa fa-times tab-close"></span>'));
    var new_con = $("<div></div>").addClass("row page-toolbar-tab active").attr('id', tab_id);
    
    $("#ajax-content-tabs li:last").before(new_tab);
    $("#ajax-content").append(new_con);    
}