/*  ==========================================================================
    Table of Content for Sidebar 2:

    === Function ===
	- runTooltips
	- runChatToggle
	- runTooltipsterSidebar2

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
     runCheckBoSidebar2
     ========================================================================== */
    function runCheckBoSidebar2(input){

        $(input).checkBo();
    }


/*
     runChatToggle
     ========================================================================== */
    function runChatToggle(){

        $('a.chat-user').on('click', function(e){
            e.preventDefault();
            var user = $(this),
                conv = user.next('.chat-conversation');


            if(user.hasClass('open')){
                conv.slideUp('fast', function(){
                    user.removeClass('open');
                });
            }else{
                user.addClass('open');
                conv.slideDown('fast');
            }


        });

    }

/*
     runTooltipsterSidebar2
     ========================================================================== */
    function runTooltipsterSidebar2(tip){

        $(tip).tooltipster({
            animation: 'grow',
            theme: 'tooltipster-cool'
        });
    }

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var checkbo = '.side-checkbo',
        ttChat = ".tt-chat";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runCheckBoSidebar2(checkbo);
    runChatToggle();
    runTooltipsterSidebar2(ttChat);

});