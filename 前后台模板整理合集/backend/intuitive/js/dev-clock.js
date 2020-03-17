"use strict";
            
    var clock = {
        vars: {hour_hand: false,minute_hand: false,second_hand: false},
        draw_clock: function(){
            
            var canvas = Raphael("dev-clock",200, 200);
            var clock = canvas.circle(100,100,95);
            clock.attr({"fill":"rgba(255,255,255,0.1)","stroke":"rgba(255,255,255,0)","stroke-width":"2"})  
            
            var hour_sign;            
            
            for(var i=0;i<12;i++){
                var start_x = 100+Math.round(80*Math.cos(30*i*Math.PI/180));
                var start_y = 100+Math.round(80*Math.sin(30*i*Math.PI/180));
                var end_x = 100+Math.round(90*Math.cos(30*i*Math.PI/180));
                var end_y = 100+Math.round(90*Math.sin(30*i*Math.PI/180));	
                hour_sign = canvas.path("M"+start_x+" "+start_y+"L"+end_x+" "+end_y);
                hour_sign.attr({"stroke":"rgba(255,255,255,0.3)"});
            }                
            
            this.vars.hour_hand = canvas.path("M100 100L100 50");
            this.vars.hour_hand.attr({stroke: "rgba(255,255,255,0.4)", "stroke-width": 6});
            
            this.vars.minute_hand = canvas.path("M100 100L100 40");
            this.vars.minute_hand.attr({stroke: "rgba(255,255,255,0.4)", "stroke-width": 4});
            
            this.vars.second_hand = canvas.path("M100 110L100 25");
            this.vars.second_hand.attr({stroke: "rgba(255,255,255,0.8)", "stroke-width": 2}); 
            
            var pin = canvas.circle(100, 100, 5);
            pin.attr({"fill": "rgba(255,255,255,1)",stroke: "rgba(255,255,255,1)"});
            
            var self = this;
            
            setInterval(function(){
                self.update_clock();
            },1000);            
        },
        update_clock: function(){            
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            
            this.vars.hour_hand.transform("r" + (30*hours+(minutes/2.5)) + ", 100, 100");
            this.vars.minute_hand.transform("r" + 6*minutes + ", 100, 100");
            this.vars.second_hand.transform("r" + 6*seconds + ", 100, 100");          
        }        
    };

    var screen_lock = {
        init: function(){
            $(".lock-button .btn").on("click",function(){                
                $(".dev-page-lock-screen-box").addClass("dev-page-lock-screen-animate");                
                return false;
            });
        },
        date: function(){
            
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

            var now     = new Date();
            var day     = days[now.getDay()];
            var date    = now.getDate();
            var month   = months[now.getMonth()];
            var year    = now.getFullYear();

            $(".date").html(day+", "+month+" "+date+", "+year);
        }
    }

$(function(){
    clock.draw_clock();
    screen_lock.init();
    screen_lock.date();
});      