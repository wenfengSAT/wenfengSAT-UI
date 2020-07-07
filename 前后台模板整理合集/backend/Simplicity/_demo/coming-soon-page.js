jQuery(document).ready(function($){


  var coming_soon_layout = '';
  coming_soon_layout = '<li><div class="circle-counter">{dn}</div><div class="counter-text">{dl}</div></li>';
  coming_soon_layout += '<li><div class="circle-counter hours">{hn}</div><div class="counter-text">{hl}</div></li>';
  coming_soon_layout += '<li><div class="circle-counter minutes">{mn}</div><div class="counter-text">{ml}</div></li>';
  coming_soon_layout += '<li><div class="circle-counter seconds">{sn}</div><div class="counter-text">{sl}</div></li>';


  $('.coming-soon-counter').countdown({until: new Date(2014, 11, 23, 19, 29),
    layout: coming_soon_layout});

});