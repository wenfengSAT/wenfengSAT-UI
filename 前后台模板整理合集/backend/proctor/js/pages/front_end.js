$(document).ready(function() {
    function initBackToTop () {
        var backToTop = $('<a>', { id: 'back-to-top', href: '#top' });
        var icon = $('<i>', { class: 'fa fa-chevron-up' });

        backToTop.appendTo ('body');
        icon.appendTo (backToTop);
        
        backToTop.hide();

        $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                        backToTop.fadeIn ();
                } else {
                        backToTop.fadeOut ();
                }
        })

        backToTop.click (function (e) {
            e.preventDefault ();

                $('body, html').animate({
                        scrollTop: 0
                }, 600);
        });
    }

    initBackToTop();
});