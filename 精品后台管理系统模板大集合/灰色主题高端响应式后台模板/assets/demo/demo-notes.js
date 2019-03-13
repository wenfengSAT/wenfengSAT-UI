jQuery(document).ready(function() {

    var notes = [];
    var noteSelected = 0;
    var demoNotes = [{
        content: 'This is simple notes application. Whatever you write here will automatically be saved on the browser. <br>Try selecting the text to format it. <br> <br>Have fun! :)',
        createdAt: '10/01/2014 at 11:00 PM'
    }, {
        content: 'Mei graeco dolores liberavisse et. Recusabo repudiare ad pro, eu commune cotidieque eum. Case labitur moderatius at eam, vix no nulla omnesque. Ne mel altera facete assentior, eam aperiam hendrerit te, mei in illum noster eligendi. Vim ei perpetua pertinacia, ei vis odio facer appellantur, tation fabellas ad vel. <br> <br>Nam erant tantas mediocrem ne, urbanitas persequeris at nec, nulla veniam qui et. Decore deleniti verterem eos no, vidisse lobortis nec ex, elit libris intellegebat nec ex. Docendi molestiae gubergren ea mea, ius wisi ludus cu, prompta tractatos mnesarchum eu vel. Ei movet discere gloriatur per. Est partiendo vulputate in, brute laudem nominavi sea ne. <br> <br>Et sea erant impedit, cu pri docendi accusamus repudiare. Delenit expetenda consetetur eam no, vim eu magna nusquam, no qui volutpat accommodare. Usu at eros voluptaria adversarium. Explicari disputationi cum ad, cu usu inermis repudiare interpretaris, has an case affert virtute. Dicant impedit an nam, pri ei malis quodsi. Ei veritus hendrerit vis, probo munere efficiendi an ius. <br> <br>Lorem ipsum dolor sit amet, posse tacimates et vel, cu malis platonem sed. Vocent gloriatur no duo. Cu mucius mollis usu, harum deterruisset eam no. Velit timeam at vim, graeci petentium sit et. Mel utamur dolores at. Causae cotidieque cu vel. Vim convenire hendrerit eu.',
        createdAt: '10/02/2014 at 01:30 AM'
    }];

    if (localStorage) {
        notes = JSON.parse(localStorage.getItem('jj.notes')) || demoNotes;
    } else {
        notes = demoNotes;
    }

    var noteLiHtml = '<li class="notes-snippet">'+
        '<h6 class="notes-title">%title%</h6>'+
        '<span class="notes-date">%createdAt%</span>'+
    '</li>';

    var updateNoteList = function (notes) {
        var noteList = '';
        for (var i = 0, length = notes.length; i < length; i++) {
            var titleElement = document.createElement("DIV");
            $(titleElement).html(notes[i].content);
            var title = $(titleElement).text();
            noteList += noteLiHtml.replace('%title%', title.substr(0,20)+'...').replace('%createdAt%', notes[i].createdAt);
        };

        $('ul.notes-list').html(noteList);

        // add active class to open note
        $('.notes-snippet').removeClass('active');
        $('.notes-snippet').eq(noteSelected).addClass('active');
    };

    updateNoteList(notes);

    var openNote = function (noteIndex) {
        try {
            noteSelected = noteIndex;
            $('.note').html(notes[noteIndex].content);
            // add active class to open note
            $('.notes-snippet').removeClass('active');
            $('.notes-snippet').eq(noteIndex).addClass('active');
        } catch (e) {
            //ignore all errors
        }
    };

    $('body').on('click', '.notes-snippet', function () {
        openNote($(this).index());
    });

    openNote(0);

    $('.notes-options .btn-success').click ( function () {
        notes.push( {
            content: '',
            createdAt: '9/23/2014 at 11:32 PM'
        });
        updateNoteList(notes);
        openNote(notes.length-1);
        if (localStorage) localStorage.setItem('jj.notes', JSON.stringify(notes));
    });

    $('.notes-options .btn-danger').click ( function () {
        notes.splice(noteSelected, 1);
        updateNoteList(notes);
        if (notes.length)
            openNote(notes.length-1);
        if (localStorage) localStorage.setItem('jj.notes', JSON.stringify(notes));
    });

    $('.note')[0].addEventListener('input', function () {
        notes[noteSelected].content = $('.note').html();
        if (localStorage) localStorage.setItem('jj.notes', JSON.stringify(notes));
        updateNoteList(notes);
    }, false);

    $('#panel-advancedoptions').panels({
        localStorage: false, 
        sortable: false,
        toggleColors: true,
        deleteButton: false,
        toggleButton: false,
        onFullscreen: function(){
            resizeNotes($('.notes-list'), noteListHeight()+50);
            resizeNotes($('.note'), noteHeight()+50);
        }
    });

    resizeNotes($('.notes-list'), noteListHeight());
    resizeNotes($('.note'), noteHeight());
    

    $('.note').summernote({
        airMode: true
    });


});

var noteHeight = function () {
    var h = getViewPort().height;
    var tOffset = $('.note').offset().top;
    var t = h - tOffset; //removing size from top

    var f = ($('footer').height() + parseInt($('.static-content').css('margin-bottom').replace('px', '')));
    var t = t - f - 1; //removing size from bottom

    return t;
}

var noteListHeight = function () {
    var t = noteHeight() - $('.notes-options').outerHeight() - $('.notes-search').outerHeight();
    return t;
}

function resizeNotes(menu, n_height) { //change height of scroll based on sidebar viewport height
    if (menu.parent('.slimScrollDiv').size() === 1) { 
        menu.slimScroll({destroy: true});
        menu.removeAttr('style');
    }
    menu.slimscroll({height:n_height});
}


$(window).resize(function(){
    resizeNotes($('.notes-list'), noteListHeight());
    resizeNotes($('.note'), noteHeight());
});