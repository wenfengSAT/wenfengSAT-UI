jQuery(document).ready(function($){

  /*** Morris Charts ***/
  Morris.Bar({
    element: 'myfirstchart',
    data: [
      { y: 'Sun', a: 1000 },
      { y: 'Mon', a: 754 },
      { y: 'Tue', a: 824 },
      { y: 'Wed', a: 1144 },
      { y: 'Thu', a: 985 },
      { y: 'Fri', a: 1180 },
      { y: 'Sat', a: 760 }
    ],
    barColors: function (row, series, type) {
      if (type === 'bar') {
        var red = Math.ceil(234 * row.y / this.ymax);
        return 'rgb(234,' + red + ',137)';
      }
    },
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Series A'],
    lineColors:['#E67A77','#79D1CF']
  });

  /*** Tabs ***/
  $( ".vertical-tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( ".vertical-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    $('a.close-box', '.boxed').click(function(){
      var link = $(this);
      var icon = $('i', link);
      var parent = $(this).parent().parent().parent().parent();
      var inner = $('.inner', parent);
      if ($(inner).is(':visible')) {
        $(inner).slideUp(800);
        $(icon).removeClass('fa-chevron-up').addClass('fa-chevron-down');
      } else {
        $(inner).slideDown(800);
        $(icon).removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }
    });

  /*** Calendar ***/
  $('.calendar-widget').datepicker();

  /*** ToolTips ***/
  $('[data-toggle="tooltip"]').each(function(i, el) {
    var tooltip = $(el);
    $(tooltip).tooltip();
  });

  /*** PopOver ***/
  $('[data-toggle="popover"]').each(function(i, el) {
    var popover = $(el);
    $(popover).popover();
    $(popover).on('shown.bs.popover',function(ev) {
      var $popover = $(popover).next();
      $popover.addClass($(popover).attr('data-popover-class'));
    });
  });

  /*** CheckBox ***/
  $('input[type="checkbox"]', '.task-list').on('ifClicked', function(event){
    var checkbox = $(this);
    var li = $(checkbox).parent().parent();
    var span = $('span', li);

    if ($(span).hasClass('checked')) {
      $('span', li).removeClass('checked');
    } else {
      $('span', li).addClass('checked');
    }
  });

  /*** Check All Tasks ***/
  $('a.check-all', '.task-list').click(function(){
    var list = $(this).parents('.task-list');
    var lis = $('li', list);
    var clicked = $(this).hasClass('all-checked');

    $(lis).each(function(i, item) {
      var span = $('span', item);

      if ($(span).hasClass('checked') & clicked) {
        $('input[type="checkbox"]', item).iCheck('uncheck');
        $('span', item).removeClass('checked');
      } else {
        $('input[type="checkbox"]', item).iCheck('check');
        $('span', item).addClass('checked');
      }
    });

    $(this).addClass('all-checked');
    return false;
  });

  /*** Delete Tasks ***/
  $('a.delete', '.actions').click(function(){
    var obj = $(this);
    var li = $(obj).parents('li');

    if ($(li).length) {
      $(li).slideUp(350);
    }

    return false;
  });

  /*** Count To ***/
  jQuery('.count-to').each(function(i, item) {
    var end = $(this).html();
    jQuery(item).countTo({from: 0,
      to: end,
      speed: 6000,
      refreshInterval: 50});
  });

});

/*** Google Maps ***/
var map4;
function initialize4() {
  var mapOptions4 = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
    styles: [
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  };
  map4 = new google.maps.Map(document.getElementById('map-canvas-4'), mapOptions4);
}

google.maps.event.addDomListener(window, 'load', initialize4);