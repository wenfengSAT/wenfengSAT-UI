/*  ==========================================================================
    Table of Content for Profile Page:

    === Function ===
	- runEasyResponsiveTab
    - runFriendListSorting
    - runCheckradios

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runEasyResponsiveTab
    ========================================================================== */

    function runEasyResponsiveTab(tab,type){

        $(tab).easyResponsiveTabs({
            type: type, //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            activate: function(event) {
                 // Callback function if tab is switched
            }
        });
    }

/*
    runFriendListSorting
    ========================================================================== */

    function runFriendListSorting(){

        var $activity = $('.activity-container'),
            $filterOptions = $('.filter-options'),
            $sizer = $activity.find('.shuffle-sizer');

        $activity.shuffle({
            itemSelector: '.activity-item',
            sizer: $sizer
        });


        setTimeout(function() {
            // listen();
            setupFilters();
        }, 100);

        // Set up button clicks
        setupFilters = function() {
            var $btns = $filterOptions.children();
            $btns.on('click', function() {
                var $this = $(this),
                    isActive = $this.hasClass( 'active' ),
                    group = isActive ? 'all' : $this.data('group');

                // Hide current label, show current label in title
                if ( !isActive ) {
                    $('.filter-options .active').removeClass('active');
                }

                $this.toggleClass('active');

                // Filter elements
                $activity.shuffle( 'shuffle', group );
            });

            $btns = null;
        }

        $('#activity, .resp-accordion').on('click', function() {
            // Update shuffle
            $activity.shuffle( 'update' );
        });


    }

/*
     runCheckradios
     ========================================================================== */

    function runCheckradios(input){

        $(input).checkradios({

            checkbox: {

                iconClass:'fa fa-check'

            },

            radio: {

                iconClass:'fa fa-circle'

            }

        });
    }

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    var activeView = 'list';

    // Variables
    var horizEasyRespTab = "#profile",
        checkradios      = '.checkradios';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runEasyResponsiveTab(horizEasyRespTab,'default');
    runFriendListSorting();
    runCheckradios(checkradios);

});