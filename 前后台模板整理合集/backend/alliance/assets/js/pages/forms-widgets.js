'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();


        /* @time picker
         ------------------------------------------------------------------ */
        $('.inline-tp').timepicker();

        $('#timepicker1').timepicker({
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('#timepicker2').timepicker({
            showOn: 'both',
            buttonText: '<i class="imoon imoon-clock"></i>',
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('#timepicker3').timepicker({
            showOn: 'both',
            disabled: true,
            buttonText: '<i class="imoon imoon-clock"></i>',
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        /* @date time picker
         ------------------------------------------------------------------ */
        $('#datetimepicker1').datetimepicker({
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('#datetimepicker2').datetimepicker({
            showOn: 'both',
            buttonText: '<i class="fa fa-calendar-o"></i>',
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('#datetimepicker3').datetimepicker({
            showOn: 'both',
            buttonText: '<i class="fa fa-calendar-o"></i>',
            disabled: true,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('.inline-dtp').datetimepicker({
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
        });

        /* @date picker
         ------------------------------------------------------------------ */
        $("#datepicker1").datepicker({
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            showButtonPanel: false,
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('#datepicker2').datepicker({
            numberOfMonths: 3,
            showOn: 'both',
            buttonText: '<i class="fa fa-calendar-o"></i>',
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('#datepicker3').datepicker({
            showOn: 'both',
            disabled: true,
            buttonText: '<i class="fa fa-calendar-o"></i>',
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $('.inline-dp').datepicker({
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            showButtonPanel: false
        });

        /* @month picker
         ------------------------------------------------------------------ */
        $("#monthpicker1").monthpicker({
            changeYear: false,
            stepYears: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            showButtonPanel: true,
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $("#monthpicker2").monthpicker({
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            showOn: 'both',
            buttonText: '<i class="fa fa-calendar-o"></i>',
            showButtonPanel: true,
            beforeShow: function(input, inst) {
                var newclass = 'admin-form';
                var themeClass = $(this).parents('.admin-form').attr('class');
                var smartpikr = inst.dpDiv.parent();
                if (!smartpikr.hasClass(themeClass)) {
                    inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                }
            }
        });

        $("#monthpicker3").monthpicker({
            changeYear: false,
            stepYears: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            showOn: 'both',
            buttonText: '<i class="fa fa-calendar-o"></i>',
            showButtonPanel: true,
            disabled: true,
        });

        $('.inline-mp').monthpicker({
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            showButtonPanel: false
        });

        /* @color picker
         ------------------------------------------------------------------ */

        var cPicker1 = $("#colorpicker1"),
            cPicker2 = $("#colorpicker2");

        var cContainer1 = cPicker1.parents('.sfcolor').parent(),
            cContainer2 = cPicker2.parents('.sfcolor').parent();

        $(cContainer1).add(cContainer2).addClass('posr');

        $("#colorpicker1").spectrum({
            color: bgInfo,
            appendTo: cContainer1,
            containerClassName: 'sp-left'
        });

        $("#colorpicker2").spectrum({
            color: bgPrimary,
            appendTo: cContainer2,
            containerClassName: 'sp-left',
            showInput: true,
            showPalette: true,
            palette: [
                [bgPrimary, bgSuccess, bgInfo],
                [bgWarning, bgDanger, bgAlert],
                [bgSystem, bgDark, bgBlack]
            ]
        });

        $("#colorpicker3").spectrum({
            color: bgLightDr,
            showInput: true
        });

        $(".inline-cp").spectrum({
            color: bgInfo,
            showInput: true,
            showPalette: true,
            chooseText: "Select Color",
            flat: true,
            palette: [
                [bgPrimary, bgSuccess, bgInfo, bgWarning,
                    bgDanger, bgAlert, bgSystem, bgDark,
                    bgSystem, bgDark, bgBlack
                ]
            ]
        });

        $("#colorpicker1, #colorpicker2, #colorpicker3, .inline-cp").show();

        /* @numeric stepper
         ------------------------------------------------------------------ */
        $('#stepper3').stepper({
            wheel_step: 0.1,
            arrow_step: 0.2
        });

        $('#stepper4').stepper({
            UI: false,
            allowWheel: false
        });

        /* @ui slider
         ------------------------------------------------------------------ */
        $("#slider1").slider({
            range: "min",
            min: 0,
            max: 100,
            value: 30,
            slide: function(event, ui) {
                $(".slider-countbox").val("$" + ui.value);
            }
        });

        $("#slider2").slider({
            range: true,
            values: [27, 63]
        });
        $("#slider3").slider({
            range: true,
            values: [7, 53]
        });

        $("#slider4").slider({
            range: true,
            values: [57, 93]
        });

        $("#slider5").slider({
            range: true,
            values: [37, 63]
        });




        // Demo Code - Form Switcher
        $('#form-switcher > button').on('click', function() {
            var btnData = $(this).data('form-layout');
            var btnActive = $('#form-elements-pane .admin-form.active');

            // Remove any existing animations and then fade current form out
            btnActive.removeClass('slideInUp').addClass('animated fadeOutRight animated-shorter');
            // When above exit animation ends remove leftover classes and animate the new form in
            btnActive.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                btnActive.removeClass('active fadeOutRight animated-shorter');
                $('#' + btnData).addClass('active animated slideInUp animated-shorter')
            });
        });

        // Cache several DOM elements
        var pageHeader = $('.content-header').find('b');
        var adminForm = $('.admin-form');
        var options = adminForm.find('.option');
        var switches = adminForm.find('.switch');
        var buttons = adminForm.find('.button');
        var Panel = adminForm.find('.panel');

        // Form Skin Switcher
        $('#skin-switcher a').on('click', function() {
            var btnData = $(this).data('form-skin');

            $('#skin-switcher a').removeClass('item-active');
            $(this).addClass('item-active')

            adminForm.each(function(i, e) {
                var skins = 'theme-primary theme-info theme-success theme-warning theme-danger theme-alert theme-system theme-dark'
                var panelSkins = 'panel-primary panel-info panel-success panel-warning panel-danger panel-alert panel-system panel-dark'
                $(e).removeClass(skins).addClass('theme-' + btnData);
                Panel.removeClass(panelSkins).addClass('panel-' + btnData);
                pageHeader.removeClass().addClass('text-' + btnData);
            });

            $(options).each(function(i, e) {
                if ($(e).hasClass('block')) {
                    $(e).removeClass().addClass('block mt15 option option-' + btnData);
                } else {
                    $(e).removeClass().addClass('option option-' + btnData);
                }
            });

            // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
            $('body').find('.ui-slider').each(function(i, e) {
                $(e).addClass('slider-primary');
            });

            $(switches).each(function(i, ele) {
                if ($(ele).hasClass('switch-round')) {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-round switch-' + btnData);
                    } else {
                        $(ele).removeClass().addClass('switch switch-round switch-' + btnData);
                    }
                } else {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-' + btnData);
                    } else {
                        $(ele).removeClass().addClass('switch switch-' + btnData);
                    }
                }

            });
            buttons.removeClass().addClass('button btn-' + btnData);
        });

        setTimeout(function() {
            adminForm.addClass('theme-primary');
            Panel.addClass('panel-primary');
            pageHeader.addClass('text-primary');

            $(options).each(function(i, e) {
                if ($(e).hasClass('block')) {
                    $(e).removeClass().addClass('block mt15 option option-primary');
                } else {
                    $(e).removeClass().addClass('option option-primary');
                }
            });

            // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
            $('body').find('.ui-slider').each(function(i, e) {
                $(e).addClass('slider-primary');
            });

            $(switches).each(function(i, ele) {
                if ($(ele).hasClass('switch-round')) {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-round switch-primary');
                    } else {
                        $(ele).removeClass().addClass('switch switch-round switch-primary');
                    }
                } else {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-primary');
                    } else {
                        $(ele).removeClass().addClass('switch switch-primary');
                    }
                }
            });
            buttons.removeClass().addClass('button btn-primary');
        }, 800);
    });

})(jQuery);
