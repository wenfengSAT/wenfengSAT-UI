"use strict";
/*******************************
PAGE PRELOADER
*******************************/
    $(window).on('load', function() {
        $('#status').fadeOut( 'slow' );
        $('#preloader').delay(350).fadeOut( 'slow' );
        $('body').delay(350).css({'overflow':'visible'});
    })

/*******************************
HEADER
*******************************/
    $('#header').load('assets/core/header.html',function() {
        $(this).hide().fadeIn();
        
        // SIDEBAR TOGGLE
        $('.sidebar-switch').on('click', function () {
            if (parseInt($(window).width()) < 1170.99) {
                $('.wrapper').removeClass('sidebar-toggle');
                $('.wrapper').toggleClass('sidebar-toggle-sm');
            }
            else if (parseInt($(window).width()) > 1170.99) {
                $('.wrapper').toggleClass('sidebar-toggle');
            }
        });
        
        $(window).on('resize', function() {
            if ($(window).width() > 1170.99) {
                $('.wrapper').removeClass('sidebar-toggle-sm');
            }
            else if ($(window).width() < 1170.99) {
                $('.wrapper').removeClass('sidebar-toggle');
            }
        });
        
    }); // END LOAD
    
/*******************************
SIDEBAR
*******************************/
    $('#sidebar').load('assets/core/sidebar.html',function() {
        $(this).hide().fadeIn();
        
        // SIDEBAR CONTAINER AUTO WINDOW HEIGHT
        $('.sidebar-container') .css({'height': (($(window).height()))+'px'});
        $(window).on('resize', function(){
            $('.sidebar-container') .css({'height': (($(window).height()))+'px'});
        });
        
        // SIDEBAR SCROLLPANE
        $('.sidebar-scrollpane').each(function() {
            $(this).jScrollPane({
                autoReinitialise: true
            })
            
            .on('mousewheel',function(e){
                e.preventDefault();
            });
            
            var api = $(this).data('jsp');
            var throttleTimeout;
            $(window).on('resize',function() {
                if (!throttleTimeout) {
                    throttleTimeout = setTimeout(function(){
                        api.reinitialise();
                        throttleTimeout = null;
                    },
                    50
                    );
                }
            });
            
        });
        
        // PROFILE STATUS
        $('.sidebar-profile .dropdown-menu').on('click', 'a', function () {
            var $class= $(this).data('status');
            var target = $('.sidebar-profile');
            // toggle class
            $class = target.hasClass($class) ? "" : $class;
            target.removeClass().addClass("sidebar-profile clearfix " +$class)
        });
        
        // TABS DEEPLINK
        var taburl = document.location.toString();
        if( taburl.match('#') ) {
            $('.nav-tabs a[href=#'+taburl.split('#')[1]+']').tab('show');
        }
        // Allow internal links to activate a tab.
        $('a[data-toggle="tab"]').on('click', function (e) {
            e.preventDefault();
            $('a[href="' + $(this).attr('href') + '"]').tab('show');
        })  
        
        // SIDEBAR NAVIGATION
        $('#sidebar-nav').metisMenu();
        
    /*******************************
    TASKS/TO-DO LIST
    *******************************/
        $('form#add-tasks').on('submit', function(e){
            event.preventDefault();
            
            // Get new task
            var newTask = $("#custom-text").val();
            
            // Task Template
            var taskTemplate = $("#taskTemplate").html();
            $(".tasks-list").append(taskTemplate.replace("{{newTask}}", newTask)
                                   );
            
            // Clear after submit
            $("#custom-text").val('');
        });
        
        // Delete Button
        $(".tasks-list").on("click", ".delete-task", function(){
            $(this).closest("li").remove();
        });
        
        // Check
        $(".tasks-list").on("click", ".check-task", function (){
                $(this).closest("li").toggleClass("checked");
        });
        
    }); // END LOAD
    
/*******************************
SIDEBAR MESSENGER/CHAT
*******************************/
    $('#messenger').load('assets/core/messenger.html',function() {
        $(this).hide().fadeIn();
        
        // SIDEBAR CONTAINER AUTO WINDOW HEIGHT
        $('.messenger-wrap, .messenger-content') .css({'height': (($(window).height()))+'px'});
        $(window).on('resize', function(){
            $('.messenger-wrap, .messenger-content') .css({'height': (($(window).height()))+'px'});
        });
        
        // MESSENGER TOGGLE
        $('.friends-list a, .toggle-list').on('click', function (e) {
            e.preventDefault();
            $('.wrapper').toggleClass('chat-box');
        });
        
        // MESSENGER SCROLLPANE
        $('.chat-scrollpane').each(function() {
            $(this).jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 1,
                stickToBottom: true,
                maintainPosition: true,
            })
            
            .on('mousewheel',function(e){
                e.preventDefault();
            });
            
            var toBottom = $(this).data('jsp');
            toBottom.scrollToBottom();
            
            var api = $(this).data('jsp');
            var throttleTimeout;
            $(window).on('resize',function() {
                if (!throttleTimeout) {
                    throttleTimeout = setTimeout(function(){
                        api.reinitialise();
                        throttleTimeout = null;
                    },
                    50
                    );
                }
            });
            
        });
        
        // WRITE & SEND MESSAGE BOX
        $('#chatMessage').on('keypress', function(e){
            if (e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                
                // Get message
                var chatMessage = $("#chatMessage").val();
               
               // Get time
                var chatTime = moment().calendar();
               
               // My message template
                var messageTemplate = $("#messageTemplate").html();
                $(".messenger-content .messages").append(messageTemplate.replace("{{chatMessage}}", chatMessage)
                                                                        .replace("{{chatTime}}", chatTime)
                                                        );
                
                // Clear after submit
                $('#chatMessage').val('');
            }
        });
    
    }); // END LOAD
    
/*******************************
FOOTER
*******************************/
    $('#footer').load('assets/core/footer.html',function() {
        $(this).hide().fadeIn();
    }); // END LOAD

$(document).ready(function(){
/*******************************
CONTENT MIN-HEIGHT
*******************************/
    function setHeight() {
        var windowHeight = $(window).innerHeight();
        $('.main').css('min-height', windowHeight);
    };
    setHeight();
    
    $(window).on('resize', function() {
        setHeight();
    });

/*******************************
CONTENT ELEMENTS
*******************************/
    // MATCH HEIGHT - Match divs height on the same row
    $('.equal').matchHeight();
    
    // ACCORDION TOGGLE ICONS
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('fa-plus fa-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
    
    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip({
        animated : 'fade',
        container: 'body'
    });
    
    // POPOVER
    $('[data-toggle="popover"]').popover({
        trigger: 'hover',
        html: true
    })
    
    // MAP AUTO WINDOW HEIGHT
    $('.full-width-map') .css({'height': (($(window).height()))+'px'});
    $(window).on('resize', function(){
        $('.full-width-map') .css({'height': (($(window).height()))+'px'});
    });

}); //END


/*******************************
THEME OPTIONS
*******************************/
// THEME OPTIONS TOGGLE
    $(document).ready(function() {
        $('.button-switch').on('click', function () {
            $('.wrapper').toggleClass('toggle-theme-options');
        });
    }); //END

// SIDEBAR SWITCHER
    var wrapper_class = $.cookie('wrapper_class');
    if(wrapper_class) {
        $('body').attr('class', wrapper_class);
    }
    
    $(document).ready(function() {
        $(".theme-option-toggle-sidebar").on('click', function() {
            $("body").toggleClass("right-sidebar");
            $.cookie('wrapper_class', $('body').attr('class'));
        });
    }); //END

// SWITCHER 
    if($.cookie("css")) {
        $("#theme").attr("href",$.cookie("css"));
    }
    
    $(document).ready(function() { 
        $("#theme-switcher li a").on('click', function() { 
            $("#theme").attr("href",$(this).attr('id'));
            $.cookie("css",$(this).attr('id'), {expires: 365, path: '/'});
            return false;
        });
    }); //END



/*******************************
*******************************
LIMIT FORM CHARACTERS
*******************************
*******************************/
(function($) {
    $.fn.extend( {
        limiter: function(limit, elem) {
            $(this).on("keyup focus", function() {
                setCount(this, elem);
            });
            function setCount(src, elem) {
                var chars = src.value.length;
                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;
                }
                elem.html( limit - chars );
            }
            setCount($(this)[0], elem);
        }
    });
})(jQuery);