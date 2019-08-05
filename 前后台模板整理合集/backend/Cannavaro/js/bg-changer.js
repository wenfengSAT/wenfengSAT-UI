// ------------------------------
// Sidebar Accordion Menu
// ------------------------------

  $(function() {
        $('.slide-out-div').tabSlideOut({
            tabHandle: '.handle', //class of the element that will be your tab
            pathToTabImage: 'img/contact_tab.gif', //path to the image for the tab (optionaly can be set using css)
            imageHeight: '40px', //height of tab image
            imageWidth: '40px', //width of tab image    
            tabLocation: 'right', //side of screen where tab lives, top, right, bottom, or left
            speed: 500, //speed of animation
            action: 'hover', //options: 'click' or 'hover', action to trigger animation
            topPos: '143px', //position from the top
            fixedPosition: true //options: true makes it stick(fixed position) on scroll
        });
    });