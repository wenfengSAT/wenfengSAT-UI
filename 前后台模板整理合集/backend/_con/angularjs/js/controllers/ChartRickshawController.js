conAngular.controller('ChartRickshawController', function($rootScope, $scope, $http, $timeout) {

  // chart datas
  var rickshawLine1 = [ { x: 0, y: 43 }, { x: 1, y: 42 }, { x: 2, y: 32 }, { x: 3, y: 12 }, { x: 4, y: 46 }, { x: 5, y: 67 }, { x: 6, y: 34 }, { x: 7, y: 25 }, { x: 8, y: 32 }, { x: 9, y: 14 }, { x: 10, y: 2 }, { x: 11, y: 25 }, { x: 12, y: 48 } ];
  var rickshawLine2 = [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 67 }, { x: 5, y: 53 }, { x: 6, y: 42 }, { x: 7, y: 32 }, { x: 8, y: 12 }, { x: 9, y: 35 }, { x: 10, y: 87 }, { x: 11, y: 56 }, { x: 12, y: 36 } ];
  var rickshawLine3 = [ { x: 0, y: 30 }, { x: 1, y: 29 }, { x: 2, y: 12 }, { x: 3, y: 5 }, { x: 4, y: 38 }, { x: 5, y: 57 }, { x: 6, y: 21 }, { x: 7, y: 16 }, { x: 8, y: 29 }, { x: 9, y: 10 }, { x: 10, y: 0 }, { x: 11, y: 20 }, { x: 12, y: 37 } ];


  // rickshaw 1
  $scope.rickshaw1options = {
    renderer: 'line',
    stroke: true
  };
  $scope.rickshaw1features = {
    hover: {
      xFormatter: function(x) {
        return x + " Jan 2015";
      },
      yFormatter: function(y) {
        return Math.floor(y);
      }
    }
  };
  $scope.rickshaw1series = [{
      data: rickshawLine1,
      color: '#673ab7',
      name: 'Visits'
    }, {
      data: rickshawLine3,
      color: '#2196f3',
      name: 'Posts'
    }];


  // rickshaw 2
  $scope.rickshaw2options = {
    renderer: 'area',
    stroke: true
  };
  $scope.rickshaw2series = [ {
      data: rickshawLine1,
      color: '#673ab7'
    }, {    
      data: rickshawLine2,
      color: '#2196f3'
    } ];


  // rickshaw 3
  $scope.rickshaw3options = {
    renderer: 'bar'
  };
  $scope.rickshaw3series = [ {
      data: rickshawLine1,
      color: '#673ab7'
    }, {    
      data: rickshawLine2,
      color: '#2196f3'
    } ];


  // rickshaw 4
  $scope.rickshaw4options = {
    renderer: 'bar',
    stack: false
  };
  $scope.rickshaw4series = [ {
      data: rickshawLine1,
      color: '#673ab7'
    }, {    
      data: rickshawLine3,
      color: '#2196f3'
    } ];
});