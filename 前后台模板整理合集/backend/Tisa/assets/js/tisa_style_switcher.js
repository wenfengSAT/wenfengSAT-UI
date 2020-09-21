// style switcher

	$(function() {
		
		var $style_switcher_styles =
		'<style>'+
		'#style_switcher {position: fixed;z-index: 1000;top: 10%;right: -191px;margin-right: 0;padding: 10px;width: 191px;}'+
		'#style_switcher,#style_switcher .switcher_toggle {border-width: 1px 0 1px 1px;border-style: solid;border-color: #e1e1e1;border-color: rgba(0, 0, 0, 0.2);background: #fff;}'+
		'#style_switcher .switcher_toggle {position: absolute;left: -31px;top: 10px;width: 30px;height: 30px;line-height: 30px;text-align: center;font-size: 19px;color: #555;background:#ddd;outline: none;}'+
		'#style_switcher ul {margin: 0;padding: 0;}'+
		'#style_switcher ul li {list-style: none;float: left;width: 26px;height: 26px;margin-bottom: 10px;text-indent: -9999px;cursor: pointer;-webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);-moz-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);}'+
		'#style_switcher ul li + li {margin-left: 10px;}'+
		'#style_switcher ul li:nth-child(5n+6) {clear: left;margin-left: 0;}'+
		'#style_switcher .style_items + .style_items {margin-top: 20px;}'+
		'#style_switcher .style_title {font-size: 12px;margin-bottom: 12px;padding-bottom: 2px;border-bottom: 1px dashed #e1e1e1;}'+
		'#style_switcher .radio {font-size: 12px;padding-top: 0;}'+
		'#style_switcher .radio input {margin-top: 2px;}'+
		'#style_switcher .style_active {-webkit-border-radius: 26px;-moz-border-radius: 26px;border-radius: 26px;}'+
		'#style_switcher #style_reset {margin-top: 20px;}'+
		'</style>'
		;
		$('head').append($style_switcher_styles);
		
		var $style_switcher = 
		'<div id="style_switcher">'+
        '  <a href="#" class="switcher_toggle"><i class="ion-wrench"></i></a>'+
		'  <div class="style_items">'+
		'    <p class="style_title">Theme</p>'+
		'    <ul class="clearfix" id="theme_switch">'+
		'      <li class="style_active" style="background:#363F44" title="">Default Theme</li>'+
		'      <li style="background:#853f00" title="theme_a">Theme A</li>'+
		'      <li style="background:#34495e" title="theme_b">Color B</li>'+
		'      <li style="background:#3e1e4b" title="theme_c">Color C</li>'+
		'      <li style="background:#f1f1f1" title="theme_d">Color D</li>'+
		'      <li style="background:#217821" title="theme_e">Color E</li>'+
		'      <li style="background:#801718" title="theme_f">Color F</li>'+
		'      <li style="background:#006577" title="theme_g">Color G</li>'+
		'    </ul>'+
		'  </div>'+
		'  <div class="style_items hidden-xs hidden-sm" id="sidebar_switch">'+
		'    <p class="style_title">Navigation size</p>'+
		'    <label class="radio-inline">'+
		'      <input type="radio" name="navigation_size" id="navigation_regular" value="regular" checked> Regualar'+
		'    </label>'+
		'    <label class="radio-inline">'+
		'      <input type="radio" name="navigation_size" id="navigation_narrow" value="narrow"> Narrow'+
		'    </label>'+
		'  </div>'+
		'  <div class="text-center">'+
		'    <button class="btn btn-default btn-sm" id="style_reset">Reset</button>'+
		'  </div>'+
        '</div>';
		
		$('body').append($style_switcher);
		
		$('#theme_switch li').on('click', function() {
			$('#theme_switch li').removeClass('style_active');
			$(this).addClass('style_active');
			$('body').removeClass('theme_a theme_b theme_c theme_d theme_e theme_f theme_g').addClass($(this).attr('title'));
		})
		
		$('input[name="navigation_size"]').on('change', function() {
			var this_val = $(this).val();
			if (this_val == 'narrow' ) {
				$('body').addClass('side_nav_narrow');
			} else {
				$('body').removeClass('side_nav_narrow');
			}
			$(window).resize();
		})
		
		//* show/hide style switcher
		$('.switcher_toggle').on('click', function(e) {
			if(!$('#style_switcher').hasClass('switcher_open')) {
				$('#style_switcher').animate({ right: 0 },200, function() {
					$(this).addClass('switcher_open')  
				})  
			} else {
				$('#style_switcher').animate({ right: '-191px'},200, function() {
					$(this).removeClass('switcher_open')  
				})  
			}
			e.preventDefault();
		})
		
	})