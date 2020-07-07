jQuery(document).ready(function($){

  function startIntro(){
    var intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '#step1',
          intro: "<h3>Welcome to Simplicity!</h3><p>This is a quick tour of features Simplicity has to offer!</p>",
          position: "right"
        },
        {
          element: '#step2',
          position: "bottom",
          intro: "<h3>Header Bar</h3><p>You can have it also to be fixed!</p>"
        },
        {
          element: '#step3',
          position: "bottom",
          intro: "<h3>Header Bar Icons</h3><p>You can easily add or remove icons and notifications!</p>"
        },
        {
          element: '#step4',
          position: "bottom",
          intro: "<h3>Uniquely Styled Plugins</h3><p>Plugins are styled with love and they are unique feature to your software!</p>"
        },
        {
          element: '#step5',
          position: "top",
          intro: "<h3>Inovative Widgets</h3><p>We were thinking, what do users need? And we created few awesome widgets for you!</p>"
        },
        {
          element: '#step6',
          position: "right",
          intro: "<h3>Animate with Ease</h3><p>Now you can animate your elements by just adding a CSS class!</p>"
        }
      ]
    });

    intro.start();
  }

  if ($(window).width() > 980) {
    startIntro();
  }

});