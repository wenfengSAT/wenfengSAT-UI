/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-draganddrop-hasevent
 */
;
window.Modernizr = function (a, b, c) {
    function u(a) {
        i.cssText = a
    }

    function v(a, b) {
        return u(prefixes.join(a + ";") + (b || ""))
    }

    function w(a, b) {
        return typeof a === b
    }

    function x(a, b) {
        return!!~("" + a).indexOf(b)
    }

    function y(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)return d === !1 ? a[e] : w(f, "function") ? f.bind(d || b) : f
        }
        return!1
    }

    var d = "2.5.3", e = {}, f = b.documentElement, g = "modernizr", h = b.createElement(g), i = h.style, j, k = {}.toString, l = {}, m = {}, n = {}, o = [], p = o.slice, q, r = function () {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"), d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = w(e[d], "function"), w(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }

        var a = {select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img"};
        return d
    }(), s = {}.hasOwnProperty, t;
    !w(s, "undefined") && !w(s.call, "undefined") ? t = function (a, b) {
        return s.call(a, b)
    } : t = function (a, b) {
        return b in a && w(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")throw new TypeError;
        var d = p.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(p.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(p.call(arguments)))
        };
        return e
    }), l.draganddrop = function () {
        var a = b.createElement("div");
        return"draggable"in a || "ondragstart"in a && "ondrop"in a
    };
    for (var z in l)t(l, z) && (q = z.toLowerCase(), e[q] = l[z](), o.push((e[q] ? "" : "no-") + q));
    return u(""), h = j = null, e._version = d, e.hasEvent = r, e
}(this, this.document);