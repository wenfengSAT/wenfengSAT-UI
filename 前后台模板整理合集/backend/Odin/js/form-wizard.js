$(function () {
    /************ #rootwizard-basic ***********/
    $('#rootwizard').bootstrapWizard({onTabShow: function (tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;
        var $percent = ($current / $total) * 100;
        $('#rootwizard').find('.bar').css({width: $percent + '%'});
    }
    });
    $('#rootwizard-tabdetail').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-tabdetail').find('.bar').css({width: $percent + '%'});
        },
        'onNext': function (tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function (tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        }, 'tabClass': 'nav nav-pills', 'nextSelector': '.button-next', 'previousSelector': '.button-previous'
    });
    $('#rootwizard-tabdetail2').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-tabdetail2').find('.bar').css({width: $percent + '%'});
        },
        'onNext': function (tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function (tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        }, 'tabClass': 'nav nav-pills', 'nextSelector': '.button-next', 'previousSelector': '.button-previous'
    });

    /*****************************************************************/
    /************ #rootwizard-custom-arrow ***********/
    $('#rootwizard-custom-arrow').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-custom-arrow').find('.bar').css({width: $percent + '%'});
        },
        'onNext': function (tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function (tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'bwizard-steps', 'nextSelector': '.button-next', 'previousSelector': '.button-previous'
    });

    /*****************************************************************/
    /************ #rootwizard-custom-circle ***********/
    $('#rootwizard-custom-circle').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-custom-circle').find('.bar').css({width: $percent + '%'});
        },
        'onNext': function (tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function (tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'bwizard-steps-o', 'nextSelector': '.button-next', 'previousSelector': '.button-previous'
    });

    $('#rootwizard-custom-oval').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-custom-oval').find('.bar').css({width: $percent + '%'});
        },
        'onNext': function (tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function (tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'bwizard-steps-o', 'nextSelector': '.button-next', 'previousSelector': '.button-previous'
    });
    /*****************************************************************/
    /************ #rootwizard-tab-left ***********/
    $('#rootwizard-tab-left').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-tab-left').find('.bar').css({width: $percent + '%'});
        },
        'onNext': function (tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function (tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    //alert($temp);
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'nav nav-tabs', 'nextSelector': '.button-next', 'previousSelector': '.button-previous'

    });

    /*****************************************************************/
    /************ #rootwizard-tab-right ***********/
    $('#rootwizard-tab-right').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-tab-right').find('.bar').css({width: $percent + '%'});
        },
        'onNext': function (tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    alert("You must enter field");
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function (tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function () {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    alert("You must enter field");
                    $approved = 0;
                    return false;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'nav nav-tabs', 'nextSelector': '.button-next', 'previousSelector': '.button-previous'
    });

    /*****************************************************************/

});