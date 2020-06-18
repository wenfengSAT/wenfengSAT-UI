var simplicityApp = angular.module('simplicityApp', ['ngRoute', 'ngAnimate', 'google-maps']);

simplicityApp.config(['$routeProvider',
		function($routeProvider) {

				$routeProvider.when('/:name', {
						templateUrl: function(urlattr) {
								return 'angular-pages/' + urlattr.name + '.html';
						},
						controller: 'mainController'
				}).
				otherwise({
						redirectTo: '#/404'
				});

		}
]);

function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

simplicityApp.controller('mainController', function($scope) {
		$scope.pageClass = 'fade-in';

		$scope.map = {
			center: {
				latitude: 45,
				longitude: -73
			},
			zoom: 8};

		$scope.map2 = {
			center: {
				latitude: 25,
				longitude: -33
			},
			zoom: 4};

		$scope.search_query = getParameterByName('query');

}).directive('search', function() {
return {
		restrict: 'A',
		link: function(scope, elm, attrs) {

			scope.keyword = scope.search_query;

			// Search action url
			scope.url = 'search.php';

			// Search result template
			scope.search_template = {name: 'search-result', url: 'angular-pages/search-result.html'};

				// Demo Result Data
				scope.result = [
				{
					Driver: {
						fname: 'John',
						lname: 'Doe',
					},
					points:322,
					country:'England'
				},
				{
					Driver: {
						fname: 'Jane',
						lname: 'Doe',
					},
					points:212,
					country:'England'
				},
				];

				/*
				$data = file_get_contents("php://input");
				$objData = json_decode($data);

				// perform query or whatever you wish, sample:
				$query = 'SELECT * FROM tbl_content WHERE title="'. $objData->data .'"';

				// Static array for this demo
				$values = array('php', 'web', 'angularjs', 'js');

				// Check if the keywords are in our array
				if(in_array($objData->data, $values)) {
					echo 'I have found what you\'re looking for!';
				} else {
					echo 'Sorry, no match!';
				}
				*/

				// Create the http post request
				// the data holds the keywords
				// The request is a JSON request.
				/*
				$http.post($scope.url, { "data" : $scope.keywords}).
				success(function(data, status) {
					$scope.status = status;
					$scope.data = data;
					$scope.result = 'demo'; // Show result from server in our <pre></pre> element
				});
				*/

		}
	};
}).directive('verticalTabs', function() {
		return {
				restrict: 'A',
				link: function(scope, elm, attrs) {
						var jqueryElm = jQuery(elm[0]);
            console.log('da');
            alert('da');
						jQuery(jqueryElm).tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
						jQuery(jqueryElm).removeClass("ui-corner-top").addClass("ui-corner-left");
				}
		};
}).directive('collapsibleAccordion', function() {
		return {
				restrict: 'A',
				link: function(scope, elm, attrs) {
						var jqueryElm = $(elm[0]);
						$(jqueryElm).accordion({
								collapsible: true
						});
				}
		};
}).directive('animatedButton', function() {
		return {
				restrict: 'A',
				link: function(scope, elm, attrs) {
						var jqueryElm = $(elm[0]);
						$(jqueryElm).on('click', function() {
								var button_effect = $(this).attr('data-effect');
								$(this).removeClass(button_effect).addClass(button_effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
										$(this).removeClass(button_effect);
										$(this).removeClass('animated');
								});
						});
				}
		};
}).directive('charts', function() {
	return {
		restrict: 'A',
		link: function(scope, elm, attrs) {
			charts.revenue_chart.init();
		}
	};
}).directive('calendar', function() {
	return {
		restrict: 'A',
		link: function(scope, elm, attrs) {
			$('.calendar-widget').datepicker();
		}
	};
}).directive('vectorMap', function() {
		return {
				restrict: 'A',
				link: function(scope, elm, attrs) {
						var jqueryElm = $(elm[0]);

						$('.australia-map').vectorMap({
								map: 'au_mill_en',
								backgroundColor: 'transparent',
								regionStyle: {
										initial: {
												fill: '#dc6ea5'
										},
										hover: {
												"fill-opacity": 0.8
										}
								}
						});

						$('.austria-map').vectorMap({
								map: 'at_mill_en',
								backgroundColor: 'transparent',
								regionStyle: {
										initial: {
												fill: '#47bac1'
										},
										hover: {
												"fill-opacity": 0.8
										}
								}
						});

						$('.germany-map').vectorMap({
								map: 'de_mill_en',
								backgroundColor: 'transparent',
								regionStyle: {
										initial: {
												fill: '#343f51'
										},
										hover: {
												"fill-opacity": 0.8
										}
								}
						});

						$('.world-map').vectorMap({
								map: 'world_mill_en',
								backgroundColor: 'transparent',
								regionStyle: {
										initial: {
												fill: '#2f3949'
										},
										hover: {
												"fill-opacity": 0.8
										}
								}
						});

				}
		};
}).directive('modals', function() {
		return {
				restrict: 'A',
				link: function(scope, elm, attrs) {
						var jqueryElm = $(elm[0]);

						/*** ToolTips ***/
						if ($('[data-toggle="tooltip"]').length) {
								$('[data-toggle="tooltip"]').each(function(i, item) {
										var dataplace = $(item).data('placement');
										$(item).tooltip({
												placement: dataplace
										});
								});
						}

						/*** PopOvers ***/
						if ($('[data-toggle="popover"]').length) {
								$('[data-toggle="popover"]').each(function(i, item) {
										$(item).popover();
								});
						}
				}
		};
}).directive('forms', function(){
	return {
		restrict: 'A',
				link: function(scope, elm, attrs) {
						var jqueryElm = $(elm[0]);

						if($("input.icheck-blue").length) {
		$(".icheck-blue").iCheck({
			checkboxClass: 'icheckbox_flat-blue',
			radioClass: 'iradio_flat-blue'
		});
					}
				}
	}
});