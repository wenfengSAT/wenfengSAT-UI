/**
 * @Package: Ultra Admin HTML Theme
 * @Since: Ultra 1.0
 * This file is part of Ultra Admin Theme HTML package.
 */


jQuery(function($) {

    'use strict';

    var ULTRA_SETTINGS = window.ULTRA_SETTINGS || {};

    /*--------------------------------
        Easypie Chart
     --------------------------------*/
    ULTRA_SETTINGS.chartEasypie = function() {




        if ($.isFunction($.fn.easyPieChart)) {

            $('.easypiechart1').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#1fb5ac',
                trackColor: '#eaeaea',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 10,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $('.easypiechart2').easyPieChart({
                easing: 'easeInBounce',
                barColor: '#9972b5',
                trackColor: '#eaeaea',
                scaleColor: '#ffffff',
                lineCap: 'square',
                lineWidth: 20,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });



            $('.easypiechart3').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fa8564',
                trackColor: '#eaeaea',
                scaleColor: '#ffffff',
                lineCap: 'square',
                lineWidth: 30,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


            $('.easypiechart4').easyPieChart({
                easing: 'easeOutCirc',
                barColor: '#eaeaea',
                trackColor: '#FDB45C',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 40,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }



    };






    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        ULTRA_SETTINGS.chartEasypie();
    });

    $(window).resize(function() {});

    $(window).load(function() {});

});
