/*
 * DC jQuery Vertical Accordion Menu - jQuery vertical accordion menu plugin
 * Copyright (c) 2011 Design Chemical
 * Modified in 2015 By Westilian - Kamrujaman Shohel
 * Dual licensed under the MIT and GPL xxxxxxlicenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module depending on jQuery.
        define(['jquery'], factory);
    } else {
        // No AMD. Register plugin with global jQuery object.
        factory(jQuery);
    }
}(function ($) {

    $.fn.navAccordion = function(options) {
        //set default options
        var defaults = {
            classParent	 : 'acc-parent',
            classActive	 : 'active',
            classArrow	 : 'acc-icon',
            classCount	 : 'acc-count',
            classExpand	 : 'acc-current-parent',
            classDisable : '',
            eventType	 : 'click',
            hoverDelay	 : 300,
            menuClose     : true,
            autoClose    : true,
            autoExpand	 : false,
            speed        : 'slow',
            saveState	 : true,
            disableLink	 : true,
            showCount : false
        };

        //call in the default otions
        var options = $.extend(defaults, options);

        this.each(function(options){
            var obj = this;
            $objLinks = $('li > a',obj);
            $objSub = $('li > ul',obj);
            //console.log($objLinks,$objSub+"\n");
            if(defaults.classDisable){
                $objLinks = $('li:not(.'+defaults.classDisable+') > a',obj);
                $objSub = $('li:not(.'+defaults.classDisable+') > ul',obj);
            }

            classActive = defaults.classActive;

            setUpAccordion();
            if(defaults.autoExpand == true){
                $('li.'+defaults.classExpand+' > a').addClass(classActive);
            }
            resetAccordion();

            if(defaults.eventType == 'hover'){

                var config = {
                    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
                    interval: defaults.hoverDelay, // number = milliseconds for onMouseOver polling interval
                    over: linkOver, // function = onMouseOver callback (REQUIRED)
                    timeout: defaults.hoverDelay, // number = milliseconds delay before onMouseOut
                    out: linkOut // function = onMouseOut callback (REQUIRED)
                };

                $objLinks.hoverIntent(config);
                var configMenu = {
                    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
                    interval: 1000, // number = milliseconds for onMouseOver polling interval
                    over: menuOver, // function = onMouseOver callback (REQUIRED)
                    timeout: 1000, // number = milliseconds delay before onMouseOut
                    out: menuOut // function = onMouseOut callback (REQUIRED)
                };

                $(obj).hoverIntent(configMenu);

                // Disable parent links
                if(defaults.disableLink == true){

                    $objLinks.on("click", function(e){
                        if($(this).siblings('ul').length >0){
                            e.preventDefault();
                        }
                    });
                }

            } else {

                $objLinks.on("click", function(e){

                    $activeLi = $(this).parent('li');
                    $parentsLi = $activeLi.parents('li');
                    $parentsUl = $activeLi.parents('ul');

                    // Prevent browsing to link if has child links
                    if(defaults.disableLink == true){
                        if($(this).siblings('ul').length >0){
                            e.preventDefault();
                        }
                    }

                    // Auto close sibling menus
                    if(defaults.autoClose == true){
                        autoCloseAccordion($parentsLi, $parentsUl);
                    }

                    if ($('> ul',$activeLi).is(':visible')){
                        $('ul',$activeLi).slideUp(defaults.speed);
                        $('a',$activeLi).removeClass(classActive);
                    } else {
                        $(this).siblings('ul').slideToggle(defaults.speed);
                        $('> a',$activeLi).addClass(classActive);
                    }
                });
            }

            // Set up accordion
            function setUpAccordion(){

                $arrow = '<span class="'+defaults.classArrow+'"></span>';
                var classParentLi = defaults.classParent+'-li';
                $objSub.show();
                $('li',obj).each(function(){
                    if($('> ul',this).length > 0){
                        $(this).addClass(classParentLi);
                        $('> a',this).addClass(defaults.classParent).append($arrow);
                    }
                });
                $objSub.hide();
                if(defaults.classDisable){
                    $('li.'+defaults.classDisable+' > ul').show();
                }
                if(defaults.showCount == true){
                    $('li.'+classParentLi,obj).each(function(){
                        if(defaults.disableLink == true){
                            var getCount = parseInt($('ul a:not(.'+defaults.classParent+')',this).length);
                        } else {
                            var getCount = parseInt($('ul a',this).length);
                        }
                        $('> a',this).append(' <span class="'+defaults.classCount+'">('+getCount+')</span>');
                    });
                }
            }

            function linkOver(){

                $activeLi = $(this).parent('li');
                $parentsLi = $activeLi.parents('li');
                $parentsUl = $activeLi.parents('ul');

                // Auto close sibling menus
                if(defaults.autoClose == true){
                    autoCloseAccordion($parentsLi, $parentsUl);

                }

                if ($('> ul',$activeLi).is(':visible')){
                    $('ul',$activeLi).slideUp(defaults.speed);
                    $('a',$activeLi).removeClass(classActive);
                } else {
                    $(this).siblings('ul').slideToggle(defaults.speed);
                    $('> a',$activeLi).addClass(classActive);
                }
            }

            function linkOut(){
            }

            function menuOver(){
            }

            function menuOut(){

                if(defaults.menuClose == true){
                    $objSub.slideUp(defaults.speed);
                    // Reset active links
                    $('a',obj).removeClass(classActive);
                }
            }

            // Auto-Close Open Menu Items
            function autoCloseAccordion($parentsLi, $parentsUl){
                $('ul',obj).not($parentsUl).slideUp(defaults.speed);
                // Reset active links
                $('a',obj).removeClass(classActive);
                $('> a',$parentsLi).addClass(classActive);
            }
            // Reset accordion using active links
            function resetAccordion(){
                $objSub.hide();
                var $parentsLi = $('a.'+classActive,obj).parents('li');
                $('> a',$parentsLi).addClass(classActive);
                $allActiveLi = $('a.'+classActive,obj);
                $($allActiveLi).siblings('ul').show();
            }
        });

    };

}));
