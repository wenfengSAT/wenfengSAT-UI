/*
 *  Document   : compNestable.js
 *  Author     : pixelcave
 */
var CompNestable=function(){var t=function(t){var e=t.length?t:$(t.target),a=e.data("output");a.html(window.JSON?window.JSON.stringify(e.nestable("serialize")):"JSON browser support required!")};return{init:function(){var e=$(".dd"),a=$("#nestable1"),n=$("#nestable2");a.nestable({group:1}).on("change",t),n.nestable({group:1}).on("change",t),t(a.data("output",$("#nestable1-output"))),t(n.data("output",$("#nestable2-output"))),$("#nestable-actions > a").on("click",function(){var t=$(this).data("action");"collapse"==t?e.nestable("collapseAll"):"expand"==t&&e.nestable("expandAll")})}}}();