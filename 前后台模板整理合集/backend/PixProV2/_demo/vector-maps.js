jQuery(document).ready(function($){

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

});