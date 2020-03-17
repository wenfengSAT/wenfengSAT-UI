"use strict";



$(function(){

    // Instance the tour
    var tour = new Tour({
        storage: false,
        steps: [
        {
          element: "#tour-step-1",
          title: "Page Header",
          content: "Important feature with controls, that gives you a possibility to quickly use elements.",
          placement: "bottom"
        },
        {
          element: "#tour-step-2",
          title: "Sidebar",
          content: "Sidebar contents with the navigation that works well on any resolution.",
          placement: "right"
        },
        {
          element: "#tour-step-3",
          title: "Footer",
          content: "Used for navigation controls, statistic and other features.",
          placement: "top"
        },
        {
          element: "#tour-step-4",
          title: "Page Heading",
          content: "Can be used with page title, subtitle and breadcrumb.",
          placement: "bottom"
        },
        {
          element: "#tour-step-5",
          title: "Content",
          content: "Here you can use a big count of ready to use elements and features.",
          placement: "top"
        }
    ]});

    // Initialize the tour
    tour.init();


    $(".start-tour").on("click",function(){        
        tour.start();
    });    
        
});