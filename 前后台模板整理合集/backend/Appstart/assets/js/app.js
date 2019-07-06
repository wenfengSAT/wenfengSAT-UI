// make console.log safe to use
window.console||(console={log:function(){}});

//Internet Explorer 10 in Windows 8 and Windows Phone 8 fix
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

//Android stock browser
var nua = navigator.userAgent
var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {
  $('select.form-control').removeClass('form-control').css('width', '100%')
}

//doc ready function
$(document).ready(function() {

 	//Disable certain links
    $('a[href^=#]').click(function (e) {
        e.preventDefault()
    })

    //------------- Highlight code  -------------//
    hljs.initHighlightingOnLoad();

 	//------------- Init our plugin -------------//
 	$('body').appStart({
        //main color scheme for template
        //be sure to be same as colors on main.css or custom-variables.less
        colors : {
            white: '#fff',
            dark: '#2C3E50',
            red: '#EF4836',
            blue: '#1E8BC3',
            green: '#3FC380',
            yellow: '#F39C12',
            orange: '#E87E04',
            purple: '#9A12B3',
            pink: '#f78db8',
            lime: '#a8db43',
            mageta: '#e65097',
            teal: '#1BBC9B',
            black: '#000',
            brown: '#EB974E',
            gray: '#ECF0F1',
            graydarker: '#95A5A6',
            graydark: '#D2D7D3',
            graylight: '#EEEEEE',
            graylighter: '#F2F1EF'
        },
        customScroll: {
            color: '#fff', //color of custom scroll
            rscolor: '#95A5A6', //color of right sidebar
            size: '5px', //size in pixels
            opacity: '1', //opacity
            alwaysVisible: false //disable hide in
        },
        sounds: {
            active: true, //activate sounds
            dir: 'assets/sounds/',//where sounds is located
            volume: '1', //sound volume
            sounds: [ //sound list
                'loading',
                'snap'
            ],
            loadingScreen: 'loading', //Sound for loading screen
            toggleSidebar: 'snap', //sound for toggle sidebar
        },
        header: {
            fixed: true //fixed header
        },
        breadcrumbs: {
            auto: true, //auto populate breadcrumbs via js if is false you need to provide own markup see for example.
            homeicon: 'im-home6' //home icon 
        },
        lockMode : {
            autoLock: true, //Lock automatic in iddle
            minutes: 10, //how many minutes before lock mode is activate automatic
            url: 'lockscreen.html' //where to redirect user after screen is lock
        },
        sidebar: {
            fixed: true,//fixed sidebar
            rememberToggle: true, //remember if sidebar is hided
            offCanvas: false //make sidebar offcanvas in tablet and small screens
        },
        sideNav : {
            toggleMode: true, //close previous open submenu before expand new
            hover: false, //shows subs on hover or click
            showArrows: true,//show arrow to indicate sub
            sideNavArrowIcon: 'im-arrow-down2', //arrow icon for navigation
            subOpenSpeed: 200,//animation speed for open subs
            subCloseSpeed: 300,//animation speed for close subs
            animationEasing: 'linear',//animation easing
            absoluteUrl: false, //put true if use absolute path links. example http://www.host.com/dashboard instead of /dashboard
            subDir: '' //if you put template in sub dir you need to fill here. example '/html'
        },
        panels: {
            refreshIcon: 'im-spinner12',//refresh icon for panels
            toggleIcon: 'im-minus',//toggle icon for panels
            collapseIcon: 'im-plus',//colapse icon for panels
            closeIcon: 'im-close', //close icon
            showControlsOnHover: false,//Show controls only on hover.
            loadingEffect: 'facebook',//loading effect for panels. bounce, none, rotateplane, stretch, orbit, roundBounce, win8, win8_linear, ios, facebook, rotation.
            rememberSortablePosition: true //remember panel position
        },
        forms: {
            checkAndRadioTheme: 'teal', //theme for radios - aero, blue, green, gray, minimal, orange,pink,purple,red,yellow
        },
        tooltips: true, //activate tooltip plugin build in bootstrap
        tables: {
            responsive: true, //make tables resposnive
            customscroll: true //ativate custom scroll for responsive tables
        },
        alerts: {
            animation: true, //animation effect toggle
            closeEffect: 'bounceOutDown' //close effect for alerts see http://daneden.github.io/animate.css/
        },
        backToTop: {
            active: true, //activate back to top
            scrolltime: 800, //scroll time speed
            imgsrc: 'assets/img/backtop.png', //image 
            width: 42, //width of image
            place: 'bottom-right', //position top-left, top-right, bottom-right, bottom-left
            fadein: 500, //fadein speed
            fadeout: 500, // fadeOut speed
            opacity: 0.5, //opacity
            marginX: 0.5, //X margin
            marginY: 2 //Y margin
        },
        dropdownMenu: {
            animation: true, //animation effect for dropdown
            openEffect: 'fadeInDown',//open effect for menu see http://daneden.github.io/animate.css/
        }
 	});
    
    //get settings object
    var jumpObject = $('body').data('appStart');
    var settings = jumpObject.settings;

    //------------- Loading screen  -------------//
    if (settings.sounds.active) {
        $.ionSound.play({name: settings.sounds.loadingScreen});
    }
    $('#preloader-logo').fadeOut();
    $('#preloader-icon').fadeOut();
    $('#preloader').delay(350).fadeOut(function(){
      $('body').delay(350).removeClass('ovh');
    });

    //------------- Chat window -------------//
    (function(){
        var chatUI = $('.chat-ui');
        var chatUserList = $('.chat-user-list');
        var chat_user = chatUI.find('a.chat-name');
        var chat_box = $('.chat-box');
        var close_chat = chat_box.find('a#close-user-chat');
        var chat_msgbox = chat_box.find('#sendMsg');
        var rsinner = $('#right-sidebar .sidebar-inner');

        chat_user.on("click", function(e){ 
            e.preventDefault();
            //show chat_box
            chat_box.addClass('chatbox-show');
            chatUserList.addClass('hide-it');
            rsinner.animate({ scrollTop: rsinner[0].scrollHeight }, 1000);
            //make textbox elastic
            //chat_msgbox.autosize();
        });
        close_chat.on("click", function(e){ 
            e.preventDefault();
            //close chat_box
            chatUserList.removeClass('hide-it');
            chat_box.removeClass('chatbox-show');
        });
        
        //handle send msg
        chat_msgbox.on('keyup', function(e) {
            if (e.which == 13 && ! e.shiftKey) {
                msg = $(this).val();
                //append msg
                appendMsg(msg);
                //clear txt and resize text area to orginal state
                $(this).val('').trigger('autosize.resize');
                //scroll to bottom
                rsinner.animate({ scrollTop: rsinner[0].scrollHeight }, 1000);
            }
        })

        function appendMsg (msg) {
            $('.chat-box .chat-messages').append('<li class="chat-me"><div class="avatar"><img src="assets/img/avatars/1.jpg" alt="@jonhdoe"></div><div class="message"><p class="chat-name">Jonh Doe <span class="chat-time"> now </span></p><p class="chat-txt">'+ msg +'</p></div></li>');
        }    
    })();

    //------------- Bootstrap tooltips -------------//
    $("[data-toggle=tooltip]").tooltip ({container:'body'});
    $(".tip").tooltip ({placement: 'top', container: 'body'});
    $(".tipR").tooltip ({placement: 'right', container: 'body'});
    $(".tipB").tooltip ({placement: 'bottom', container: 'body'});
    $(".tipL").tooltip ({placement: 'left', container: 'body'});
    //------------- Bootstrap popovers -------------//
    $("[data-toggle=popover]").popover ();

});
