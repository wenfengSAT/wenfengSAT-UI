// makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        $.vegas('slideshow', {
            delay: 8000,
            backgrounds: [{
                src: 'img/agriculture-farming-field.jpg',
                fade: 2000
            }, {
                src: 'img/analog-camera-kodak-old.jpg',
                fade: 2000
            }, {
                src: 'img/activity-aviation-fly.jpg',
                fade: 2000
            }, {
                src: 'img/boat-lake-landing-stage.jpg',
                fade: 2000
            }, {
                src: 'img/city-people-shops.jpg',
                fade: 2000
            }, {
                src: 'img/keyboard-old-technology.jpg',
                fade: 2000
            }, {
                src: 'img/bg4.jpg',
                fade: 2000
            }, {
                src: 'img/asia-buildings-china.jpg',
                fade: 2000
            }]
        })('overlay', {
            src: 'js/vegas/overlays/06.png'
        });
