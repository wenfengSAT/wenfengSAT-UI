conAngular.controller('DatatablesController', function($rootScope, $scope, $http, $timeout) {

  // tables data
  $scope.tablesData = [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      start: '2011/04/25',
      salary: '$320,800'
    }, {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      start: '2011/07/25',
      salary: '$170,750'
    }, {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      start: '2009/01/12',
      salary: '$86,000'
    }, {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      start: '2012/03/29',
      salary: '$433,060'
    }, {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      start: '2008/11/28',
      salary: '$162,700'
    }, {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      start: '2012/12/02',
      salary: '$372,000'
    }, {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      start: '2012/08/06',
      salary: '$137,500'
    }, {
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      office: 'Tokyo',
      start: '2010/10/14',
      salary: '$327,900'
    }, {
      name: 'Colleen Hurst',
      position: 'Javascript Developer',
      office: 'San Francisco',
      start: '2009/09/15',
      salary: '$205,500'
    }, {
      name: 'Sonya Frost',
      position: 'Software Engineer',
      office: 'Edinburgh',
      start: '2008/12/13',
      salary: '$103,600'
    }, {
      name: 'Jena Gaines',
      position: 'Office Manager',
      office: 'London',
      start: '2008/12/19',
      salary: '$90,560'
    }, {
      name: 'Quinn Flynn',
      position: 'Support Lead',
      office: 'Edinburgh',
      start: '2013/03/03',
      salary: '$342,000'
    }, {
      name: 'Charde Marshall',
      position: 'Regional Director',
      office: 'San Francisco',
      start: '2008/10/16',
      salary: '$470,600'
    }
  ];


  // table 1
  $scope.table1opts = {
    "bLengthChange": false,
    "filter": false,
    "iDisplayLength": 5
  }

  // table 2
  $scope.table2opts = {
    "iDisplayLength": 5,
    "aLengthMenu": [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "all"]
    ]
  }

  // table 3
  $scope.table3opts = {
    "scrollY": "200px",
    "scrollCollapse": true,
    "paging": false
  }

  // table 4
  $scope.table4opts = {
    "iDisplayLength": 5,
    "bLengthChange": false,
    "filter": false,
    "dom": 'Tlfrtip',
    "tableTools": {
      "sSwfPath": "../assets/dataTables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
    }
  }

  // table 5
  $scope.table5opts = {
    "ajax": "../assets/dataTables/myData.txt",
    "scrollY": "200px",
    "dom": "frtiS",
    "deferRender": true
  }

});