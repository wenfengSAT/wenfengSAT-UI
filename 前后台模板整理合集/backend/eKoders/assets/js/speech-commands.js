$(function(){
function getParam(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

if(('webkitSpeechRecognition' in window)){
  
  //Speech Recognition Options
  App.speech({
    lang: 'en'
  });//Initialize
  
  /*Goto Command*/
  App.speechCommand('go to',{
    action: function(){
      $.gritter.add({
      title: "Go to Page",
      text: 'Where do you want to go?',
      class_name: 'green',
      time: ''
      });          
    },
    listen: function(datos){
      switch(datos){
        case "dashboard": location.href = "index.html?listen=on"; break;
		case "portlets": location.href = "portlet.html?listen=on"; break;
		case "tiles": location.href = "portlet.html?listen=on"; break;
        case "elements": location.href = "elements-ui.html?listen=on"; break;
        case "tabs": location.href = "tabs_accordions-ui.html?listen=on"; break;
		case "accordions": location.href = "tabs_accordions-ui.html?listen=on"; break;
        case "tabs and accordions": location.href = "tabs_accordions-ui.html?listen=on"; break;
        case "buttons": location.href = "button-ui.html?listen=on"; break;
		case "icons": location.href = "button-ui.html?listen=on"; break;
        case "buttons and icons": location.href = "button-ui.html?listen=on"; break;
        case "jquery ui": location.href = "jquery-ui.html?listen=on"; break;
        case "calendar": location.href = "calendar.html?listen=on"; break;
        case "tables": location.href = "tables.html?listen=on"; break;
        case "typography": location.href = "typography.html?listen=on"; break;
		case "form elementss": location.href = "forms.html?listen=on"; break;
		case "form tools": location.href = "form-tools.html?listen=on"; break;
		case "wizards": location.href = "form-wizard.html?listen=on"; break;
		case "validation": location.href = "form-wizard.html?listen=on"; break;
		case "wizards and validation": location.href = "form-wizard.html?listen=on"; break;
		case "form wizards": location.href = "form-wizard.html?listen=on"; break;
		case "user profile": location.href = "profile.html?listen=on"; break;
		case "pricing": location.href = "pricing.html?listen=on"; break;
		case "pricing tables": location.href = "pricing.html?listen=on"; break;
		case "invoice": location.href = "invoice.html?listen=on"; break;
		case "timeline": location.href = "timeline.html?listen=on"; break;
		case "blank page": location.href = "blank.html?listen=on"; break;
		case "blog list": location.href = "blog.html?listen=on"; break;
		case "blog detail": location.href = "blog-post.html?listen=on"; break;
        default:
          $.gritter.add({title: "Error",text: "Could not find: <strong>" + datos + "</strong> page, Please try again.",class_name: 'red',time: ''});  
        break;
      }
    }
  });
  
  
  /*Logout*/
  App.speechCommand('logout',{
    action: function(){
      location.href = "login.html";
    }
  });
  
  /*Login*/
  App.speechCommand('login',{
    action: function(){
      location.href = "login.html";
    }
  });
  
  /*Scroll Down*/
  App.speechCommand('scroll down',{
    action: function(){
      var y = $(window).scrollTop();
     $("html, body").animate({
          scrollTop:  y + 500
     },'slow');
    }
  });  
  
  /*Scroll Up*/
  App.speechCommand('scroll up',{
    action: function(){
     var y = $(window).scrollTop();
     $("html, body").animate({
          scrollTop:  y - 500
     },'slow');
    }
  });
  
  /*Thank you*/
  var thank_actions = {
    action: function(){
      $.gritter.add({
      text: 'Your welcome!',
      class_name: 'green',
      time: ''
      });  
    }
  };
  App.speechCommand('thanks',thank_actions);
  App.speechCommand('thank you',thank_actions);

  

  
  /*Stop Recognition*/
  App.speechCommand('stop',{
    action: function(){
      App.speech("stop");
    }
  });
  
  if(getParam("listen")=="on"){
    App.speech("start");
  }
  
  $(".speech-button").click(function(e){
    var modal = $('<div role="dialog" tabindex="-1" id="mod-speech" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button"><i class="fa fa-times"></i></button><h4 class="modal-title">Speech API</h4></div><div class="modal-body"><div><h4 class="text-gray">Let&#39;s Start</h4><p>First you must to allow microphone access clicking on <strong>"Allow"</strong> option. Now the voice recognition starts.</p><p>After that, try to say at bellow commands at your mic.</p><ul><li><strong>"Go to"</strong>: wait for a message and then say a page title like "tables"</li><li><strong>"Scroll down"</strong> and <strong>"Scroll up"</strong></li><li><strong>"logout"</strong></li><li><strong>"Thank you"</strong></li><li><strong>"Stop"</strong> - Stops recognition</li></ul><p>Do you want more commands? you can add a voice command easily with our own API.</p> <div class="note note-warning"><p>Thanks to Google Speech Function (API) we can do <a href="https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html">Speech Recognition</a> in our web sites, initially Chrome 25+ and up versions support this, but don&#39;t worry! browsers are working on a <a href="https://wiki.mozilla.org/HTML5_Speech_API">standard</a> and soon we will see this working on our favorites browsers. </p></div></div></div><div class="modal-footer no-margin-top"><button data-dismiss="modal" class="btn btn-primary" type="button"><i class="fa fa-thumbs-up"></i>Ok! Ready</button></div></div></div></div>');
    modal.appendTo("body");
    $('#mod-speech').modal();
    $('#mod-speech').on('hidden.bs.modal', function () {
        $(this).removeData('bs.modal');
        $(this).remove();
    });
    App.speech("start");
    e.preventDefault();
    e.stopPropagation();
  });

}

});