$(document).ready(function(){
	
	$(window).load(function() { $("#loading").fadeOut("slow"); })
	
	
	//SLIM SCROLL
	$('.slimscroller').slimscroll({
		height: 'auto',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.chat-widget').slimScroll({
		height: '300px',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.scroll-widget').slimScroll({
		height: '325px',
		position: 'left',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.scroll-user-widget').slimScroll({
		height: '500px',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.dropdown-message-scroll').slimScroll({
		height: '250px',
		position: 'left',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.table-scroll').slimScroll({
		height: '300px',
		position: 'right',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});


	//KNOB
	$(function() {
		$(".dial").knob();
	});



	//TOOLTIP
	$('.tooltips').tooltip({
	  selector: "[data-toggle=tooltip]",
	  container: "body"
	})

	//RESPONSIVE SIDEBAR
	$("button.show-sidebar").click(function(){
	$("div.left").toggleClass("mobile-sidebar");
	$("div.right").toggleClass("mobile-content");
	$("div.logo-brand").toggleClass("logo-brand-toggle");
	});


	//SIDEBAR MENU
	$('#sidebar-menu > ul > li > a').click(function() {
		$('#sidebar-menu li').removeClass('selected');
		$(this).closest('li').addClass('selected');	
		var checkElement = $(this).next();
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				$(this).closest('li').removeClass('selected');
				checkElement.slideUp('fast');
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('#sidebar-menu ul ul:visible').slideUp('fast');
				checkElement.slideDown('fast');
			}
			if($(this).closest('li').find('ul').children().length == 0) {
				return true;
				} else {
				return false;	
			}		
	});


	//SUMMERNOTE
	$('.summernote').summernote({
	  height: 500
	});


	$('.summernote-small').summernote({
	  toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['fontsize', ['fontsize']],
		['color', ['color']],
		['para', ['ul', 'ol', 'paragraph']]
	  ],
	  height: 200
	});


	//SELECT
	$('.selectpicker').selectpicker();
	//FILE INPUT
	$('input[type=file]').bootstrapFileInput();
	//DATE PICKER
	$('.datepicker-input').datepicker();
	//ICHECK
	$('input').iCheck({
	checkboxClass: 'icheckbox_minimal-grey',
	radioClass: 'iradio_minimal-grey',
	increaseArea: '20%' // optional
	});


	//GALLERY
	$('.gallery-wrap').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a.zooming', // the selector for gallery item
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
			  enabled:true
			}
		});
	}); 


	if ($('#morris-bar-home').length > 0){
		//MORRIS
		Morris.Bar({
		  element: 'morris-bar-home',
		  data: [
			{ y: 'Indonesia', a: 952},
			{ y: 'India', a: 985},
			{ y: 'Malaysia', a: 955},
			{ y: 'China', a: 785 },
			{ y: 'Philipina', a: 700 },
			{ y: 'Autralia', a: 601 },
			{ y: 'United Kingdom', a: 421 },
			{ y: 'United States', a: 725 },
			{ y: 'Taiwan', a: 350 },
			{ y: 'New Zealand', a: 120 },
			{ y: 'Singapore', a: 124}
		  ],
		  xkey: 'y',
		  ykeys: ['a'],
		  labels: ['Visitor'],
		  resize: true,
		  barColors: ['#2C7439'],
		  gridTextColor: ['#2C7439'],
		  gridTextSize: 11,
		  grid :false
		});

	}

	if ($('#morris-home').length > 0){
		//MORRIS
		Morris.Area({
		  element: 'morris-home',
		  data: [
			{ y: '2006', a: 100, b: 90, c: 112 },
			{ y: '2007', a: 75,  b: 65, c: 95 },
			{ y: '2008', a: 50,  b: 40, c: 80 },
			{ y: '2009', a: 75,  b: 65, c: 96 },
			{ y: '2010', a: 50,  b: 40, c: 75 },
			{ y: '2011', a: 75,  b: 65, c: 110 },
			{ y: '2012', a: 100, b: 90, c: 132 },
			{ y: '2013', a: 125, b: 110, c: 152 },
			{ y: '2014', a: 145, b: 135, c: 165 }
		  ],
		  xkey: 'y',
		  ykeys: ['a', 'b', 'c'],
		  labels: ['New Visitor', 'Visitor', 'Page Hits'],
		  resize: true,
		  lineColors: ['#5CB85C', '#FFD600', '#D10D0D']
		});
	}
	
	
	function respChart(selector, data, options){

		// Define default option for line chart
		var option = {
			scaleOverlay : false,
			scaleOverride : false,
			scaleSteps : null,
			scaleStepWidth : null,
			scaleStartValue : null,
			scaleLineColor : "rgba(0,0,0,.1)",
			scaleLineWidth : 1,
			scaleShowLabels : true,
			scaleLabel : "<%=value%>",
			scaleFontFamily : "'proxima-nova'",
			scaleFontSize : 10,
			scaleFontStyle : "normal",
			scaleFontColor : "#909090",	
			scaleShowGridLines : true,
			scaleGridLineColor : "rgba(0,0,0,.05)",
			scaleGridLineWidth : 1,	
			bezierCurve : true,
			pointDot : true,
			pointDotRadius : 3,
			pointDotStrokeWidth : 1,
			datasetStroke : true,
			datasetStrokeWidth : 2,
			datasetFill : true,
			animation : true,
			animationSteps : 60,
			animationEasing : "easeOutQuart",
			onAnimationComplete : null
		}

		// check if the option is override to exact options 
		// (bar, pie and other)
		if (options == false || options == null){
			options = option;
		} 

		// get selector by context
		var ctx = selector.get(0).getContext("2d");
		// pointing parent container to make chart js inherit its width
		var container = $(selector).parent();

		// enable resizing matter
		$(window).resize( generateChart );

		// this function produce the responsive Chart JS
		function generateChart(){
			// make chart width fit with its container
			var ww = selector.attr('width', $(container).width() );
			// Initiate new chart or Redraw
			new Chart(ctx).Line(data, options);
		};

		// run function - render chart at first load
		generateChart();

	}
	
	respChart($("#canvas"),data);


});



/* ===========================================================
 * Bootstrap: inputmask.js v3.0.0-p7
 * http://jasny.github.io/bootstrap/javascript.html#inputmask
 * Based on Masked Input plugin by Josh Bush (digitalbush.com)
 * ===========================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIphone = (window.orientation !== undefined)
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // INPUTMASK PUBLIC CLASS DEFINITION
  // =================================

  var Inputmask = function (element, options) {
    if (isAndroid) return // No support because caret positioning doesn't work on Android
    
    this.$element = $(element)
    this.options = $.extend({}, Inputmask.DEFAULS, options)
    this.mask = String(this.options.mask)
    
    this.init()
    this.listen()
        
    this.checkVal() //Perform initial check for existing values
  }

  Inputmask.DEFAULS = {
    mask: "",
    placeholder: "_",
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      '?': "[A-Za-z0-9]",
      '*': "."
    }
  }

  Inputmask.prototype.init = function() {
    var defs = this.options.definitions
    var len = this.mask.length

    this.tests = [] 
    this.partialPosition = this.mask.length
    this.firstNonMaskPos = null

    $.each(this.mask.split(""), $.proxy(function(i, c) {
      if (c == '?') {
        len--
        this.partialPosition = i
      } else if (defs[c]) {
        this.tests.push(new RegExp(defs[c]))
        if(this.firstNonMaskPos === null)
          this.firstNonMaskPos =  this.tests.length - 1
      } else {
        this.tests.push(null)
      }
    }, this))

    this.buffer = $.map(this.mask.split(""), $.proxy(function(c, i) {
      if (c != '?') return defs[c] ? this.options.placeholder : c
    }, this))

    this.focusText = this.$element.val()

    this.$element.data("rawMaskFn", $.proxy(function() {
      return $.map(this.buffer, function(c, i) {
        return this.tests[i] && c != this.options.placeholder ? c : null
      }).join('')
    }, this))
  }
    
  Inputmask.prototype.listen = function() {
    if (this.$element.attr("readonly")) return

    var pasteEventName = (isIE ? 'paste' : 'input') + ".mask"

    this.$element
      .on("unmask.bs.inputmask", $.proxy(this.unmask, this))

      .on("focus.bs.inputmask", $.proxy(this.focusEvent, this))
      .on("blur.bs.inputmask", $.proxy(this.blurEvent, this))

      .on("keydown.bs.inputmask", $.proxy(this.keydownEvent, this))
      .on("keypress.bs.inputmask", $.proxy(this.keypressEvent, this))

      .on(pasteEventName, $.proxy(this.pasteEvent, this))
  }

  //Helper Function for Caret positioning
  Inputmask.prototype.caret = function(begin, end) {
    if (this.$element.length === 0) return
    if (typeof begin == 'number') {
      end = (typeof end == 'number') ? end : begin
      return this.$element.each(function() {
        if (this.setSelectionRange) {
          this.setSelectionRange(begin, end)
        } else if (this.createTextRange) {
          var range = this.createTextRange()
          range.collapse(true)
          range.moveEnd('character', end)
          range.moveStart('character', begin)
          range.select()
        }
      })
    } else {
      if (this.$element[0].setSelectionRange) {
        begin = this.$element[0].selectionStart
        end = this.$element[0].selectionEnd
      } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange()
        begin = 0 - range.duplicate().moveStart('character', -100000)
        end = begin + range.text.length
      }
      return {
        begin: begin, 
        end: end
      }
    }
  }
  
  Inputmask.prototype.seekNext = function(pos) {
    var len = this.mask.length
    while (++pos <= len && !this.tests[pos]);

    return pos
  }
  
  Inputmask.prototype.seekPrev = function(pos) {
    while (--pos >= 0 && !this.tests[pos]);

    return pos
  }

  Inputmask.prototype.shiftL = function(begin,end) {
    var len = this.mask.length

    if(begin<0) return

    for (var i = begin,j = this.seekNext(end); i < len; i++) {
      if (this.tests[i]) {
        if (j < len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j]
          this.buffer[j] = this.options.placeholder
        } else
          break
        j = this.seekNext(j)
      }
    }
    this.writeBuffer()
    this.caret(Math.max(this.firstNonMaskPos, begin))
  }

  Inputmask.prototype.shiftR = function(pos) {
    var len = this.mask.length

    for (var i = pos, c = this.options.placeholder; i < len; i++) {
      if (this.tests[i]) {
        var j = this.seekNext(i)
        var t = this.buffer[i]
        this.buffer[i] = c
        if (j < len && this.tests[j].test(t))
          c = t
        else
          break
      }
    }
  },

  Inputmask.prototype.unmask = function() {
    this.$element
      .unbind(".mask")
      .removeData("inputmask")
  }

  Inputmask.prototype.focusEvent = function() {
    this.focusText = this.$element.val()
    var len = this.mask.length 
    var pos = this.checkVal()
    this.writeBuffer()

    var that = this
    var moveCaret = function() {
      if (pos == len)
        that.caret(0, pos)
      else
        that.caret(pos)
    }

    moveCaret()
    setTimeout(moveCaret, 50)
  }

  Inputmask.prototype.blurEvent = function() {
    this.checkVal()
    if (this.$element.val() !== this.focusText)
      this.$element.trigger('change')
  }

  Inputmask.prototype.keydownEvent = function(e) {
    var k=e.which

    //backspace, delete, and escape get special treatment
    if (k == 8 || k == 46 || (isIphone && k == 127)) {
      var pos = this.caret(),
      begin = pos.begin,
      end = pos.end

      if (end-begin === 0) {
        begin = k!=46 ? this.seekPrev(begin) : (end=this.seekNext(begin-1))
        end = k==46 ? this.seekNext(end) : end
      }
      this.clearBuffer(begin, end)
      this.shiftL(begin,end-1)

      return false
    } else if (k == 27) {//escape
      this.$element.val(this.focusText)
      this.caret(0, this.checkVal())
      return false
    }
  }

  Inputmask.prototype.keypressEvent = function(e) {
    var len = this.mask.length

    var k = e.which,
    pos = this.caret()

    if (e.ctrlKey || e.altKey || e.metaKey || k<32)  {//Ignore
      return true
    } else if (k) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end)
        this.shiftL(pos.begin, pos.end-1)
      }

      var p = this.seekNext(pos.begin - 1)
      if (p < len) {
        var c = String.fromCharCode(k)
        if (this.tests[p].test(c)) {
          this.shiftR(p)
          this.buffer[p] = c
          this.writeBuffer()
          var next = this.seekNext(p)
          this.caret(next)
        }
      }
      return false
    }
  }

  Inputmask.prototype.pasteEvent = function() {
    var that = this

    setTimeout(function() {
      that.caret(that.checkVal(true))
    }, 0)
  }

  Inputmask.prototype.clearBuffer = function(start, end) {
    var len = this.mask.length

    for (var i = start; i < end && i < len; i++) {
      if (this.tests[i])
        this.buffer[i] = this.options.placeholder
    }
  }

  Inputmask.prototype.writeBuffer = function() {
    return this.$element.val(this.buffer.join('')).val()
  }

  Inputmask.prototype.checkVal = function(allow) {
    var len = this.mask.length
    //try to place characters where they belong
    var test = this.$element.val()
    var lastMatch = -1

    for (var i = 0, pos = 0; i < len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.options.placeholder
        while (pos++ < test.length) {
          var c = test.charAt(pos - 1)
          if (this.tests[i].test(c)) {
            this.buffer[i] = c
            lastMatch = i
            break
          }
        }
        if (pos > test.length)
          break
      } else if (this.buffer[i] == test.charAt(pos) && i != this.partialPosition) {
        pos++
        lastMatch = i
      }
    }
    if (!allow && lastMatch + 1 < this.partialPosition) {
      this.$element.val("")
      this.clearBuffer(0, len)
    } else if (allow || lastMatch + 1 >= this.partialPosition) {
      this.writeBuffer()
      if (!allow) this.$element.val(this.$element.val().substring(0, lastMatch + 1))
    }
    return (this.partialPosition ? i : this.firstNonMaskPos)
  }

  
  // INPUTMASK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.inputmask
  
  $.fn.inputmask = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('inputmask')
      
      if (!data) $this.data('inputmask', (data = new Inputmask(this, options)))
    })
  }

  $.fn.inputmask.Constructor = Inputmask


  // INPUTMASK NO CONFLICT
  // ====================

  $.fn.inputmask.noConflict = function () {
    $.fn.inputmask = old
    return this
  }


  // INPUTMASK DATA-API
  // ==================

  $(document).on('focus.bs.inputmask.data-api', '[data-mask]', function (e) {
    var $this = $(this)
    if ($this.data('inputmask')) return
    $this.inputmask($this.data())
  })

}(window.jQuery);

