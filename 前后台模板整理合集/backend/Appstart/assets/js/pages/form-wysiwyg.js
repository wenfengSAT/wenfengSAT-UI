//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}
 	
 	//--------------- Tinymce ------------------//
	tinymce.init({
	    selector: "textarea.tinymce",
	    menubar : false,
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    toolbar: "bold italic strikethrough bullist numlist blockquote hr alignleft aligncenter alignright alignjustify link unlink code image media | fullscreen"
	});
	//in panel box
	tinymce.init({
	    selector: "textarea.tinymce-box",
	    menubar : false,
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    toolbar: "bold italic strikethrough bullist numlist blockquote hr alignleft aligncenter alignright alignjustify link unlink code image media | fullscreen"
	});
	//editable header
	tinymce.init({
	    selector: "h4.editable",
	    inline: true,
	    menubar : false,
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    toolbar: "bold italic strikethrough bullist numlist blockquote hr alignleft aligncenter alignright alignjustify link unlink code image media | fullscreen"
	});
	//editable text
	tinymce.init({
	    selector: "div.editable",
	    inline: true,
	    menubar : false,
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    toolbar: "bold italic strikethrough bullist numlist blockquote hr alignleft aligncenter alignright alignjustify link unlink code image media | fullscreen"
	});

	//modal example
	tinymce.init({
	    selector: "textarea.modal-example",
		width:      '100%',
		height:     270,
	    plugins:    [ "anchor link" ],
	    statusbar:  false,
		menubar:    false,
	    toolbar:    "link anchor | alignleft aligncenter alignright alignjustify",
		rel_list:   [ { title: 'Lightbox', value: 'lightbox' } ]
	});
	
});