/*
 * ************************************************************* *
 * Name       : Bootstrap tabs extend                            *
 * Date       : December 2012                                    *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : 2013-12-22 14:00:14 UTC+02:00                    *
 * Developer  : Mark                                             *
 * Dependency : bootstrap tabs                                   *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */

;(function(e){if(typeof define==="function"&&define.amd){define([jquery],e)}else{e(jQuery)}})(function(e){function n(n,r){this.obj=e(n);this.o=e.extend({},e.fn[t].defaults,r);this.init()}var t="bootstrapTabsExtend";n.prototype={init:function(){var e=this;e._responsive();e._ajax()},_responsive:function(t){function r(){var t=n.obj;var r=t.width();var i=0;var s=t.attr("data-tabs-breakpoint");t.children("li").each(function(){i+=e(this).width()});if(i>r){t.addClass(n.o.responsiveClass).attr("data-tabs-breakpoint",i)}if(s&&e.trim(s)&&s<r){t.removeClass(n.o.responsiveClass).removeAttr("data-tabs-breakpoint")}}var n=this;if(n.o.responsive===true){e(window).resize(function(){r()})}},_ajax:function(){function n(n){var r=n.data("tabs-load");var i=n.attr("href");if(r&&e.trim(r)&&!n.hasClass("ajax-is-loaded")){e(i).load(r,function(r,s,o){if(s=="error"){e(i).html(o.status+" "+o.statusText)}else{n.addClass("ajax-is-loaded")}if(typeof t.o.onLoad=="function"){t.o.onLoad.call(this,r,s,o)}})}}var t=this;if(t.o.preloadAjax===true){t.obj.find("a").each(function(){n(e(this))})}else{var r=t.obj.find(".active");if(t.obj.hasClass("ext-tabs-btn-group")){n(r)}else{n(r.children())}}t.obj.on("click","a",function(t){n(e(this));t.preventDefault()})},update:function(){var e=this},destroy:function(){var t=this;e(t.obj).removeattr("data-tabs-breakpoint");e.removeData(t.obj,t.pluginName)}};e.fn[t]=function(r,i){return this.each(function(){var s=e(this);var o=s.data(t);var u=typeof r=="object"&&r;if(!o){s.data(t,o=new n(this,u))}if(typeof r=="string"){o[r](i)}})};e.fn[t].defaults={responsive:true,responsiveClass:"ext-tabs-responsive-mode",preloadAjax:false,onLoad:function(){}}})