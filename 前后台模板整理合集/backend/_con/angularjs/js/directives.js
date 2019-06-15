/*
 * GLobal Directives
 */

// Spinner - used on page or content load
conAngular.directive('ngLoadSpinner', ['$rootScope',
  function($rootScope) {
    return {
      link: function(scope, element, attrs) {
        function showSpin() {
          element.removeClass('hide');
        }
        function hideSpin() {
          element.addClass('hide');
        }

        // by defult hide spinner
        hideSpin();

        // display the spinner bar whenever the route changes(the content part started loading)
        $rootScope.$on('$stateChangeStart', function() {
          showSpin();
        });

        // hide the spinner bar on rounte change success(after the content loaded)
        $rootScope.$on('$stateChangeSuccess', function() {
          // hide spinner
          hideSpin();

          // select item in sidebar
          if(conApp.yaySelectItem) {
            conApp.yaySelectItem( '#' + $rootScope.$state.current.url );
          }

          // scroll to top
          $('html, body').animate({scrollTop: $("body").offset().top}, 300);
        });

        // handle errors
        $rootScope.$on('$stateNotFound', function() {
          hideSpin();
        });

        // handle errors
        $rootScope.$on('$stateChangeError', function() {
          hideSpin();
        });
      }
    };
  }
])

// Handle global links click
conAngular.directive('a', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
        elem.on('click', function(e) {
          // prevent link click
          e.preventDefault();
        });
      }
    }
  };
});