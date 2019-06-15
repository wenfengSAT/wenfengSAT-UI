conAngular.controller('ChartSparkController', function($rootScope, $scope, $http, $timeout) {

  /* Inline Charts */
  // 1
  $scope.spark1data = [5,6,7,9,9,5,3,2,2,4,6,7];
  $scope.spark1opts = {
    type: "line"
  };
  // 2
  $scope.spark2data = [5,6,7,2,0,-4,-2,4];
  $scope.spark2opts = {
    type: "bar"
  };
  // 3
  $scope.spark3data = [1,1,0,1,-1,-1,1,-1,0,0,1,1];
  $scope.spark3opts = {
    type: "tristate"
  };
  // 4
  $scope.spark4data = [4,6,7,7,4,3,2,1,4,4];
  $scope.spark4opts = {
    type: "discrete"
  };
  // 5
  $scope.spark5data = [10,12,12,9,7];
  $scope.spark5opts = {
    type: "bullet"
  };
  // 6
  $scope.spark6data = [1,1,2];
  $scope.spark6opts = {
    type: "pie"
  };
  // 7
  $scope.spark7data = [4,27,34,52,54,59,61,68,78,82,85,87,91,93,100];
  $scope.spark7opts = {
    type: "box"
  };


  /* Normal Size */
  $scope.spark8data = [5,6,7,9,9,5,3,2,2,4,6,7];
  $scope.spark8opts = {
    type: 'line',
    width: '100%',
    height: '100',
    lineColor: '#64b5f6',
    spotColor: undefined,
    minSpotColor: undefined,
    maxSpotColor: undefined,
    highlightSpotColor: '#2196f3',
    highlightLineColor: '#2196f3',
    spotRadius: 2
  };

  $scope.spark9data = [12,9,7,8,9,5,3,5,10,14,5,2,3,4,6,9,4];
  $scope.spark9opts = {
      type: 'line',
      width: '100%',
      height: '100 ',
      lineColor: '#4db6ac',
      fillColor: '#b2dfdb',
      highlightSpotColor: '#009688',
      spotColor: false,
      minSpotColor: false,
      maxSpotColor: false,
      highlightLineColor: false,
      highlightLineColor: false,
      spotRadius: 5
  };

});