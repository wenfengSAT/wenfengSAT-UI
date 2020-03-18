/*
 * ************************************************************* *
 * Name       : Auto Save Form                                   *
 * Date       : January 2013                                     *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : 2014-01-11 15:12:25 UTC+02:00                    *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */

;(function(e){if(typeof define==="function"&&define.amd){define([jquery],e)}else{e(jQuery)}})(function(e){function n(n,r){this.obj=e(n);this.o=e.extend({},e.fn[t].defaults,r);this.form=this.obj;this.init()}var t="autoSaveForms";n.prototype={init:function(){self=this;storage=!!function(){var e,t=+(new Date);try{localStorage.setItem(t,t);e=localStorage.getItem(t)==t;localStorage.removeItem(t);return e}catch(n){}}()&&localStorage;if(storage){key="asf_"+location.pathname+"_"+this.form.attr("id");getKey=localStorage.getItem(key)}if(storage){self._restore();self._save()}},_restore:function(){if(getKey!=null){var t=JSON.parse(getKey);e.each(t,function(t,n){if(t==0&&n.expireafter<(new Date).getTime()){localStorage.removeItem(key);return false}else if(t>0){if(e("[name="+n.name+"]").is(":checkbox, :radio")){self.obj.find("[name="+n.name+"]").removeAttr("checked");self.obj.find("[name="+n.name+'][value="'+n.value+'"]').attr("checked",true)}else{self.obj.find("[name="+n.name+"]").val(n.value)}}})}},_save:function(){var e=self.obj.attr("data-asf-time");var t=self.obj.attr("data-asf-expireafter");if(!e||e===undefined){var n=self.o.saveTime}else{n=e}if(!t||t===undefined){var r=self.o.expireAfter}else{r=t}var i=function(){setInterval(function(){var e=self.form.serializeArray();e.unshift({expireafter:(new Date).getTime()+r*6e4});var t=JSON.stringify(e);localStorage.setItem(key,t);if(typeof self.o.onSave=="function"){self.o.onSave.call(this,{item:self.form,output:self.form.serializeArray()})}},n*1e3);self.form.off("focus","input, textarea, select",i)};self.form.on("focus","input, textarea, select",i)},clear:function(e){localStorage.removeItem("asf_"+location.pathname+"_"+e)},update:function(){},destroy:function(){e.removeData(this.obj,this.pluginName)}};e.fn[t]=function(r,i){return this.each(function(){var s=e(this);var o=s.data(t);var u=typeof r=="object"&&r;if(!o){s.data(t,o=new n(this,u))}if(typeof r=="string"){o[r](i)}})};e.fn[t].defaults={saveTime:300,expireAfter:1,onSave:function(e){}}})