/*
 * Con Full Assets List
 *
 * Usage:
 * var result = conAssets('simpleWeather,d3,nvd3')
 * result ==>
 *  [
 *    '../assets/simpleWeather/jquery.simpleWeather.min.js',
 *    '../assets/d3/d3.min.js',
 *    '../assets/nvd3/nv.d3.min.css',
 *    '../assets/nvd3/nv.d3.min.js',
 *    '../assets/nvd3/angular-nvd3.min.js'
 *  ]
 */
window.conAssets = function(get) {
  var list = {
    simpleWeather: ['../assets/simpleWeather/jquery.simpleWeather.min.js'],

    sparkline: [
      '../assets/sparkline/jquery.sparkline.min.js',
      '../assets/angularjs-sparkline/angularjs.sparkline.js'
    ],

    flot: [
      '../assets/flot/jquery.flot.min.js',
      '../assets/flot/jquery.flot.time.min.js',
      '../assets/flot/jquery.flot.pie.min.js',
      '../assets/flot/jquery.flot.tooltip.min.js',
      '../assets/flot/jquery.flot.categories.min.js',
      '../assets/angularjs-flot/angular-flot.js'
    ],

    nvd3: [
      '../assets/d3/d3.min.js',
      '../assets/nvd3/nv.d3.min.css',
      '../assets/nvd3/nv.d3.min.js',
      '../assets/angularjs-nvd3/angular-nvd3.min.js'
    ],

    rickshaw: [
      '../assets/d3/d3.min.js',
      '../assets/rickshaw/rickshaw.min.css',
      '../assets/rickshaw/rickshaw.min.js',
      '../assets/angularjs-rickshaw/rickshaw-angularjs.js'
    ],

    markitup: [
      '../assets/markitup/skins/_con/style.css',
      '../assets/markitup/sets/default/style.css',
      '../assets/markitup/sets/default/set.js',
      '../assets/markitup/jquery.markitup.js'
    ],

    ckeditor: ['../assets/ckeditor/ckeditor.js'],

    select2: [
      '../assets/select2/css/select2.min.css',
      '../assets/select2/js/select2.full.min.js'
    ],

    tagsinput: [
      '../assets/jquery-tags-input/jquery.tagsinput.css',
      '../assets/jquery-tags-input/jquery.tagsinput.js'
    ],

    dropzone: [
      '../assets/dropzone/dropzone.min.css',
      '../assets/dropzone/dropzone.min.js'
    ],

    clockpicker:[
      '../assets/jquery-clockpicker/jquery-clockpicker.min.css',
      '../assets/jquery-clockpicker/jquery-clockpicker.min.js'
    ],

    pikaday: [
      '../assets/pikaday/pikaday.css',
      '../assets/pikaday/pikaday.js',
      '../assets/pikaday/pikaday.jquery.js'
    ],

    spectrum: [
      '../assets/spectrum/spectrum.css',
      '../assets/spectrum/spectrum.js'
    ],

    inputmask: ['../assets/jquery-input-mask/jquery.inputmask.bundle.min.js'],

    parsley: ['../assets/parsley/parsley.min.js'],
    
    gmaps: ['../assets/gmaps/gmaps.min.js'],

    jvectormap: [
      '../assets/jquery-jvectormap/jquery-jvectormap.css',
      '../assets/jquery-jvectormap/jquery-jvectormap.min.js',
      '../assets/jquery-jvectormap/jquery-jvectormap-world-mill-en.js',
      '../assets/jquery-jvectormap/gdp-data.js',
      '../assets/angulajs-jvectormap/angularjs-jvectormap.js'
    ],

    dataTables: [
      '../assets/dataTables/js/jquery.dataTables.min.js',
      '../assets/dataTables/extensions/TableTools/js/dataTables.tableTools.min.js',
      '../assets/dataTables/extensions/Scroller/js/dataTables.scroller.min.js',
      '../assets/angularjs-dataTables/angular-datatables.min.js'
    ],

    fullcalendar: [
      '../assets/fullcalendar/fullcalendar.min.css',
      '../assets/fullcalendar/moment.min.js',
      '../assets/fullcalendar/jquery-ui.custom.min.js',
      '../assets/fullcalendar/fullcalendar.min.js'
    ],

    sortable: ['../assets/sortable/Sortable.min.js'],

    wowjs: ['../assets/wow.js/wow.min.js'],

    animatecss: ['../assets/animate.css/animate.css'],

    photoswipe: [
      '../assets/PhotoSwipe/photoswipe.css',
      '../assets/PhotoSwipe/default-skin/default-skin.css',
      '../assets/PhotoSwipe/photoswipe.min.js',
      '../assets/PhotoSwipe/photoswipe-ui-default.min.js'
    ],

    isotope: ['../assets/isotope/isotope.pkgd.min.js'],

    videojs: [
      '../assets/video.js/video-js.css',
      '../assets/video.js/video.js',
      '../assets/video.js/plugins/vjs.youtube.js',
      '../assets/video.js/plugins/media.vimeo.js'
    ]
  };

  // return result array
  var get = get.split(',');
  var result = [];
  for(var k in get) {
    if(typeof list[ get[k] ] !== 'undefined') {
      for(var n in list[ get[k] ]) {
        result.push( list[ get[k] ][n] );
      }
    }
  }

  return result;
}





/*
 * Con AngularJS Version
 */
var conAngular = angular.module("conAngular", [
  "ui.router", 
  "ui.materialize", 
  "oc.lazyLoad",  
  "ngSanitize"
]); 

// Config ocLazyLoader
conAngular.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    // lazy load config
  });
}]);


// Global Options
conAngular.factory('settings', ['$rootScope', function($rootScope) {
  var settings = {
    rtl: false, // rtl mode
    navbar: {
      dark:   false, // dark color scheme
      static: false, // static
      under:  false  // navbar under sidebar
    },
    sidebar: {
      hideToSmall:     true,    // hide to small sidebar
      static:          false,   // static
      gestures:        true,    // gestures support
      light:           false,   // light color scheme
      overlapContent:  false,   // Overlay content when opened
      effect:          'shrink' // show effect: [shrink, push, overlay]
    },
    chat: {
      light: false // light color scheme
    }
  };

  $rootScope.settings = settings;

  return settings;
}]);



// App Controller
conAngular.controller('AppController', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
  $scope.$on('$viewContentLoaded', function() {
    // init plugins
    conApp.initPlugins();
    conApp.initCards();
    conApp.initCardTodo();
    conApp.initCardWeather();
  });
}]);

// Navbar Controller
conAngular.controller('NavbarController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
  });
}]);

// Sidebar Controller
conAngular.controller('SidebarController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
    conApp.initSidebar();
  });
}]);

// Search Controller
conAngular.controller('SearchController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
    conApp.initSearchBar();
  });
}]);

// Chat Controller
conAngular.controller('ChatController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
    conApp.initChat();
  });
}]);


// Setup Rounting For All Pages
conAngular.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // Redirect any unmatched url
  $urlRouterProvider.otherwise("/dashboard.html");  
  
  // pages
  $stateProvider
    // Dashboard
    .state('/dashboard', {
      url: "/dashboard.html",
      templateUrl: "tpl/dashboard.html",
      controller: "DashboardController",
      data: {
        pageTitle: 'Admin Dashboard with Material Design',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            files: conAssets('simpleWeather,sortable')
          }, {
            name: 'conAngular',
            serie: true, // used for synchronous load chart scripts
            insertBefore: '#ngInsertBefore',
            files: conAssets('sparkline,flot,rickshaw,jvectormap')
          }]);
        }]
      }
    })

    // Dashboard v1
    .state('/dashboard-v1', {
      url: "/dashboard-v1.html",
      templateUrl: "tpl/dashboard-v1.html",
      controller: "DashboardV1Controller",
      data: {
        pageTitle: 'Dashboard v1',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard v1',
            href: '#/dashboard-v1.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('simpleWeather,sortable')
          }, {
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('flot,nvd3')
          }]);
        }]
      }
    })

    // Angular Options
    .state('/angular-settings', {
      url: "/angular-settings.html",
      templateUrl: "tpl/angular-settings.html",
      controller: "PageController",
      data: {
        pageTitle: 'Angular Settings',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Angular Settings',
            href: '#/angular-settings.html'
          }]
      }
    })

    // Widgets
    .state('/widgets', {
      url: "/widgets.html",
      templateUrl: "tpl/widgets.html",
      controller: "PageController",
      data: {
        pageTitle: 'Widgets',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Widgets',
            href: '#/widgets.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('sparkline,simpleWeather')
          }]);
        }]
      }
    })

    // Forms Base
    .state('/forms-base', {
      url: "/forms-base.html",
      templateUrl: "tpl/forms-base.html",
      controller: "PageController",
      data: {
        pageTitle: 'Base Forms',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Base Forms',
            href: '#/forms-base.html'
          }]
      }
    })

    // Forms Advanced
    .state('/forms-advanced', {
      url: "/forms-advanced.html",
      templateUrl: "tpl/forms-advanced.html",
      controller: "PageController",
      data: {
        pageTitle: 'Advanced Forms',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Advanced Forms',
            href: '#/forms-advanced.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('select2,dropzone,tagsinput,clockpicker,spectrum,inputmask,parsley')
          }, {
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('pikaday')
          }]);
        }]
      }
    })

    // Forms Validation
    .state('/forms-validation', {
      url: "/forms-validation.html",
      templateUrl: "tpl/forms-validation.html",
      controller: "PageController",
      data: {
        pageTitle: 'Forms Validation',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Validation',
            href: '#/forms-validation.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('parsley')
          }]);
        }]
      }
    })

    // Forms Editors
    .state('/forms-editors', {
      url: "/forms-editors.html",
      templateUrl: "tpl/forms-editors.html",
      controller: "PageController",
      data: {
        pageTitle: 'Editors',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Editors',
            href: '#/forms-editors.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('markitup,ckeditor')
          }]);
        }]
      }
    })

    // Mail Inbox
    .state('/mail-inbox', {
      url: "/mail-inbox.html",
      templateUrl: "tpl/mail-inbox.html",
      controller: "PageController",
      data: {
        pageTitle: 'Mail Inbox',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Mail',
            href: '#'
          }, {
            title: 'Inbox',
            href: '#/mail-inbox.html'
          }]
      }
    })

    // Mail View
    .state('/mail-view', {
      url: "/mail-view.html",
      templateUrl: "tpl/mail-view.html",
      controller: "PageController",
      data: {
        pageTitle: 'Mail View',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Mail',
            href: '#'
          }, {
            title: 'View',
            href: '#/mail-view.html'
          }]
      }
    })

    // Mail Compose
    .state('/mail-compose', {
      url: "/mail-compose.html",
      templateUrl: "tpl/mail-compose.html",
      controller: "PageController",
      data: {
        pageTitle: 'Mail Compose',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Mail',
            href: '#'
          }, {
            title: 'Compose',
            href: '#/mail-compose.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('ckeditor')
          }]);
        }]
      }
    })

    // Charts Flot
    .state('/charts-flot', {
      url: "/charts-flot.html",
      templateUrl: "tpl/charts-flot.html",
      controller: "ChartFlotController",
      data: {
        pageTitle: 'Flot Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'Flot',
            href: '#/charts-flot.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('flot')
          }]);
        }]
      }
    })

    // Charts NVD3
    .state('/charts-nvd3', {
      url: "/charts-nvd3.html",
      templateUrl: "tpl/charts-nvd3.html",
      controller: "ChartNVD3Controller",
      data: {
        pageTitle: 'NVD3 Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'NVD3',
            href: '#/charts-nvd3.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('nvd3')
          }]);
        }]
      }
    })

    // Charts Rickshaw
    .state('/charts-rickshaw', {
      url: "/charts-rickshaw.html",
      templateUrl: "tpl/charts-rickshaw.html",
      controller: "ChartRickshawController",
      data: {
        pageTitle: 'Rickshaw Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'Rickshaw',
            href: '#/charts-rickshaw.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('rickshaw')
          }]);
        }]
      }
    })

    // Charts Sparkline
    .state('/charts-sparkline', {
      url: "/charts-sparkline.html",
      templateUrl: "tpl/charts-sparkline.html",
      controller: "ChartSparkController",
      data: {
        pageTitle: 'Sparkline Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'Sparkline',
            href: '#/charts-sparkline.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('sparkline')
          }]);
        }]
      }
    })

    // Google Maps
    .state('/maps-google', {
      url: "/maps-google.html",
      templateUrl: "tpl/maps-google.html",
      controller: "PageController",
      data: {
        pageTitle: 'Google Maps',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Maps',
            href: '#'
          }, {
            title: 'Google',
            href: '#/maps-google.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('gmaps')
          }]);
        }]
      }
    })

    // Vector Maps
    .state('/maps-vector', {
      url: "/maps-vector.html",
      templateUrl: "tpl/maps-vector.html",
      controller: "MapsVectorController",
      data: {
        pageTitle: 'Vector Maps',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Maps',
            href: '#'
          }, {
            title: 'Vector',
            href: '#/maps-vector.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('jvectormap')
          }]);
        }]
      }
    })

    // Data Tables
    .state('/data-tables', {
      url: "/data-tables.html",
      templateUrl: "tpl/data-tables.html",
      controller: "DatatablesController",
      data: {
        pageTitle: 'Data Tables',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Data Tables',
            href: '#/data-tables.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('dataTables')
          }]);
        }]
      }
    })

}]);

/* Init global settings and run the app */
conAngular.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
  $rootScope.$state = $state; // state to be accessed from view
}]);