(function (a) {
    a.fn.extend({
        freshlineDemo_init: function (b) {
            var c = this;
            return this.each(function () {
                c.find("#demo-settings,#panel").hover(function () {
                    c.find("#panel").stop();
                    c.find("#panel").animate({
                        opacity: 1,
                        height: "200px",
                        "margin-top": "-160px"
                    }, {
                        duration: 400
                    })
                }, function () {
                    c.find("#panel").stop();
                    c.find("#panel").animate({
                        opacity: 0,
                        height: "0px",
                        "margin-top": "0px"
                    }, {
                        duration: 400
                    })
                });
                c.find("#bgselector li").each(function () {
                    a(this).click(function (b) {
                        c.find("#bgselector li").each(function () {
                            a(document).find("body").removeClass(a(this).attr("class"))
                        });
                        a(document).find("body").addClass(a(this).attr("class"))
                    })
                });
                c.find("#borderselector li").each(function () {
                    a(this).click(function (b) {
                        c.find("#borderselector li").each(function () {
                            a(document).find("#example").removeClass(a(this).attr("class"))
                        });
                        a(document).find("#example").css({
                            "background-color": a(this).css("background-color")
                        });
                        a(document).find("#example").addClass(a(this).attr("class"))
                    })
                });
                c.find("#rounded").click(function () {
                    a(document).find(".beforeafter_slider").css({
                        "-webkit-border-radius": "10px",
                        "-moz-border-radius": "10px",
                        "border-radius": " 10px"
                    });
                    a(document).find("#mask").css({
                        "-webkit-border-radius": "10px",
                        "-moz-border-radius": "10px",
                        "border-radius": " 10px"
                    });
                    a(this).css({
                        color: "#1f2120"
                    });
                    c.find("#square").css({
                        color: "#A6B8CC"
                    })
                });
                c.find("#square").click(function () {
                    a(document).find(".beforeafter_slider").css({
                        "-webkit-border-radius": "0px",
                        "-moz-border-radius": "0px",
                        "border-radius": " 0px"
                    });
                    a(document).find("#mask").css({
                        "-webkit-border-radius": "0px",
                        "-moz-border-radius": "0px",
                        "border-radius": " 0px"
                    });
                    a(this).css({
                        color: "#1f2120"
                    });
                    c.find("#rounded").css({
                        color: "#A6B8CC"
                    })
                });
                c.find("#photo").click(function () {
                    a(document).find(".beforeafter_slider").css({
                        "padding-top": "10px",
                        "padding-bottom": "70px"
                    });
                    a(this).css({
                        color: "#1f2120"
                    });
                    c.find("#normal").css({
                        color: "#A6B8CC"
                    })
                });
                c.find("#normal").click(function () {
                    a(document).find(".beforeafter_slider").css({
                        "padding-top": "10px",
                        "padding-bottom": "10px"
                    });
                    a(this).css({
                        color: "#1f2120"
                    });
                    c.find("#photo").css({
                        color: "#A6B8CC"
                    })
                });
                c.find("#shadow1").click(function () {
                    a(document).find(".beforeafter_slider").removeClass("shadow2");
                    a(document).find(".beforeafter_slider").removeClass("shadow3");
                    a(document).find(".beforeafter_slider").addClass("shadow1");
                    a(this).css({
                        color: "#1f2120"
                    });
                    c.find("#shadow2").css({
                        color: "#A6B8CC"
                    });
                    c.find("#shadow3").css({
                        color: "#A6B8CC"
                    })
                });
                c.find("#shadow2").click(function () {
                    a(document).find(".beforeafter_slider").removeClass("shadow1");
                    a(document).find(".beforeafter_slider").removeClass("shadow3");
                    a(document).find(".beforeafter_slider").addClass("shadow2");
                    a(this).css({
                        color: "#1f2120"
                    });
                    c.find("#shadow1").css({
                        color: "#A6B8CC"
                    });
                    c.find("#shadow3").css({
                        color: "#A6B8CC"
                    })
                });
                c.find("#shadow3").click(function () {
                    a(document).find(".beforeafter_slider").removeClass("shadow1");
                    a(document).find(".beforeafter_slider").removeClass("shadow2");
                    a(document).find(".beforeafter_slider").addClass("shadow3");
                    a(this).css({
                        color: "#1f2120"
                    });
                    c.find("#shadow1").css({
                        color: "#A6B8CC"
                    });
                    c.find("#shadow2").css({
                        color: "#A6B8CC"
                    })
                })
            })
        }
    })
})(jQuery)