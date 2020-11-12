jQuery(function ($) {
    'use strict';
    var $wizard1 = $('#wizard-1');
    $wizard1.bootstrapWizard({
        tabClass: 'nav nav-tabs',
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            if ($current >= $total) {
                // hide pager, finish & next on last step
                $wizard1.find('.pager .next').hide();
                $wizard1.find('.pager .finish').hide();
                $wizard1.find('.pager .finish').addClass('disabled');
            } else if ($current == $total - 1) {
                // Show Finish on penultimate tab
                $wizard1.find('.pager .next').hide();
                $wizard1.find('.pager .finish').show();
                $wizard1.find('.pager .finish').removeClass('disabled');
            }
            else {
                $wizard1.find('.pager .next').show();
                $wizard1.find('.pager .finish').hide();
                $wizard1.find('.pager .finish').addClass('disabled');
            }
        }
    });
    var $wizard2 = $('#wizard-2');
    $wizard2.bootstrapWizard({
        tabClass: 'nav nav-tabs',
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            if ($current >= $total) {
                // hide pager, finish & next on last step
                $wizard2.find('.pager .next').hide();
                $wizard2.find('.pager .finish').hide();
                $wizard2.find('.pager .finish').addClass('disabled');
            } else if ($current == $total - 1) {
                // Show Finish on penultimate tab
                $wizard2.find('.pager .next').hide();
                $wizard2.find('.pager .finish').show();
                $wizard2.find('.pager .finish').removeClass('disabled');
            }
            else {
                $wizard2.find('.pager .next').show();
                $wizard2.find('.pager .finish').hide();
                $wizard2.find('.pager .finish').addClass('disabled');
            }
        }
    });
});
