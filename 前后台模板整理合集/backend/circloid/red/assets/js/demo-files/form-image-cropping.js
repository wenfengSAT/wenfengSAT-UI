///////////////////////////////////
// Form Image Cropping Functions //
///////////////////////////////////

"use strict";

$(document).ready(function(){

	/**
	 * circloidImageCropWithPreview image cropping with preview
	 */
	function circloidImageCropWithPreview(){
		// Create variables (in this scope) to hold the API and image size
		var jcrop_api,
		boundx,
		boundy,

		// Grab some information about the preview pane
		$preview = $('#preview-pane'),
		$pcnt = $('#preview-pane .preview-container'),
		$pimg = $('#preview-pane .preview-container img'),

		xsize = $pcnt.width(),
		ysize = $pcnt.height();

		$('#image-crop-with-preview-image').Jcrop({
			onChange: updatePreview,
			onSelect: updatePreview,
			aspectRatio: xsize / ysize
		},function(){
			// Use the API to get the real image size
			var bounds = this.getBounds();
			boundx = bounds[0];
			boundy = bounds[1];
			 // Store the API in the jcrop_api variable
			 jcrop_api = this;

			// Move the preview into the jcrop container for css positioning
			$preview.appendTo(jcrop_api.ui.holder);
		});

		function updatePreview(c){
			if (parseInt(c.w) > 0){
				var rx = xsize / c.w;
				var ry = ysize / c.h;

				$pimg.css({
					width: Math.round(rx * boundx) + 'px',
					height: Math.round(ry * boundy) + 'px',
					marginLeft: '-' + Math.round(rx * c.x) + 'px',
					marginTop: '-' + Math.round(ry * c.y) + 'px'
				});
			}
		};
	}

	/**
	 * circloidImageCropAlt handles image cropping demo with details
	 */
	function circloidImageCropAlt(){

		var jcrop_api;

		$('#image-crop-with-event-handler-image').Jcrop({
			onChange:   showCoords,
			onSelect:   showCoords,
			onRelease:  clearCoords
		},function(){
			jcrop_api = this;
		});

		$('#coords').on('change','input',function(e){
			var x1 = $('#x1').val(),
			x2 = $('#x2').val(),
			y1 = $('#y1').val(),
			y2 = $('#y2').val();
			jcrop_api.setSelect([x1,y1,x2,y2]);
		});

		// Simple event handler, called from onChange and onSelect
		// event handlers, as per the Jcrop invocation above
		function showCoords(c){
			$('#x1').val(c.x);
			$('#y1').val(c.y);
			$('#x2').val(c.x2);
			$('#y2').val(c.y2);
			$('#w').val(c.w);
			$('#h').val(c.h);
		};

		function clearCoords(){
			$('#coords input').val('');
		};
	}

	/* Call Functions: circloidImageCropWithPreview(), circloidImageCropAlt() */
	circloidImageCropWithPreview();
	circloidImageCropAlt();
});