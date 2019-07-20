var BlankonDemo = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var adminCssPath = 'assets/admin/css';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonDemo.handleChooseThemes();
            BlankonDemo.handleNavbarColor();
            BlankonDemo.handleSidebarColor();
            BlankonDemo.handleLayoutSetting();
        },

        // =========================================================================
        // CHOOSE THEMES
        // =========================================================================
        handleChooseThemes: function () {
            // Check cookie for color schemes
            if ($.cookie('color_schemes')) {
                $('link#theme').attr('href', adminCssPath+'/themes/'+$.cookie('color_schemes')+'.theme.css');
            }
            // Check cookie for navbar color
            if ($.cookie('navbar_color')) {
                $('.navbar-toolbar').attr('class', 'navbar navbar-toolbar navbar-'+$.cookie('navbar_color'));
            }
            // Check cookie for sidebar color
            if ($.cookie('sidebar_color')) {
                // Check variant sidebar class
                if($('#sidebar-left').hasClass('sidebar-box')){
                    $('#sidebar-left').attr('class','sidebar-box sidebar-'+$.cookie('sidebar_color'));
                }
                else if($('#sidebar-left').hasClass('sidebar-rounded')){
                    $('#sidebar-left').attr('class','sidebar-rounded sidebar-'+$.cookie('sidebar_color'));
                }
                else if($('#sidebar-left').hasClass('sidebar-circle')){
                    $('#sidebar-left').attr('class','sidebar-circle sidebar-'+$.cookie('sidebar_color'));
                }
                else if($('#sidebar-left').attr('class') == ''){
                    $('#sidebar-left').attr('class','sidebar-'+$.cookie('sidebar_color'));
                }
            }

            $('.color-schemes .theme').on('click',function(){

                // Create variable name selector file css
                var themename = $(this).find('.hide').text();

                // Add effect sound
                if($('.page-sound').length){
                    ion.sound.play("camera_flashing_2");
                }

                // Add attribut href css theme
                $('link#theme').attr('href', adminCssPath+'/themes/'+themename+'.theme.css');

                // Set cookie theme name value to variable themename
                $.cookie('color_schemes',themename, {expires: 1});

            });
        },

        // =========================================================================
        // NAVBAR COLOR
        // =========================================================================
        handleNavbarColor: function () {
            $('.navbar-color .theme').on('click',function(){
                // Create variable name selector file css
                var classname = $(this).find('.hide').text();
                // Add effect sound
                if($('.page-sound').length){
                    ion.sound.play("camera_flashing_2");
                }
                // Add class navbar-color
                $('.navbar-toolbar').attr('class', 'navbar navbar-toolbar navbar-'+classname);
                // Set cookie theme name value to variable classname
                $.cookie('navbar_color',classname, {expires: 1});
            });
        },

        // =========================================================================
        // SIDEBAR COLOR
        // =========================================================================
        handleSidebarColor: function () {
            $('.sidebar-color .theme').on('click',function(){
                // Create variable name selector file css
                var classname = $(this).find('.hide').text();
                // Add effect sound
                if($('.page-sound').length){
                    ion.sound.play("camera_flashing_2");
                }
                // Check variant sidebar class
                if($('#sidebar-left').hasClass('sidebar-box')){
                    $('#sidebar-left').attr('class','sidebar-box sidebar-'+classname);
                }
                else if($('#sidebar-left').hasClass('sidebar-rounded')){
                    $('#sidebar-left').attr('class','sidebar-rounded sidebar-'+classname);
                }
                else if($('#sidebar-left').hasClass('sidebar-circle')){
                    $('#sidebar-left').attr('class','sidebar-circle sidebar-'+classname);
                }
                else if($('#sidebar-left').attr('class') == ''){
                    $('#sidebar-left').attr('class','sidebar-'+classname);
                }
                // Set cookie theme name value to variable classname
                $.cookie('sidebar_color',classname, {expires: 1});
            });
        },

        // =========================================================================
        // LAYOUT SETTING
        // =========================================================================
        handleLayoutSetting: function () {
            // Check cookie for layout setting
            if ($.cookie('layout_setting')) {
                $('body').addClass($.cookie('layout_setting'));
            }

            // Check cookie for header layout setting
            if ($.cookie('header_layout_setting')) {
                $('body').addClass($.cookie('header_layout_setting'));
            }

            // Check cookie for sidebar layout setting
            if ($.cookie('sidebar_layout_setting')) {
                $('#sidebar-left').addClass($.cookie('sidebar_layout_setting'));
            }

            // Check cookie for sidebar type layout setting
            if ($.cookie('sidebar_type_setting')) {
                $('#sidebar-left').addClass($.cookie('sidebar_type_setting'));
            }

            // Check cookie for footer layout setting
            if ($.cookie('footer_layout_setting')) {
                $('body').addClass($.cookie('footer_layout_setting'));
            }

            // Check checked status input on layout setting
            if($('body').not('.page-boxed')){
                $('.layout-setting li:eq(0) input').attr('checked','checked');
            }
            if($('body').hasClass('page-boxed')){
                $('.layout-setting li:eq(1) input').attr('checked','checked');
                $('body').removeClass('page-header-fixed');
                $('body').removeClass('page-sidebar-fixed');
                $('body').removeClass('page-footer-fixed');
                $('.header-layout-setting li:eq(1) input').attr('disabled','disabled').next().css('text-decoration','line-through').parent('.rdio').attr({'data-toggle':'tooltip','data-container':'body','data-placement':'left','data-title':'Not working on page boxed'}).tooltip();
                $('.sidebar-layout-setting li:eq(1) input').attr('disabled','disabled').next().css('text-decoration','line-through').parent('.rdio').attr({'data-toggle':'tooltip','data-container':'body','data-placement':'left','data-title':'Not working on page boxed'}).tooltip();
                $('.footer-layout-setting li:eq(1) input').attr('disabled','disabled').next().css('text-decoration','line-through').parent('.rdio').attr({'data-toggle':'tooltip','data-container':'body','data-placement':'left','data-title':'Not working on page boxed'}).tooltip();
            }

            // Check checked status input on header layout setting
            if($('body').not('.page-header-fixed')){
                $('.header-layout-setting li:eq(0) input').attr('checked','checked');
            }
            if($('body').hasClass('page-header-fixed')){
                $('.header-layout-setting li:eq(1) input').attr('checked','checked');
            }

            // Check checked status input on sidebar layout setting
            if($('body').not('.page-sidebar-fixed')){
                $('.sidebar-layout-setting li:eq(0) input').attr('checked','checked');
            }
            if($('body').hasClass('page-sidebar-fixed')){
                $('.sidebar-layout-setting li:eq(1) input').attr('checked','checked');
            }

            // Check checked status input on sidebar type layout setting
            if($('#sidebar-left').not('.sidebar-box, .sidebar-rounded, .sidebar-circle')){
                $('.sidebar-type-setting li:eq(0) input').attr('checked','checked');
            }
            if($('#sidebar-left').hasClass('sidebar-box')){
                $('.sidebar-type-setting li:eq(1) input').attr('checked','checked');
            }
            if($('#sidebar-left').hasClass('sidebar-rounded')){
                $('.sidebar-type-setting li:eq(2) input').attr('checked','checked');
            }
            if($('#sidebar-left').hasClass('sidebar-circle')){
                $('.sidebar-type-setting li:eq(3) input').attr('checked','checked');
            }

            // Check checked status input on footer layout setting
            if($('body').not('.page-footer-fixed')){
                $('.footer-layout-setting li:eq(0) input').attr('checked','checked');
            }
            if($('body').hasClass('page-footer-fixed')){
                $('.footer-layout-setting li:eq(1) input').attr('checked','checked');
            }


            $('.layout-setting input').change(function(){

                // Create variable class name for layout setting
                var classname = $(this).val();

                // Add trigger change class on body HTML
                if($('body').hasClass('page-boxed')){
                    $('body').removeClass('page-boxed');
                    $('body').removeClass('page-header-fixed');
                    $('body').removeClass('page-sidebar-fixed');
                    $('body').removeClass('page-footer-fixed');
                    $('.header-layout-setting li:eq(1) input').removeAttr('disabled').next().css('text-decoration','inherit').parent('.rdio').tooltip('destroy');
                    $('.sidebar-layout-setting li:eq(1) input').removeAttr('disabled').next().css('text-decoration','inherit').parent('.rdio').tooltip('destroy');
                    $('.footer-layout-setting li:eq(1) input').removeAttr('disabled').next().css('text-decoration','inherit').parent('.rdio').tooltip('destroy');
                }else{
                    $('body').addClass($(this).val());
                    $('body').removeClass('page-header-fixed');
                    $('body').removeClass('page-sidebar-fixed');
                    $('body').removeClass('page-footer-fixed');
                    $('.header-layout-setting li:eq(1) input').attr('disabled','disabled').next().css('text-decoration','line-through').parent('.rdio').attr({'data-toggle':'tooltip','data-container':'body','data-placement':'left','data-title':'Not working on page boxed'}).tooltip();
                    $('.sidebar-layout-setting li:eq(1) input').attr('disabled','disabled').next().css('text-decoration','line-through').parent('.rdio').attr({'data-toggle':'tooltip','data-container':'body','data-placement':'left','data-title':'Not working on page boxed'}).tooltip();
                    $('.footer-layout-setting li:eq(1) input').attr('disabled','disabled').next().css('text-decoration','line-through').parent('.rdio').attr({'data-toggle':'tooltip','data-container':'body','data-placement':'left','data-title':'Not working on page boxed'}).tooltip();
                }

                // Set cookie theme name value to variable classname
                $.cookie('layout_setting',classname, {expires: 1});

            });

            $('.header-layout-setting input').change(function(){

                // Create variable class name for layout setting
                var classname = $(this).val();

                // Add trigger change class on body HTML
                if($('body').hasClass('page-header-fixed')){
                    $('body').removeClass('page-header-fixed');
                    $('body').addClass($(this).val());
                }

                $('body').addClass($(this).val());

                // Set cookie theme name value to variable classname
                $.cookie('header_setting',classname, {expires: 1});

            });

            $('.sidebar-layout-setting input').change(function(){

                // Create variable class name for layout setting
                var classname = $(this).val();

                // Add trigger change class on body HTML
                if($('body').hasClass('page-sidebar-fixed')){
                    $('body').removeClass('page-sidebar-fixed');
                    $('.header-layout-setting li:eq(0) input').removeAttr('disabled').next().css('text-decoration','inherit').parent('.rdio').tooltip('destroy');
                }else{
                    $('body').addClass($(this).val());
                    $('body').addClass('page-header-fixed');
                    $('.header-layout-setting li:eq(0) input').attr('disabled','disabled').next().css('text-decoration','line-through').parent('.rdio').attr({'data-toggle':'tooltip','data-container':'body','data-placement':'left','data-title':'Not working on sidebar fixed'}).tooltip();
                    $('.header-layout-setting li:eq(1) input').attr('checked','checked');
                }

                // Set cookie theme name value to variable classname
                $.cookie('sidebar_layout_setting',classname, {expires: 1});

            });

            $('.sidebar-type-setting input').change(function(){

                // Create variable class name for layout setting
                var classname = $(this).val();

                // Add trigger change class on sidebar left element
                if($('#sidebar-left').hasClass('sidebar-circle')){
                    $('#sidebar-left').removeClass('sidebar-circle');
                    $('#sidebar-left').addClass($(this).val());
                }

                if($('#sidebar-left').hasClass('sidebar-box')){
                    $('#sidebar-left').removeClass('sidebar-box');
                    $('#sidebar-left').addClass($(this).val());
                }

                if($('#sidebar-left').hasClass('sidebar-rounded')){
                    $('#sidebar-left').removeClass('sidebar-rounded');
                    $('#sidebar-left').addClass($(this).val());
                }

                $('#sidebar-left').addClass($(this).val());

                // Set cookie theme name value to variable classname
                $.cookie('sidebar_type_setting',classname, {expires: 1});

            });

            $('.footer-layout-setting input').change(function(){

                // Create variable class name for layout setting
                var classname = $(this).val();

                // Add trigger change class on body HTML
                if($('body').hasClass('page-footer-fixed')){
                    $('body').removeClass('page-footer-fixed')
                }else{
                    $('body').addClass($(this).val());
                }

                // Set cookie theme name value to variable classname
                $.cookie('footer_layout_setting',classname, {expires: 1});

            });
        }

    };

}();

// Call main app init
BlankonDemo.init();
