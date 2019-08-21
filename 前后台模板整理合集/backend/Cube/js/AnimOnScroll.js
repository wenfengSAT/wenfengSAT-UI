;(function(window){'use strict';var docElem=window.document.documentElement;function getViewportH(){var client=docElem['clientHeight'],inner=window['innerHeight'];if(client<inner)
return inner;else
return client;}
function scrollY(){return window.pageYOffset||docElem.scrollTop;}
function getOffset(el){var offsetTop=0,offsetLeft=0;do{if(!isNaN(el.offsetTop)){offsetTop+=el.offsetTop;}
if(!isNaN(el.offsetLeft)){offsetLeft+=el.offsetLeft;}}while(el=el.offsetParent)
return{top:offsetTop,left:offsetLeft}}
function inViewport(el,h){var elH=el.offsetHeight,scrolled=scrollY(),viewed=scrolled+ getViewportH(),elTop=getOffset(el).top,elBottom=elTop+ elH,h=h||0;return(elTop+ elH*h)<=viewed&&(elBottom- elH*h)>=scrolled;}
function extend(a,b){for(var key in b){if(b.hasOwnProperty(key)){a[key]=b[key];}}
return a;}
function AnimOnScroll(el,options){this.el=el;this.options=extend(this.defaults,options);this._init();}
AnimOnScroll.prototype={defaults:{minDuration:0,maxDuration:0,viewportFactor:0},_init:function(){this.items=Array.prototype.slice.call(document.querySelectorAll('#'+ this.el.id+' > li'));this.itemsCount=this.items.length;this.itemsRenderedCount=0;this.didScroll=false;var self=this;imagesLoaded(this.el,function(){new Masonry(self.el,{itemSelector:'li',transitionDuration:0});if(Modernizr.cssanimations){self.items.forEach(function(el,i){if(inViewport(el)){self._checkTotalRendered();classie.add(el,'shown');}});window.addEventListener('scroll',function(){self._onScrollFn();},false);window.addEventListener('resize',function(){self._resizeHandler();},false);}});},_onScrollFn:function(){var self=this;if(!this.didScroll){this.didScroll=true;setTimeout(function(){self._scrollPage();},60);}},_scrollPage:function(){var self=this;this.items.forEach(function(el,i){if(!classie.has(el,'shown')&&!classie.has(el,'animate')&&inViewport(el,self.options.viewportFactor)){setTimeout(function(){var perspY=scrollY()+ getViewportH()/ 2;
self.el.style.WebkitPerspectiveOrigin='50% '+ perspY+'px';self.el.style.MozPerspectiveOrigin='50% '+ perspY+'px';self.el.style.perspectiveOrigin='50% '+ perspY+'px';self._checkTotalRendered();if(self.options.minDuration&&self.options.maxDuration){var randDuration=(Math.random()*(self.options.maxDuration- self.options.minDuration)+ self.options.minDuration)+'s';el.style.WebkitAnimationDuration=randDuration;el.style.MozAnimationDuration=randDuration;el.style.animationDuration=randDuration;}
classie.add(el,'animate');},25);}});this.didScroll=false;},_resizeHandler:function(){var self=this;function delayed(){self._scrollPage();self.resizeTimeout=null;}
if(this.resizeTimeout){clearTimeout(this.resizeTimeout);}
this.resizeTimeout=setTimeout(delayed,1000);},_checkTotalRendered:function(){++this.itemsRenderedCount;if(this.itemsRenderedCount===this.itemsCount){window.removeEventListener('scroll',this._onScrollFn);}}}
window.AnimOnScroll=AnimOnScroll;})(window);