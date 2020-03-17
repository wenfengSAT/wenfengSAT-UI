var dev_settings = '<div class="dev-settings-button">'
        +'<span class="fa fa-tint"></span>'
    +'</div>'
    +'<div class="dev-settings-body">'
        +'<a href="#" data-theme="css/default-default.css"><img src="img/themes/default.jpg"></a>'
        +'<a href="#" data-theme="css/default-dark.css"><img src="img/themes/dark.jpg"></a>'
        +'<a href="#" data-theme="css/default-blue.css"><img src="img/themes/blue.jpg"></a>'                        
        +'<a href="#" data-theme="css/default-lightblue.css"><img src="img/themes/lightblue.jpg"></a>'            
        +'<a href="#" data-theme="css/default-light.css"><img src="img/themes/light.jpg"></a>'
        +'<a href="#" data-theme="css/default-green.css"><img src="img/themes/green.jpg"></a>'

        +'<a href="#" class="active" data-theme="css/default-default-white.css"><img src="img/themes/default-white.jpg"></a>'
        +'<a href="#" data-theme="css/default-dark-white.css"><img src="img/themes/dark-white.jpg"></a>'
        +'<a href="#" data-theme="css/default-blue-white.css"><img src="img/themes/blue-white.jpg"></a>'                        
        +'<a href="#" data-theme="css/default-lightblue-white.css"><img src="img/themes/lightblue-white.jpg"></a>'            
        +'<a href="#" data-theme="css/default-light-white.css"><img src="img/themes/light-white.jpg"></a>'
        +'<a href="#" data-theme="css/default-green-white.css"><img src="img/themes/green-white.jpg"></a>'
    +'</div>';

var settings_block = document.createElement('div');
    settings_block.className = "dev-settings";
    settings_block.innerHTML = dev_settings;
    document.body.appendChild(settings_block);

$(document).ready(function(){
    
    /* Change Theme */
    $(".dev-settings-body a[data-theme]").click(function(){
        $(".dev-settings-body a[data-theme]").removeClass("active");
        $(this).addClass("active");
        $("#dev-css").attr("href",$(this).data("theme"));
        
        return false;
    });
    /* END Change Theme */
    
    /* Open/Hide Settings */
    $(".dev-settings-button").on("click",function(){
        $(".dev-settings").toggleClass("active");
    });
    /* End open/hide settings */
    
});