/*!
 * Documenter 1.6
 * http://rxa.li/documenter
 *
 * Copyright 2011, Xaver Birsak
 * http://revaxarts.com
 *
 */
 
 function doc_init() {
	$('#doc-nav li a').click(function(){
		$(this).toggleClass('open').parent().find('ul').slideToggle();
		return false;
	});
	$('#doc-nav li a').click(function(){
		jQuery('#doc-nav li a').removeClass('current');
		jQuery(this).addClass('current');
		var tg  = jQuery(this).attr('href');
		var oft = jQuery('section'+tg).offset().top;
		var st  = jQuery(document).scrollTop();
		var speed = Math.min(1600, Math.max(400, Math.round(Math.abs(oft-st) / jQuery(window).height() * 100)));
		jQuery('body, html').animate({scrollTop:oft-40}, speed, 'swing');
		return false;
	});
}
jQuery(document).ready(function(){
	buildSectionMenu();
});
function buildSectionMenu() {
	var secObj = {};
	jQuery('#content').find('>section').each(function(){
		if(jQuery(this).attr('id')) {
			secObj[jQuery(this).attr('id')] = nestedSections(jQuery(this)) ? nestedSections(jQuery(this)) : 0;
		}
	});
	var menu_levels = buildMenuLevel(secObj);
	jQuery('#doc-nav').html(menu_levels);
	doc_init();
}
function nestedSections(obj) {
	var nestedSects = {};
	var sectCount = obj.find('>section').length;
	
	if(sectCount > 0) {
		obj.find('>section').each(function(){
			nestedSects[jQuery(this).attr('id')] = nestedSections(jQuery(this)) ? nestedSections(jQuery(this)) : 0;
		});
	}
	return nestedSects;
}
function buildMenuLevel(item) {
	var menuStr = '';
	for(var key in item) {
		menuStr += '<li>';
		var depth = 0;
		var secTitle = jQuery('#'+key).find('>h3:first-child').text();
		if(!secTitle) {
			secTitle = jQuery('#'+key).find('>h4:first-child').text();
		}

		menuStr += '<a href="#'+key+'"'+(jQuery.isEmptyObject(item[key]) === false ? ' class="parent"' : '')+'>'+(secTitle.length > 0 ? secTitle : key)+'</a>';
		if(jQuery.isEmptyObject(item[key]) === false) {
			menuStr += '<ul>';
			menuStr += buildMenuLevel(item[key]);
		}
		menuStr += jQuery.isEmptyObject(item[key]) === false ? '</ul>' : '';
		menuStr += '</li>';
	}
	return menuStr;
}