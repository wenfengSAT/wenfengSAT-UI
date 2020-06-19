;(function ( $, window, document, undefined ) {
	function Plugin (options) {
		var defaults = {
			position: "bottom right",
			content:' ',
			delay:3000,
			sticky:false,
			inEffect:'fadeIn',
			outEffect:'fadeOut',
			theme:'default',
			themeTemplate:null,
			closeOnClick:true,
			closeButton:false,
			clearAll:false,
			beforeStart:function(){},
			afterEnd:function(){},
			// Dont Change Below
			wrapper :'.amaran-wrapper'
		};
		this.config = $.extend( {}, defaults, options );
		this.init();
		this.config.beforeStart();
		this.createElements();
		this.close();
	}
	Plugin.prototype = {
		init: function () {
		},
		createElements:function(){
			var wrapper = null;
			if(!$(this.config.wrapper).length){
				wrapper= $("<div>", {
					'class': this.config.wrapper.substr(1,this.config.wrapper.length)+' '+this.config.position
				}).appendTo('body');
			}else {
				if(!$(this.config.wrapper).hasClass(this.config.position)){
					wrapper = $("<div>",{
						'class': this.config.wrapper.substr(1,this.config.wrapper.length)+' '+this.config.position
					}).appendTo('body');
				}else{
					var cls = this.config.position.split(' '),
						wrapper = $(this.config.wrapper +'.'+cls[0]+'.'+cls[1]);
				}
			}
			var message = (typeof(this.config.content)=='object') ? (this.config.themeTemplate!=null) ? this.config.themeTemplate(this.config.content) : themes[this.config.theme.split(' ')[0]+'Theme'](this.config.content) : this.config.content;			
			var amaranObject={
				'class'	: (this.config.theme) ? 'amaran '+this.config.theme : 'amaran',
				'html'	: (this.config.closeButton) ? '<span class="amaran-close"><i class="fa fa-times-circle"></i></span>'+message : message
			};
			if(this.config.clearAll){ $('.amaran').remove(); } 
			var element=$("<div>",
				amaranObject
			).appendTo(wrapper);			
			this.animation(this.config.inEffect,element,'show');
			if(this.config.sticky!==true){this.hideDiv(element);}
		},
		getWidth:function(el){
			var newEl=el.clone().hide().appendTo('body'),
				// Getting margin value from element is pain except chrome so let it fly 
				newElWidth=newEl.outerWidth()+newEl.outerWidth()/2;
				//Right way is newElWidth=newEl.outerWidth()+parseInt(el.css('margin'));
			newEl.remove();
			return newElWidth;
		},
		getInfo:function(element){
			var offset =element.offset(),
				wrapperOffset = $(this.config.wrapper).offset();
			return {
				t:offset.top,
				l:offset.left,
				h:element.height(),
				w:element.outerWidth(),
				wT:wrapperOffset.top,
				wL:wrapperOffset.left,
				wH:$(this.config.wrapper).outerHeight(),
				wW:$(this.config.wrapper).outerWidth()
			};
		},
		getPosition:function(element,effect){
			var p = this.getInfo(element),
				parca = this.config.position.split(' ')[1],
			 	v = {
					slideTop:{
						start: 	{top:-(p.wT+p.wH+p.h*2)},
						move: 	{top:0},
						hide: 	{top:-(p.t+(p.h*2))},
						height: p.h
					},
					slideBottom:{
						start: 	{top:($(window).height()-p.wH+p.h*2)},
						move: 	{top:0},
						hide: 	{top:($(window).height()+(p.h*2))},
						height: p.h
					},
					slideLeft:{
						start: 	{left:(parca=='left') ? -p.w*1.5 : -$(window).width()},
						move: 	{left:0},
						hide: 	{left:(parca=='left') ? -p.w*1.5 : -$(window).width()},
						height: p.h
					},
					slideRight:{
						start: 	{left:(parca=='right') ? p.w*1.5 : $(window).width()},
						move: 	{left:0},
						hide: 	{left:(parca=='right') ? p.w*1.5 : $(window).width()},
						height: p.h
					}
				};
			return v[effect] ? v[effect] : 0;
		},
		animation:function(effect,element,work){
			if(effect=='fadeIn' || effect=='fadeOut')
			{
				return this.fade(element,work)
			}
			return  this.slide(effect,element,work);
		},
		fade:function(element,work){
			if(work=='show'){
				element.fadeIn();
			}else{
				element.css({"min-height":0,"height":element.outerHeight()});
				element.animate({'opacity':0},function(){
					element.animate({height:0},function(){
						element.remove();
					});	
				});
			}
		},
		slide:function(effect,element,work){
			var position = this.getPosition(element,effect);
			if(work=='show'){
				element.show().css(position.start).animate(position.move);
			}else{
				var bu=this;
				element.animate(position.hide,function(){
					element.css({
						'min-height':0,
						'height':position.height
					},function(){
						element.html(' ');
					});
				}).animate({height:0},function(){
					element.remove();
					bu.config.afterEnd();
				});
			}
		},
		close:function()
		{
			var bu = this;
			if(!this.config.closeOnClick && this.config.closeButton){
				$('.amaran-close').on('click',function(){
					bu.animation(bu.config.outEffect,$(this).parent('div.amaran'),'hide');
				});
			}else if(this.config.closeOnClick){
				$('.amaran').on('click',function(){ 
					bu.animation(bu.config.outEffect,$(this),'hide');
				});
			}	
		},
		hideDiv:function(element){
			var bu = this;
			setTimeout(function(){ bu.animation(bu.config.outEffect,element,'hide');}, bu.config.delay);		
		}	
	};	
	var themes={
        defaultTheme:function(data){
            var color = '';
            if (typeof(data.color) !== 'undefined'){ color = data.color;}
            return "<div class='default-spinner'><span style='background-color:"+data.color+"'></span></div><div class='default-message'><span>"+data.message+"</span></div>";
        },
		awesomeTheme:function(data){
			return '<i class="icon '+data.icon+' icon-large"></i><p class="bold">'+data.message+'</p><p><span>'+data.size+'</span><span class="light">'+data.file+'</span></p>';
		},
		userTheme:function(data){
			return '<div class="icon"><img src="'+data.img+'" alt="" /></div><div class="info"><b>'+data.user+'</b>'+data.message+'</div>';
		},
		blurTheme:function(data){
			return '<h2>'+data.title+'</h2><div class="message">'+data.message+'</div>';
		},
		roundedTheme:function(data){
			return "<img src='"+data.img+"' alt='user'>";
		},
		readmoreTheme:function(data){
			return '<img src="'+data.img+'" alt="" class="readmore-user"><div class="title">'+data.title+'</div><div class="content">'+data.content+'</div>';
		}
	};
	$.amaran = function ( options ) {
		var amaran=new Plugin(options);
		return amaran;
	};
	$.amaran.close=function(){
		$('.amaran-wrapper').remove();
		return false;	
	};
})( jQuery, window, document );