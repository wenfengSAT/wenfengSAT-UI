/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("masonry",{mode:"init",defaults:{itemSelector:".masonry-item"},init:function(context){if("undefined"!=typeof $.fn.masonry){var defaults=$.components.getDefaults("masonry"),callback=function(){$('[data-plugin="masonry"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.masonry(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}});