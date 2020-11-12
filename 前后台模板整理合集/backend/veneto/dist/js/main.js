jQuery(function ($) {
    'use strict';

    var $floatBreakpoint = $('<div class="grid-float-breakpoint" style="position:absolute;top:-9999px;width:1px;height:1px;"></div>');
    var $xsVisible = $('<div class="visible-xs" style="position:absolute;top:-9999px;width:1px;height:1px;"></div>');
    var $smVisible = $('<div class="visible-sm" style="position:absolute;top:-9999px;width:1px;height:1px;"></div>');

    function openActiveTab(url) {
        if (url.match('#')) {
            $('.nav-tabs a[href=#' + url.split('#')[1] + ']').tab('show');
        }
    }

    function equalHeight(objects) {
        var max = 0;
        objects.each(function () {
            var height = $(this).height();
            max = height > max ? height : max;
        });
        objects.height(max);
    }

    $('body').append($floatBreakpoint).append($xsVisible).append($smVisible);
    $('[data-sidebar-toggle]').on('click', function () {
        if ($floatBreakpoint.is(':visible')) {
            $('body').toggleClass('sidebar-condensed');
        } else {
            $('body').toggleClass('sidebar-opened');
        }
    });

    $('.sidebar .nav').navgoco({
        caretHtml: false,
        accordion: true,
        onClickBefore: function () {
            if ($('body').hasClass('sidebar-condensed')) {
                var $parent = $(this).parent();
                // is first level menu
                if ($parent.parent().hasClass('nav')) {
                    $parent.siblings().removeClass('nav-dropdown-open');

                    if ($parent.hasClass('nav-dropdown')) {
                        $parent.toggleClass('nav-dropdown-open');
                    }

                    return false;
                }
            }
            return true;
        }
    });

    openActiveTab(document.location.toString());

    $('[data-rel="collapse"]').on('click', function () {
        var $this = $(this);
        var $panel = $this.closest('.panel');
        if ($panel.hasClass('collapsed')) {
            $this.children('.fa').removeClass('fa-plus').addClass('fa-minus');
            $panel.children('[class!="panel-heading"]').slideDown(300, function () {
                $panel.removeClass('collapsed');
            });
        } else {
            $this.children('.fa').removeClass('fa-minus').addClass('fa-plus');
            $panel.children('[class!="panel-heading"]').slideUp(300, function () {
                $panel.addClass('collapsed');
            });
        }
        return false;
    });

    $('[data-rel="reload"]').on('click', function () {
        return false;
    });

    $('[data-rel="close"]').on('click', function () {
        jQuery(this).closest('.panel').fadeOut(300);
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip().on('show.bs.tooltip', function () {
        var style = $(this).data('style');
        if (style && style !== '') {
            $(this).data('bs.tooltip').tip().addClass('tooltip-' + style);
        }
    });
    $('[data-toggle="popover"]').popover().on('show.bs.popover', function () {
        var i, styles, style = $(this).data('style') || '';
        styles = style.split(' ');
        if (styles.length > 0) {
            for (i in styles) {
                styles[i] = 'popover-' + styles[i];
            }
            $(this).data('bs.popover').tip().addClass(styles.join(' '));
        }
    });

    $('[data-sync-height]').each(function () {
        equalHeight($(this).children());
    });

    $('.mail-navigation .active').on('click', function(e){
        if ($xsVisible.is(':visible') || $smVisible.is(':visible')) {
            e.preventDefault();
            $(this).closest('.mail-navigation').toggleClass('open');

            return false;
        }
    });
    // Setup default options for Bootstrap3 WYSIHTML5
    if($.fn.wysihtml5){
        $.fn.wysihtml5.defaultOptions = $.extend({}, $.fn.wysihtml5.defaultOptions, {
            color: true
        });
    }
});
