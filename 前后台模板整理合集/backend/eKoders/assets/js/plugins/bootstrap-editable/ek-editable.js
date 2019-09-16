//Wysiwyg
(function ($) {
    "use strict";
    
    var Wysiwyg = function (options) {
        this.init('wysiwyg', options, Wysiwyg.defaults);
        
        //extend wysiwyg manually as $.extend not recursive 
        this.options.wysiwyg = $.extend({}, Wysiwyg.defaults.wysiwyg, options.wysiwyg);
    };

    $.fn.editableutils.inherit(Wysiwyg, $.fn.editabletypes.abstractinput);

    $.extend(Wysiwyg.prototype, {
        render: function () {
			this.$editor = this.$input.nextAll('.wysiwyg-editor:eq(0)');
			
			this.$tpl.parent().find('.wysiwyg-editor').show().ek_wysiwyg(
			 {
				toolbar:
				[
				'fontSize',
				null,
				'bold',
				'italic',
				'strikethrough',
				'underline'
				]
			  }
			)
			.prev().addClass('editor-style1 text-center')
			.closest('.editable-input').addClass('editable-wysiwyg')
			.closest('.editable-container').css({'display':'block'});//if display is inline-block, putting large images inside the editor will expand it out of bounding box!

			if(this.options.wysiwyg && this.options.wysiwyg.css) 
				this.$tpl.closest('.editable-wysiwyg').css(this.options.wysiwyg.css);
        },


        value2html: function(value, element) {
            $(element).html(value);
			return false;
        },

        html2value: function(html) {
			return html;
        },

        value2input: function(value) {
			this.$editor.html(value);
        },
		input2value: function() { 
			return this.$editor.html();
        },

        activate: function() {
           //this.$editor.focus().get(0).setSelectionRange(200,200);
        }
    });
	


    Wysiwyg.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
		tpl: '<input type="hidden" /><div class="wysiwyg-editor"></div>',
        inputclass: 'editable-wysiwyg',
        wysiwyg: {
            
        }
    });

    $.fn.editabletypes.wysiwyg = Wysiwyg;

}(window.jQuery));



/**
Slider editable input
**/
(function ($) {
    "use strict";
    
    var Slider = function (options) {
        this.init('slider', options, Slider.defaults);
		this.initSlider(options, Slider.defaults);
		
		this.nativeUI = false;
		try {
			var tmp_inp = document.createElement('INPUT');
			tmp_inp.type = 'range';
			this.nativeUI = tmp_inp.type === 'range' && this.options.slider.nativeUI === true
		} catch(e) {}
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Slider, $.fn.editabletypes.abstractinput);

    $.extend(Slider.prototype, {
		initSlider: function(options, defaults) {
            this.options.slider = $.extend({}, defaults.slider, options.slider);
        },

        /**
        Renders input from tpl

        @method render() 
        **/        
        render: function() {
		},
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/
       activate: function() {
            if(this.$input.is(':visible')) {
				this.$input.focus();
				$.fn.editableutils.setCursorPosition(this.$input.get(0), this.$input.val().length);

				if(!this.nativeUI) {
					var self = this;
					var val = parseInt(this.$input.val());
					var width = this.options.slider.width || 200;
					var options = $.extend(this.options.slider , {
						value:val,
						slide: function( event, ui ) {
							var val = parseInt(ui.value);
							self.$input.val(val);
							
							if(ui.handle.firstChild == null) {//no tooltips attached to it
								$(ui.handle).prepend("<div class='tooltip top in' style='display:none; top:-38px; left:-5px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
							}
							$(ui.handle.firstChild).show().children().eq(1).text(val);
						}
					});
					this.$input.parent().addClass('editable-slider').css('width', width+'px').slider(options);
				}
				else {
					this.$input.get(0).type = 'range';
					var options = ['min', 'max', 'step']
					for(var o = 0 ; o < options.length; o++) {
						if(options[o] in this.options.slider) {							
							this.$input[0][options[o]] = this.options.slider[options[o]]
						}
					}
					var width = this.options.slider.width || 200;
					this.$input.parent().addClass('editable-slider').css('width', width+'px');
				}
				
            }
       },
	   
	   value2html: function(value, element) {
       },

       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }       
    });

    Slider.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<input type="text" /><span class="inline ui-slider-success"><span class="slider-display"></span></span>',
        inputclass: '',
		slider:{
			min:1,
			max:100,
			step:1,
			range: "min"
        }
    });

    $.fn.editabletypes.slider = Slider;

}(window.jQuery));