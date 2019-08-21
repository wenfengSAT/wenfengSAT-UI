/*global $ */

//Normal Wizard
$('#pills').bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'debug': false,
    previousSelector: '.previous',
    nextSelector: '.next',
    onTabClick: function (tab, navigation, index, currentIndex) {
        "use strict";
        if (currentIndex > index) {
            return false;
        }
    },
    onTabShow: function (tab, navigation, index) {
        "use strict";
        var $total = navigation.find('li').length,
            $current = index + 1,
            $percent = ($current / $total) * 100,
            $bar = $('#pills').find('.bar>.progress-bar');
        $bar.css({
            width: $percent + '%'
        });
        if ($percent < 40) {
            $bar.removeClass('progress-bar-warning').removeClass('progress-bar-success').addClass('progress-bar-danger');
        } else if ($percent < 90) {
            $bar.removeClass('progress-bar-success').removeClass('progress-bar-danger').addClass('progress-bar-warning');
        } else {
            $bar.removeClass('progress-bar-warning').removeClass('progress-bar-danger').addClass('progress-bar-success');
        }
    }
});
//End Normal Wizard

//Side Wizard
$('#pills-side').bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'debug': false,
    previousSelector: '.previous',
    nextSelector: '.next',
    onTabClick: function (tab, navigation, index, currentIndex) {
        "use strict";
        if (currentIndex > index) {
            return false;
        }
    },
    onTabShow: function (tab, navigation, index) {
        "use strict";
        var $total = navigation.find('li').length,
            $current = index + 1,
            $percent = ($current / $total) * 100,
            $bar = $('#pills-side').find('.bar>.progress-bar');
        $bar.css({
            width: $percent + '%'
        });
        if ($percent < 40) {
            $bar.removeClass('progress-bar-warning').removeClass('progress-bar-success').addClass('progress-bar-danger');
        } else if ($percent < 90) {
            $bar.removeClass('progress-bar-success').removeClass('progress-bar-danger').addClass('progress-bar-warning');
        } else {
            $bar.removeClass('progress-bar-warning').removeClass('progress-bar-danger').addClass('progress-bar-success');
        }
    }
});
//End Side Wizard

//Slimscroll Terms of Service
$(function () {
    "use strict";
    $('.terms-of-service').slimScroll({
        height: 380
    });
});
//End Slimscroll Terms of Service

//Initialize Datepicker
$('.datepicker').datepicker();
//End Initialize Datepicker