/* =========================================================
 * bootstrap-tabdrop.js 
 * http://www.eyecon.ro/bootstrap-tabdrop
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function(t){var n=function(){var n,e=[],o=!1,d=function(){clearTimeout(n),n=setTimeout(i,100)},i=function(){for(var t=0,n=e.length;n>t;t++)e[t].apply()};return{register:function(n){e.push(n),o===!1&&(t(window).bind("resize",d),o=!0)},unregister:function(t){for(var n=0,o=e.length;o>n;n++)if(e[n]==t){delete e[n];break}}}}(),e=function(e,o){this.element=t(e),this.padding=parseInt(this.element.css("padding-top")),this.dropdown=t('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#">'+o.text+' <span class="badge"></span></a><ul class="dropdown-menu"></ul></li>').prependTo(this.element),this.element.parent().is(".tabs-below")&&this.dropdown.addClass("dropup"),n.register(t.proxy(this.layout,this)),this.layout()};e.prototype={constructor:e,layout:function(){var n=[],e=this.padding;this.dropdown.removeClass("hide"),this.element.append(this.dropdown.find("li")).find(">li").not(".tabdrop").each(function(){this.offsetTop>e&&n.push(this)}),n.length>0?(n=t(n),this.dropdown.find("ul").empty().append(n),console.log(n.length),this.dropdown.find(".badge").text(n.length),1==this.dropdown.find(".active").length?this.dropdown.addClass("active"):this.dropdown.removeClass("active")):this.dropdown.addClass("hide")}},t.fn.tabdrop=function(n){return this.each(function(){var o=t(this),d=o.data("tabdrop"),i="object"==typeof n&&n;d||o.data("tabdrop",d=new e(this,t.extend({},t.fn.tabdrop.defaults,i))),"string"==typeof n&&d[n]()})},t.fn.tabdrop.defaults={text:'<i class="fa fa-align-right"></i>'},t.fn.tabdrop.Constructor=e}(window.jQuery);

