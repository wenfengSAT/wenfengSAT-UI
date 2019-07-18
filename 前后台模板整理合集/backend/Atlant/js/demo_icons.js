$(function() {
    
    $(".icons-list li").on("click",function(){
        if($(this).find("i").length > 0){            
            var iClass = $(this).find("i").attr("class");                        
        }else{
            var iClass = $(this).find("span").not("span[class=glyphicon-class]").attr("class");            
        }
        
        var icon_preview = $("<i></i>").addClass(iClass);
        
        $("#iconPreview .icon-preview").html(icon_preview);
        
        $("#iconPreview .icon-preview-span").html('&lt;span class="'+iClass+'">&lt;/span>');
        $("#iconPreview .icon-preview-i").html('&lt;i class="'+iClass+'">&lt;/i>');
        $("#iconPreview .icon-preview-class").html(iClass);
        
        $("#iconPreview").modal("show");
        
        
    })
    
});