var BlankonBlog = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonBlog.masonryGrid();
            BlankonBlog.bootstrapWYSIHTML5();
        },

        // =========================================================================
        // MASONRY
        // =========================================================================
        masonryGrid: function () {
            if($('#blog-grid').length){
                var container = document.querySelector('#blog-grid');
                var msnry = new Masonry( container, {
                    // options
                    columnWidth: '.col-xs-12',
                    itemSelector: '.col-xs-12',
                    isAnimated: true
                });

                // CHECK ON LOAD
                if($(window).width() <= 480 )
                    msnry.destroy();

                // CHECK ON RESIZE
                $(window).resize(function(){
                    if($(this).width() <= 480 )
                        msnry.destroy();
                });

                // CHECK ON SIDEBAR LEFT TOGGLE
                $('.navbar-minimize a').on('click',function(){
                    msnry.layout();
                });

                // CHECK ON SIDEBAR RIGHT TOGGLE
                $('.navbar-setting a').on('click',function(){
                    msnry.layout();
                });
            }
        },

        // =========================================================================
        // BOOTSTRAP WYSIHTML5
        // =========================================================================
        bootstrapWYSIHTML5: function () {
            if($('#comment-form').length){
                $('#comment-form').wysihtml5();
            }
        }

    };

}();

// Call main app init
BlankonBlog.init();