 //========================================================================
// Mock Server-Side HTTP End Points
//========================================================================
(function() {
	'use strict';

	$.mockjax({
		url: "/example-lazy-load",
		responseTime: 2500,
		response: function (settings) {
			this.responseText = [
				'<p>',
					'To loading indicator see <a href="ui-elements-loading-overlay.html">UI Elements - Loading Overlay</a>',
					'<br/>',
					'<br/>',
					'And for the lazy load just add the following attribute to a div ',
					'<code>ic-get-from="{URL}" ic-trigger-on="load"</code>',
				'</p>'
			].join('');
		}
	});

	$.mockjax({
		url: "/example-refresh",
		responseTime: 1000,
		response: function (settings) {
			var date = new Date();
			this.responseText = [
				'<p>',
					'Last refreshed at: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
				'</p>'
			].join('');
		}
	});

	$.mockjax({
		url: "/example-load-more",
		responseTime: 1000,
		response: function (settings) {
			var date = new Date();
			this.responseText = [
				'<p>',
					'New Content loaded at: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
				'</p>'
			].join('');
		}
	});

	$.mockjax({
		url: "/example-polling",
		responseTime: 1000,
		response: function (settings) {
			var date = new Date();
			this.responseText = [
				'<li>',
					'New Content loaded at: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
				'</li>'
			].join('');
		}
	});

	$.mockjax({
		url: "/example-scroll",
		responseTime: 200,
		response: function (settings) {
			var date = new Date();
			this.responseText = [
				'<p>',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.',
				'</p>'
			].join('');
		}
	});
})();