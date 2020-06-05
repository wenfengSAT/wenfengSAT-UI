jQuery(document).ready(function($) {
	var galleryItems = $('.cd-gallery').children('li');

	galleryItems.each(function(){
		var container = $(this),
			// create slider dots
			sliderDots = createSliderDots(container);
		//check if item is on sale
		updatePrice(container, 0);

		// update slider when user clicks one of the dots
		sliderDots.on('click', function(){
			var selectedDot = $(this);
			if(!selectedDot.hasClass('selected')) {
				var selectedPosition = selectedDot.index(),
					activePosition = container.find('.cd-item-wrapper .selected').index();
				if( activePosition < selectedPosition) {
					nextSlide(container, sliderDots, selectedPosition);
				} else {
					prevSlide(container, sliderDots, selectedPosition);
				}

				updatePrice(container, selectedPosition);
			}
		});

		// update slider on swipeleft
		container.find('.cd-item-wrapper').on('swipeleft', function(){
			var wrapper = $(this);
			if( !wrapper.find('.selected').is(':last-child') ) {
				var selectedPosition = container.find('.cd-item-wrapper .selected').index() + 1;
				nextSlide(container, sliderDots);
				updatePrice(container, selectedPosition);
			}
		});

		// update slider on swiperight
		container.find('.cd-item-wrapper').on('swiperight', function(){
			var wrapper = $(this);
			if( !wrapper.find('.selected').is(':first-child') ) {
				var selectedPosition = container.find('.cd-item-wrapper .selected').index() - 1;
				prevSlide(container, sliderDots);
				updatePrice(container, selectedPosition);
			}
		});

		// preview image hover effect - desktop only
		container.on('mouseover', '.move-right, .move-left', function(event){
			hoverItem($(this), true);
		});
		container.on('mouseleave', '.move-right, .move-left', function(event){
			hoverItem($(this), false);
		});

		// update slider when user clicks on the preview images
		container.on('click', '.move-right, .move-left', function(event){
			event.preventDefault();
			if ( $(this).hasClass('move-right') ) {
				var selectedPosition = container.find('.cd-item-wrapper .selected').index() + 1;
				nextSlide(container, sliderDots);
			} else {
				var selectedPosition = container.find('.cd-item-wrapper .selected').index() - 1;
				prevSlide(container, sliderDots);
			}
			updatePrice(container, selectedPosition);
		});
	});

	function createSliderDots(container){
		var dotsWrapper = $('<ol class="cd-dots"></ol>').insertAfter(container.children('a'));
		container.find('.cd-item-wrapper li').each(function(index){
			var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
				dot = $('<a href="#0"></a>').appendTo(dotWrapper);
			dotWrapper.appendTo(dotsWrapper);
			dot.text(index+1);
		});
		return dotsWrapper.children('li');
	}

	function hoverItem(item, bool) {
		( item.hasClass('move-right') )
			? item.toggleClass('hover', bool).siblings('.selected, .move-left').toggleClass('focus-on-right', bool)
			: item.toggleClass('hover', bool).siblings('.selected, .move-right').toggleClass('focus-on-left', bool);
	}

	function nextSlide(container, dots, n){
		var visibleSlide = container.find('.cd-item-wrapper .selected'),
			navigationDot = container.find('.cd-dots .selected');
		if(typeof n === 'undefined') n = visibleSlide.index() + 1;
		visibleSlide.removeClass('selected');
		container.find('.cd-item-wrapper li').eq(n).addClass('selected').removeClass('move-right hover').prevAll().removeClass('move-right move-left focus-on-right').addClass('hide-left').end().prev().removeClass('hide-left').addClass('move-left').end().next().addClass('move-right');
		navigationDot.removeClass('selected')
		dots.eq(n).addClass('selected');
	}

	function prevSlide(container, dots, n){
		var visibleSlide = container.find('.cd-item-wrapper .selected'),
			navigationDot = container.find('.cd-dots .selected');
		if(typeof n === 'undefined') n = visibleSlide.index() - 1;
		visibleSlide.removeClass('selected focus-on-left');
		container.find('.cd-item-wrapper li').eq(n).addClass('selected').removeClass('move-left hide-left hover').nextAll().removeClass('hide-left move-right move-left focus-on-left').end().next().addClass('move-right').end().prev().removeClass('hide-left').addClass('move-left');
		navigationDot.removeClass('selected');
		dots.eq(n).addClass('selected');
	}

	function updatePrice(container, n) {
		var priceTag = container.find('.cd-price'),
			selectedItem = container.find('.cd-item-wrapper li').eq(n);
		if( selectedItem.data('sale') ) { 
			// if item is on sale - cross old price and add new one
			priceTag.addClass('on-sale');
			var newPriceTag = ( priceTag.next('.cd-new-price').length > 0 ) ? priceTag.next('.cd-new-price') : $('<em class="cd-new-price"></em>').insertAfter(priceTag);
			newPriceTag.text(selectedItem.data('price'));
			setTimeout(function(){ newPriceTag.addClass('is-visible'); }, 100);
		} else {
			// if item is not on sale - remove cross on old price and sale price
			priceTag.removeClass('on-sale').next('.cd-new-price').removeClass('is-visible').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				priceTag.next('.cd-new-price').remove();
			});
		}
	}
});