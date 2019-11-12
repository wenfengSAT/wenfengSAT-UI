(function (a, b) {
    function o(c, d) {
        var e = 0;
        c.find("div").each(function (b) {
            var d = a(this);
            if (d.hasClass("before")) d.appendTo(c.find("#before").parent());
            if (d.hasClass("after")) d.appendTo(c.find("#after").parent())
        });
        c.find("div").each(function (f) {
            c.onselectstart = function () {
                return false
            };
            var g = a(this);
            if (g.attr("id") != "ext_ext_before") g.stop(true, true);
            if (g.data("_top") == b) g.data("_top", g.position().top);
            if (g.data("_left") == b) g.data("_left", g.position().left);
            if (g.data("_op") == b) g.data("_op", g.css("opacity"));
            if (!(a.browser.msie && a.browser.version >= 7 && a.browser.version < 9)) {
                if (g.hasClass("slideup")) {
                    g.animate({
                        top: g.data("_top") + 20 + "px"
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        top: g.data("_top") - 20 + "px"
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("slideright")) {
                    g.animate({
                        left: g.data("_left") - 20 + "px"
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        left: g.data("_left") + 20 + "px"
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("slidedown")) {
                    g.animate({
                        top: g.data("_top") - 20 + "px"
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        top: g.data("_top") + 20 + "px"
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("slideleft")) {
                    g.animate({
                        left: g.data("_left") + 20 + "px"
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        left: g.data("_left") - 20 + "px"
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("fadeup")) {
                    g.animate({
                        top: g.data("_top") + 20 + "px",
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        top: g.data("_top") - 20 + "px",
                        opacity: g.data("_op")
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("faderight")) {
                    g.animate({
                        left: g.data("_left") - 20 + "px",
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        left: g.data("_left") + 20 + "px",
                        opacity: g.data("_op")
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("fadedown")) {
                    g.animate({
                        top: g.data("_top") - 20 + "px",
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        top: g.data("_top") + 20 + "px",
                        opacity: g.data("_op")
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("fadeleft")) {
                    g.animate({
                        left: g.data("_left") + 20 + "px",
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        left: g.data("_left") - 20 + "px",
                        opacity: g.data("_op")
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
                if (g.hasClass("fade")) {
                    g.animate({
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false
                    }).delay(d + (e + 1) * 200).animate({
                        opacity: g.data("_op")
                    }, {
                        duration: 300,
                        queue: true
                    });
                    e++
                }
            }
        })
    }

    function n(b) {
        if (a.browser.msie && a.browser.version >= 7 && a.browser.version < 9) jQuery(b).animaDrag({
            dragit: b.find("#drag"),
            speed: 0,
            interval: 0,
            easing: null,
            direction: "vertical",
            boundary: b.find("#mask"),
            boundary_offset: 30,
            grip: null,
            overlay: false,
            afterDiv: b.data("currentSlide")
        });
        else jQuery(b.find("#drag")).animaDrag({
            dragit: b.find("#drag"),
            speed: 0,
            interval: 0,
            easing: null,
            direction: "vertical",
            boundary: b.find("#mask"),
            boundary_offset: 30,
            grip: null,
            overlay: false,
            afterDiv: b.data("currentSlide")
        })
    }

    function m(b, c) {
        var d = b.data("dragH");
        d = b.find("#drag").height() / 2;
        b.each(function () {
            $this = a(this);
            h($this, c)
        });
        b.find("li").each(function (b) {
            $this = a(this);
            i($this, b, c)
        });
        b.css({
            opacity: "0.0",
            display: "block"
        });
        b.animate({
            opacity: "1.0"
        }, 1500);
        var e = b.data("currentSlide").find("#after").parent().parent();
        var f = e.find("#after").parent();
        var g = f.find("#after");
        var j = b.data("currentSlide").find("#before").parent().parent();
        var k = j.find("#before").parent();
        var l = k.find("#before");
        if (c.start_from == "right") {
            j.css({
                width: c.width,
                overflow: "hidden"
            });
            if (c.ie) {} else {
                j.animate({
                    width: c.width + "px"
                }, 0).delay(500)
            }
            b.find("#drag").animate({
                left: c.width + "px"
            }, 0).delay(500);
            b.find("#divider").animate({
                left: c.width + "px"
            }, 0).delay(500)
        }
        if (c.start_from == "left") {
            j.css({
                width: "0px",
                overflow: "hidden"
            });
            if (c.ie) {} else {
                j.animate({
                    width: "0px",
                    overflow: "hidden"
                }, 0).delay(500)
            }
            b.find("#drag").animate({
                left: "0px"
            }, 0).delay(500);
            b.find("#divider").animate({
                left: "0px"
            }, 0).delay(500)
        }
        j.animate({
            width: c.start_pos + "px"
        }, 800);
        b.find("#drag").animate({
            opacity: .3,
            left: c.start_pos - 20 + "px"
        }, {
            duration: 800,
            complete: function () {
                var e = a(this);
                if (c.follow) {
                    var f = function (c) {
                        var e = a(this);
                        e.find("#drag").css({
                            opacity: "1.0"
                        });
                        e.find("#drag").css({
                            top: c.pageY - e.offset().top - d - b.data().off + "px"
                        })
                    };
                    b.bind("mousemove", f)
                }
            }
        });
        b.find("#divider").animate({
            opacity: .3,
            left: c.start_pos + "px"
        }, 800);
        n(b, b.data("currentSlide"));
        b.find("#toolbox").animate({
            opacity: "1.0"
        }, 1e3);
        b.find("ul li").animate({
            opacity: "1.0"
        }, 300);
        b.find("#mainloader").animate({
            opacity: "0.4"
        }, {
            duration: 500,
            complete: function () {
                b.find("#mainloader").remove()
            }
        });
        o(b.data("currentSlide"), 500);
        b.hover(function () {
            a(this).addClass("onitemhovered")
        }, function () {
            a(this).removeClass("onitemhovered")
        });
        if (c.timer > 0) {
            c.countdown = 0;
            setInterval(function () {
                if (!b.hasClass("onitemhovered")) c.countdown = c.countdown + 1;
                if (c.countdown >= c.timer / 100) {
                    c.countdown = 0;
                    b.find("#previous").click()
                }
                var a = 100 - Math.round(100 / c.timer * c.countdown * 100);
                b.find(".thumbison .timer").css({
                    backgroundPosition: "0px " + a * 10 + "px"
                })
            }, 100)
        }
    }

    function l(b, c) {
        var d = a('<div id="toolbox" style="opacity:0"></div>');
        b.append(d);
        d.css({
            "z-index": "405"
        });
        var e = a("<div id='previous'></div>");
        var f = a("<div id='next'></div>");
        var h = function (b) {
            b.hover(function () {
                var b = a(this);
                if (b.attr("id") == "previous") b.css({
                    "background-position": "bottom right"
                });
                else b.css({
                    "background-position": "bottom left"
                })
            }, function () {
                $this = a(this);
                if ($this.attr("id") == "previous") $this.css({
                    "background-position": "top right"
                });
                else $this.css({
                    "background-position": "top left"
                })
            })
        };
        var i = function (d) {
            d.click(function () {
                var d = a(this);
                var e = b.data("currentSlide").index();
                if (d.attr("id") == "previous") e++;
                else e--;
                if (e == b.data("currentSlide").parent().find("li").size()) e = 0;
                if (e == -1) e = b.data("currentSlide").parent().find("li").size() - 1;
                var f = b.find("li").each(function (f) {
                    d = a(this);
                    if (f == e) {
                        g(b.data("currentSlide"), d, b, c)
                    }
                })
            })
        };
        h(e);
        i(e);
        h(f);
        i(f);
        d.append(e);
        d.append(f);
        var j = a("<div id='mini_divider'></div>");
        d.append(j);
        b.find("li").each(function (e) {
            var f = a(this);
            var h = f.parent().find("li").size() - 1;
            var i = a("<div id='" + (h - e) + "' class='mini_thumbnail_buttons'><div class='timer'></div></div>");
            d.append(i);
            if (b.data("currentSlide").index() == h - e) {
                i.data("on", true);
                i.css({
                    "background-position": "bottom right"
                })
            }
            i.hover(function () {
                var d = a(this);
                d.css({
                    "background-position": "top right"
                });
                if (d.data().on == true) d.css({
                    "background-position": "bottom right"
                });
                d.parent().append('<div id="image_thumbnail" style="opacity:0.0;left:' + d.position().left + "px;top:" + (d.position().top + 10) + 'px"></div>');
                var e = d.parent().find("#image_thumbnail");
                var f = a(this).attr("id");
                var g = "";
                var h = "";
                b.find("li").each(function () {
                    var b = a(this);
                    if (a(this).index() == f) {
                        g = b.find("#before").attr("src");
                        h = b.find("#after").attr("src")
                    }
                });
                var i = e.width() - 6;
                var j = e.height() - 6;
                var k = b.find("#divider").position().left / c.width * i;
                e.append('<div><div><img style="position:absolute;top:3px;left:3px;width:' + i + "px;height:" + j + 'px" src="' + h + '"></div></div>');
                e.append('<div style="position:absolute;overflow:hidden;width:' + k + "px;height:" + e.height() + 'px"><div><img style="position:absolute;top:3px;left:3px;width:' + i + "px;height:" + j + 'px" src="' + g + '"></div></div>');
                e.append('<div id="loader" style="loader"></div>');
                e.append('<div id="image_thumbnail_arrow" style="position:absolute;left:' + (e.width() / 2 - 4) + "px;top:" + (e.height() - 1) + 'px"></div>');
                e.animate({
                    opacity: 1,
                    top: +1
                }, 200)
            }, function () {
                var b = a(this);
                b.css({
                    "background-position": "top left"
                });
                if (b.data().on == true) b.css({
                    "background-position": "bottom left"
                });
                b.parent().find("#image_thumbnail").remove()
            });
            i.click(function () {
                var d = a(this);
                if (d.data().on != true) {
                    var e = a(this).attr("id");
                    var f = b.find("li").each(function (d) {
                        var f = a(this);
                        if (d == e) {
                            g(b.data("currentSlide"), f, b, c)
                        }
                    })
                }
            })
        });
        b.find(".timer:last").parent().addClass("thumbison")
    }

    function k(b, c) {
        var d = b.data().dragH;
        b.each(function () {
            $this = a(this);
            h($this, c)
        });
        b.find("li").each(function (b) {
            $this = a(this);
            i($this, b, c)
        });
        b.css({
            opacity: "0.0",
            display: "block"
        });
        b.animate({
            opacity: "1.0"
        }, 1500);
        l(b, c, b.data("currentSlide"))
    }

    function j(a, b) {
        a.find("ul").wrap("<div id='mask'></div>");
        a.find("#mask").css({
            overflow: "hidden",
            width: b.width + "px",
            height: b.height + "px",
            position: "absolute"
        })
    }

    function i(b, c, d) {
        a(b).css({
            width: d.width + "px",
            height: d.height + "px",
            "z-index": "200",
            position: "relative",
            overflow: "hidden",
            left: 0,
            top: 0
        });
        if (!(a.browser.msie && a.browser.version >= 7 && a.browser.version < 9)) {
            if (c > 0) a(b).css({
                opacity: 0
            })
        }
    }

    function h(a, b) {
        a.css({
            width: b.width + "px",
            height: b.height + "px",
            position: "relative"
        })
    }

    function g(b, c, d, e) {
        e.countdown = 0;
        var f = true;
        d.find("li").each(function () {
            $this = a(this);
            if ($this.index() != b.index() && $this.index() != c.index())
                if (!(a.browser.msie && a.browser.version >= 7 && a.browser.version < 9)) {
                    $this.css({
                        opacity: 0
                    })
                } else {
                    $this.css({
                        "z-index": "50"
                    })
                }
            else $this.css({
                "z-index": "100"
            })
        });
        if (b.index() > c.index()) f = false;
        if (b.index() == 0 && c.index() != 1) f = false;
        if (b.index() == b.parent().find("li").size() - 1 && c.index() == 0) f = true;
        if (f) {
            b.animate({
                left: 0 - e.width
            }, {
                duration: 500,
                queue: false
            });
            c.css({
                opacity: "1.0",
                position: "absolute",
                top: "0px",
                left: e.width,
                width: e.width,
                height: e.height
            })
        } else {
            b.animate({
                left: e.width
            }, {
                duration: 500,
                queue: false
            });
            c.css({
                opacity: "1.0",
                position: "absolute",
                top: "0px",
                left: 0 - e.width,
                width: e.width,
                height: e.height
            })
        }
        b.parent().parent().parent().find(".mini_thumbnail_buttons").each(function (b) {
            var d = a(this);
            d.css({
                "background-position": "top left"
            });
            d.data("on", false);
            d.removeClass("thumbison");
            d.find(".timer").css({
                backgroundPosition: "0px 0px"
            });
            if (b == c.parent().find("li").size() - c.index() - 1) {
                d.data("on", true);
                d.css({
                    "background-position": "bottom right"
                });
                d.addClass("thumbison")
            }
        });
        var g = c.find("#before").parent().parent();
        g.css({
            width: d.find("#divider").position().left + "px",
            overflow: "hidden"
        });
        c.animate({
            left: "0px",
            top: "0px",
            opacity: "1.0"
        }, {
            duration: 500,
            queue: false
        });
        d.data("currentSlide", c);
        o(c, 500)
    }

    function f(b) {
        b.find("li >img").each(function () {
            var b = a(this);
            b.attr({
                id: "before"
            });
            if (b.attr("alt").length != 0 && b.attr("alt") != null) {
                b.parent().append("<img id='after' src='" + b.attr("alt") + "'>")
            } else {
                b.parent().append("<img id='before' src='" + b.attr("src") + "'>")
            }
            b.parent().find("#before, #after").wrapAll("<div id='ba_images'></div>");
            b.parent().find("#after").wrap("<div id='ext_ext_after'><div id='ext_after'></div></div>");
            b.parent().find("#before").wrap("<div id='ext_ext_before'><div id='ext_before' class='set_imd'></div></div>");
            var c = b.parent().parent().parent().find("#after").parent().parent();
            var d = c.find("#after").parent();
            var e = d.find("#after");
            var f = b.parent().parent().parent().find("#before").parent().parent();
            var g = f.find("#before").parent();
            var h = g.find("#before");
            c.css({
                position: "absolute",
                "z-index": "0",
                top: "0px"
            });
            f.css({
                position: "absolute",
                "z-index": "1",
                top: "0px",
                left: "0px"
            });
            c.parent().css({
                "z-index": 1
            });
            c.onselectstart = function () {
                return false
            };
            f.onselectstart = function () {
                return false
            };
            var i = a("<div id='loader' class='loader'></div>");
            a(c).parent().parent().append(i);
            d.find("img").load(function () {
                b.parent().parent().parent().parent().find("#loader").each(function () {
                    var b = a(this);
                    b.remove()
                })
            })
        })
    }

    function e(b) {
        var c = a("<div id='divider'></div>");
        b.find("#mask").append(c);
        var d = a("<div id='drag'></div>");
        b.find("#mask").append(d);
        d.hover(function () {
            var b = a(this);
            b.css({
                "background-position": "left bottom"
            })
        }, function () {
            var b = a(this);
            b.css({
                "background-position": "left top"
            })
        });
        b.onselectstart = function () {
            return false
        };
        b.hover(function () {
            var b = a(this);
            if (!(a.browser.msie && a.browser.version >= 7 && a.browser.version < 9)) {
                b.find("#drag").animate({
                    opacity: 1
                }, {
                    duration: 200,
                    queue: false
                });
                b.find("#divider").animate({
                    opacity: 1
                }, 200)
            }
        }, function () {
            if (!(a.browser.msie && a.browser.version >= 7 && a.browser.version < 9)) {
                $this.find("#drag").animate({
                    opacity: .3
                }, 200);
                $this.find("#divider").animate({
                    opacity: .3
                }, 200)
            }
        })
    }

    function d(b, c) {
        var e = b.data("ba_images");
        var f = b.data("ba_imagesLoaded");
        var g = new Image;
        a(g).css("display", "none");
        a(g).attr("src", e[f]);
        if (g.complete || g.readyState === 4) {
            f++;
            if (f == e.length) {
                m(b, c)
            } else {
                b.data("ba_imagesLoaded", f);
                d(b, c)
            }
        } else {
            a(g).load(function () {
                f++;
                if (f == e.length) {
                    m(b, c)
                } else {
                    b.data("ba_imagesLoaded", f);
                    d(b, c)
                }
            })
        }
    }

    function c(b) {
        var c = new Array;
        var d = 0;
        b.find("ul li:first img").each(function (b) {
            var e = a(this);
            c[d] = e.attr("src");
            d++
        });
        b.data("ba_images", c)
    }
    a.fn.extend({
        beforeAfter_slider: function (b) {
            var g = {
                width: 876,
                height: 300,
                start_from: "left",
                start_pos: 30,
                follow: true
            };
            var b = a.extend({}, a.fn.beforeAfter_slider.defaults, b);
            return this.each(function () {
                var g = new Array;
                var h = 0;
                var i = a(this);
                i.onselectstart = function () {
                    return false
                };
                var l = b;
                l.ie = a.browser.msie && a.browser.version >= 7 && a.browser.version < 9;
                l.topon = a(this);
                i.data("off", parseInt(i.css("padding-top")));
                i.data("ba_imagesLoaded", 0);
                var n = i.find("li").first();
                i.data("currentSlide", n);
                j(i, l);
                e(i);
                f(i);
                var o = a("<div id='mainloader' class='loader'></div>");
                i.append(o);
                if (l.ie != true) {
                    i.find("ul li").css({
                        opacity: "0.0"
                    });
                    i.find("#divider").css({
                        opacity: "0.0"
                    });
                    i.find("#drag").css({
                        opacity: "0.0"
                    })
                }
                i.data("dragH", i.find("#drag").height() / 2);
                k(i, l);
                c(i);
                if (l.ie) m(i, l);
                else d(i, l)
            })
        }
    });
})(jQuery)