	
	$(function() {
		// image zoom
		tisa_image_zoom.init();
	})
	
	// image zoom
	tisa_image_zoom = {
		init: function() {
			$("#zoom_inner").elevateZoom({
				zoomType: "inner",
				cursor: "crosshair",
				responsive: true
			});
			
			$("#zoom_lens").elevateZoom({
				zoomType: "lens",
				lensShape : "round",
				lensSize: 160,
				borderSize: 2,
				borderColour: '#333',
				containLensZoom: true,
				responsive: true
			});
		}
	}