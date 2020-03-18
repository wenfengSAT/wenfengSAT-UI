/*
 * ************************************************************* *
 * Name       : Easy File Tree                                   *
 * Date       : Nov 2012                                         *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : 2013-12-07 00:37:16 UTC+02:00                    *
 * Developer  : Richard                                          *
 * Dependency :                                                  *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
 
;(function(e){if(typeof define==="function"&&define.amd){define([jquery],e)}else{e(jQuery)}})(function(e){e.fn.easyFileTree=function(t){t=e.extend({},e.fn.easyFileTree.options,t);return this.each(function(){var n=e(this);var r=t.speed;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch){var i="touchstart"}else{var i="click"}n.find("li").on(i,this,function(t){t.stopPropagation();if(e(this).hasClass("eft-open")){e(this).children(".fa-folder-open").removeClass("fa-folder-open").addClass("fa-folder").next("ul").slideUp(r,function(){e(this).parent("li").removeClass("eft-open").addClass("eft-closed")})}else{e(this).children(".fa-folder").removeClass("fa-folder").addClass("fa-folder-open").next("ul").slideDown(r,function(){e(this).parent("li").removeClass("eft-closed").addClass("eft-open")})}})})};e.fn.easyFileTree.options={speed:200}})