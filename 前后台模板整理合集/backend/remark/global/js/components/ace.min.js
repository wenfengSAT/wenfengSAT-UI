/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ace",{mode:"init",defaults:{},init:function(context){"undefined"!=typeof ace&&(ace.config.loadModule("ace/ext/language_tools"),$('[data-plugin="ace"]',context).each(function(){var id=$(this).attr("id"),mode=$(this).data("mode"),theme=$(this).data("theme"),editor=ace.edit(id);editor.container.style.opacity="",mode&&editor.session.setMode("ace/mode/"+mode),theme&&editor.setTheme("ace/theme/"+theme),editor.setOption("maxLines",40),editor.setAutoScrollEditorIntoView(!0),ace.config.loadModule("ace/ext/language_tools",function(){editor.setOptions({enableSnippets:!0,enableBasicAutocompletion:!0})})}))}});