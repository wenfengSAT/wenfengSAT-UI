/*  ==========================================================================
    Table of Content for Tags:

    === Function ===
	- runTagEditor
    - runTagging
    - runMasterBlaster

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    tagEditor
    ========================================================================== */

var cache = {};
function googleSuggest(request, response) {
    var term = request.term;
    if (term in cache) { response(cache[term]); return; }
    $.ajax({
        url: 'http://query.yahooapis.com/v1/public/yql',
        dataType: 'JSON',
        data: { format: 'json', q: 'select * from xml where url="http://google.com/complete/search?output=toolbar&q='+term+'"' },
        success: function(data) {
            var suggestions = [];
            try { var results = data.query.results.toplevel.CompleteSuggestion; } catch(e) { var results = []; }
            $.each(results, function() {
                try {
                    var s = this.suggestion.data.toLowerCase();
                    suggestions.push({label: s.replace(term, '<b>'+term+'</b>'), value: s});
                } catch(e){}
            });
            cache[term] = suggestions;
            response(suggestions);
        }
    });
}

function runTagEditor(tagEditor, type){

    switch(type){

        case 'default':
            $(tagEditor).tagEditor({
                placeholder: 'Enter tags ...',
                autocomplete: { source: googleSuggest, minLength: 3, delay: 250, html: true, position: { collision: 'flip' } }
            });
        break;

        case 'skin':
            $(tagEditor).tagEditor({ clickDelete: true, initialTags: ['custom style', 'custom tags', 'delete on right click', 'no delete icon', 'hello', 'world', 'and', 'Proteus', 'is', 'awesome', ':)'], placeholder: 'Enter tags ...' });
        break;
    }
}


/*
    runTagging
    ========================================================================== */

function runTagging(tagging, type){

    switch(type){

        case 'default':
            $(tagging).tagging();
        break;

    }
}

/*
    runMasterBlaster
    ========================================================================== */

function runMasterBlaster(mb, type){

    switch(type){

        case 'default':
            $(mb).masterblaster( {
                animate: true
            } );

            $(mb).on( "mb:add", function( e, tagName ) {
              console.info( "Added: ", tagName );
            } );

            $(mb).on( "mb:remove", function( e, tagName ) {
              console.info( "Removed: ", tagName );
            } );

        break;

    }
}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var tagEditorDefault     = "#tagEditorDefault";
    var tagEditorSkin        = "#tagEditorSkin";

    var taggingDefault       = "#taggingDefault";

    var masterBlasterDefault = "#masterBlasterDefault";

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runTagEditor(tagEditorDefault,'default');
    runTagEditor(tagEditorSkin,'skin');

    runTagging(taggingDefault,'default');

    runMasterBlaster(masterBlasterDefault,'default');

});