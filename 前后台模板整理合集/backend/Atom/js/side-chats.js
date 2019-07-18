 /*Side Chat*/
  $('.toggle-menu').jPushMenu();
  /*Chat*/
    
    $('.side-chat .content .contacts li a').click(function(e){
      var user = $('<span>' + $(this).html() + '</span>');
      user.find('i').remove();
      
      $('#chat-box').fadeIn();
      $('#chat-box .header span').html(user.html());
      $("#chat-box .nano").nanoScroller();
      $("#chat-box .nano").nanoScroller({ scroll: 'top' });
      e.preventDefault();
    });
    
    $('#chat-box .header .close').click(function(r){
      var h = $(this).parents(".header");
      var p = h.parent();
      
      p.fadeOut();
      r.preventDefault();
    });
    
    function addText(input){
      var message = input.val();
      var chat = input.parents('#chat-box').find('.content .conversation');
      
      if(message != ''){
       input.val('');
       chat.append('<li class="text-right"><p>' + message + '</p></li>');
       $("#chat-box .nano .content").animate({ scrollTop: $("#chat-box .nano .content .conversation").height() }, 1000);
      }
    }
    
    
    $('.chat-input .input-group button').click(function(){
      addText( $(this).parents('.input-group').find('input'));
    });
    
    $('.chat-input .input-group input').keypress(function(e){
      if(e.which == 13) {
         addText($(this));
      }
    });
    
    $(document).click(function(){
      $('#chat-box').fadeOut();
    
    });

