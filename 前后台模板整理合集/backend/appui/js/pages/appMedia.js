/*
 *  Document   : appMedia.js
 *  Author     : pixelcave
 */
var AppMedia=function(){return{init:function(){var i,a=$(".media-filter"),t=$(".media-filter-items");a.find("a").on("click",function(){i=$(this).data("category"),$(this).parent().hasClass("active")||(a.find("a").parent().removeClass("active"),$(this).parent().addClass("active"),"all"===i?t.find(".media-items").parent().hide(0,function(){$(this).show(0)}):t.find(".media-items").parent().hide(0,function(){t.find('[data-category="'+i+'"]').parent("div").show(0)}))})}}}();