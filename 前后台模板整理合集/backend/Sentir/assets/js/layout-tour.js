var tour = new Tour({ backdrop: true,
	onShown: function(tour) {
		var stepElement = getTourElement(tour);
		$(stepElement).after($('.tour-step-background'));
		$(stepElement).after($('.tour-backdrop'));
	},
  steps: [
  {
    element: "#tour-sentir-logo",
    title: "You apps logo",
    content: "You can change the apps logo here, PSD logo template included",
  },
  {
    element: "#tour-collapse-sidebar-left",
    title: "Toggle sidebar left navigation",
    content: "Click this icon to toggling left sidebar navigation menu",
  },
  {
    element: "#tour-user-nav",
    title: "User session nav",
    content: "Place user session avatar and nick name here",
	placement: "bottom",
  },
  {
    element: "#tour-collapse-right-sidebar",
    title: "Toggle sidebar right",
    content: "Click this icon to toggling right sidebar section",
	placement: "left",
  },
  {
    element: "#tour-page-heading",
    title: "Page content heading",
    content: "Write the heading or title on each page",
	placement: "bottom",
  },
  {
    element: "#tour-example-alert",
    title: "Example alert",
    content: "Change the alert style by visiting alert and progress bar page",
	placement: "bottom",
  },
  {
    element: "#tour-tiles-info",
    title: "Apps information",
    content: "Change this information as your apps requirement",
	placement: "right",
  },
  {
    element: "#tour-headline-news",
    title: "Awesome headline carousel",
    content: "This carousel is using owl carousel js plugin",
	placement: "right",
  },
  {
    element: "#tour-weather-widget",
    title: "Weather widget",
    content: "Easy to custom weather widget, choose yours!",
	placement: "right",
  },
  {
    element: "#tour-popular-item-carousel",
    title: "Example popular product",
    content: "Again, this carousel using awesome owl carousel",
	placement: "top",
  },
  {
    element: "#tour-personal-reminder",
    title: "Simple reminder",
    content: "So far, we still love to use owl carousel",
	placement: "left",
  },
  {
    element: "#tour-footer",
    title: "Apps footer",
    content: "Change or remove this section as your need",
	placement: "top",
  }
]});

tour.init();
tour.start();
tour.restart();

function getTourElement(tour){
    return tour._options.steps[tour._current].element
}