'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();


        // Demo Javascript - Useless in production enviroment
        // Switch slider demo on button click
        $('.slider-demo-nav .btn').on('click', function() {
            $(this).addClass('item-checked');
            var targetDemo = $(this).attr('data-test');

            $('.active-demo').fadeOut(function() {
                $('.demo-block > div').removeClass('active-demo animated');
                $(targetDemo).fadeIn().addClass('active-demo');

            });

        });

        setTimeout(function() {
            $('.demo-block > div').hide();
            $('.demo-block > div.active-demo').show();
        }, 600);

        // Init Slick Slider Demos
        $('.single-item').slick({
            dots: true
        });

        $('.multiple-items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });

        $('.slick-responsive').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.variable-width').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });

        $('.adaptive-height').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });

        $('.slick-uneven').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4
        });

        $('.center-mode').slick({
            dots: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }]
        });

        $('.slick-lazy').slick({
            dots: true,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1
        });

        $('.slick-autoplay').slick({
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 800,
        });

        $('.slick-fade').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            slide: 'div',
            cssEase: 'linear'
        });
        $('.add-remove').slick({
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
        var slideIndex = 2;
        $('.js-add-slide').on('click', function() {
            slideIndex++;
            $('.add-remove').slickAdd('<div class="slick-slide"><h1>' + slideIndex + '</h1></div>');
        });

        $('.js-remove-slide').on('click', function() {
            $('.add-remove').slickRemove(slideIndex - 1);
            if (slideIndex !== 0) {
                slideIndex--;
            }
        });

        $('.slick-filtering').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4
        });

        var filtered = false;

        $('.js-filter').on('click', function() {
            if (filtered === false) {
                $('.slick-filtering').slickFilter(':even');
                $(this).text('UnFilter Slides');
                filtered = true;
            } else {
                $('.slick-filtering').slickUnfilter();
                $(this).text('Filter Slides');
                filtered = false;
            }
        });

        $('.slider-for').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true
        });

        $('.single-item-rtl').slick({
            dots: true,
            rtl: true
        });
    });

})(jQuery);
