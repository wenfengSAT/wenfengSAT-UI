'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    "use strict";

    // Init Theme Core
    Core.init();

    // Init Demo JS
    Demo.init();

    // Init Ladda Plugin on buttons
    Ladda.bind('.ladda-button', {
        timeout: 2000
    });

    // Bind progress buttons and simulate loading progress. Note: Button still requires ".ladda-button" class.
    Ladda.bind('.progress-button', {
        callback: function(instance) {
            var progress = 0;
            var interval = setInterval(function() {
                progress = Math.min(progress + Math.random() * 0.1, 1);
                instance.setProgress(progress);

                if (progress === 1) {
                    instance.stop();
                    clearInterval(interval);
                }
            }, 200);
        }
    });

})(jQuery);
