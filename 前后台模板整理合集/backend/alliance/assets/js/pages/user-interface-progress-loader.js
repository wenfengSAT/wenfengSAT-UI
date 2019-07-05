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

        // Configure Progress Loader
        NProgress.configure({
            minimum: 0.15,
            trickleRate: .07,
            trickleSpeed: 360,
            showSpinner: false,
            barColor: '', // npr-warning, npr-success, npr-primary, etc (all contextuals available)
            barPos: '' // 'null' - (default) - bar position: top of page
            // 'npr-bottom' -  bar position: bottom of page header
            // 'npr-header' -  bar position: below header
        });

        // Start Progress Loader
        // NProgress.start();

        // On click event gather options and Init NProgress Plugin
        var Selector = $('ul.controls').find('button');
        Selector.on('click', function(e) {

            var Target = e.target
            var Node = e.target.nodeName;
            var Selector = $(Target);
            var Setting;

            if (Node === "I") {
                Setting = Selector.parent('button').attr('id');
            }

            if (Node === "BUTTON") {
                Setting = Selector.attr('id');
            }

            switch (Setting) {

                // Loader Example Increments
                case 'b-0':
                    NProgress.start();
                    break;
                case 'b-50':
                    NProgress.set(0.50);
                    break;
                case 'b-inc':
                    NProgress.inc();
                    break;
                case 'b-100':
                    NProgress.done(true);
                    break;

                // Loader Positions
                case 'p-0':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: ''
                    });
                    NProgress.start();
                    break;
                case 'p-1':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-header'
                    });
                    NProgress.start();
                    break;
                case 'p-2':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-bottom'
                    });
                    NProgress.start();
                    break;

                // Loader Contextuals
                case 'c-primary':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-primary'
                    });
                    NProgress.start();
                    break;
                case 'c-success':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-success'
                    });
                    NProgress.start();
                    break;
                case 'c-info':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-info'
                    });
                    NProgress.start();
                    break;
                case 'c-warning':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-warning'
                    });
                    NProgress.start();
                    break;

                case 'c-danger':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-danger'
                    });
                    NProgress.start();
                    break;
                case 'c-alert':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-alert'
                    });
                    NProgress.start();
                    break;
                case 'c-system':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-system'
                    });
                    NProgress.start();
                    break;
                case 'c-dark':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-dark'
                    });
                    NProgress.start();
                    break;
                case 'c-light':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-light'
                    });
                    NProgress.start();
                    break;
                case 'c-muted':
                    // ReConfigure Progress Loader
                    NProgress.done(true);
                    NProgress.configure({
                        barPos: 'npr-muted'
                    });
                    NProgress.start();
                    break;
            }

        });
    });

})(jQuery);
