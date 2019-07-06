/*
 *  Document   : compTodo.js
 *  Author     : pixelcave
 */
var CompTodo=function(){return{init:function(){var t=$(".task-list"),a=$("#add-task"),i="";$(".task-done input:checkbox").prop("checked",!0),t.on("click","input:checkbox",function(){$(this).parents("li").toggleClass("task-done")}),t.on("click",".task-close",function(){$(this).parents("li").slideUp(200)}),$("#add-task-form").on("submit",function(){return i=a.prop("value"),i&&(t.prepend('<li class="animation-slideDown"><a href="javascript:void(0)" class="task-close text-danger"><i class="fa fa-times"></i></a><label class="checkbox-inline"><input type="checkbox">'+$("<span />").text(i).html()+"</label></li>"),a.prop("value","").focus()),!1})}}}();