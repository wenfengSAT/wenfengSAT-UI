/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(e){if(i.raw){return e}return decodeURIComponent(e.replace(t," "))}function r(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}e=n(e);try{return i.json?JSON.parse(e):e}catch(t){}}var t=/\+/g;var i=e.cookie=function(t,s,o){if(s!==undefined){o=e.extend({},i.defaults,o);if(typeof o.expires==="number"){var u=o.expires,a=o.expires=new Date;a.setDate(a.getDate()+u)}s=i.json?JSON.stringify(s):String(s);return document.cookie=[i.raw?t:encodeURIComponent(t),"=",i.raw?s:encodeURIComponent(s),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}var f=document.cookie.split("; ");var l=t?undefined:{};for(var c=0,h=f.length;c<h;c++){var p=f[c].split("=");var d=n(p.shift());var v=p.join("=");if(t&&t===d){l=r(v);break}if(!t){l[d]=r(v)}}return l};i.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==undefined){e.cookie(t,"",e.extend({},n,{expires:-1}));return true}return false}})