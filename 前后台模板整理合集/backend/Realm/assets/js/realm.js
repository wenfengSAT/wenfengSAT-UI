
$(function() {

  // toggle arrow on menu items 
  $('.accordion-heading .accordion-toggle').click(function(){
    $('.accordion-heading .accordion-toggle').not($(this)[0], '.accordion-heading .accordion-toggle.collapse').addClass('collapsed'); 
  });


  // show the overview boxes on the dashboard once they are loaded
  $('.overview_boxes .box_row').css('display', 'inline-block');

  // init tooltips on .tips class elements, text for the tooltip is in the data-title attribute on the element itself
  $('.tip').tooltip();

  // init popover on .pop class elements
  $('.pop').popover({
    title:$(this).data('title'),
    content:$(this).data('content'),
    placement:'top'
  });

  // init typehead (auto-complete)
  $('.typeahead').typeahead();

  // prevent the top menu popover links to make the window scroll up because of href="#"
  $('.visible-desktop #messages, .visible-desktop #notifications').click(function(e){
    e.preventDefault();
  });
    
    // header menu message
    $('.top-menu #messages').popover({
      html:true,
      placement: 'bottom',
      title: 'Messages',
      content:'<ul><li><a href="#"><img src="assets/img/avatars/04.jpg"><span>Today</span><h4>Bill Fernando</h4>Hey John, have you finished the report yet?</a></li><li><a href="#"><img src="assets/img/avatars/05.jpg"><span>Yesterday</span><h4>Roger White</h4>Did you talk to Andrea? She was looking for you</a></li></ul><div class="popover_footer"><a href="">View all messages</a></div>'
    });

    // header menu notifications 
    $('.top-menu #notifications').popover({
      html:true,
      placement: 'bottom',
      title: 'Notifications',
      content:'<ul><li><a href="#"><img src="assets/img/avatars/07.jpg"><span>Today</span><h4>Cody Negley</h4>Requested a vacation for 3 days.</a></li><li><a href="#"><img src="assets/img/avatars/09.jpg"><span>Yesterday</span><h4>Customer Support</h4>You have 3 new tickets assigned to you.</a></li></ul><div class="popover_footer"><a href="">View all notifications</a></div>'
    });


  // funtion to slide menu out from the left 
  $('.slide_menu_left').click(function(e){

    e.preventDefault();
    if($(".nav-collapse.collapse").hasClass('open_left')){
      sidemenu_close();
    }else{
      sidemenu_open();
      $('.main_container').bind('click', function(){
        sidemenu_close();
      });
    //   var handler = function() {
  		// 	sidemenu_close();
  		// };
	   //  $(window).bind('resize', handler);
    }
  });
	

  // collapse function for the widget
	$('.widget-buttons a.collapse').click(function(e){
    e.preventDefault();
		if($(this).attr('data-collapsed') == 'false'){
			$(this).closest('.widget').find('.widget-body').slideUp();
			$(this).attr('data-collapsed', 'true').addClass('widget-hidden');
		}else{
			$(this).closest('.widget').find('.widget-body').slideDown();
			$(this).attr('data-collapsed', 'false').removeClass('widget-hidden');
		}
	});


  // redraw charts/pies/bars if the window is resized
	var didresize = false;
	$(window).resize(function() {
		didresize = true;
	});
	setInterval(function() {
    if ( didresize ) {
        didresize = false;

        if($('#analytics_page').length > 0){ 
          redraw_analytics();
        }
        if($('#tickets_page').length > 0){ 
          redraw_tickets_analytics();
        }
        if($('#dashboard_page').length > 0){ 
          redraw_dashboard_analytics();
        }
    }
  }, 3000);


//-----  Dashboard page -----//
if($('#dashboard_page').length > 0 ){
    // init knob
    $(".knob").knob();

 

  // activate slimscroll
  $('#widget-tasks').slimScroll({
    height: '170px'
  });
  $('.slimscroll').slimScroll({height:'310px'});
  // Welcome notification

  $.gritter.add({
    // (string | mandatory) the heading of the notification
    title: 'Welcome to the Realm Admin Template',
    // (string | mandatory) the text inside the notification
    text: 'This icon <i class="icon-external-link" style="font-size:15px;"></i> represents an external link to the documentation for that specific part of the template where you see it. So click if you need more info.',
    // (string | optional) the image to display on the left
    image: 'http://profile.ak.fbcdn.net/hprofile-ak-snc6/203244_1677040371_1334985872_q.jpg',
    // (bool | optional) if you want it to fade out on its own or just sit there
    sticky: true,
    // (int | optional) the time you want it to be alive for before fading out
    time: '',
    // (string | optional) the class name you want to apply to that specific message
    class_name: 'my-sticky-class'
  });


  // sparkline plugin
  $('.inlinesparkline').sparkline('html', {
    width:'100',
    height:'30',
    lineColor: '#42C1F7',
    fillColor: '#B3E6FC'
  });

  // draw charts
  redraw_dashboard_analytics();

} 

//-----  Forms page -----//
if($('#forms_page').length > 0 ){

  // Rich text editor
  var editor = new TINY.editor.edit('editor', {
    id: 'tinyeditor',
    width: 584,
    height: 175,
    cssclass: 'tinyeditor',
    controlclass: 'tinyeditor-control',
    rowclass: 'tinyeditor-header',
    dividerclass: 'tinyeditor-divider',
    controls: ['bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|', 'orderedlist', 'unorderedlist', '|', 'outdent', 'indent', '|', 'leftalign', 'centeralign', 'rightalign', 'blockjustify', '|', 'unformat', '|', 'undo', 'redo', 'n', 'font', 'size', 'style', '|', 'image', 'hr', 'link', 'unlink', '|', 'print'],
    footer: true,
    fonts: ['Verdana','Arial','Georgia','Trebuchet MS'],
    xhtml: true,
    cssfile: 'custom.css',
    bodyid: 'editor',
    footerclass: 'tinyeditor-footer',
    toggle: {text: 'source', activetext: 'wysiwyg', cssclass: 'toggle'},
    resize: {cssclass: 'resize'}
  });   



  // tags in the wizard
     $("#wizard_tags").select2({
      tags:["Modern", "Lightweight", "Minimalistic"],
      maximumInputLength: 4
      });
     $("#wizard_validate_tags").select2({
      tags:["Modern", "Lightweight", "Minimalistic"],
      maximumInputLength: 4
      });

  // wizard

    // with simple validation
    $('#wizard_validate').bootstrapWizard({onNext: function(tab, navigation, index) {
     


     // clean of error style
     $('#wizard_validate').find('.control-group').removeClass('error');
      switch(index){

        // wizard tab nr. 1
        case 1:
          // check if the title is empty or has fewer characters then 4
          if($('#val_title').val() == "" || $('#val_title').val().length < 3){
            // add error class if field is empty
            $('#val_title').closest('.control-group').addClass('error');
            return false;
          }

          // check if the description is empty
          if($('#val_description').val() == ""){
            // add error class if field is empty
            $('#val_description').closest('.control-group').addClass('error');
            return false;
          }
        break;

        // wizard tab nr. 2
        case 2:
          // check if the price is empty
          if($('#val_price').val() == ""){
            // add error class if field is empty
            $('#val_price').closest('.control-group').addClass('error');
            return false;
          }

          // check if the tags input is empty
          if($('#wizard_validate_tags').val() == ""){
            // add error class if field is empty
            $('#wizard_validate_tags').closest('.control-group').addClass('error');
            return false;
          }
        break;

        // wizard tab nr. 3 - The last one
        case 3:
          // if everything is ok we can go ahead and submit the form

          // $('#id_of_our_form').submit();

        break;

      }

    },onTabShow: function(tab, navigation, index) {
      var $total = navigation.find('li').length;
      var $current = index+1;
      var $percent = ($current/$total) * 100;
      $('#wizard_validate').find('.bar').css({width:$percent+'%'});
    }});

    // normal wizard without validation
    $('#wizard').bootstrapWizard({onNext: function(tab, navigation, index) {


    },onTabShow: function(tab, navigation, index) {
      var $total = navigation.find('li').length;
      var $current = index+1;
      var $percent = ($current/$total) * 100;
      $('#wizard').find('.bar').css({width:$percent+'%'});
    }});










  // validation
  $('#register_form1').validate({
    errorClass: "help-inline",
    errorElement: "span",
    rules: {
        username: {
          minlength: 3,
          maxlength: 15,
          required: true,

          // uncomment the line below if you want to check if the username is already taken.  Put an url to a page which receives the username via GET and return a true/false boolean. true if the username is available false if not.
          //remote: 'url to check if user name exists'
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        password_confirm: {
        required: true,
        minlength: 5,
        equalTo: "#form_password"
        }
    },
     messages: {
       username: {
        minlength: "Minimum length is 3 characters",
        maxlength: "Maximum length is 15 characters",
        remote: "Username is taken",
        required: "Please specify your username"
       },
       email: {
         required: "We need your email address",
         email: "Your email address must be in the format of name@domain.com"
       },
       password: {
         required: "Please select a password"
       },
       password_confirm: {
         required: "Please enter the same password as above",
         equalTo: "Please enter the same password as above"
       }
     },
    highlight: function(label) {
      $(label).closest('.control-group').addClass('error').removeClass('success');
    },
    success: function(label) {
      $(label).text('').closest('.control-group').addClass('success');
    }
  });  

  $('#register_form2').validate({
    errorClass: "help-block",
    errorElement: "p",
    rules: {
        username: {
          minlength: 3,
          maxlength: 15,
          required: true,

          // uncomment the line below if you want to check if the username is already taken.  Put an url to a page which receives the username via GET and return a true/false boolean. true if the username is available false if not.
          //remote: 'url to check if user name exists'
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        password_confirm: {
        required: true,
        minlength: 5,
        equalTo: "#form_password"
        }
    },
     messages: {
       username: {
        minlength: "Minimum length is 3 characters",
        maxlength: "Maximum length is 15 characters",
        remote: "Username is taken",
        required: "Please specify your username"
       },
       email: {
         required: "We need your email address",
         email: "Your email address must be in the format of name@domain.com"
       },
       password: {
         required: "Please select a password"
       },
       password_confirm: {
         required: "Please enter the same password as above",
         equalTo: "Please enter the same password as above"
       }
     },
    highlight: function(label) {
      $(label).closest('.control-group').addClass('error').removeClass('success');
    },
    success: function(label) {
      $(label).text('').closest('.control-group').addClass('success');
    }
  });   


  $("#select2-basic").select2();
  $("#select2-multi-value").select2();
  $("#select2-max-value").select2({maximumSelectionSize: 3});
  $("#select2-tags").select2({tags:["red", "green", "blue"],tokenSeparators: [",", " "]});

  $('.colorpicker-rgb').colorpicker({ format:'rgb'});
  $('.colorpicker-rgba').colorpicker({ format:'rgba'});
  $('.colorpicker-hex').colorpicker({ format:'hex'});

  $('.datepicker-basic').datepicker();
  $('#datepicker-years').datepicker({viewMode:2});

  $('.timepicker-12hrs').timepicker();
  $('.timepicker-24hrs').timepicker({showMeridian:false});
  $('.timepicker-seconds').timepicker({showSeconds:true});
  $('.timepicker-modal').timepicker({modalBackdrop:true,showInputs:false,template:'modal'});

} 



//-----  Users page or Tables page -----//
if($('#users_page, #tables_page').length > 0 ){

 /* Set the defaults for DataTables initialisation */
    $.extend( true, $.fn.dataTable.defaults, {
      "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
      "sPaginationType": "bootstrap",
      "oLanguage": {
        "sLengthMenu": "_MENU_ records per page"
      }
    } );


    /* Default class modification */
    $.extend( $.fn.dataTableExt.oStdClasses, {
      "sWrapper": "dataTables_wrapper form-inline"
    } );


    /* API method to get paging information */
    $.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
    {
      return {
        "iStart":         oSettings._iDisplayStart,
        "iEnd":           oSettings.fnDisplayEnd(),
        "iLength":        oSettings._iDisplayLength,
        "iTotal":         oSettings.fnRecordsTotal(),
        "iFilteredTotal": oSettings.fnRecordsDisplay(),
        "iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
        "iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
      };
    };


    /* Bootstrap style pagination control */
    $.extend( $.fn.dataTableExt.oPagination, {
      "bootstrap": {
        "fnInit": function( oSettings, nPaging, fnDraw ) {
          var oLang = oSettings.oLanguage.oPaginate;
          var fnClickHandler = function ( e ) {
            e.preventDefault();
            if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
              fnDraw( oSettings );
            }
          };

          $(nPaging).addClass('pagination').append(
            '<ul>'+
              '<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+
              '<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+
            '</ul>'
          );
          var els = $('a', nPaging);
          $(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
          $(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
        },

        "fnUpdate": function ( oSettings, fnDraw ) {
          var iListLength = 5;
          var oPaging = oSettings.oInstance.fnPagingInfo();
          var an = oSettings.aanFeatures.p;
          var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

          if ( oPaging.iTotalPages < iListLength) {
            iStart = 1;
            iEnd = oPaging.iTotalPages;
          }
          else if ( oPaging.iPage <= iHalf ) {
            iStart = 1;
            iEnd = iListLength;
          } else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
            iStart = oPaging.iTotalPages - iListLength + 1;
            iEnd = oPaging.iTotalPages;
          } else {
            iStart = oPaging.iPage - iHalf + 1;
            iEnd = iStart + iListLength - 1;
          }

          for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
            // Remove the middle elements
            $('li:gt(0)', an[i]).filter(':not(:last)').remove();

            // Add the new list items and their event handlers
            for ( j=iStart ; j<=iEnd ; j++ ) {
              sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
              $('<li '+sClass+'><a href="#">'+j+'</a></li>')
                .insertBefore( $('li:last', an[i])[0] )
                .bind('click', function (e) {
                  e.preventDefault();
                  oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
                  fnDraw( oSettings );
                } );
            }

            // Add / remove disabled classes from the static elements
            if ( oPaging.iPage === 0 ) {
              $('li:first', an[i]).addClass('disabled');
            } else {
              $('li:first', an[i]).removeClass('disabled');
            }

            if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
              $('li:last', an[i]).addClass('disabled');
            } else {
              $('li:last', an[i]).removeClass('disabled');
            }
          }
        }
      }
    } );


    /*
     * TableTools Bootstrap compatibility
     * Required TableTools 2.1+
     */
    if ( $.fn.DataTable.TableTools ) {
      // Set the classes that TableTools uses to something suitable for Bootstrap
      $.extend( true, $.fn.DataTable.TableTools.classes, {
        "container": "DTTT btn-group",
        "buttons": {
          "normal": "btn",
          "disabled": "disabled"
        },
        "collection": {
          "container": "DTTT_dropdown dropdown-menu",
          "buttons": {
            "normal": "",
            "disabled": "disabled"
          }
        },
        "print": {
          "info": "DTTT_print_info modal"
        },
        "select": {
          "row": "active"
        }
      } );

      // Have the collection use a bootstrap compatible dropdown
      $.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
        "collection": {
          "container": "ul",
          "button": "li",
          "liner": "a"
        }
      } );
    }


   
      $('#users').dataTable( {
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
          "sLengthMenu": "Entries: _MENU_ "
        }
      } );
       

} 


//-----  Notifications page -----//
if($('#notifications_page').length > 0 ){


  // Gritter
  $('#add-sticky').click(function(){

      var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'This is a sticky notice!',
        // (string | mandatory) the text inside the notification
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
        // (string | optional) the image to display on the left
        image: 'http://profile.ak.fbcdn.net/hprofile-ak-snc6/203244_1677040371_1334985872_q.jpg',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky: true,
        // (int | optional) the time you want it to be alive for before fading out
        time: '',
        // (string | optional) the class name you want to apply to that specific message
        class_name: 'my-sticky-class'
      });

      // You can have it return a unique id, this can be used to manually remove it later using
      /*
      setTimeout(function(){

        $.gritter.remove(unique_id, {
          fade: true,
          speed: 'slow'
        });

      }, 6000)
      */

      return false;

    });

    $('#add-regular').click(function(){

      $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'This is a regular notice!',
        // (string | mandatory) the text inside the notification
        text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
        // (string | optional) the image to display on the left
        image: 'http://profile.ak.fbcdn.net/hprofile-ak-snc6/203244_1677040371_1334985872_q.jpg',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky: false,
        // (int | optional) the time you want it to be alive for before fading out
        time: ''
      });

      return false;

    });

        $('#add-max').click(function(){

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a notice with a max of 3 on screen at one time!',
                // (string | mandatory) the text inside the notification
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (string | optional) the image to display on the left
                image: 'http://a0.twimg.com/profile_images/59268975/jquery_avatar_bigger.png',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: false,
                // (function) before the gritter notice is opened
                before_open: function(){
                    if($('.gritter-item-wrapper').length == 3)
                    {
                        // Returning false prevents a new gritter from opening
                        return false;
                    }
                }
            });

            return false;

        });

    $('#add-without-image').click(function(){

      $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'This is a notice without an image!',
        // (string | mandatory) the text inside the notification
        text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
      });

      return false;
    });

        $('#add-gritter-light').click(function(){

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a light notification',
                // (string | mandatory) the text inside the notification
                text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
                class_name: 'gritter-light'
            });

            return false;
        });

    $('#add-with-callbacks').click(function(){

      $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'This is a notice with callbacks!',
        // (string | mandatory) the text inside the notification
        text: 'The callback is...',
        // (function | optional) function called before it opens
        before_open: function(){
          alert('I am called before it opens');
        },
        // (function | optional) function called after it opens
        after_open: function(e){
          alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
        },
        // (function | optional) function called before it closes
        before_close: function(e, manual_close){
                    var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
          alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
        },
        // (function | optional) function called after it closes
        after_close: function(e, manual_close){
                    var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
          alert('I am called after it closes. ' + manually);
        }
      });

      return false;
    });

    $('#add-sticky-with-callbacks').click(function(){

      $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'This is a sticky notice with callbacks!',
        // (string | mandatory) the text inside the notification
        text: 'Sticky sticky notice.. sticky sticky notice...',
        // Stickeh!
        sticky: true,
        // (function | optional) function called before it opens
        before_open: function(){
          alert('I am a sticky called before it opens');
        },
        // (function | optional) function called after it opens
        after_open: function(e){
          alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
        },
        // (function | optional) function called before it closes
        before_close: function(e){
          alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
        },
        // (function | optional) function called after it closes
        after_close: function(){
          alert('I am a sticky called after it closes');
        }
      });

      return false;

    });

    $("#remove-all").click(function(){

      $.gritter.removeAll();
      return false;

    });

    $("#remove-all-with-callbacks").click(function(){

      $.gritter.removeAll({
        before_close: function(e){
          alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
        },
        after_close: function(){
          alert('I am called after everything has been closed.');
        }
      });
      return false;

    });


    // Alertify
    $('.demo_notify').click(function(){

      switch($(this).attr('data-type')){

        case 'info':
        alertify.log( 'This is a standard info notification.', 'info' );
        break;
        case 'error':
        alertify.log( 'There is an error somewhere.', 'error' );
        break;
        case 'success':
        alertify.log( 'Action was performed successfully!', 'success' );
        break;
      }
    });

    $('.demo_notify_dialog').click(function(){

      switch($(this).attr('data-type')){

        case 'alert':
        alertify.alert( 'This is an alert box.', function () {
            // after clicking OK
        });
        break;
        case 'confirm':
        alertify.confirm( 'This is a confirm box.<br>ENTER and ESC keys will trigger OK and Cancel respectively.', function (e) {
            if (e) {
                //after clicking OK
            } else {
                //after clicking Cancel
            }
        });
        break;
        case 'prompt':
        alertify.prompt( 'This is a prompt box.<br>ENTER and ESC keys will trigger OK and Cancel respectively.', function (e, str) {
            if (e) {
                // after clicking OK
                // str is the value from the textbox
            } else {
                // after clicking Cancel
            }
        });
        break;
      }
    });
} 



//-----  Support Tickets page -----//
if($('#tickets_page').length > 0 ){

  redraw_tickets_analytics();

} 

//-----  Analytics page -----//
if($('#analytics_page').length > 0 ){

  // charts
  redraw_analytics();

  // sparkline
  $('.inlinesparkline').sparkline('html', {
    width:'100',
    height:'30',
    lineColor: '#42C1F7',
    fillColor: '#B3E6FC'
  });
  
  // activate slimscroll
  $('#widget-analytics').slimScroll({
    height: '300px'
  });
} 

//-----  Gallery page -----//
if($('#gallery_page').length > 0 ){

  var $container = $('#gallery-container');
  var gutter_width = 6;
  var min_width = 250;

  var imgs = $('.gallery-item img');

  imgs.each(function () {
    var img = $(this);
    if(img[0].complete || ($.browser.msie && parseInt($.browser.version) == 6)){
      img.trigger("load");
    }
  }); 
  imgs.imagesLoaded(function (){
    $container.masonry({
      itemSelector : '.gallery-item',
      gutterWidth: gutter_width,
      isAnimated: true,
      columnWidth: function( containerWidth ) {
        var items = (containerWidth/min_width | 0);
        var col_width = (((containerWidth - (items-1)*gutter_width)/items) | 0) ;
        if (containerWidth < min_width) {
          col_width = containerWidth;
        }
        $('.gallery-item').width(col_width);
        return col_width;
      }
    });
  });

  // initialize the lightbox image plugin
  $('a[rel*=facybox]').facybox();

} 

//-----  Calendar page -----//
if($('#calendar_page').length > 0 ){

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    selectable: true,
    selectHelper: true,
    select: function(start, end, allDay) {
      var title = prompt('Event Title:');
      if (title) {
        calendar.fullCalendar('renderEvent',
          {
            title: title,
            start: start,
            end: end,
            allDay: allDay
          },
          true // make the event "stick"
        );
      }
      calendar.fullCalendar('unselect');
    },
    editable: true,
    events: [
      {
        title: 'All Day Event',
        start: new Date(y, m, 1)
      },
      {
        title: 'Long Event',
        start: new Date(y, m, d-5),
        end: new Date(y, m, d-2)
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d-3, 16, 0),
        allDay: false
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d+4, 16, 0),
        allDay: false
      },
      {
        title: 'Meeting',
        start: new Date(y, m, d, 10, 30),
        allDay: false
      },
      {
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        title: 'Birthday Party',
        start: new Date(y, m, d+1, 19, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false
      },
      {
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/'
      }
    ]
  });  
}
//-----  Dashboard page -----//

function redraw_dashboard_analytics(){
  $('#graph').html('');
  $('#barchart').html('');

  
  Morris.Area({
   element: 'graph',
  data: [
    {x: '2012-01-01', y: 102},
    {x: '2012-01-10', y: 172},
    {x: '2012-01-20', y: 130},
    {x: '2012-02-01', y: 198},
    {x: '2012-02-10', y: 256},
    {x: '2012-02-20', y: 211},
    {x: '2012-03-01', y: 345},
    {x: '2012-03-10', y: 456},
    {x: '2012-03-20', y: 384},
    {x: '2012-04-01', y: 584}
  ],
  xkey: 'x',
  ykeys: ['y'],
  smooth: false,
  lineColors: ['#42C1F7','#B3E6FC'],
  labels: ['Y', 'Z']
  });

   // init Morris
    Morris.Bar({
    element: 'barchart',
    data: [
      {x: '2012-01-01', y: 102, z:100},
      {x: '2012-01-10', y: 172, z:150},
      {x: '2012-01-20', y: 130, z:110},
      {x: '2012-02-01', y: 198, z:180},
      {x: '2012-02-10', y: 256, z:220},
      {x: '2012-02-20', y: 211, z:200},
      {x: '2012-03-01', y: 345, z:320},
      {x: '2012-03-10', y: 456, z:400},
      {x: '2012-03-20', y: 384, z:300},
      {x: '2012-04-01', y: 584, z:500}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    barColors: ['#42C1F7','#B3E6FC'],
    labels: ['Y', 'Z']

    });  
}

//-----  Tasks page -----//

  // check if you are on the tasks page
  if($('#tasks_page').length > 0 ){

    // init knob
    $(".knob").knob({
        draw : function () {}
    });


    // draw donuts
    Morris.Donut({
      element: 'donut',
      data: [
        {label: "Tasks Completed", value: 150},
        {label: "Tasks Pending", value: 250}
      ],
      colors:['#C1F8A9','#6FB3CE']
    });

    Morris.Donut({
      element: 'donut2',
      data: [
        {label: "Tasks Overdue", value: 30},
        {label: "Tasks On time", value: 70},
        {label: "Tasks Ahead of time", value: 70}
      ],
      colors:['#F79999','#6FB3CE', '#C1F8A9']
    });

    Morris.Donut({
      element: 'donut3',
      data: [
        {label: "Fernando Mcie", value: 20},
        {label: "Cody Negley", value: 12},
        {label: "Lilia Triggs", value: 10}
      ],
      colors:['#C1F8A9','#6FB3CE', '#72BDDB']
    });
    Morris.Donut({
      element: 'donut4',
      data: [
        {label: "Fixes", value: 10},
        {label: "Updates", value: 40},
        {label: "Adds", value: 40}
      ],
      colors:['#87CEEB','#6FB3CE', '#72BDDB']
    });
}


}); // end document reday





//-----  Side menu functions -----//

  // slide menu out of view
  function sidemenu_close(){
    $(".main_container").stop().animate({
        'left': '0'
    }, 250, 'swing');
    $(".nav-collapse.collapse").stop().animate({
        'left': '-150px'
    }, 250, 'swing').removeClass('open_left');
    $('.main_container').unbind('click');
    if(typeof handler != 'undefined'){
      $(window).unbind('resize', handler);
    }
  }

  // slide menu in
  function sidemenu_open(){
      $(".main_container").stop().animate({
          'left': '150px'
      }, 250, 'swing');
      $(".nav-collapse.collapse").stop().animate({
          'left': '0'
      }, 250, 'swing').addClass('open_left');
  }

//-----  Tickets page -----//

function redraw_tickets_analytics(){ 

  // clear the div's to make room for the new resized items
  $('#bars').html('');
  $('#donut').html('');


  Morris.Donut({
    element: 'donut',
    data: [
      {label: "Pending tickets", value: 12},
      {label: "Finished tickets", value: 30},
      {label: "Canceled tickets", value: 10},
    ],
    colors:['#F7DEC8','#F4AC6E', '#F5C294']
  });
  Morris.Bar({
    element: 'bars',
    data: [
      { y: '02/02', a: 2, b: 1 },
      { y: '02/03', a: 4,  b: 1 },
      { y: '02/04', a: 2,  b: 2 },
      { y: '02/05', a: 1,  b: 1 },
      { y: '02/06', a: 0,  b: 3 },
      { y: '02/07', a: 5,  b: 2 },
      { y: '02/08', a: 2, b: 0 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Finished tickets', 'New tickets'],
    barColors: ['#F5C294','#F7DEC8']
  });

}



//-----  Analytics page -----//

function redraw_analytics(){ 

  // clear the div to make room for the new resized items
  $('.analytics_item').html('');

  // start drawing, like a boss
  
  Morris.Donut({
    element: 'donut',
    data: [
      {label: "Visits Today", value: 1503},
      {label: "Visits Yesterday", value: 2190}
    ],
    colors:['#42C1F7','#B3E6FC']
  });

  Morris.Donut({
    element: 'donut2',
    data: [
      {label: "% New visitors", value: 30},
      {label: "% Returning visitors", value: 70}
    ],
    colors:['#42C1F7','#B3E6FC']
  });

  Morris.Donut({
    element: 'donut3',
    data: [
      {label: "Firefox", value: 5798},
      {label: "Chrome", value: 4855},
      {label: "Internet Explorer", value: 2877}
    ],
    colors:['#42C1F7','#B3E6FC','#3CB1E0']
  });

  Morris.Donut({
    element: 'donut4',
    data: [
      {label: "Categories", value: 8790},
      {label: "Clothing", value: 7052},
      {label: "About", value: 6577},
    ],
    colors:['#42C1F7','#B3E6FC','#3CB1E0']
  });

 // quarterly data, custom colors, skinny lines
  Morris.Area({
    element: 'areachart',
    data: [
      {x: '2012-01-01', y: 102},
      {x: '2012-01-10', y: 172},
      {x: '2012-01-20', y: 130},
      {x: '2012-02-01', y: 198},
      {x: '2012-02-10', y: 256},
      {x: '2012-02-20', y: 211},
      {x: '2012-03-01', y: 345},
      {x: '2012-03-10', y: 456},
      {x: '2012-03-20', y: 384},
      {x: '2012-04-01', y: 584}
    ],
    xkey: 'x',
    ykeys: ['y'],
    smooth: false,
    lineColors: ['#42C1F7','#B3E6FC'],
    labels: ['Y', 'Z']
  });

  Morris.Area({
    element: 'areachart2',
    data: [
      {x: '2012-01-01', y: 102, z:100},
      {x: '2012-01-10', y: 172, z:150},
      {x: '2012-01-20', y: 130, z:110},
      {x: '2012-02-01', y: 198, z:180},
      {x: '2012-02-10', y: 256, z:220},
      {x: '2012-02-20', y: 211, z:200},
      {x: '2012-03-01', y: 345, z:320},
      {x: '2012-03-10', y: 456, z:400},
      {x: '2012-03-20', y: 384, z:300},
      {x: '2012-04-01', y: 584, z:500}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    smooth: false,
    lineColors: ['#42C1F7','#65A7BF'],
    labels: ['Y', 'Z']
  });

  Morris.Line({
    element: 'linechart',
    data: [
      {x: '2012-01-01', y: 102},
      {x: '2012-01-10', y: 172},
      {x: '2012-01-20', y: 130},
      {x: '2012-02-01', y: 198},
      {x: '2012-02-10', y: 256},
      {x: '2012-02-20', y: 211},
      {x: '2012-03-01', y: 345},
      {x: '2012-03-10', y: 456},
      {x: '2012-03-20', y: 384},
      {x: '2012-04-01', y: 584}
    ],
    xkey: 'x',
    ykeys: ['y'],
    smooth: false,
    lineColors: ['#42C1F7','#B3E6FC'],
    labels: ['Y']
  });

  Morris.Line({
    element: 'linechart2',
    data: [
      {x: '2012-01-01', y: 102, z:100},
      {x: '2012-01-10', y: 172, z:150},
      {x: '2012-01-20', y: 130, z:110},
      {x: '2012-02-01', y: 198, z:180},
      {x: '2012-02-10', y: 256, z:220},
      {x: '2012-02-20', y: 211, z:200},
      {x: '2012-03-01', y: 345, z:320},
      {x: '2012-03-10', y: 456, z:400},
      {x: '2012-03-20', y: 384, z:300},
      {x: '2012-04-01', y: 584, z:500}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    smooth: false,
    lineColors: ['#42C1F7','#B3E6FC'],
    labels: ['Y', 'Z']
  });
  Morris.Bar({
    element: 'barchart',
    data: [
      {x: '2012-01-01', y: 102, z:100},
      {x: '2012-01-10', y: 172, z:150},
      {x: '2012-01-20', y: 130, z:110},
      {x: '2012-02-01', y: 198, z:180},
      {x: '2012-02-10', y: 256, z:220},
      {x: '2012-02-20', y: 211, z:200},
      {x: '2012-03-01', y: 345, z:320},
      {x: '2012-03-10', y: 456, z:400},
      {x: '2012-03-20', y: 384, z:300},
      {x: '2012-04-01', y: 584, z:500}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    barColors: ['#42C1F7','#B3E6FC'],
    labels: ['Y', 'Z']
  });
}  
