"use strict";

var dev_email = {
    setHeight: function(){        
        if(window.innerWidth > 992){
            var header_height = dev_layout_alpha_settings.headerHeight;
            var footer_height = $(".dev-page-footer").hasClass("dev-page-footer-collapsed") ? 0 : dev_layout_alpha_settings.footerHeight ;
            var new_height = window.innerHeight - footer_height - header_height;
            $(".dev-email-navigation, .dev-email-messages, .dev-email-message, .dev-email-compose").height(new_height);
        }else{
            $(".dev-email-navigation, .dev-email-messages, .dev-email-message, .dev-email-compose").removeAttr("style");
        }
    },
    init: function(){                
        var self = this;
        
        if(window.innerWidth > 992){
            self.setHeight();            
            $(".dev-email-messages, .dev-email-message, .dev-email-compose").mCustomScrollbar({axis:"y", autoHideScrollbar: true, scrollInertia: 200, advanced: {autoScrollOnFocus: false}});        
        }else{            
            $(".dev-email-messages, .dev-email-message, .dev-email-compose").mCustomScrollbar("disable",true);
        }
    },
    update: function(){        
        this.setHeight();        
        $(".dev-email-messages, .dev-email-message, .dev-email-compose").mCustomScrollbar("update");
    },
    stars: function(){
        $(".dev-email-messages .star .fa").on("click",function(){
            if($(this).hasClass("fa-star")){
                $(this).removeClass("fa-star").addClass("fa-star-o");
            }else{
                $(this).addClass("fa-star").removeClass("fa-star-o");
            }
        });
    },
    checkall: function(){
        $("#email_messages_checkall").change(function(){
            if($(this).is(":checked"))
                $(".dev-email-messages-list input:checkbox").prop("checked",true);
            else
                $(".dev-email-messages-list input:checkbox").prop("checked",false);
        });
    }
};

$(function(){        
    dev_email.init();
    dev_email.stars();
    dev_email.checkall();
    
    $(".dev-page-footer-collapse").click(function(){
        setTimeout(function(){
            dev_email.init();
        },200);        
    });
});

$(window).resize(function(){
    dev_email.update();
});