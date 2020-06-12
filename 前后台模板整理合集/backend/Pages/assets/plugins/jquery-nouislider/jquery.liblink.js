(function($){'use strict';function isInstance(a){return a instanceof $||($.zepto&&$.zepto.isZ(a));}
function fromPrefix(target,method){if(typeof target==='string'&&target.indexOf('-inline-')===0){this.method=method||'html';this.target=this.el=$(target.replace('-inline-','')||'<div/>');return true;}}
function fromString(target){if(typeof target==='string'&&target.indexOf('-')!==0){this.method='val';var element=document.createElement('input');element.name=target;element.type='hidden';this.target=this.el=$(element);return true;}}
function fromFunction(target){if(typeof target==='function'){this.target=false;this.method=target;return true;}}
function fromInstance(target,method){if(isInstance(target)&&!method){if(target.is('input, select, textarea')){this.method='val';this.target=target.on('change.liblink',this.changeHandler);}else{this.target=target;this.method='html';}
return true;}}
function fromInstanceMethod(target,method){if(isInstance(target)&&(typeof method==='function'||(typeof method==='string'&&target[method]))){this.method=method;this.target=target;return true;}}
var
creationFunctions=[fromPrefix,fromString,fromFunction,fromInstance,fromInstanceMethod];function Link(target,method,format){var that=this,valid=false;this.changeHandler=function(changeEvent){var decodedValue=that.formatInstance.from($(this).val());if(decodedValue===false||isNaN(decodedValue)){$(this).val(that.lastSetValue);return false;}
that.changeHandlerMethod.call('',changeEvent,decodedValue);};this.el=false;this.formatInstance=format;$.each(creationFunctions,function(i,fn){valid=fn.call(that,target,method);return!valid;});if(!valid){throw new RangeError("(Link) Invalid Link.");}}
Link.prototype.set=function(value){var args=Array.prototype.slice.call(arguments),additionalArgs=args.slice(1);this.lastSetValue=this.formatInstance.to(value);additionalArgs.unshift(this.lastSetValue);(typeof this.method==='function'?this.method:this.target[this.method]).apply(this.target,additionalArgs);};function LinkAPI(origin){this.items=[];this.elements=[];this.origin=origin;}
LinkAPI.prototype.push=function(item,element){this.items.push(item);if(element){this.elements.push(element);}};LinkAPI.prototype.reconfirm=function(flag){var i;for(i=0;i<this.elements.length;i+=1){this.origin.LinkConfirm(flag,this.elements[i]);}};LinkAPI.prototype.remove=function(flag){var i;for(i=0;i<this.items.length;i+=1){this.items[i].target.off('.liblink');}
for(i=0;i<this.elements.length;i+=1){this.elements[i].remove();}};LinkAPI.prototype.change=function(value){if(this.origin.LinkIsEmitting){return false;}
this.origin.LinkIsEmitting=true;var args=Array.prototype.slice.call(arguments,1),i;args.unshift(value);for(i=0;i<this.items.length;i+=1){this.items[i].set.apply(this.items[i],args);}
this.origin.LinkIsEmitting=false;};function binder(flag,target,method,format){if(flag===0){flag=this.LinkDefaultFlag;}
if(!this.linkAPI){this.linkAPI={};}
if(!this.linkAPI[flag]){this.linkAPI[flag]=new LinkAPI(this);}
var linkInstance=new Link(target,method,format||this.LinkDefaultFormatter);if(!linkInstance.target){linkInstance.target=$(this);}
linkInstance.changeHandlerMethod=this.LinkConfirm(flag,linkInstance.el);this.linkAPI[flag].push(linkInstance,linkInstance.el);this.LinkUpdate(flag);}
$.fn.Link=function(flag){var that=this;if(flag===false){return that.each(function(){if(!this.linkAPI){return;}
$.map(this.linkAPI,function(api){api.remove();});delete this.linkAPI;});}
if(flag===undefined){flag=0;}else if(typeof flag!=='string'){throw new Error("Flag must be string.");}
return{to:function(a,b,c){return that.each(function(){binder.call(this,flag,a,b,c);});}};};}(window.jQuery||window.Zepto));