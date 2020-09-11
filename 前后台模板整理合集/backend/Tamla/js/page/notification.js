$(function() {
    "use strict";

            /*notific8 function*/
                    $('#notific8_show').click(function(event) {
                        var settings = {
                                theme: $('#notific8_theme').val(),
                                sticky: $('#notific8_sticky').is(':checked'),
                                horizontalEdge: $('#notific8_pos_hor').val(),
                                verticalEdge: $('#notific8_pos_ver').val()
                            },
                            $button = $(this);
                        
                        if ($.trim($('#notific8_heading').val()) != '') {
                            settings.heading = $.trim($('#notific8_heading').val());
                        }
                        
                        if (!settings.sticky) {
                            settings.life = $('#notific8_life').val();
                        }

                        $.notific8('zindex', 11500);
                        $.notific8($.trim($('#notific8_text').val()), settings);
                        
                        $button.attr('disabled', 'disabled');
                        
                        setTimeout(function() {
                            $button.removeAttr('disabled');
                        }, 1000);

                    });
			
/*Toastr Function*/			
		 $(function () {
        var i = -1;
        var toastCount = 0;
        var $toastlast;

        var getMessage = function () {
            var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
                '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
                'Are you the six fingered man?',
                'Inconceivable!',
                'I do not think that means what you think it means.',
                'Have fun storming the castle!'
            ];
            i++;
            if (i === msgs.length) {
                i = 0;
            }

            return msgs[i];
        };
        $('#showtoast').click(function () {
            var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
            var msg = $('#message').val();
            var title = $('#title').val() || '';
            var $showDuration = $('#showDuration');
            var $hideDuration = $('#hideDuration');
            var $timeOut = $('#timeOut');
            var $extendedTimeOut = $('#extendedTimeOut');
            var $showEasing = $('#showEasing');
            var $hideEasing = $('#hideEasing');
            var $showMethod = $('#showMethod');
            var $hideMethod = $('#hideMethod');
            var toastIndex = toastCount++;

            toastr.options = {
                closeButton: $('#closeButton').prop('checked'),
                debug: $('#debugInfo').prop('checked'),
                positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
                onclick: null
            };

            if ($('#addBehaviorOnToastClick').prop('checked')) {
                toastr.options.onclick = function () {
                    alert('You can perform some custom action after a toast goes away');
                };
            }

            if ($showDuration.val().length) {
                toastr.options.showDuration = $showDuration.val();
            }

            if ($hideDuration.val().length) {
                toastr.options.hideDuration = $hideDuration.val();
            }

            if ($timeOut.val().length) {
                toastr.options.timeOut = $timeOut.val();
            }

            if ($extendedTimeOut.val().length) {
                toastr.options.extendedTimeOut = $extendedTimeOut.val();
            }

            if ($showEasing.val().length) {
                toastr.options.showEasing = $showEasing.val();
            }

            if ($hideEasing.val().length) {
                toastr.options.hideEasing = $hideEasing.val();
            }

            if ($showMethod.val().length) {
                toastr.options.showMethod = $showMethod.val();
            }

            if ($hideMethod.val().length) {
                toastr.options.hideMethod = $hideMethod.val();
            }

            if (!msg) {
                msg = getMessage();
            }

            $("#toastrOptions").text("Command: toastr["
                            + shortCutFunction
                            + "](\""
                            + msg
                            + (title ? "\", \"" + title : '')
                            + "\")\n\ntoastr.options = "
                            + JSON.stringify(toastr.options, null, 2)
            );

            var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
            $toastlast = $toast;
            if ($toast.find('#okBtn').length) {
                $toast.delegate('#okBtn', 'click', function () {
                    alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                    $toast.remove();
                });
            }
            if ($toast.find('#surpriseBtn').length) {
                $toast.delegate('#surpriseBtn', 'click', function () {
                    alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
                });
            }
        });
        function getLastToast(){
            return $toastlast;
        }
        $('#clearlasttoast').click(function () {
            toastr.clear(getLastToast());
        });
        $('#cleartoasts').click(function () {
            toastr.clear();
        });
    })
	
/*Amran JS*/	
$(document).ready(function() {
   
    $.amaran({
        content:{
            message:'Your Download is Ready!',
            size:'1.4 GB',
            file:'my_birthday.mp4',
            icon:'fa fa-download'
            //eq : fa fa-cogs
        },
        // type :  error , warning or ok.Default is error.
        theme:'default ok',
        position:'bottom right',
        inEffect:'slideBottom',
        outEffect:'slideTop'
    });


    $.amaran({
      content:{
            img:'images/pruthvi.jpg',
            user:'John Doe',
            message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ducimus?'
           },
      position:'top left',
      inEffect:'slideBottom',
      outEffect:'slideLeft',
      theme:'user green',
      closeButton:true
    });  
    $('#example-1').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default ok',
            position:'bottom right',
            inEffect:'slideBottom',
            outEffect:'slideTop'
        });
    });
    $('#example-2').on('click',function(){
        $.amaran({
            content:{
                message:'An error ocurred',
                size:'Please try again later.',
                file:'ERRORNO::3250',
                icon:'fa fa-times'
            },
            theme:'default error',
            position:'top right',
            inEffect:'slideRight',
            outEffect:'slideRight'
        });
    });
    $('#example-3').on('click',function(){
        $.amaran({
            content:{
                message:'New droplet created!',
                size:'Happy coding',
                file:'Ubuntu 12.04 4GB Memory',
                icon:'fa fa-tint'
            },
            theme:'default purple',
            position:'bottom left',
            inEffect:'slideTop',
            outEffect:'slideRight'
        });
    });
    $('#example-4').on('click',function(){
        $.amaran({
            content:{
                message:'You have new mail!',
                size:'Limited Time: Save 25%',
                file:'sales@example.com',
                icon:'fa fa-envelope'
            },
            theme:'default yellow',
            position:'top left',
            inEffect:'slideBottom',
            outEffect:'slideTop'
        });
    });
    $('#example-5').on('click',function(){
        $.amaran({
            content:{
                message:'You have new mail!',
                size:'Limited Time: Save 25%',
                file:'sales@example.com',
                icon:'fa fa-envelope'
            },
            theme:'default yellow',
            position:'top left',
            inEffect:'fadeIn',
            outEffect:'fadeOut'
        });
    });
    $('#example-6').on('click',function(){
        $.amaran({
            content:{
                message:'You have new mail!',
                size:'Limited Time: Save 25%',
                file:'sales@example.com',
                icon:'fa fa-envelope'
            },
            theme:'default error',
            position:'top left',
            inEffect:'slideBottom',
            outEffect:'fadeOut'
        });
    });
    $('#example-7').on('click',function(){
        $.amaran({
            content:{
                message:'You have new mail!',
                size:'Limited Time: Save 25%',
                file:'sales@example.com',
                icon:'fa fa-envelope'
            },
            theme:'default warning',
            position:'top left',
            inEffect:'slideTop',
            outEffect:'fadeOut'
        });
    });
    $('#example-8').on('click',function(){
        $.amaran({
            content:{
                message:'You have new mail!',
                size:'Limited Time: Save 25%',
                file:'sales@example.com',
                icon:'fa fa-envelope'
            },
            theme:'default blue',
            position:'top left',
            inEffect:'slideRight',
            outEffect:'fadeOut'
        });
    });
    $('#example-9,#example-11').on('click',function(){
        $.amaran({
            content:{
                message:'You have new mail!',
                size:'Limited Time: Save 25%',
                file:'sales@example.com',
                icon:'fa fa-envelope'
            },
            theme:'default green',
            position:'top left',
            inEffect:'slideLeft',
            outEffect:'fadeOut'
        });
    });
    $('#example-12').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default green',
            position:'top left',
            inEffect:'fadeIn',
            outEffect:'slideBottom'
        });
    });
    $('#example-13').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default green',
            position:'top left',
            inEffect:'fadeIn',
            outEffect:'slideTop'
        });
    });
    $('#example-14').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default green',
            position:'top left',
            inEffect:'fadeIn',
            outEffect:'slideRight'
        });
    });
    $('#example-15').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default green',
            position:'top left',
            inEffect:'fadeIn',
            outEffect:'slideLeft'
        });
    });
    $('#example-16').on('click',function(){
        $.amaran({
            content:{
                message:'This is "default theme"!',
                size:'With fontawesome icons',
                file:'This third line',
                icon:'fa fa-bug'
            },
            theme:'default green',
            position:'top left',
            inEffect:'fadeIn',
            outEffect:'slideLeft'
        });
    });
    $('#example-17').on('click',function(){
        $.amaran({
          content:{
                img:'images/chintan.jpg',
                user:'Richard Doe',
                message:'Lorem ipsum dolor sit amet'
               },
          position:'top left',
          inEffect:'slideBottom',
          outEffect:'slideLeft',
          theme:'user blue',
          closeButton:true
        });
    });
    $('#example-18').on('click',function(){
        $.amaran({
          content:{
                title:'This is Title!',
                message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, possimus?'
               },
          position:'top left',
          inEffect:'slideBottom',
          outEffect:'slideLeft',
          theme:'blur ',
          closeButton:true
        });
    });
    $('#example-19').on('click',function(){
        $.amaran({
            content:{
                message:'<h2>Updates are avalaible for your PC</h2><p>Go to Windows Update to install updates!</p>',
                buttons:'<a href="http://google.com">Install</a><a href="#" class="amaran-close-all" onclick="$.amaran.close()">Close</a>',
                background:'#8C0095'
            },
            position:'center center',
            inEffect:'fadeIn',
            outEffect:'slideTop',
            theme:'metro',
            sticky:true,
            clearAll:true
        });
    });
    $('#example-20').on('click',function(){
        $.amaran({
            content:{
                img:'images/chintan.jpg'
            },
            position:'bottom right',
            inEffect:'slideBottom',
            outEffect:'slideTop',
            theme:'rounded',
            clearAll:true
        });
    });
    $('#example-21').on('click',function(){
        $.amaran({
            content:{
                img:'images/pruthvi.jpg',
                title:'Do you like this post ?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, quisquam!'
            },
            position:'bottom right',
            inEffect:'slideBottom',
            outEffect:'slideRight',
            theme:'readmore'
        });
    });
    $('#example-22').on('click',function(){
        $.amaran({
          content:{
                img:'images/pruthvi.jpg',
                user:'John Doe',
                message:'Lorem ipsum Dolar sit amet'
               },
          position:'top left',
          inEffect:'slideBottom',
          outEffect:'slideLeft',
          theme:'user green',
          delay:10000
        });
    });
    $('#example-23').on('click',function(){
        $.amaran({
          content:{
                img:'images/pruthvi.jpg',
                user:'John Doe',
                message:'Hey this is a sticky notification.'
               },
          position:'top left',
          inEffect:'slideBottom',
          outEffect:'slideLeft',
          theme:'user green',
          sticky:true
        });
    });
    $('#example-24').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default ok',
            position:'top left',
            inEffect:'slideBottom',
            outEffect:'slideTop',
            sticky:true
        });
    });
    $('#example-25').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default ok',
            position:'top left',
            inEffect:'slideBottom',
            outEffect:'slideTop',
            sticky:true,
            closeOnClick:false
        });
    });
    $('#example-26').on('click',function(){
        $.amaran({
            content:{
                message:'Your Download is Ready!',
                size:'1.4 GB',
                file:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'default ok',
            position:'top left',
            inEffect:'slideBottom',
            outEffect:'slideTop',
            sticky:true,
            closeOnClick:false,
            closeButton:true,
            clearAll:true
        });
    });
    $('#example-27').on('click',function(){
        $( "#example-26" ).trigger( "click" );
        $( "#example-25" ).trigger( "click" );
        $( "#example-24" ).trigger( "click" );
        $( "#example-23" ).trigger( "click" );
        $( "#example-22" ).trigger( "click" );
    });
    $('#example-28').on('click',function(){
        $.amaran({
            content:{
                message:'An error ocurred',
                size:'Please try again later.',
                file:'ERRORNO::3250',
                icon:'fa fa-times'
            },
            theme:'default error',
            position:'top left',
            inEffect:'slideRight',
            outEffect:'slideTop',
            clearAll:true
        });
    });
    $('#example-29').on('click',function(){
        $.amaran({
            content:{
                message:'An error ocurred',
                size:'Please try again later.',
                file:'ERRORNO::3250',
                icon:'fa fa-times'
            },
            theme:'default error',
            position:'top left',
            inEffect:'slideRight',
            outEffect:'slideTop',
            beforeStart:function(){
                alert("Hey!");
            }
        });
    });
    $('#example-30').on('click',function(){
        $.amaran({
            content:{
                message:'An error ocurred',
                size:'Please try again later.',
                file:'ERRORNO::3250',
                icon:'fa fa-times'
            },
            theme:'default error',
            position:'top left',
            inEffect:'slideRight',
            outEffect:'slideTop',
            afterEnd:function(){
                alert("What's UP Bro!");
            }
        });
    });
     
});

/*OWL NOTIFICATION FUNCTIONS*/
	//The following code is only used in the demo!
		$(document).ready(function() {			
			$('#standard').click(function() {
				$.notification( 
					{
						title: "This is the Owl plugin",
						content: "Pretty cool, huh?",
						img: "assets/notification/owl/images/thumb.png",
						border: false
					}
				);
			});
			
			
			$('#text').click(function() {
				$.notification( 
					{
						content: "This is a <strong>text notification</strong>."
					}
				);
			});
			
			$('#time').click(function() {
				$.notification( 
					{
						title: 'Notification with time',
						content: 'This notification have a time stamp.',
						showTime: true,
						icon: 'N'
					}
				);
			});
			
			$('#timeout').click(function() {
				$.notification( 
					{
						title: "Timeout notification",
						content: 'This notification will disappear in <strong>five seconds</strong>.',
						timeout: 5000,
						showTime: false,
						icon: 'N'
					}
				);
			});
			
			$('#callback').click(function() {
				$.notification( 
					{
						content: "Click on me to try the <strong>callback</strong> function",
						icon: "3",
						click: 
							function() {
								$.notification(
									{
										content: 'This notification was just created.',
										title: 'Callback!',
										icon: 'G'
									}
								);
							}
					}
				);
			});
			
			
			$('#error').click(function() {
				$.notification( 
					{
						title: "Error notification",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
						error: true
					}
				);
			});
			
			$('#fill').click(function() {
				$.notification( 
					{
						title: "Hi, Jacques Halifax",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
						img: "assets/notification/owl/images/autumn.jpg",
						fill: true,
						showTime: true
					}
				);
			});
			
			$('#vector').click(function() {
				$.notification( 
					{
						title: "West Ham secures last-minute victory against Copenhagen",
						content: "West Ham's pre-season finally began in earnest last night, as the east London club triumphed over FC Copenhagen thanks to a solitary goal from Freddie Sears.",
						icon: "M"
					}
				);
			});
		
			
			$('#custom').click(function() {	
				var title = prompt("Please enter the title of the notification","Just another title");
				var text = prompt("Please enter the the text of the notification","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim massa, euismod id sollicitudin vitae, iaculis quis erat. Duis et ligula sapien, sed varius lectus. Sed quis urna orci. Phasellus sit amet condimentum magna. Praesent lorem enim, sodales nec scelerisque eu, ultricies ac neque.");
				var icon = prompt("Please specify a vecor icon (a-z, A-Z, 0-9)","");
				
				$.notification( 
					{
						content: text,
						title: title,
						icon: icon
					}
				);
			});
			
		});

    });  