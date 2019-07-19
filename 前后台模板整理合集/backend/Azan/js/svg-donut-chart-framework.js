/***********************************************************
 * Create framework
 ***********************************************************/
(function ($, doc, win, Snap) {
    "use strict";

    function Donut(el, opts) {
        this.$el = $(el);
        this.opts = opts;
        this.snap = Snap(el);

        this.startShowAnimation = Donut.prototype.startShowAnimation;
  
        this.init();
    }

    /***********************************************************
     * Init donut
     ***********************************************************/
    Donut.prototype.init = function () {
        this.drawLegend();
        this.drawBaseCircle();
    };

    /***********************************************************
     * Draw base circle
     ***********************************************************/
    Donut.prototype.drawBaseCircle = function () {
        var s = this.snap,
            o = this.opts;

        // create diagonal pattern
        var pattern = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
            fill: "none",
            stroke: "none",
            strokeWidth: 0
        });

        // create masking circle
        var mask = s.circle(o.center.y, o.center.y, o.radius).attr({
            fill: pattern
        });

        // create circle
        Donut.prototype.circle = s.circle(o.center.y, o.center.y, o.radius).attr({
            fill: "r(0.5, 0.5, 0.5)#FFC575-#fff",
            mask: mask,
            stroke: '#D9D9D9',
            strokeWidth: 0,
            opacity: 0
        });

        // create border circle
        s.circle(o.center.y, o.center.y, o.radius).attr({
            stroke: '#D9D9D9',
            fill: 'none',
            strokeWidth: 0
        });
    };

    /***********************************************************
     * Draw legend
     ***********************************************************/
    Donut.prototype.drawLegend = function () {
        var s = this.snap,
            o = this.opts,
            data = o.data;

        var x = o.center.x + o.radius + 50,
            step = 30,
            radius = 6,
            y = o.center.y - (data.length / 2 * step) + radius / 2 + (step - radius) / 2;

        for (var i = 0; i < data.length; i++) {
            var d = data[i];

            d.legend = {
                baseCircle: s.circle(x, y, radius),
                baseCircleRadius: radius,
                text: s.text(x + step, y + radius / 2, d.label),
                center: {
                    x: x,
                    y: y,
                }
            }

            d.legend.baseCircle.attr({
                stroke: '0',
                fill: 'none',
                strokeWidth: 0,
              color:''
            });

            y += step;
        }
    };

    /***********************************************************
     * Build an arc svg path
     ***********************************************************/
    Donut.prototype.buildArcPath = function (center, radius, degreesStart, degreesEnd) {
        var start = this.translatedPoint(center, radius, degreesStart),
            end = this.translatedPoint(center, radius, degreesEnd),
            largeArc = (degreesEnd - degreesStart) > 180 ? 1 : 0;

        return "M" + start.x + "," + start.y + " A" + radius + "," + radius + " 0 " + largeArc + ",1 " + end.x + "," + end.y;
    };
      
    /***********************************************************
     * Animate an arc throw his degrees 
     ***********************************************************/
    Donut.prototype.animateArcByDegrees = function (arc, duration, callback) {
        var s = this.snap,
            t = this;

        Snap.animate(arc.degreesStart, arc.degreesEnd,
            function (degrees) {
                if (arc.draw) {
                    arc.draw.remove();
                }

                arc.path = t.buildArcPath(arc.center, arc.radius, arc.degreesStart, degrees);
                arc.draw = s.path(arc.path);

                arc.draw.attr({
                    stroke: arc.color,
                    fill: 'none',
                    strokeWidth: arc.strokeWidth,
                    cursor: 'pointer'
                });
            },
            duration,
            mina.linear,
            function () {
                if (callback) {
                    callback();
                }
            });
    };

    /***********************************************************
     * Animate an arc throw his stroke width 
     ***********************************************************/
    Donut.prototype.animateArcByStroke = function (arc, strokeWidthStart, strokeWidthEnd, duration, callback) {
        var s = this.snap,
            t = this;

        Snap.animate(strokeWidthStart, strokeWidthEnd,
            function (strokeWidth) {
                if (arc.draw) {
                    arc.draw.remove();
                }

                var radius = arc.radius + (strokeWidth - arc.strokeWidth) / 6;
                arc.path = t.buildArcPath(arc.center, radius, arc.degreesStart, arc.degreesEnd);
                arc.draw = s.path(arc.path);

                arc.draw.attr({
                    stroke: arc.color,
                    fill: 'none',
                    strokeWidth: strokeWidth,
                    cursor: 'pointer'
                });
            },
            duration,
            mina.bounce,
            function () {
                if (callback) {
                    callback();
                }
            });
    };

    /***********************************************************
     * Create the legend circle
     ***********************************************************/
    Donut.prototype.createLegendCircle = function (c) {
        c.draw = this.snap.circle(c.x, c.y, c.radius);
        c.draw.attr({
          fill: c.color
        });
    };

    /***********************************************************
     * Start show animation of legend circle
     ***********************************************************/
    Donut.prototype.animateShowLegendCircle = function (c, duration) {
        c.draw.transform('s0,'+c.x+','+c.y)
        c.draw.animate({ transform: 's1,'+c.x+','+c.y }, duration, mina.bounce);
    };

    /***********************************************************
     * Start show animation of donut and legend for one data entry
     ***********************************************************/
    Donut.prototype.startShowAnimationOneEntry = function (d, percentStart, percentEnd, center, radius, callback) {
        d.arc = {
          percentStart : percentStart,
          percentEnd : percentEnd,
          degreesStart : parseFloat(percentStart) / 100 * 360,
          degreesEnd : parseFloat(percentEnd) / 100 * 360,
          color : d.color,
          strokeWidth : 40,
          center: center, 
          radius: radius,
        }
      
        this.animateArcByDegrees(d.arc, 900, callback);
      
        d.legend.circle = {
          color : d.color,
          x : d.legend.center.x,
          y : d.legend.center.y,
          radius: d.legend.baseCircleRadius + 2
        }
        
        this.createLegendCircle(d.legend.circle);
        this.animateShowLegendCircle(d.legend.circle, 400);
    };

    /***********************************************************
     * Translate a point by some degrees via a center and a radius
     ***********************************************************/
    Donut.prototype.translatedPoint = function (center, radius, degrees) {
        var radians = Math.PI * (degrees - 270) / 180;
        return {
            x: center.x + radius * Math.cos(radians),
            y: center.y + radius * Math.sin(radians),
        }
    };

    /***********************************************************
     * Highlight entry element legend circle and arc
     ***********************************************************/
    Donut.prototype.hightlightElement = function (d) {
        var s = this.snap,
            o = this.opts,
            data = o.data;
      
        if(this.previousHighlightElement == d){
          return;
        }
      
        if(this.previousHighlightElement){
          this.normalElement(this.previousHighlightElement);
        }
        this.previousHighlightElement = d;
      
        var c = d.legend.circle;
        c.draw.animate({ transform: 's1.3,'+c.x+','+c.y }, 200, mina.bounce);
      
        this.animateArcByStroke(d.arc, d.arc.strokeWidth, d.arc.strokeWidth + 20, 500);
    };

    /***********************************************************
     * Normal entry element legend circle and arc
     ***********************************************************/
    Donut.prototype.normalElement = function (d) {
        var s = this.snap,
            o = this.opts,
            t = this,
            data = o.data;
      
        var c = d.legend.circle;
        c.draw.animate({ transform: 's1,'+c.x+','+c.y }, 500, mina.bounce);
      
        this.animateArcByStroke(d.arc, d.arc.strokeWidth + 6, d.arc.strokeWidth, 500, function(){
          d.arc.draw.mouseover(function () {
            t.hightlightElement(d);
          });
          d.arc.draw.click(function () {
            t.hightlightElement(d);
          });
        });
    };

    /***********************************************************
     * Init animation interaction
     ***********************************************************/
    Donut.prototype.initInteraction = function (d, step) {
        var s = this.snap,
            t = this,
            l = d.legend,
            a = d.arc;
          
        l.button = s.rect(l.center.x - 2 * l.baseCircleRadius, l.center.y - step / 2, 200, step);

        l.button.attr({
          opacity: 0,
          cursor: 'pointer',
          color:'red'
        });

        l.button.mouseover(function () {
          t.hightlightElement(d);
          
          
        });
        l.button.click(function () {
          t.hightlightElement(d);
          
        });
      
        a.draw.mouseover(function () {
          t.hightlightElement(d);
            
          
        });
        a.draw.click(function () {
          t.hightlightElement(d);
        });
    };

    /***********************************************************
     * Init animation interactions after showing animation
     ***********************************************************/
    Donut.prototype.initInteractions = function () {
        var s = this.snap,
            o = this.opts,
            t = this,
            data = o.data;
      
        for (var i = 0; i < data.length; i++) {
            this.initInteraction(data[i], 30);
        }
    };

    /***********************************************************
     * Start show animation of donut and legend for all data entry
     ***********************************************************/
    Donut.prototype.startShowAnimation = function (index, totalPct, callback) {
        if(index && !totalPct){
          callback = index;
          index = totalPct;
        }
      
        var s = this.snap,
            o = this.opts,
            t = this,
            data = o.data;
      
        var i = 0,
            total = 0;
      
        if(index){
          i = index;
          total = totalPct;
        }else{
          for(var j = 0 ; j < data.length ; j++){
            var d = data[j];
            if(d.arc && d.arc.draw){
              d.arc.draw.remove();
            }
            if(d.legend && d.legend.circle && d.legend.circle.draw){
              d.legend.circle.draw.remove();
            }
          }
          
          Snap.animate(0, 0.5, function (value) {
              Donut.prototype.circle.attr({
                opacity: value
              });
          }, 800);
        }
      
        if(data.length > i){
          var d = data[i];
          this.startShowAnimationOneEntry(d, total, total + d.value, o.center, o.radius, function(){
            t.startShowAnimation(i+1, total + d.value, callback);
          });
        }else{
          this.initInteractions();
          if(callback){
            callback();
          }
        }
    };

    /***********************************************************
     * Requesting framework
     ***********************************************************/
    $.fn.donut = function (opts) {
        var donuts = [];
      
        this.each(function () {
            donuts.push(new Donut(this, opts));
        });
      
        if(donuts.length == 1){
          return donuts[0];
        }
      
        return donuts;
    };
})(jQuery, document, window, Snap);

/***********************************************************
 * Start framework
 ***********************************************************/
var donutSize = 230;
var donut = $('#svg').donut({
    donutSize: donutSize,
    center: {
        x: donutSize / 2,
        y: donutSize / 2
    },
    radius: donutSize * 0.3 / 1,
    data: programmingSkills
});

donut.startShowAnimation(function(){
  $('button').attr('disabled', false);
});