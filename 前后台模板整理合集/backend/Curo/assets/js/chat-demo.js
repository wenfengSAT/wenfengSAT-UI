/*global $*/
//Tooltips
$('.tooltips').tooltip();

//Slimscroll Chat List
function chatListScroll() {
    "use strict";
    if ($(document).width() < 767) {
        $('.chat-list-wrapper').slimScroll({
            height: 300
        });
    } else {
        $('.chat-list-wrapper').slimScroll({
            height: 550
        });
    }
}
chatListScroll();

$(window).resize(function () {
    "use strict";
    chatListScroll();
});
//End Slimscroll Chat List

//Slimscroll Message List
$('.message-list-wrapper').slimScroll({
    height: 452,
    start: 'bottom'
});
//End Slimscroll Message List

//Chosen Tag Input
$(".chzn-select").chosen({
    width: "100%"
});
//End Chosen Tag Input