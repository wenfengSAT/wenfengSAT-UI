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

        /* @custom validation method (smartCaptcha)
         ------------------------------------------------------------------ */

        $.validator.methods.smartCaptcha = function(value, element, param) {
            return value == param;
        };

        $("#admin-form").validate({

            /* @validation states + elements
             ------------------------------------------- */

            errorClass: "state-error",
            validClass: "state-success",
            errorElement: "em",

            /* @validation rules
             ------------------------------------------ */

            rules: {
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                useremail: {
                    required: true,
                    email: true
                },
                website: {
                    required: true,
                    url: true
                },
                language: {
                    required: true
                },
                upload1: {
                    required: true,
                    extension: "jpg|png|gif|jpeg|doc|docx|pdf|xls|rar|zip"
                },
                inputname: {
                    required: true
                },
                comment: {
                    required: true,
                    minlength: 30
                },
                mobile_phone: {
                    require_from_group: [1, ".phone-group"]
                },
                home_phone: {
                    require_from_group: [1, ".phone-group"]
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                repeatPassword: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: '#password'
                },
                mobile: {
                    required: true
                },
                mobile1: {
                    required: true
                },
                verification: {
                    required: true,
                    smartCaptcha: 19
                },
                applicant_age: {
                    required: true,
                    min: 16
                },
                licence_no: {
                    required: function(element) {
                        return $("#applicant_age").val() > 19;
                    }
                },
                child_name: {
                    required: "#parents:checked"
                }

            },

            /* @validation error messages
             ---------------------------------------------- */

            messages: {
                firstname: {
                    required: 'Enter first name'
                },
                lastname: {
                    required: 'Enter last name'
                },
                useremail: {
                    required: 'Enter email address',
                    email: 'Enter a VALID email address'
                },
                website: {
                    required: 'Enter your website URL',
                    url: 'URL should start with - http://www'
                },
                language: {
                    required: 'Select language'
                },
                upload1: {
                    required: 'Please select file',
                    extension: 'File format not supported'
                },
                inputname: {
                    required: 'Please select model'
                },
                comment: {
                    required: 'Add comments please.',
                    minlength: 'Enter at least 30 characters or more'
                },
                mobile_phone: {
                    require_from_group: 'Add a mobile number'
                },
                home_phone: {
                    require_from_group: 'Add a phone number'
                },
                password: {
                    required: 'Please enter password'
                },
                repeatPassword: {
                    required: 'Please repeat password',
                    equalTo: 'Password does not match'
                },
                mobile: {
                    required: 'Please select model'
                },
                mobile1: {
                    required: 'Please select model'
                },
                verification: {
                    required: 'Please enter correct number',
                    smartCaptcha: 'Wrong number. Please recalculate'
                },
                applicant_age: {
                    required: 'Enter age',
                    min: 'Must be 16 years or above'
                },
                licence_no: {
                    required: 'Enter licence number'
                },
                child_name: {
                    required: 'Child name not entered'
                }

            },

            /* @validation highlighting + error placement
             ---------------------------------------------------- */

            highlight: function(element, errorClass, validClass) {
                $(element).closest('.field').addClass(errorClass).removeClass(validClass);
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.field').removeClass(errorClass).addClass(validClass);
            },
            errorPlacement: function(error, element) {
                if (element.is(":radio") || element.is(":checkbox")) {
                    element.closest('.option-group').after(error);
                } else {
                    error.insertAfter(element.parent());
                }
            }

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
