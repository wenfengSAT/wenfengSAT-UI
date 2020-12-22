$(function(){
    $('.top-link').click(function () {
        $('body,html').animate({scrollTop:0},1000);
    });

	var winEl = $(window);

	/*banner*/
	(function(){
		var bgnavEl = $('#bgnav'),
			headerEl = $('#header'),
			curIndex = 0,
			bglen = $('>span', bgnavEl).length,
			handler;

		function chooseBg(index){
			$('>span:eq('+index+')', bgnavEl).addClass('cur').siblings().removeClass('cur');

			var curBg = $('.bg:eq('+index+')', headerEl);
			curBg.addClass('cur animated '+curBg.data('animate')).siblings('.bg').each(function(){
				var self = $(this);

				self.removeClass('cur animated '+self.data('animate'));
			});

			curIndex++;
			if(curIndex >= bglen){
				curIndex = 0;
			}

			clearTimeout(handler);
			handler = setTimeout(function(){
				chooseBg(curIndex);
			}, 2000);
		}

		$('>span', bgnavEl).click(function(){
			chooseBg($(this).index());
		});

		chooseBg(curIndex);
	})();

	/*滚动监听*/
	winEl.scroll(function(){
		/*animate*/
		$('.scrollanimate').each(function(){
			var self = $(this);

			if(!self.data('initanimate') && (winEl.scrollTop()+winEl.height() >= self.offset().top)){
				var delay = self.data('delay');

				if(delay){
					$('>div',self).each(function(){
						var cur = $(this);

						setTimeout(function(){
							cur.css({opacity:1});

							$('img',cur).addClass('animated fadeInDown');
							$('h3,div',cur).addClass('animated fadeInUp');
						},delay*cur.index());

						self.data('initanimate',true);
					});
				}else{
					self.addClass('animated '+self.data('animate')).data('initanimate',true);
				}
			}
		});
	}).scroll();

	/*banner图hover效果*/
	$('#header').mousemove(function(event){
		var self = $(this),
			navH = $('#nav').outerHeight(),
			headerW = self.width()/2,
			headerH = (self.height()-navH)/2,
			rotateX = (1-event.pageX/headerW)*15,
			rotateY = (1-(event.pageY-navH)/headerH)*10;

		$(".imgtransform").each(function(){
			$(this).css({left:rotateX, top:rotateY});
		});
	});


	//缓存sourceid
	var sourceid = parseURL(location.href).params.sourceid;
	if(sourceid){
		localStorage.setItem('sourceid',sourceid);
	}



});