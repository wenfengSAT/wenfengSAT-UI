"use strict";
    
    var timeout = {
        settings: {time: 5000},
        session: false,
        init: function(){
            var self = this;
            
            document.onmousemove = function(){
                clearTimeout(self.session);
                self.session = setTimeout(function(){
                    document.location.href = "pages-lock-screen.html";
                }, self.settings.time);
            }
        }
    };
    
$(function(){
    timeout.init();
});      