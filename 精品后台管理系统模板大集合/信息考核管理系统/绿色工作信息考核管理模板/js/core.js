/*
 */
(function($, undefined) {
    // prevent duplicate loading
    // this is only a problem because we proxy existing functions
    // and we don't want to double proxy them
    // 如果有值在进行赋值，否则赋值为空，确保不是undefined
    $.ued = $.ued || {};
	
	if (!window.JSON) {
		window.JSON = {};
	}
	(function () {
		"use strict";
		function f(n) {
			// Format integers to have at least two digits.
			return n < 10 ? '0' + n : n;
		}

		if (typeof Date.prototype.toJSON !== 'function') {

			Date.prototype.toJSON = function (key) {

				return isFinite(this.valueOf()) ?
					this.getUTCFullYear()     + '-' +
					f(this.getUTCMonth() + 1) + '-' +
					f(this.getUTCDate())      + 'T' +
					f(this.getUTCHours())     + ':' +
					f(this.getUTCMinutes())   + ':' +
					f(this.getUTCSeconds())   + 'Z' : null;
			};

			String.prototype.toJSON      =
				Number.prototype.toJSON  =
				Boolean.prototype.toJSON = function (key) {
					return this.valueOf();
				};
		}

		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap,
			indent,
			meta = {    // table of character substitutions
				'\b': '\\b',
				'\t': '\\t',
				'\n': '\\n',
				'\f': '\\f',
				'\r': '\\r',
				'"' : '\\"',
				'\\': '\\\\'
			},
			rep;


		function quote(string) {

	// If the string contains no control characters, no quote characters, and no
	// backslash characters, then we can safely slap some quotes around it.
	// Otherwise we must also replace the offending characters with safe escape
	// sequences.

			escapable.lastIndex = 0;
			return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
				var c = meta[a];
				return typeof c === 'string' ? c :
					'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
			}) + '"' : '"' + string + '"';
		}


		function str(key, holder) {

	// Produce a string from holder[key].

			var i,          // The loop counter.
				k,          // The member key.
				v,          // The member value.
				length,
				mind = gap,
				partial,
				value = holder[key];

	// If the value has a toJSON method, call it to obtain a replacement value.

			if (value && typeof value === 'object' &&
					typeof value.toJSON === 'function') {
				value = value.toJSON(key);
			}

	// If we were called with a replacer function, then call the replacer to
	// obtain a replacement value.

			if (typeof rep === 'function') {
				value = rep.call(holder, key, value);
			}

	// What happens next depends on the value's type.

			switch (typeof value) {
			case 'string':
				return quote(value);

			case 'number':

	// JSON numbers must be finite. Encode non-finite numbers as null.

				return isFinite(value) ? String(value) : 'null';

			case 'boolean':
			case 'null':

	// If the value is a boolean or null, convert it to a string. Note:
	// typeof null does not produce 'null'. The case is included here in
	// the remote chance that this gets fixed someday.

				return String(value);

	// If the type is 'object', we might be dealing with an object or an array or
	// null.

			case 'object':

	// Due to a specification blunder in ECMAScript, typeof null is 'object',
	// so watch out for that case.

				if (!value) {
					return 'null';
				}

	// Make an array to hold the partial results of stringifying this object value.

				gap += indent;
				partial = [];

	// Is the value an array?

				if (Object.prototype.toString.apply(value) === '[object Array]') {

	// The value is an array. Stringify every element. Use null as a placeholder
	// for non-JSON values.

					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || 'null';
					}

	// Join all of the elements together, separated with commas, and wrap them in
	// brackets.

					v = partial.length === 0 ? '[]' : gap ?
						'[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
						'[' + partial.join(',') + ']';
					gap = mind;
					return v;
				}

	// If the replacer is an array, use it to select the members to be stringified.

				if (rep && typeof rep === 'object') {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						if (typeof rep[i] === 'string') {
							k = rep[i];
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				} else {

	// Otherwise, iterate through all of the keys in the object.

					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				}

	// Join all of the member texts together, separated with commas,
	// and wrap them in braces.

				v = partial.length === 0 ? '{}' : gap ?
					'{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
					'{' + partial.join(',') + '}';
				gap = mind;
				return v;
			}
		}

	// If the JSON object does not yet have a stringify method, give it one.

		if (typeof window.JSON.stringify !== 'function') {
			window.JSON.stringify = function (value, replacer, space) {

	// The stringify method takes a value and an optional replacer, and an optional
	// space parameter, and returns a JSON text. The replacer can be a function
	// that can replace values, or an array of strings that will select the keys.
	// A default replacer method can be provided. Use of the space parameter can
	// produce text that is more easily readable.

				var i;
				gap = '';
				indent = '';

	// If the space parameter is a number, make an indent string containing that
	// many spaces.

				if (typeof space === 'number') {
					for (i = 0; i < space; i += 1) {
						indent += ' ';
					}

	// If the space parameter is a string, it will be used as the indent string.

				} else if (typeof space === 'string') {
					indent = space;
				}

	// If there is a replacer, it must be a function or an array.
	// Otherwise, throw an error.

				rep = replacer;
				if (replacer && typeof replacer !== 'function' &&
						(typeof replacer !== 'object' ||
						typeof replacer.length !== 'number')) {
					throw new Error('JSON.stringify');
				}

	// Make a fake root object containing our value under the key of ''.
	// Return the result of stringifying the value.

				return str('', {'': value});
			};
		}


	// If the JSON object does not yet have a parse method, give it one.

		if (typeof window.JSON.parse !== 'function') {
			window.JSON.parse = function (text, reviver) {

	// The parse method takes a text and an optional reviver function, and returns
	// a JavaScript value if the text is a valid JSON text.

				var j;

				function walk(holder, key) {

	// The walk method is used to recursively walk the resulting structure so
	// that modifications can be made.

					var k, v, value = holder[key];
					if (value && typeof value === 'object') {
						for (k in value) {
							if (Object.prototype.hasOwnProperty.call(value, k)) {
								v = walk(value, k);
								if (v !== undefined) {
									value[k] = v;
								} else {
									delete value[k];
								}
							}
						}
					}
					return reviver.call(holder, key, value);
				}


	// Parsing happens in four stages. In the first stage, we replace certain
	// Unicode characters with escape sequences. JavaScript handles many characters
	// incorrectly, either silently deleting them, or treating them as line endings.

				text = String(text);
				cx.lastIndex = 0;
				if (cx.test(text)) {
					text = text.replace(cx, function (a) {
						return '\\u' +
							('0000' + a.charCodeAt(0).toString(16)).slice(-4);
					});
				}

	// In the second stage, we run the text against regular expressions that look
	// for non-JSON patterns. We are especially concerned with '()' and 'new'
	// because they can cause invocation, and '=' because it can cause mutation.
	// But just to be safe, we want to reject all unexpected forms.

	// We split the second stage into 4 regexp operations in order to work around
	// crippling inefficiencies in IE's and Safari's regexp engines. First we
	// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
	// replace all simple value tokens with ']' characters. Third, we delete all
	// open brackets that follow a colon or comma or that begin the text. Finally,
	// we look to see that the remaining characters are only whitespace or ']' or
	// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

				if (/^[\],:{}\s]*$/
						.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
							.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
							.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

	// In the third stage we use the eval function to compile the text into a
	// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
	// in JavaScript: it can begin a block or an object literal. We wrap the text
	// in parens to eliminate the ambiguity.

					j = eval('(' + text + ')');

	// In the optional fourth stage, we recursively walk the new structure, passing
	// each name/value pair to a reviver function for possible transformation.

					return typeof reviver === 'function' ?
						walk({'': j}, '') : j;
				}

	// If the text is not JSON parseable, then a SyntaxError is thrown.

				throw new SyntaxError('JSON.parse');
			};
		}
	}());
	
    if ($.ued.version) {
        return;
    }

    $.extend($.ued, {
        version : "2.0",
        keyCode : {
            TAB : 9,
            ENTER : 13,
            ESCAPE : 27,
            SPACE : 32,
            LEFT : 37,
            UP : 38,
            RIGHT : 39,
            DOWN : 40
        },
        lang : {
            // 获取属性的国际化字符串，如果组件的options中已经设置这个值就直接使用，否则从$.ued.lang[comp]中获取
            _get : function(options, comp, attr) {
                return options[attr] ? options[attr] : $.ued.lang[comp][attr];
            }
        }
    });
    // plugins
    $.fn.extend({
        propAttr : $.fn.prop || $.fn.attr,
        _oldFocus : $.fn.focus, //为避免与jQuery ui冲突导致死循环，这里不要取名为'_focus'
        //设置元素焦点（delay：延迟时间）
        focus : function(delay, fn) {
            return typeof delay === "number" ? this.each(function() {
                var elem = this;
                setTimeout(function() {
                    $(elem).focus();
                    if (fn) {
                        fn.call(elem);
                    }
                }, delay);
            }) : this._oldFocus.apply(this, arguments);
        },
        //获取设置滚动属性的 父元素
        scrollParent : function() {
            var scrollParent;
            if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
                scrollParent = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test($.curCSS(this, 'position', 1)) && (/(auto|scroll)/).test($.curCSS(this, 'overflow', 1) + $.curCSS(this, 'overflow-y', 1) + $.curCSS(this, 'overflow-x', 1));
                }).eq(0);
            } else {
                scrollParent = this.parents().filter(function() {
                    return (/(auto|scroll)/).test($.curCSS(this, 'overflow', 1) + $.curCSS(this, 'overflow-y', 1) + $.curCSS(this, 'overflow-x', 1));
                }).eq(0);
            }
            return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
        },
        //设置或获取元素的垂直坐标
        zIndex : function(zIndex) {
            if (zIndex !== undefined) {
                return this.css("zIndex", zIndex);
            }
            if (this.length) {
                var elem = $(this[0]), position, value;
                while (elem.length && elem[0] !== document) {
                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
                    // This makes behavior of this function consistent across browsers
                    // WebKit always returns auto if the element is positioned
                    position = elem.css("position");
                    if (position === "absolute" || position === "relative" || position === "fixed") {
                        // IE returns 0 when zIndex is not specified
                        // other browsers return a string
                        // we ignore the case of nested elements with an explicit value of 0
                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                        value = parseInt(elem.css("zIndex"), 10);
                        if (!isNaN(value) && value !== 0) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }
            return 0;
        },
        //设置元素不支持被选择
        disableSelection : function() {
            return this.bind(($.support.selectstart ? "selectstart" : "mousedown" ) + ".om-disableSelection", function(event) {
                event.preventDefault();
            });
        },
        //设置元素支持被选择
        enableSelection : function() {
            return this.unbind(".om-disableSelection");
        }
    });
    $.fn.extend({
		
        _oldShow : $.fn.show,
        show : function(type) {
            if (type != "visibility") {
                return this._oldShow.apply(this, arguments);
            } else {
                return this.css("visibility", "visible");
            }
        },
		
        _oldHide : $.fn.hide,
        hide : function(type) {
            if (type != "visibility") {
                return this._oldHide.apply(this, arguments);
            } else {
                return this.css("visibility", "hidden");
            }
        }
    });
	$.extend({
		
		getStrLength : function(message) {
			return message.replace(/([\u4E00-\u9FA5\uf900-\ufa2d])/g, 'aa').length;
		}
	});
	
	
	  window.property = {};
	if(!window.console){
		window.console = {};
		window.console.log = function(data){
			window.alert(data)
		}
		if(!window.console.time){
			window.console.time = function(name){
				window.property[name] = new Date().getTime();
			}
			window.console.timeEnd = function(name){
				var tempTime = new Date().getTime()
				window.alert(name+'==='+(tempTime - window.property[name])+'ms');
			}
		}
	}
	
	if(!window.DebugModel){
		window.DebugModel = {},window.deBugObj = {};
		window.DebugModel.start = function(name){
			window.deBugObj[name] = +new Date();
		}
		window.DebugModel.end = function(name){
			var tempTime = +new Date();
			var tempConsole = name+'完成花费了'+(tempTime - window.deBugObj[name])+'ms';
			DebugModel._printLog(tempConsole);
		}
		window.DebugModel._printLog = function(log){
			var $debugConsole = $('.ued-debugConsole',$('body'));
			if(!$debugConsole.size()){//如果存在debug控制台元素
				$('body').append('<div class="ued-debugConsole" style="position:absolute;top:10px;left:10px;background:#F9F9F9;border:1px solid #CCC;padding:5px 10px 20px 10px;z-index:99999;color:#666;box-shadow:1px 1px 1px white inset;text-shadow:1px 1px 1px #FFF;">'+
				'<h6 style="border-bottom:1px dashed #999;margin-bottom:5px;">UED DEBUG 控制台</h6>'+
				'<div class="ued-debugContent uew-scroll-webkit" style="max-height:300px;overflow:auto;"></div>'+
				'<a href="javascript:;" class="ued-debugClose" style="position:absolute;bottom:2px;right:5px;">关闭</a>'+
				'</di>');
				$debugContent = $('.ued-debugContent',$('body'));
				DebugModel._initCloseOrShow();
			}
			$('.ued-debugConsole',$('body')).show();
			$debugContent.append('<p>'+ log +'</p>');
		}
		
		window.DebugModel._initCloseOrShow = function($debugConsole){
			$('.ued-debugClose',$('body')).click(function(e) {
				$debugContent.empty();
                $('.ued-debugConsole',$('body')).hide();
            });
			
		}
	}
	
	window.DeepCopy = function(obj){
		var copyObj = new Object();
		for (prop in obj)
		{
			if(obj[prop] != null && obj[prop].constructor == Object){
				copyObj[prop] = window.DeepCopy(obj[prop]);
			}
			else{
				copyObj[prop] = obj[prop]
			}
		}
		return copyObj;
	}
	
	Array.prototype.remove = function(element){
		var indexArr = [];
		var outArr = [];
		//找到出现该元素的index并存入数组indexArr
		for(var i = 0;i < this.length;i++){
			if(this[i] == element){
				indexArr.push(i);
			}
		}
		if(indexArr.length > 0){
			for(var j = 0;j < indexArr.length;j++){
				if(j == 0){//切分头部
					outArr = outArr.concat(this.slice(0,indexArr[j]));
				}else{//切分中段
					outArr = outArr.concat(this.slice(indexArr[j - 1] + 1,indexArr[j]));
				}
			}
			//切分尾端
			outArr = outArr.concat(this.slice(indexArr[j - 1] + 1,this.length));
			return outArr;
		}else{
			throw new Error(element + "can't be found in " + this);
		}
	}
	
    // 扩展innerWidth、innerHeight、outerWidth和outerHeight方法，如果不传参则获取值，如果传参则设置计算后的宽高。
    $.each(["Width", "Height"], function(i, name) {
        var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], type = name.toLowerCase(), orig = {
            innerWidth : $.fn.innerWidth,
            innerHeight : $.fn.innerHeight,
            outerWidth : $.fn.outerWidth,
            outerHeight : $.fn.outerHeight
        };

        function reduce(elem, size, border, margin) {
            $.each(side, function() {
                size -= parseFloat($.curCSS(elem, "padding" + this, true)) || 0;
                if (border) {
                    size -= parseFloat($.curCSS(elem, "border" + this + "Width", true)) || 0;
                }
                if (margin) {
                    size -= parseFloat($.curCSS(elem, "margin" + this, true)) || 0;
                }
            });
            return size;
        }

        $.fn["inner" + name] = function(size) {
            if (size === undefined) {
                // 返回innerWidth/innerHeight
                return orig["inner" + name].call(this);
            }
            return this.each(function() {
                // 设置宽度/高度 = (size - padding)
                $(this).css(type, reduce(this, size) + "px");
            });
        };

        $.fn["outer" + name] = function(size, margin) {
            if ( typeof size !== "number") {
                // 返回outerWidth/outerHeight
                return orig["outer" + name].call(this, size);
            }
            return this.each(function() {
                // 设置宽度/高度 = (size - padding - border - margin)
                $(this).css(type, reduce(this, size, true, margin) + "px");
            });
        };
    });
    // selectors
    function focusable(element, isTabIndexNotNaN) {
        var nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
            var map = element.parentNode, mapName = map.name, img;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $( "img[usemap=#" + mapName + "]" )[0];
            return !!img && visible(img);
        }
        return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" == nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
        // the element and all of its ancestors must be visible
        && visible(element);
    }

    function visible(element) {
        return !$(element).parents().andSelf().filter(function() {
            return $.curCSS(this, "visibility") === "hidden" || $.expr.filters.hidden(this);
        }).length;
    }


    $.extend($.expr[":"], {
        data : function(elem, i, match) {
            return !!$.data(elem, match[3]);
        },
        focusable : function(element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
        },
        tabbable : function(element) {
            var tabIndex = $.attr(element, "tabindex"), isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || tabIndex >= 0 ) && focusable(element, !isTabIndexNaN);
        }
    });
    // support
    $(function() {
        var body = document.body, div = body.appendChild( div = document.createElement("div"));
        $.extend(div.style, {
            minHeight : "100px",
            height : "auto",
            padding : 0,
            borderWidth : 0
        });
        // 判断当前浏览器环境是否支持minHeight属性
        $.support.minHeight = div.offsetHeight === 100;
        $.support.selectstart = "onselectstart" in div;
        // set display to none to avoid a layout bug in IE
        // http://dev.jquery.com/ticket/4014
        body.removeChild(div).style.display = "none";
    });

    // deprecated
    $.extend($.ued, {
        // $.ued.plugin is deprecated.  Use the proxy pattern instead.
        plugin : {
            add : function(module, option, set) {
                var proto = $.ued[module].prototype;
                for (var i in set ) {
                    proto.plugins[i] = proto.plugins[i] || [];
                    proto.plugins[i].push([option, set[i]]);
                }
            },
            call : function(instance, name, args) {
                var set = instance.plugins[name];
                if (!set || !instance.element[0].parentNode) {
                    return;
                }
                for (var i = 0; i < set.length; i++) {
                    if (instance.options[set[ i ][0]]) {
                        set[ i ][1].apply(instance.element, args);
                    }
                }
            }
        }
    });

})(jQuery);

(function($, undefined) {
    // jQuery 1.4+
    if ($.cleanData) {
        var _cleanData = $.cleanData;
        $.cleanData = function(elems) {
            for (var i = 0, elem; ( elem = elems[i]) != null; i++) {
				try {
                	$(elem).triggerHandler("ued-remove");
				} catch( e ) {}
            }
            _cleanData(elems);
        };
    }

    $.uedWidget = function(name, base, prototype) {
        var namespace = name.split( "." )[0], fullName;
        name = name.split( "." )[1];
        fullName = namespace + "-" + name;
        // 例如参数name='ued.tabs'，变成namespace='ued',name='tabs',fullName='ued-tabs'
        // base默认为Widget类，组件默认会继承base类的所有方法
        if (!prototype) {
            prototype = base;
            base = $.UEDWidget;
        }
        // create selector for plugin
        $.expr[ ":" ][fullName] = function(elem) {
            return !!$.data(elem, name);
        };
        // 创建命名空间$.ued.tabs
        $[namespace] = $[namespace] || {};
        // 组件的构造函数
        $[ namespace ][name] = function(options, element) {
            // allow instantiation without initializing for simple inheritance
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        // 初始化父类，一般调用了$.Widget
        var basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        //		$.each( basePrototype, function( key, val ) {
        //			if ( $.isPlainObject(val) ) {
        //				basePrototype[ key ] = $.extend( {}, val );
        //			}
        //		});
        basePrototype.options = $.extend(true, {}, basePrototype.options);
        // 给om.tabs继承父类的所有原型方法和参数
        $[ namespace ][name].prototype = $.extend(true, basePrototype, {
            namespace : namespace,
            widgetName : name,
            // 组件的事件名前缀，调用_trigger的时候会默认给trigger的事件加上前缀
            // 例如_trigger('create')实际会触发'tabscreate'事件
            widgetEventPrefix : $[ namespace ][name].prototype.widgetEventPrefix || name,
            widgetBaseClass : fullName
        }, prototype);
        // 把tabs方法挂到jquery对象上，也就是$('#tab1').tabs();
        var temp = $.uedWidget.bridge(name, $[ namespace ][name]);
    };

    $.uedWidget.bridge = function(name, object) {
        $.fn[name] = function(options) {
            // 如果tabs方法第一个参数是string类型，则认为是调用组件的方法，否则调用options方法
            var isMethodCall = typeof options === "string", args = Array.prototype.slice.call(arguments, 1), returnValue = this;
            // allow multiple hashes to be passed on init
            options = !isMethodCall && args.length ? $.extend.apply(null, [true, options].concat(args)) : options;
            // '_'开头的方法被认为是内部方法，不会被执行，如$('#tab1').tabs('_init')
            if (isMethodCall && options.charAt(0) === "_") {
                return returnValue;
            }
            if (isMethodCall) {
                this.each(function() {
                    // 执行组件方法
                    var instance = $.data(this, name);
                    if (options == 'options') {
                        returnValue = instance && instance.options;
                        return false;
                    } else {
                        var methodValue = instance && $.isFunction(instance[options]) ? instance[options].apply(instance, args) : instance;
                        if (methodValue !== instance && methodValue !== undefined) {
                            returnValue = methodValue;
                            return false;
                        }
                    }
                });
            } else {
                // 调用组件的options方法
                this.each(function() {
                    var instance = $.data(this, name);
                    if (instance) {
                        // 设置options后再次调用_init方法，第一次调用是在_createWidget方法里面。这个方法需要开发者去实现。
                        // 主要是当改变组件中某些参数后可能需要对组件进行重画
                        instance._setOptions(options || {});
                        $.extend(instance.options, options);
                        $(instance.beforeInitListeners).each(function() {
                            this.call(instance);
                        });
                        instance._init();
                        $(instance.initListeners).each(function() {
                            this.call(instance);
                        });
                    } else {
                        // 没有实例的话，在这里调用组件类的构造函数，并把构造后的示例保存在dom的data里面。注意这里的this是dom，object是模块类
                        $.data(this, name, new object(options, this));
                    }
                });
            }
            return returnValue;
        };
    };
    $.uedWidget.addCreateListener = function(name, fn) {
        var temp = name.split(".");
        $[ temp[0] ][temp[1]].prototype.createListeners.push(fn);
    };
    $.uedWidget.addInitListener = function(name, fn) {
        var temp = name.split(".");
        $[ temp[0] ][temp[1]].prototype.initListeners.push(fn);
    };
    $.uedWidget.addBeforeInitListener = function(name, fn) {
        var temp = name.split(".");
        $[ temp[0] ][temp[1]].prototype.beforeInitListeners.push(fn);
    };
    $.UEDWidget = function(options, element) {
        this.createListeners = [];
        this.initListeners = [];
        this.beforeInitListeners = [];
        // allow instantiation without initializing for simple inheritance
        if (arguments.length) {
            this._createWidget(options, element);
        }
    };
    /**
     * 格式化简单节点数据
     */
    $.formatData = function(easyData, sourcePid) {
        var index;
        var root;
        //寻找根节点
        for (var i = 0; i < easyData.length; i++) {
            if (easyData[i].pid == sourcePid) {
                index = i;
                root = easyData[i];
                root.level = 0;
                break;
            }
        }
        if (root) {
            handleArray(easyData, root);
            return easyData[index];
        } else {
            return null;
        };
    }
    function handleArray(target_, pNode) {
        for (var i = 0; i < target_.length; i++) {
            if (target_[i].pid == pNode.id) {
                if (!pNode.children) {
                    pNode.children = new Array();
                }
                pNode.children.push(target_[i]);
                target_[i].level = pNode.level + 1;
                handleArray(target_, target_[i]);
            }
        }
    }

    /*=============================================*/
    $.UEDWidget.prototype = {
        widgetName : "widget",
        widgetEventPrefix : "",
        options : {
            disabled : false
        },
        _createWidget : function(options, element) {
            // $.widget.bridge stores the plugin instance, but we do it anyway
            // so that it's stored even before the _create function runs
            $.data(element, this.widgetName, this);
            this.element = $(element);
            this.options = $.extend(true, {}, this.options, this._getCreateOptions(), options);
            var self = this;

            this.element.bind("ued-remove._" + this.widgetName, function() {
                self.destroy();
            });
            // 开发者实现
            this._create();
            $(this.createListeners).each(function() {
                this.call(self);
            });
            // 如果绑定了初始化的回调函数，会在这里触发。注意绑定的事件名是需要加上前缀的，如$('#tab1').bind('tabscreate',function(){});
            this._trigger("create");
            // 开发者实现
            $(this.beforeInitListeners).each(function() {
                this.call(self);
            });
            this._init();
            $(this.initListeners).each(function() {
                this.call(self);
            });
        },
        _getCreateOptions : function() {
            return $.metadata && $.metadata.get( this.element[0] )[this.widgetName];
        },
        _create : function() {
        },
        _init : function() {
        },
        destroy : function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName);
        },
        widget : function() {
            return this.element;
        },

        option : function(key, value) {
            var options = key;
            if (arguments.length === 0) {
                // don't return a reference to the internal hash
                return $.extend({}, this.options);
            }
            if ( typeof key === "string") {
                if (value === undefined) {
                    return this.options[key];
                    // 获取值
                }
                options = {};
                options[key] = value;
            }
            this._setOptions(options);
            // 设置值
            return this;
        },
        _setOptions : function(options) {
            var self = this;
            $.each(options, function(key, value) {
                self._setOption(key, value);
            });
            return this;
        },
        _setOption : function(key, value) {
            this.options[key] = value;
            return this;
        },

        // $.widget中优化过的trigger方法。type是回调事件的名称，如"onRowClick"，event是触发回调的事件（通常没有这个事件的时候传null）
        // 这个方法只声明了两个参数，如有其他参数可以直接写在event参数后面
        _trigger : function(type, event) {
            // 获取初始化配置config中的回调方法
			
            var callback;
			var callbackArr = type.split(".");
			
			if(callbackArr.length > 1){
				var tempCallback = this.options[callbackArr[0]];
				for(var i = 1 ;i < callbackArr.length;i++){
					tempCallback = tempCallback[callbackArr[i]]	;
				}
				callback = tempCallback;
			}else{
				callback = this.options[type]
			}
			
			
            // 封装js标准event对象为jquery的Event对象
            event = $.Event(event);
            event.type = type;
            // copy original event properties over to the new event
            // this would happen if we could call $.event.fix instead of $.Event
            // but we don't have a way to force an event to be fixed multiple times
            if (event.originalEvent) {
                for (var i = $.event.props.length, prop; i; ) {
                    prop = $.event.props[--i];
                    event[prop] = event.originalEvent[prop];
                }
            }
            // 构造传给回调函数的参数，event放置在最后
            var newArgs = [], argLength = arguments.length;
            for (var i = 2; i < argLength; i++) {
                newArgs[i - 2] = arguments[i];
            }
            if (argLength > 1) {
                newArgs[argLength - 2] = arguments[1];
            }
            return !($.isFunction(callback) && callback.apply(this.element, newArgs) === false || event.isDefaultPrevented() );
        }
    };
})(jQuery);
