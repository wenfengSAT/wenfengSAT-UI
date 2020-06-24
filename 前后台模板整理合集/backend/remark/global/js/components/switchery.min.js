/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("switchery",{mode:"init",defaults:{color:$.colors("primary",600)},init:function(context){if("undefined"!=typeof Switchery){var defaults=$.components.getDefaults("switchery");$('[data-plugin="switchery"]',context).each(function(){var options=$.extend({},defaults,$(this).data());new Switchery(this,options)})}}});