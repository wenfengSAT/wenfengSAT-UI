+function ($) {
  $(function(){
    
    var intro = introJs();

    intro.setOptions({
      steps: [
      {
        element: '#nav .nav-user',
          intro: '<p class="h4 text-uc"><strong>1: User settings</strong></p><p>Start edit your info here.</p>',
          position: 'bottom'
        },
        {
          element: '.nav-main',
          intro: '<p class="h4 text-uc"><strong>2: Navigator</strong></p><p>Find what you want.</p>',
          position: 'right'
        },
        {
          element: '#aside',
          intro: '<p class="h4 text-uc"><strong>3: Aside</strong></p><p>Aside guide here</p>',
          position: 'left'
        }
      ],
      showBullets: true,
    });

    intro.start();

  });
}(jQuery);