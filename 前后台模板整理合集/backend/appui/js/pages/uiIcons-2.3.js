/*
 *  Document   : uiIcons.js
 *  Author     : pixelcave
 */
var UiIcons = function() {var $searchItems, $searchValue;return {init: function() {var titleAttr;$('#page-content .btn').click(function(){titleAttr = $(this).attr('data-original-title');$('#icon-gen-input').val( '<i class="' + titleAttr + '"></i>' ).select();$('html,body').animate({ scrollTop: $('#icon-gen').offset().top - 15 });return false;});$searchItems = $('.js-icon-list a');$('.js-icon-search').on('keyup', function(){$searchValue = $(this).val().toLowerCase();if ($searchValue.length > 2){$searchItems.hide();$searchItems.each(function(){if ($('i', this).attr('class').match($searchValue)){$(this).show();}});}else if($searchValue.length === 0){$searchItems.show();}});}};}();