	
	$(function() {
		// gallery grid
		tisa_freewall.gallery_grid();
		// lightbox
		tisa_image_lightbox.init();
	})
	
	// freewal grid
	tisa_freewall = {
		gallery_grid: function() {
			// check if all images have finished loading and then init freewall
			imagesLoaded('.freewall_item > img', function() {
				$('#galery_grid_toolbar').show();
				gallery_wall = new freewall("#gallery_grid");
				gallery_wall.reset({
					selector: '.freewall_item',
					animate: true,
					cellW: 220,
					cellH: 'auto',
					onResize: function() {
						gallery_wall.fitWidth();
					}
				});
				gallery_wall.fitWidth();
				$(window).trigger("resize");
				
				$('.freewall_item').on('mouseenter', function() {
					if (!$(this).hasClass('.item_selected')) {
						$(this).children('.item_overlay').addClass('show_overlay');
					}
				}).on('mouseleave', function() {
					if (!$(this).hasClass('.item_selected')) {
						$(this).children('.item_overlay').removeClass('show_overlay');
					}
				})
				
				$('.freewall_item .item_select').on('click', function(e) {
					e.preventDefault();
					$(this).closest('.freewall_item').toggleClass('item_selected');
					$(this).children('.fa').toggleClass('fa-square-o fa-check-square-o');
				})
				
				$("#gallery_grid_filters button").click(function() {
					$("#gallery_grid_filters button").removeClass("btn-info").addClass('btn-default');
					var filter = $(this).toggleClass('btn-default btn-info').data('filter');
					if (filter) {
						gallery_wall.filter(filter);
					} else {
						gallery_wall.unFilter();
					}
				});
			})
		}
	}
	
	// img grid lightbox
	tisa_image_lightbox  = {
		init: function() {
			if ($('.freewall_item .item_preview').length) {
				$('.freewall_item .item_preview').magnificPopup({
					type: 'image',
					gallery:{
						enabled: true,
						arrowMarkup: '<i title="%title%" class="glyphicon glyphicon-chevron-%dir% mfp-nav"></i>'
					},
					removalDelay: 500, //delay removal by X to allow out-animation
					callbacks: {
						beforeOpen: function() {
						   // just a hack that adds mfp-anim class to markup 
						   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						   this.st.mainClass = 'mfp-zoom-in';
						}
					},
					closeOnContentClick: true,
					midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
				});
			}
		}
	}