/*
 *  Document   : compGallery.js
 *  Author     : pixelcave
 */
var CompGallery=function(){return{init:function(){var a,i=$(".gallery-filter"),n=$(".gallery");i.find("a").on("click",function(){a=$(this).data("category"),$(this).hasClass("active")||(i.find("a").removeClass("active"),$(this).addClass("active"),"all"===a?n.find(".gallery-image-container").parent().hide(0,function(){$(this).show(0)}):n.find(".gallery-image-container").parent().hide(0,function(){n.find('[data-category="'+a+'"]').parent("div").show(0)}))})}}}();