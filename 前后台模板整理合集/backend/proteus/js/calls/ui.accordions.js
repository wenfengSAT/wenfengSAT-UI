/*  ==========================================================================
    Table of Content for Accordions:

    === Function ===
	- runCollapsible
    - runCollapse


    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runCollapsible
    ========================================================================== */
function runCollapsible(accordion){

	$(accordion).collapsible({
        defaultOpen: 'section1',
        speed: 200
    });

}

/*
    runCollapse
    ========================================================================== */
function runCollapse(accordion, type){

    switch(type){

        case 'custom':
            new jQueryCollapse($(accordion), {
              open: function() {
                this.slideDown(150);
              },
              close: function() {
                this.slideUp(150);
              }
            });
        break;

        case 'animated':

            $(accordion).collapse({
              accordion: true,
              open: function() {
                this.addClass("open");
                this.css({ height: this.children().outerHeight() });
              },
              close: function() {
                this.css({ height: "0px" });
                this.removeClass("open");
              }
            });
        break;
    }

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var collapsible = ".collapsible";

    var collapse_1 = ".custom-show-hide";
    var collapse_2 = ".animated-collapse";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runCollapsible(collapsible);

    runCollapse(collapse_1,'custom');
    runCollapse(collapse_2,'animated');
});