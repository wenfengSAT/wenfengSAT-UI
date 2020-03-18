/*
 * ************************************************************* *
 * Name       : login custom                                     *
 * Date       : March 2012                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency : see below                                        *
 * Lib        : 1.7+                                             *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */ 
 
$(document).ready(function($){ 

	/* --------------------------------------------------------------------- */
	   
	/**
	 * Name        : Bootstrap dropdown
	 * Description : Allow inside clicking
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  : jQuery core
	 * Developer   : Mark	 
	**/

	$('.dropdown-menu:not(.datepicker, .rt-table .dropdown-menu, .wysihtml5-toolbar .dropdown-menu, .bootstrap-timepicker-widget)').on('click','*',function(e) {
		e.stopPropagation();
	});
	
	/* BOOTSTRAP ----------------------------------------------------------- */

	/**
	 * Name        : Bootstrap modal
	 * Description : Bootstrap modal
	 * File Name   : bootstrap.js
	 * Plugin Url  : www.getbootstrap.com  
	 * Updated     : --/--/----	
	 * Dependency  : jQuery core, bootstrap
	 * Developer   : Richard
	**/	
	
	$('#modal-tou-trigger').click(function(e){
		$('#modal-tou').modal();
		
		e.preventDefault();
	});	

	
	/* THIRD PARTY ----------------------------------------------------------- */

	/**
	 * Name        : Password Strength Indicator
	 * Description : Password strength meter
	 * File Name   : jquery.pwstrength.js
	 * Plugin Url  : matoilic.github.com/jquery.pwstrength 
	 * Updated     : --/--/----	
	 * Dependency  : jQuery core
	 * Developer   : Richard
	**/	
	
	$('.password').pwstrength(); 
	// show/hide on keypress
	$('.password').keyup(function(e){
		if($(this).val().length != 0){
			$('#pwindicator').show();	
		}else{
			$('#pwindicator').hide();	
		}
	});
		

	
	/* CUSTOM/PREMIUM PLUGIN ----------------------------------------------- */
		   
	/**
	 * Name        : Show password
	 * Description : Show password field.
	 * File Name   : showpassword.js
	 * Plugin Url  : 
	 * Updated     : --/--/----	
	 * Dependency  : jQuery core
	 * Developer   : Mark
	**/	
	
	$('#fc-id-2').showPassword({
		trigger:'#showpassword-trigger', 
		template:'<input class="form-control" type="text"/>', 
		labelShow:'Show password',
		labelHide:'Hide password',
		keyup:function(){},        
		onShow:function(){},
		onHide:function(){}   
	});

	$('#fc-id-3').showPassword({
		trigger:'#showpassword-trigger', 
		template:'<input class="form-control" type="text"/>', 
		labelShow:'Show password',
		labelHide:'Hide password',
		keyup:function(){},        
		onShow:function(){},
		onHide:function(){}   
	});
	
	/* --------------------------------------------------------------------- */
		   
	/**
	 * Name        : nanoGress
	 * Description : Lightweight nano progressbar.
	 * File Name   : nanogress.js
	 * Plugin Url  : 
	 * Updated     : --/--/----	
	 * Dependency  : jQuery core, nanogress.js
	 * Developer   : Mark
	**/	
	
	$('#fake-submit').click(function(e){
		$(this).text('Please wait...');
		var href = $(this).attr('href');
		e.preventDefault();
		$.nanoGress.start({
			target: '#fake-submit'
		});
		$.nanoGress.end({
			delay: 2000,
			onEnd: function(){
				window.location.href  = href;
			}
		});	
	});

	/* CUSTOM/PREMIUM PLUGIN ----------------------------------------------- */
		   
	/**
	 * Name        : Power Wizard
	 * Description : Step wizard.
	 * File Name   : powerwizard.js
	 * Plugin Url  : 
	 * Updated     : --/--/----	
	 * Dependency  : jQuery core
	 * Developer   : Mark
	**/	
	
	$('.powerwizard').powerWizard({
		containerSelector:'.powerwizard-content',
		stepsSelector:'.powerwizard-step',
		nextButtonSelector:'.pw-next',
		prevButtonSelector:'.pw-prev',
		navButtonSelector:'.pw-nav',
		activeClass:'pw-active',
		disableClass:'pw-disable',
		clickableTitles: true,
		historyTitles: false,
		startAt: 0,
		useAjax:true,
		onNext:function(ui){
			//ui.step(element)
		},
		onPrev:function(ui){
			//ui.step(element)
		},
		onSwitch:function(ui){
			//ui.step(element)
		},
		onSubmit:function(ui){
			//ui.step(element)
			//ui.output(string)
		},
		ajaxSuccess:function(ui){
			//ui.step(element)
		},
		ajaxError:function(ui){
			//ui.step(element)
		},
		onValidate:function(ui){
			//ui.step(element)
		
		    var minChar     = 2;
			var returnFalse = false;
	
		    $(ui.step).find('.required').each(function(){
				if($(this).is(':checkbox')){
					if($(this).is(':checked')){					
						$(this).parent().removeClass('has-error');	
					}else{
						$(this).parent().addClass('has-error');	
						returnFalse = true;				
					}	
				}else{
					if($(this).val().length > minChar){					
						$(this).parent().removeClass('has-error');	
					}else{
						$(this).parent().addClass('has-error');	
						returnFalse = true;					
					}	
				}
			});
			if(returnFalse === true){
				if(!$('.alert-wrap').length){
					$(ui.step).prepend('<div class="alert-wrap"><div class="alert alert-danger"><strong>Error:</strong> One or more required fields are empty!</div></div>');
				}
				return false;
			}else{
				$(ui.step).find('.alert-wrap').remove();	
			}
		
		}
	});	

	/* --------------------------------------------------------------------- */
	
	/**
	 * Name        : Flag replace
	 * Description : Switch between flags(dropdown)
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  : jQuery core
	 * Developer   : Mark	 
	**/
	
	$('.ext-flags a').click(function(e){
		// notice we change the icon size by using javascript replace
		var img = $(this).children('img').attr('src').replace('24','16');
		$(this).parents('.dropdown, .dropup').children('.dropdown-toggle').children('img').attr('src',img);
		$(this).parents('.dropdown-menu').find('.active').removeClass('active');
		$(this).parent('li').addClass('active');
		
		e.preventDefault();
	});
	
	/* --------------------------------------------------------------------- */
	
	/**
	 * Name        : Avoid console errors
	 * Description : Avoid console errors in browsers that lack a console.
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  : 
	 * Developer   : Mark	 
	**/
	
	if (!(window.console && console.log)) {
		(function() {
			var noop = function() {};
			var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
			var length = methods.length;
			var console = window.console = {};
			while (length--) {
				console[methods[length]] = noop;
			}
		}());
	}		
});
