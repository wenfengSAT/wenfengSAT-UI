/*  ==========================================================================
    Table of Content for Tooltips:

    === Function ===
	- runTooltips
    - runPopover
    - runWebuiPopover
    - runTooltipster


    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runTooltips
    ========================================================================== */
function runTooltips(tip){

	$(tip).tooltip();

}


/*
    runPopover
    ========================================================================== */
function runPopover(pop){

    $(pop).popover({
        trigger:'hover'
    });

}


/*
    runWebuiPopover
    ========================================================================== */
function runWebuiPopover(webui_pop, type){

    switch(type){

        case 'default':
            var settings = {
                trigger:'click',
                title:'Pop Title',
                content:'<p>This is webui popover demo.</p><p>just enjoy it and have fun !</p>',
                width:300,
                multi:true,
                closeable:false,
                style:'',
                //style:'inverse',
                padding:true
            };

            $(webui_pop).webuiPopover('destroy').webuiPopover(settings);

        break;

        case 'table':

            var tableContent = $('#tableContent').html(),
                tableSettings = {
                                content:tableContent,
                                trigger:'hover',
                                width:500
                                };

            $(webui_pop).webuiPopover('destroy').webuiPopover(tableSettings);

        break;

        case 'list':

            var listContent = $('#listContent').html(),
                listSettings = {content:listContent,
                                    title:'',
                                    trigger:'hover',
                                    padding:false
                                };
            $(webui_pop).webuiPopover('destroy').webuiPopover(listSettings);

        break;

        case 'content':
            var largeContent = $('#largeContent').html(),
                largeSettings = {content:largeContent,
                                    width:400,
                                    height:350,
                                    trigger:'hover',
                                    closeable:true
                                };
            $(webui_pop).webuiPopover('destroy').webuiPopover(largeSettings);

        break;

        case 'async':
            var asyncSettings = {   width:260,
                                    height:350,
                                    closeable:true,
                                    padding:false,
                                    cache:false,
                                    trigger:'hover',
                                    url:'https://api.github.com/',
                                    type:'async',
                                    content:function(data){
                                        var html = '<ul class="list-group">';
                                        for(var key in data){
                                            html+='<li class="list-group-item"><a href="'+ data[key] +'" target="_blank">'
                                            + '<i class="glyphicon glyphicon-leaf"></i> '+ key+'</a>'+'</li>';
                                        }
                                        html+='</ul>';
                                        return html;
                                    }};
            $(webui_pop).webuiPopover('destroy').webuiPopover(asyncSettings);

        break;

        case 'iframe':
            var iframeSettings = {  width:500,
                                    height:350,
                                    closeable:true,
                                    padding:false,
                                    trigger:'hover',
                                    type:'iframe',
                                    url:'http://getbootstrap.com'};
            $(webui_pop).webuiPopover('destroy').webuiPopover(iframeSettings);

        break;
    }
}


/*
    runTooltipster
    ========================================================================== */
function runTooltipster(tip, type){

    switch(type){

        case 'default':
            $(tip).tooltipster({
                offsetY: 2
            });
        break;

        case 'html':
            $(tip).tooltipster({
                content: $('<img style="float:left; padding-right:10px;" src="img/loxdesign.png" width="90" height="80" /><p style="text-align:left;"><h4 style="margin-bottom:5px;">LoxDesign.net</h4> We love to make cool stuff for the web.</p>'),
                // setting a same value to minWidth and maxWidth will result in a fixed width
                minWidth: 300,
                maxWidth: 300,
                position: 'right'
            });
        break;

        case 'event':
            $(tip).tooltipster({
                trigger: 'click'
            });
            $(window).keypress(function() {
                $(tip).tooltipster('hide');
            });
        break;

        case 'theme':
            $(tip).tooltipster({
                animation: 'grow',
                theme: 'tooltipster-punk'
            });
        break;

        case 'interact':
            $(tip).tooltipster({
                contentAsHTML: true,
                interactive: true
            });
        break;

        case 'multiple':
            $(tip).tooltipster({
                animation: 'swing',
                content: 'North',
                multiple: true,
                position: 'top',
                theme: 'tooltipster-noir'
            });
            $(tip).tooltipster({
                content: 'East',
                multiple: true,
                position: 'right',
                theme: 'tooltipster-punk'
            });
            $(tip).tooltipster({
                animation: 'grow',
                content: 'South',
                delay: 200,
                multiple: true,
                position: 'bottom',
                theme: 'tooltipster-light'
            });
            $(tip).tooltipster({
                animation: 'fall',
                content: 'West',
                multiple: true,
                position: 'left',
                theme: 'tooltipster-shadow'
            });
        break;
    }
}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var tooltip = ".toolt",
        popover = ".popov",

        webui_popover = ".webui-popov",

        webui_table   = ".webui-table",
        webui_list    = ".webui-list",
        webui_large   = ".webui-large",
        webui_async   = ".webui-async",
        webui_iframe  = ".webui-iframe",

        tt_default    = ".tt_default",
        tt_html       = ".tt_html",
        tt_event      = ".tt_event",
        tt_theme      = ".tt_theme",
        tt_interact   = ".tt_interact",
        tt_multiple   = ".tt_multiple";


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runTooltips(tooltip);
    runPopover(popover);

    runWebuiPopover(webui_popover, 'default');
    runWebuiPopover(webui_table  , 'table');
    runWebuiPopover(webui_list   , 'list');
    runWebuiPopover(webui_large  , 'content');
    runWebuiPopover(webui_async  , 'async');
    runWebuiPopover(webui_iframe , 'iframe');

    runTooltipster(tt_default,  'default');
    runTooltipster(tt_html,     'html');
    runTooltipster(tt_event,    'event');
    runTooltipster(tt_theme,    'theme');
    runTooltipster(tt_interact, 'interact');
    runTooltipster(tt_multiple, 'multiple');

});