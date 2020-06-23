var UISliders = function () {
	"use strict";
    //function to initiate jQRangeSlider
    var runRangeSliders = function () {
        //jQRangeSlider is highly dependant on CSS. Be sure to include one of the provided stylesheets.
        $("#slider_example_1").rangeSlider();
        $("#slider_example_2").editRangeSlider();
        $("#slider_example_3").dateRangeSlider({
            bounds: {
                min: new Date(2013, 0, 1),
                max: new Date(2014, 11, 31)
            },
            defaultValues: {
                min: new Date(2013, 2, 1),
                max: new Date(2014, 2, 31)
            }
        });
        $("#slider_example_4").rangeSlider({
            valueLabels: "change",
            delayOut: 1000
        });
        $("#slider_example_5").rangeSlider({
            valueLabels: "change",
            durationIn: 1000,
            durationOut: 1000
        });
        $("#slider_example_6").rangeSlider({
            enabled: false
        });
        $("#slider_example_7").rangeSlider({
            range: {
                min: 10,
                max: 40
            }
        });
        $("#slider_example_8").rangeSlider({
            step: 10
        });
    };
    //function to initiate Boostrap Sliders
     var runBsSliders = function () {
     	$('.slider input').slider();
     };
    //function to initiate jQuery Knob
    var runKnob = function () {
        $(".knob").knob({
            draw: function () {
                // "tron" case
                if (this.$.data('skin') == 'tron') {
                    var a = this.angle(this.cv) // Angle
                        ,
                        sa = this.startAngle // Previous start angle
                        ,
                        sat = this.startAngle // Start angle
                        ,
                        ea // Previous end angle
                        , eat = sat + a // End angle
                        ,
                        r = true;
                    this.g.lineWidth = this.lineWidth;
                    this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
                    if (this.o.displayPrevious) {
                        ea = this.startAngle + this.angle(this.value);
                        this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                        this.g.beginPath();
                        this.g.strokeStyle = this.previousColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
        // Example of infinite knob, iPod click wheel
        var v, up = 0,
            down = 0,
            i = 0,
            $idir = $("div.idir"),
            $ival = $("div.ival"),
            incr = function () {
                i++;
                $idir.show().html("+").fadeOut();
                $ival.html(i);
            }, decr = function () {
                i--;
                $idir.show().html("-").fadeOut();
                $ival.html(i);
            };
        $("input.infinite").knob({
            min: 0,
            max: 20,
            stopper: false,
            change: function () {
                if (v > this.cv) {
                    if (up) {
                        decr();
                        up = 0;
                    } else {
                        up = 1;
                        down = 0;
                    }
                } else {
                    if (v < this.cv) {
                        if (down) {
                            incr();
                            down = 0;
                        } else {
                            down = 1;
                            up = 0;
                        }
                    }
                }
                v = this.cv;
            }
        });
    };
    return {
        init: function () {
            runRangeSliders();
            runBsSliders();
            runKnob();
        }
    };
}();