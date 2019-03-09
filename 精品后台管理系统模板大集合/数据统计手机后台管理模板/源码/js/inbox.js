var Inbox = function () {

    var main_content = $('.emailContent');
	/*-----------------------------------------------------------------------------------*/
	/*	Show single email view
	/*-----------------------------------------------------------------------------------*/
    var showSingleEmail = function (el, name, resetMenu) {
        var url = 'inbox_email.html';
        main_content.html('');
        toggleButton(el);        
        $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function(res) 
            {
                toggleButton(el);               
                main_content.html(res);                
                App.initUniform();
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        });
    }

	/*-----------------------------------------------------------------------------------*/
	/*	Show WYSIWYG Editor
	/*-----------------------------------------------------------------------------------*/
    var showWYSIWYG = function () {
		function initToolbarBootstrapBindings() {
		  var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier', 
				'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
				'Times New Roman', 'Verdana'],
				fontTarget = $('[title=Font]').siblings('.dropdown-menu');
		  $.each(fonts, function (idx, fontName) {
			  fontTarget.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '</a></li>'));
		  });
		  $('a[title]').tooltip({container:'body'});
			$('.dropdown-menu input').click(function() {return false;})
				.change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
			.keydown('esc', function () {this.value='';$(this).change();});

		  $('[data-role=magic-overlay]').each(function () { 
			var overlay = $(this), target = $(overlay.data('target')); 
			overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
		  });
		  if ("onwebkitspeechchange"  in document.createElement("input")) {
			var editorOffset = $('#editor').offset();
			$('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
		  } else {
			$('#voiceBtn').hide();
		  }
		};
		function showErrorAlert (reason, detail) {
			var msg='';
			if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
			else {
				console.log("error uploading file", reason, detail);
			}
			$('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+ 
			 '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
		};
		initToolbarBootstrapBindings();  
		$('#editor').wysiwyg({ fileUploadError: showErrorAlert} );
    }
	
	/*-----------------------------------------------------------------------------------*/
	/*	Show Inbox view
	/*-----------------------------------------------------------------------------------*/
	var showInbox = function (el, name) {
        var url = 'inbox_main.html';      
        main_content.html('');
        toggleButton(el);
        $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function(res) 
            {
                toggleButton(el);               
                main_content.html(res);
                App.initUniform();
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        });
    }
	
	/*-----------------------------------------------------------------------------------*/
	/*	Show email reply view
	/*-----------------------------------------------------------------------------------*/
	var showEmailReply = function (el) {
        var url = 'inbox_email_reply.html'; 
        main_content.html('');
        toggleButton(el);
        $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function(res) 
            {
                toggleButton(el);               
                main_content.html(res);
                handleCCControl();
				handleCCBCC();
                showWYSIWYG();
				$('#editor').html($('#reply-content').html());
				$('#reply-content').hide();                
                App.initUniform();
				$('#editor').focus();
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        });
    }
	/*-----------------------------------------------------------------------------------*/
	/*	Show Compose view
	/*-----------------------------------------------------------------------------------*/
    var showCompose = function (el) {
        var url = 'inbox_compose.html';       
        main_content.html('');
        toggleButton(el);
        $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function(res) 
            {
                toggleButton(el);               
                main_content.html(res);
                showWYSIWYG();
				handleCCBCC();
                $('#editor').focus();                
                App.initUniform();
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        });
    }
	/*-----------------------------------------------------------------------------------*/
	/*	Show Compose view
	/*-----------------------------------------------------------------------------------*/
	var handleCCBCC = function () {
        $('.emailCompose .address').on('click', '.emailCC', function () {
            handleCCControl();
        });
        $('.emailCompose .address').on('click', '.emailBCC', function () {
            handleBCCControl();
        });
	}
	/*-----------------------------------------------------------------------------------*/
	/*	Show Compose view
	/*-----------------------------------------------------------------------------------*/
    var handleCCControl = function () {
        var the = $('.emailCompose .address .emailCC');
        var input = $('.emailCompose .inputCC');
        the.hide();
        input.show();
        $('.close', input).click(function () {
            input.hide();
            the.show();
        });
    }
	/*-----------------------------------------------------------------------------------*/
	/*	Show Compose view
	/*-----------------------------------------------------------------------------------*/
    var handleBCCControl = function () {
        var the = $('.emailCompose .address .emailBCC');
        var input = $('.emailCompose .inputBCC');
        the.hide();
        input.show();
        $('.close', input).click(function () {
            input.hide();
            the.show();
        });
    }

	/*-----------------------------------------------------------------------------------*/
	/*	Toggle button
	/*-----------------------------------------------------------------------------------*/
    var toggleButton = function(el) {
        if (typeof el == 'undefined') {
            return;
        }
        if (el.attr("disabled")) {
            el.attr("disabled", false);
        } else {
            el.attr("disabled", true);
        }
    }

    return {
        init: function () {
			
			/* Show main inbox screen */
            $('.emailNav > li.inbox > a').click(function () {
                showInbox($(this), 'inbox');
            });

            /* Show compose screen */
            $('.email .composeBtn').on('click', 'a', function () {
                showCompose($(this));
            });

            /* Show email reply screen */
            $('.email').on('click', '.replyBtn', function () {
                showEmailReply($(this));
            });

            /* Show single email screen */
            $('.emailContent').on('click', '.viewEmail', function () {
                showSingleEmail($(this));
            });

            /* Handle CC control links */
            $('.emailCompose .address').on('click', '.emailCC', function () {
                handleCCControl();
            });

            /* Handle BCC control links */
            $('.emailCompose .address').on('click', '.emailBCC', function () {
                handleBCCControl();
            });
			
			/* Show main inbox for the first load */
			$('.emailNav > li.inbox > a').click();
        }
    };

}();