	
	$(function() {
		// bootbox
		tisa_bootbox.init();
		// lightbox
		tisa_magnific.single_img();
		tisa_magnific.gallery_img();
	})
	
	
	// bootbox
	tisa_bootbox = {
		init: function() {
			$('.bootbox_alert').click(function() {
				bootbox.alert("Hello world!", function() {
					// callback
				});
			})
			$('.bootbox_confirm').click(function() {
				bootbox.confirm("Are you sure?", function(result) {
					if (!result) {
						noty({
							text: "Clicked <strong>Cancel</strong>",
							type: 'alert',
							theme: 'tisa_theme',
							layout: 'topCenter',
							killer: true,
							timeout: 5000
						});
					} else {
						noty({
							text: "Clicked <strong>OK</strong>",
							type: 'success',
							theme: 'tisa_theme',
							layout: 'topCenter',
							killer: true,
							timeout: 5000
						});
					}
				});
			})
			$('.bootbox_prompt').click(function() {
				bootbox.prompt("What is your name?", function(result) {
					if (result === null) {
						noty({
							text: "Prompt dismissed",
							type: 'alert',
							theme: 'tisa_theme',
							layout: 'topCenter',
							closeWith: ['button'],
							killer: true,
							timeout: 5000
						});
					} else {
						noty({
							text: "Hi <strong>"+result+"</strong>",
							type: 'success',
							theme: 'tisa_theme',
							layout: 'topCenter',
							closeWith: ['button'],
							killer: true,
							timeout: 5000
						});
					}
				});
			})
			$('.bootbox_custom_html').click(function() {
				var custom_html = '<h2>Custom Html</h2><br />';
				custom_html += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quasi recusandae est velit aliquam odio provident repellat voluptatem exercitationem error omnis nostrum libero rerum dolor doloribus autem consectetur nisi doloremque.</p>';
				
				bootbox.confirm(custom_html, function(result) {
					// callback
				});
			})
			
			
			
		}
	}

	// lightbox
	tisa_magnific = {
		single_img: function() {
			if ($('.mf_single_img').length) {
				$('.mf_single_img').magnificPopup({ 
					type: 'image',
					removalDelay: 500,
					callbacks: {
						beforeOpen: function() {
						   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						   this.st.mainClass = 'mfp-zoom-in';
						}
					},
					closeOnContentClick: true,
					midClick: true
				});
			}
		},
		gallery_img: function() {
			if ($('.mf_gallery').length) {
				console.log($('.mf_gallery'));
				$('.mf_gallery .gallery_item').magnificPopup({
					type: 'image',
					gallery:{
						enabled: true,
						arrowMarkup: '<i title="%title%" class="glyphicon glyphicon-chevron-%dir% mfp-nav"></i>'
					},
					removalDelay: 500,
					callbacks: {
						beforeOpen: function() {
						   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						   this.st.mainClass = 'mfp-zoom-in';
						}
					},
					closeOnContentClick: true,
					midClick: true
				});
			}
		}
	}
