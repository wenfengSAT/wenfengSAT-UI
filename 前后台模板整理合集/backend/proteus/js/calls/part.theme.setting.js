/*  ==========================================================================
    Table of Content for Theme Settings:

    === Function ===
	- runTooltipThemeSettings
	- runThemeSettingsSpinner
	- runBoxedCheckedThemeSettings
	- runThemeToggle
	- runThemeCollapsible

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runTooltipThemeSettings
    ========================================================================== */
    function runTooltipThemeSettings(tip){

        $(tip).tooltip();
    }

/*
    runThemeSettingsSpinner
    ========================================================================== */
function runThemeSettingsSpinner(spinner){

    var sp = $(spinner).TouchSpin({
        min: 10,
        max: 20,
        step: 1,
        maxboostedstep: 10
    }).on("touchspin.on.startspin", function(e) {
        $('html').css({fontSize: e.currentTarget.value+'px' });
    });


    $(spinner).on('keypress', function (event) {
        if(event.which === 13){

            var value = $(this).val();
            if(value < 10 ){
                value = 10;
                $(this).val(value);
            }else if(value > 20 ){
                value = 20;
                $(this).val(value);
            }else if(isNaN(value)){
                value = 14;
                $(this).val(value);
            }


            $('html').css({fontSize: value+'px' });

        }
    });

}


/*
    runBoxedCheckedThemeSettings
    ========================================================================== */
function runBoxedCheckedThemeSettings(){

    // Dashboard - refresh charts
    if($('body').hasClass('l-dashboard')){
        runRevenueWidget(revenueChart);
        runCheckCharts();
    }
}

/*
    runThemeToggle
    ========================================================================== */
function runThemeToggle(target,value,add){

    target.velocity({
        right : value
    }, {
        duration: 600,
        easing: [ 500, 25 ],
        complete: function(elements) {
            if(add){
                target.addClass('open');
            }else{
                target.removeClass('open');
            }
        }
    } );
}

/*
    runThemeCollapsible
    ========================================================================== */
function runThemeCollapsible(accordion){

    $(accordion).collapsible({
        defaultOpen: 'themeSection1',
        speed: 200
    });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var ttThemeSettings = '.tt-theme-settings',

        spinnerBaseFont = '#spinnerBaseFont',
        collapsible     = ".theme-collapsible",

        switcheryBoxed         = document.querySelector('.switcheryBoxed'),
        switcheryFixedHeader   = document.querySelector('.switcheryFixedHeader'),
        switcheryStickyHeader  = document.querySelector('.switcheryStickyHeader'),
        switcheryFixedFooter   = document.querySelector('.switcheryFixedFooter'),
        switcheryStickyFooter  = document.querySelector('.switcheryStickyFooter');

    var successColor = $('.switchery-success').css('color'),
        warningColor = $('.switchery-warning').css('color'),
        infoColor    = $('.switchery-info').css('color');

        if(switcheryBoxed)        var btnBoxed        = new Switchery(switcheryBoxed,        { color: infoColor,    size : 'small' });
        if(switcheryFixedHeader)  var btnFixedHeader  = new Switchery(switcheryFixedHeader,  { color: successColor, size : 'small' });
        if(switcheryStickyHeader) var btnStickyHeader = new Switchery(switcheryStickyHeader, { color: successColor, size : 'small' });
        if(switcheryFixedFooter)  var btnFixedFooter  = new Switchery(switcheryFixedFooter,  { color: warningColor, size : 'small' });
        if(switcheryStickyFooter) var btnStickyFooter = new Switchery(switcheryStickyFooter, { color: warningColor, size : 'small' });

        // Boxed Layout
        if(switcheryBoxed){
            switcheryBoxed.onchange = function() {

                if(switcheryBoxed.checked){
                   $('body').addClass('l-boxed');
                   $('.l-main-container').addClass('t-boxed-2');
                }else{
                    $('body').removeClass('l-boxed');
                    $('.l-main-container').removeClass('t-boxed-2');
                }

                runBoxedCheckedThemeSettings();
            };
        }

        // Headers
        if(switcheryFixedHeader) {
            switcheryFixedHeader.onchange = function () {


                if (switcheryFixedHeader.checked) {
                    $('body').addClass('l-header-fixed-1');
                    $('.l-main-container').addClass('has-header-1');
                } else {
                    $('body').removeClass('l-header-fixed-1');

                    if (!switcheryStickyHeader.checked) {
                        $('.l-main-container').removeClass('has-header-1');
                    }
                }
            };
        }

        if(switcheryStickyHeader) {
            switcheryStickyHeader.onchange = function () {

                if (switcheryStickyHeader.checked) {
                    $('body').addClass('l-header-sticky-1');
                    $('.l-main-container').addClass('has-header-1');
                } else {
                    $('body').removeClass('l-header-sticky-1');

                    if (!switcheryFixedHeader.checked) {
                        $('.l-main-container').removeClass('has-header-1');
                    }
                }
            };
        }

        // Footers
        if(switcheryFixedFooter){
            switcheryFixedFooter.onchange = function() {

                if(switcheryFixedFooter.checked){
                    $('body').addClass('l-footer-fixed-1');
                    $('.l-main-container').addClass('has-footer-1');
                }else{
                    $('body').removeClass('l-footer-fixed-1');

                    if(!switcheryStickyFooter.checked){
                        $('.l-main-container').removeClass('has-footer-1');
                    }
                }
            };
        }

        if(switcheryStickyFooter){
            switcheryStickyFooter.onchange = function() {

                if(switcheryStickyFooter.checked){
                    $('body').addClass('l-footer-sticky-1');
                    $('.l-main-container').addClass('has-footer-1');
                }else{
                    $('body').removeClass('l-footer-sticky-1');

                    if(!switcheryFixedFooter.checked){
                        $('.l-main-container').removeClass('has-footer-1');
                    }
                }
            };
        }

        // Toggle General Settings Panel
        $('.t-theme-settings-1 .theme-settings-toggle, .t-theme-settings-1 .theme-settings-wrapper h3').on('click', function(e){

            e.preventDefault();

            var toggleIcon = $('.t-theme-settings-1 .theme-settings-toggle i');

            var ts = $('.t-theme-settings-1');

            if(ts.hasClass('open')){
                runThemeToggle(ts,"-221px",false);
                toggleIcon.removeClass('fa-spin');
            }else{
                runThemeToggle(ts,"-1px",true);
                toggleIcon.addClass('fa-spin');
            }
        });

        // Toggle Theme Settings Panel
        $('.t-theme-settings-2 .theme-settings-toggle, .t-theme-settings-2 .theme-settings-wrapper h3').on('click', function(e){

            e.preventDefault();

            var ts = $('.t-theme-settings-2');

            if(ts.hasClass('open')){
                runThemeToggle(ts,"-221px",false);
            }else{
                runThemeToggle(ts,"-1px",true);
            }
        });

    // === Checkers ===

    // === Setters ===

    // === Executions ===
    runThemeSettingsSpinner(spinnerBaseFont);
    runTooltipThemeSettings(ttThemeSettings);
    runThemeCollapsible(collapsible);

});