/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("scrollable",{mode:"init",defaults:{namespace:"scrollable",contentSelector:"> [data-role='content']",containerSelector:"> [data-role='container']"},init:function(context){if($.fn.asScrollable){var defaults=$.components.getDefaults("scrollable");$('[data-plugin="scrollable"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asScrollable(options)})}}});