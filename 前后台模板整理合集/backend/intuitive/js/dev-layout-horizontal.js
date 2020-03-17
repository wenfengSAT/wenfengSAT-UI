"use strict";

var dev_layout_alpha_settings = {
    unit: 5,
    headerHeight: $(".dev-page .dev-page-header").height(),
    footerHeight: 40,
    footerHeightCurrent: 0,
    containerPadding: 30,
    screenSmall: 992,
    navAnimateSpeed: 300,
    sbAnimateSpeed: 100,
    footerContainerDisable: 0,
    contentHeight: 0,
    rightbarChatTemplate: "<li class=\"sent\">{message} <span>{date}</span></li>",
    rightbarHeight: 0
};

var dev_layout_alpha_content = {
    init: function(settings){
    /* content height control */
        
        /* add state loaded to dev-page */
        $(".dev-page").addClass("dev-page-loaded");
        /* ./end */
        
        /* check avail of footer */
        if($(".dev-page .dev-page-footer").length === 0){
            $(".dev-page").addClass("dev-page-no-footer");
            
        }
        if($(".dev-page").hasClass("dev-page-no-footer"))
            dev_layout_alpha_settings.footerHeightCurrent = 0;            
        else
            dev_layout_alpha_settings.footerHeightCurrent = settings.footerHeight;
        /* ./end */
        
        /* remove height param from containers */
        $(".dev-page-container .dev-page-content, .dev-page-rightbar, .rightbar-chat, .rightbar-chat .rightbar-chat-frame-contacts, .rightbar-chat .rightbar-chat-frame-chat").css("height","");
        /* ./end */
        
        /* do not set height for containers in mobile mode */
        if(window.innerWidth < settings.screenSmall){           
            /* remove active class from navigation */            
            $(".dev-page-navigation li").removeClass("active");
            $(".dev-page-navigation ul").css("max-height","");
            /* ./end */                                    
            
            return false;
        }
        /* ./end */
        
        /* get height of other elements to get minus value */                
        var minus = settings.headerHeight + dev_layout_alpha_settings.footerHeightCurrent;
        /* ./end */

        /* get height of main container (sidebar and content) */
        var content_height = $(".dev-page-container .dev-page-content > .container").height() + settings.containerPadding;        

        var height = content_height;
            height = height + minus;
        /* ./end */

        /* compare it with window height and get new height value */
        var new_height  = window.innerHeight > height ? window.innerHeight - minus : height - minus - 30; // i dont know why i -30px... probably its padding... :(                
        /* ./end */

        /* set height for inner boxes */
        $(".dev-page-container .dev-page-content").height(new_height);
        /* ./end */

        
        return new_height;
        
    /* ./content height control */
    },
    rightbar: {
    /* collappse rightbar control */        
        init: function(settings){    
            
            var self = this;
            
        /* add event handler on .dev-page-rightbar-collapse */                        
            $(".dev-page-rightbar-toggle").on("click",function(){

                /* close other */        
                dev_layout_alpha_content.search_container.close();
                //dev_layout_alpha_content.footer_container.closeAll();
                /* ./end */
                
                self.calcHeight();
            
                $(".dev-page").toggleClass("dev-page-rightbar-open");
                
                return false;
            });
        /* ./end */            
        /* add close rightbar handler */
            $(".rightbar-close").on("click",function(){
                self.close();
            });
        /* ./end */        
        },
        calcHeight: function(){
            var rightbar_height = window.innerHeight;
            /* set height */
            $(".dev-page-rightbar, .rightbar-chat, .rightbar-chat .rightbar-chat-frame-contacts, .rightbar-chat .rightbar-chat-frame-chat").height(rightbar_height);
            /* ./end */
        },
        close: function(){
        /* close rightbar function */    
            $(".dev-page").removeClass("dev-page-rightbar-open");
        /* ./end */
        }                
    /* ./collappse rightbar control */        
    },
    footer: function(){
    /* footer collapse control */
        var self = this;

        /* fix footer control */
        $(".dev-page-footer-fix").on("click",function(){
            $(".dev-page-footer").toggleClass("dev-page-footer-fixed");
        });
        /* ./end */

        $(".dev-page-footer-collapse").on("click",function(){            
            /* close other elements */
            self.rightbar.close();
            /* ./end */
            
            /* remove class dev-page-footer-closed */
            $(".dev-page-footer").removeClass("dev-page-footer-closed");
            /* ./end */
            
            /* change collapse footer icon */
            var icon = $(this).find(".fa");
            
            if(icon.hasClass("fa-dot-circle-o")){
                icon.removeClass("fa-dot-circle-o").addClass("fa-circle-o");
            }else{
                icon.removeClass("fa-circle-o").addClass("fa-dot-circle-o");
            }
            /* ./end */
            
            /* close all opened container */
            self.footer_container.closeAll();
            /* ./end */            
                        
            if($(".dev-page-footer").hasClass("dev-page-footer-collapsed")){
                $(".dev-page-footer").removeClass("dev-page-footer-effect").removeClass("dev-page-footer-collapsed").addClass("dev-page-footer-effect");
                $(".dev-page").removeClass("dev-page-no-footer");                
            }else{
                $(".dev-page-footer").removeClass("dev-page-footer-effect").addClass("dev-page-footer-collapsed").addClass("dev-page-footer-effect");
                $(".dev-page").addClass("dev-page-no-footer");
            }            
            
            return false;
        });
    /* ./footer collapse control */
    },
    footer_buttons: function(settings) {
    /* footer buttons width control */
    
        /* check footer settings */        
        if($(".dev-page-footer").hasClass("dev-page-footer-closed")){
            $(".dev-page-footer-collapse").click();            
        }
        /* ./end */
    
        var buttonsWidth = $(".dev-page-footer-buttons li").length * (settings.footerHeight + settings.unit) + settings.unit;
        $(".dev-page-footer-buttons").css({width: buttonsWidth, "margin-left": -buttonsWidth/2}).addClass("dev-page-footer-buttons-effect");            
    /* ./footer buttons width control */
    },
    footer_container_open: function(){
    
        var self = this;
        
        /* add event listener to dev-page-footer-buttons */
        $(".dev-page-footer-container-open").on("click",function(){
            
            if(dev_layout_alpha_settings.footerContainerDisable) return false;
            
            if($(this).hasClass("active")){
                /* on twice click on button - close all */                
                self.footer_container.closeAll();
                /* ./end */
            }else{
                /* remove active buttons */
                $(".dev-page-footer-buttons a").removeClass("active");
                /* ./end */
                
                /* open contant by id */
                if(self.footer_container.open($(this).attr("href"))){
                    $(this).addClass("active");
                }
                /* ./end */
            }

            return false;
        });
        /* ./end */        
        
    },
    footer_container: {
    /* footer container controls */            
        init: function(){
        /* add close event listener on class .dev-layout-container-close */            
            var self = this;            
            $(".dev-page-footer-container-layer-button").on("click",function(){
                self.closeAll();
                return false;
            });            
        /* ./add close event listener on class .dev-layout-container-close */
        },
        open: function(contentID){
        /* open content in container by id */
            
            if(dev_layout_alpha_settings.footerContainerDisable) return false;
            
            /* close other */
            dev_layout_alpha_content.rightbar.close();
            /* ./close other */
            
            if($(contentID).length > 0){
               dev_layout_alpha_settings.footerContainerDisable = 1;
               
                $(".dev-page-footer-container .dev-page-footer-container-content").css("display","");
                $(".dev-page-footer-container").addClass("dev-page-footer-container-opened");
                
                dev_loaders_default.show($(".dev-page-footer-container"));
                                
                /* TEMP FOR DEMO */
                setTimeout(function(){                    
                    $(contentID).fadeIn("slow");                                        
                    dev_loaders_default.hide($(".dev-page-footer-container"));
                    dev_layout_alpha_settings.footerContainerDisable = 0;
                    
                    $(contentID).width(window.innerWidth);
                    $(contentID).mCustomScrollbar({axis:"x", autoHideScrollbar: true, scrollInertia: 200, advanced: {autoScrollOnFocus: false,autoExpandHorizontalScroll:true}});
                    
                },1000);                
                /* ./TEMP FOR DEMO */
                
                return true;
            }else
                return false;
            
        /* ./open content in container by id */    
        },
        closeAll: function(){
        /* close all contents */
            $(".dev-page-footer-buttons a").removeClass("active");
            $(".dev-page-footer-container .dev-page-footer-container-content").css("display","");
            $(".dev-page-footer-container").removeClass("dev-page-footer-container-opened");
            $(".dev-page-footer-container").each(function(){
                $(this).mCustomScrollbar('destroy');
            });
        /* ./close all contents */
        }            
    /* ./footer container controls */
    },
    search_container: {
        init: function(){
        
        var self = this;
        
        /* toggle search container */
            $(".dev-page-search-toggle").on("click",function(){      
                
                if($(".dev-page").hasClass("dev-page-search-active")){
                    self.close();
                }else{
                    self.open();
                }
                
                return false;
            });                        
        /* ./end toggle search container */
        },
        open: function(){
        /* close other elements */
            $(".dev-page").removeClass("dev-page-rightbar-open");
        /* ./end */
            
        /* temp search results */
        $.get( "assets/search_result.html", function(data) {
            $(".dev-search .dev-search-results").html(data);
        });
        /* ./temp search results */
            
        /* open search container */
            $(".dev-page").addClass("dev-page-search-active");
            $(".dev-search .dev-search-field input").focus().val($(".dev-search .dev-search-field input").val());
        /* ./open search container */
        },
        close: function(){
        /* close search container */
            $(".dev-page").removeClass("dev-page-search-active");
        /* ./close search container */
        }
    },
    rightbar_chat: {        
        init: function(settings){
            var self = this;

            /* temp, using to show chat after click on contacts item */
            $(".rightbar-chat .contacts a").on("click",function(){
                self.open();
                return false;
            });
            /* ./end */        
            
            /* add close chat event listener */
            $(".rightbar-chat-close").on("click",function(){
                self.close();
                return false;
            });
            /* ./end */
            
            /* init chat */
            self.messages.init(settings);
            /* ./end */            
        },
        open: function(){
        /* open chat window */
            $(".rightbar-chat").addClass("rightbar-chat-opened");
        /* ./open chat window */    
        /* set focus to message field */
            setTimeout(function(){
                /* set height */
                $(".rightbar-chat .chat-wrapper").height($(".rightbar-chat-frame-chat").height() - 245);
                /* ./end */
                
                //$("#rightbar_chat_form").find("input[name=message]").focus();
            },200);            
        /* ./end */
        },        
        close: function(){
        /* close chat window */
            $(".rightbar-chat").removeClass("rightbar-chat-opened");
        /* ./close chat window */
        },
        messages: {
            init: function(settings){                
                var self = this;                
                
                /* add submit form listener */
                $("#rightbar_chat_form").on("submit",function(){                    
                    var message = $(this).find("input[name=message]");                    
                    
                    if(message.val().length > 0)
                        self.post(settings,message.val());
                    
                    /* clear field */
                    message.val("");
                    
                    return false;
                });
                /* ./end */
            },
            post: function(settings,message){       
                /* build message using template from settings */                
                var date = "1 min ago"; /* temp */
                
                var message = settings.rightbarChatTemplate.replace("{message}", message);
                    message = message.replace("{date}", date);
                /* ./end */
                
                /* append message to chat */
                $("#rightbar_chat").append(message);
                /* ./end */
            }
        }
    }
};

$(function(){
//$(document).ready(function(){
    
    setTimeout(function(){
        dev_layout_alpha_settings.contentHeight = dev_layout_alpha_content.init(dev_layout_alpha_settings);
    },500);   
    
    dev_layout_alpha_content.rightbar.init(dev_layout_alpha_settings);
    
    dev_layout_alpha_content.footer();
    dev_layout_alpha_content.footer_buttons(dev_layout_alpha_settings);
    dev_layout_alpha_content.footer_container_open();
    dev_layout_alpha_content.footer_container.init();
    dev_layout_alpha_content.search_container.init();
    dev_layout_alpha_content.rightbar_chat.init(dev_layout_alpha_settings);
    
    
    $(".dev-page-rightbar").on("click",function(e){
        e.stopPropagation();
    });
        
    $("body").on("click",function(){
        if(!Modernizr.touch){
            dev_layout_alpha_content.rightbar.close();
        }
    });
    
});

$(window).resize(function(e){
    
    if(Modernizr.touch) {
        e.preventDefault();
        
        /* recalculate righbar height */
        dev_layout_alpha_content.rightbar.calcHeight();
        /* ./end */        
    }else{ 
        /* close rightbar on window resize */
        dev_layout_alpha_content.rightbar.close();
        /* ./end */

        /* close rightbar chat on window resize */
        dev_layout_alpha_content.rightbar_chat.close();
        /* ./end */                
        
        setTimeout(function(){
            dev_layout_alpha_settings.contentHeight = dev_layout_alpha_content.init(dev_layout_alpha_settings);
        },100);    
    }
    
    /* close all footer containers */
    dev_layout_alpha_content.footer_container.closeAll();
    /* ./close all footer containers */
});